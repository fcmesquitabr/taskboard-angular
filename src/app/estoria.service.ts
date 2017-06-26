import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Estoria } from './estoria';

@Injectable()
export class EstoriaService {
    private apiEstorias = 'http://localhost:3002/estorias';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    alterar(estoria: Estoria): Observable<Estoria> {
        let url = `${this.apiEstorias}/${estoria.id}`;

        return this.http
            .put(url, JSON.stringify(estoria), { headers: this.headers }).map(estoria => estoria).catch(this.handleError);
    }

    getEstoria(id: number): Observable<Estoria> {
        return this.getEstorias().map(estorias => estorias.find(estoria => estoria.id === id));
    }

    getEstorias(): Observable<Estoria[]> {
        return this.http.get(this.apiEstorias)
            .map(this.extrairDados)
            .catch(this.handleError);
    }

    private extrairDados(res: Response) {
        let body = <Estoria[]>res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw(
            error.json().error || 'Erro no servidor');
    }
}