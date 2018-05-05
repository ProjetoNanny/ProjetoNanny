import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams) {
      console.log(this.user);
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
         this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      let toast = this.toastCtrl.create({
        message: "Não foi possível realizar o login",
        duration: 3000
      });
      toast.present();
      console.error(e.message);
    }
  }

  async register() {
    this.navCtrl.push(CadastroPage);
  }

}
