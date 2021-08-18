db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find(
 {}, { nome: true, tag: true, _id:false }
);
