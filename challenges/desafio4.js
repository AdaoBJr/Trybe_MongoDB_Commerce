db.produtos.updateOne(
    { nome: { $eq: "Big Mac" } },
    {
      $set: { ultimaModificacao: ISODate("2013-10-02T01:11:18.965Z") },
    },
  );

db.produtos.updateOne(
    { nome: { $eq: "Big Mac" } },
    { $currentDate: {
        ultimaModificacao: true,
        "cancellation.date": { $type: "date" },
      },
    },
  );

db.produtos.find(
    { ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 },
  ); 
