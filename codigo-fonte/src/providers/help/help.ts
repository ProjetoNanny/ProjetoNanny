import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Help } from '../../models/help';
import * as firebase from 'firebase/app';

@Injectable()
export class HelpProvider {
  private PATH = "help/";
  user = firebase.auth().currentUser;
  private helpList = this.db.list<Help>('/help');
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpClient,
    public toastCtrl: ToastController
  ) {}
  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild("key")
      .equalTo(firebase.auth().currentUser.uid))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })
  }
}
