import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { CadastroLembretesPage } from '../cadastro-lembretes/cadastro-lembretes';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DependenteProvider } from '../../providers/dependente/dependente';
import firebase from 'firebase';
import { LembretesProvider } from '../../providers/lembretes/lembretes';

@IonicPage()
@Component({
  selector: 'page-lembretes',
  templateUrl: 'lembretes.html',
})
export class LembretesPage {
  private PATH = "lembretes/";
  lembretes: Observable<any>;
  dependentes: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    params: NavParams,
    lembretesProvider: LembretesProvider,
    public dependenteProvider: DependenteProvider
  ) {
        this.lembretes = lembretesProvider.getAll();
        this.dependentes=dependenteProvider.getAll();
    }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild("id_usuario")
      .equalTo(firebase.auth().currentUser.uid))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LembretesPage');
  }
  editar(lembrete: Lembretes) {
      this.navCtrl.push(CadastroLembretesPage, { lembrete: lembrete });
  }

  remove(lembretes: Lembretes) {
      return this.db.list(this.PATH).remove(lembretes.key)
      .then(resolve => {
        let toast = this.toastCtrl.create({
          message: "Lembrete removido com sucesso.",
          duration: 3000
        });
        toast.present();
        console.log("success");
      });
    }
    //console.log("id lembrete:" + lembretes.key);
    //return this.db.list(this.PATH).remove(lembretes.key);
    // if (lembretes.key) {
    //  this.lembretesProvider.remove(lembretes)
    //     .then(() => {
    //       this.toast.create({ message: 'Lembrete removido sucesso.', duration: 3000 }).present();
    //     })
    //     .catch(() => {
    //       this.toast.create({ message: 'Erro ao remover o Lembrete.', duration: 3000 }).present();
    //     });
    // }
  }
