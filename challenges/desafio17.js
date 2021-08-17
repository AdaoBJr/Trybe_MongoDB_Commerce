// Quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
// Quantidade de documentos que contêm as palavras frango e hamburguer
db.produtos.find(
  { $text: { $search: "frango hamburguer" } },
).count();
