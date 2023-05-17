describe("GET /items", () => {
    it("should return all items", async () => {
      const res = await request(app).get("/items");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
  describe("GET /items/:id", () => {
    it("should return a item", async () => {
      const res = await request(app).get(
        "/items/10"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.first_name).toBe("Product 1");
    });
  });
  
  describe("POST /items", () => {
    it("should create a item", async () => {
      const res = await request(app).post("/items").send({
        id:101,
        first_name: "Anything",
        last_name:"anyone",
        email:"tugrp@example.com",
        gender:"male",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.first_name).toBe("Anything");
    });
  });
  
  describe("PATCH /items/:id", () => {
    it("should update a item", async () => {
      const res = await request(app)
        .patch("/items/50")
        .send({
            first_name: "Anything",
            last_name:"anyone",
            email:"tugrp@example.com",
            gender:"male",
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.id).toBe(50);
    });
  });
  
  describe("DELETE /items/:id", () => {
    it("should delete a item", async () => {
      const res = await request(app).delete(
        "/items/10"
      );
      expect(res.statusCode).toBe(200);
    });
  });