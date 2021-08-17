db.produtos.createIndex({ ingredientes: "text" }, { default_language: "portuguese" });
db.produtos.count({ $text: { $search: "hamburguer" } });

