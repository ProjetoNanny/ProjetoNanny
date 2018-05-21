import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PaginaDependentePage } from '../pagina-dependente/pagina-dependente';
import firebase from 'firebase';
/**
 * Generated class for the ListaDependentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-dependentes',
  templateUrl: 'lista-dependentes.html',
})
export class ListaDependentesPage {
  private PATH = "dependentes/";
  dependentes: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private dependenteProvader: DependenteProvider) {
      this.dependentes = this.dependenteProvader.getAll();
  }
  selecionarDependente(dependente: any) {
    console.log(dependente);
    this.navCtrl.push("PaginaDependentePage", { dependente: dependente });
  }
  adicionarDependente() {
    this.navCtrl.push("DependentePage");
  }
}
