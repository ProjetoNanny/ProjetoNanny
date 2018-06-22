import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { Observable } from 'rxjs/Observable';
import { Lembretes } from '../../models/lembretes';
import { CadastroLembretesPage } from '../cadastro-lembretes/cadastro-lembretes';
import { InformativosProvider } from '../../providers/informativo/informativo';

/**
 * Generated class for the TabDependenteAcompanhamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-dependente-acompanhamento',
  templateUrl: 'tab-dependente-acompanhamento.html',
})
export class TabDependenteAcompanhamentoPage {
  informativos: Observable<any>;
  data_nasc: string;
  idade: number;
  lembretesProvider;
  constructor(
    public informativoProvider: InformativosProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    params: NavParams
  ) {
      this.data_nasc = params.data;
      this.idade = this.getAge(this.data_nasc);
      this.informativoProvider = informativoProvider;
      this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
      //console.log( this.informativos );
  }
  ionViewWillEnter() {
    console.log(this.idade);
    this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
    //this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
  }
  getAge(date) {
    let newDate = new Date(date);
    var now = new Date();
    var age = now.getFullYear() - newDate.getFullYear();
    return age;
    };
}
