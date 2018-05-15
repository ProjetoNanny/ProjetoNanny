import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
/**
 * Generated class for the ListaDependentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-dependentes',
  templateUrl: 'lista-dependentes.html',
})
export class ListaDependentesPage {
  private PATH = "dependentes/";
  dependentes: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase) {
      this.dependentes = this.getAll();
  }
  getAll() {
  return this.db.list(this.PATH, ref => ref.orderByChild("id_responsavel")
    .equalTo(firebase.auth().currentUser.uid))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
}
}
