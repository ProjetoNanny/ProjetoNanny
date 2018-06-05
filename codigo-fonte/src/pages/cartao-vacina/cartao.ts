import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { cartao-vacinas } from '../../models/cartao-vacinas';
import { cartao-vacinasProvider } from '../../providers/cartao-vacinas/cartao-vacinas';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cartao-vacinas',
  templateUrl: 'cartao-vacinas.html',
})
export class cartao-vacinasPage {
  private PATH = "cartao-vacinas/";
  cartao-vacinas: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
      this.cartao-vacinas = this.getAll();
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
    console.log('ionViewDidLoad cartao-vacinasPage');
  }
    editar() {
      this.contact = this.navParams.data.cartao-vacinas || { };
      this.navCtrl.push(cartao-vacinasPage, { cartao-vacinas: this.cartao-vacinas });
    }

  remove(cartao-vacinas: cartao-vacinas) {
      return this.db.list(this.PATH).remove(cartao-vacinas.key)
      .then(resolve => {
        let toast = this.toastCtrl.create({
          message: "cartao-vacina removido com sucesso.",
          duration: 3000
        });
        toast.present();
        console.log("success");
      });
    }
    //console.log("id cartao-vacina:" + cartao-vacinas.key);
    //return this.db.list(this.PATH).remove(cartao-vacinas.key);
    // if (cartao-vacinas.key) {
    //  this.cartao-vacinasProvider.remove(cartao-vacinas)
    //     .then(() => {
    //       this.toast.create({ message: 'cartao-vacina removido sucesso.', duration: 3000 }).present();
    //     })
    //     .catch(() => {
    //       this.toast.create({ message: 'Erro ao remover o cartao-vacina.', duration: 3000 }).present();
    //     });
    // }
  }
