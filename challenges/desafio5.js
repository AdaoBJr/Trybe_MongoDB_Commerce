// query 1:
db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $push: 
    { ingredientes: "ketchup" },
  },
);

// query 2:
db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);
