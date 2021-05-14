(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\csbsc\workspace\na_trave\src\main.ts */"zUnb");


/***/ }),

/***/ "02AW":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/selecionar/ajuste-selecionar/ajuste-selecionar.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecalho [texto]=\"textoCabecalho\" (click)=\"botaoVoltar()\"></app-cabecalho>\r\n\r\n<div class=\"selecionar\">\r\n  <form [formGroup]=\"formTime\">\r\n    <div class=\"input-tag\">\r\n      <label for=\"\">Jogadores <span *ngIf=\"numAtletas\">- {{ numAtletas }}</span></label>\r\n      <div>\r\n        <p \r\n          *ngFor=\"let item of formTime.value.jogadores\" \r\n          (click)=\"removerAtleta(item)\">{{ item }}</p>\r\n        <input formArrayName=\"jogadores\">\r\n        <input \r\n          [(ngModel)]=\"atleta\" \r\n          name=\"jogadores\" \r\n          (keyup.enter)=\"adicionarAtleta()\"\r\n          [ngModelOptions]=\"{standalone: true}\" \r\n          placeholder=\"{{ placeholderJogador }}\" \r\n          maxlength=\"12\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-tag\">\r\n      <label for=\"\">Estrelas <span *ngIf=\"numEstrelas\">- {{ numEstrelas }}</span></label>\r\n      <p>Jogadores que não podem jogar juntos.</p>\r\n      <div>\r\n        <p \r\n          *ngFor=\"let item of formTime.value.estrelas\" \r\n          (click)=\"removerEstrela(item)\">{{ item }}</p>\r\n        <input formArrayName=\"estrelas\">\r\n        <input \r\n          [(ngModel)]=\"estrela\" \r\n          name=\"estrelas\" \r\n          (keyup.enter)=\"adicionarEstrela()\"\r\n          [ngModelOptions]=\"{standalone: true}\" \r\n          placeholder=\"{{ placeholderEstrela }}\" \r\n          maxlength=\"12\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-radio\">\r\n      <label for=\"\">Por times</label>\r\n      <p>Quantidade de jogadores por time.</p>\r\n\r\n      <div>\r\n        <div class=\"input-radio-item\" *ngFor=\"let item of qtdPorTimeArray.valor\">\r\n          <input \r\n            type=\"radio\" \r\n            [id]=\"item\" \r\n            [value]=\"item\" \r\n            [name]=\"qtdPorTimeArray.name\"\r\n            formControlName=\"qtdPorTime\">\r\n          <label [for]=\"item\">{{ item }}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"input-toggle\">\r\n      <div class=\"input-toggle-div\">\r\n        <label for=\"\">Goleiro</label>\r\n        <p>Habilitar ordem de goleiros.</p>\r\n      </div>\r\n      <ion-toggle formControlName=\"goleiro\"></ion-toggle>\r\n    </div>\r\n  </form>\r\n\r\n  <app-botao\r\n    [texto]=\"textoBotao\" \r\n    (click)=\"botaoConfirmar()\" \r\n    [class.desabilitado]=\"!isBotaoConfirmar\">\r\n  </app-botao>\r\n</div>\r\n");

/***/ }),

/***/ "0oab":
/*!********************************************!*\
  !*** ./src/app/models/tipo-equipe.enum.ts ***!
  \********************************************/
/*! exports provided: TipoEquipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoEquipe", function() { return TipoEquipe; });
var TipoEquipe;
(function (TipoEquipe) {
    TipoEquipe["MANDANTE"] = "mandante";
    TipoEquipe["VISITANTE"] = "visitante";
})(TipoEquipe || (TipoEquipe = {}));


/***/ }),

/***/ "1Wb8":
/*!***********************************************!*\
  !*** ./src/app/pages/placar/placar.module.ts ***!
  \***********************************************/
/*! exports provided: PlacarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacarPageModule", function() { return PlacarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _ajuste_placar_ajuste_placar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuste-placar/ajuste-placar.page */ "DavV");
/* harmony import */ var _placar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placar.page */ "jgmy");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "pOfa");
/* harmony import */ var _resumo_resumo_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resumo/resumo.page */ "nHQF");











let PlacarPageModule = class PlacarPageModule {
};
PlacarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ],
        declarations: [
            _placar_page__WEBPACK_IMPORTED_MODULE_7__["PlacarPage"],
            _ajuste_placar_ajuste_placar_page__WEBPACK_IMPORTED_MODULE_6__["AjustePlacarPage"],
            _resumo_resumo_page__WEBPACK_IMPORTED_MODULE_10__["ResumoPage"]
        ],
        exports: [
            _placar_page__WEBPACK_IMPORTED_MODULE_7__["PlacarPage"],
            _ajuste_placar_ajuste_placar_page__WEBPACK_IMPORTED_MODULE_6__["AjustePlacarPage"],
            _resumo_resumo_page__WEBPACK_IMPORTED_MODULE_10__["ResumoPage"]
        ],
        providers: [
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"],
            _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_9__["Insomnia"]
        ]
    })
], PlacarPageModule);



/***/ }),

/***/ "2H8A":
/*!******************************************************!*\
  !*** ./src/app/pages/placar/resumo/resumo.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resumo {\n  width: 100%;\n  height: 100%;\n  background-color: var(--preto);\n  display: flex;\n  flex-direction: column;\n}\n.resumo-placar {\n  margin: 0 var(--px-20);\n  background-color: var(--cinza);\n  color: var(--branco);\n  padding: var(--px-10) var(--px-20);\n}\n.resumo-placar div {\n  font-family: var(--led);\n  margin: 0;\n  display: flex;\n  justify-content: space-between;\n  color: var(--vermelho);\n  line-height: 1rem;\n}\n.resumo-placar div:last-of-type {\n  margin-top: 10px;\n  color: var(--amarelo);\n}\n.resumo-placar span {\n  align-self: flex-end;\n  font-family: var(--led);\n}\n.resumo-conteudo {\n  overflow-y: scroll;\n  padding: 0 var(--px-20);\n  background: url('linha.svg') repeat-y center;\n  margin: var(--px-20) 0 var(--px-60);\n}\n.resumo-ponto {\n  width: 100%;\n  height: 10px;\n  background: url('ponto.svg') no-repeat center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVzdW1vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNOO0FBRUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQU47QUFHSTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7QUFKSiIsImZpbGUiOiJyZXN1bW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICYtcGxhY2FyIHtcclxuICAgIG1hcmdpbjogMCB2YXIoLS1weC0yMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaW56YSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYnJhbmNvKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXB4LTEwKSB2YXIoLS1weC0yMCk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxlZCk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdmVybWVsaG8pO1xyXG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBkaXY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IHZhcigtLWFtYXJlbG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWNvbnRldWRvIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6IDAgdmFyKC0tcHgtMjApO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2xpbmhhLnN2ZycpIHJlcGVhdC15IGNlbnRlcjtcclxuICAgIG1hcmdpbjogdmFyKC0tcHgtMjApIDAgdmFyKC0tcHgtNjApO1xyXG4gIH1cclxuXHJcbiAgJi1wb250byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9wb250by5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "5M1V":
/*!*******************************************************!*\
  !*** ./src/app/pages/selecionar/selecionar.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".time {\n  width: 100%;\n  height: 100%;\n  background-color: var(--preto);\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  overflow-y: scroll;\n}\n.time-goleiro {\n  width: 100%;\n  color: var(--verde);\n  margin: 0 0 var(--px-20) var(--px-20);\n}\n.time-conta {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-self: start;\n  padding: 0 var(--px-20);\n}\n.time-card {\n  width: calc(50% - var(--px-10));\n  padding: var(--px-10);\n  border-radius: var(--canto);\n  background-color: var(--azul);\n  margin-bottom: var(--px-20);\n  display: flex;\n  flex-direction: column;\n}\n.time-card:nth-child(2), .time-card:nth-child(5), .time-card:nth-child(8), .time-card:nth-child(11) {\n  background-color: var(--amarelo);\n}\n.time-card:nth-child(3), .time-card:nth-child(6), .time-card:nth-child(9), .time-card:nth-child(12) {\n  background-color: var(--vermelho);\n}\n.time h6,\n.time p {\n  width: 100%;\n  color: var(--preto);\n  margin: 0;\n}\n.time h6 {\n  text-align: center;\n  margin-bottom: var(--px-10);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxlY2lvbmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUlFO0VBSUUsZ0NBQUE7QUFMSjtBQVFFO0VBSUUsaUNBQUE7QUFUSjtBQVlFOztFQUVFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFWSjtBQWFFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQVhKIiwiZmlsZSI6InNlbGVjaW9uYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmV0byk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAmLWdvbGVpcm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogdmFyKC0tdmVyZGUpO1xyXG4gICAgbWFyZ2luOiAwIDAgdmFyKC0tcHgtMjApIHZhcigtLXB4LTIwKTtcclxuICB9XHJcblxyXG4gICYtY29udGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAwIHZhcigtLXB4LTIwKTtcclxuICB9XHJcblxyXG4gICYtY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSB2YXIoLS1weC0xMCkpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tcHgtMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FudG8pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1weC0yMCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICYtY2FyZDpudGgtY2hpbGQoMiksXHJcbiAgJi1jYXJkOm50aC1jaGlsZCg1KSxcclxuICAmLWNhcmQ6bnRoLWNoaWxkKDgpLFxyXG4gICYtY2FyZDpudGgtY2hpbGQoMTEpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFtYXJlbG8pO1xyXG4gIH1cclxuXHJcbiAgJi1jYXJkOm50aC1jaGlsZCgzKSxcclxuICAmLWNhcmQ6bnRoLWNoaWxkKDYpLFxyXG4gICYtY2FyZDpudGgtY2hpbGQoOSksXHJcbiAgJi1jYXJkOm50aC1jaGlsZCgxMikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVybWVsaG8pO1xyXG4gIH1cclxuXHJcbiAgaDYsXHJcbiAgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmV0byk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1weC0xMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "5yII":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inicio {\n  height: 100%;\n  width: 100%;\n  background-color: var(--preto);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: var(--px-20);\n}\n.inicio-card {\n  background-color: var(--amarelo);\n  border-radius: var(--canto);\n  width: 100%;\n  flex-grow: 1;\n  margin-bottom: var(--px-20);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: var(--px-20);\n  color: var(--preto);\n}\n.inicio-card h1,\n.inicio-card span,\n.inicio-card p {\n  font-size: 6vw;\n  font-family: var(--bold);\n  text-transform: uppercase;\n}\n.inicio-card h1 {\n  text-transform: none;\n  font-size: 3.125rem;\n}\n.inicio-card span {\n  background-color: var(--verde);\n}\n.inicio button {\n  height: 4.375rem;\n  width: 100%;\n  border-radius: var(--canto);\n  color: var(--preto);\n  font-family: var(--bold);\n  margin-bottom: var(--px-20);\n  background-color: var(--azul);\n  text-transform: uppercase;\n}\n.inicio button:last-of-type {\n  background-color: var(--vermelho);\n}\n.inicio-feito {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.inicio-feito img {\n  height: 0.75rem;\n  margin-right: var(--px-10);\n}\n.inicio-feito p {\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n  color: var(--branco);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJOzs7RUFHRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBQU47QUFHSTtFQUNFLDhCQUFBO0FBRE47QUFLRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUU7RUFDRSxpQ0FBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBTEo7QUFPSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQUxOO0FBUUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFOTiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluaWNpbyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiB2YXIoLS1weC0yMCk7XHJcblxyXG4gICYtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbWFyZWxvKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhbnRvKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcHgtMjApO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogdmFyKC0tcHgtMjApO1xyXG4gICAgY29sb3I6IHZhcigtLXByZXRvKTtcclxuXHJcbiAgICBoMSxcclxuICAgIHNwYW4sXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDMuMTI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXJkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0LjM3NXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FudG8pO1xyXG4gICAgY29sb3I6IHZhcigtLXByZXRvKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXB4LTIwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVybWVsaG8pO1xyXG4gIH1cclxuXHJcbiAgJi1mZWl0byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IC43NXJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1weC0xMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogLjc1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYnJhbmNvKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component.scss */ "RU4I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "oo/y");






let ModalComponent = class ModalComponent {
    constructor(memoriaService, vibration) {
        this.memoriaService = memoriaService;
        this.vibration = vibration;
        this.RespostaModal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.textoBotao = 'Fechar';
    }
    ngOnInit() {
        const duracao = this.memoriaService.memoriaPlacar.duracao;
        this.textoModal = 'Os ' + duracao + ' minutos estipulados acabaram.';
        this.vibration.vibrate([1000, 500, 1000, 500, 1000]);
    }
    botaoFechar() {
        this.RespostaModal.emit();
    }
    get isModal() {
        return this.memoriaService.memoriaRelogio;
    }
};
ModalComponent.ctorParameters = () => [
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_4__["MemoriaService"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__["Vibration"] }
];
ModalComponent.propDecorators = {
    RespostaModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalComponent);



/***/ }),

/***/ "9E07":
/*!*****************************!*\
  !*** ./src/app/app.page.ts ***!
  \*****************************/
/*! exports provided: AppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPage", function() { return AppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.page.html */ "JBha");
/* harmony import */ var _app_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.page.scss */ "tbjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








// import { SplashScreen } from '@ionic-native/splash-screen';
let AppPage = class AppPage {
    constructor(statusBar, screenOrientation, route, platform) {
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.route = route;
        this.platform = platform;
        this.iniciarApp();
    }
    iniciarApp() {
        // this.platform.ready().then(() => {
        //   setTimeout(() => {
        //     this.splashScreen.hide();
        //   }, 1000);
        // });
        this.statusBar.backgroundColorByHexString('#2A2A2A');
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.route.navigateByUrl('splash');
    }
};
AppPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
AppPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppPage);



/***/ }),

/***/ "9scE":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "XlEN");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "5yII");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let InicioPage = class InicioPage {
    constructor(router) {
        this.router = router;
    }
    rotaAjustePlacar() {
        this.router.navigate(['/placar']);
    }
    rotaAjusteSelecionar() {
        this.router.navigate(['/ajuste-selecionar']);
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BniD":
/*!*************************************************************!*\
  !*** ./src/app/components/cabecalho/cabecalho.component.ts ***!
  \*************************************************************/
/*! exports provided: CabecalhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabecalhoComponent", function() { return CabecalhoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cabecalho_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cabecalho.component.html */ "OoZo");
/* harmony import */ var _cabecalho_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabecalho.component.scss */ "E6lP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CabecalhoComponent = class CabecalhoComponent {
    constructor() { }
};
CabecalhoComponent.ctorParameters = () => [];
CabecalhoComponent.propDecorators = {
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CabecalhoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cabecalho',
        template: _raw_loader_cabecalho_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cabecalho_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CabecalhoComponent);



/***/ }),

/***/ "CyD1":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-text-center\">\r\n  <img src=\"../../../assets/svg/icone.svg\" alt=\"icone\">\r\n\r\n  <h1>Na trave</h1>\r\n</div>");

/***/ }),

/***/ "DavV":
/*!******************************************************************!*\
  !*** ./src/app/pages/placar/ajuste-placar/ajuste-placar.page.ts ***!
  \******************************************************************/
/*! exports provided: AjustePlacarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustePlacarPage", function() { return AjustePlacarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ajuste_placar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ajuste-placar.page.html */ "jq9W");
/* harmony import */ var _ajuste_placar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajuste-placar.page.scss */ "YtYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/tipo-equipe.enum */ "0oab");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");








let AjustePlacarPage = class AjustePlacarPage {
    constructor(formBuilder, memoriaService, router) {
        this.formBuilder = formBuilder;
        this.memoriaService = memoriaService;
        this.router = router;
        this.textoCabecalho = 'Ajustar placa e cronômetro';
        this.textoBotao = 'Confirmar';
        this.duracaoArray = {
            name: 'duracao',
            checked: 45,
            valor: [10, 15, 20, 25, 30, 35, 40, 45]
        };
    }
    ngOnInit() {
        this.criarForm();
    }
    criarForm() {
        let mandanteNome = '';
        let visitanteNome = '';
        let duracao = 0;
        let cronometro = null;
        if (this.memoriaService.memoriaPlacar) {
            mandanteNome = this.memoriaService.memoriaPlacar.mandanteNome || src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_6__["TipoEquipe"].MANDANTE;
            visitanteNome = this.memoriaService.memoriaPlacar.visitanteNome || src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_6__["TipoEquipe"].VISITANTE;
            cronometro = this.memoriaService.memoriaPlacar.cronometro;
            duracao = this.memoriaService.memoriaPlacar.duracao || 45;
        }
        this.formPlacar = this.formBuilder.group({
            mandanteNome: [mandanteNome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            visitanteNome: [visitanteNome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cronometro: [cronometro, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            duracao: [duracao, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    confirmar() {
        this.validarForm();
        this.memoriaService.placarMemoria(this.formPlacar.value);
        this.router.navigate(['/placar']);
    }
    botaoVoltar() {
        this.router.navigate(['/placar']);
    }
    validarForm() {
        if (this.formPlacar.value.mandanteNome === '') {
            this.formPlacar.value.mandanteNome = src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_6__["TipoEquipe"].MANDANTE;
        }
        if (this.formPlacar.value.visitanteNome === '') {
            this.formPlacar.value.visitanteNome = src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_6__["TipoEquipe"].VISITANTE;
        }
    }
    get isCronometro() {
        return this.formPlacar.get('cronometro').value;
    }
};
AjustePlacarPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_7__["MemoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AjustePlacarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ajuste-placar',
        template: _raw_loader_ajuste_placar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ajuste_placar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AjustePlacarPage);



/***/ }),

/***/ "DdEe":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio.page */ "9scE");






let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_5__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "E6lP":
/*!***************************************************************!*\
  !*** ./src/app/components/cabecalho/cabecalho.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cabecalho {\n  background-color: var(--preto);\n  padding: 0 var(--px-20);\n  color: white;\n  line-height: 3.25rem;\n  display: flex;\n  line-height: 3.25rem;\n}\n.cabecalho .svg {\n  align-self: center;\n  margin-right: var(--px-20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYWJlY2FsaG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJjYWJlY2FsaG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FiZWNhbGhvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmV0byk7XHJcbiAgcGFkZGluZzogMCB2YXIoLS1weC0yMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XHJcblxyXG4gIC5zdmcge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1weC0yMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "EJP0":
/*!*****************************************************!*\
  !*** ./src/app/pages/selecionar/selecionar.page.ts ***!
  \*****************************************************/
/*! exports provided: SelecionarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarPage", function() { return SelecionarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selecionar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selecionar.page.html */ "z1qJ");
/* harmony import */ var _selecionar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecionar.page.scss */ "5M1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");






let SelecionarPage = class SelecionarPage {
    constructor(memoriaService, router) {
        this.memoriaService = memoriaService;
        this.router = router;
        this.textoCabecalho = 'Estes são os times sorteados';
        this.textoBotao = 'Confirmar';
        this.times = [];
        this.jogadoresArray = Object.assign([], this.memoriaService.memoriaTime.jogadores);
        this.estrelasArray = Object.assign([], this.memoriaService.memoriaTime.estrelas);
        this.isGoleiro = this.memoriaService.memoriaTime.goleiro;
        this.qtdPorTime = this.memoriaService.memoriaTime.qtdPorTime;
        this.qtdJogadores = this.jogadoresArray.length;
        this.qtdEstrelas = this.estrelasArray.length;
        this.qtdTotalAtletas = this.qtdJogadores + this.qtdEstrelas;
    }
    ngOnInit() {
        this.ordenarAtletas();
    }
    ordenarAtletas() {
        if (this.qtdEstrelas > 0) {
            for (let i = this.qtdEstrelas - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.estrelasArray[i], this.estrelasArray[j]] = [this.estrelasArray[j], this.estrelasArray[i]];
            }
        }
        for (let i = this.qtdJogadores - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.jogadoresArray[i], this.jogadoresArray[j]] = [this.jogadoresArray[j], this.jogadoresArray[i]];
        }
        if (this.qtdEstrelas > 0) {
            this.juntarAtletas();
        }
        else {
            this.separarTimes();
        }
    }
    juntarAtletas() {
        let index = 0;
        for (let i = 0; i < this.qtdEstrelas; i++) {
            this.jogadoresArray.splice(index, 0, this.estrelasArray[i]);
            index += this.qtdPorTime;
        }
        this.separarTimes();
    }
    separarTimes() {
        let numTime = 1;
        for (let i = 0; i < this.qtdTotalAtletas; i = i + this.qtdPorTime) {
            this.times.push({
                time: 'Time - ' + numTime++,
                jogadores: this.jogadoresArray.slice(i, i + this.qtdPorTime)
            });
        }
        this.ordenarTimes();
    }
    ordenarTimes() {
        this.times.forEach(item => {
            for (let e = item.jogadores.length - 1; e > 0; e--) {
                const j = Math.floor(Math.random() * (e + 1));
                [item.jogadores[e], item.jogadores[j]] = [item.jogadores[j], item.jogadores[e]];
            }
        });
        this.numerarAtletas();
    }
    numerarAtletas() {
        let numAtleta = 1;
        this.times.forEach(item => {
            for (let i = 0; i < this.qtdPorTime; i++) {
                item.jogadores[i] = numAtleta + ' - ' + item.jogadores[i];
                if (numAtleta >= this.qtdPorTime) {
                    numAtleta = 1;
                }
                else {
                    numAtleta++;
                }
            }
        });
    }
    confirmar() {
        this.router.navigate(['/inicio']);
    }
    botaoVoltar() {
        this.router.navigate(['/ajuste-selecionar']);
    }
};
SelecionarPage.ctorParameters = () => [
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_5__["MemoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SelecionarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-selecionar',
        template: _raw_loader_selecionar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selecionar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelecionarPage);



/***/ }),

/***/ "GjeT":
/*!*****************************************************************!*\
  !*** ./src/app/components/resumo-item/resumo-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResumoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumoItemComponent", function() { return ResumoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resumo_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resumo-item.component.html */ "xB4R");
/* harmony import */ var _resumo_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resumo-item.component.scss */ "WHZ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/tipo-equipe.enum */ "0oab");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");






let ResumoItemComponent = class ResumoItemComponent {
    constructor(memoriaService) {
        this.memoriaService = memoriaService;
        this.resumoItem = [];
    }
    ngOnInit() {
        this.popularResumoItem();
    }
    popularResumoItem() {
        let placarMandante = 0;
        let placarVisitante = 0;
        const arrayTemp = [];
        this.resumoInput.forEach(item => {
            if (item.equipe === src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_4__["TipoEquipe"].MANDANTE) {
                placarMandante++;
            }
            else {
                placarVisitante++;
            }
            arrayTemp.push({
                equipe: item.equipe,
                tempo: this.memoriaService.memoriaPlacar.cronometro ? item.tempo.substring(3) + ' - ' + item.periodo + '° T' : '',
                placar: placarMandante + ' x ' + placarVisitante,
                data: item.data
            });
        });
        this.resumoItem = arrayTemp.sort((a, b) => b.data < a.data ? -1 : b.data > a.data ? 1 : 0);
    }
};
ResumoItemComponent.ctorParameters = () => [
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_5__["MemoriaService"] }
];
ResumoItemComponent.propDecorators = {
    resumoInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ResumoItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resumo-item',
        template: _raw_loader_resumo_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resumo_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResumoItemComponent);



/***/ }),

/***/ "Gzz9":
/*!*******************************************************!*\
  !*** ./src/app/components/botao/botao.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".botao {\n  display: flex;\n}\n.botao button {\n  background-color: var(--verde);\n  border-radius: var(--canto);\n  color: var(--preto);\n  font-family: var(--bold);\n  height: var(--px-40);\n  margin: var(--px-20);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib3Rhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImJvdGFvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdGFvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyZGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FudG8pO1xyXG4gICAgY29sb3I6IHZhcigtLXByZXRvKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgIGhlaWdodDogdmFyKC0tcHgtNDApO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1weC0yMCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "HDQr":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/botao/botao.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"botao\">\r\n  <button (click)=\"cliqueBotao()\"> {{ texto }}</button>\r\n</div>\r\n");

/***/ }),

/***/ "JBha":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.page.html ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "JD9T":
/*!*********************************************!*\
  !*** ./src/app/services/relogio.service.ts ***!
  \*********************************************/
/*! exports provided: RelogioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelogioService", function() { return RelogioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tipo-relorio.enum */ "iG/i");
/* harmony import */ var _memoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memoria.service */ "Wkbo");




let RelogioService = class RelogioService {
    constructor(memoriaService) {
        this.memoriaService = memoriaService;
        this.status = _models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_2__["TipoRelogio"].INATIVO;
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.intervalo = 1000;
        this.tempo = '00:00:00';
    }
    iniciar() {
        this.crom = setInterval(() => { this.timer(); }, this.intervalo);
        this.status = _models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_2__["TipoRelogio"].INICIADO;
    }
    pausar() {
        clearInterval(this.crom);
        this.status = _models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_2__["TipoRelogio"].PARADO;
    }
    parar() {
        clearInterval(this.crom);
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.tempo = '00:00:00';
        this.status = _models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_2__["TipoRelogio"].PARADO;
    }
    timer() {
        this.ss++;
        if (this.ss === 59) {
            this.ss = 0;
            this.mm++;
            if (this.mm === 59) {
                this.mm = 0;
                this.hh++;
            }
        }
        const hora = (this.hh < 10 ? '0' + this.hh : this.hh);
        const minuto = (this.mm < 10 ? '0' + this.mm : this.mm);
        const segundo = (this.ss < 10 ? '0' + this.ss : this.ss);
        this.tempo = hora + ':' + minuto + ':' + segundo;
        this.validar();
    }
    validar() {
        const tempo = new Date((this.memoriaService.memoriaPlacar.duracao * 60) * 1000).toISOString().substr(11, 8);
        if (this.memoriaService.memoriaPlacar && (tempo === this.tempo || this.tempo === '00:59:59')) {
            this.parar();
            this.memoriaService.relogioMemoria(true);
            return;
        }
        this.memoriaService.relogioMemoria(false);
    }
};
RelogioService.ctorParameters = () => [
    { type: _memoria_service__WEBPACK_IMPORTED_MODULE_3__["MemoriaService"] }
];
RelogioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RelogioService);



/***/ }),

/***/ "KVyt":
/*!********************************************************************************!*\
  !*** ./src/app/pages/selecionar/ajuste-selecionar/ajuste-selecionar.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selecionar {\n  height: 100%;\n  background-color: var(--preto);\n  display: flex;\n  flex-direction: column;\n}\n.selecionar form {\n  width: 100%;\n  overflow: scroll;\n}\n.selecionar .input-tag:first-of-type {\n  margin-top: 0;\n}\n.selecionar-botao {\n  width: 100%;\n}\n.selecionar app-botao {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWp1c3RlLXNlbGVjaW9uYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSiIsImZpbGUiOiJhanVzdGUtc2VsZWNpb25hci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWNpb25hciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LXRhZzpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAmLWJvdGFvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYXBwLWJvdGFve1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "OoZo":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cabecalho/cabecalho.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cabecalho\">\r\n  <svg [class.svg]=\"texto\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.121\" height=\"17.414\">\r\n    <path data-name=\"Caminho 1\" d=\"M9.414.707l-8 8 8 8\" fill=\"none\" stroke=\"#f3f3f3\" stroke-miterlimit=\"10\"\r\n      stroke-width=\"2\" />\r\n  </svg>\r\n\r\n  <p *ngIf=\"texto\">{{ texto }}</p>\r\n</div>");

/***/ }),

/***/ "OvIv":
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
/*! exports provided: SplashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPage", function() { return SplashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash.page.html */ "CyD1");
/* harmony import */ var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page.scss */ "keRv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SplashPage = class SplashPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['/inicio']);
        }, 1200);
    }
};
SplashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashPage);



/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\r\n  <div class=\"modal-overlay\"></div>\r\n\r\n  <div class=\"modal-conteudo\">\r\n    <div class=\"modal-card\">\r\n      <h1>Acabou!</h1>\r\n\r\n      <p>{{ textoModal }}</p>\r\n    </div>\r\n\r\n    <app-botao [texto]=\"textoBotao\" (click)=\"botaoFechar()\"></app-botao>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "RHUF":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/placar/placar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecalho [texto]=\"textoCabecalho\" (click)=\"botaoVoltar()\"></app-cabecalho>\r\n\r\n<div class=\"placar\">\r\n  <div class=\"placar-cronometro\">\r\n    <div class=\"placar-periodo\" [class.desabilitado]=\"!isCronometro\">{{ periodo }}T</div>\r\n\r\n    <div class=\"placar-relogio\" [class.desabilitado]=\"!isCronometro\">{{ tempoCorrido }}</div>\r\n  </div>\r\n\r\n  <div class=\"placar-placar\">\r\n    <div class=\"placar-coluna\">\r\n      <p>{{ mandanteNome }}</p>\r\n\r\n      <h1>{{ mandantePonto }}</h1>\r\n    </div>\r\n\r\n    <div class=\"placar-coluna\">\r\n      <p>{{ visitanteNome }}</p>\r\n\r\n      <h1>{{ visitantePonto }}</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"placar-teclado\">\r\n    <div class=\"placar-superior\">\r\n      <button class=\"botao-peq\" [class.desabilitado]=\"!isCronometro\" (click)=\"periodoTrocar()\"></button>\r\n      <button class=\"botao-peq\" [class.desabilitado]=\"!isCronometro || isIniciado\" (click)=\"relogioService.iniciar()\"></button>\r\n      <button class=\"botao-peq\" [class.desabilitado]=\"!isCronometro || !isIniciado\" (click)=\"relogioService.pausar()\"></button>\r\n      <button class=\"botao-peq\" [class.desabilitado]=\"!isCronometro || !isIniciado\" (click)=\"relogioService.parar()\"></button>\r\n      <button class=\"botao-peq\" (click)=\"ajustePagina()\"></button>\r\n      <button class=\"botao-peq\" [class.desabilitado]=\"!isResumo\" (click)=\"resumoPagina()\"></button>\r\n    </div>\r\n\r\n    <div class=\"placar-inferior\">\r\n      <button class=\"botao-peq\" (click)=\"aumentarPonto('mandante')\"></button>\r\n      <button class=\"botao-peq\" (click)=\"dimimuirPonto('mandante')\"></button>\r\n      <button class=\"botao-peq\" (click)=\"dimimuirPonto('visitante')\"></button>\r\n      <button class=\"botao-peq\" (click)=\"aumentarPonto('visitante')\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-modal *ngIf=\"memoriaService.memoriaRelogio\" (RespostaModal)=\"RespostaModal()\"></app-modal>");

/***/ }),

/***/ "RU4I":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  height: 100%;\n}\n.modal-overlay {\n  height: 100%;\n  width: 100%;\n  background-color: var(--preto);\n  position: absolute;\n  animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n.modal-conteudo {\n  width: 100%;\n  animation: slide-bottom 0.3s ease-in-out both;\n}\n.modal-card {\n  background-color: var(--vermelho);\n  border-radius: var(--canto);\n  margin: var(--px-20);\n  margin-bottom: 0;\n  padding: var(--px-20);\n  color: var(--preto);\n}\n.modal h1 {\n  margin: 0 0 var(--px-10) 0;\n  font-size: var(--px-20);\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: var(--opacidade);\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLDZDQUFBO0FBQUo7QUFHRTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0FBRko7QUFNQTtFQUNFO0lBQ0UsVUFBQTtFQUhGO0VBTUE7SUFDRSx5QkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFO0lBRUUsNEJBQUE7RUFMRjtFQVFBO0lBRUUsMEJBQUE7RUFORjtBQUNGIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtb3ZlcmxheSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjJzIGN1YmljLWJlemllciguMzksIC41NzUsIC41NjUsIDEuMDAwKSBib3RoXHJcbiAgfVxyXG5cclxuICAmLWNvbnRldWRvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC4zcyBlYXNlLWluLW91dCBib3RoO1xyXG4gIH1cclxuXHJcbiAgJi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcm1lbGhvKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhbnRvKTtcclxuICAgIG1hcmdpbjogdmFyKC0tcHgtMjApO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXB4LTIwKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmV0byk7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1weC0xMCkgMDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHgtMjApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IHZhcigtLW9wYWNpZGFkZSlcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "RYsE":
/*!******************************************************************************!*\
  !*** ./src/app/pages/selecionar/ajuste-selecionar/ajuste-selecionar.page.ts ***!
  \******************************************************************************/
/*! exports provided: AjusteSelecionarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjusteSelecionarPage", function() { return AjusteSelecionarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ajuste_selecionar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ajuste-selecionar.page.html */ "02AW");
/* harmony import */ var _ajuste_selecionar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajuste-selecionar.page.scss */ "KVyt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");







let AjusteSelecionarPage = class AjusteSelecionarPage {
    constructor(formBuilder, memoriaService, router) {
        this.formBuilder = formBuilder;
        this.memoriaService = memoriaService;
        this.router = router;
        this.textoCabecalho = 'Ajuste e seleção de times';
        this.textoBotao = 'Confirmar';
        this.qtdPorTimeArray = {
            name: 'qtdPorTime',
            valor: [2, 3, 5, 6, 7, 8, 9, 10, 11]
        };
    }
    ngOnInit() {
        this.criarForm();
    }
    criarForm() {
        this.formTime = this.formBuilder.group({
            qtdPorTime: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            goleiro: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            jogadores: this.formBuilder.array([]),
            estrelas: this.formBuilder.array([])
        });
    }
    adicionarAtleta() {
        if (this.atleta !== undefined &&
            this.atleta !== '') {
            this.formTime.value.jogadores.push(this.atleta);
            this.atleta = '';
        }
    }
    removerAtleta(atleta) {
        const index = this.formTime.value.jogadores.indexOf(atleta, 0);
        if (index > -1) {
            this.formTime.value.jogadores.splice(index, 1);
        }
    }
    adicionarEstrela() {
        if (this.estrela !== undefined &&
            this.estrela !== '') {
            this.formTime.value.estrelas.push(this.estrela);
            this.estrela = '';
        }
    }
    removerEstrela(estrela) {
        const index = this.formTime.value.estrelas.indexOf(estrela, 0);
        if (index > -1) {
            this.formTime.value.estrelas.splice(index, 1);
        }
    }
    botaoConfirmar() {
        this.memoriaService.timeMemoria(this.formTime.value);
        this.router.navigate(['/selecionar']);
    }
    botaoVoltar() {
        this.router.navigate(['/inicio']);
    }
    get placeholderJogador() {
        return this.formTime.value.jogadores <= 0 ? 'Quem vai jogar?' : '+1';
    }
    get placeholderEstrela() {
        return this.formTime.value.estrelas <= 0 ? 'Quem são eles?' : '+1';
    }
    get numAtletas() {
        return this.formTime.value.jogadores.length;
    }
    get numEstrelas() {
        return this.formTime.value.estrelas.length;
    }
    get isBotaoConfirmar() {
        return this.formTime.value.jogadores <= 0 ? false : true;
    }
};
AjusteSelecionarPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_6__["MemoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AjusteSelecionarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ajuste-selecionar',
        template: _raw_loader_ajuste_selecionar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ajuste_selecionar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AjusteSelecionarPage);



/***/ }),

/***/ "U3qW":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/placar/resumo/resumo.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecalho [texto]=\"textoCabecalho\" (click)=\"botaoVoltar()\"></app-cabecalho>\r\n\r\n<div class=\"resumo\">\r\n  <div class=\"resumo-placar\">\r\n    <div> {{ mandanteNome }}<span>{{ mandantePonto }}</span></div>\r\n\r\n    <div> {{ visitanteNome }}<span>{{ visitantePonto }}</span></div>\r\n  </div>\r\n\r\n  <div class=\"resumo-conteudo\">\r\n    <div class=\"resumo-ponto\"></div>\r\n\r\n    <app-resumo-item [resumoInput]=\"resumoItens\"></app-resumo-item>\r\n\r\n    <div class=\"resumo-ponto\"></div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "WHZ2":
/*!*******************************************************************!*\
  !*** ./src/app/components/resumo-item/resumo-item.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  align-self: flex-end;\n}\n\n.resumo-item {\n  display: flex;\n  width: 100%;\n  margin: var(--px-20) 0;\n  justify-content: center;\n}\n\n.resumo-item-placar {\n  align-self: center;\n  font-family: var(--led);\n  color: var(--preto);\n  padding: var(--px-10);\n  margin: 0 var(--px-10);\n}\n\n.resumo-item p {\n  align-self: center;\n  color: var(--branco);\n}\n\n.mandante {\n  background-color: var(--vermelho);\n}\n\n.visitante {\n  background-color: var(--amarelo);\n}\n\n.gambiarra {\n  color: var(--preto) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXN1bW8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFJQTtFQUNFLGlDQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERiIsImZpbGUiOiJyZXN1bW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucmVzdW1vLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiB2YXIoLS1weC0yMCkgMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJi1wbGFjYXIge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWxlZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJldG8pO1xyXG4gICAgcGFkZGluZzogdmFyKC0tcHgtMTApO1xyXG4gICAgbWFyZ2luOiAwIHZhcigtLXB4LTEwKTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWJyYW5jbyk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFuZGFudGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcm1lbGhvKTtcclxufVxyXG5cclxuLnZpc2l0YW50ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYW1hcmVsbyk7XHJcbn1cclxuXHJcbi5nYW1iaWFycmEge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmV0bykgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "Wkbo":
/*!*********************************************!*\
  !*** ./src/app/services/memoria.service.ts ***!
  \*********************************************/
/*! exports provided: MemoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoriaService", function() { return MemoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tipo-equipe.enum */ "0oab");



let MemoriaService = class MemoriaService {
    constructor() {
        this.memoriaResumo = [];
        this.memoriaPlacar = {
            mandanteNome: _models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_2__["TipoEquipe"].MANDANTE,
            mandantePonto: 0,
            visitanteNome: _models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_2__["TipoEquipe"].VISITANTE,
            visitantePonto: 0,
            cronometro: true,
            duracao: 45,
            periodo: 1
        };
    }
    resumoMemoria(resumoArray) {
        this.memoriaResumo.push(resumoArray);
    }
    placarMemoria(placar) {
        this.memoriaPlacar = placar;
    }
    timeMemoria(time) {
        this.memoriaTime = time;
    }
    relogioMemoria(notificacao) {
        this.memoriaRelogio = notificacao;
    }
};
MemoriaService.ctorParameters = () => [];
MemoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MemoriaService);



/***/ }),

/***/ "XlEN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inicio\">\r\n  <div class=\"inicio-card\">\r\n    <h1>Na trave</h1>\r\n    <p>\"<span>O futebol é</span> a coisa mais <span>importante</span> dentre as coisas menos importantes\"</p>\r\n  </div>\r\n\r\n  <button (click)=\"rotaAjusteSelecionar()\">Selecionar times</button>\r\n\r\n  <button (click)=\"rotaAjustePlacar()\">Placar e Cronômetro</button>\r\n\r\n  <div class=\"inicio-feito\">\r\n    <img src=\"../../../assets/svg/bandeira.svg\" alt=\"bandeira\">\r\n\r\n    <p>feito aqui.</p>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "YtYR":
/*!********************************************************************!*\
  !*** ./src/app/pages/placar/ajuste-placar/ajuste-placar.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ajuste-placar {\n  width: 100%;\n  height: 100%;\n  background-color: var(--preto);\n  overflow-y: scroll;\n}\n\n.input-text:first-of-type {\n  margin-top: 0;\n}\n\n.input-radio {\n  margin-bottom: var(--px-20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWp1c3RlLXBsYWNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoiYWp1c3RlLXBsYWNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWp1c3RlLXBsYWNhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0OmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1yYWRpbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcHgtMjApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "YwgV":
/*!*******************************************************!*\
  !*** ./src/app/pages/selecionar/selecionar.module.ts ***!
  \*******************************************************/
/*! exports provided: SelecionarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarPageModule", function() { return SelecionarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _selecionar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selecionar.page */ "EJP0");
/* harmony import */ var _ajuste_selecionar_ajuste_selecionar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajuste-selecionar/ajuste-selecionar.page */ "RYsE");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









let SelecionarPageModule = class SelecionarPageModule {
};
SelecionarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ],
        declarations: [
            _selecionar_page__WEBPACK_IMPORTED_MODULE_5__["SelecionarPage"],
            _ajuste_selecionar_ajuste_selecionar_page__WEBPACK_IMPORTED_MODULE_6__["AjusteSelecionarPage"]
        ]
    })
], SelecionarPageModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.page */ "9E07");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/inicio/inicio.module */ "DdEe");
/* harmony import */ var _pages_placar_placar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/placar/placar.module */ "1Wb8");
/* harmony import */ var _pages_selecionar_selecionar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/selecionar/selecionar.module */ "YwgV");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "oo/y");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_page__WEBPACK_IMPORTED_MODULE_5__["AppPage"]],
        exports: [_app_page__WEBPACK_IMPORTED_MODULE_5__["AppPage"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _pages_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_7__["InicioPageModule"],
            _pages_placar_placar_module__WEBPACK_IMPORTED_MODULE_8__["PlacarPageModule"],
            _pages_selecionar_selecionar_module__WEBPACK_IMPORTED_MODULE_9__["SelecionarPageModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_12__["ComponentsModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"],
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_14__["Vibration"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_page__WEBPACK_IMPORTED_MODULE_5__["AppPage"]],
    })
], AppModule);



/***/ }),

/***/ "ccZm":
/*!***********************************************!*\
  !*** ./src/app/pages/placar/placar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".placar {\n  display: flex;\n  flex-direction: column;\n  padding: 0 var(--px-20);\n  height: 100%;\n  background-color: var(--preto);\n}\n.placar-cronometro {\n  display: flex;\n  justify-content: space-around;\n}\n.placar-periodo, .placar-relogio {\n  background-color: var(--cinza);\n  padding: var(--px-20) 10px;\n  font-size: 1.75rem;\n  line-height: 1.75rem;\n  font-family: var(--led);\n  text-align: center;\n}\n.placar-periodo {\n  color: var(--verde);\n  width: calc(30% - 10px);\n}\n.placar-relogio {\n  width: 70%;\n  margin-left: var(--px-20);\n  color: var(--azul);\n}\n.placar-placar {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  margin: var(--px-20) 0;\n}\n.placar-coluna {\n  width: calc(50% - 10px);\n}\n.placar-coluna p,\n.placar-coluna h1 {\n  background-color: var(--cinza);\n  text-align: center;\n  color: var(--vermelho);\n  font-family: var(--led);\n  margin: 0;\n}\n.placar-coluna p {\n  padding: var(--px-20) 10px;\n  text-transform: uppercase;\n}\n.placar-coluna h1 {\n  margin-top: var(--px-20);\n  padding: var(--px-20) 10px;\n  font-size: 4.375rem;\n}\n.placar-coluna:last-of-type {\n  margin-left: var(--px-20);\n}\n.placar-coluna:last-of-type p,\n.placar-coluna:last-of-type h1 {\n  color: var(--amarelo);\n}\n.placar-teclado {\n  width: 100%;\n  margin-bottom: var(--px-20);\n}\n.placar-superior, .placar-inferior {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.placar-superior {\n  margin-bottom: var(--px-20);\n}\n.placar-superior button:nth-child(1) {\n  background: var(--verde) url('periodo.svg') no-repeat center;\n}\n.placar-superior button:nth-child(2) {\n  background: var(--azul) url('iniciar.svg') no-repeat center;\n}\n.placar-superior button:nth-child(3) {\n  background: var(--azul) url('pausar.svg') no-repeat center;\n}\n.placar-superior button:nth-child(4) {\n  background: var(--azul) url('parar.svg') no-repeat center;\n}\n.placar-superior button:nth-child(5) {\n  background: var(--branco) url('ajuste.svg') no-repeat center;\n}\n.placar-superior button:nth-child(6) {\n  background: var(--branco) url('resumo.svg') no-repeat center;\n}\n.placar-inferior button:nth-child(1) {\n  flex: 1 1 auto;\n  background: var(--vermelho) url('adicionar.svg') no-repeat center;\n}\n.placar-inferior button:nth-child(2) {\n  margin: 0 var(--px-20);\n  background: var(--vermelho) url('diminuir.svg') no-repeat center;\n}\n.placar-inferior button:nth-child(3) {\n  margin-right: var(--px-20);\n  background: var(--amarelo) url('diminuir.svg') no-repeat center;\n}\n.placar-inferior button:nth-child(4) {\n  flex: 1 1 auto;\n  background: var(--amarelo) url('adicionar.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFjYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFFRTtFQUVFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7QUFLRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUpKO0FBT0U7RUFDRSx1QkFBQTtBQUxKO0FBT0k7O0VBRUUsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBTE47QUFRSTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUFOTjtBQVNJO0VBQ0Usd0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBUE47QUFXRTtFQUNFLHlCQUFBO0FBVEo7QUFXSTs7RUFFRSxxQkFBQTtBQVROO0FBYUU7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7QUFYSjtBQWNFO0VBRUUsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFiSjtBQWdCRTtFQUNFLDJCQUFBO0FBZEo7QUFnQkk7RUFDRSw0REFBQTtBQWROO0FBaUJJO0VBQ0UsMkRBQUE7QUFmTjtBQWtCSTtFQUNFLDBEQUFBO0FBaEJOO0FBbUJJO0VBQ0UseURBQUE7QUFqQk47QUFvQkk7RUFDRSw0REFBQTtBQWxCTjtBQXFCSTtFQUNFLDREQUFBO0FBbkJOO0FBd0JJO0VBQ0UsY0FBQTtFQUNBLGlFQUFBO0FBdEJOO0FBeUJJO0VBQ0Usc0JBQUE7RUFDQSxnRUFBQTtBQXZCTjtBQTBCSTtFQUNFLDBCQUFBO0VBQ0EsK0RBQUE7QUF4Qk47QUEyQkk7RUFDRSxjQUFBO0VBQ0EsZ0VBQUE7QUF6Qk4iLCJmaWxlIjoicGxhY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwIHZhcigtLXB4LTIwKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJldG8pO1xyXG5cclxuICAmLWNyb25vbWV0cm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgJi1wZXJpb2RvLFxyXG4gICYtcmVsb2dpbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaW56YSk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1weC0yMCkgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTsgLy8gMjhweFxyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07IC8vIDI4cHhcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1sZWQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1wZXJpb2RvIHtcclxuICAgIGNvbG9yOiB2YXIoLS12ZXJkZSk7XHJcbiAgICB3aWR0aDogY2FsYygzMCUgLSAxMHB4KTtcclxuICB9XHJcblxyXG4gICYtcmVsb2dpbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXB4LTIwKTtcclxuICAgIGNvbG9yOiB2YXIoLS1henVsKTtcclxuICB9XHJcblxyXG4gICYtcGxhY2FyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1weC0yMCkgMDtcclxuICB9XHJcblxyXG4gICYtY29sdW5hIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG5cclxuICAgIHAsXHJcbiAgICBoMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNpbnphKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdmVybWVsaG8pO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tbGVkKTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBwYWRkaW5nOiB2YXIoLS1weC0yMCkgMTBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXB4LTIwKTtcclxuICAgICAgcGFkZGluZzogdmFyKC0tcHgtMjApIDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNC4zNzVyZW07IC8vIDcwcHhcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtY29sdW5hOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tcHgtMjApO1xyXG5cclxuICAgIHAsXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hbWFyZWxvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtdGVjbGFkbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXB4LTIwKTtcclxuICB9XHJcblxyXG4gICYtc3VwZXJpb3IsXHJcbiAgJi1pbmZlcmlvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmLXN1cGVyaW9yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXB4LTIwKTtcclxuXHJcbiAgICBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmVyZGUpIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9wZXJpb2RvLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9pbmljaWFyLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9wYXVzYXIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXp1bCkgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL3BhcmFyLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyYW5jbykgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2FqdXN0ZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoNikge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1icmFuY28pIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9yZXN1bW8uc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtaW5mZXJpb3Ige1xyXG4gICAgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXJtZWxobykgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2FkaWNpb25hci5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoMikge1xyXG4gICAgICBtYXJnaW46IDAgdmFyKC0tcHgtMjApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXJtZWxobykgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3ZnL2RpbWludWlyLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcHgtMjApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWFyZWxvKSB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdmcvZGltaW51aXIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYXJlbG8pIHVybCgnLi4vLi4vLi4vYXNzZXRzL3N2Zy9hZGljaW9uYXIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "iG/i":
/*!*********************************************!*\
  !*** ./src/app/models/tipo-relorio.enum.ts ***!
  \*********************************************/
/*! exports provided: TipoRelogio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoRelogio", function() { return TipoRelogio; });
var TipoRelogio;
(function (TipoRelogio) {
    TipoRelogio["INATIVO"] = "inativo";
    TipoRelogio["INICIADO"] = "iniciado";
    TipoRelogio["PARADO"] = "parado";
})(TipoRelogio || (TipoRelogio = {}));


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cabecalho/cabecalho.component */ "BniD");
/* harmony import */ var _botao_botao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./botao/botao.component */ "uzVz");
/* harmony import */ var _resumo_item_resumo_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resumo-item/resumo-item.component */ "GjeT");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _botao_botao_component__WEBPACK_IMPORTED_MODULE_4__["BotaoComponent"],
            _cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_3__["CabecalhoComponent"],
            _resumo_item_resumo_item_component__WEBPACK_IMPORTED_MODULE_5__["ResumoItemComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]
        ],
        exports: [
            _botao_botao_component__WEBPACK_IMPORTED_MODULE_4__["BotaoComponent"],
            _cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_3__["CabecalhoComponent"],
            _resumo_item_resumo_item_component__WEBPACK_IMPORTED_MODULE_5__["ResumoItemComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "jgmy":
/*!*********************************************!*\
  !*** ./src/app/pages/placar/placar.page.ts ***!
  \*********************************************/
/*! exports provided: PlacarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacarPage", function() { return PlacarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_placar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./placar.page.html */ "RHUF");
/* harmony import */ var _placar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placar.page.scss */ "ccZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/insomnia/ngx */ "pOfa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_relogio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/relogio.service */ "JD9T");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");
/* harmony import */ var src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/tipo-equipe.enum */ "0oab");
/* harmony import */ var src_app_models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/tipo-relorio.enum */ "iG/i");










let PlacarPage = class PlacarPage {
    constructor(insomnia, router, memoriaService, relogioService) {
        this.insomnia = insomnia;
        this.router = router;
        this.memoriaService = memoriaService;
        this.relogioService = relogioService;
        this.textoCabecalho = 'Placar e Cronômetro';
        this.placarMandante = 0;
        this.placarVisitante = 0;
        this.mandantePonto = '00';
        this.visitantePonto = '00';
        this.periodo = 1;
    }
    ngOnInit() {
        this.insomnia.keepAwake();
    }
    ngOnDestroy() {
        this.insomnia.allowSleepAgain();
        this.relogioService.parar();
        this.relogioService.status = src_app_models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_9__["TipoRelogio"].INATIVO;
        this.memoriaService.memoriaResumo = null;
    }
    periodoTrocar() {
        this.periodo = this.periodo === 1 ? 2 : 1;
    }
    aumentarPonto(time) {
        if (time === src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].MANDANTE) {
            this.placarMandante++;
        }
        else {
            this.placarVisitante++;
        }
        this.formatarPontos(time);
        this.adicionarItemResumo(time);
    }
    dimimuirPonto(time) {
        if (time === src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].MANDANTE) {
            this.placarMandante--;
        }
        else {
            this.placarVisitante--;
        }
        this.formatarPontos(time);
        this.removerItemResumo(time);
    }
    formatarPontos(time) {
        let equipePonto = this.placarMandante;
        let ponto = this.mandantePonto;
        if (time === src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].VISITANTE) {
            equipePonto = this.placarVisitante;
            ponto = this.visitantePonto;
        }
        if (equipePonto < 1) {
            equipePonto = 0;
            ponto = '00';
        }
        if (equipePonto >= 99) {
            equipePonto = 99;
            ponto = '99';
        }
        ponto = equipePonto.toString().padStart(2, '0');
        if (time === src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].MANDANTE) {
            this.placarMandante = equipePonto;
            this.mandantePonto = ponto;
        }
        else {
            this.placarVisitante = equipePonto;
            this.visitantePonto = ponto;
        }
    }
    adicionarItemResumo(time) {
        const resumoArray = {
            equipe: time,
            periodo: this.periodo,
            cronometro: this.memoriaService.memoriaPlacar.cronometro ? this.memoriaService.memoriaPlacar.cronometro : true,
            tempo: this.relogioService.tempo,
            data: new Date().getTime()
        };
        this.memoriaService.resumoMemoria(resumoArray);
        this.alterarPlacar();
    }
    removerItemResumo(time) {
        const resumo = this.memoriaService.memoriaResumo.filter(item => item.equipe === time);
        const arrayTemp = [];
        this.memoriaService.memoriaResumo.forEach(item => {
            if (item.data !== resumo[resumo.length - 1].data) {
                arrayTemp.push(item);
            }
        });
        this.memoriaService.memoriaResumo = arrayTemp;
        this.alterarPlacar();
    }
    alterarPlacar() {
        this.memoriaService.memoriaPlacar.mandantePonto = this.placarMandante;
        this.memoriaService.memoriaPlacar.visitantePonto = this.placarVisitante;
    }
    ajustePagina() {
        this.router.navigate(['/ajuste-placar']);
    }
    resumoPagina() {
        this.router.navigate(['/resumo']);
    }
    botaoVoltar() {
        this.router.navigate(['/inicio']);
    }
    RespostaModal() {
        this.memoriaService.relogioMemoria(false);
    }
    get mandanteNome() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.mandanteNome) {
            return this.memoriaService.memoriaPlacar.mandanteNome;
        }
        return src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].MANDANTE;
    }
    get visitanteNome() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.visitanteNome) {
            return this.memoriaService.memoriaPlacar.visitanteNome;
        }
        return src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_8__["TipoEquipe"].VISITANTE;
    }
    get isCronometro() {
        if (this.memoriaService.memoriaPlacar) {
            return this.memoriaService.memoriaPlacar.cronometro;
        }
    }
    get isIniciado() {
        if (this.relogioService.status === src_app_models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_9__["TipoRelogio"].INATIVO || this.relogioService.status === src_app_models_tipo_relorio_enum__WEBPACK_IMPORTED_MODULE_9__["TipoRelogio"].PARADO) {
            return false;
        }
        ;
        return true;
    }
    get isResumo() {
        if (this.placarMandante === 0 && this.placarVisitante === 0) {
            return false;
        }
        return true;
    }
    get tempoCorrido() {
        if (this.memoriaService.memoriaPlacar &&
            !this.memoriaService.memoriaPlacar.cronometro) {
            this.periodo = 1;
            this.relogioService.parar();
            return '00:00:00';
        }
        return this.relogioService.tempo;
    }
};
PlacarPage.ctorParameters = () => [
    { type: _ionic_native_insomnia_ngx__WEBPACK_IMPORTED_MODULE_4__["Insomnia"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_7__["MemoriaService"] },
    { type: src_app_services_relogio_service__WEBPACK_IMPORTED_MODULE_6__["RelogioService"] }
];
PlacarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-placar',
        template: _raw_loader_placar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_placar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlacarPage);



/***/ }),

/***/ "jq9W":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/placar/ajuste-placar/ajuste-placar.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecalho [texto]=\"textoCabecalho\" (click)=\"botaoVoltar()\"></app-cabecalho>\r\n\r\n<form [formGroup]=\"formPlacar\" class=\"ajuste-placar\">\r\n  <div class=\"input-text\">\r\n    <label for=\"\">Time Mandante</label>\r\n    <input type=\"text\" placeholder=\"Mandante\" formControlName=\"mandanteNome\" maxlength=\"12\">\r\n  </div>\r\n\r\n  <div class=\"input-text\">\r\n    <label for=\"\">Time Visitante</label>\r\n    <input type=\"text\" placeholder=\"Visitante\" formControlName=\"visitanteNome\" maxlength=\"12\">\r\n  </div>\r\n\r\n  <div class=\"input-toggle\">\r\n    <div class=\"input-toggle-div\">\r\n      <label for=\"\">Cronômetro</label>\r\n      <p>Habilitar cronômetro junto ao placar.</p>\r\n    </div>\r\n    <ion-toggle checked formControlName=\"cronometro\"></ion-toggle>\r\n  </div>\r\n\r\n  <div class=\"input-radio\" *ngIf=\"isCronometro\">\r\n    <label for=\"\">Duração</label>\r\n    <p>Duração de cada periodo.</p>\r\n\r\n    <div>\r\n      <div class=\"input-radio-item\" *ngFor=\"let item of duracaoArray.valor\">\r\n        <input type=\"radio\" [id]=\"item\" [value]=\"item\" [name]=\"duracaoArray.name\"\r\n          [checked]=\"item === duracaoArray.checked\" formControlName=\"duracao\">\r\n        <label class=\"label\" [for]=\"item\">{{ item }}</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-botao [texto]=\"textoBotao\" (click)=\"confirmar()\"></app-botao>\r\n</form>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "keRv":
/*!***********************************************!*\
  !*** ./src/app/pages/splash/splash.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  height: 100%;\n  width: 100%;\n  background-color: var(--preto);\n}\n\nimg {\n  background-color: var;\n  width: 30%;\n  margin-top: 70%;\n  animation: roll-in-left 0.6s ease-out both;\n}\n\nh1 {\n  color: var(--branco);\n  text-align: center;\n  animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n}\n\n@keyframes roll-in-left {\n  0% {\n    transform: translateX(-800px) rotate(-540deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes tracking-in-contract {\n  0% {\n    letter-spacing: 1em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    letter-spacing: normal;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzcGxhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBRUUsNkNBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFFQTtJQUVFLHFDQUFBO0lBQ0EsVUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQURGO0VBR0E7SUFDRSxZQUFBO0VBREY7RUFHQTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoic3BsYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXRvKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXI7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA3MCU7XHJcbiAgYW5pbWF0aW9uOiByb2xsLWluLWxlZnQgMC42cyBlYXNlLW91dCBib3RoO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHZhcigtLWJyYW5jbyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogdHJhY2tpbmctaW4tY29udHJhY3QgMC44cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9sbC1pbi1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpIHJvdGF0ZSgtNTQwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpIHJvdGF0ZSgtNTQwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0cmFja2luZy1pbi1jb250cmFjdCB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "nHQF":
/*!****************************************************!*\
  !*** ./src/app/pages/placar/resumo/resumo.page.ts ***!
  \****************************************************/
/*! exports provided: ResumoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumoPage", function() { return ResumoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resumo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resumo.page.html */ "U3qW");
/* harmony import */ var _resumo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resumo.page.scss */ "2H8A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/tipo-equipe.enum */ "0oab");
/* harmony import */ var src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/memoria.service */ "Wkbo");







let ResumoPage = class ResumoPage {
    constructor(memoriaService, router) {
        this.memoriaService = memoriaService;
        this.router = router;
        this.textoCabecalho = 'Resumão da partida';
    }
    ngOnInit() {
        this.popularResumo();
    }
    popularResumo() {
        this.resumoItens = this.memoriaService.memoriaResumo;
    }
    botaoVoltar() {
        this.router.navigate(['/placar']);
    }
    get mandanteNome() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.mandanteNome) {
            return this.memoriaService.memoriaPlacar.mandanteNome;
        }
        return src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_5__["TipoEquipe"].MANDANTE;
    }
    get mandantePonto() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.mandantePonto) {
            return this.memoriaService.memoriaPlacar.mandantePonto.toString().padStart(2, '0');
        }
        return '00';
    }
    get visitanteNome() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.visitanteNome) {
            return this.memoriaService.memoriaPlacar.visitanteNome;
        }
        return src_app_models_tipo_equipe_enum__WEBPACK_IMPORTED_MODULE_5__["TipoEquipe"].VISITANTE;
    }
    get visitantePonto() {
        if (this.memoriaService.memoriaPlacar &&
            this.memoriaService.memoriaPlacar.visitantePonto) {
            return this.memoriaService.memoriaPlacar.visitantePonto.toString().padStart(2, '0');
        }
        return '00';
    }
};
ResumoPage.ctorParameters = () => [
    { type: src_app_services_memoria_service__WEBPACK_IMPORTED_MODULE_6__["MemoriaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResumoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resumo',
        template: _raw_loader_resumo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resumo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResumoPage);



/***/ }),

/***/ "tbjk":
/*!*******************************!*\
  !*** ./src/app/app.page.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "uzVz":
/*!*****************************************************!*\
  !*** ./src/app/components/botao/botao.component.ts ***!
  \*****************************************************/
/*! exports provided: BotaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotaoComponent", function() { return BotaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./botao.component.html */ "HDQr");
/* harmony import */ var _botao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./botao.component.scss */ "Gzz9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BotaoComponent = class BotaoComponent {
    constructor() {
        this.bataoResposta = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() { }
    cliqueBotao() {
        this.bataoResposta.emit(this.texto);
    }
};
BotaoComponent.ctorParameters = () => [];
BotaoComponent.propDecorators = {
    texto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    bataoResposta: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
BotaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-botao',
        template: _raw_loader_botao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_botao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BotaoComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_inicio_inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/inicio/inicio.page */ "9scE");
/* harmony import */ var _pages_placar_ajuste_placar_ajuste_placar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/placar/ajuste-placar/ajuste-placar.page */ "DavV");
/* harmony import */ var _pages_placar_placar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/placar/placar.page */ "jgmy");
/* harmony import */ var _pages_placar_resumo_resumo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/placar/resumo/resumo.page */ "nHQF");
/* harmony import */ var _pages_selecionar_ajuste_selecionar_ajuste_selecionar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/selecionar/ajuste-selecionar/ajuste-selecionar.page */ "RYsE");
/* harmony import */ var _pages_selecionar_selecionar_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/selecionar/selecionar.page */ "EJP0");
/* harmony import */ var _pages_splash_splash_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/splash/splash.page */ "OvIv");










const routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '*', component: _pages_inicio_inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"] },
    { path: 'inicio', component: _pages_inicio_inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"] },
    { path: 'placar', component: _pages_placar_placar_page__WEBPACK_IMPORTED_MODULE_5__["PlacarPage"] },
    { path: 'ajuste-placar', component: _pages_placar_ajuste_placar_ajuste_placar_page__WEBPACK_IMPORTED_MODULE_4__["AjustePlacarPage"] },
    { path: 'selecionar', component: _pages_selecionar_selecionar_page__WEBPACK_IMPORTED_MODULE_8__["SelecionarPage"] },
    { path: 'ajuste-selecionar', component: _pages_selecionar_ajuste_selecionar_ajuste_selecionar_page__WEBPACK_IMPORTED_MODULE_7__["AjusteSelecionarPage"] },
    { path: 'resumo', component: _pages_placar_resumo_resumo_page__WEBPACK_IMPORTED_MODULE_6__["ResumoPage"] },
    { path: 'splash', component: _pages_splash_splash_page__WEBPACK_IMPORTED_MODULE_9__["SplashPage"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xB4R":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resumo-item/resumo-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngFor=\"let item of resumoItem\">\r\n  <div class=\"resumo-item\">\r\n    <p [class.gambiarra]=\"item.equipe === 'visitante'\">{{ item.tempo }}</p>\r\n\r\n    <div class=\"resumo-item-placar\" [ngClass]=\"item.equipe\">{{ item.placar }}</div>\r\n\r\n    <p [class.gambiarra]=\"item.equipe === 'mandante'\"> {{ item.tempo }}</p>\r\n  </div>\r\n</section>");

/***/ }),

/***/ "z1qJ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/selecionar/selecionar.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-cabecalho [texto]=\"textoCabecalho\" (click)=\"botaoVoltar()\"></app-cabecalho>\r\n\r\n<div class=\"time\">\r\n  <div class=\"time-goleiro\" *ngIf=\"isGoleiro\">Por ordem de goleiros.</div>\r\n\r\n  <div class=\"time-conta\">\r\n    <div class=\"time-card\" *ngFor=\"let item of times\">\r\n      <h6>{{ item.time }}</h6>\r\n      <p *ngFor=\"let a of item.jogadores\">{{ a }} </p>\r\n    </div>\r\n  </div>\r\n\r\n  <app-botao [texto]=\"textoBotao\" (bataoResposta)=\"confirmar()\"></app-botao>\r\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map