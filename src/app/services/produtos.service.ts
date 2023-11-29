import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  API: string = 'http://localhost:8080/api/itens';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  deletar(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.API}/deletar/${id}`);
  }


}
