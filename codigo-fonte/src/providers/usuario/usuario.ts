import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Usuario } from '../../models/usuario';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UsuarioProvider {

  usuario = new Observable<Usuario[]>();
  user = firebase.auth().currentUser;
  private usuarioList = this.db.list<Usuario>('/usuario');
  // dependentes: AngularFireList<Dependente[]>;
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http,
    public toastCtrl: ToastController) {

    }
  salvar(usuario: Usuario){
    return this.db.object('/usuario/'+firebase.auth().currentUser.uid)
    .set(usuario).then(resolve => {
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
    return this.db.object('/usuario/' + firebase.auth().currentUser.uid).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
  getUsuario(){

    return this.db.list('/usuario/' + firebase.auth().currentUser.uid).snapshotChanges().subscribe(usuario=>{
      console.log(usuario[0].payload.valueOf());
    });
    // firebase.database().ref('/usuario/').child(firebase.auth().currentUser.uid);
  }

  getFoto(){
    return firebase.storage().ref().child("/usuario/" + firebase.auth().currentUser.uid + "/myPhoto.jpg" ).getDownloadURL();
  }

  excluir(usuario: Usuario){
    return this.usuarioList.remove(usuario.uid)
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
