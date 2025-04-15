const express = require("express");
const router = express.Router();
const telefoneController = require("../controllers/telefoneController");

router.get("/", telefoneController.getTelefones);
router.get("/:id", telefoneController.getTelefoneById);
router.post("/", telefoneController.createTelefone);
router.put("/:id", telefoneController.updateTelefone);
router.delete("/:id", telefoneController.deleteTelefone);

module.exports = router;
