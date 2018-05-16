import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Lembretes } from '../../models/lembretes';
import * as firebase from 'firebase/app';

@Injectable()
export class LembretesProvider {
  user = firebase.auth().currentUser;
  private lembretesList = this.db.list<Lembretes>('/lembretes');
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpClient) {}
    salvar(lembretes: Lembretes){
      return this.lembretesList.push(lembretes);
    }
    getLembretes(){
      return this.db.list<Lembretes>('/lembretes',
        ref => ref.orderByChild('id_lembrete').equalTo(1));
    }
  }
