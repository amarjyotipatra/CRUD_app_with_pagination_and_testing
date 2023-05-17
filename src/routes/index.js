const express = require("express");
const Controller= require('../controller')
const router = express.Router();

// To add/create a data, api is POST /items
//User have to enter all required params in req.body
router.post("/items",Controller.createData)

// To get all data, api is GET /items
router.get("/items",Controller.getAllData )

//To get a particular data,GET /item/:id
router.get("/items/:id",Controller.getAData);

//TO Update a particular data,api is PATCH  /item/:id
//User has to enter new first_name,last_name,email,gender in the req.body to update the data
router.patch("/items/:id",Controller.updateData)

//To DELETE any particular data,user has to enter its id in the params
router.delete("/items/:id",Controller.deleteData)

module.exports = router;
