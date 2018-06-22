import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { DependentePage } from '../cadastro-dependente/dependente';
import { LembretesPage } from '../lembretes/lembretes';
import { HelpPage } from '../help/help';
import { CadastroLembretesPage} from '../cadastro-lembretes/cadastro-lembretes';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaDependentesPage } from '../lista-dependentes/lista-dependentes';
import { Usuario } from '../../models/usuario';
import * as firebase from 'firebase/app';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario = {} as  Usuario;
  constructor(
    public authService: AngularFireAuth,
    public navCtrl: NavController,
    private usuarioProvider: UsuarioProvider
  ) {
    const subscribe = this.usuarioProvider.get().subscribe((c: any) => {
         subscribe.unsubscribe();
         console.log(c);
        this.usuario = c;
        console.log(this.usuario);
      });
      console.log(this.usuario);
    usuarioProvider.getFoto().then(url => {
      console.log(url);
      this.usuario.foto_perfil = url;
    }).catch(e => {
      console.log(e);
    });
  }

  ionViewDidLoad() {
    const subscribe = this.usuarioProvider.get().subscribe((c: any) => {
         subscribe.unsubscribe();
         console.log(c);
        this.usuario = c;
        console.log(this.usuario);
      });
      console.log(this.usuario);
    this.usuarioProvider.getFoto().then(url => {
      console.log(url);
      this.usuario.foto_perfil = url;
    }).catch(e => {
      console.log(e);
    });
  }
  async pushDependente(){
    this.navCtrl.push(DependentePage);
  }

  async pushHelp(){
    this.navCtrl.push(HelpPage);
  }

  async pushUsuario(){
    console.log(this.usuario);
    this.navCtrl.push(PerfilUsuarioPage, {usuario: this.usuario});
  }
  async pushListaDependentes(){
    this.navCtrl.push(ListaDependentesPage);
  }
  async pushLembretes(){
    this.navCtrl.push(LembretesPage);
  }
  async pushCadastroLembretes(){
    this.navCtrl.push(CadastroLembretesPage);
  }

  sair(){
    this.usuarioProvider.sair();
  }
}
