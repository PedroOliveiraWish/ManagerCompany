export interface Usuario {
    id?: number;
    nome?: string;
    email: string;
    senha: string;
    perfil: string; // "funcionario", "gestor" ou "diretor"
    data_cadastro?: string;
    departamento?: string;
}