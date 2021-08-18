db.produtos.updateOne(
  { nome: "Cheddar McMelt"}, { $pop: { item: 1 } },
);

db.produtos.find(
  {}, { nome: true, ingredientes: true, _id: false },
);
