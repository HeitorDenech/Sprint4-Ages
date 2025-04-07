//contém a lógica principal da aplicação.

import { FilmeRepository } from './repository';

const filmeRepository = new FilmeRepository(); // cria uma instância do repositório para acessar os dados

export class FilmeUseCase {
    // lista todos os filmes cadastrados
    async listarTodos() {
        return await filmeRepository.listarTodos();
    }

    //  busca um filme pelo ID
    async buscarPorId(id: string) {
        if (!id) throw new Error('ID é obrigatório.');
        return await filmeRepository.buscarPorId(id);
    }

    // cria um novo filme no banco de dados
    async criar(dados: any) {
        if (!dados.nome || !dados.autor || !dados.data || !dados.genero) {
            throw new Error('Todos os campos são obrigatórios.');
        }
        return await filmeRepository.criar(dados);
    }

    async atualizar(id: string, dados: any) {
        if (!id) throw new Error('ID é obrigatório.');
        return await filmeRepository.atualizar(id, dados);
    }

    async deletar(id: string) {
        if (!id) throw new Error('ID é obrigatório.');
        return await filmeRepository.deletar(id);
    }
}
