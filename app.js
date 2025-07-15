import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import contactRoutes from './routes/contactRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';

const app = express();
const PORT = process.env.PORT || 5002;

app.set('view engine', 'twig');
app.set('views', './views');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.use('/upload', express.static('public/uploads'));


app.use('/contact', contactRoutes);
app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);

app.get('/profil', (req, res) => {
    res.render('profil');
});

app.get('/', (req, res) => {
    res.render('Accueil.twig');
});

app.listen(PORT, () => {
    console.log(`🚀 Le serveur tourne sur http://localhost:${PORT}`);
});
