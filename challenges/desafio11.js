// Insere 'combo' e 'tasty' no array tags dos sanduíches e deixa os elementos em ordem alfabética ascendente.

db.produtos.updateMany(
  {},
  { $push: { tags: {
    $each: ["combo", "tasty"],
    $sort: 1,
  } } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
).pretty();
