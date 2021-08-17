db.produtos.updateMany(
  {},
  { $push: {
    "valoresNutricionais.$[elemento].percentual": {
      $each: [], $sort: -1,
    },
  } }, 
  { arrayFilters: [{ "elemento.percentual": { $exists: true } }] },
);
