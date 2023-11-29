import { Login } from './../sistema/login/login';
import { Endereco } from './../endereco/endereco';
import { Roles } from './roles';

export class Usuario {
  id!: number;
  nome!: string;
  telefone!: string;
  cpf!: string;
  enderecos!: Endereco[];
  login!: Login;

}
