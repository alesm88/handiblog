import pool from '../config/db.js';

export const User = {
    createUser: async (user) => {
        const sql = `INSERT INTO users (nom, prenom, pseudo, email, password, role, is_verified) VALUES (?, ?, ?, ?, ?, ?, ?)`;        
        const [result] = await pool.query(sql, [user.nom, user.prenom, user.pseudo, user.email, user.password, user.role, false]);
        return result;
    },

    findUserByEmail: async (email) => {
        const sql = `SELECT u.*, a.titre, a.description, a.created_at FROM users u LEFT JOIN articles a ON u.id = a.users_id WHERE email = ?`;
        const [rows] = await pool.query(sql, [email]);
        return rows;
    },

    verifyUser: async (email) => {
        await pool.query(`UPDATE users SET is_verified = ? WHERE email = ?`, [true, email]);
    },

    listUsers: async () => {
        const [rows] = await pool.query('SELECT u.*, a.titre, a.description, a.created_at FROM users u INNER JOIN articles a ON u.id = a.users_id;');
        return rows;
    },
    
    deleteUser: async (id) => {
        await pool.query(`DELETE FROM users WHERE id = ?;`, [id]);
    },

    editUser: async (user) => {
        const sql = `UPDATE users SET nom=?, prenom=?, pesudo=?, email=?, password=?, role_id=? WHERE id=?;`;
        await pool.query(sql, [nom, prenom, pseudo, email, password, roleId, id]);
    }
};