import bcrypt from 'bcrypt';

import { createUser, findUserByEmail } from '../models/usersModel.js'

export function showRegisterForm(req, res) {
    res.render('register', {error: null, success: null})
}

export async function register(req, res) {
    const { email, password, confirmPassword, roles } = req.body;
    const avatar = req.file ? req.file.filename : null;

    if (!email || !password || !confirmPassword) {
        return res.render('register', {error: 'Tous les champs sont obligatoires', success: null})
    }

    if (password !== confirmPassword) {
        return res.render('register', {error: 'Les mots de passe ne corresponde pas', success: null})
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return res.render('register', {error: 'Cet email est déjà utilisé', success: null})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashedPassword, roles || 'user', avatar)
    return res.render('register', {success: 'Inscription Réussie', error: null})
}

export function showLoginForm(req, res) {
    res.render('login', {error: null, success: null})
}

export async function login(req, res) {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.render('login', {error: 'Veuillez remplir tous les champs'})
    }

    const user = await findUserByEmail(email);
    if (!user) {
        return res.render('login', {error: 'Email ou mot de passe incorrect'})
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.render('login', {error: 'Email ou mot de passe incorrect'})
    }
    res.redirect('/profil');
}