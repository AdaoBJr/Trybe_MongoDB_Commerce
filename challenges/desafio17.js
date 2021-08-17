// Resolução encontada no link https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/#:~:text=The%20default%20language%20for%20the,the%20languages%20available%20for%20default_language%20.

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });
