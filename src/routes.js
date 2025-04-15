const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop' });
});

module.exports = routes;