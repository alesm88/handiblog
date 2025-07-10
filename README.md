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
- **David** : Développeur Front-End  

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

## ⚙️ Commande Git 

## 🧰 Commandes Git utiles pour débutants

---

### 🔄 Récupérer les dernières modifications du dépôt distant

```bash
git pull origin main
```

Exemple : je suis sur ma branche `Jondo`, je fais :

```bash
git pull origin main
```

➡️ Cela permet de récupérer les dernières modifications de la branche `main` (sur GitHub ou un autre dépôt distant) et de les fusionner dans ma branche actuelle.

---

### 🔀 Fusionner une autre branche dans la branche actuelle

```bash
git merge nom-de-la-branche
```

Exemple : je suis sur ma branche `Jondo`, je fais :

```bash
git merge main
```

➡️ Cela fusionne le contenu de la branche `main` dans ma branche actuelle (`Jondo`).

---

### ❓ Différence entre `git pull` et `git merge`

- `git merge` : permet de **regrouper des changements locaux** entre deux branches.
- `git pull` : permet de **récupérer les modifications du dépôt distant** et de les fusionner dans ta branche actuelle.

---

### 🔁 Changer de branche

```bash
git checkout nom-de-la-branche
```

Exemple : je fais :

```bash
git checkout main
```

➡️ Cela me fait quitter la branche `Jondo` pour aller sur la branche `main`.

---

### 🌱 Créer une nouvelle branche

```bash
git checkout -b nouvelle-branche
```

➡️ Crée une nouvelle branche et me bascule dessus immédiatement.

---

### ✅ Ajouter et valider des modifications

```bash
git add .
git commit -m "Objet de mon commit"
git push
```

➡️ Étapes pour enregistrer les changements :
- `git add .` : ajoute tous les fichiers modifiés
- `git commit -m` : enregistre un message décrivant les modifications
- `git push` : envoie les modifications vers le dépôt distant

---

### ⬆️ Envoyer ses modifications sur le dépôt distant

```bash
git push origin nom-de-la-branche
```

Exemple : je suis sur ma branche `Jondo`, je fais :

```bash
git push origin main
```

➡️ Cela envoie mes nouvelles modifications vers la branche `main` sur GitHub.

---

### 🗑️ Supprimer une branche locale

```bash
git branch -d nom-de-la-branche
```

Exemple :

```bash
git branch -d JonWick
```

➡️ Supprime la branche `JonWick` localement (uniquement si elle est fusionnée).
