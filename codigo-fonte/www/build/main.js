webpackJsonp([11],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCQwYTAyZ1kj4z_KMpZXc7eZFyjXg3Hgyo",
        authDomain: "projeto-nanny.firebaseapp.com",
        databaseURL: "https://projeto-nanny.firebaseio.com",
        projectId: "projeto-nanny",
        storageBucket: "projeto-nanny.appspot.com",
        messagingSenderId: "179161098147"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\mobile\projetoNanny\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroLembretesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroLembretesProvider = /** @class */ (function () {
    function CadastroLembretesProvider(http) {
        this.http = http;
        console.log('Hello CadastroLembretesProvider Provider');
    }
    CadastroLembretesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CadastroLembretesProvider);
    return CadastroLembretesProvider;
}());

//# sourceMappingURL=cadastro-lembretes.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelpProvider = /** @class */ (function () {
    function HelpProvider(http) {
        this.http = http;
        console.log('Hello HelpProvider Provider');
    }
    HelpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HelpProvider);
    return HelpProvider;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembretesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LembretesProvider = /** @class */ (function () {
    function LembretesProvider(db, firebaseApp, http, toastCtrl) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.PATH = "lembretes/";
        this.user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        this.lembretesList = this.db.list('/lembretes');
    }
    LembretesProvider.prototype.salvar = function (lembretes) {
        var _this = this;
        //lembretes.id_dependente = ;
        lembretes.id_usuario = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid;
        console.log(lembretes);
        return this.lembretesList.push(lembretes)
            .then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Cadastro realizado com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success");
        });
    };
    LembretesProvider.prototype.editar = function (lembretes) {
        var _this = this;
        //lembretes.id_dependente = ;
        lembretes.id_usuario = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid;
        console.log(lembretes);
        return this.lembretesList.update(lembretes.key, lembretes)
            .then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Cadastro realizado com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success");
        });
    };
    LembretesProvider.prototype.getLembretes = function () {
        return this.db.list('/lembretes', function (ref) { return ref.orderByChild('id_lembrete').equalTo(1); });
    };
    LembretesProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("id_usuario")
            .equalTo(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    LembretesProvider.prototype.getLembretePorDependente = function (id_dep) {
        console.log(id_dep);
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("id_dependente")
            .equalTo(id_dep); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    LembretesProvider.prototype.remove = function (lembretes) {
        var _this = this;
        return this.lembretesList.remove(lembretes.key)
            .then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Lembrete " + lembretes.titulo + " excluido com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success delete");
        }, function (reject) {
            var toast = _this.toastCtrl.create({
                message: "Erro ao excluir o lembrete, por favor, verificar os campos.",
                duration: 3000
            });
        });
    };
    LembretesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], LembretesProvider);
    return LembretesProvider;
}());

//# sourceMappingURL=lembretes.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioProvider = /** @class */ (function () {
    // dependentes: AngularFireList<Dependente[]>;
    function UsuarioProvider(db, firebaseApp, http, toastCtrl) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]();
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
        this.usuarioList = this.db.list('/usuario');
    }
    UsuarioProvider.prototype.salvar = function (usuario) {
        var _this = this;
        return this.db.object('/usuario/' + __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid)
            .set(usuario).then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Usuário alterado com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success");
        }, function (reject) {
            var toast = _this.toastCtrl.create({
                message: "Erro ao realizar o cadastro, por favor, verificar os campos.",
                duration: 3000
            });
        });
        ;
    };
    UsuarioProvider.prototype.sair = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signOut();
    };
    UsuarioProvider.prototype.get = function () {
        return this.db.object('/usuario/' + __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    UsuarioProvider.prototype.getUsuario = function () {
        return this.db.list('/usuario/' + __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid).snapshotChanges().subscribe(function (usuario) {
            console.log(usuario[0].payload.valueOf());
        });
        // firebase.database().ref('/usuario/').child(firebase.auth().currentUser.uid);
    };
    UsuarioProvider.prototype.getFoto = function () {
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref().child("/usuario/" + __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid + "/myPhoto.jpg").getDownloadURL();
    };
    UsuarioProvider.prototype.excluir = function (usuario) {
        var _this = this;
        return this.usuarioList.remove(usuario.uid)
            .then(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.delete()
                .then(function () {
                __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signOut();
            })
                .catch(function (error) {
                // An error happened
            });
        }, function (reject) {
            var toast = _this.toastCtrl.create({
                message: "Erro ao excluir o dependente, por favor, verificar os campos.",
                duration: 3000
            });
        });
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* ToastController */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DependentePage = /** @class */ (function () {
    function DependentePage(dependenteProvider, navCtrl, navParams, alertCtrl) {
        this.dependenteProvider = dependenteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dependente = {};
        this.dependente = navParams.get("dependente") || {};
    }
    DependentePage.prototype.save = function (dependente) {
        var resposta = this.dependenteProvider.salvar(dependente);
        if (resposta)
            this.navCtrl.popToRoot();
    };
    DependentePage.prototype.excluir = function (dependente) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir Dependente',
            message: 'Você deseja mesmo excluir este dependente?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        var resposta = _this.dependenteProvider.excluir(dependente);
                        if (resposta)
                            _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    DependentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dependente',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\cadastro-dependente\dependente.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Dependente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.nome" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Data de Nascimento</ion-label>\n    <ion-input type="date" [(ngModel)]="dependente.data_nasc"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Horário</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.horario"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Tipo Sanguíneo</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.tipo_sanguineo"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Altura</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.altura"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Peso</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.peso"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Onde estuda?</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.escola"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Gênero</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.genero"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Personalidade</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.personalidade"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Hobbies</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.hobbies"></ion-input>\n  </ion-item>\n  <button class="button button-positive button-block" type="submit" ng-disabled="contato.$invalid">Salvar</button>\n\n  <button ion-button (click)="save(dependente)">Cadastrar</button>\n  <button ion-button (click)="excluir(dependente)" color="danger">Excluir</button>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\cadastro-dependente\dependente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__["a" /* DependenteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DependentePage);
    return DependentePage;
}());

//# sourceMappingURL=dependente.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    AuthProvider.prototype.createAuthUser = function (user) {
        return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_usuario_perfil_usuario__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_dependente_dependente__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lembretes_lembretes__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lista_dependentes_lista_dependentes__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(authService, navCtrl, usuarioProvider) {
        var _this = this;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.usuarioProvider = usuarioProvider;
        this.usuario = {};
        var subscribe = this.usuarioProvider.get().subscribe(function (c) {
            subscribe.unsubscribe();
            console.log(c);
            _this.usuario = c;
            console.log(_this.usuario);
        });
        console.log(this.usuario);
        usuarioProvider.getFoto().then(function (url) {
            console.log(url);
            _this.usuario.foto_perfil = url;
        }).catch(function (e) {
            console.log(e);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var subscribe = this.usuarioProvider.get().subscribe(function (c) {
            subscribe.unsubscribe();
            console.log(c);
            _this.usuario = c;
            console.log(_this.usuario);
        });
        console.log(this.usuario);
        this.usuarioProvider.getFoto().then(function (url) {
            console.log(url);
            _this.usuario.foto_perfil = url;
        }).catch(function (e) {
            console.log(e);
        });
    };
    HomePage.prototype.pushDependente = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_dependente_dependente__["a" /* DependentePage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushHelp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__help_help__["a" /* HelpPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushUsuario = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.usuario);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */], { usuario: this.usuario });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushListaDependentes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__lista_dependentes_lista_dependentes__["a" /* ListaDependentesPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushLembretes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lembretes_lembretes__["a" /* LembretesPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushCadastroLembretes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.sair = function () {
        this.usuarioProvider.sair();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\home\home.html"*/'<ion-header>\n  <ion-item padding>\n    <ion-icon name="help" item-right class="botao_ajuda" (click)="pushHelp()"></ion-icon>\n  </ion-item>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="centralizado">\n        <img src="{{usuario.foto_perfil}}" class="botao_circulo" (click)="pushUsuario()"/>\n        <h3>{{usuario.nome}}</h3>\n      </ion-col>\n      <ion-col col-6 class="centralizado">\n        <button ion-button color="light" (click)="pushDependente()" class="botao_circulo"><i class="material-icons">group</i></button>\n        <p>Dependentes</p>\n      </ion-col>\n      <ion-col col-6 class="centralizado">\n        <button ion-button color="light" (click)="pushListaDependentes()" class="botao_circulo">Lista de dependentes</button>\n        <p>Lista de Dependentes</p>\n      </ion-col>\n      <ion-col col-6 class="centralizado">\n        <button ion-button color="light" (click)="pushCadastroLembretes()" class="botao_circulo">  <ion-icon name="ios-document-outline"></ion-icon></button>\n        <p>Cadastrar Lembrete</p>\n      </ion-col>\n      <ion-col col-6 class="centralizado">\n        <button ion-button color="light" (click)="pushLembretes()" class="botao_circulo">Todos os Lembretes</button>\n        <p>Listar de Lembretes</p>\n      </ion-col>\n      <ion-col col-12 class="centralizado">\n        <button ion-button color="danger" (click)="sair()" class="botao_sair">Sair</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(afAuth, navCtrl, navParams, userProvider, authProvider) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.user = {};
    }
    CadastroPage.prototype.register = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.authProvider.createAuthUser(usuario).then(function (result) {
                    usuario.uid = result.uid;
                    _this.userProvider.salvar(usuario);
                }).catch(function (e) {
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Criar conta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n      <ion-icon name="md-image"></ion-icon>\n    </button>\n  </ion-item>\n\n  <button ion-button color="light" (click)="register(user)">Register</button>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perguntas Frequentes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 class="centralizado">\n        <button ion-button color="light">Sair</button>\n      </ion-col>\n      <ion-col col-12 class="centralizado">\n        <button ion-button color="light">Sair</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembretesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_lembretes_lembretes__ = __webpack_require__(119);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LembretesPage = /** @class */ (function () {
    function LembretesPage(navCtrl, navParams, db, toastCtrl, params, lembretesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.PATH = "lembretes/";
        this.lembretes = lembretesProvider.getAll();
    }
    LembretesPage.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("id_usuario")
            .equalTo(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    LembretesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembretesPage');
    };
    LembretesPage.prototype.editar = function (lembrete) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */], { lembrete: lembrete });
    };
    LembretesPage.prototype.remove = function (lembretes) {
        var _this = this;
        return this.db.list(this.PATH).remove(lembretes.key)
            .then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Lembrete removido com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success");
        });
    };
    LembretesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lembretes',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\lembretes\lembretes.html"*/'<!--\n  Generated template for the LembretesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lembretes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let lembrete of lembretes | async">\n      <ion-item>\n        <h1>{{ lembrete.titulo }}</h1>\n      </ion-item>\n      <ion-item-options side="left">\n        <div *ngIf="lembrete.titulo != null">\n          <button ion-button color="secondary" (click)="editar(lembrete)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </div>\n        <button ion-button color="danger" (click)="remove(lembrete)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\lembretes\lembretes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_lembretes_lembretes__["a" /* LembretesProvider */]])
    ], LembretesPage);
    return LembretesPage;
}());

//# sourceMappingURL=lembretes.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDependentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_dependente_dependente__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListaDependentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaDependentesPage = /** @class */ (function () {
    function ListaDependentesPage(navCtrl, navParams, db, dependenteProvader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.dependenteProvader = dependenteProvader;
        this.PATH = "dependentes/";
        this.dependentes = this.dependenteProvader.getAll();
    }
    ListaDependentesPage.prototype.selecionarDependente = function (dependente) {
        console.log(dependente);
        this.navCtrl.push("PaginaDependentePage", { dependente: dependente });
    };
    ListaDependentesPage.prototype.adicionarDependente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_dependente_dependente__["a" /* DependentePage */]);
    };
    ListaDependentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-dependentes',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\lista-dependentes\lista-dependentes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-item padding>\n      <ion-title>Dependentes</ion-title>\n      <ion-icon name="help" item-right class="botao_ajuda"></ion-icon>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let dependente of dependentes | async" col-6>\n        <ion-item (click)="selecionarDependente(dependente)" class="botao_circulo centralizado no-padding">\n          <div *ngIf="dependente.foto_perfil == null">\n            <img src="https://ih1.redbubble.net/image.445781365.8284/flat,800x800,075,f.u2.jpg" />\n          </div>\n          <div *ngIf="dependente.foto_perfil != null">\n            <img src="{{dependente.foto_perfil}}" />\n          </div>\n        </ion-item>\n        <p class="centralizado no-padding">{{ dependente.nome }}</p>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item (click)="adicionarDependente(dependente)" class="botao_circulo centralizado no-padding">\n          <div>\n            <ion-icon name="add" style="font-size:100px;"></ion-icon>\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\lista-dependentes\lista-dependentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__["a" /* DependenteProvider */]])
    ], ListaDependentesPage);
    return ListaDependentesPage;
}());

//# sourceMappingURL=lista-dependentes.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginPage = /** @class */ (function () {
    function LoginPage(toastCtrl, afAuth, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        console.log(this.user);
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        toast = this.toastCtrl.create({
                            message: "Não foi possível realizar o login",
                            duration: 3000
                        });
                        toast.present();
                        console.error(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__["a" /* CadastroPage */]);
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\login\login.html"*/'<ion-content padding>\n  <div class="conteudo">\n    <div class="centralizado logo_login">\n      <img src="http://pm1.narvii.com/6686/8a210fa96c69cafcd4f2cb0170d4e30a26e793f0_00.jpg" />\n    </div>\n    <h1 class="centralizado">Nanny</h1>\n    <div class="login-campos">\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </div>\n    <div class="login-botoes centralizado">\n      <button class="botao-primario" ion-button (click)="login(user)">Enviar</button>\n      <button class="botao-primario" ion-button color="light" (click)="register(user)">Criar conta</button>\n      <br />\n      <a href="#">Esqueceu a senha?</a>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PerfilUsuarioPage = /** @class */ (function () {
    function PerfilUsuarioPage(usuarioProvider, navCtrl, navParams, authProvider, alertCtrl, toastCtrl) {
        this.usuarioProvider = usuarioProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.usuario = {};
        this.usuario = this.navParams.data.usuario || {};
        console.log(this.usuario);
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref('/usuario/' + __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
        //console.log( usuarioProvider.getUsuario());
        var ref = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/usuario/').child(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
    }
    PerfilUsuarioPage.prototype.takePhoto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.CAMERA,
            encodingType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    PerfilUsuarioPage.prototype.selectPhoto = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY,
            destinationType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            quality: 100,
            encodingType: __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Camera */].EncodingType.PNG,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    PerfilUsuarioPage.prototype.uploadPhoto = function () {
        var _this = this;
        this.myPhotosRef.child('myPhoto.png')
            .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
            .then(function (savedPicture) {
            _this.myPhotoURL = savedPicture.downloadURL;
        });
    };
    PerfilUsuarioPage.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    PerfilUsuarioPage.prototype.save = function (usuario) {
        var resposta = this.usuarioProvider.salvar(usuario);
        if (resposta)
            this.navCtrl.popToRoot();
    };
    PerfilUsuarioPage.prototype.excluir = function (usuario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir Dependente',
            message: 'Você deseja mesmo excluir este dependente?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        var resposta = _this.usuarioProvider.excluir(usuario);
                        if (resposta)
                            _this.navCtrl.popToRoot();
                        var toast = _this.toastCtrl.create({
                            message: "Conta excluida com sucesso.",
                            duration: 3000
                        });
                        toast.present();
                    }
                }
            ]
        });
        alert.present();
    };
    PerfilUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-usuario',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\perfil-usuario\perfil-usuario.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-row>\n      <ion-col width-50>\n        <button ion-button color="danger" type="button" full round large (click)="takePhoto()">\n                    <ion-icon name="md-camera"></ion-icon>\n                </button>\n      </ion-col>\n      <ion-col width-50>\n        <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n                    <ion-icon name="md-image"></ion-icon>\n                </button>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <img class="img-responsive" src="{{ usuario.foto_perfil }}" />\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.nome"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Data de Nascimento</ion-label>\n    <!-- <ion-input type="date" [(ngModel)]="usuario.data_nasc" placeholder=""></ion-input> -->\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="usuario.data_nasc"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>País</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.pais"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Cidade</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.cidade"></ion-input>\n  </ion-item>\n  <button ion-button (click)="save(usuario)">Salvar</button>\n  <button ion-button (click)="excluir(usuario)" color="danger">Excluir</button>\n</ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\perfil-usuario\perfil-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PerfilUsuarioPage);
    return PerfilUsuarioPage;
}());

//# sourceMappingURL=perfil-usuario.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-dependente/dependente.module": [
		1015,
		10
	],
	"../pages/cadastro-lembretes/cadastro-lembretes.module": [
		1016,
		9
	],
	"../pages/cadastro/cadastro.module": [
		1017,
		8
	],
	"../pages/help/help.module": [
		1018,
		7
	],
	"../pages/lembretes/lembretes.module": [
		1019,
		6
	],
	"../pages/lista-dependentes/lista-dependentes.module": [
		1020,
		5
	],
	"../pages/login/login.module": [
		1022,
		4
	],
	"../pages/pagina-dependente/pagina-dependente.module": [
		1021,
		0
	],
	"../pages/perfil-usuario/perfil-usuario.module": [
		1023,
		3
	],
	"../pages/tab-dependente-acompanhamento/tab-dependente-acompanhamento.module": [
		1024,
		2
	],
	"../pages/tab-dependente-lembretes/tab-dependente-lembretes.module": [
		1025,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformativosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformativosProvider = /** @class */ (function () {
    function InformativosProvider(db, firebaseApp, http, toastCtrl) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.PATH = "Informativos/";
    }
    InformativosProvider.prototype.getInformativoPorIdade = function (idade) {
        console.log(idade);
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("idade_min_info")
            .startAt(idade - 1); })
            .snapshotChanges()
            .map(function (changes) {
            changes.forEach(function (childSnapshot) {
                var childData = childSnapshot.payload.val();
                if (childData.idade_max_info <= 4) {
                    console.log(childData);
                    changes.pop();
                }
            });
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    InformativosProvider.prototype.getInformativoPorIdade2 = function (idade) {
        var query = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"]().ref(this.PATH).orderByKey();
        return query.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                if (childData.idade_max_info <= 4) {
                    console.log(childSnapshot);
                }
            });
        });
        /*var ref = firebase.database().ref(this.PATH);
        return ref.orderByChild("idade_min_info").startAt(0).on("child_added", function(snapshot) {
          var a = snapshot.val();
          if (a.idade_max_info <= 4) {
            console.log(a);
          }
        });*/
    };
    InformativosProvider.prototype.getAll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    InformativosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], InformativosProvider);
    return InformativosProvider;
}());

//# sourceMappingURL=informativo.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDependenteAcompanhamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informativo_informativo__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabDependenteAcompanhamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabDependenteAcompanhamentoPage = /** @class */ (function () {
    function TabDependenteAcompanhamentoPage(informativoProvider, navCtrl, navParams, params) {
        this.informativoProvider = informativoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data_nasc = params.data;
        this.idade = this.getAge(this.data_nasc);
        this.informativoProvider = informativoProvider;
        this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
        //console.log( this.informativos );
    }
    TabDependenteAcompanhamentoPage.prototype.ionViewWillEnter = function () {
        console.log(this.idade);
        this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
        //this.informativos = this.informativoProvider.getInformativoPorIdade(this.idade);
    };
    TabDependenteAcompanhamentoPage.prototype.getAge = function (date) {
        var newDate = new Date(date);
        var now = new Date();
        var age = now.getFullYear() - newDate.getFullYear();
        return age;
    };
    ;
    TabDependenteAcompanhamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-dependente-acompanhamento',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\tab-dependente-acompanhamento\tab-dependente-acompanhamento.html"*/'<!--\n  Generated template for the LembretesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<br />\n<br />\n<ion-header>\n  <ion-navbar>\n    <ion-title>Lembretes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let informativo of informativos | async">\n      <h1>{{ informativo.nome_info }}</h1>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\tab-dependente-acompanhamento\tab-dependente-acompanhamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_informativo_informativo__["a" /* InformativosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabDependenteAcompanhamentoPage);
    return TabDependenteAcompanhamentoPage;
}());

//# sourceMappingURL=tab-dependente-acompanhamento.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDependenteLembretesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lembretes_lembretes__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabDependenteLembretesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabDependenteLembretesPage = /** @class */ (function () {
    function TabDependenteLembretesPage(lembreteProvider, modalCtrl, navCtrl, navParams, toastCtrl, params, lembretesProvider) {
        this.lembreteProvider = lembreteProvider;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.id_dependente = params.data;
        this.lembretesProvider = lembretesProvider;
        this.lembretes = lembretesProvider.getLembretePorDependente(params.data);
    }
    TabDependenteLembretesPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad TabDependenteLembretesPage');
        console.log(this.id_dependente);
        this.lembretes = this.lembretesProvider.getLembretePorDependente(this.id_dependente);
    };
    TabDependenteLembretesPage.prototype.editarLembrete = function (lembrete) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */], { lembrete: lembrete });
        profileModal.present();
        //this.navCtrl.push(CadastroLembretesPage, { lembrete: lembrete });
    };
    TabDependenteLembretesPage.prototype.removeLembrete = function (lembretes) {
        this.lembreteProvider.remove(lembretes);
    };
    TabDependenteLembretesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-dependente-lembretes',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\tab-dependente-lembretes\tab-dependente-lembretes.html"*/'<!--\n  Generated template for the LembretesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<br />\n<br />\n<ion-header>\n    <ion-navbar>\n      <ion-title>Lembretes</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n    <ion-list>\n      <ion-item-sliding *ngFor="let lembrete of lembretes | async">\n        <ion-item>\n          <h1>{{ lembrete.titulo }}</h1>\n        </ion-item>\n        <ion-item-options side="left">\n          <div *ngIf="lembrete.titulo != null">\n            <button ion-button color="secondary" (click)="editarLembrete(lembrete)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </div>\n          <button ion-button color="danger" (click)="removeLembrete(lembrete)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\tab-dependente-lembretes\tab-dependente-lembretes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_lembretes_lembretes__["a" /* LembretesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lembretes_lembretes__["a" /* LembretesProvider */]])
    ], TabDependenteLembretesPage);
    return TabDependenteLembretesPage;
}());

//# sourceMappingURL=tab-dependente-lembretes.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(611);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_perfil_usuario_perfil_usuario__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_lembretes_lembretes__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_lista_dependentes_lista_dependentes__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_dependente_dependente__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_help_help__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_dependente_dependente__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_usuario_usuario__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_lembretes_lembretes__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tab_dependente_lembretes_tab_dependente_lembretes__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tab_dependente_acompanhamento_tab_dependente_acompanhamento__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_informativo_informativo__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_help_help__ = __webpack_require__(1014);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lista_dependentes_lista_dependentes__["a" /* ListaDependentesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lembretes_lembretes__["a" /* LembretesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_dependente_dependente__["a" /* DependentePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tab_dependente_lembretes_tab_dependente_lembretes__["a" /* TabDependenteLembretesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tab_dependente_acompanhamento_tab_dependente_acompanhamento__["a" /* TabDependenteAcompanhamentoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_help_help__["a" /* HelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/cadastro-dependente/dependente.module#DependentePageModule', name: 'DependentePage', segment: 'dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-lembretes/cadastro-lembretes.module#CadastroLembretesPageModule', name: 'CadastroLembretesPage', segment: 'cadastro-lembretes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lembretes/lembretes.module#LembretesPageModule', name: 'LembretesPage', segment: 'lembretes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-dependentes/lista-dependentes.module#ListaDependentesPageModule', name: 'ListaDependentesPage', segment: 'lista-dependentes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagina-dependente/pagina-dependente.module#PaginaDependentePageModule', name: 'PaginaDependentePage', segment: 'pagina-dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule', name: 'PerfilUsuarioPage', segment: 'perfil-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-dependente-acompanhamento/tab-dependente-acompanhamento.module#TabDependenteAcompanhamentoPageModule', name: 'TabDependenteAcompanhamentoPage', segment: 'tab-dependente-acompanhamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-dependente-lembretes/tab-dependente-lembretes.module#TabDependenteLembretesPageModule', name: 'TabDependenteLembretesPage', segment: 'tab-dependente-lembretes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_lista_dependentes_lista_dependentes__["a" /* ListaDependentesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_lembretes_lembretes__["a" /* LembretesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cadastro_dependente_dependente__["a" /* DependentePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tab_dependente_lembretes_tab_dependente_lembretes__["a" /* TabDependenteLembretesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tab_dependente_acompanhamento_tab_dependente_acompanhamento__["a" /* TabDependenteAcompanhamentoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_help_help__["a" /* HelpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_dependente_dependente__["a" /* DependenteProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_lembretes_lembretes__["a" /* LembretesProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_informativo_informativo__["a" /* InformativosProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_help_help__["a" /* HelpProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependenteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_native__ = __webpack_require__(327);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DependenteProvider = /** @class */ (function () {
    function DependenteProvider(db, firebaseApp, http, toastCtrl) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.PATH = "dependentes/";
        this.dependenteList = this.db.list('/dependentes');
    }
    DependenteProvider.prototype.salvar = function (dependente) {
        var _this = this;
        dependente.id_responsavel = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid;
        if (dependente.key == null) {
            return this.dependenteList.push(dependente)
                .then(function (resolve) {
                var toast = _this.toastCtrl.create({
                    message: "Cadastro realizado com sucesso.",
                    duration: 3000
                });
                toast.present();
                console.log("success");
            }, function (reject) {
                var toast = _this.toastCtrl.create({
                    message: "Erro ao realizar o cadastro, por favor, verificar os campos.",
                    duration: 3000
                });
            });
        }
        else {
            return this.dependenteList.update(dependente.key, dependente)
                .then(function (resolve) {
                var toast = _this.toastCtrl.create({
                    message: "Cadastro realizado com sucesso.",
                    duration: 3000
                });
                toast.present();
                console.log("success update");
            }, function (reject) {
                var toast = _this.toastCtrl.create({
                    message: "Erro ao realizar o cadastro, por favor, verificar os campos.",
                    duration: 3000
                });
            });
        }
    };
    DependenteProvider.prototype.excluir = function (dependente) {
        var _this = this;
        return this.dependenteList.remove(dependente.key)
            .then(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: "Dependente " + dependente.nome + " excluido com sucesso.",
                duration: 3000
            });
            toast.present();
            console.log("success delete");
        }, function (reject) {
            var toast = _this.toastCtrl.create({
                message: "Erro ao excluir o dependente, por favor, verificar os campos.",
                duration: 3000
            });
        });
    };
    DependenteProvider.prototype.getDependentes = function () {
        return this.db.list('/dependentes', function (ref) { return ref.orderByChild('id_responsavel').equalTo(1); });
    };
    DependenteProvider.prototype.getFoto = function (key) {
        return __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref().child("/dependente/" + key + "/myPhoto.jpg").getDownloadURL();
    };
    DependenteProvider.prototype.selectPhoto = function (id) {
        var _this = this;
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('/dependente/' + id);
        __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].getPicture({
            sourceType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].PictureSourceType.PHOTOLIBRARY,
            destinationType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            quality: 100,
            encodingType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].EncodingType.PNG,
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    DependenteProvider.prototype.takePhoto = function (id) {
        var _this = this;
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["storage"]().ref('/dependente/' + id);
        __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].getPicture({
            quality: 100,
            destinationType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].DestinationType.DATA_URL,
            sourceType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].PictureSourceType.CAMERA,
            encodingType: __WEBPACK_IMPORTED_MODULE_6_ionic_native__["a" /* Camera */].EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            _this.myPhoto = imageData;
            _this.uploadPhoto();
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    DependenteProvider.prototype.uploadPhoto = function () {
        var _this = this;
        this.myPhotosRef.child('myPhoto.png')
            .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
            .then(function (savedPicture) {
            _this.myPhotoURL = savedPicture.downloadURL;
        });
    };
    DependenteProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild("id_responsavel")
            .equalTo(__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    DependenteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ToastController */]])
    ], DependenteProvider);
    return DependenteProvider;
}());

//# sourceMappingURL=dependente.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroLembretesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lembretes_lembretes__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dependente_dependente__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroLembretesPage = /** @class */ (function () {
    function CadastroLembretesPage(toastCtrl, lembretesProvider, navCtrl, navParams, dependenteProvider) {
        this.toastCtrl = toastCtrl;
        this.lembretesProvider = lembretesProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dependenteProvider = dependenteProvider;
        this.lembrete = {};
        this.lembrete = navParams.get("lembrete") || {};
        console.log(this.lembrete);
        this.dependentes = dependenteProvider.getAll();
        console.log(this.dependentes);
    }
    CadastroLembretesPage.prototype.save = function (lembretes) {
        console.log('lembretes:' + lembretes);
        var resposta = this.lembretesProvider.salvar(lembretes);
        if (resposta)
            this.navCtrl.popToRoot();
    };
    CadastroLembretesPage.prototype.edit = function (lembretes) {
        console.log('lembretes:' + lembretes);
        var resposta = this.lembretesProvider.editar(lembretes);
        if (resposta)
            this.navCtrl.popToRoot();
    };
    CadastroLembretesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-lembretes',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\cadastro-lembretes\cadastro-lembretes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title >{{lembrete.key == null ? \'Cadastrar Lembrete\' : \'Editar Lembrete\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Dependente</ion-label>\n    <ion-select [(ngModel)]="lembrete.id_dependente">\n          <ion-option *ngFor="let dependente of dependentes | async" value="{{dependente.key}}">{{dependente.nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Título</ion-label>\n    <ion-input type="text" [(ngModel)]="lembrete.titulo" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Data Início</ion-label>\n    <ion-input type="date" displayFormat="mm/dd/yyyy" pickerFormat="MMMM YYYY" [(ngModel)]="lembrete.data_inicial"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Data Final</ion-label>\n    <ion-input type="date" [(ngModel)]="lembrete.data_final"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Repetir todo dia?</ion-label>\n    <ion-select [(ngModel)]="lembrete.repeticao"  >\n      <ion-option value="Sim">Sim</ion-option>\n      <ion-option value="Não">Não</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Categoria</ion-label>\n    <ion-input type="text" [(ngModel)]="lembrete.categoria"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Localização</ion-label>\n    <ion-input type="text" [(ngModel)]="lembrete.localizacao"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Anotações</ion-label>\n    <ion-input type="text" [(ngModel)]="lembrete.anotacoes"></ion-input>\n  </ion-item>\n  <button class="button button-positive button-block" type="submit" ng-disabled="contato.$invalid">Salvar</button>\n  <button ion-button (click)="lembrete.key == null ? save(lembrete) : edit(lembrete)">Gravar</button>\n  </ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\cadastro-lembretes\cadastro-lembretes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lembretes_lembretes__["a" /* LembretesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dependente_dependente__["a" /* DependenteProvider */]])
    ], CadastroLembretesPage);
    return CadastroLembretesPage;
}());

//# sourceMappingURL=cadastro-lembretes.js.map

/***/ })

},[606]);
//# sourceMappingURL=main.js.map