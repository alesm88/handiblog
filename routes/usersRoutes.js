import express from 'express';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { verifyToken } from '../middleware/authMiddleware.js'
import { register, login, verifyAccount, showLoginForm, showRegisterForm } from '../controllers/usersController.js';

const router = express.Router();


router.get('/profile', verifyToken, (req, res) => {
    res.send('Bienvenue sur ton profile');
});


router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Bienvenue admin' });
});

router.post('/register', register);
router.get('/verify/:token', verifyAccount);


router.get('/login', showLoginForm);
router.post('/login', login);


router.get('/register', showRegisterForm);
router.post('/register', register);



export default router