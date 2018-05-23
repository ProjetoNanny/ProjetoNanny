import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dependente } from '../../models/dependente';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-dependente',
  templateUrl: 'dependente.html',
})
export class DependentePage {
  form: FormGroup;
  dependente = {} as Dependente;

  constructor(private dependenteProvider: DependenteProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
      this.dependente = navParams.get("dependente") || {};
  }

  save (dependente: Dependente){
    let resposta = this.dependenteProvider.salvar(dependente);
    if(resposta)
        this.navCtrl.popToRoot();
  }
  excluir (dependente: Dependente){
    let alert = this.alertCtrl.create({
    title: 'Excluir Dependente',
    message: 'Você deseja mesmo excluir este dependente?',
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
          let resposta = this.dependenteProvider.excluir(dependente);
          if(resposta)
              this.navCtrl.popToRoot();
        }
      }
    ]
  });
  alert.present();

  }
}
