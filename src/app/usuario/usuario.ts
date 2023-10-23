import { Login } from './../sistema/login/login';
import { Endereco } from './../endereco/endereco';

export class Usuario {
  id!: number;
  nome!: string;
  telefone!: string;
  cpf!: string;
  enderecos!: Endereco[];
  login!: Login;
}
