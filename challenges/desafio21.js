db.monthlyBudget.find({ $expr: { $gt: ["$curtidas", "$vendidos"] } }, { _id: 0, nome: 1 });
