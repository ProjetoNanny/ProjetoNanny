import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-lembretes',
  templateUrl: 'lembretes.html',
})
export class LembretesPage {
  private PATH = "lembretes/";
  lembretes: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase) {
      this.lembretes = this.getAll();
  }
  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild("id_dependente")
      .equalTo(firebase.auth().currentUser.uid))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })
  }
}
