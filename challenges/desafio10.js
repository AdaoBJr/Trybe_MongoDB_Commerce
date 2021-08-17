// Adiciona a quantidade de vendas dos sanduíches por dia da semana.

// array dias da semana
db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);
// vendas de Big Mac às quartas-feiras(posição 4)
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);
// vendas de sanduíches de carne e pão aos sábados(posição 7)
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
// retorno
db.produtos.find(
  {},
  { nome: 1, vendasPorDia: 1, _id: 0 },
).pretty();
