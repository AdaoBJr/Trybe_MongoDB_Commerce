// https://docs.mongodb.com/manual/reference/operator/update/pop/
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);
// There is no straight way to do it with other index values

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
