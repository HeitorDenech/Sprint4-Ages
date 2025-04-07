//conecta diretamente com o Prisma e o banco de dados.

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class FilmeRepository {
    async listarTodos() {
        return await prisma.filmes.findMany();
    }

    async buscarPorId(id: string) {
        return await prisma.filmes.findUnique({ where: { id } });
    }

    async criar(dados: any) {
        return await prisma.filmes.create({ data: dados });
    }

    async atualizar(id: string, dados: any) {
        try {
            return await prisma.filmes.update({
                where: { id },
                data: dados,
            });
        } catch (error) {
            throw new Error('Filme não encontrado ou erro ao atualizar.');
        }
    }

    async deletar(id: string) {
        try {   
            return await prisma.filmes.delete({ where: { id } });
        } catch (error) {
            throw new Error('Filme não encontrado ou erro ao deletar.');
        }
    }
}
