//  query 1:
// https://docs.mongodb.com/manual/core/index-text/
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

// query 2:
db.produtos.count(
  { $text: 
    { $search: "frango hamburguer" },
  },
);
