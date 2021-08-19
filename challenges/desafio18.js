//  query 1:
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

// query 2:
db.produtos.count(
  { $text: 
    { $search: "\"feito com\"" },
  },
);
// nem mexi aqui, por que não passou?
