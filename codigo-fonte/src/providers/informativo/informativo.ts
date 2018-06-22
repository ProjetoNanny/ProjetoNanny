import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, List } from 'ionic-angular';
import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Informativo } from '../../models/informativo';
import * as firebase from 'firebase/app';

@Injectable()
export class InformativosProvider {
  private PATH = "Informativos/";
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpClient,
    public toastCtrl: ToastController
    ) {}
    getInformativoPorIdade(idade: number){
      console.log(idade);
      return this.db.list(this.PATH, ref => ref.orderByChild("idade_min_info")
        .startAt(idade -1 ))
        .snapshotChanges()
        .map(changes => {
          changes.forEach(function(childSnapshot) {
            var childData = childSnapshot.payload.val();
            if (childData.idade_max_info <= 4) {
              console.log(childData);
              changes.pop();
            }
          });
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
    }
    getInformativoPorIdade2(idade: number){
      
      var query = firebase.database().ref(this.PATH).orderByKey();
      return query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          if (childData.idade_max_info <= 4) {
            console.log(childSnapshot);
          }
        });
      });
      /*var ref = firebase.database().ref(this.PATH);
      return ref.orderByChild("idade_min_info").startAt(0).on("child_added", function(snapshot) {
        var a = snapshot.val();
        if (a.idade_max_info <= 4) {
          console.log(a);
        }
      });*/
    }
    getAll(){
      return this.db.list(this.PATH)
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        })
    }
}
