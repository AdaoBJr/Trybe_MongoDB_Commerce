db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });

// reference: https://stackoverflow.com/questions/30375262/mongodb-update-with-sort
