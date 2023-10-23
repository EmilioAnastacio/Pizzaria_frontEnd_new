import { Item } from './../item/item';
import { Usuario } from './../usuario/usuario';

export class Pedido {
  id!: number;
  nome!: string;
  observacao!: string;
  entrega!: boolean;
  item!: Item[];
  usuario!: Usuario;
}
