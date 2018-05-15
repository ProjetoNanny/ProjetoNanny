import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-cadastro-lembretes',
  templateUrl: 'cadastro-lembretes.html',
})
export class CadastroLembretesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroLembretesPage');
  }

}
