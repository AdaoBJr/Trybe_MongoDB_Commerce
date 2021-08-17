db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, { $set: { "ingredientes.3": 60 } });

db.produtos
    .updateMany({
        $and: [{ "ingredientes.tags": "bovino" }, { "ingredientes.tags": "pão" }] },
        { $set: { "ingredientes.6": 120 } });

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });
