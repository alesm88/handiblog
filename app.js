import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import contactRoutes from './routes/contactRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'

const app = express();
const PORT = process.env.PORT || 5002;

app.set('view engine', 'twig'); // On indique à Express qu'on utilise Twig comme moteur de vues (ou template)
app.set('views', './views'); // Dossier où se trouvent les fichiers Twig

// Un Middleware pour parser les crops des requêtes HTTP au format JSON (comme body-parser)
app.use(express.json());
app.use('upload', express.static('public/uploads'));

// Middleware pour parser les données de formulaire (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Déclare la route /auteurs en utilisant les routes définies dans auteurRoutes
app.use('/contact', contactRoutes);
app.use('/users', usersRoutes);
// app.use('/articles', articlesRoutes);
// app.use('/categories', categoriesRoutes);

app.get('/profil', (req, res) => {
    res.render('profil');
});

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
})