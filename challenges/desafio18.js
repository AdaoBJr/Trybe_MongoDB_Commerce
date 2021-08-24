/*
  18 - Conte quantos documentos contêm a expressão 'feito com' utilizando o operador $text.

  18.1 - Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.
*/
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

/*
  18.2 - Crie uma query que retorne a quantidade de documentos que contêm a expressão 'feito com' utilizando o operador $text.
*/
