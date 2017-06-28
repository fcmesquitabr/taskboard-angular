import { Tarefa } from './tarefa';

export class Estoria {
    id: number;
    nome: string;
    descricao: string;
    pontos: number;
    finalizada: boolean;
    tarefas: Tarefa[];
}