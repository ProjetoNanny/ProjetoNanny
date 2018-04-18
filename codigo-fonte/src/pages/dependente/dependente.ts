import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { DependenteProvider } from '../../providers/dependente/dependente';

@IonicPage()
@Component({
  selector: 'page-dependente',
  templateUrl: 'dependente.html',
})
export class DependentePage {
  dependente = {} as Dependente;
  constructor(private dependenteProvider: DependenteProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  save (dependente: Dependente){
    this.dependenteProvider.salvar(dependente);
  }
}
