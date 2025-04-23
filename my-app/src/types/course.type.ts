export interface Course {
    id: number;
    titulo: string;
    descricao: string;
    funcionario_id: number;
    data_inicio: string;
    data_fim: string;
    carga_horaria: string;
    topicos: string[];
}