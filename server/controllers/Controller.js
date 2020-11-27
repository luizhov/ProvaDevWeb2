const emprestimo = require("../models/emprestimoDeLivro.js");
const livro = require("../models/Livro.js");
const cliente = require("../models/Cliente.js");

class LivroController{
  //Livro
    async cadastrarLivro(req,res){
        try{
          
          var result = await livro.create(req.body);
          res.status(200).json(result);

        }catch(error){
          console.log(error);
          res.status(500).json(error);
        }
    }

    async listarLivros(req,res){
      try{
        
       var result =  await livro.find({"Status":"DISPONÍVEL"});
        res.status(200).json(result);

      }catch(error){
        console.log(error);
        res.status(500).json(error);
      }
  }

}
module.exports = new LivroController();