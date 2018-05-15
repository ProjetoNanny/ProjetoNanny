import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { DependentePage } from '../cadastro-dependente/dependente';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaDependentesPage } from '../lista-dependentes/lista-dependentes';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public authService: AngularFireAuth,
    public navCtrl: NavController,
    private usuarioProvider: UsuarioProvider
  ) {
  }
  async pushDependente(){
    this.navCtrl.push(DependentePage);
  }
  async pushUsuario(){
    this.navCtrl.push(PerfilUsuarioPage);
  }
  async pushListaDependentes(){
    this.navCtrl.push(ListaDependentesPage);
  }
  sair(){
    this.usuarioProvider.sair();
  }
}
