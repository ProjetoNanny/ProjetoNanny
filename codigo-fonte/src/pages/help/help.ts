import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Help } from '../../models/help';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { HelpProvider } from '../../providers/help/help';


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  private PATH = "help/";
  help: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    params: NavParams,
    helpProvider: HelpProvider
  ) {
        this.help = helpProvider.getAll();
    }

    getAll(){
      return this.db.list(this.PATH, ref => ref.orderByChild("key")
        .equalTo(firebase.auth().currentUser.uid))
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
