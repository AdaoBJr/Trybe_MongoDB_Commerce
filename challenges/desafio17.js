db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
// default_language source:
// https://mindmajix.com/mongodb-create-index#options
// https://github.com/tryber/sd-09-mongodb-commerce/pull/2/files?file-filters%5B%5D=.bson&file-filters%5B%5D=.js

db.produtos.count({ $text: {
    $search: "frango hamburguer",
    $language: "portuguese",
  } });
