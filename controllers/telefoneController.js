const telefones = [];

exports.getTelefones = (req, res) => {
  res.json(telefones);
};

exports.getTelefoneById = (req, res) => {
  const telefone = telefones.find(t => t.id === parseInt(req.params.id));
  if (!telefone) return res.status(404).send("Telefone não encontrado.");
  res.json(telefone);
};

exports.createTelefone = (req, res) => {
  const telefone = { ...req.body, id: telefones.length + 1 };
  telefones.push(telefone);
  res.status(201).json(telefone);
};

exports.updateTelefone = (req, res) => {
  const telefone = telefones.find(t => t.id === parseInt(req.params.id));
  if (!telefone) return res.status(404).send("Telefone não encontrado.");
  Object.assign(telefone, req.body);
  res.json(telefone);
};

exports.deleteTelefone = (req, res) => {
  const index = telefones.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Telefone não encontrado.");
  telefones.splice(index, 1);
  res.status(204).send();
};
