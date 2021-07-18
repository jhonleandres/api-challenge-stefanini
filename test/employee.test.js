test("GET /funcionarios", async () => {  
    await supertest(app).get("/funcionarios")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
      });
  });