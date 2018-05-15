import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroLembretesPage } from './cadastro-lembretes';

@NgModule({
  declarations: [
    CadastroLembretesPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroLembretesPage),
  ],
})
export class CadastroLembretesPageModule {}
