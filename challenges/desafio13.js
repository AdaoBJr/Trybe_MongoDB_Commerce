db.produtos.updateMany({
  "valoresNutricionais.[$el].percentual": {
    $gte: 40,
  },
}, {
  $push: {
    tags: "muito sódio",
  },
}, {
  arrayFilters: [{
    "valoresNutricionais.tipo": "sódio",
  }],
});
db.produtos.find({}, {
  nome: 1,
  tags: 1,
  _id: 0,
});
