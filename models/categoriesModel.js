import pool from '../config/db.js'

export async function getAllCategories() {
    const [rows] = await pool.query('SELECT * FROM categories')
    return rows
}

export const createCategorie = (nom, description) => {
    return pool.query(
      "INSERT INTO categories (nom, description) VALUES (?, ?)",
      [nom, description]
    );
  };

  export const getCategorieById = (id) => {
    return pool.query("SELECT * FROM livres WHERE id = ?", [id]);
  };
  
  export const updateCategorie = (id, nom, description) => {
    return pool.query(
      "UPDATE categories SET nom=?, description=?, WHERE id=?",
      [nom, description, id]
    );
  };
  
  export const deleteCategorie = (id) => {
    return pool.query("DELETE FROM categories WHERE id = ?", [id]);
  };