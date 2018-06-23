webpackJsonp([0],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaDependentePageModule", function() { return PaginaDependentePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagina_dependente__ = __webpack_require__(1026);
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
                __WEBPACK_IMPORTED_MODULE_2__pagina_dependente__["a" /* PaginaDependentePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagina_dependente__["a" /* PaginaDependentePage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
            ],
        })
    ], PaginaDependentePageModule);
    return PaginaDependentePageModule;
}());

//# sourceMappingURL=pagina-dependente.module.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaDependentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_dependente_acompanhamento_tab_dependente_acompanhamento__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cadastro_dependente_dependente__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cadastro_lembretes_cadastro_lembretes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dependente_dependente__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_dependente_lembretes_tab_dependente_lembretes__ = __webpack_require__(605);
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
        this.lembreteLista = __WEBPACK_IMPORTED_MODULE_6__tab_dependente_lembretes_tab_dependente_lembretes__["a" /* TabDependenteLembretesPage */];
        this.informativosLista = __WEBPACK_IMPORTED_MODULE_0__tab_dependente_acompanhamento_tab_dependente_acompanhamento__["a" /* TabDependenteAcompanhamentoPage */];
        this.dependente = this.navParams.data.dependente || {};
    }
    PaginaDependentePage.prototype.editarDependente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_cadastro_dependente_dependente__["a" /* DependentePage */], { dependente: this.dependente });
    };
    PaginaDependentePage.prototype.pushcadastroLembretes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_cadastro_lembretes_cadastro_lembretes__["a" /* CadastroLembretesPage */]);
    };
    PaginaDependentePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pagina-dependente',template:/*ion-inline-start:"c:\mobile\projetoNanny\src\pages\pagina-dependente\pagina-dependente.html"*/'<!--\n  Generated template for the PaginaDependentePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{dependente.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n  <div *ngIf="dependente.foto_perfil == null">\n    <img src="https://ih1.redbubble.net/image.445781365.8284/flat,800x800,075,f.u2.jpg" (click)="editarDependente(dependente)"/>\n      </div>\n  <div *ngIf="dependente.foto_perfil != null">\n    <img src="{{dependente.foto_perfil}}" (click)="editarDependente()"/>\n  </div>\n  <ion-col col-6 class="centralizado">\n    <button ion-button color="light" (click)="  pushcadastroLembretes()" >Cadastro Lembretes</button>\n    </ion-col>\n    <h1 >{{ dependente.nome }}</h1>\n    <ion-tabs selectedIndex="0">\n      <ion-tab [root]="lembreteLista" tabIcon="list" [rootParams]="dependente.key"></ion-tab>\n      <ion-tab [root]="informativosLista" tabIcon="book" [rootParams]="dependente.data_nasc"></ion-tab>\n    </ion-tabs>\n  </ion-content>\n'/*ion-inline-end:"c:\mobile\projetoNanny\src\pages\pagina-dependente\pagina-dependente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_dependente_dependente__["a" /* DependenteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_dependente_dependente__["a" /* DependenteProvider */]) === "function" && _c || Object])
    ], PaginaDependentePage);
    return PaginaDependentePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=pagina-dependente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map