import express, { Router } from 'express'
import { listArticles, addArticle, deleteArticle, putArticle, getArticleById } from '../controllers/articlesController.js'


const router = express.Router()

router.get('/' , listArticles)

router.post('/' , addArticle)
router.delete('/:id' , deleteArticle)
router.put('/:id', putArticle)
router.get('/:id', getArticleById)

export default router;