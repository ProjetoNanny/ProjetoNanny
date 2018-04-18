import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Usuario } from '../../models/usuario';
import * as firebase from 'firebase/app';

@Injectable()
export class UsuarioProvider {
  user = firebase.auth().currentUser;
  private usuarioList = this.db.list<Usuario>('/usuario');
  // dependentes: AngularFireList<Dependente[]>;
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http) {}
  salvar(usuario: Usuario){
    usuario.id_responsavel = this.user.uid;
    return this.usuarioList.push(usuario);
  }
  sair(){
    firebase.auth().signOut();
  }
}
