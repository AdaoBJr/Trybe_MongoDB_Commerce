db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: {
    tipo: "sódio", percentual: { $gt: 40 } } } },
      { $push:
         {
          tags: {
            $each: ["muito sódio"],

          },
        },

      },
);

db.produtos.find({}, { nome: true, _id: false, tags: true });