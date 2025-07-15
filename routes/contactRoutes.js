import express from 'express';
import { listContact, effaceContact, addContact, trouveContactParEmail } from '../controllers/contactController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/montrer', listContact);
router.post('/ajouter', addContact);
router.post('/chercherParMail', trouveContactParEmail);
router.delete('/effacer/:id', effaceContact); // Il faut ajouter le "/:id" car en le envoi comme parametre...

export default router