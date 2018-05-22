import { LembretesProvider } from './../../providers/lembretes/lembretes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-lembretes-edit',
  templateUrl: 'lembretes-edit.html',
})
export class LembretesEditPage {
  title: string;
  form: FormGroup;
  Lembretes: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: LembretesProvider,
    private toast: ToastController) {

    // maneira 1
    this.Lembretes = this.navParams.data.Lembretes || { };
    this.createForm();

    // // maneira 2
    // this.lembretes = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();

    //     this.lembretes = c;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.Lembretes ? 'Alterando lembrete' : 'Novo lembrete';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.lembretes.key],
      name: [this.lembretes.name, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Lembrete salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Lembrete.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
