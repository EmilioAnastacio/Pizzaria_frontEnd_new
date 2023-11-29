import { Funcionario } from "./funcionario";
import { PedidoProduto } from "./pedidoproduto";
import { Usuario } from "./usuario";

export class Pedido {
    id!: number;
    nome!: string;
    observacao!: string;

    pedidoProdutoList!: PedidoProduto[];
    
    valorTotal!: number;
    usuario!: Usuario;
    funcionario!: Funcionario;
    entrega: boolean = true;


}
