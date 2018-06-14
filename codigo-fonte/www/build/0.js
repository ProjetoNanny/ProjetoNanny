webpackJsonp([0],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaDependentePageModule", function() { return PaginaDependentePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagina_dependente__ = __webpack_require__(1021);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginaDependentePageModule = /** @class */ (function () {
    function PaginaDependentePageModule() {
    }
    PaginaDependentePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagina_dependente__["a" /* PaginaDependentePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagina_dependente__["a" /* PaginaDependentePage */]),
            ],
        })
    ], PaginaDependentePageModule);
    return PaginaDependentePageModule;
}());

//# sourceMappingURL=pagina-dependente.module.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaDependentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_dependente_dependente__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dependente_dependente__ = __webpack_require__(88);
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
 * Generated class for the PaginaDependentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaginaDependentePage = /** @class */ (function () {
    function PaginaDependentePage(navCtrl, navParams, dependenteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dependenteProvider = dependenteProvider;
        this.dependente = {};
        this.dependente = this.navParams.data.dependente || {};
        console.log(this.dependente);
        // this.dependenteProvider.getFoto(this.dependente.key).then(url=>{
        //   console.log(url);
        //     this.dependente.foto_perfil = url;
        // }).catch(error=>{
        //   console.log("Erro");
        //   this.dependente.foto_perfil = "https://www.meme4fun.com/images/b425fa11-06f2-4a4b-a88d-299f773a59f5.png";
        // });
    }
    PaginaDependentePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaginaDependentePage');
    };
    PaginaDependentePage.prototype.editarDependente = function () {
        console.log(this.dependente);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_cadastro_dependente_dependente__["a" /* DependentePage */], { dependente: this.dependente });
    };
    PaginaDependentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagina-dependente',template:/*ion-inline-start:"C:\Users\Júlio César\Desktop\Projeto Integrador\Projeto Nanny\projnanny\src\pages\pagina-dependente\pagina-dependente.html"*/'<!--\n  Generated template for the PaginaDependentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{dependente.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="dependente.foto_perfil == null">\n    <img src="https://ih1.redbubble.net/image.445781365.8284/flat,800x800,075,f.u2.jpg" (click)="editarDependente(dependente)"/>\n  </div>\n  <div *ngIf="dependente.foto_perfil != null">\n    <img src="{{dependente.foto_perfil}}" (click)="editarDependente()"/>\n  </div>\n    <h1 >{{ dependente.nome }}</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Júlio César\Desktop\Projeto Integrador\Projeto Nanny\projnanny\src\pages\pagina-dependente\pagina-dependente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dependente_dependente__["a" /* DependenteProvider */]])
    ], PaginaDependentePage);
    return PaginaDependentePage;
}());

//# sourceMappingURL=pagina-dependente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map