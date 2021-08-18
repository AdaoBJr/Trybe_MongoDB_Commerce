db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: "muito sódio" } },
);

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);
