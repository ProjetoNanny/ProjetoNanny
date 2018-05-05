import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Dependente } from '../../models/dependente';
import * as firebase from 'firebase/app';
@Injectable()
export class DependenteProvider {
  user = firebase.auth().currentUser;
  private dependenteList = this.db.list<Dependente>('/dependentes');
  // dependentes: AngularFireList<Dependente[]>;
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http) {}
  salvar(dependente: Dependente){
    dependente.id_responsavel = this.user.uid;
    return this.dependenteList.push(dependente);
  }
  getDependentes(){
    return this.db.list<Dependente>('/dependentes',
    ref => ref.orderByChild('id_responsavel').equalTo(1));
  }
}
