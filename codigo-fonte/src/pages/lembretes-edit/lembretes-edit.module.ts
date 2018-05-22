import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LembreteEditPage } from './lembretes-edit';

@NgModule({
  declarations: [
    LembreteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(LembreteEditPage),
  ],
})
export class LembreteEditPageModule {}
