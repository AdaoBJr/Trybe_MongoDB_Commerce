db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: { percentual: { $gte: 40 }, tipo: "sódio" } } }, {
    $push: { tags: "muito sódio" },
  });

db.produtos.find({}, { _id: 0, tags: 1, nome: 1 });