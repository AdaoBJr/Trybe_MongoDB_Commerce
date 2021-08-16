db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: {
    tipo: "sódio", percentual: { $gt: 20, $lt: 40 } } } },
      { $push:
         {
          tags: {
            $each: ["contém sódio"],

          },
        },

      },
);

db.produtos.find({},
  { nome: true, _id: false, tags: true });