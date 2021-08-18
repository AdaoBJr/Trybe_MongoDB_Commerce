// https://docs.mongodb.com/manual/reference/operator/update/currentDate/
db.produtos.updateOne(
  { nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } }, { nome: true, _id: false },
);
