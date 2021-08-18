db.produtos.updateMany({ nome: "Big Mac" }, { $inc: { "vendasPorDia.2": 60 } });
db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.5": 120 } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
