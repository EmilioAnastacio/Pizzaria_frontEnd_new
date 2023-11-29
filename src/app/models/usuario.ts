import { Endereco } from "./endereco";
import { User } from "./user";

export class Usuario {
    id!: number;
    nome!: string;
    telefone!: string;
    cpf!: string;
    enderecos!: Endereco[];
    user!: User;
}
