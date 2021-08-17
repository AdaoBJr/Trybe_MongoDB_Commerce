// https://docs.mongodb.com/v4.0/reference/method/db.collection.createIndex/
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer" },
    },
);
