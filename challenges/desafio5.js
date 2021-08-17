db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "Ketchup" } },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);
