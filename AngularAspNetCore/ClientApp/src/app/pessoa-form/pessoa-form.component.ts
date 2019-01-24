import { Pessoa } from '../pessoa/pessoa';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaService } from '../services/pessoaservice.service';
import { Router, ActivatedRoute } from '@angular/router';


const headers = new HttpHeaders({
    'Content-Type':  'application/json'
  });

@Component({
  templateUrl: './pessoa-form.component.html'
})
export class PessoaFormComponent implements OnInit {
  pessoa: Pessoa;
  errorMessage: any;
  title: string = 'Nova';
  pessoaId: number;

  constructor(private _avRoute: ActivatedRoute, private _pessoaService: PessoaService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.pessoaId = this._avRoute.snapshot.params["id"];
    }
  }

  ngOnInit() {
    this.pessoa = new Pessoa();

    if (this.pessoaId > 0) {
      this.title = "Editar";
      this._pessoaService.retornaPessoaPorId(this.pessoaId)
        .subscribe(resp => this.pessoa = resp
        , error => this.errorMessage = error);
      
    }
  }

  

  OnSubmit() {
    console.log(this.pessoa);

    if (this.title == "Nova") {
      this._pessoaService.criaPessoa(this.pessoa)
        .subscribe((data) => {
          this._router.navigate(['/pessoas']);
        }, error => this.errorMessage = error);
    } else if (this.title == "Editar") {
      this._pessoaService.atualizaPessoa(this.pessoaId, this.pessoa)
        .subscribe((data) => {
          this._router.navigate(['/pessoas']);
        }, error => this.errorMessage = error);
    }

    
  }

}
