db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
db.produtos.count(
  {
    $text: {
      $search: "frango hamburguer",
    },
  },
);

// referências:
// https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#examples
// https://docs.mongodb.com/manual/reference/text-search-languages/#std-label-text-search-languages
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/#std-label-specify-language-field-text-index-example
