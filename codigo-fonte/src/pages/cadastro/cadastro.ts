import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
    user = {} as Usuario;
  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UsuarioProvider,
    public authProvider: AuthProvider
  ) {
  }
  async register(usuario: Usuario) {
    this.authProvider.createAuthUser(usuario).then((result) =>{
      usuario.uid = result.uid;
      this.userProvider.salvar(usuario);
    }).catch((e)=>{
      console.log(e);
    });
  }

}
