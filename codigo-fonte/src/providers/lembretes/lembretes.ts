import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Lembretes } from '../../models/lembretes';
import * as firebase from 'firebase/app';

@Injectable()
export class LembretesProvider {
  private PATH = "lembretes/";
  user = firebase.auth().currentUser;
  private lembretesList = this.db.list<Lembretes>('/lembretes');
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: HttpClient,
    public toastCtrl: ToastController
  ) {}
    salvar(lembretes: Lembretes){
      //lembretes.id_dependente = ;
      lembretes.id_usuario = firebase.auth().currentUser.uid;
      console.log(lembretes);
      return this.lembretesList.push(lembretes)
      .then(resolve => {
        let toast = this.toastCtrl.create({
          message: "Cadastro realizado com sucesso.",
          duration: 3000
        });
        toast.present();
        console.log("success");
      });
    }
    editar(lembretes: Lembretes){
      //lembretes.id_dependente = ;
      lembretes.id_usuario = firebase.auth().currentUser.uid;
      console.log(lembretes);
      return this.lembretesList.update(lembretes.key,lembretes)
      .then(resolve => {
        let toast = this.toastCtrl.create({
          message: "Cadastro realizado com sucesso.",
          duration: 3000
        });
        toast.present();
        console.log("success");
      });
    }


    getLembretes(){
      return this.db.list<Lembretes>('/lembretes',
        ref => ref.orderByChild('id_lembrete').equalTo(1));
    }

    getAll(){
      return this.db.list(this.PATH, ref => ref.orderByChild("id_usuario")
        .equalTo(firebase.auth().currentUser.uid))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        })
    }
    getLembretePorDependente(id_dep: string){
      console.log(id_dep);
      return this.db.list(this.PATH, ref => ref.orderByChild("id_dependente")
        .equalTo(id_dep))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
    }

    remove(lembretes: Lembretes) {
      return this.lembretesList.remove(lembretes.key)
      .then(resolve => {
        let toast = this.toastCtrl.create({
          message: "Lembrete " + lembretes.titulo + " excluido com sucesso.",
          duration: 3000
        });
        toast.present();
        console.log("success delete");
      }, reject =>{
        let toast = this.toastCtrl.create({
          message: "Erro ao excluir o lembrete, por favor, verificar os campos.",
          duration: 3000
        });
      });
    }
}
