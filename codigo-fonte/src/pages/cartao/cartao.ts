import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cartao } from '../../models/cartao';
import { DependenteProvider } from '../../providers/dependente/dependente';

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

  alertCtrl: any;
  CartaoProvider: any;

  cartao = {} as Cartao;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoPage');
  }


  save (cartao: Cartao){
    let resposta = this.CartaoProvider.salvar(cartao);
    if(resposta)
        this.navCtrl.popToRoot();
  }

  excluir (cartao: CartaoPage){
    let alert = this.alertCtrl.create({
    title: 'Excluir Cartao',
    message: 'Você deseja mesmo excluir este Cartao?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          let resposta = this.CartaoProvider.excluir(cartao);
          if(resposta)
              this.navCtrl.popToRoot();
        }
      }
    ]
  });

}
}
