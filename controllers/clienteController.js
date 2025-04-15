const clientes = [];

exports.getClientes = (req, res) => {
  res.json(clientes);
};

exports.getClienteById = (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send("Cliente não encontrado.");
  res.json(cliente);
};

exports.createCliente = (req, res) => {
  const cliente = { ...req.body, id: clientes.length + 1, telefones: [] };
  clientes.push(cliente);
  res.status(201).json(cliente);
};

exports.updateCliente = (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (!cliente) return res.status(404).send("Cliente não encontrado.");
  Object.assign(cliente, req.body);
  res.json(cliente);
};

exports.deleteCliente = (req, res) => {
  const index = clientes.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Cliente não encontrado.");
  clientes.splice(index, 1);
  res.status(204).send();
};
