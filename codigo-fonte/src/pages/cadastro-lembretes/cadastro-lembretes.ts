import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Lembretes } from '../../models/lembretes';
import { LembretesProvider } from '../../providers/lembretes/lembretes';
import { DependenteProvider } from '../../providers/dependente/dependente';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-cadastro-lembretes',
  templateUrl: 'cadastro-lembretes.html',
})
export class CadastroLembretesPage {
    form: FormGroup;
    lembrete = {} as Lembretes;
    dependentes: Observable<any>;

  constructor(
    private toastCtrl: ToastController,
    private lembretesProvider: LembretesProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public dependenteProvider: DependenteProvider) {
      this.lembrete = navParams.get("lembrete") || {};
      console.log(this.lembrete);
      this.dependentes=dependenteProvider.getAll();
      console.log(this.dependentes);
  }

  save (lembretes: Lembretes){
    console.log('lembretes:' + lembretes);
    let resposta = this.lembretesProvider.salvar(lembretes);
    if(resposta)
      this.navCtrl.popToRoot();

  }

  edit (lembretes: Lembretes) {
    console.log('lembretes:' + lembretes);
    let resposta = this.lembretesProvider.editar(lembretes);
    if(resposta)
      this.navCtrl.popToRoot();
  }

  // obterTitulo (lembretes: Lembretes) {
  //   if(lembretes.titulo === ''){
  //     return "q";
  //   }else{
  //     return "a";
  //   }
  //   let toast = this.toastCtrl.create({
  //     message: "qqqq",
  //     duration: 3000
  //   });
  // }
  
  //ionViewDidLoad() {
    //console.log('ionViewDidLoad CadastroLembretesPage');
  //}

}
