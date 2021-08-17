db.produtos.updateMany(
    { 
      $and:
      [
        { "valoresNutricionais.$[index].tipo": "sódio" },
        { "valoresNutricionais.$[index].percentual": { gt: 20, lt: 40 } },
      ],
    },
    {
        $push:
        {
            tags: { 
                $each: ["contém sódio"],
            },
        },
    },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });