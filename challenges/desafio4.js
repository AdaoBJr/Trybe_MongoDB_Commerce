db.produtos.updateOne({ nome: "Big Mac" }, {
  $currentDate: { type: true, ultimaModificacao: true },
});
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
