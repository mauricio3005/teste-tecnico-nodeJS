import "dotenv/config"
import express from "express"
import pool from "./db.js"

const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.post("/contatos", async (req, res) => {
    const { nome, telefone } = req.body

    try {
        const [resultado] = await pool.query(
            "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
            [nome, telefone]
        )
        res.status(201).json({ id: resultado.insertId, nome, telefone })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.get("/contatos", async (req, res) => {
    try{
    const [resultado] = await pool.query(
        "SELECT * FROM contatos"
    )
    res.status(200).json(resultado)
    }catch (erro) {
        res.status(500).json({erro : erro.message})
    }
}
)

app.patch("/contatos/:id", async (req, res) => {
    const contatoID = req.params.id
    const { nome, telefone } = req.body
    try {
        const [resultado] = await pool.query(
            "UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?",
            [nome, telefone, contatoID]
        )
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Contato não encontrado" })
        }
        res.status(200).json({ id: contatoID, nome, telefone })
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

app.delete("/contatos/:id", async (req,res) => {
    const contatoID=req.params.id
    try{
        const[resultado] = await pool.query(
            "DELETE FROM contatos WHERE id = ?",
            [contatoID]
        )
        if(resultado.affectedRows === 0){
            return res.status(404).json({erro : "Contato não encontrado"})
        }
        res.status(204).json({Mensagem : "Contato excluido com sucesso"})
    } catch(erro){
        res.status(500).json({erro: erro.message})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
