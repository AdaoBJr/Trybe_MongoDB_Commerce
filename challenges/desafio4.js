db.produtos.updateMany({ 
  nome: "Big Mac" }, { $currentDate: { ultimaModificacao: { $type: "date" } } });
