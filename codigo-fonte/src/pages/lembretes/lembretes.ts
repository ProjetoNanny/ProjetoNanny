import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-lembretes',
  templateUrl: 'lembretes.html',
})
export class LembretesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LembretesPage');
  }

}
