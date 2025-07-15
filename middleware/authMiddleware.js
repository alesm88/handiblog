import jwt from 'jsonwebtoken';
// commande terminal pour l'installer : npm install jsonwebtoken

import dotenv from 'dotenv';
dotenv.config();

// Middleware d'authentification : on va vérifier su le token jwt est présent et valide 
export const verifyToken = (req, res, next) => {
    // Ici on récupere le header "authorisation de la requete"
    const authHeader = req.headers.authorization;

    // Erreur 401 si aucun token fourni
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.status(401).json({ message: 'Token requis ou mal formé.' });
}
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //   return res.redirect('/notre future page login twig');
    // }
    
    // Le header a normalement cette forme : "Bearer <token>", donc on récupère la 2e partie (le token)
    const token = authHeader.split(' ')[1];

    // Vérifie la validité du token en utilisant la clé secrète (stockée dans .env)
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // Si le token est invalide ou expiré, renvoyer une erreur 403 (accès refusé)
    if (err) return res.status(403).json({ message: 'Token invalide.' });

    // Si tout est OK, on stocke les infos du token (décodées) dans req.user
    req.user = decoded;

    // Passe au middleware ou route suivante
    next();
  }); 

    
}
