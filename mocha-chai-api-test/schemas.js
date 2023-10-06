const listOfAllProducts = {
  type: "array",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    data: {
      type: "array",
      properties: {
        color: { type: "string" },
        capacity: { type: "string" },
      },
    },
  },
  required: ["id", "name", "data"],
};

const singleProduct = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    data: {
      type: "object",
      properties: {
        year: { type: "number" },
        price: { type: "number" },
        "CPU model": { type: "string" },
        "Hard disk size": { type: "string" },
      },
    },
  },
  required: ["id", "name", "data"],
};

const addProduct = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    data: {
      type: "object",
      properties: {
        year: { type: "number" },
        price: { type: "number" },
        "CPU model": { type: "string" },
        "Hard disk size": { type: "string" },
      },
    },
    createdAt: { type: "string" },
  },
  required: ["id", "name", "data", "createdAt"],
};

const updateProduct = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    data: {
      type: "object",
      properties: {
        year: { type: "number" },
        price: { type: "number" },
        "CPU model": { type: "string" },
        "Hard disk size": { type: "string" },
        color: { type: "string" },
      },
    },
    UpdateAt: { type: "string" },
  },
};

const deleteProduct = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
};

module.exports = {
  listOfAllProducts,
  singleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
