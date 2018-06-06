import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the CartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartao',
  templateUrl: 'cartao.html',
})
export class CartaoPage {
  form: FormGroup;
  cartao = {} as CartaoPage;
  cartao: Observable<any>;

  constructor(private cartaoProvider: CartaoProvider,
  public navCtrl: NavController, public navParams: NavParams,
  public dependenteProvider: DependenteProvider) {
    this.cartao = navParams.get("cartao") || {};
    console.log(this.cartao);
    this.dependentes=dependenteProvider.getAll();
    console.log(this.dependentes);
  }

  save (cartao: CartaoPage){
  console.log('cartao:' + cartao);
  let resposta = this.cartaoProvider.salvar(cartao);
  if(resposta)
    this.navCtrl.popToRoot();

  }
  //ionViewDidLoad() {
  //console.log('ionViewDidLoad cartaoPage');
  //}

  }
