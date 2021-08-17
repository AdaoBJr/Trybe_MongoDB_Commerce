// https://docs.mongodb.com/manual/reference/operator/query/regex/
db.produtos.count({ nome: { $regex: /mc/i } });
