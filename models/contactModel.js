import pool from '../config/db.js';

export async function createContact(nom, prenom, email, message) {
    await pool.query(
        `INSERT INTO contact (nom, prenom, email, message) VALUES (?, ?, ?, ?);`, 
        [nom, prenom, pseudo, email, message]
    );
}

export async function findContactByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM contact WHERE email = ?', [email]);
    return rows[0];
}

export async function listContact() {
    const [rows] = await pool.query('SELECT * FROM contact;');
    return rows;
}