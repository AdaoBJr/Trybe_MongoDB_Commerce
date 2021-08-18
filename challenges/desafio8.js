const { RuleTester } = require("eslint");

db.produtos.updadeOne(
  { name: "Quarteirão com Queijo" }, { $pop: { item: -1 } },
);

db.produtos.find(
  {}, { nome: true, ingredientes: RuleTester, _id: false }
);
