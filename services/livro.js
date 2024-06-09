const fs = require("fs")

function getLivrosTodos() {
    return JSON.parse(fs.readFileSync("./livros.json"))
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"))

    const listaLivros = [...livros, livroNovo]

    fs.writeFileSync("./livros.json", JSON.stringify(listaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("./livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livros = JSON.parse(fs.readFileSync("./livros.json"))

    const indexLivroId = livros.findIndex(livro => livro.id === id)

    livros.splice(indexLivroId, 1)

    fs.writeFileSync("./livros.json", JSON.stringify(livros))

}

module.exports = {
    getLivrosTodos,
    getLivroId,
    insereLivro,
    modificaLivro,
    deletaLivro
}