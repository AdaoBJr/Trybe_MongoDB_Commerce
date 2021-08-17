db.produtos.update(
  {},
  {
    $set: { valorUnitario: NumberDecimal("0.00") },
  },
  true,
  true,
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, valorUnitario: 1 },
);