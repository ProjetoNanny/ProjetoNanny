import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { FirebaseApp } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { Dependente } from '../../models/dependente';
import * as firebase from 'firebase/app';
import { ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';
@Injectable()
export class DependenteProvider {
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  user = firebase.auth().currentUser;
  private dependenteList = this.db.list<Dependente>('/dependentes');
  constructor(
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http,
    public toastCtrl: ToastController) {}
  salvar(dependente: Dependente){
    dependente.id_responsavel = this.user.uid;
    return this.dependenteList.push(dependente)
    .then(resolve => {
      let toast = this.toastCtrl.create({
        message: "Cadastro realizado com sucesso.",
        duration: 3000
      });
      toast.present();
      console.log("success");
    }, reject =>{
      let toast = this.toastCtrl.create({
        message: "Erro ao realizar o cadastro, por favor, verificar os campos.",
        duration: 3000
      });
    });
  }

  getDependentes(){
    return this.db.list<Dependente>('/dependentes',
    ref => ref.orderByChild('id_responsavel').equalTo(1));
  }

  getFoto(key: string){
    return firebase.storage().ref().child("/dependente/" + key + "/myPhoto.jpg" ).getDownloadURL();
  }

  selectPhoto(id: string): void {
    this.myPhotosRef = firebase.storage().ref('/dependente/'+id);
    Camera.getPicture({
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  takePhoto(id:string) {
    this.myPhotosRef = firebase.storage().ref('/dependente/'+id);
    Camera.getPicture({
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
  private uploadPhoto(): void {
    this.myPhotosRef.child('myPhoto.png')
    .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
    .then((savedPicture) => {
      this.myPhotoURL = savedPicture.downloadURL;
    });
  }
}
