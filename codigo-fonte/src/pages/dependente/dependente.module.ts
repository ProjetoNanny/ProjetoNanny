import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DependentePage } from './dependente';

@NgModule({
  declarations: [
    DependentePage,
  ],
  imports: [
    IonicPageModule.forChild(DependentePage),
  ],
})
export class DependentePageModule {}
