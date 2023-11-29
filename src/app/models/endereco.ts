import { Usuario } from "./usuario";

export class Endereco {
    
  id!: number;
  rua!: string;
  numCasa!: number;
  usuario!: Usuario;
  bairo!: string;
  cep!: string;
  complemento!: string;
}
