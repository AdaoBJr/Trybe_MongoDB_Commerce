db.produtos.updateMany({}, {
  $set: {
    valorUnitario: numberDecimal("0.00"),
  },
});
db.produtos.find({}, {
  _id: false,
  nome: true,
  valorUnitario: true,
});