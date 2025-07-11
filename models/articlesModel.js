import pool from '../config/db.js'


export const createArticles = (titre, description, contenu, categories_id, users_id) => {
    return pool.query(
      "INSERT INTO articles (titre, description, contenu, categorie_id, users_id) VALUES (?, ?, ?, ?, ?)",
      [titre, description, contenu, categories_id, users_id]
    );
  };

  export const getAllArticles = () => {
    return pool.query(
      `SELECT articles.*, categories.nom AS categorie
       FROM articles
       LEFT JOIN categories ON articles.categorie_id = categories.id`
    );
  };

  export const getArticleById = (id) => {
    return pool.query("SELECT * FROM articles WHERE id = ?", [id]);
  };
  
  export const updateArticles = (id, titre, description, contenu, created_at, categories_id, users_id) => {
    return pool.query(
      "UPDATE articles SET titre=?, description=?, contenu=?, created_at=?, categorie_id=?, users_id=? WHERE id=?",
      [titre, description, contenu, created_at, categories_id, users_id, id]
    );
  };
  
  export const deleteArticles = (id) => {
    return pool.query("DELETE FROM articles WHERE id = ?", [id]);
  };