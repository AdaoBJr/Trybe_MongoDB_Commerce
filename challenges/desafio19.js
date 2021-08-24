/*
  19 - Renomeie o campo descricao para descricaoSite em todos os documentos.

  19.1 - Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.
*/

/*
  19.2 - Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.
*/
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    descricao: 1,
    descricaoSite: 1,
  },
);