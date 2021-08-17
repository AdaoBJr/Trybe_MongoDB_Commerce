db.produtos.updateMany(
    {},
    { $set: { valorUnitario: NumberDecimal("0.00") } },
    { upset: false },
);

db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });
