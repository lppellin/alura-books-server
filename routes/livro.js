const { Router } = require("express")
const { getLivros, postLivro, getLivro, patchLivro, deleteLivro } = require("../controllers/livro")

const router = Router()
router.get('/', getLivros)
router.get('/:id', getLivro)
router.post('/', postLivro)
router.patch('/:id', patchLivro)
router.delete('/:id', deleteLivro)

module.exports = router