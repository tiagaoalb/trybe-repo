db.vendas.aggregate([
  {
    $match: {
      dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-01') },
    },
  },
  { $group: { _id: '$clienteId', totalClientes: { $sum: 1 } } },
  { $match: { totalClientes: { $lt: 3 } } },
  { $count: 'clientes' },
]);
