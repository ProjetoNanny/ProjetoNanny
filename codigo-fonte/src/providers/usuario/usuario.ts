import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Usuario } from '../../models/usuario';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioProvider {

  usuario = new Observable<Usuario[]>();
  user = firebase.auth().currentUser;
  private usuarioList = this.db.list<Usuario>('/usuario');
  // dependentes: AngularFireList<Dependente[]>;
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http) {

    }
  salvar(usuario: Usuario){
    return this.db.object('/usuario/'+usuario.uid)
    .set(usuario);
  }
  sair(){
    firebase.auth().signOut();
  }
  getUsuario(){

    this.db.list('/usuario/' + firebase.auth().currentUser.uid).snapshotChanges().subscribe(usuario => {
      return usuario;
  });
    // firebase.database().ref('/usuario/').child(firebase.auth().currentUser.uid);
  }

}
