import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaDependentePage } from './pagina-dependente';

@NgModule({
  declarations: [
    PaginaDependentePage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaDependentePage),
  ],
})
export class PaginaDependentePageModule {}
