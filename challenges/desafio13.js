db.produtos.updateMany(
  { $and: [
    { valoresNutricionais: { $elemMatch:
    { tipo: "sódio", percentual: { $gt: 40 } } } },
    // {valoresNutricionais: {$elemMatch:{percentual:{$gt: 40}}}}
  ] },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },  
);
