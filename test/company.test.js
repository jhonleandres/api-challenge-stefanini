test("GET /empresa", async () => {
    await supertest(app).get("/empresa")
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);
    });
});