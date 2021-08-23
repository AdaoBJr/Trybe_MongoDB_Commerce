/*
  13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.

  13.1 - Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
*/
/*
  Material consultado sobre arrays que contenham subdocumentos e se deseja especificar vários campos desses subdocumentos como filtro:
  https://docs.mongodb.com/manual/tutorial/query-array-of-documents/#a-single-nested-document-meets-multiple-query-conditions-on-nested-fields
*/
db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

/*
  13.2 - Crie uma query que retorne o nome e tags de todos os documentos.
*/
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
);