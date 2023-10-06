const request = require("supertest")("https://api.restful-api.dev");
const chai = require("chai");
const chaiJsonSchema = require("chai-json-schema");
const schemas = require("./schemas");

chai.use(chaiJsonSchema);
const expect = chai.expect;

describe("Testing RESTful API at https://restful-api.dev", function () {
  it("TC01_Get mengambil list produk ", async function () {
    const res = await request.get("/objects");
    expect(res.body).have.jsonSchema(schemas.listOfAllProducts);
    expect(res.status).to.equal(200);
  });

  it("TC02_Get mengambil list produk by ids", async function () {
    const res = await request.get("/objects?id=4&id=5&id=10");
    const ids = res.body.map((item) => item.id);
    expect(res.body).have.jsonSchema(schemas.listOfAllProducts);
    expect(res.status).to.equal(200);
    expect(ids).to.include("4");
    expect(ids).to.include("5");
    expect(ids).to.include("10");
  });

  it("TC03_Get mengambil data produk ", async function () {
    const res = await request.get("/objects/7");
    expect(res.body).have.jsonSchema(schemas.singleProduct);
    expect(res.status).to.equal(200);
    expect(res.body.id).to.include("7");
  });

  it("TC04_Post membuat data baru produk", async function () {
    const res = await request.post("/objects").send({
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    console.log(res.body);
    expect(res.body).have.jsonSchema(schemas.addProduct);
    expect(res.status).to.equal(200);
  });

  it("TC05_Put melakukan update pada data produk", async function () {
    let newId = "ff8081818ad150c5018b05575cd6345e";
    const res = await request.put("/objects/" + newId).send({
      name: "Apple MacBook Pro 17",
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        color: "silver",
      },
    });
    expect(res.body).have.jsonSchema(schemas.updateProduct);
    expect(res.status).to.equal(200);
    expect(res.body.id).to.include(newId);
  });

  it("TC06_Patch melakukan update data pada field data produk", async function () {
    let newId = "ff8081818ad150c5018b05575cd6345e";
    const res = await request.patch("/objects/" + newId).send({
      name: "Apple MacBook Pro 16 (Updated Name)",
    });
    expect(res.body).have.jsonSchema(schemas.updateProduct);
    expect(res.status).to.equal(200);
    expect(res.body.id).to.include(newId);
    expect(res.body.name).to.include("Apple MacBook Pro 16 (Updated Name)");
  });

  it("TC07_Delete melakukan delete pada data produk", async function () {
    let delId = "ff8081818ad150c5018b0561e161346d";
    const res = await request.del("/objects/" + delId);
    expect(res.body).have.jsonSchema(schemas.deleteProduct);
    expect(res.status).to.equal(200);
  });
});
