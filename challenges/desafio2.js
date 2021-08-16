db.produtos.updateMany(
  { valorUnitario: { $exists: false } }, { $set: { valorUnitario: NumberDecial("0.00") } },
  );
db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });
