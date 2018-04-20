import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDependentesPage } from './lista-dependentes';

@NgModule({
  declarations: [
    ListaDependentesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDependentesPage),
  ],
})
export class ListaDependentesPageModule {}
