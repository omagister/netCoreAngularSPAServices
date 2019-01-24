import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PessoaService {
  minhaUrl: string = '';

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.minhaUrl = baseUrl;
  }

  retornaListaPessoas() {
    return this._http.get(this.minhaUrl + 'api/Pessoas')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  retornaPessoaPorId(id) {
    return this._http.get(this.minhaUrl + 'api/Pessoas/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  criaPessoa(pessoa) {
    console.log(pessoa);

    return this._http.post(this.minhaUrl + 'api/Pessoas', pessoa)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  atualizaPessoa(id, pessoa) {
    return this._http.put(this.minhaUrl + 'api/Pessoas/' + id, pessoa)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  excluiPessoa(id) {
    return this._http.delete(this.minhaUrl + 'api/Pessoas/' + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
