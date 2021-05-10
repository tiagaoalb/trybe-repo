db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate('2020-01-01') } } },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente',
    },
  },
  { $unwind: '$dadosCliente' },
  { $group: { _id: '$dadosCliente.endereco.uf', totalVendas: { $sum: 1 } } },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, uf: '$_id', totalVendas: 1 } },
]);
