import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
@Injectable()
export class AuthProvider {

  constructor(
    public auth: AngularFireAuth,
    public http: HttpClient
  ) {
  }
  createAuthUser(user: {email: string, password: string}){
    return this.auth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }
}
