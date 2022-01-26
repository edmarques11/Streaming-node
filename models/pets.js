const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pet {
  adiciona(pet, res) {
    const query = 'INSERT INTO Pets SET ?'

    uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
      if (erro) return res.status(400).json({ erro })

      const novoPet = { nome: pet.nome, imagem: novoCaminho }

      conexao.query(query, novoPet, (erro) => {
        if (erro) {
          console.log(erro)
          return res.status(400).json(erro)
        } else {
          return res.status(201).json(novoPet)
        }
      })
    })
  }
}

module.exports = new Pet()