import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-dependente',
  templateUrl: 'dependente.html',
})
export class DependentePage {
  form: FormGroup;
  dependente = {} as Dependente;

  constructor(private dependenteProvider: DependenteProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  save (dependente: Dependente){
    let resposta = this.dependenteProvider.salvar(dependente);
    if(resposta)
        this.navCtrl.popToRoot();
  }
}
