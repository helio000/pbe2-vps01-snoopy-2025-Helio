const pedidos = [];

exports.getPedidos = (req, res) => {
  res.json(pedidos);
};

exports.getPedidoById = (req, res) => {
  const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
  if (!pedido) return res.status(404).send("Pedido não encontrado.");
  res.json(pedido);
};

exports.createPedido = (req, res) => {
  const pedido = {
    ...req.body,
    id: pedidos.length + 1,
    subTotal: req.body.qtd * req.body.preco
  };
  pedidos.push(pedido);
  res.status(201).json(pedido);
};

exports.updatePedido = (req, res) => {
  const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
  if (!pedido) return res.status(404).send("Pedido não encontrado.");
  Object.assign(pedido, req.body);
  pedido.subTotal = pedido.qtd * pedido.preco;
  res.json(pedido);
};

exports.deletePedido = (req, res) => {
  const index = pedidos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Pedido não encontrado.");
  pedidos.splice(index, 1);
  res.status(204).send();
};
