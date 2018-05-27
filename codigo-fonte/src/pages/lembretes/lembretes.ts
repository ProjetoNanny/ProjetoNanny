import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroLembretesPage} from '../cadastro-lembretes/cadastro-lembretes';
import { ToastController } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-lembretes',
  templateUrl: 'lembretes.html',
})
export class LembretesPage {
  private PATH = "lembretes/";
  lembretes: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private lembretesProvider: LembretesProvider,
    public toastCtrl: ToastController
  ) {
      this.lembretes = this.getAll();
  }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild("id_usuario")
      .equalTo(firebase.auth().currentUser.uid))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })
  }

    editarLembretes() {
      console.log(this.lembretes);
      this.navCtrl.push(LembretesPage);
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
