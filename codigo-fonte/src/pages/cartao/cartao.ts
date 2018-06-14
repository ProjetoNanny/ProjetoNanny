import { CartaoProvider } from './../../providers/cartao/cartao';
import { Cartao } from './../../models/cartao';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



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
  form: FormGroup;
  cartao = {} as Cartao;
  Cartao: Observable<any>;

   constructor(private CartaoProvider: CartaoProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public cartaoProvider: CartaoProvider) {
      this.cartao = navParams.get("cartao") || {};
      console.log(this.cartao);
  }

  save (cartao: Cartao){
    console.log('cartao:' + cartao);
    let resposta = this.CartaoProvider.salvar(cartao);
    if(resposta)
      this.navCtrl.popToRoot();

  }

  edit (cartao: Cartao) {
    console.log('cartao:' + cartao);
    let resposta = this.CartaoProvider.editar(cartao);
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
