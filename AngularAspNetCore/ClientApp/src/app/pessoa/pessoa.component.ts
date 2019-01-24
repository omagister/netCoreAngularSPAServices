import { Pessoa } from '../pessoa/pessoa';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaService } from '../services/pessoaservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html'
})
export class PessoaComponent {
  pessoas: Pessoa[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _pessoaService: PessoaService, private _router: Router) {
    this._pessoaService.retornaListaPessoas()
      .subscribe(
        data => this.pessoas = data
      );


    // http.get<Pessoa[]>(baseUrl + 'api/Pessoa/Pessoas').subscribe(result => {
    //   this.pessoas = result;
    //   console.log(this.pessoas);
    // }, error => console.error(error));
  }

  delete(pessoaId) {
    console.log('excluir o id: ' + pessoaId);

    var ans = confirm("Quer realmente excluir a pessoa com o Id: " + pessoaId);

    if (ans) {
      this._pessoaService.excluiPessoa(pessoaId).subscribe((data) => {
        this._router.navigate(['/pessoas']);
      }, error => console.error(error))
    }
  }

}
