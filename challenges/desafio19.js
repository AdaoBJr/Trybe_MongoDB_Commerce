db.fruits.updateAll(
    { },
    { $rename: {
        descricao: "descricaoSite",
      },
    },
  );
