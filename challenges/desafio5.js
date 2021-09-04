db.produtos.updateMany(
{ nome: { $nin: ["McChicken", "Quarteirão com Queijo"] } }, { $push: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
