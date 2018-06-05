import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Cartao-Vacina } from '../../models/cartao-vacina';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Cartao-VacinaProvider {

  cartao-vacina = new Observable<cartao-vacina[]>();
  user = firebase.auth().currentUser;
  private cartao-vacinaList = this.db.list<cartao-vacina>('/cartao-vacina');
  // dependentes: AngularFireList<Dependente[]>;
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http,
    public toastCtrl: ToastController) {

    }
  salvar(cartao-vacina: cartao-vacina){
    return this.db.object('/cartao-vacina/'+firebase.auth().currentUser.uid)
    .set(cartao-vacina).then(resolve => {
      let toast = this.toastCtrl.create({
        message: "Usuário alterado com sucesso.",
        duration: 3000
      });
      toast.present();
      console.log("success");
    }, reject =>{
      let toast = this.toastCtrl.create({
        message: "Erro ao realizar o cadastro, por favor, verificar os campos.",
        duration: 3000
      });
    });;
  }

  sair(){
    firebase.auth().signOut();
  }
  get() {
    return this.db.object('/cartao-vacina/' + firebase.auth().currentUser.uid).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
  getcartao-vacina(){

    return this.db.list('/cartao-vacina/' + firebase.auth().currentUser.uid).snapshotChanges().subscribe(cartao-vacina=>{
      console.log(cartao-vacina[0].payload.valueOf());
    });
    // firebase.database().ref('/cartao-vacina/').child(firebase.auth().currentUser.uid);
  }

  getFoto(){
    return firebase.storage().ref().child("/cartao-vacina/" + firebase.auth().currentUser.uid + "/myPhoto.jpg" ).getDownloadURL();
  }

  excluir(cartao-vacina: cartao-vacina){
    return this.cartao-vacinaList.remove(cartao-vacina.uid)
    .then(resolve => {
        firebase.auth().currentUser.delete()
      .then(function() {
        firebase.auth().signOut();
      })
      .catch(function(error) {
        // An error happened
      });

    }, reject =>{
      let toast = this.toastCtrl.create({
        message: "Erro ao excluir o dependente, por favor, verificar os campos.",
        duration: 3000
      });
    });
  }
}
