db.produtos.updateMany(
    { "valoresNutricionais.percentual": 45 },
    {
        $push:
        {
            tags: { 
                $each: ["muito sódio"],
            },
        },
    },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
