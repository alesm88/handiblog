import express from 'express';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { verifyToken } from '../middleware/authMiddleware.js'
import { register, login, verifyAccount } from '../controllers/usersController.js';

const router = express.Router();

//  Route protégée pour utilisateurs connectés
router.get('/profile', verifyToken, (req, res) => {
    res.send('Bienvenue sur ton profile');
});

//  Route uniquement accessible aux administrateurs
router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Bienvenue admin' });
});

router.post('/register', register);
router.get('/verify/:token', verifyAccount);
router.post('/login', login);

export default router