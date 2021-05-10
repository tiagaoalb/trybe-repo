db.clientes.aggregate([
  {
    $group: { _id: { sexo: '$sexo', uf: '$endereco.uf' }, total: { $sum: 1 } },
  },
]);
