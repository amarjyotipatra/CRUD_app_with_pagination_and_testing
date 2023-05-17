const { statusCode }=require('http-status-code')
const data=require('../../MOCK_DATA.json')

//Function to create a data
function createData(req,res){
    try {
        if({id,first_name,last_name,email,gender}==req.body){
            data.push(req.body)
            res.json({message:"Item added successfully"})
        }else{
            res.json({
                message:"id,first_name,last_name,email,gender all are required"
            })
        }
        
    } catch (error) {
        res.json({
            message:error,
        })
    }
}
//Function to get all data
function getAllData(req,res){
    try {
        //implementing pagination
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize;
        const start = (page - 1) * pageSize
        const end = page * pageSize;
        //implementing sorting based on first_name
        const sort = req.query.sort;
       
        if(page && pageSize){
            const filteredData = data.slice(start,end);
            res.json(filteredData)
        }else if(sort){
            //implemented sorting
            res.json(data.sort((a,b)=>(a.first_name > b.first_name)? 1 :
             ((b.first_name > a.first_name) ? -1 : 0)))
        }
        else{
            res.json(data)
        }
    } catch (error) {
        res.status(statusCode.NOT_FOUND).json({message:"Something went wrong"})
    }
}

//Function to get a particular data
function getAData(req,res){
    try {
        const id = req.params.id;
        const item = data.find((item) => item.id == id);
        if (item) {
          res.json(item);
        } else {
          res.status(statusCode.NOT_FOUND).json({
            message: "Item not found",
          });
        } 
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({
            message: error,
          });
    }
}

//Function to update a data
function updateData(req,res){
    try {
        const id = req.params.id;
        const item = data.find((item) => item.id == id);
        if (item) {
          const { first_name, last_name, email, gender } = req.body;
          item.first_name = first_name;
          item.last_name = last_name;
          item.email = email;
          item.gender = gender;
          res.json(item);
        } else {
          res.json({
            message: "Item couldn't be updated",
          });
        }
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:error
        })
    }
}

//Function to delete a data
function deleteData(req,res){
    try {
        const id = req.params.id;
  const item = data.find((item) => item.id == id);
  if (item) {
    data.splice(data.indexOf(item), 1);
    res.json({
      message: "Item deleted successfully",
    });
  } else {
    res.json({
      message: "Item not found",
    });
  }
    } catch (error) {
        res.status(statusCode.BAD_REQUEST).json({
            message:error
        })
    }
}

module.exports={
    createData,
    getAllData,
    getAData,
    updateData,
    deleteData,
}
