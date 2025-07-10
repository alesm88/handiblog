import pool from '../config/db.js';

export async function createUser(nom, prenom, pseudo, email, hashedPassword, roleId) {
    await pool.query(
        `INSERT INTO users (nom, prenom, pseudo, email, password, role_id) VALUES (?, ?, ?, ?, ?, ?);`, 
        [nom, prenom, pseudo, email, hashedPassword, roleId]
    );
}

export async function findUserByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}

export async function listUsers() {
    const [rows] = await pool.query('SELECT * FROM users;');
    return rows;
}

export async function deleteUser(id) {
    await pool.query('DELETE FROM users WHERE id = ?;', [id]);
}

export async function editUser(id, nom, prenom, pseudo, email, password, roleId) {
    await pool.query(
        'UPADTE users SET nom, prenom, pesudo, email, password, role_id = ? WHERE id = ?;',
        [nom, prenom, pseudo, email, password, roleId, id]
    );
}