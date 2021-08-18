db.produtos.updadeOne(
  { name: "Quarteirão com Queijo" }, { $pop: { item: -1 } },
);

db.produtos.find(
  {}, { nome: true, ingredientes: true, _id: false },
);
