export class Dependente {
    key: string;
    id_responsavel: string;
    nome: string;
    data_nasc: Date = new Date();
    horario: Date = new Date();
    tipo_sanguineo: string;
    altura: number;
    peso: number;
    escola: string;
    genero: string;
    personalidade: string;
    hobbies:string[];
    foto_perfil: string;
}
