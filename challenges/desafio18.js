db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
db.produtos.find(
  { $text: { $search: "\"feito com\"" } },
).count();