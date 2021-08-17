// Adiciona o campo avaliacao em todos os documentos da coleção e efetua alterações

// inclua o campo avaliacao
db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);
// incrementa no campo avaliacao(+5), tipo bovino
db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5 } },
);
// incrementa no campo avaliacao(+3), tipo ave
db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3 } },
);
// resultado
db.produtos.find(
  {},
  { nome: 1, avaliacao: 1, _id: 0 },
).pretty(); 
