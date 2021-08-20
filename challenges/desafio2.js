db.produtos.updateMany(
    { $set: { valoUnitario: NumberDecimal("0.00") } },
);

db.produtos.find(
    {}, 
    { nome: 1, valorUnitario: 1 }, 
);
