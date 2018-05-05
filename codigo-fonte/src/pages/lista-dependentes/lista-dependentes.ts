import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { Dependente } from '../../models/dependente';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-lista-dependentes',
  templateUrl: 'lista-dependentes.html',
})
export class ListaDependentesPage {
  user = firebase.auth().currentUser;
  private dependenteList = this.dependenteProvider.getDependentes();
  constructor(
    private dependenteProvider: DependenteProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
