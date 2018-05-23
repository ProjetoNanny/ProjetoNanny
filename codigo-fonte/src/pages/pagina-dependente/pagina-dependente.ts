import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { DependentePage } from '../../pages/cadastro-dependente/dependente';
import { DependenteProvider } from '../../providers/dependente/dependente';
/**
 * Generated class for the PaginaDependentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-dependente',
  templateUrl: 'pagina-dependente.html',
})
export class PaginaDependentePage {

  dependente = {} as Dependente;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dependenteProvider: DependenteProvider) {
      this.dependente = this.navParams.data.dependente || { };
      console.log(this.dependente);
      // this.dependenteProvider.getFoto(this.dependente.key).then(url=>{
      //   console.log(url);
      //     this.dependente.foto_perfil = url;
      // }).catch(error=>{
      //   console.log("Erro");
      //   this.dependente.foto_perfil = "https://www.meme4fun.com/images/b425fa11-06f2-4a4b-a88d-299f773a59f5.png";
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaDependentePage');
  }
  editarDependente() {
    console.log(this.dependente);
    this.navCtrl.push(DependentePage, { dependente: this.dependente });
  }
}
