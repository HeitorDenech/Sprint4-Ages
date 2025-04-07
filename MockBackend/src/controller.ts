// responsável por receber as requisições HTTP e devolver respostas.

import { Request, Response } from 'express'; // importa o Request e Response do Express
import { FilmeUseCase } from './use-case'; 

const filmeUseCase = new FilmeUseCase();

// classe responsável por controlar as requisições e respostas da API
export class FilmeController {
    async listarTodos(req: Request, res: Response) {
        const filmes = await filmeUseCase.listarTodos();
        res.json(filmes);
    }

    async buscarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const filme = await filmeUseCase.buscarPorId(id);
            if (!filme) return res.status(404).json({ error: 'Filme não encontrado.' });
            res.json(filme);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const filme = await filmeUseCase.criar(req.body);
            res.status(201).json(filme);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const filme = await filmeUseCase.atualizar(id, req.body);
            res.json(filme);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await filmeUseCase.deletar(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}