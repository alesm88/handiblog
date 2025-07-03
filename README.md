# 🧠 Handiblog

**Projet** : Plateforme de lutte contre l'injustice liée au handicap  
**Client** : Mohamed  

## 📝 Description

Handiblog est une plateforme web inclusive dédiée à la **sensibilisation** et à la **promotion des outils numériques adaptés aux personnes en situation de handicap**. Le site propose un espace ouvert à toutes les formes de handicap et encourage le **partage d'informations**, la **publication d’articles**, et la **diffusion de ressources accessibles**.

## 🎯 Objectifs

- Promouvoir l’usage des outils numériques adaptés aux personnes en situation de handicap.
- Sensibiliser le grand public aux enjeux du handicap et aux solutions existantes.
- Offrir un espace d'expression et de partage à toute personne concernée ou intéressée.

## 🚀 Fonctionnalités principales

- ✅ **Publication d’articles** : Les utilisateurs authentifiés peuvent rédiger et publier librement.
- ✅ **Lecture libre** : Les articles sont accessibles à tous les visiteurs, sans inscription.
- ✅ **Modération & administration** :
  - Suppression de comptes
  - Modération de contenus
  - Demande de reformulation en cas de propos inappropriés

## 🔧 Fonctionnalités à développer

- 🔐 Connexion / Authentification
- 🆕 Création de compte
- 📢 Ajout et modification d’annonces liées aux outils et services adaptés
- 📰 Newsletter : abonnement pour suivre l'actualité du site
- 🧩 Formulaire de contact pour associations : faciliter les échanges et partenariats

## 👥 Équipe projet

- **Jonathan** : Chef de projet / Documentaliste  
- **Damien** : Développeur Back-End  
- **Alejandro** : Développeur Back-End  
- **Nini** : Développeuse Front-End  
- **Thomas** : Développeur Front-End  
- **David** : Membre du projet

## 💻 Dépôt Git

📁 [https://github.com/alesm88/handiblog](https://github.com/alesm88/handiblog)

## 🎨 Front-End

- **Maquettes Figma** :  
  [https://www.figma.com/design/bTLFeVnXXxLDzKORN8fWs3/handiblog?node-id=0-1&p=f](https://www.figma.com/design/bTLFeVnXXxLDzKORN8fWs3/handiblog?node-id=0-1&p=f)

- **Technologies** :
  - HTML via Twig
  - CSS : *(à préciser)*
  - Framework / Librairies : *(à compléter si nécessaire)*

## 🛠️ Back-End

- **Langage** : JavaScript (ES6+) avec `type: module`
- **Serveur** : Node.js avec **Express 5**
- **Rendu HTML** : via le moteur de template **Twig**
- **Base de données** : **MySQL** (connexion via `mysql2`)
- **Gestion des sessions** : `express-session`
- **Sécurité des mots de passe** : `bcrypt`
- **Upload de fichiers** : `multer`
- **Environnement** : Variables via `dotenv`
- **Développement** : Redémarrage auto avec `nodemon`
- **Diagramme de base de données** : conçu avec [dbdiagram.io](https://dbdiagram.io)

## ⚙️ Installation

### Prérequis

- Node.js (v18 ou supérieur recommandé)
- MySQL (serveur local ou distant)
- Git

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/alesm88/handiblog.git
cd handiblog

# 2. Initialiser le projet Node.js (si ce n'est pas déjà fait)
npm init -y

# 3. Installer les dépendances
npm install express@5.1.0
npm install mysql2
npm install dotenv
npm install express-session
npm install bcrypt
npm install multer
npm install twig
npm install cors

# 4. Installer les dépendances de développement
npm install --save-dev nodemon

# 5. Créer le fichier .env
cp .env.example .env
# Remplir ensuite les variables d’environnement (voir Discord / Alejandro)

# 6. Démarrer le serveur en mode développement
npm run dev

# (ou en mode production)
npm start

