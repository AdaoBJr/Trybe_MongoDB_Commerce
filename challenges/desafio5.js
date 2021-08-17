db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "Ketchup" } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
