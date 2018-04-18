import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../../pages/home/home';
@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {
  usuario = {} as Usuario;
  constructor(
    private usuarioProvider: UsuarioProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  save (usuario: Usuario){
    var path = this.usuarioProvider.salvar(usuario);
    if(path){
      this.navCtrl.setRoot(HomePage);
    }
  }

}
