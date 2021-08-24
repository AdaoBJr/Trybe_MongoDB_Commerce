/*
  16 - Conte quantos produtos têm 4 ingredientes.
*/
/*
  Material consultado sobre $size
  https://docs.mongodb.com/manual/reference/operator/query/size/
*/
db.produtos.count(
  {
    ingredientes: {
      $size: 4,
    },
  },
);