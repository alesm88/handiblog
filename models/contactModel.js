import pool from '../config/db.js';

export async function createContact(nom, prenom, email, message) {
    await pool.query(
        `INSERT INTO contact (nom, prenom, email, message) VALUES (?, ?, ?, ?);`, 
        [nom, prenom, email, message]
    );
}

export async function findContactByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM contact WHERE email = ?', [email]);
    return rows[0];
}

export async function getAllContact() {
    const [rows] = await pool.query('SELECT * FROM contact;');
    return rows;
}

export async function deleteContact(id) {
    const [result] = await pool.query('DELETE FROM contact WHERE id = ?;', [id]);
    console.log(`Résultat de l'élimination : ${result}`);
    return result.affectedRows > 0; // Renvoie vrai si un enregistrement a été supprimé
}