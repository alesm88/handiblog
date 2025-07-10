# 🧰 Commandes Git utiles pour débutants

## 🔄 Récupérer les dernières modifications du dépôt distant

git pull origin main
Exemple : je suis sur ma branche `Jondo`, je fais :
git pull origin main

➡️ Cela permet de récupérer les dernières modifications de la branche `main` (sur GitHub ou un autre dépôt distant) et de les fusionner dans ma branche actuelle.

---

## 🔀 Fusionner une autre branche dans la branche actuelle

git merge nom-de-la-branche
Exemple : je suis sur ma branche `Jondo`, je fais :
git merge main

➡️ Cela fusionne le contenu de la branche `main` dans ma branche actuelle (`Jondo`).

---

## ❓ Différence entre `git pull` et `git merge`

- `git merge` : permet de **regrouper des changements locaux** entre deux branches.
- `git pull` : permet de **récupérer les modifications du dépôt distant** et de les fusionner dans ta branche actuelle.

---

## 🔁 Changer de branche


git checkout nom-de-la-branche
Exemple : je fais :
git checkout main

➡️ Cela me fait quitter la branche `Jondo` pour aller sur la branche `main`.

---

## 🌱 Créer une nouvelle branche

git checkout -b nouvelle-branche

➡️ Crée une nouvelle branche et me bascule dessus immédiatement.

---

## ✅ Ajouter et valider des modifications

➡️ Étapes pour enregistrer les changements :
- `git add .` : ajoute tous les fichiers modifiés
- `git commit -m` : enregistre un message décrivant les modifications
- `git push` : envoie les modifications vers le dépôt distant

---

## ⬆️ Envoyer ses modifications sur le dépôt distant

git push origin nom-de-la-branche
Exemple : je suis sur ma branche `Jondo`, je fais :
git push origin main

➡️ Cela envoie mes nouvelles modifications vers la branche `main` sur GitHub.

---

## 🗑️ Supprimer une branche locale

git branch -d nom-de-la-branche
Exemple :
git branch -d JonWick

➡️ Supprime la branche `JonWick` localement (uniquement si elle est fusionnée).