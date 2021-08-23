/*
  17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.

  17.1 - Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.
*/
/*
  Material consultado sobre como especificar uma linguagem ao criar um índice do tipo text:
  https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/#specify-the-default-language-for-a-text-index
*/
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

/*
  17.2 - Crie uma query que retorne a quantidade de documentos que contêm as palavras frango e hamburguer utilizando o operador $text.
*/