/* $unset => o operador deleta um campo particular, neste caso, o número de curtidas
do item Big Mac. */

db.produtos.updateMany(
  { nome: { $regex: /big\smac/i } },
  { $unset: { curtidas: "" } },
);

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });