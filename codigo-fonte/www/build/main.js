webpackJsonp([5],{

/***/ 1004:
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

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(60);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Mobile\CD1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Mobile\CD1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependenteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
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
    // dependentes: AngularFireList<Dependente[]>;
    function DependenteProvider(db, firebaseApp, http) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
        this.dependenteList = this.db.list('/dependentes');
    }
    DependenteProvider.prototype.salvar = function (dependente) {
        dependente.id_responsavel = this.user.uid;
        return this.dependenteList.push(dependente);
    };
    DependenteProvider.prototype.getDependentes = function () {
        return this.db.list('/dependentes', function (ref) { return ref.orderByChild('id_responsavel').equalTo(1); });
    };
    DependenteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DependenteProvider);
    return DependenteProvider;
}());

//# sourceMappingURL=dependente.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_usuario_perfil_usuario__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dependente_dependente__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(60);
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
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.usuarioProvider = usuarioProvider;
    }
    HomePage.prototype.pushDependente = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dependente_dependente__["a" /* DependentePage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.pushUsuario = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */]);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.sair = function () {
        this.usuarioProvider.sair();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="light" (click)="pushUsuario()">Editar perfil de usuário</button>\n  <button ion-button color="light" (click)="pushDependente()">Cadastrar dependente</button>\n  <button ion-button color="danger" (click)="sair()">Sair</button>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(174);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Criar conta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n      <ion-icon name="md-image"></ion-icon>\n    </button>\n  </ion-item>\n\n  <button ion-button color="light" (click)="register(user)">Register</button>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__ = __webpack_require__(175);
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
    function DependentePage(dependenteProvider, navCtrl, navParams) {
        this.dependenteProvider = dependenteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dependente = {};
    }
    DependentePage.prototype.save = function (dependente) {
        this.dependenteProvider.salvar(dependente);
    };
    DependentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dependente',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\dependente\dependente.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Dependente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.nome"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Data de Nascimento</ion-label>\n    <ion-input type="date" [(ngModel)]="dependente.data_nasc"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Horário</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.horario"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Tipo Sanguíneo</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.tipo_sanguineo"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Altura</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.altura"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Peso</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.peso"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Onde estuda?</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.escola"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Gênero</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.genero"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Personalidade</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.personalidade"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Hobbies</ion-label>\n    <ion-input type="text" [(ngModel)]="dependente.hobbies"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="save(dependente)">Login</button>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\dependente\dependente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__["a" /* DependenteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DependentePage);
    return DependentePage;
}());

//# sourceMappingURL=dependente.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(174);
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
    function PerfilUsuarioPage(usuarioProvider, navCtrl, navParams, authProvider) {
        this.usuarioProvider = usuarioProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.usuario = {};
        this.myPhotosRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref('/usuario/' + __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
        this.myPhotoURL = this.getCurrentUserPhoto();
    }
    PerfilUsuarioPage.prototype.getCurrentUserPhoto = function () {
        var myImageRef = this.myPhotosRef.child('myPhoto.png');
        myImageRef.getDownloadURL().then(function (url) {
            console.log(url);
            // Insert url into an <img> tag to "download"
        }).catch(function (error) {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object_not_found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
        return myImageRef;
        // return firebase.storage().refFromURL(myImageRef);
    };
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
        this.usuarioProvider.salvar(usuario);
    };
    PerfilUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-usuario',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\perfil-usuario\perfil-usuario.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-row>\n      <ion-col width-50>\n        <button ion-button color="danger" type="button" full round large (click)="takePhoto()">\n                    <ion-icon name="md-camera"></ion-icon>\n                </button>\n      </ion-col>\n      <ion-col width-50>\n        <button ion-button color="secondary" type="button" full round large (click)="selectPhoto()">\n                    <ion-icon name="md-image"></ion-icon>\n                </button>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <img class="img-responsive" src="{{ myPhotoURL }}" />\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Nome</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.nome"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Data de Nascimento</ion-label>\n    <ion-input type="date" [(ngModel)]="usuario.data_nasc"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>País</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.pais"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Cidade</ion-label>\n    <ion-input type="text" [(ngModel)]="usuario.cidade"></ion-input>\n  </ion-item>\n  <button ion-button (click)="save(usuario)">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\perfil-usuario\perfil-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
    ], PerfilUsuarioPage);
    return PerfilUsuarioPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=perfil-usuario.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(213);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="login(user)">Login</button>\n  <button ion-button color="light" (click)="register(user)">Register</button>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		1006,
		4
	],
	"../pages/dependente/dependente.module": [
		1007,
		3
	],
	"../pages/lista-dependentes/lista-dependentes.module": [
		1008,
		2
	],
	"../pages/login/login.module": [
		1010,
		1
	],
	"../pages/perfil-usuario/perfil-usuario.module": [
		1009,
		0
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
webpackAsyncContext.id = 274;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDependentesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaDependentesPage = /** @class */ (function () {
    function ListaDependentesPage(dependenteProvider, navCtrl, navParams) {
        this.dependenteProvider = dependenteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
        this.dependenteList = this.dependenteProvider.getDependentes();
    }
    ListaDependentesPage.prototype.ionViewDidLoad = function () {
    };
    ListaDependentesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-dependentes',template:/*ion-inline-start:"C:\Mobile\CD1\src\pages\lista-dependentes\lista-dependentes.html"*/'<!--\n  Generated template for the ListaDependentesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>listaDependentes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let person of dependenteList">\n      <h2>{{ person.nome }}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Mobile\CD1\src\pages\lista-dependentes\lista-dependentes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_dependente_dependente__["a" /* DependenteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListaDependentesPage);
    return ListaDependentesPage;
}());

//# sourceMappingURL=lista-dependentes.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(602);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_perfil_usuario_perfil_usuario__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dependente_dependente__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_dependente_dependente__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_lista_dependentes_lista_dependentes__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(174);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_dependente_dependente__["a" /* DependentePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_dependentes_lista_dependentes__["a" /* ListaDependentesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dependente/dependente.module#DependentePageModule', name: 'DependentePage', segment: 'dependente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-dependentes/lista-dependentes.module#ListaDependentesPageModule', name: 'ListaDependentesPage', segment: 'lista-dependentes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule', name: 'PerfilUsuarioPage', segment: 'perfil-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dependente_dependente__["a" /* DependentePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_dependentes_lista_dependentes__["a" /* ListaDependentesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_dependente_dependente__["a" /* DependenteProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
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
    function UsuarioProvider(db, firebaseApp, http) {
        this.db = db;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
        this.usuarioList = this.db.list('/usuario');
    }
    UsuarioProvider.prototype.salvar = function (usuario) {
        return this.db.object('/usuario/' + usuario.uid)
            .set(usuario);
    };
    UsuarioProvider.prototype.sair = function () {
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signOut();
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[597]);
//# sourceMappingURL=main.js.map