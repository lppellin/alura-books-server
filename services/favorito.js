const fs = require("fs")

function getFavoritosTodos() {
    return JSON.parse(fs.readFileSync("./favoritos.json"))
}

function deletaFavoritoId(id) {
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"))
    const favoritosFiltradosId = favoritos.filter(livro => livro.id !== id)
    fs.writeFileSync("./favoritos.json", JSON.stringify(favoritosFiltradosId))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"))

    const novoLivroFavorito = livros.find(livro => livro.id === id)
    const novaListaFavoritos = [...favoritos, novoLivroFavorito]
    fs.writeFileSync("./favoritos.json", JSON.stringify(novaListaFavoritos))
}

module.exports = {
    getFavoritosTodos,
    deletaFavoritoId,
    insereFavorito
}