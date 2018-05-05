import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { DependentePage } from '../dependente/dependente';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
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
  sair(){
    this.usuarioProvider.sair();
  }
}
