const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

  const tiposValidos = ['jpg', 'png', 'jpeg']
  const tipo = path.extname(caminho)
  const tipoEhValido = tiposValidos.includes(tipo.substring(1))

  if (!tipoEhValido) {
    const erro = 'Tipo é inválido!'
    callbackImagemCriada(erro)
    return
  }

  const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(null, novoCaminho))
}
