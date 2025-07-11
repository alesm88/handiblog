import express from 'express';
import { register, login, verifyAccount  } from '../controllers/usersController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/register', register);
router.get('/verify/:token', verifyAccount);
router.post('/login', login);

export default router