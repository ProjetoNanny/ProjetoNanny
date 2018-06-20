import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HelpProvider Provider');
  }

}
