// Estava tentando resolver com ArrayFilters, mas após consultar o trabalho de alguns colegas percebi que o melhor método é via $elemMatch

db.produtos.updateMany({ valoresNutricionais: { $elemMatch: { tipo: "sódio",
  percentual: { $gte: 40 } } } }, { $push: { tags: "muito sódio" } });

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
