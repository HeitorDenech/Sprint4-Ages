import express from 'express';
import { FilmeController } from './controller';

const app = express();
const port = 3001;
const filmeController = new FilmeController();

app.use(express.json());    

// Rotas da API
app.get('/filmes', filmeController.listarTodos); // para listar todos os filmes
app.get('/filmes/:id', filmeController.buscarPorId); // para buscar um filme específico pelo ID
app.post('/filmes', filmeController.criar); // para criar um novo filme
app.put('/filmes/:id', filmeController.atualizar); // para atualizar um filme existente pelo ID
app.delete('/filmes/:id', filmeController.deletar); // para deletar um filme pelo ID


// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});