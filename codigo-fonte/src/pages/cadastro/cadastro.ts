import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
    user = {} as User;
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

    async register(user: User) {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
      } catch (e) {
        console.error(e);
      }
    }

}
