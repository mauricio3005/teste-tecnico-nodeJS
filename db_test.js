import pool from './db.js';

async function testarConexao() {
    try {
        const [rows] = await pool.query('SELECT 1');
        console.log('Conexão ok', rows);
    } catch (erro) {
        console.error('Erro de conexão', erro.message);
    } finally {
        await pool.end();
    }
}

testarConexao();
