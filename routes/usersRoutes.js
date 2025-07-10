import express from 'express';
import { showRegisterForm, register, showLoginForm, login  } from '../controllers/usersController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/register', showRegisterForm);
router.post('/register', upload.single('avatar'), register);

router.get('/login', showLoginForm);
router.post('/login', login);

export default router