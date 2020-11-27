const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/Controller.js");

router.post("/livro/cadastrar", LivroController.cadastrarLivro);
router.get("/livro/listar", LivroController.listarLivros);

module.exports = router;