import { TabDependenteAcompanhamentoPage } from './../tab-dependente-acompanhamento/tab-dependente-acompanhamento';
import { Dependente } from './../../models/dependente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependentePage } from '../../pages/cadastro-dependente/dependente';
import { LembretesPage } from '../../pages/lembretes/lembretes';
import { CadastroLembretesPage } from '../../pages/cadastro-lembretes/cadastro-lembretes';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { Observable } from 'rxjs/Observable';
import { TabDependenteLembretesPage } from '../tab-dependente-lembretes/tab-dependente-lembretes';
/**
 * Generated class for the PaginaDependentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-dependente',
  templateUrl: 'pagina-dependente.html',
})
export class PaginaDependentePage {
  dependente = {} as Dependente;
  lembreteLista = TabDependenteLembretesPage;
  informativosLista = TabDependenteAcompanhamentoPage;
  lembretes: Observable<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dependenteProvider: DependenteProvider) {
    this.dependente = this.navParams.data.dependente || {};
  }
  editarDependente() {
    this.navCtrl.push(DependentePage, { dependente: this.dependente });
  }
  pushcadastroLembretes() {
    this.navCtrl.push(CadastroLembretesPage);
  }
}
