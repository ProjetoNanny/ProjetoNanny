import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { Observable } from 'rxjs/Observable';
import { Lembretes } from '../../models/lembretes';
import { CadastroLembretesPage } from '../cadastro-lembretes/cadastro-lembretes';

/**
 * Generated class for the TabDependenteLembretesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-dependente-lembretes',
  templateUrl: 'tab-dependente-lembretes.html',
})
export class TabDependenteLembretesPage {
  lembretes: Observable<any>;
  id_dependente: string;
  lembretesProvider;
  constructor(
    public lembreteProvider: LembretesProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    params: NavParams,
    lembretesProvider: LembretesProvider) {
      this.id_dependente = params.data;
      this.lembretesProvider = lembretesProvider;
      this.lembretes = lembretesProvider.getLembretePorDependente(params.data);
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TabDependenteLembretesPage');
    console.log(this.id_dependente);
    this.lembretes = this.lembretesProvider.getLembretePorDependente(this.id_dependente);
  }
  editarLembrete(lembrete: Lembretes) {
    let profileModal = this.modalCtrl.create(CadastroLembretesPage, { lembrete: lembrete });
    profileModal.present();
    //this.navCtrl.push(CadastroLembretesPage, { lembrete: lembrete });
  }

  removeLembrete(lembretes: Lembretes) {
    this.lembreteProvider.remove(lembretes);
  }
}
