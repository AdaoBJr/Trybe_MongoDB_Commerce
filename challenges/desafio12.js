/*
  12 - Ordene em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente.

  12.1 - Crie uma query que faça em todos os documentos a ordenação dos elementos do array valoresNutricionais pelo campo percentual de forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador $each.
*/
/*
  Material consultado sobre como ordenar sem adicionar nenhum elemento.
  https://docs.mongodb.com/manual/reference/operator/update/sort/#update-array-using-sort-only
*/
db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: {
          percentual: -1,
        },
      },
    },
  },
);

/*
  12.2 - Crie uma query que retorne o nome e valoresNutricionais de todos os documentos.
*/