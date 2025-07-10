import { error } from '@splidejs/splide/src/js/utils';
import * as Articles from '../models/articlesModel.js'

export async function listArticles(req, res) {
    try {
        const [articles] = await Articles.getAllArticles()
        // res.render(`articles`, {articles}) // Pour montrer dans un vue en HTML
        res.status(200).json(articles) // Pour montrer dans un API, sur Postman
    } catch (error) {
        console.log(err);
        res.status(500).send('Erreur de serveur')        
    }
}

export async function addArticle(req, res) {
        const {titre, categories_id, description, contenu} = req.body
    try {
        await Articles.createArticles(titre, categories_id, description, contenu);
        res.status(201).send('Article créé avec succès')
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur')  
    }
}

export async function putArticle(req, res) {
    const { id } = req.params;
    const { categories_id, titre, description, contenu } = req.body
    try {
        await Articles.modifyArticle(id, categories_id, titre, description, contenu)

        res.status(201).send('Article modifié avec succès')
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur')
    }
}

export async function deleteArticle(req, res) {
    const { id } = req.params;
    const { categories_id, titre, description, contenu } = req.body
    try {
        await Articles.deleteArticles(id, categories_id, titre, description, contenu)
    
        res.status(201).send('Article supprimé avec succès')
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur')
    }
}

export async function getArticleById(req, res) {
    const { id } = req.params
    try {
        const [rows] = await Articles.getArticleById(id)
        if (!rows.length) return res.status(404).json({ error: "Article non trouvé" });
        res.json(rows[0]);
    } catch (err) {
        console.error(err);  
        res.status(500).send('Erreur serveur')
    }
}