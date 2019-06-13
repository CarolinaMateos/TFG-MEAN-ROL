(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/public/home/home.component */ "./src/app/components/public/home/home.component.ts");
/* harmony import */ var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/public/contact/contact.component */ "./src/app/components/public/contact/contact.component.ts");
/* harmony import */ var _components_public_logger_logger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/public/logger/logger.component */ "./src/app/components/public/logger/logger.component.ts");
/* harmony import */ var _components_public_blog_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public/blog/blog-home/blog-home.component */ "./src/app/components/public/blog/blog-home/blog-home.component.ts");
/* harmony import */ var _components_public_blog_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/public/blog/blog-category/blog-category.component */ "./src/app/components/public/blog/blog-category/blog-category.component.ts");
/* harmony import */ var _components_public_blog_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/public/blog/blog-search/blog-search.component */ "./src/app/components/public/blog/blog-search/blog-search.component.ts");
/* harmony import */ var _components_public_blog_blog_publication_page_blog_publication_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/public/blog/blog-publication-page/blog-publication-page.component */ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.ts");
/* harmony import */ var _components_public_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/public/not-found-component/not-found-component.component */ "./src/app/components/public/not-found-component/not-found-component.component.ts");
/* harmony import */ var _components_private_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/private/timeline/timeline.component */ "./src/app/components/private/timeline/timeline.component.ts");
/* harmony import */ var _components_private_baul_my_bault_my_bault_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/private/baul/my-bault/my-bault.component */ "./src/app/components/private/baul/my-bault/my-bault.component.ts");
/* harmony import */ var _components_private_baul_characters_characters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/private/baul/characters/characters.component */ "./src/app/components/private/baul/characters/characters.component.ts");
/* harmony import */ var _components_private_baul_games_games_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/private/baul/games/games.component */ "./src/app/components/private/baul/games/games.component.ts");
/* harmony import */ var _components_private_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/private/search/search.component */ "./src/app/components/private/search/search.component.ts");
/* harmony import */ var _components_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/private/profile/profile.component */ "./src/app/components/private/profile/profile.component.ts");
/* harmony import */ var _components_administracion_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/administracion/inicio/inicio.component */ "./src/app/components/administracion/inicio/inicio.component.ts");
/* harmony import */ var _components_private_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/private/chat/chat.component */ "./src/app/components/private/chat/chat.component.ts");



/* PUBLIC */



/* BLOG */




/* 404 */

/* PRIVATE */








var ROUTES = [
    /* PUBLIC */
    { path: 'home', component: _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'logger', component: _components_public_logger_logger_component__WEBPACK_IMPORTED_MODULE_5__["LoggerComponent"] },
    /* BLOG */
    { path: 'blog', component: _components_public_blog_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_6__["BlogHomeComponent"] },
    { path: 'blog/:category', component: _components_public_blog_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_7__["BlogCategoryComponent"] },
    { path: 'blog/publicaciones/:id_public', component: _components_public_blog_blog_publication_page_blog_publication_page_component__WEBPACK_IMPORTED_MODULE_9__["BlogPublicationPageComponent"] },
    { path: 'blog/search/:term', component: _components_public_blog_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_8__["BlogSearchComponent"] },
    /* PRIVATE */
    { path: 'timeline', component: _components_private_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_11__["TimelineComponent"] },
    { path: 'baul', component: _components_private_baul_my_bault_my_bault_component__WEBPACK_IMPORTED_MODULE_12__["MyBaultComponent"] },
    { path: 'personaje/:id', component: _components_private_baul_characters_characters_component__WEBPACK_IMPORTED_MODULE_13__["CharactersComponent"] },
    { path: 'partida/:id', component: _components_private_baul_games_games_component__WEBPACK_IMPORTED_MODULE_14__["GamesComponent"] },
    { path: 'search/:term', component: _components_private_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"] },
    { path: 'profile/:id', component: _components_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] },
    { path: 'chat/:id', component: _components_private_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"] },
    /* ADMIN */
    { path: 'admin', component: _components_administracion_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_17__["InicioComponent"] },
    /* EXTRAS */
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: _components_public_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.2/css/all.css\" integrity=\"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay\" crossorigin=\"anonymous\" />\n</head>\n<app-navbar (activarMenu)=\"showMenu($event)\" (pulsarMenu)=\"pulsadoMenu($event)\"></app-navbar>\n<app-menu *ngIf=\"mostrarMenu && toggle\"></app-menu>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.toggle = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            /* AÑADIR PUBLICACIÓN */
            jquery__WEBPACK_IMPORTED_MODULE_2__(".long").hide();
            jquery__WEBPACK_IMPORTED_MODULE_2__("#states").addClass("color-active");
            jquery__WEBPACK_IMPORTED_MODULE_2__("#states").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#states").addClass("color-active");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#longe").removeClass("color-active");
                jquery__WEBPACK_IMPORTED_MODULE_2__(".long").slideUp();
                jquery__WEBPACK_IMPORTED_MODULE_2__(".estate").slideDown();
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("#longe").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#states").removeClass("color-active");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#longe").addClass("color-active");
                jquery__WEBPACK_IMPORTED_MODULE_2__(".estate").slideUp();
                jquery__WEBPACK_IMPORTED_MODULE_2__(".long").slideDown();
            });
            /* AÑADIR PUBLICACIÓN */
            /* LOGIN - SING UP */
            jquery__WEBPACK_IMPORTED_MODULE_2__(".singup-container-c").hide();
            jquery__WEBPACK_IMPORTED_MODULE_2__(".singup-cliker").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".secction-login-c").css("min-height", "110vh");
                jquery__WEBPACK_IMPORTED_MODULE_2__(".singup-container-c").slideDown("slow");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(".login-cliker").on("click", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".singup-container-c").slideUp("slow");
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(".secction-login-c").css("min-height", "80vh");
                }, 500);
            });
            /* LOGIN - SING UP */
        });
    };
    AppComponent.prototype.showMenu = function (event) {
        this.mostrarMenu = event;
    };
    AppComponent.prototype.pulsadoMenu = function (event) {
        this.toggle = event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_snippets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/snippets/navbar/navbar.component */ "./src/app/components/snippets/navbar/navbar.component.ts");
/* harmony import */ var _components_snippets_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/snippets/footer/footer.component */ "./src/app/components/snippets/footer/footer.component.ts");
/* harmony import */ var _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/public/home/home.component */ "./src/app/components/public/home/home.component.ts");
/* harmony import */ var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/public/contact/contact.component */ "./src/app/components/public/contact/contact.component.ts");
/* harmony import */ var _components_public_logger_logger_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/public/logger/logger.component */ "./src/app/components/public/logger/logger.component.ts");
/* harmony import */ var _components_public_blog_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/public/blog/blog-home/blog-home.component */ "./src/app/components/public/blog/blog-home/blog-home.component.ts");
/* harmony import */ var _components_public_blog_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/public/blog/blog-category/blog-category.component */ "./src/app/components/public/blog/blog-category/blog-category.component.ts");
/* harmony import */ var _components_public_blog_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/public/blog/blog-search/blog-search.component */ "./src/app/components/public/blog/blog-search/blog-search.component.ts");
/* harmony import */ var _components_public_blog_blog_publication_blog_publication_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/public/blog/blog-publication/blog-publication.component */ "./src/app/components/public/blog/blog-publication/blog-publication.component.ts");
/* harmony import */ var _components_public_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/public/not-found-component/not-found-component.component */ "./src/app/components/public/not-found-component/not-found-component.component.ts");
/* harmony import */ var _components_public_blog_blog_publication_page_blog_publication_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/public/blog/blog-publication-page/blog-publication-page.component */ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.ts");
/* harmony import */ var _components_private_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/private/timeline/timeline.component */ "./src/app/components/private/timeline/timeline.component.ts");
/* harmony import */ var _components_snippets_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/snippets/menu/menu.component */ "./src/app/components/snippets/menu/menu.component.ts");
/* harmony import */ var _components_snippets_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/snippets/publicacion/publicacion.component */ "./src/app/components/snippets/publicacion/publicacion.component.ts");
/* harmony import */ var _components_snippets_nueva_publicacion_nueva_publicacion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/snippets/nueva-publicacion/nueva-publicacion.component */ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.ts");
/* harmony import */ var _components_private_baul_my_bault_my_bault_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/private/baul/my-bault/my-bault.component */ "./src/app/components/private/baul/my-bault/my-bault.component.ts");
/* harmony import */ var _components_private_baul_characters_characters_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/private/baul/characters/characters.component */ "./src/app/components/private/baul/characters/characters.component.ts");
/* harmony import */ var _components_private_baul_games_games_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/private/baul/games/games.component */ "./src/app/components/private/baul/games/games.component.ts");
/* harmony import */ var _components_snippets_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/snippets/ficha/ficha.component */ "./src/app/components/snippets/ficha/ficha.component.ts");
/* harmony import */ var _components_private_search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/private/search/search.component */ "./src/app/components/private/search/search.component.ts");
/* harmony import */ var _components_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/private/profile/profile.component */ "./src/app/components/private/profile/profile.component.ts");
/* harmony import */ var _components_private_chat_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/private/chat/chat.component */ "./src/app/components/private/chat/chat.component.ts");
/* harmony import */ var _components_administracion_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/administracion/inicio/inicio.component */ "./src/app/components/administracion/inicio/inicio.component.ts");
/* harmony import */ var _components_private_chat_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/private/chat/chat-room/chat-room.component */ "./src/app/components/private/chat/chat-room/chat-room.component.ts");



/* HTTP */

/* ROUTING */

/* FORMULARIOS */

/* EXTERNALS */

/* COMPONENTS */

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_snippets_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_snippets_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_public_logger_logger_component__WEBPACK_IMPORTED_MODULE_12__["LoggerComponent"],
                _components_public_blog_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_13__["BlogHomeComponent"],
                _components_public_blog_blog_category_blog_category_component__WEBPACK_IMPORTED_MODULE_14__["BlogCategoryComponent"],
                _components_public_blog_blog_search_blog_search_component__WEBPACK_IMPORTED_MODULE_15__["BlogSearchComponent"],
                _components_public_blog_blog_publication_blog_publication_component__WEBPACK_IMPORTED_MODULE_16__["BlogPublicationComponent"],
                _components_public_not_found_component_not_found_component_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponentComponent"],
                _components_public_blog_blog_publication_page_blog_publication_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogPublicationPageComponent"],
                _components_private_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_19__["TimelineComponent"],
                _components_snippets_menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _components_snippets_publicacion_publicacion_component__WEBPACK_IMPORTED_MODULE_21__["PublicacionComponent"],
                _components_snippets_nueva_publicacion_nueva_publicacion_component__WEBPACK_IMPORTED_MODULE_22__["NuevaPublicacionComponent"],
                _components_private_baul_my_bault_my_bault_component__WEBPACK_IMPORTED_MODULE_23__["MyBaultComponent"],
                _components_private_baul_characters_characters_component__WEBPACK_IMPORTED_MODULE_24__["CharactersComponent"],
                _components_private_baul_games_games_component__WEBPACK_IMPORTED_MODULE_25__["GamesComponent"],
                _components_snippets_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_26__["FichaComponent"],
                _components_private_search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"],
                _components_private_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                _components_private_chat_chat_component__WEBPACK_IMPORTED_MODULE_29__["ChatComponent"],
                _components_administracion_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_30__["InicioComponent"],
                _components_private_chat_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_31__["ChatRoomComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/administracion/inicio/inicio.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/administracion/inicio/inicio.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5pc3RyYWNpb24vaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/administracion/inicio/inicio.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/administracion/inicio/inicio.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  inicio works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/administracion/inicio/inicio.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/administracion/inicio/inicio.component.ts ***!
  \**********************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");



var InicioComponent = /** @class */ (function () {
    function InicioComponent(api) {
        this.api = api;
    }
    InicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/characters")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var a = res_1[_i];
                _this.api.deleteElement(a['_id'], "http://localhost:3000/api/characters")
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        this.api
            .getElemets("http://localhost:3000/api/users")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var a = res_2[_i];
                _this.api.deleteElement(a['_id'], "http://localhost:3000/api/users")
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        this.api
            .getElemets("http://localhost:3000/api/publications")
            .subscribe(function (res) {
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var a = res_3[_i];
                _this.api.deleteElement(a['_id'], "http://localhost:3000/api/publications")
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
        this.api
            .getElemets("http://localhost:3000/api/games")
            .subscribe(function (res) {
            for (var _i = 0, res_4 = res; _i < res_4.length; _i++) {
                var a = res_4[_i];
                _this.api.deleteElement(a['_id'], "http://localhost:3000/api/games")
                    .subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-inicio",
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/components/administracion/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/components/administracion/inicio/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["APIServiceService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/private/baul/characters/characters.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/private/baul/characters/characters.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor {\r\n  padding: 2rem;\r\n  padding-top: 7rem;\r\n  position: relative;\r\n}\r\n\r\n.data-characters {\r\n  background-color: whitesmoke;\r\n  width: 100%;\r\n  padding: 2rem;\r\n  display: grid;\r\n  grid-template-columns: auto 50%;\r\n  grid-template-rows: 250px;\r\n  -webkit-column-gap: 2rem;\r\n     -moz-column-gap: 2rem;\r\n          column-gap: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.imagen-container {\r\n  background-color: black;\r\n  width: 250px;\r\n  height: 250px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 50% 50%;\r\n  border: 5px solid white;\r\n  align-self: center;\r\n  justify-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.imagen-container img {\r\n  position: absolute;\r\n  background-color: black;\r\n  height: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.text-character {\r\n  align-self: center;\r\n}\r\n\r\n.text-character h3 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.text-character p:nth-child(1) {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.text-character p:nth-child(2) {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.text-character button {\r\n  font-size: 1.2rem;\r\n  background-color: whitesmoke;\r\n  color: crimson;\r\n  border: 1px crimson solid;\r\n  border-radius: 0.2rem 0.2rem;\r\n  padding: 0.5rem 1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.text-character button:hover {\r\n  color: whitesmoke;\r\n  background-color: crimson;\r\n  transition: 0.3s;\r\n}\r\n\r\n.button {\r\n  font-size: 1.2rem;\r\n  background-color: whitesmoke;\r\n  color: crimson;\r\n  border: 1px crimson solid;\r\n  border-radius: 0.2rem 0.2rem;\r\n  padding: 0.5rem 1rem;\r\n  transition: 0.3s;\r\n  margin: 0 auto;\r\n}\r\n\r\n.button:hover {\r\n  color: whitesmoke;\r\n  background-color: crimson;\r\n  transition: 0.3s;\r\n}\r\n\r\n.cambiarImagen {\r\n  background-color: rgb(112, 112, 112);\r\n  width: 20%;\r\n  height: 110px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cambiarImagen input {\r\n  padding: 0.5rem;\r\n  border: 1px crimson solid;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.cambiarImagen .buttons button {\r\n  width: 50%;\r\n  border: 1px crimson solid;\r\n  background-color: whitesmoke;\r\n  border-radius: 0.2rem 0.2rem;\r\n  color: crimson;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.cambiarImagen .buttons button:hover {\r\n  background-color: crimson;\r\n  border-radius: 0.2rem 0.2rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2JhdWwvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHdCQUFnQjtLQUFoQixxQkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmF0ZS9iYXVsL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3Ige1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZGF0YS1jaGFyYWN0ZXJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gNTAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjUwcHg7XHJcbiAgY29sdW1uLWdhcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW1hZ2VuLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2VuLWNvbnRhaW5lciBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4udGV4dC1jaGFyYWN0ZXIge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2hhcmFjdGVyIGgzIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLnRleHQtY2hhcmFjdGVyIHA6bnRoLWNoaWxkKDEpIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLnRleHQtY2hhcmFjdGVyIHA6bnRoLWNoaWxkKDIpIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnRleHQtY2hhcmFjdGVyIGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBib3JkZXI6IDFweCBjcmltc29uIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbSAwLjJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnRleHQtY2hhcmFjdGVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGJvcmRlcjogMXB4IGNyaW1zb24gc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIGlucHV0IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDFweCBjcmltc29uIHNvbGlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/private/baul/characters/characters.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/private/baul/characters/characters.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contenedor\">\n  <div class=\"data-characters\">\n    <div id=\"abrir\" class=\"imagen-container\">\n      <img [src]=\"Personaje.img\" />\n    </div>\n    <div class=\"text-character\">\n      <form>\n        <h3 id=\"nombre\" [contentEditable]=\"editable\">{{ Personaje.name }}</h3>\n        <p id=\"identificador\" [contentEditable]=\"editable\">\n          {{ Personaje.identifier }}\n        </p>\n        <input\n          id=\"npc\"\n          type=\"checkbox\"\n          [checked]=\"Personaje.npc\"\n          disabled=\"{{ disabled }}\"\n        />NPC<br /><br />\n        <button (click)=\"saveChanges()\" *ngIf=\"editable\">\n          Guardar cambios\n        </button>\n      </form>\n    </div>\n  </div>\n  <button class=\"button\" (click)=\"addFile()\" *ngIf=\"editable && !havFicha\">\n      Añadir ficha\n  </button>\n  <app-ficha *ngIf=\"havFicha\" [id]=\"Personaje.file\" ></app-ficha>\n  <div class=\"cambiarImagen\">\n    <input type=\"url\" placeholder=\"Introduce una url\" #url />\n    <div class=\"buttons\">\n        <button (click)=\"cambiarImagen(url.value)\" type=\"button\">Aceptar</button>\n        <button id=\"cerrar\" type=\"button\">Cerrar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/baul/characters/characters.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/private/baul/characters/characters.component.ts ***!
  \****************************************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _models_character_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/character.model */ "./src/app/models/character.model.ts");
/* harmony import */ var _models_fichas_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/fichas.model */ "./src/app/models/fichas.model.ts");






var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(activatedRoute, api) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.editable = false;
        this.usuarios = [];
        this.havFicha = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.idPersonaje = params.id;
            _this.getPersonaje();
        });
        this.Personaje = new _models_character_model__WEBPACK_IMPORTED_MODULE_4__["characterModel"]();
        this.ficha = new _models_fichas_model__WEBPACK_IMPORTED_MODULE_5__["fichaModel"]();
    }
    CharactersComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".cambiarImagen").hide();
            $("#abrir").on("click", function () {
                $(".cambiarImagen").show(1);
            });
            $("#cerrar").on("click", function () {
                $(".cambiarImagen").hide(1);
            });
        });
    };
    CharactersComponent.prototype.getPersonaje = function () {
        var _this = this;
        this.api
            .getElement(this.idPersonaje, "http://localhost:3000/api/characters")
            .subscribe(function (res) {
            _this.Personaje.name = res["Usuario"].name;
            _this.Personaje.identifier = res["Usuario"].identifier;
            _this.Personaje._id = res["Usuario"]._id;
            _this.Personaje.file = res["Usuario"].file;
            _this.Personaje.friendList = res["Usuario"].friendList;
            _this.Personaje.id_user = res["Usuario"].id_user;
            _this.Personaje.img = res["Usuario"].img;
            _this.Personaje.npc = res["Usuario"].npc;
            _this.disabled = "";
            if (_this.Personaje.id_user == localStorage.getItem("_id")) {
                _this.editable = true;
            }
            else {
                _this.disabled = "disabled";
            }
            _this.haveFicha();
        });
    };
    CharactersComponent.prototype.haveFicha = function () {
        if (this.Personaje.file === null || this.Personaje.file === undefined) {
            this.havFicha = false;
        }
        else {
            this.havFicha = true;
        }
    };
    CharactersComponent.prototype.addFile = function () {
        var _this = this;
        this.ficha.id_character = this.Personaje._id;
        this.ficha.id_user = this.Personaje.id_user;
        this.ficha.title = "Sin título";
        this.api
            .createfichas(this.ficha, "http://localhost:3000/api/files")
            .subscribe(function (res) {
            _this.havFicha = true;
            _this.api
                .getElemets("http://localhost:3000/api/files")
                .subscribe(function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var a = res_1[_i];
                    if (a["id_character"] == _this.Personaje._id) {
                        _this.Personaje.file = a["_id"];
                        _this.save();
                    }
                }
            });
        });
    };
    CharactersComponent.prototype.cambiarImagen = function (url) {
        this.Personaje.img = url;
        this.save();
    };
    CharactersComponent.prototype.saveChanges = function () {
        var _this = this;
        this.Personaje.name = $("#nombre").html();
        this.Personaje.identifier = $("#identificador").html();
        if ($("#npc").is(":Checked")) {
            this.Personaje.npc = true;
        }
        else {
            this.Personaje.npc = false;
        }
        this.api
            .getElemets("http://localhost:3000/api/characters")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var i = res_2[_i];
                if (i["identifier"] == _this.Personaje.identifier) {
                    if (i["_id"] != _this.Personaje._id) {
                        return;
                    }
                }
            }
        });
        this.save();
    };
    CharactersComponent.prototype.save = function () {
        this.api
            .modifyCharacter(this.Personaje, "http://localhost:3000/api/characters")
            .subscribe(function () { });
    };
    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-characters",
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/components/private/baul/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/components/private/baul/characters/characters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/components/private/baul/games/games.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/private/baul/games/games.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"utf-8\";\r\n\r\n.contenedor {\r\n  background-color: whitesmoke;\r\n  padding: 1rem;\r\n  padding-top: 7rem;\r\n  display: grid;\r\n  grid-template-columns: 70% auto;\r\n  grid-column-gap: 1rem;\r\n  position: relative;\r\n}\r\n\r\n.columna {\r\n  display: grid;\r\n  grid-template-columns: 550px auto;\r\n}\r\n\r\n.image-container {\r\n  background-color: black;\r\n  width: 550px;\r\n  height: 350px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.image-container img {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.info-container {\r\n  padding: 1rem;\r\n}\r\n\r\n.info-container h3 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.info-container p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.info-container .description {\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n.columna hr {\r\n  border-bottom: 3px grey solid;\r\n}\r\n\r\n.columna .nueva-publicacion {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  position: relative;\r\n\r\n  display: grid;\r\n  grid-template-columns: auto 7%;\r\n}\r\n\r\n.nueva-publicacion textarea {\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  display: block;\r\n  box-sizing: padding-box;\r\n  overflow: hidden;\r\n\r\n  font-size: 14px;\r\n  margin: 0px auto;\r\n  border-radius: 6px;\r\n  box-shadow: 2px 2px 8px rgba(black, .3);\r\n  border: 0;\r\n}\r\n\r\n.nueva-publicacion button {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.nueva-publicacion {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.publicaciones-container {\r\n  background-color: rgb(230, 230, 230);\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n}\r\n\r\n.columnb {\r\n  border-left: 2px grey solid;\r\n  display: grid;\r\n  grid-template-rows: 120px auto;\r\n  grid-row-gap: 1rem;\r\n}\r\n\r\n.panel {\r\n  display: grid;\r\n  justify-content: center;\r\n}\r\n\r\n.panel:nth-child(1) {\r\n  width: 100%;\r\n  grid-template-columns: 100%;\r\n  grid-template-rows: 30% 1.5% 30% 1.5% 30%;\r\n}\r\n\r\n.panel button {\r\n  background-color: whitesmoke;\r\n  color: crimson;\r\n  border: 2px solid crimson;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  transition: 0.3s;\r\n}\r\n\r\n.panel .join{\r\n  grid-row-start: 1;\r\n  grid-row-end: 4;\r\n}\r\n\r\n.panel button:hover {\r\n  background-color: crimson;\r\n  color: whitesmoke;\r\n  transition: 0.3s;\r\n}\r\n\r\n.panel:nth-child(2) {\r\n  grid-template-rows: 50px auto;\r\n}\r\n\r\n.panel h4 {\r\n  font-size: 2rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.panel ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.panel ul li {\r\n  display: grid;\r\n  grid-template-columns: 50px auto;\r\n  -webkit-column-gap: 0.5rem;\r\n     -moz-column-gap: 0.5rem;\r\n          column-gap: 0.5rem;\r\n  align-content: center;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.panel ul li .ltl-image-container {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: black;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  position: relative;\r\n}\r\n\r\n.ltl-image-container img {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.panel ul li p {\r\n  align-self: center;\r\n  line-height: 50px;\r\n  margin: 0;\r\n}\r\n\r\n.cambiarImagen {\r\n  background-color: rgb(112, 112, 112);\r\n  width: 20%;\r\n  height: 110px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.cambiarImagen input {\r\n  padding: 0.5rem;\r\n  border: 1px crimson solid;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.cambiarImagen .buttons button {\r\n  width: 50%;\r\n  border: 1px crimson solid;\r\n  background-color: whitesmoke;\r\n  border-radius: 0.2rem 0.2rem;\r\n  color: crimson;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.cambiarImagen .buttons button:hover {\r\n  background-color: crimson;\r\n  border-radius: 0.2rem 0.2rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.intro-pass{\r\n  position: fixed;\r\n  height: 100vh; \r\n  width: 100vw;\r\n  background-color: whitesmoke;\r\n  z-index: 200;\r\n}\r\n\r\n.container{\r\n  height: inherit;\r\n  width: inherit;\r\n  position: relative;\r\n}\r\n\r\n.form-container{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.form-container input{\r\n  background-color: whitesmoke;\r\n  border: 2px solid crimson;\r\n  padding: 0.5rem 2rem;\r\n}\r\n\r\n.form-container button{\r\n  background-color: whitesmoke;\r\n  border: 2px solid crimson;\r\n  color: crimson;\r\n  padding: 0.5rem 2rem;\r\n  transition: .3s;\r\n}\r\n\r\n.form-container span{\r\n  color: crimson;\r\n  line-height: 2rem; \r\n}\r\n\r\n.form-container button:hover{\r\n  background-color: crimson;\r\n  color: whitesmoke;\r\n  transition: .3s;\r\n}\r\n\r\n.addPlayer{\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 50%;\r\n  width: 70%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  background-color: whitesmoke;\r\n  padding: 2rem; \r\n}\r\n\r\n.grid-template{\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  grid-gap: 1rem;\r\n}\r\n\r\n.grid-template-unique{\r\n  background-color: white;\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  grid-template-rows: 170px 30px;\r\n  cursor: pointer; \r\n}\r\n\r\n.contenedor-imagen{\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n}\r\n\r\n.nombre{\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  text-align: center;\r\n}\r\n\r\n.contenedor-imagen{\r\n  background-color: black;\r\n  width: inherit;\r\n  height: inherit;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.contenedor-imagen img{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  height: 100%;\r\n}\r\n\r\n.addPlayer button{\r\n  margin-top: 1rem; \r\n  width: 100%;\r\n  background-color: whitesmoke;\r\n  border: 2px solid crimson;\r\n  color: crimson;\r\n  padding: 0.5rem 2rem;\r\n  transition: .3s;\r\n}\r\n\r\n.addPlayer button:hover{\r\n  background-color: crimson;\r\n  color: whitesmoke;\r\n  transition: .3s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2JhdWwvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0VBRWhCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7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QUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaXZhdGUvYmF1bC9nYW1lcy9nYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIGF1dG87XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbHVtbmEge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1NTBweCBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogNTUwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIgLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmNvbHVtbmEgaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBncmV5IHNvbGlkO1xyXG59XHJcblxyXG4uY29sdW1uYSAubnVldmEtcHVibGljYWNpb24ge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDclO1xyXG59XHJcblxyXG4ubnVldmEtcHVibGljYWNpb24gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBwYWRkaW5nLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYShibGFjaywgLjMpO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLm51ZXZhLXB1YmxpY2FjaW9uIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubnVldmEtcHVibGljYWNpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxufVxyXG5cclxuLmNvbHVtbmIge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggZ3JleSBzb2xpZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggYXV0bztcclxuICBncmlkLXJvdy1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhbmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDEuNSUgMzAlIDEuNSUgMzAlO1xyXG59XHJcblxyXG4ucGFuZWwgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ucGFuZWwgLmpvaW57XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiA0O1xyXG59XHJcblxyXG4ucGFuZWwgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5wYW5lbDpudGgtY2hpbGQoMikge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvO1xyXG59XHJcblxyXG4ucGFuZWwgaDQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucGFuZWwgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnBhbmVsIHVsIGxpIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBhdXRvO1xyXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ucGFuZWwgdWwgbGkgLmx0bC1pbWFnZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sdGwtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnBhbmVsIHVsIGxpIHAge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIGlucHV0IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDFweCBjcmltc29uIHNvbGlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbn1cclxuXHJcbi5jYW1iaWFySW1hZ2VuIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uaW50cm8tcGFzc3tcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDsgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgei1pbmRleDogMjAwO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBzcGFue1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtOyBcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmFkZFBsYXllcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiAycmVtOyBcclxufVxyXG5cclxuLmdyaWQtdGVtcGxhdGV7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5ncmlkLXRlbXBsYXRlLXVuaXF1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE3MHB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItaW1hZ2Vue1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMTtcclxufVxyXG5cclxuLm5vbWJyZXtcclxuICBncmlkLXJvdy1zdGFydDogMjtcclxuICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVuZWRvci1pbWFnZW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVuZWRvci1pbWFnZW4gaW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWRkUGxheWVyIGJ1dHRvbntcclxuICBtYXJnaW4tdG9wOiAxcmVtOyBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG59IFxyXG5cclxuLmFkZFBsYXllciBidXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/private/baul/games/games.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/private/baul/games/games.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-pass\" *ngIf=\"cpass\">\n  <div class=\"container\">\n    <div class=\"form-container\">\n      <form>\n        <input\n          type=\"password\"\n          placeholder=\"Introduce la contraseña\"\n          (keyup.enter)=\"tryPass(pass.value)\"\n          #pass\n        />\n        <button (click)=\"tryPass(pass.value)\" type=\"button\">Aceptar</button\n        ><br />\n        <span *ngIf=\"message\">La contraseña introducida no es correcta</span>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"contenedor\">\n  <div class=\"columna\">\n    <div class=\"image-container\" (click)=\"openChangeImage()\">\n      <img [src]=\"partida.img\" />\n    </div>\n    <div class=\"info-container\">\n      <form>\n        <h3 id=\"titulo\" [contentEditable]=\"editable\">{{ partida.title }}</h3>\n        <p id=\"master\">{{ master.uname }}</p>\n        <input\n          id=\"open\"\n          type=\"checkbox\"\n          [checked]=\"partida.open\"\n          disabled=\"{{ disabled }}\"\n        /><label> Abierta</label>\n        <hr />\n        <p id=\"descrip\" class=\"description\" [contentEditable]=\"editable\">\n          {{ partida.description }}\n        </p>\n      </form>\n    </div>\n    <hr />\n    <div *ngIf=\"joined\" class=\"nueva-publicacion\">\n      <textarea class=\"autoExpand\" rows=\"3\" data-min-rows=\"3\" #texto></textarea>\n      <button type=\"button\" (click)=\"crearNuevaPublicacion(texto.value)\">\n        <i class=\"fas fa-comment-medical\"></i>\n      </button>\n    </div>\n    <div class=\"publicaciones-container\">\n      <app-publicacion\n        [id]=\"publication._id\"\n        *ngFor=\"\n          let publication of publicaciones\n            | paginate: { itemsPerPage: 10, currentPage: p }\n        \"\n      ></app-publicacion>\n    </div>\n  </div>\n  <div class=\"columnb\">\n    <div class=\"panel\">\n      <button *ngIf=\"editable\" (click)=\"saveChanges()\">Guardar cambios</button>\n      <button class=\"join\" *ngIf=\"!editable && !joined\" (click)=\"openJoin()\">\n        Unirse a esta partida\n      </button>\n      <button class=\"join\" *ngIf=\"!editable && joined\" (click)=\"leaveRoom()\">\n          Abandonar esta partida\n      </button>\n      <div *ngIf=\"editable\" class=\"space\"></div>\n      <button *ngIf=\"editable\" (click)=\"openChangePass()\">\n        Cambiar contraseña\n      </button>\n      <div *ngIf=\"editable\" class=\"space\"></div>\n      <button *ngIf=\"editable\" (click)=\"delete()\">\n        Eliminar esta partida\n      </button>\n    </div>\n    <div class=\"panel\">\n      <h4>Lista de jugadores</h4>\n      <ul>\n        <li>\n          <div class=\"ltl-image-container\">\n            <img [src]=\"master.img\" />\n          </div>\n          <p>{{ master.uname }} (Master)</p>\n        </li>\n        <li *ngFor=\"let char of characters\">\n          <div class=\"ltl-image-container\">\n            <img [src]=\"char.img\" />\n          </div>\n          <p>{{ char.name }}</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"cambiarImagen\" *ngIf=\"divImagen && editable\">\n    <input type=\"url\" placeholder=\"Introduce una url\" #url />\n    <div class=\"buttons\">\n      <button (click)=\"cambiarImagen(url.value)\" type=\"button\">Aceptar</button>\n      <button (click)=\"closeChangeImage()\" id=\"cerrar\" type=\"button\">\n        Cerrar\n      </button>\n    </div>\n  </div>\n  <div class=\"cambiarImagen\" *ngIf=\"divPass\">\n    <input type=\"url\" placeholder=\"Introduce una nueva contraseña\" #pass />\n    <div class=\"buttons\">\n      <button (click)=\"cambiarPass(pass.value)\" type=\"button\">Aceptar</button>\n      <button (click)=\"closeChangePass()\" id=\"cerrar\" type=\"button\">\n        Cerrar\n      </button>\n    </div>\n  </div>\n  <div class=\"addPlayer\" *ngIf=\"divJoin\">\n    <h3>Elige un personaje para unirte a la partida</h3>\n    <div class=\"grid-template\">\n      <div class=\"grid-template-unique\" (click)=\"selectCharacter(myCharacter._id)\" *ngFor=\"let myCharacter of MyCharacters | paginate: { itemsPerPage: 10, currentPage: pc }\">\n        <div class=\"contenedor-imagen\">\n          <img [src]=\"myCharacter.img\" />\n        </div>\n        <div class=\"nombre\">{{ myCharacter.name }}</div>\n      </div>\n    </div>\n    <button (click)=\"closeJoin()\">Cerrar</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/baul/games/games.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/private/baul/games/games.component.ts ***!
  \******************************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _models_game_room_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/game-room.model */ "./src/app/models/game-room.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_publications_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/publications.model */ "./src/app/models/publications.model.ts");







var GamesComponent = /** @class */ (function () {
    function GamesComponent(activatedRoute, api, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.router = router;
        this.divImagen = false;
        this.divPass = false;
        this.divJoin = false;
        this.editable = false;
        this.cpass = false;
        this.message = false;
        this.joined = false;
        this.publicaciones = [];
        this.characters = [];
        this.MyCharacters = [];
        this.p = 1;
        this.pc = 1;
        this.activatedRoute.params.subscribe(function (params) {
            _this.idPartida = params.id;
        });
        this.partida = new _models_game_room_model__WEBPACK_IMPORTED_MODULE_4__["gameRoomModel"]();
        this.master = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["userModel"]();
        this.nuevaPublicacion = new _models_publications_model__WEBPACK_IMPORTED_MODULE_6__["publicationModel"]();
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getPartida();
        $(document)
            .one("focus.autoExpand", "textarea.autoExpand", function () {
            var savedValue = this.value;
            this.value = "";
            this.baseScrollHeight = this.scrollHeight;
            this.value = savedValue;
        })
            .on("input.autoExpand", "textarea.autoExpand", function () {
            var minRows = this.getAttribute("data-min-rows") | 0, rows;
            this.rows = minRows;
            rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
            this.rows = minRows + rows;
        });
    };
    GamesComponent.prototype.getPartida = function () {
        var _this = this;
        this.api
            .getElement(this.idPartida, "http://localhost:3000/api/games")
            .subscribe(function (res) {
            _this.partida.title = res["Usuario"].title;
            _this.partida._id = res["Usuario"]._id;
            _this.partida.description = res["Usuario"].description;
            _this.partida.id_user = res["Usuario"].id_user;
            _this.partida.img = res["Usuario"].img;
            _this.partida.open = res["Usuario"].open;
            _this.partida.password = res["Usuario"].password;
            _this.partida.players = res["Usuario"].players;
            _this.disabled = "";
            if (_this.partida.description == null) {
                _this.partida.description = "Descripción";
            }
            if (_this.partida.password !== "") {
                _this.cpass = true;
            }
            else {
                _this.cpass = false;
            }
            if (_this.partida.id_user === localStorage.getItem("_id")) {
                _this.editable = true;
                _this.cpass = false;
                _this.joined = true;
            }
            else {
                _this.disabled = "disabled";
                _this.getMyCharacters();
            }
            _this.getMaster();
            _this.getPublications();
            _this.interval = setInterval(function () {
                _this.getPublications();
                _this.getPlayers();
            }, 10000);
        });
    };
    GamesComponent.prototype.getMaster = function () {
        var _this = this;
        this.api
            .getElement(this.partida.id_user, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.master.uname = res["Usuario"].uname;
            _this.master.img = res["Usuario"].img;
            _this.master.friendList = res["Usuario"].friendList;
        });
    };
    GamesComponent.prototype.getPlayers = function () {
        var _this = this;
        for (var _i = 0, _a = this.partida.players; _i < _a.length; _i++) {
            var a = _a[_i];
            this.api
                .getElement(a, "http://localhost:3000/api/characters")
                .subscribe(function (res) {
                _this.characters.push(res["Usuario"]);
            });
        }
    };
    /*  */
    GamesComponent.prototype.saveChanges = function () {
        this.partida.title = $("#titulo").html();
        this.partida.description = $("#descrip").html();
        if ($("#open").is(":Checked")) {
            this.partida.open = true;
        }
        else {
            this.partida.open = false;
        }
        this.guardar();
    };
    GamesComponent.prototype.delete = function () {
        var _this = this;
        this.api
            .deleteElement(this.partida._id, "http://localhost:3000/api/games")
            .subscribe(function () {
            _this.router.navigate(["/baul"]);
        });
    };
    GamesComponent.prototype.guardar = function () {
        this.api
            .modifyGameRoom(this.partida, "http://localhost:3000/api/games")
            .subscribe(function () { });
    };
    GamesComponent.prototype.crearNuevaPublicacion = function (texto) {
        var _this = this;
        this.nuevaPublicacion.content = texto;
        this.nuevaPublicacion.game_room_id = this.partida._id;
        this.nuevaPublicacion.id_character = localStorage.getItem("id_character");
        if (this.nuevaPublicacion.id_character == null) {
            this.nuevaPublicacion.id_character = " ";
        }
        this.nuevaPublicacion.id_user = localStorage.getItem("_id");
        this.api
            .createPublication(this.nuevaPublicacion, "http://localhost:3000/api/publications")
            .subscribe(function () {
            _this.getPublications();
        });
    };
    GamesComponent.prototype.getPublications = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/publications")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var a = res_1[_i];
                if (a["game_room_id"] === _this.partida._id) {
                    var not = false;
                    for (var _a = 0, _b = _this.publicaciones; _a < _b.length; _a++) {
                        var pub = _b[_a];
                        if (pub["_id"] === a["_id"]) {
                            not = true;
                        }
                    }
                    if (not === false) {
                        _this.publicaciones.unshift(a);
                    }
                }
            }
        });
    };
    GamesComponent.prototype.getMyCharacters = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/characters")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var a = res_2[_i];
                _this.MyCharacters.push(a);
            }
            _this.isMyCharacter();
        });
    };
    GamesComponent.prototype.selectCharacter = function (id) {
        this.partida.players.push(id);
        this.divJoin = false;
        this.joined = true;
        this.guardar();
    };
    GamesComponent.prototype.isMyCharacter = function () {
        for (var _i = 0, _a = this.partida.players; _i < _a.length; _i++) {
            var a = _a[_i];
            for (var _b = 0, _c = this.MyCharacters; _b < _c.length; _b++) {
                var i = _c[_b];
                if (a === i._id) {
                    this.joined = true;
                    localStorage.setItem("id_character", i._id);
                }
            }
        }
    };
    GamesComponent.prototype.leaveRoom = function () {
        var character = localStorage.getItem("id_character");
        for (var i = 0; i < this.partida.players.length; i++) {
            if (this.partida.players[i] === character) {
                this.joined = false;
                this.partida.players.splice(i, 1);
            }
        }
        this.guardar();
    };
    /*  */
    GamesComponent.prototype.tryPass = function (pass) {
        if (this.partida.password === pass) {
            this.cpass = false;
            this.message = false;
        }
        else {
            this.message = true;
        }
    };
    GamesComponent.prototype.cambiarImagen = function (url) {
        this.partida.img = url;
        this.guardar();
    };
    GamesComponent.prototype.cambiarPass = function (pass) {
        this.partida.password = pass;
        this.closeChangePass();
        this.guardar();
    };
    GamesComponent.prototype.openChangeImage = function () {
        this.divImagen = true;
    };
    GamesComponent.prototype.closeChangeImage = function () {
        this.divImagen = false;
    };
    GamesComponent.prototype.openChangePass = function () {
        this.divPass = true;
    };
    GamesComponent.prototype.closeChangePass = function () {
        this.divPass = false;
    };
    GamesComponent.prototype.openJoin = function () {
        this.divJoin = true;
    };
    GamesComponent.prototype.closeJoin = function () {
        this.divJoin = false;
    };
    GamesComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem("id_character");
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-games",
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/components/private/baul/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/components/private/baul/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/components/private/baul/my-bault/my-bault.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/private/baul/my-bault/my-bault.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    position: relative; \r\n}\r\n\r\n.contenedor{\r\n    margin: 0 auto; \r\n    max-width: 75%;\r\n    margin-top: 7rem; \r\n    margin-bottom: 1rem; \r\n    min-height: 90vh; \r\n}\r\n\r\n.contenedor h2{\r\n    color: crimson; \r\n    font-size: 2.5rem; \r\n    text-transform: uppercase; \r\n}\r\n\r\n.secction{\r\n    background-color: whitesmoke; \r\n}\r\n\r\n.top-secction{\r\n    display: grid; \r\n    grid-template-columns: 90% 10%; \r\n    padding: 1rem; \r\n}\r\n\r\n.top-secction h4{\r\n    align-self: center;\r\n    font-size: 1.5rem; \r\n    text-transform: uppercase; \r\n}\r\n\r\n.top-secction span{\r\n    justify-self: center; \r\n    align-self: center;\r\n    font-size: 2rem; \r\n}\r\n\r\n.body-secction{\r\n    display: grid;\r\n    background-color: rgb(233, 233, 233); \r\n    padding: 1rem; \r\n    grid-template-columns: 1fr 1fr 1fr 1fr; \r\n    -webkit-column-gap: 1rem; \r\n       -moz-column-gap: 1rem; \r\n            column-gap: 1rem; \r\n    row-gap: 1rem; \r\n}\r\n\r\n.object{\r\n    cursor: pointer;\r\n    border: 2px crimson solid; \r\n    border-radius: 0.5rem 0.5rem;  \r\n}\r\n\r\n.image-container{\r\n    background-color: rgb(0, 0, 0); \r\n    width: 100%;\r\n    height: 200px;\r\n    border-top-left-radius: 0.5rem 0.5rem;\r\n    border-top-right-radius: 0.5rem 0.5rem ;\r\n    margin-bottom: 1rem; \r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-container img{\r\n    height: 105%;\r\n    position: absolute; \r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n}\r\n\r\n.text-container{\r\n    padding: 0.5rem; \r\n}\r\n\r\n.nuevo{\r\n    background-color: whitesmoke;\r\n    border: 1px rgb(184, 184, 184) solid;\r\n    padding: 1.5rem;   \r\n    position: fixed; \r\n    top: 7rem; \r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%); \r\n    width: 50%;\r\n}\r\n\r\n.nuevo form{\r\n    display: grid; \r\n    grid-template-columns: auto auto; \r\n}\r\n\r\n.nuevo form .check{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3; \r\n}\r\n\r\n.nuevo form .check input{\r\n    border: 1px crimson solid;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.nuevo form button{\r\n    width: 99%;\r\n    border: 1px crimson solid;\r\n    background-color: whitesmoke; \r\n    color: crimson; \r\n}\r\n\r\n.nuevo form button:hover{\r\n    background-color: crimson; \r\n    color: whitesmoke; \r\n}\r\n\r\n.in{\r\n    width: 99%;\r\n    border: 1px crimson solid; \r\n    border-radius: 0.2rem 0.2rem; \r\n    padding-left: 1rem; \r\n    margin-bottom: 0.5rem; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2JhdWwvbXktYmF1bHQvbXktYmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaXZhdGUvYmF1bC9teS1iYXVsdC9teS1iYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbi5jb250ZW5lZG9ye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cmVtOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IFxyXG4gICAgbWluLWhlaWdodDogOTB2aDsgXHJcbn1cclxuXHJcbi5jb250ZW5lZG9yIGgye1xyXG4gICAgY29sb3I6IGNyaW1zb247IFxyXG4gICAgZm9udC1zaXplOiAyLjVyZW07IFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbn1cclxuXHJcbi5zZWNjdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IFxyXG59XHJcblxyXG4udG9wLXNlY2N0aW9ue1xyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7IFxyXG4gICAgcGFkZGluZzogMXJlbTsgXHJcbn1cclxuXHJcbi50b3Atc2VjY3Rpb24gaDR7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBcclxufVxyXG5cclxuLnRvcC1zZWNjdGlvbiBzcGFue1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IFxyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtOyBcclxufVxyXG5cclxuLmJvZHktc2VjY3Rpb257XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpOyBcclxuICAgIHBhZGRpbmc6IDFyZW07IFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7IFxyXG4gICAgY29sdW1uLWdhcDogMXJlbTsgXHJcbiAgICByb3ctZ2FwOiAxcmVtOyBcclxufVxyXG5cclxuLm9iamVjdHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IGNyaW1zb24gc29saWQ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbTsgIFxyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtIDAuNXJlbSA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxyXG59XHJcblxyXG4udGV4dC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07IFxyXG59XHJcblxyXG4ubnVldm97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDE4NCwgMTg0LCAxODQpIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMS41cmVtOyAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHRvcDogN3JlbTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IFxyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm51ZXZvIGZvcm17XHJcbiAgICBkaXNwbGF5OiBncmlkOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvOyBcclxufVxyXG5cclxuLm51ZXZvIGZvcm0gLmNoZWNre1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7IFxyXG59XHJcblxyXG4ubnVldm8gZm9ybSAuY2hlY2sgaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBjcmltc29uIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubnVldm8gZm9ybSBidXR0b257XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IFxyXG4gICAgY29sb3I6IGNyaW1zb247IFxyXG59XHJcblxyXG4ubnVldm8gZm9ybSBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyBcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlOyBcclxufVxyXG5cclxuLmlue1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGJvcmRlcjogMXB4IGNyaW1zb24gc29saWQ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/private/baul/my-bault/my-bault.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/private/baul/my-bault/my-bault.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contenedor\">\n  <h2 class=\"h2\">Mi baul</h2>\n  <div class=\"secction\" id=\"personajes\">\n    <div class=\"top-secction\">\n      <h4>Personajes</h4>\n      <span (click)=\"crearPersonaje()\"><i class=\"far fa-plus-square\"></i></span>\n    </div>\n    <div class=\"body-secction\">\n      <!--  -->\n      <div *ngFor=\"let personaje of personajes\" class=\"object\" (click)=\"verPersonaje(personaje._id)\">\n        <div class=\"image-container\">\n          <img [src]=\"personaje.img\" />\n        </div>\n        <div class=\"text-container\">\n          <h5>{{ personaje.name }}</h5>\n        </div>\n      </div>\n      <span *ngIf=\"personajes.length == 0\">No tienes ningun personaje</span>\n      <!--  -->\n    </div>\n  </div>\n  <div class=\"secction\" id=\"partidas\">\n    <div class=\"top-secction\">\n      <h4>Partidas</h4>\n      <span (click)=\"crearPartida()\"><i class=\"far fa-plus-square\"></i></span>\n    </div>\n    <div class=\"body-secction\">\n      <!--  -->\n      <div *ngFor=\"let partida of partidas\" class=\"object\" (click)=\"verPartida(partida._id)\">\n        <div class=\"image-container\">\n          <img [src]=\"partida.img\" />\n        </div>\n        <div class=\"text-container\">\n          <h5>{{ partida.title }}</h5>\n          <p>{{ partida.description }}</p>\n        </div>\n      </div>\n      <span *ngIf=\"partidas.length == 0\">No tienes ninguna partida creada</span>\n      <!--  -->\n    </div>\n  </div>\n  <div class=\"secction\" id=\"comunidades\">\n    <div class=\"top-secction\">\n      <h4>Comunidades</h4>\n      <span><i class=\"far fa-plus-square\"></i></span>\n    </div>\n    <div class=\"body-secction\">\n      <span>No estás en ninguna comunidad</span>\n    </div>\n  </div>\n  <div class=\"secction\" id=\"libros\">\n    <div class=\"top-secction\">\n      <h4>Libros</h4>\n      <span><i class=\"far fa-plus-square\"></i></span>\n    </div>\n    <div class=\"body-secction\">\n      <span>No tienes ningun libro</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"nuevo\" id=\"nuevoPer\">\n  <h4>Nuevo personaje</h4>\n  <form\n    (submit)=\"onSubmitPersonaje(formularioPersonaje)\"\n    #formularioPersonaje=\"ngForm\"\n  >\n    <input\n      [(ngModel)]=\"personaje.name\"\n      class=\"in\"\n      type=\"text\"\n      name=\"nombre\"\n      placeholder=\"Nombre del personaje\"\n    />\n    <input\n      [(ngModel)]=\"personaje.identifier\"\n      class=\"in\"\n      type=\"text\"\n      name=\"Identificador\"\n      placeholder=\"Identificador del personaje\"\n    />\n    <div class=\"check\">\n      <input [(ngModel)]=\"personaje.npc\" type=\"checkbox\" name=\"checkbox\" />\n      <label>NPC</label>\n    </div>\n    <button type=\"submit\">Guardar</button>\n    <button type=\"button\" (click)=\"cerrarP()\">Cerrar</button>\n  </form>\n</div>\n\n<div class=\"nuevo\" id=\"nuevaPar\">\n  <h4>Nueva Partida</h4>\n  <form\n    (submit)=\"onSubmitPartida(formularioPartida)\"\n    #formularioPartida=\"ngForm\"\n  >\n    <input\n      [(ngModel)]=\"partida.title\"\n      class=\"in\"\n      type=\"text\"\n      name=\"nombre\"\n      placeholder=\"Nombre del personaje\"\n    />\n    <div class=\"check\">\n      <input [(ngModel)]=\"partida.open\" type=\"checkbox\" name=\"checkbox\" />\n      <label>Abierto</label>\n    </div>\n    <button type=\"submit\">Guardar</button>\n    <button type=\"button\" (click)=\"cerrarP()\">Cerrar</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/baul/my-bault/my-bault.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/private/baul/my-bault/my-bault.component.ts ***!
  \************************************************************************/
/*! exports provided: MyBaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBaultComponent", function() { return MyBaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_character_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/character.model */ "./src/app/models/character.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _models_game_room_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/game-room.model */ "./src/app/models/game-room.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_fichas_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../models/fichas.model */ "./src/app/models/fichas.model.ts");








var MyBaultComponent = /** @class */ (function () {
    function MyBaultComponent(charS, router) {
        this.charS = charS;
        this.router = router;
        this.personajes = [];
        this.partidas = [];
        this.personaje = new _models_character_model__WEBPACK_IMPORTED_MODULE_2__["characterModel"]();
        this.partida = new _models_game_room_model__WEBPACK_IMPORTED_MODULE_5__["gameRoomModel"]();
        this.ficha = new _models_fichas_model__WEBPACK_IMPORTED_MODULE_7__["fichaModel"]();
        this.personaje.npc = false;
        this.idUser = localStorage.getItem("_id");
        this.partida.id_user = this.idUser;
        this.personaje.id_user = this.idUser;
        this.partida.open = false;
        this.getAllCharacters();
        this.getAllGameRooms();
    }
    MyBaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.charS.refreshNedeed$.subscribe(function () {
            _this.personajes = [];
            _this.partidas = [];
            _this.getAllCharacters();
            _this.getAllGameRooms();
        });
        $(document).ready(function () {
            /* $(".body-secction").hide(); */
            $("#nuevoPer").hide();
            $("#nuevaPar").hide();
        });
    };
    MyBaultComponent.prototype.crearPersonaje = function () {
        $("#nuevoPer").show(1000);
    };
    MyBaultComponent.prototype.crearPartida = function () {
        $("#nuevaPar").show(1000);
    };
    MyBaultComponent.prototype.cerrarP = function () {
        $(".nuevo").hide(1000);
    };
    MyBaultComponent.prototype.onSubmitPersonaje = function (form) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            allowOutsideClick: false,
            type: "info",
            text: "Espere por favor"
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
        if (form.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                allowOutsideClick: false,
                type: "error",
                text: "Los datos no están completos"
            });
            return;
        }
        this.personaje.identifier = "@" + this.personaje.identifier;
        this.charS
            .createCharacter(this.personaje, "http://localhost:3000/api/characters")
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                allowOutsideClick: false,
                type: "success",
                text: "Se ha creado con éxito"
            });
        });
    };
    MyBaultComponent.prototype.onSubmitPartida = function (form) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            allowOutsideClick: false,
            type: "info",
            text: "Espere por favor"
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading();
        if (form.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                allowOutsideClick: false,
                type: "error",
                text: "Los datos no están completos"
            });
            return;
        }
        this.charS
            .createGameRoom(this.partida, "http://localhost:3000/api/games")
            .subscribe(function (res) {
            _this.ngOnInit();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                allowOutsideClick: false,
                type: "success",
                text: "Se ha creado con éxito"
            });
        });
    };
    MyBaultComponent.prototype.getAllCharacters = function () {
        var _this = this;
        this.charS
            .getElemets("http://localhost:3000/api/characters")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var i = res_1[_i];
                if (i["id_user"] == _this.idUser) {
                    _this.personajes.push(i);
                }
            }
        });
    };
    MyBaultComponent.prototype.getAllGameRooms = function () {
        var _this = this;
        this.charS
            .getElemets("http://localhost:3000/api/games")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var i = res_2[_i];
                if (i["id_user"] === _this.idUser) {
                    _this.partidas.unshift(i);
                }
                for (var _a = 0, _b = i["players"]; _a < _b.length; _a++) {
                    var a = _b[_a];
                    for (var _c = 0, _d = _this.personajes; _c < _d.length; _c++) {
                        var b = _d[_c];
                        if (b["_id"] === a) {
                            _this.partidas.unshift(i);
                        }
                    }
                }
            }
        });
    };
    MyBaultComponent.prototype.verPersonaje = function (id) {
        this.router.navigate(["/personaje/", id]);
    };
    MyBaultComponent.prototype.verPartida = function (id) {
        this.router.navigate(["/partida/", id]);
    };
    MyBaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-my-bault",
            template: __webpack_require__(/*! ./my-bault.component.html */ "./src/app/components/private/baul/my-bault/my-bault.component.html"),
            styles: [__webpack_require__(/*! ./my-bault.component.css */ "./src/app/components/private/baul/my-bault/my-bault.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["APIServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MyBaultComponent);
    return MyBaultComponent;
}());



/***/ }),

/***/ "./src/app/components/private/chat/chat-room/chat-room.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/private/chat/chat-room/chat-room.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding: 0rem;\r\n}\r\n\r\n.me-chats {\r\n  display: grid;\r\n  grid-template-columns: 60px auto;\r\n  align-items: center;\r\n  -webkit-column-gap: 0.5rem;\r\n     -moz-column-gap: 0.5rem;\r\n          column-gap: 0.5rem;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid rgba(179, 179, 179, 0.801);\r\n  box-shadow: 0px 5px 10px -5px rgba(179, 179, 179, 0.801);\r\n}\r\n\r\n.image-container {\r\n  width: 60px;\r\n  height: 60px;\r\n  background-color: black;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.image-container img {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.messages-container {\r\n  height: 55vh;\r\n  width: 100%;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  display: grid;\r\n  grid-template-columns: 100%;\r\n  grid-auto-rows: -webkit-min-content;\r\n  grid-auto-rows: min-content;\r\n}\r\n\r\n.message-container {\r\n  margin: 0.5rem 0rem;\r\n  max-width: 60%;\r\n  width: auto;\r\n  display: grid;\r\n  -webkit-column-gap: 0.5rem;\r\n     -moz-column-gap: 0.5rem;\r\n          column-gap: 0.5rem;\r\n  padding: 0 0.5rem;\r\n}\r\n\r\n.received {\r\n  justify-self: left;\r\n  grid-template-columns: 30px auto;\r\n  grid-template-rows: 100%;\r\n  grid-template-areas: \"imagen contenido\";\r\n}\r\n\r\n.sended {\r\n  justify-self: right;\r\n  grid-template-columns: auto 30px;\r\n  grid-template-rows: 100%;\r\n  grid-template-areas: \"contenido imagen\";\r\n}\r\n\r\n.image-message-container {\r\n  grid-area: imagen;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: black;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.image-message-container img {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.content-message {\r\n  grid-area: contenido;\r\n  padding: 0.2rem 1rem;\r\n  border-radius: 2rem 2rem;\r\n}\r\n\r\n.received-color {\r\n  background-color: rgb(221, 78, 107);\r\n  text-align: left;\r\n}\r\n\r\n.sended-color {\r\n  background-color: rgb(221, 123, 78);\r\n  text-align: right;\r\n}\r\n\r\n.send-message {\r\n  border-top: 1px solid rgba(179, 179, 179, 0.801);\r\n  height: 6vh;\r\n}\r\n\r\n.send-message input {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  background-color: rgba(179, 179, 179, 0.801);\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: crimson;\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: orange;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2NoYXQvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsMEJBQWtCO0tBQWxCLHVCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1EQUFtRDtFQUduRCx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUNBQTJCO0VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYiwwQkFBa0I7S0FBbEIsdUJBQWtCO1VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLFdBQVc7RUFDWCw0Q0FBNEM7QUFDOUM7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2NoYXQvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHJlbTtcclxufVxyXG5cclxuLm1lLWNoYXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC44MDEpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IC01cHggcmdiYSgxNzksIDE3OSwgMTc5LCAwLjgwMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTVweCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuODAxKTtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLTVweCByZ2JhKDE3OSwgMTc5LCAxNzksIDAuODAxKTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubWVzc2FnZXMtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMC41cmVtIDByZW07XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbn1cclxuXHJcbi5yZWNlaXZlZCB7XHJcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlbiBjb250ZW5pZG9cIjtcclxufVxyXG5cclxuLnNlbmRlZCB7XHJcbiAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjb250ZW5pZG8gaW1hZ2VuXCI7XHJcbn1cclxuXHJcbi5pbWFnZS1tZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1hcmVhOiBpbWFnZW47XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltYWdlLW1lc3NhZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250ZW50LW1lc3NhZ2Uge1xyXG4gIGdyaWQtYXJlYTogY29udGVuaWRvO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbTtcclxufVxyXG5cclxuLnJlY2VpdmVkLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3OCwgMTA3KTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VuZGVkLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxMjMsIDc4KTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNlbmQtbWVzc2FnZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTc5LCAxNzksIDE3OSwgMC44MDEpO1xyXG4gIGhlaWdodDogNnZoO1xyXG59XHJcblxyXG4uc2VuZC1tZXNzYWdlIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc5LCAxNzksIDE3OSwgMC44MDEpO1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/private/chat/chat-room/chat-room.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/private/chat/chat-room/chat-room.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"me-chats\">\n    <div class=\"image-container\">\n      <img [src]=\"UserToChat.img\" />\n    </div>\n    <h4>{{ UserToChat.uname }}</h4>\n  </div>\n  <div class=\"messages-container\">\n    <!--  -->\n    <div\n      *ngFor=\"let message of ArrayRecvMessage\"\n      class=\"message-container\"\n      [ngClass]=\"{ received: message.received, sended: message.sended }\"\n    >\n      <div class=\"image-message-container\">\n        <img [src]=\"message.img\" />\n      </div>\n      <div\n        class=\"content-message\"\n        [ngClass]=\"{\n          'received-color': message.received,\n          'sended-color': message.sended\n        }\"\n      >\n        {{ message.content }}\n      </div>\n    </div>\n  </div>\n  <div class=\"send-message\">\n    <form #myForm=\"ngForm\">\n      <input\n        type=\"text\"\n        placeholder=\"Escribe un mensaje...\"\n        name=\"message\"\n        minlength=\"1\"\n        [(ngModel)]=\"message.content\"\n        (keyup.enter)=\"sendMessage(myForm)\"\n      />\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/chat/chat-room/chat-room.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/private/chat/chat-room/chat-room.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_messages_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/messages.model */ "./src/app/models/messages.model.ts");





var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(api) {
        this.api = api;
        this.ArrayRecvMessage = [];
        this.idActualUser = localStorage.getItem("_id");
    }
    ChatRoomComponent.prototype.ngOnInit = function () { };
    ChatRoomComponent.prototype.ngOnChanges = function (changes) {
        this.idActualChat = this.idChat;
        this.UserToChat = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["userModel"]();
        this.message = new _models_messages_model__WEBPACK_IMPORTED_MODULE_4__["messagesModel"]();
        this.EsteUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["userModel"]();
        this.ArrayRecvMessage = [];
        this.getThisUser();
        this.getUser();
    };
    ChatRoomComponent.prototype.getThisUser = function () {
        var _this = this;
        this.api.getElement(this.idActualUser, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.EsteUser.img = res['Usuario'].img;
        });
    };
    ChatRoomComponent.prototype.getUser = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/chatrooms")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var a = res_1[_i];
                if (a["_id"] == _this.idActualChat) {
                    for (var _a = 0, _b = a["id_users"]; _a < _b.length; _a++) {
                        var b = _b[_a];
                        if (b !== _this.idActualUser) {
                            _this.api
                                .getElement(b, "http://localhost:3000/api/users")
                                .subscribe(function (res) {
                                _this.UserToChat.uname = res["Usuario"].uname;
                                _this.UserToChat.img = res["Usuario"].img;
                                _this.UserToChat._id = res["Usuario"]._id;
                                _this.getMessages();
                            });
                        }
                    }
                }
            }
        });
    };
    ChatRoomComponent.prototype.getMessages = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/messages")
            .subscribe(function (res) {
            _this.RecvMessage = new _models_messages_model__WEBPACK_IMPORTED_MODULE_4__["messagesModel"]();
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var a = res_2[_i];
                if (a["id_chat_room"] === _this.idActualChat) {
                    _this.RecvMessage = new _models_messages_model__WEBPACK_IMPORTED_MODULE_4__["messagesModel"]();
                    if (a["id_user"] !== _this.idActualUser) {
                        _this.RecvMessage.received = true;
                        _this.RecvMessage.sended = false;
                        _this.RecvMessage.img = _this.UserToChat.img;
                    }
                    else {
                        _this.RecvMessage.received = false;
                        _this.RecvMessage.sended = true;
                        _this.RecvMessage.img = _this.EsteUser.img;
                    }
                    _this.RecvMessage.content = a["content"];
                    _this.RecvMessage.id_user = a["id_user"];
                    _this.RecvMessage.id_chat_room = a["id_chat_room"];
                    _this.ArrayRecvMessage.push(_this.RecvMessage);
                }
            }
        });
    };
    ChatRoomComponent.prototype.sendMessage = function (form) {
        if (!form.valid) {
            return;
        }
        this.message.id_user = this.idActualUser;
        this.message.id_chat_room = this.idActualChat;
        this.api
            .createMessage(this.message, "http://localhost:3000/api/messages")
            .subscribe(function () { });
        form.reset();
        this.getMessages();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChatRoomComponent.prototype, "idChat", void 0);
    ChatRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat-room",
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/components/private/chat/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/components/private/chat/chat-room/chat-room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["APIServiceService"]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/components/private/chat/chat.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/private/chat/chat.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n*{\r\n    outline: 0;\r\n}\r\n\r\n.contenedor{\r\n    padding: 1rem;\r\n    padding-top: 7rem; \r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-gap: 1rem; \r\n}\r\n\r\n.secc{\r\n    background-color: whitesmoke;\r\n    min-height: 70vh;\r\n}\r\n\r\n.me-chats{\r\n    display: grid;\r\n    grid-template-columns: 60px auto;\r\n    align-items: center;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem; \r\n    padding: 0.5rem; \r\n}\r\n\r\n.image-container{\r\n    width: 60px;\r\n    height: 60px;\r\n    background-color: black;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.image-container img{\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.buscador{\r\n    margin: 1rem 0; \r\n    position: relative;\r\n    padding: 0.5rem; \r\n}\r\n\r\n.icone{\r\n    position: absolute;\r\n    top: 1rem;\r\n    left: 1rem;\r\n    color: rgb(148, 148, 148);\r\n}\r\n\r\n.buscador input{\r\n    border: 0;\r\n    padding: 0.5rem; \r\n    padding-left: 2.2rem;\r\n    width: 100%;\r\n    border-radius: 1rem 1rem; \r\n}\r\n\r\n.open-chats{\r\n}\r\n\r\n.chat{\r\n    display: grid;\r\n    grid-template-columns: 35px auto;\r\n    align-items: center;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem; \r\n    margin-bottom: 0.5rem; \r\n    padding: 0.5rem; \r\n}\r\n\r\n.active{\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.chat-image-container{\r\n    width: 35px;\r\n    height: 35px;\r\n    background-color: black;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.chat-image-container img{\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLDBCQUFrQjtPQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsMEJBQWtCO09BQWxCLHVCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uY29udGVuZWRvcntcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTsgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxcmVtOyBcclxufVxyXG5cclxuLnNlY2N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgbWluLWhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLm1lLWNoYXRze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDAuNXJlbTsgXHJcbiAgICBwYWRkaW5nOiAwLjVyZW07IFxyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJ1c2NhZG9ye1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMC41cmVtOyBcclxufVxyXG5cclxuLmljb25le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG4gICAgbGVmdDogMXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbn1cclxuXHJcbi5idXNjYWRvciBpbnB1dHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtOyBcclxufVxyXG5cclxuLm9wZW4tY2hhdHN7XHJcbn1cclxuXHJcbi5jaGF0e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDAuNXJlbTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxyXG4gICAgcGFkZGluZzogMC41cmVtOyBcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufVxyXG5cclxuLmNoYXQtaW1hZ2UtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGF0LWltYWdlLWNvbnRhaW5lciBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/private/chat/chat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/private/chat/chat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contenedor\">\n  <div class=\"secc chats\">\n    <div class=\"me-chats\">\n      <div class=\"image-container\">\n          <img [src]=\"ActualUser.img\">\n      </div>\n      <h4>Mis chats</h4>\n    </div>\n    <div class=\"buscador\">\n      <div class=\"icone\">\n          <i class=\"fas fa-search\"></i>\n      </div>\n      <input #termino type=\"text\" placeholder=\"Buscar chat\">\n    </div>\n    <div class=\"open-chats\">\n      <div routerLink=\"/chat/{{chat.idChatRoom}}\" routerLinkActive=\"active\" class=\"chat\" *ngFor=\"let chat of ChatsArray\">\n        <div class=\"chat-image-container\">\n            <img [src]=\"chat.img\">\n        </div>\n        <h5>{{chat.username}}</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"secc messages\">\n    <app-chat-room [idChat]=\"idActualChat\" ></app-chat-room>\n  </div>\n  <div class=\"secc data\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/chat/chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/private/chat/chat.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");





var ChatComponent = /** @class */ (function () {
    function ChatComponent(api, Arout) {
        var _this = this;
        this.api = api;
        this.Arout = Arout;
        this.ChatsArray = [];
        this.openChats = [];
        this.Arout.params.subscribe(function (res) {
            _this.idActualChat = res["id"];
        });
        this.ActualUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["userModel"]();
        this.getAllChats();
        this.getUser();
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent.prototype.getAllChats = function () {
        var _this = this;
        this.idActualUser = localStorage.getItem("_id");
        this.api
            .getElemets("http://localhost:3000/api/chatrooms")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var a = res_1[_i];
                for (var _a = 0, _b = a["id_users"]; _a < _b.length; _a++) {
                    var b = _b[_a];
                    if (b == _this.idActualUser) {
                        _this.openChats.push(a);
                    }
                }
            }
            var _loop_1 = function (a) {
                for (var _i = 0, _a = a["id_users"]; _i < _a.length; _i++) {
                    var b = _a[_i];
                    if (b != _this.idActualUser) {
                        _this.api.getElement(b, "http://localhost:3000/api/users")
                            .subscribe(function (res) {
                            _this.chatForm = new chatData();
                            _this.chatForm.username = res['Usuario'].uname;
                            _this.chatForm.idChatRoom = a['_id'];
                            _this.chatForm.idUser = res['Usuario']._id;
                            _this.chatForm.img = res['Usuario'].img;
                            _this.ChatsArray.push(_this.chatForm);
                        });
                    }
                }
            };
            for (var _c = 0, _d = _this.openChats; _c < _d.length; _c++) {
                var a = _d[_c];
                _loop_1(a);
            }
        });
    };
    ChatComponent.prototype.getUser = function () {
        var _this = this;
        this.api.getElement(this.idActualUser, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.ActualUser._id = res['Usuario']._id;
            _this.ActualUser.uname = res['Usuario'].uname;
            _this.ActualUser.img = res['Usuario'].img;
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-chat",
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/private/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/private/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["APIServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChatComponent);
    return ChatComponent;
}());

var chatData = /** @class */ (function () {
    function chatData() {
    }
    return chatData;
}());


/***/ }),

/***/ "./src/app/components/private/profile/profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/private/profile/profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.contenedor{\r\n    padding: 2rem; \r\n    padding-top: 7rem; \r\n    position: relative;\r\n}\r\n\r\n.data-profile{\r\n    background-color: whitesmoke; \r\n    width: 100%;\r\n    padding: 2rem; \r\n    display: grid; \r\n    grid-template-columns: auto 50%; \r\n    grid-template-rows: 250px auto; \r\n    -webkit-column-gap: 2rem; \r\n       -moz-column-gap: 2rem; \r\n            column-gap: 2rem; \r\n    margin-bottom: 1rem; \r\n}\r\n\r\n.more{\r\n    grid-column-start: 1; \r\n    grid-column-end: 3; \r\n    display: grid; \r\n    grid-template-columns: 50% 50%;\r\n    width: 80%;\r\n    margin: 0 auto; \r\n    margin-top: 1rem; \r\n    border-top: 1px rgba(128, 128, 128, 0.596) solid; \r\n    align-items: center; \r\n    justify-items: center; \r\n}\r\n\r\n.more p{\r\n    margin: 0; \r\n    font-size: 1.5rem; \r\n}\r\n\r\n.more p span{\r\n    color: crimson; \r\n    font-weight: 600; \r\n}\r\n\r\n.imagen-container{\r\n    background-color: black; \r\n    width: 250px;\r\n    height: 250px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 50% 50%; \r\n    border: 5px solid white; \r\n    align-self: center; \r\n    justify-self: center; \r\n    cursor: pointer;\r\n}\r\n\r\n.imagen-container img{\r\n    position: absolute;\r\n    background-color: black; \r\n    height: 100%;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n}\r\n\r\n.text-profile{\r\n    align-self: center; \r\n}\r\n\r\n.text-profile h3{\r\n    font-size: 2.5rem;  \r\n}\r\n\r\n.text-profile p{\r\n    font-size: 2rem;  \r\n    text-transform: capitalize;\r\n}\r\n\r\n.text-profile button{\r\n    font-size: 1.2rem;\r\n    background-color: whitesmoke; \r\n    color: crimson; \r\n    border: 1px crimson solid; \r\n    border-radius: 0.2rem 0.2rem; \r\n    padding: 0.5rem 1rem;   \r\n    transition: .3s; \r\n}\r\n\r\n.text-profile button:hover{\r\n    color: whitesmoke; \r\n    background-color: crimson; \r\n    transition: .3s; \r\n}\r\n\r\n.cambiarImagen{\r\n    background-color: rgb(112, 112, 112); \r\n    width: 20%;\r\n    height: 110px;\r\n    position: absolute; \r\n    top: 20%; \r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    padding: 1rem; \r\n    display: flex; \r\n    flex-direction: column; \r\n}\r\n\r\n.cambiarImagen input{\r\n    padding: 0.5rem; \r\n    border: 1px crimson solid; \r\n    margin-bottom: 0.5rem; \r\n}\r\n\r\n.cambiarImagen .buttons button{\r\n    width: 50%;\r\n    border: 1px crimson solid; \r\n    background-color: whitesmoke;\r\n    border-radius: 0.2rem 0.2rem; \r\n    color: crimson; \r\n    padding: 0.3rem; \r\n}\r\n\r\n.cambiarImagen .buttons button:hover{\r\n    background-color: crimson; \r\n    border-radius: 0.2rem 0.2rem; \r\n    color: whitesmoke; \r\n}\r\n\r\n.publicaciones{\r\n}\r\n\r\n.new-public-c{\r\n    background-color: aqua; \r\n    width: 80%;\r\n    margin: 0 auto; \r\n}\r\n\r\n.new-public-c button{\r\n    width: 100%;\r\n    padding: 0.5rem; \r\n    background-color: whitesmoke; \r\n    border: 0; \r\n}\r\n\r\n.publicaciones-container{\r\n    width: 50%;\r\n    margin: 0 auto; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaXZhdGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbmVkb3J7XHJcbiAgICBwYWRkaW5nOiAycmVtOyBcclxuICAgIHBhZGRpbmctdG9wOiA3cmVtOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRhdGEtcHJvZmlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtOyBcclxuICAgIGRpc3BsYXk6IGdyaWQ7IFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDUwJTsgXHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MHB4IGF1dG87IFxyXG4gICAgY29sdW1uLWdhcDogMnJlbTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxufVxyXG5cclxuLm1vcmV7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7IFxyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgXHJcbiAgICBib3JkZXItdG9wOiAxcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU5Nikgc29saWQ7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IFxyXG59XHJcblxyXG4ubW9yZSBwe1xyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcclxufVxyXG5cclxuLm1vcmUgcCBzcGFue1xyXG4gICAgY29sb3I6IGNyaW1zb247IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbn1cclxuXHJcbi5pbWFnZW4tY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlOyBcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlOyBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZW4tY29udGFpbmVyIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxyXG59XHJcblxyXG4udGV4dC1wcm9maWxle1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyBcclxufVxyXG5cclxuLnRleHQtcHJvZmlsZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtOyAgXHJcbn1cclxuXHJcbi50ZXh0LXByb2ZpbGUgcHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi50ZXh0LXByb2ZpbGUgYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyBcclxuICAgIGNvbG9yOiBjcmltc29uOyBcclxuICAgIGJvcmRlcjogMXB4IGNyaW1zb24gc29saWQ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTsgXHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgICBcclxuICAgIHRyYW5zaXRpb246IC4zczsgXHJcbn1cclxuXHJcbi50ZXh0LXByb2ZpbGUgYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjsgXHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7IFxyXG59XHJcblxyXG4uY2FtYmlhckltYWdlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTsgXHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDIwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBhZGRpbmc6IDFyZW07IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxufVxyXG5cclxuLmNhbWJpYXJJbWFnZW4gaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07IFxyXG4gICAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IFxyXG59XHJcblxyXG4uY2FtYmlhckltYWdlbiAuYnV0dG9ucyBidXR0b257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtIDAuMnJlbTsgXHJcbiAgICBjb2xvcjogY3JpbXNvbjsgXHJcbiAgICBwYWRkaW5nOiAwLjNyZW07IFxyXG59XHJcblxyXG4uY2FtYmlhckltYWdlbiAuYnV0dG9ucyBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbSAwLjJyZW07IFxyXG4gICAgY29sb3I6IHdoaXRlc21va2U7IFxyXG59XHJcblxyXG4ucHVibGljYWNpb25lc3tcclxufVxyXG5cclxuLm5ldy1wdWJsaWMtY3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7IFxyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxufVxyXG5cclxuLm5ldy1wdWJsaWMtYyBidXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyBcclxuICAgIGJvcmRlcjogMDsgXHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbmVzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/private/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/private/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nueva-publicacion></app-nueva-publicacion>\n<div class=\"contenedor\">\n  <div class=\"data-profile\">\n    <div (click)=\"open()\" class=\"imagen-container\">\n      <img [src]=\"Usuario.img\" />\n    </div>\n    <div class=\"text-profile\">\n      <form>\n        <h3 id=\"uname\" [contentEditable]=\"editable\">{{Usuario.uname}}</h3>\n        <p id=\"level\">{{Usuario.level}}</p>\n        <button (click)=\"saveChanges()\" *ngIf=\"editable\">\n          Guardar cambios\n        </button>\n        <button (click)=\"addFriend()\" *ngIf=\"!editable && !amigos\">\n          Seguir\n        </button>\n        <button (click)=\"removeFriend()\" style=\"margin-right: 0.5rem\" *ngIf=\"!editable && amigos\">\n          Dejar de Seguir\n        </button>\n        <button (click)=\"sendMessage()\" *ngIf=\"!editable && amigos\">\n          Enviar mensaje\n        </button>\n      </form>\n    </div>\n    <div class=\"more\">\n      <p>Publicaciones <span>{{publicaciones.length}}</span></p>\n      <p>Seguidores <span>{{Usuario.followList.length}}</span></p>\n    </div>\n  </div>\n  <div class=\"publicaciones\">\n    <div class=\"new-public-c\">\n      <button *ngIf=\"editable\" ><i class=\"fas fa-plus\"></i> Añadir publicación</button>\n    </div>\n    <hr>\n    <div class=\"publicaciones-container\">\n        <app-publicacion [id]=\"publication._id\" *ngFor=\"let publication of publicaciones | paginate: { itemsPerPage: 10, currentPage: p}\"></app-publicacion>\n    </div>\n  </div>\n  <div class=\"cambiarImagen\" *ngIf=\"!imagen\" >\n    <input type=\"url\" placeholder=\"Introduce una url\" #url />\n    <div class=\"buttons\">\n      <button (click)=\"cambiarImagen(url.value)\" type=\"button\">Aceptar</button>\n      <button (click)=\"close()\" id=\"cerrar\" type=\"button\">Cerrar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/private/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_chat_room_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/chat-room.model */ "./src/app/models/chat-room.model.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, api, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.router = router;
        this.editable = false;
        this.amigos = false;
        this.publicaciones = [];
        this.p = 1;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.id;
            _this.publicaciones = [];
            _this.getUser();
            _this.getPublications();
            _this.DoFollow();
        });
        this.Usuario = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["userModel"]();
        this.externalUser = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_3__["userModel"]();
        this.chatRoom = new _models_chat_room_model__WEBPACK_IMPORTED_MODULE_6__["chatRoomModel"]();
        this.imagen = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getPublications();
        this.DoFollow();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.api
            .getElement(this.userId, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.Usuario.Bdate = res["Usuario"].Bdate;
            _this.Usuario.email = res["Usuario"].email;
            _this.Usuario.lastname = res["Usuario"].lastname;
            _this.Usuario.name = res["Usuario"].name;
            _this.Usuario.open = res["Usuario"].open;
            _this.Usuario.password = res["Usuario"].password;
            _this.Usuario._id = res["Usuario"]._id;
            _this.Usuario.friendList = res["Usuario"].friendList;
            _this.Usuario.img = res["Usuario"].img;
            _this.Usuario.level = res["Usuario"].level;
            _this.Usuario.uname = res["Usuario"].uname;
            _this.Usuario.cdate = res["Usuario"].cdate;
            _this.Usuario.followList = res["Usuario"].followList;
            if (_this.Usuario._id === localStorage.getItem("_id")) {
                _this.editable = true;
            }
        });
    };
    ProfileComponent.prototype.close = function () {
        if (this.Usuario._id === localStorage.getItem("_id")) {
            this.imagen = true;
        }
        else {
            this.imagen = true;
        }
    };
    ProfileComponent.prototype.open = function () {
        this.getUser();
        if (this.Usuario._id === localStorage.getItem("_id")) {
            this.imagen = false;
        }
        else {
            this.imagen = true;
        }
    };
    ProfileComponent.prototype.cambiarImagen = function (url) {
        if (this.Usuario._id === localStorage.getItem("_id")) {
            this.Usuario.img = url;
            this.guardar();
        }
        else {
            $(".cambiarImagen").hide();
        }
    };
    ProfileComponent.prototype.saveChanges = function () {
        var _this = this;
        this.Usuario.uname = $("#uname").html();
        this.api
            .getElemets("http://localhost:3000/api/users")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var i = res_1[_i];
                if (i["uname"] === _this.Usuario.uname) {
                    if (i["_id"] !== _this.Usuario._id) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            allowOutsideClick: false,
                            type: "error",
                            text: "El nombre de usuario ya está en uso"
                        });
                        return;
                    }
                }
            }
        });
        this.guardar();
    };
    ProfileComponent.prototype.guardar = function () {
        this.api
            .modifyUser(this.Usuario, "http://localhost:3000/api/users")
            .subscribe(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                allowOutsideClick: false,
                type: "success",
                text: "Cambios realizados con éxito"
            });
        });
    };
    ProfileComponent.prototype.getPublications = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/publications")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var i = res_2[_i];
                if (i["id_user"] === _this.userId) {
                    if (i["game_room_id"] === " ") {
                        _this.publicaciones.unshift(i);
                    }
                }
            }
        });
    };
    ProfileComponent.prototype.addFriend = function () {
        var _this = this;
        this.actualUser = localStorage.getItem("_id");
        this.api
            .getElement(this.actualUser, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.externalUser.Bdate = res["Usuario"].Bdate;
            _this.externalUser._id = res["Usuario"]._id;
            _this.externalUser.email = res["Usuario"].email;
            _this.externalUser.friendList = res["Usuario"].friendList;
            _this.externalUser.img = res["Usuario"].img;
            _this.externalUser.lastname = res["Usuario"].lastname;
            _this.externalUser.level = res["Usuario"].level;
            _this.externalUser.name = res["Usuario"].name;
            _this.externalUser.open = res["Usuario"].open;
            _this.externalUser.password = res["Usuario"].password;
            _this.externalUser.uname = res["Usuario"].uname;
            _this.externalUser.cdate = res["Usuario"].cdate;
            _this.externalUser.followList = res["Usuario"].followList;
            /*  */
            _this.getUser();
            _this.externalUser.friendList.push(_this.userId);
            _this.api
                .modifyUser(_this.externalUser, "http://localhost:3000/api/users")
                .subscribe(function () {
                /* AÑADIR A LA LISTA DEL FOLLOW DEL DUEÑO DEL PERFIL */
                _this.Usuario.followList.push(_this.externalUser._id);
                _this.api
                    .modifyUser(_this.Usuario, "http://localhost:3000/api/users")
                    .subscribe(function () {
                    _this.DoFollow();
                });
                /*  */
            });
        });
    };
    ProfileComponent.prototype.removeFriend = function () {
        var _this = this;
        this.actualUser = localStorage.getItem("_id");
        this.api
            .getElement(this.actualUser, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.externalUser.Bdate = res["Usuario"].Bdate;
            _this.externalUser._id = res["Usuario"]._id;
            _this.externalUser.email = res["Usuario"].email;
            _this.externalUser.friendList = res["Usuario"].friendList;
            _this.externalUser.img = res["Usuario"].img;
            _this.externalUser.lastname = res["Usuario"].lastname;
            _this.externalUser.level = res["Usuario"].level;
            _this.externalUser.name = res["Usuario"].name;
            _this.externalUser.open = res["Usuario"].open;
            _this.externalUser.password = res["Usuario"].password;
            _this.externalUser.uname = res["Usuario"].uname;
            _this.externalUser.cdate = res["Usuario"].cdate;
            _this.externalUser.followList = res["Usuario"].followList;
            /*  */
            _this.getUser();
            for (var i = 0; i < _this.externalUser.friendList.length; i++) {
                if (_this.externalUser.friendList[i] === _this.userId) {
                    _this.externalUser.friendList.splice(i, 1);
                }
            }
            _this.api
                .modifyUser(_this.externalUser, "http://localhost:3000/api/users")
                .subscribe(function () {
                /* REMOVER DE LA LISTA DEL FOLLOW DEL DUEÑO DEL PERFIL */
                for (var i = 0; i < _this.Usuario.followList.length; i++) {
                    if (_this.Usuario.followList[i] === _this.externalUser._id) {
                        _this.Usuario.followList.splice(i, 1);
                    }
                }
                _this.api
                    .modifyUser(_this.Usuario, "http://localhost:3000/api/users")
                    .subscribe(function () {
                    _this.DoFollow();
                });
                /*  */
            });
        });
    };
    ProfileComponent.prototype.DoFollow = function () {
        var _this = this;
        this.actualUser = localStorage.getItem("_id");
        this.api
            .getElement(this.actualUser, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.externalUser.Bdate = res["Usuario"].Bdate;
            _this.externalUser._id = res["Usuario"]._id;
            _this.externalUser.email = res["Usuario"].email;
            _this.externalUser.friendList = res["Usuario"].friendList;
            _this.externalUser.img = res["Usuario"].img;
            _this.externalUser.lastname = res["Usuario"].lastname;
            _this.externalUser.level = res["Usuario"].level;
            _this.externalUser.name = res["Usuario"].name;
            _this.externalUser.open = res["Usuario"].open;
            _this.externalUser.password = res["Usuario"].password;
            _this.externalUser.uname = res["Usuario"].uname;
            _this.externalUser.cdate = res["Usuario"].cdate;
            _this.externalUser.followList = res["Usuario"].followList;
            /*  */
            _this.amigos = false;
            for (var _i = 0, _a = _this.externalUser.friendList; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a === _this.userId) {
                    _this.amigos = true;
                }
            }
        });
    };
    ProfileComponent.prototype.sendMessage = function () {
        var _this = this;
        this.chatRoom.id_users.push(this.externalUser._id);
        this.chatRoom.id_users.push(this.Usuario._id);
        this.api
            .getElemets("http://localhost:3000/api/chatrooms")
            .subscribe(function (res) {
            var contador = 0;
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var a = res_3[_i];
                contador = 0;
                for (var _a = 0, _b = a["id_users"]; _a < _b.length; _a++) {
                    var b = _b[_a];
                    if (_this.chatRoom.id_users.indexOf(b) !== -1) {
                        contador += 1;
                        if (contador > 1) {
                            _this.chatRoom._id = a["_id"];
                        }
                    }
                }
            }
            if (_this.chatRoom._id === undefined) {
                _this.api
                    .createChatRoom(_this.chatRoom, "http://localhost:3000/api/chatrooms")
                    .subscribe(function (res) {
                    console.log(res);
                    _this.sendMessage();
                });
            }
            else {
                _this.router.navigate(["chat", _this.chatRoom._id]);
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/private/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/private/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["APIServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/private/search/search.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/private/search/search.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor{\r\n    padding: 3rem; \r\n    padding-bottom: 2rem; \r\n    padding-top: 7rem;\r\n    width: 100%; \r\n    min-height: 80vh;\r\n}\r\n\r\n.grid-resultados{\r\n    grid-template-columns: auto auto auto auto auto; \r\n    grid-gap: 1rem;  \r\n    display: grid;\r\n}\r\n\r\n.sub-grid{\r\n    background-color: whitesmoke;\r\n    padding: 1rem; \r\n}\r\n\r\n.img-container{\r\n    height: 250px; \r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.img-container img{\r\n    width: 100%;\r\n    position: absolute; \r\n    top: 50%; \r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%); \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9ye1xyXG4gICAgcGFkZGluZzogM3JlbTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTsgXHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5ncmlkLXJlc3VsdGFkb3N7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bzsgXHJcbiAgICBncmlkLWdhcDogMXJlbTsgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLnN1Yi1ncmlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDFyZW07IFxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMjUwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/private/search/search.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/private/search/search.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor\">\n  <h1>Has buscado</h1>\n  <div class=\"grid-resultados\">\n    <div *ngFor=\"let coincidence of coincidences\" class=\"sub-grid\">\n      <div class=\"img-container\">\n        <img [src]=\"coincidence.img\" />\n      </div>\n      <div class=\"text\">\n        <h3>\n          <span *ngIf=\"coincidence.npc == true || coincidence.npc == false \" routerLink=\"/personaje/{{coincidence._id}}\">\n            {{ coincidence.name }} <small>(Personaje)</small></span\n          >\n          <span *ngIf=\"coincidence.uname\" routerLink=\"/profile/{{coincidence._id}}\">\n            {{ coincidence.uname }} <small>(Usuario)</small></span\n          >\n          <span *ngIf=\"coincidence.title\" routerLink=\"/partida/{{coincidence._id}}\">\n            {{ coincidence.title }} <small>(Partida)</small></span\n          >\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/private/search/search.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/private/search/search.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute, api) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.coincidences = [];
        this.activatedRoute.params.subscribe(function (res) {
            _this.keyWord = res.term;
            _this.coincidences = [];
            _this.getAllResults();
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getAllResults = function () {
        var _this = this;
        this.api
            .getElemets("http://localhost:3000/api/characters")
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var i = res_1[_i];
                if (i["identifier"]
                    .substring(2)
                    .toUpperCase()
                    .indexOf(_this.keyWord.toUpperCase()) !== -1 ||
                    i["name"]
                        .toUpperCase()
                        .indexOf(_this.keyWord.toUpperCase()) !== -1) {
                    _this.coincidences.push(i);
                }
            }
        });
        this.api
            .getElemets("http://localhost:3000/api/users")
            .subscribe(function (res) {
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var i = res_2[_i];
                if (i["uname"].toUpperCase().indexOf(_this.keyWord.toUpperCase()) !== -1) {
                    _this.coincidences.push(i);
                }
            }
        });
        this.api
            .getElemets("http://localhost:3000/api/games")
            .subscribe(function (res) {
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var i = res_3[_i];
                if (i["title"].toUpperCase().indexOf(_this.keyWord.toUpperCase()) !== -1) {
                    _this.coincidences.push(i);
                }
            }
        });
        this.coincidences.sort();
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/private/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/private/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/private/timeline/timeline.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/private/timeline/timeline.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap\");\r\n/* GENERAL */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n}\r\nbody {\r\n    position: relative;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1em;\r\n    background-color: whitesmoke;\r\n}\r\n.badge-pos {\r\n    position: absolute;\r\n    right: 0.3rem;\r\n    top: 0rem;\r\n    height: 20px;\r\n    min-width: 5px;\r\n    text-indent: -999px;\r\n}\r\n.color-active {\r\n    background-color: crimson !important;\r\n    color: rgb(255, 255, 255);\r\n}\r\n/* CONTENEDOR COMPONENT */\r\n.contenedor {\r\n    margin: 6rem auto;\r\n    display: grid;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto auto;\r\n}\r\n.column-a {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n}\r\n.lt-profile {\r\n    display: grid;\r\n    align-items: center;\r\n    grid-template-columns: 29% 25% 46%;\r\n    grid-template-rows: auto auto auto auto;\r\n    margin: 1rem 0rem;\r\n    padding-top: 1rem;\r\n    background-color: white;\r\n}\r\n.img-c {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    border: 4px white solid;\r\n    background-position: center;\r\n    background-size: 100%;\r\n    align-self: center;\r\n    justify-self: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.img-c img{\r\n    height: 100%;\r\n    position: absolute; \r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.lt-profile .data-profile {\r\n    grid-column-start: 2;\r\n    grid-column-end: 4;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    font-size: 12px;\r\n    padding-left: 0.5rem;\r\n}\r\n.lt-profile .data-profile p {\r\n    margin: 0;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    line-clamp: 1;\r\n    white-space: nowrap;\r\n    width: calc(100% - 1rem);\r\n}\r\n.lt-profile .publics {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n    grid-row-start: 2;\r\n    grid-row-end: 2;\r\n    margin-top: 1rem;\r\n    padding: 0rem 1rem;\r\n    cursor: pointer;\r\n}\r\n.publics p:nth-child(1) {\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n.publics p:nth-child(1):hover {\r\n    color: crimson;\r\n}\r\n.publics p:nth-child(2) {\r\n    font-size: 20px;\r\n    margin: 0;\r\n    color: crimson;\r\n}\r\n.lt-profile .friends {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n    grid-row-start: 2;\r\n    grid-row-end: 2;\r\n    margin-top: 1rem;\r\n    cursor: pointer;\r\n}\r\n.friends p:nth-child(1) {\r\n    font-size: 14px;\r\n    margin: 0;\r\n}\r\n.friends p:nth-child(1):hover {\r\n    font-size: 14px;\r\n    margin: 0;\r\n    color: crimson;\r\n}\r\n.friends p:nth-child(2) {\r\n    font-size: 20px;\r\n    margin: 0;\r\n    color: crimson;\r\n}\r\n.lt-profile .cuentas {\r\n    grid-column-start: 1;\r\n    grid-column-end: 4;\r\n    grid-row-start: 3;\r\n    grid-row-end: 3;\r\n    margin-top: 0.5rem;\r\n    padding: 0 0.5rem;\r\n}\r\n.cuentas h4 {\r\n    font-size: 17px;\r\n    margin: 0.5rem 0;\r\n}\r\n.cuentas p {\r\n    font-size: 15px;\r\n    margin: 0.1rem 0.5rem;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    line-clamp: 1;\r\n    white-space: nowrap;\r\n    width: calc(100% - 1rem);\r\n}\r\n.cuentas p:hover {\r\n    color: crimson;\r\n    cursor: pointer;\r\n}\r\n.lt-profile .change {\r\n    grid-column-start: 1;\r\n    grid-column-end: 4;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    text-align: center;\r\n    background-color: #04091e;\r\n    color: white;\r\n    margin-top: 1rem;\r\n    cursor: pointer;\r\n}\r\n.game-tendencies {\r\n    display: none;\r\n}\r\n.book-tendencies {\r\n    display: none;\r\n}\r\n/* COLUMNA B */\r\n.column-b {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 2;\r\n    grid-row-end: 2;\r\n}\r\n.new-public-c {\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.new-public-c button {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border: 0;\r\n    background-color: white;\r\n}\r\n.feed-c {\r\n    background-color: white;\r\n    width: 100%;\r\n    padding-top: 1rem;\r\n    text-align: center;\r\n}\r\n/* -------------------COLUMNA C----------------- */\r\n.column-c {\r\n    display: none;\r\n}\r\n/* CONTENEDOR COMPONENT */\r\n/* PUBLICACIONES */\r\n/* PUBLICACIONES */\r\n.publicacion {\r\n    padding: 0 1rem;\r\n    margin: 1rem 0rem;\r\n}\r\n.publicacion-grid {\r\n    display: grid;\r\n    grid-template-columns: auto 100px 100px 100px auto 100px;\r\n    grid-template-rows: auto auto auto auto;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    align-items: center;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem;\r\n    row-gap: 1rem;\r\n}\r\n.publicacion-grid .usu {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n}\r\n.nombre-u {\r\n    grid-column-start: 2;\r\n    grid-column-end: 4;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    margin: 0;\r\n}\r\n.iden-u {\r\n    grid-column-start: 5;\r\n    grid-column-end: 6;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    margin: 0;\r\n}\r\n.content-p {\r\n    grid-column-start: 1;\r\n    grid-column-end: 7;\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n    text-align: justify;\r\n}\r\n.content-p img {\r\n    max-width: 100%;\r\n}\r\n.content-p iframe {\r\n    max-width: 100%;\r\n}\r\n.comentar {\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    width: 95%;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.like {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    width: 95%;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.compartir {\r\n    grid-column-start: 4;\r\n    grid-column-end: 4;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    width: 95%;\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n.date {\r\n    grid-column-start: 6;\r\n    grid-column-end: 6;\r\n    grid-row-start: 4;\r\n    grid-row-end: 4;\r\n    margin: 0;\r\n}\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n    .badge-pos {\r\n        position: absolute;\r\n        right: 0.5rem;\r\n        bottom: 1rem;\r\n        height: 35px;\r\n        min-width: 35px;\r\n        font-size: 15px;\r\n        padding-top: 0.7rem;\r\n        padding-right: 0.6rem;\r\n        top: initial;\r\n        text-indent: initial;\r\n    }\r\n    /* CONTENEDOR COMPONENT */\r\n    .contenedor {\r\n        margin: 6rem auto;\r\n        min-height: 100vh;\r\n        display: grid;\r\n        -webkit-column-gap: 0.5rem;\r\n           -moz-column-gap: 0.5rem;\r\n                column-gap: 0.5rem;\r\n        grid-template-columns: 32% auto;\r\n        grid-template-rows: auto auto;\r\n        padding: 0rem 1rem;\r\n    }\r\n    .game-tendencies {\r\n        display: block;\r\n        margin: 1rem 0;\r\n        padding: 0.5rem;\r\n        background-color: white;\r\n    }\r\n    .game-tendencies h4 {\r\n        font-size: 20px;\r\n    }\r\n    .partida-t {\r\n        display: grid;\r\n        grid-template-columns: 71% 29%;\r\n        border-bottom: 1px #04091e2a solid;\r\n    }\r\n    .partida-t:hover {\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .partida-t p {\r\n        margin: 0;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n        line-clamp: 1;\r\n        white-space: nowrap;\r\n        width: calc(100%);\r\n    }\r\n    .partida-t p:nth-child(odd) {\r\n        width: calc(90%);\r\n    }\r\n    .book-tendencies {\r\n        display: block;\r\n        margin: 1rem 0;\r\n        padding: 0.5rem;\r\n        background-color: white;\r\n    }\r\n    .book-tendencies h4 {\r\n        font-size: 20px;\r\n    }\r\n    .libro-t {\r\n        display: grid;\r\n        grid-template-columns: 75% 25%;\r\n        grid-template-rows: auto auto;\r\n        border-bottom: 1px #04091e2a solid;\r\n    }\r\n    .libro-t:hover {\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .libro-t p:nth-child(1) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n        margin: 0;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n        line-clamp: 1;\r\n        white-space: nowrap;\r\n        width: calc(100% - 1rem);\r\n    }\r\n    .libro-t p:nth-child(2) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 2;\r\n        grid-row-end: 2;\r\n        margin: 0;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n        line-clamp: 1;\r\n        white-space: nowrap;\r\n        width: calc(100% - 1rem);\r\n    }\r\n    .libro-t p:nth-child(3) {\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n        grid-row-start: 1;\r\n        grid-row-end: 3;\r\n        margin: 0;\r\n        font-size: 20px;\r\n        align-self: center;\r\n    }\r\n    .libro-t p i {\r\n        color: #ffd700;\r\n    }\r\n    /* COLUMNA B */\r\n    .column-b {\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .new-public-c {\r\n        margin-top: 1rem;\r\n        margin-bottom: 0.5rem;\r\n    }\r\n    /* -------------------COLUMNA C----------------- */\r\n    .column-c {\r\n        display: initial;\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 2;\r\n        grid-row-end: 2;\r\n    }\r\n    .recommended-f {\r\n        margin: 0rem 0rem;\r\n        background-color: white;\r\n        padding: 0.5rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .recommended-f h4 {\r\n        font-size: 20px;\r\n    }\r\n    .recomend-f {\r\n        display: grid;\r\n        grid-template-columns: 40% 60%;\r\n        border-bottom: 1px #04091e2a solid;\r\n    }\r\n    .recomend-f:hover {\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .recomend-f img {\r\n        height: 60px;\r\n        width: 60px;\r\n        border-radius: 50%;\r\n        border: 4px white solid;\r\n        justify-self: center;\r\n    }\r\n    .data-r-f {\r\n        align-self: center;\r\n    }\r\n    .data-r-f p:nth-child(1) {\r\n        margin: 0;\r\n        font-size: 15px;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n        line-clamp: 1;\r\n        white-space: nowrap;\r\n        width: calc(100% - 1rem);\r\n    }\r\n    .data-r-f p:nth-child(2) {\r\n        margin: 0;\r\n        font-size: 11.5px;\r\n    }\r\n    .footer {\r\n        margin: 1rem 0;\r\n        padding: 0.5rem;\r\n        background-color: white;\r\n        font-size: 12px;\r\n    }\r\n    .footer p {\r\n        margin: 0;\r\n    }\r\n    .footer p a:hover {\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    /* CONTENEDOR COMPONENT */\r\n}\r\n@media (min-width: 900px) {\r\n    body {\r\n        overflow-y: scroll;\r\n        min-width: 1350px;\r\n        margin: 0 auto;\r\n    }\r\n    .badge-pos {\r\n        position: absolute;\r\n        right: 2.5rem;\r\n    }\r\n    /* CONTENEDOR COMPONENT */\r\n    .contenedor {\r\n        max-width: 1600px;\r\n        grid-template-columns: 25% auto 25%;\r\n        -webkit-column-gap: 2rem;\r\n           -moz-column-gap: 2rem;\r\n                column-gap: 2rem;\r\n        padding: 0rem 3rem;\r\n    }\r\n    .column-a {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n    }\r\n    /* COLUMNA B */\r\n    .column-b {\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n    }\r\n    .new-public-c {\r\n        margin-top: 1rem;\r\n        margin-bottom: 0.5rem;\r\n    }\r\n    .feed-c{\r\n        padding: 1rem; \r\n    }\r\n    /* -------COLUMNA C------- */\r\n    .column-c {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .recommended-f {\r\n        margin: 1rem 0rem;\r\n    }\r\n    /* CONTENEDOR COMPONENT */\r\n    /* PUBLICACIONES */\r\n    .publicacion-grid {\r\n        display: grid;\r\n        grid-template-columns: auto auto auto auto auto auto;\r\n        grid-template-rows: auto auto auto auto;\r\n        justify-content: center;\r\n        justify-items: center;\r\n        align-content: center;\r\n        align-items: center;\r\n    }\r\n    .publicacion-grid .usu {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 2;\r\n        height: 50px;\r\n        width: 50px;\r\n        border-radius: 50%;\r\n    }\r\n    .nombre-u {\r\n        grid-column-start: 2;\r\n        grid-column-end: 4;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n        margin: 0;\r\n    }\r\n    .iden-u {\r\n        grid-column-start: 5;\r\n        grid-column-end: 6;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n        margin: 0;\r\n    }\r\n    .content-p {\r\n        grid-column-start: 2;\r\n        grid-column-end: 7;\r\n        grid-row-start: 2;\r\n        grid-row-end: 3;\r\n        text-align: justify;\r\n    }\r\n    .content-p img {\r\n        max-width: 100%;\r\n    }\r\n    .content-p iframe {\r\n        max-width: 100%;\r\n    }\r\n    .comentar {\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n        grid-row-start: 4;\r\n        grid-row-end: 4;\r\n        width: 95%;\r\n        background-color: transparent;\r\n        border: 0;\r\n    }\r\n    .like {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 4;\r\n        grid-row-end: 4;\r\n        width: 95%;\r\n        background-color: transparent;\r\n        border: 0;\r\n    }\r\n    .compartir {\r\n        grid-column-start: 4;\r\n        grid-column-end: 4;\r\n        grid-row-start: 4;\r\n        grid-row-end: 4;\r\n        width: 95%;\r\n        background-color: transparent;\r\n        border: 0;\r\n    }\r\n    .date {\r\n        grid-column-start: 6;\r\n        grid-column-end: 6;\r\n        grid-row-start: 4;\r\n        grid-row-end: 4;\r\n        margin: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsc0ZBQXNGO0FBQ3RGLGdHQUFnRztBQUVoRyxZQUFZO0FBRVo7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsVUFBVTtBQUNkO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCO0FBRUEseUJBQXlCO0FBRXpCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwwQkFBa0I7T0FBbEIsdUJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7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QWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixTQUFTO0lBQ2I7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixTQUFTO0lBQ2I7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixVQUFVO1FBQ1YsNkJBQTZCO1FBQzdCLFNBQVM7SUFDYjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLFVBQVU7UUFDViw2QkFBNkI7UUFDN0IsU0FBUztJQUNiO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsVUFBVTtRQUNWLDZCQUE2QjtRQUM3QixTQUFTO0lBQ2I7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixTQUFTO0lBQ2I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmF0ZS90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SnVsaXVzK1NhbnMrT25lXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDozMDAsNDAwLDUwMCw3MDBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkrU0M6NDAwLDcwMCw5MDBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQrU3VicmF5YWRhOjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuLyogR0VORVJBTCAqL1xyXG5cclxuKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmJhZGdlLXBvcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMC4zcmVtO1xyXG4gICAgdG9wOiAwcmVtO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiA1cHg7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OXB4O1xyXG59XHJcblxyXG4uY29sb3ItYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb24gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi8qIENPTlRFTkVET1IgQ09NUE9ORU5UICovXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW46IDZyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxufVxyXG5cclxuLmNvbHVtbi1hIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbn1cclxuXHJcbi5sdC1wcm9maWxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOSUgMjUlIDQ2JTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmltZy1jIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNHB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1nLWMgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5sdC1wcm9maWxlIC5kYXRhLXByb2ZpbGUge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4ubHQtcHJvZmlsZSAuZGF0YS1wcm9maWxlIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1jbGFtcDogMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XHJcbn1cclxuXHJcbi5sdC1wcm9maWxlIC5wdWJsaWNzIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHVibGljcyBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wdWJsaWNzIHA6bnRoLWNoaWxkKDEpOmhvdmVyIHtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4ucHVibGljcyBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmx0LXByb2ZpbGUgLmZyaWVuZHMge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mcmllbmRzIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZyaWVuZHMgcDpudGgtY2hpbGQoMSk6aG92ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5mcmllbmRzIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4ubHQtcHJvZmlsZSAuY3VlbnRhcyB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbn1cclxuXHJcbi5jdWVudGFzIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5jdWVudGFzIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwLjFyZW0gMC41cmVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbGluZS1jbGFtcDogMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XHJcbn1cclxuXHJcbi5jdWVudGFzIHA6aG92ZXIge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sdC1wcm9maWxlIC5jaGFuZ2Uge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNDtcclxuICAgIGdyaWQtcm93LWVuZDogNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA5MWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZ2FtZS10ZW5kZW5jaWVzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib29rLXRlbmRlbmNpZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIENPTFVNTkEgQiAqL1xyXG5cclxuLmNvbHVtbi1iIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbn1cclxuXHJcbi5uZXctcHVibGljLWMge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLm5ldy1wdWJsaWMtYyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZlZWQtYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tQ09MVU1OQSBDLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5jb2x1bW4tYyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyogQ09OVEVORURPUiBDT01QT05FTlQgKi9cclxuXHJcblxyXG4vKiBQVUJMSUNBQ0lPTkVTICovXHJcblxyXG5cclxuLyogUFVCTElDQUNJT05FUyAqL1xyXG5cclxuLnB1YmxpY2FjaW9uIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEwMHB4IDEwMHB4IDEwMHB4IGF1dG8gMTAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICByb3ctZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHVibGljYWNpb24tZ3JpZCAudXN1IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5vbWJyZS11IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pZGVuLXUge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQtcCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogNztcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmNvbnRlbnQtcCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudC1wIGlmcmFtZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb21lbnRhciB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ubGlrZSB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uY29tcGFydGlyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKiBNRU5PUiBRVUUgODAwUFggKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmJhZGdlLXBvcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC42cmVtO1xyXG4gICAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgICB0ZXh0LWluZGVudDogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIC8qIENPTlRFTkVET1IgQ09NUE9ORU5UICovXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgbWFyZ2luOiA2cmVtIGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMiUgYXV0bztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICB9XHJcbiAgICAuZ2FtZS10ZW5kZW5jaWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuZ2FtZS10ZW5kZW5jaWVzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucGFydGlkYS10IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzElIDI5JTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzA0MDkxZTJhIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLnBhcnRpZGEtdDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGNyaW1zb247XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnBhcnRpZGEtdCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBsaW5lLWNsYW1wOiAxO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAucGFydGlkYS10IHA6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDkwJSk7XHJcbiAgICB9XHJcbiAgICAuYm9vay10ZW5kZW5jaWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYm9vay10ZW5kZW5jaWVzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGlicm8tdCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAyNSU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4ICMwNDA5MWUyYSBzb2xpZDtcclxuICAgIH1cclxuICAgIC5saWJyby10OmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGlicm8tdCBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBsaW5lLWNsYW1wOiAxO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xyXG4gICAgfVxyXG4gICAgLmxpYnJvLXQgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbGluZS1jbGFtcDogMTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcclxuICAgIH1cclxuICAgIC5saWJyby10IHA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxpYnJvLXQgcCBpIHtcclxuICAgICAgICBjb2xvcjogI2ZmZDcwMDtcclxuICAgIH1cclxuICAgIC8qIENPTFVNTkEgQiAqL1xyXG4gICAgLmNvbHVtbi1iIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLm5ldy1wdWJsaWMtYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tQ09MVU1OQSBDLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIC5jb2x1bW4tYyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gICAgfVxyXG4gICAgLnJlY29tbWVuZGVkLWYge1xyXG4gICAgICAgIG1hcmdpbjogMHJlbSAwcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnJlY29tbWVuZGVkLWYgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5yZWNvbWVuZC1mIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzA0MDkxZTJhIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLnJlY29tZW5kLWY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5yZWNvbWVuZC1mIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDRweCB3aGl0ZSBzb2xpZDtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kYXRhLXItZiB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRhdGEtci1mIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbGluZS1jbGFtcDogMTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcclxuICAgIH1cclxuICAgIC5kYXRhLXItZiBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5mb290ZXIgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciBwIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qIENPTlRFTkVET1IgQ09NUE9ORU5UICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTM1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXBvcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAvKiBDT05URU5FRE9SIENPTVBPTkVOVCAqL1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIGF1dG8gMjUlO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbi1hIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICB9XHJcbiAgICAvKiBDT0xVTU5BIEIgKi9cclxuICAgIC5jb2x1bW4tYiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgfVxyXG4gICAgLm5ldy1wdWJsaWMtYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICAuZmVlZC1je1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07IFxyXG4gICAgfVxyXG4gICAgLyogLS0tLS0tLUNPTFVNTkEgQy0tLS0tLS0gKi9cclxuICAgIC5jb2x1bW4tYyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIH1cclxuICAgIC5yZWNvbW1lbmRlZC1mIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICAgIH1cclxuICAgIC8qIENPTlRFTkVET1IgQ09NUE9ORU5UICovXHJcbiAgICAvKiBQVUJMSUNBQ0lPTkVTICovXHJcbiAgICAucHVibGljYWNpb24tZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucHVibGljYWNpb24tZ3JpZCAudXN1IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubm9tYnJlLXUge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmlkZW4tdSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1wIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDc7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC1wIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtcCBpZnJhbWUge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb21lbnRhciB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuICAgIC5saWtlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbXBhcnRpciB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiA0O1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuICAgIC5kYXRlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNjtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/private/timeline/timeline.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/private/timeline/timeline.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nueva-publicacion></app-nueva-publicacion>\n<!-- CONTENEDOR COMPONENT -->\n <div class=\"contenedor\">\n  <div class=\"column-a\">\n      <div class=\"lt-profile\">\n          <div routerLink=\"/profile/{{userId}}\" class=\"img-c\">\n            <img [src]=\"user.img\">\n          </div>\n          <div class=\"data-profile\">\n              <h5>{{ user.name }}</h5>\n          </div>\n          <div class=\"publics\">\n              <p>Publicaciones</p>\n              <p>{{ this.contador }}</p>\n          </div>\n          <div class=\"friends\">\n              <p>Siguiendo</p>\n              <p>{{ user.friendList.length }}</p>\n          </div>\n          <!-- <div class=\"cuentas\">\n              <hr>\n              <h4>Cambiar de cuenta</h4>\n              <p>Nombre_cuenta_muy_largo_xd_1_11:</p>\n              <p>Nombre_cuenta_2</p>\n          </div>\n          <div class=\"change\"><i class=\"fas fa-chevron-down\"></i></div> -->\n      </div>\n      <!-- <div class=\"game-tendencies\">\n          <h4>Partidas en tendencia</h4>\n          <div class=\"partida-t\">\n              <p>Nombre partida muy largo</p>\n              <p>Abierta</p>\n          </div>\n          <div class=\"partida-t\">\n              <p>Nombre partida</p>\n              <p>Cerrada</p>\n          </div>\n      </div> -->\n      <!-- <div class=\"book-tendencies\">\n          <h4>Libros en tendencia</h4>\n          <div class=\"libro-t\">\n              <p>Nombre libro muy largo</p>\n              <p>autor nombre muy largo</p>\n              <p>5 <i class=\"fas fa-star\"></i></p>\n          </div>\n          <div class=\"libro-t\">\n              <p>Nombre libro</p>\n              <p>autor</p>\n              <p>2 <i class=\"fas fa-star\"></i></p>\n          </div>\n      </div> -->\n  </div>\n  <div class=\"column-b\">\n      <div class=\"new-public-c\">\n          <button><i class=\"fas fa-plus\"></i> Añadir publicación</button>\n      </div>\n      <div class=\"feed-c\">\n          <span *ngIf=\"empty\">No hay publicaciones, sigue a otros usuarios para ver sus publicaciones</span>\n          <app-publicacion [id]=\"publication._id\" *ngFor=\"let publication of publicaciones | paginate: { itemsPerPage: 10, currentPage: p}\" class=\"publication\"></app-publicacion>\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n  </div>\n  <div class=\"column-c\">\n      <!-- <div class=\"recommended-f\">\n          <h4>Personajes recomendados</h4>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n      </div> -->\n      <!-- <div class=\"recommended-f\">\n          <h4>Usuarios recomendados</h4>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n          <div class=\"recomend-f\">\n              <img src=\"../../../../assets/IMG/man.png\">\n              <div class=\"data-r-f\">\n                  <p>Nombre personaje</p>\n                  <p>@identif</p>\n              </div>\n          </div>\n      </div> -->\n      <div class=\"footer\">\n          <p>© 2019 Re:Roll <br><a>Inicio </a> <a>Blog </a> <a>Contacto</a></p>\n      </div>\n  </div>\n</div>\n<!-- CONTENEDOR COMPONENT -->\n"

/***/ }),

/***/ "./src/app/components/private/timeline/timeline.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/private/timeline/timeline.component.ts ***!
  \*******************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");




var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(api) {
        this.api = api;
        this.publicaciones = [];
        this.contador = 0;
        this.p = 1;
        this.empty = false;
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["userModel"]();
        this.getUserId();
    }
    TimelineComponent.prototype.ngOnInit = function () { };
    TimelineComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    TimelineComponent.prototype.getUserId = function () {
        var _this = this;
        this.userId = localStorage.getItem("_id");
        this.getUserData();
        this.interval = setInterval(function () {
            _this.getUserData();
        }, 10000);
    };
    TimelineComponent.prototype.getUserData = function () {
        var _this = this;
        this.api
            .getElement(this.userId, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.user._id = res["Usuario"]._id;
            _this.user.name = res["Usuario"].uname;
            _this.user.img = res["Usuario"].img;
            _this.user.friendList = res["Usuario"].friendList;
            /*
             */
            _this.api
                .getElemets("http://localhost:3000/api/publications")
                .subscribe(function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var i = res_1[_i];
                    if (i["id_user"] == _this.userId) {
                        var not = false;
                        for (var _a = 0, _b = _this.publicaciones; _a < _b.length; _a++) {
                            var pub = _b[_a];
                            if (pub["_id"] === i["_id"]) {
                                not = true;
                            }
                        }
                        if (i["game_room_id"] !== " ") {
                            not = true;
                        }
                        if (not === false) {
                            _this.contador += 1;
                            _this.publicaciones.unshift(i);
                        }
                    }
                    else {
                        for (var _c = 0, _d = _this.user.friendList; _c < _d.length; _c++) {
                            var a = _d[_c];
                            if (i["id_user"] === a) {
                                var not = false;
                                for (var _e = 0, _f = _this.publicaciones; _e < _f.length; _e++) {
                                    var pub = _f[_e];
                                    if (pub["_id"] === i["_id"]) {
                                        not = true;
                                    }
                                }
                                if (i["game_room_id"] !== " ") {
                                    not = true;
                                }
                                if (not === false) {
                                    _this.publicaciones.unshift(i);
                                }
                            }
                        }
                    }
                }
                if (_this.publicaciones.length === 0) {
                    _this.empty = true;
                }
                else {
                    _this.empty = false;
                }
            });
        });
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-timeline",
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/components/private/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/components/private/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/components/public/blog/blog-category/blog-category.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-category/blog-category.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- JUMBO COMPONENT -->\n<div class=\"jumbotrom-c\">\n  <div class=\"navigation-g-c\">\n      <div class=\"navigation-h-c\">\n          <ol>\n              <li>\n                  <a [routerLink]=\"['/home']\">Home</a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/blog']\">Blog</a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/blog/categoriaActual']\">{{ categoriaActual }}</a>\n              </li>\n          </ol>\n      </div>\n      <h2 class=\"h2\">{{ categoriaActual }}</h2>\n  </div>\n</div>\n<!-- JUMBO COMPONENT -->\n<!-- SECTIONS -->\n<div class=\"sections-g-c\">\n  <!-- SEARCH -->\n  <div class=\"buscador-g-c\">\n      <div class=\"buscador\">\n        <input type=\"text\" (keyup.enter)=\"buscar(term.value)\" placeholder=\"¿Qué estas buscando?\" #term/>\n        <button (click)=\"buscar(term.value)\"><i class=\"fas fa-search\"></i></button>\n      </div>\n  </div>\n  <!-- CATEGORIES -->\n  <div class=\"categories-g-c\">\n      <div class=\"news-cat-c b-s-c\" (click)=\"categoria('news')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Novedades</h3>\n              <hr />\n              <p class=\"cat-des\">Novedades del mundo del rol</p>\n          </div>\n      </div>\n      <div class=\"articles-cat-c b-s-c \" (click)=\"categoria('articles')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Artículos</h3>\n              <hr />\n              <p class=\"cat-des\">Artículos a cerca de Re:Roll</p>\n          </div>\n      </div>\n      <div class=\"interviews-cat-c b-s-c\" (click)=\"categoria('interviews')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Entrevistas</h3>\n              <hr />\n              <p class=\"cat-des\">Entrevistas a rolers conocidos</p>\n          </div>\n      </div>\n  </div>\n  <!-- BLOG POST -->\n  <div class=\"blog-g-c\">\n    <app-blog-publication></app-blog-publication>\n  </div>\n</div>\n<!-- SECTIONS -->"

/***/ }),

/***/ "./src/app/components/public/blog/blog-category/blog-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-category/blog-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlogCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCategoryComponent", function() { return BlogCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogCategoryComponent = /** @class */ (function () {
    function BlogCategoryComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedRoute.params.subscribe(function (params) {
            var term = params.category;
            if (term == 'news') {
                _this.categoriaActual = 'novedades';
            }
            else if (term == 'articles') {
                _this.categoriaActual = 'artículos';
            }
            else if (term == 'interviews') {
                _this.categoriaActual = 'entrevistas';
            }
            _this.category = term;
        });
    }
    BlogCategoryComponent.prototype.ngOnInit = function () {
    };
    BlogCategoryComponent.prototype.categoria = function (categoria) {
        return this.router.navigate(["/blog/", categoria]);
    };
    BlogCategoryComponent.prototype.buscar = function (term) {
        this.router.navigate(['/blog/search/', term]);
    };
    BlogCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-category',
            template: __webpack_require__(/*! ./blog-category.component.html */ "./src/app/components/public/blog/blog-category/blog-category.component.html"),
            styles: [__webpack_require__(/*! ../blog-home/blog-home.component.css */ "./src/app/components/public/blog/blog-home/blog-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogCategoryComponent);
    return BlogCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/public/blog/blog-home/blog-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-home/blog-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url('https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap');\r\n/* GENERAL */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n.black-c {\r\n    background-color: rgba(212, 212, 212, 0.37);\r\n}\r\n.b-s-c {\r\n    transition: 0.3s;\r\n}\r\n.b-s-c:hover {\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    box-shadow: 11px 12px 14px 0px rgba(128, 128, 128, 0.78);\r\n}\r\n.b-s-c:active,\r\n.b-s-c:focus {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    transition: 0.3s;\r\n}\r\n/* JUMBO COMPONENT */\r\n.jumbotrom-c {\r\n    padding-top: 6rem;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.644) 60%, rgba(87, 87, 87, 0.103)), url('forest.jpg');\r\n    background-size: cover;\r\n    background-position: 0rem 20%;\r\n    width: 100%;\r\n    height: 300px;\r\n    position: relative;\r\n}\r\n.navigation-g-c {\r\n    position: absolute;\r\n    top: calc(50% - (20px / 2));\r\n    left: 10%;\r\n    width: 50%;\r\n    height: 90px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.navigation-h-c {\r\n    height: 35px;\r\n}\r\n.navigation-h-c ol {\r\n    color: white;\r\n    position: relative;\r\n    list-style: none;\r\n    margin-left: 2.5px;\r\n}\r\n.navigation-h-c li:nth-child(1n+2):before {\r\n    content: \"\\2502\";\r\n}\r\n.navigation-h-c li {\r\n    display: inline;\r\n}\r\n.navigation-h-c li a {\r\n    color: rgb(228, 228, 228);\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    transition: 0.3s;\r\n}\r\n.navigation-h-c li a:hover {\r\n    color: crimson;\r\n    text-decoration: none;\r\n    transition: 0.3s;\r\n}\r\n.navigation-g-c .h2 {\r\n    color: white;\r\n    font-size: 3rem;\r\n    text-transform: uppercase;\r\n    font-family: 'Playfair Display SC';\r\n    transition: 0.5s;\r\n}\r\n.navigation-g-c .h2:hover {\r\n    -webkit-transform: scale(1.1) translateX(1.1rem);\r\n            transform: scale(1.1) translateX(1.1rem);\r\n    transition: 0.5s;\r\n}\r\n/* JUMBO COMPONENT */\r\n/* BUSCADOR */\r\n.buscador-g-c {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    padding: 2rem 0rem;\r\n}\r\n.buscador {\r\n    position: relative;\r\n}\r\n.buscador input {\r\n    width: 93%;\r\n    padding: 0.5rem 1rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid rgba(220, 20, 60, 0.493);\r\n    border-top-left-radius: 2rem 2rem;\r\n    border-bottom-left-radius: 2rem 2rem;\r\n    background-color: transparent;\r\n    color: rgb(0, 0, 0);\r\n    transition: 0.3s;\r\n}\r\n.buscador input:focus,\r\n.buscador input:hover {\r\n    border: 2px solid crimson;\r\n    transition: 0.3s;\r\n}\r\n.buscador input::-webkit-input-placeholder {\r\n    color: rgba(161, 0, 30, 0.747);\r\n    transition: 0.3s;\r\n}\r\n.buscador input::-moz-placeholder {\r\n    color: rgba(161, 0, 30, 0.747);\r\n    transition: 0.3s;\r\n}\r\n.buscador input::-ms-input-placeholder {\r\n    color: rgba(161, 0, 30, 0.747);\r\n    transition: 0.3s;\r\n}\r\n.buscador input::placeholder {\r\n    color: rgba(161, 0, 30, 0.747);\r\n    transition: 0.3s;\r\n}\r\n.buscador button {\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 0.61rem 1rem;\r\n    right: 0;\r\n    transition: 0.3s;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n    color: white;\r\n    border-top-right-radius: 2rem 2rem;\r\n    border-bottom-right-radius: 2rem 2rem;\r\n}\r\n/* BUSCADOR */\r\n/* CATEGORIAS */\r\n.categories-g-c {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    margin-bottom: 4rem;\r\n}\r\n.news-cat-c {\r\n    background-image: url('forest.jpg');\r\n    background-size: cover;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem; \r\n}\r\n.articles-cat-c {\r\n    background-image: url('forest.jpg');\r\n    background-size: cover;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem; \r\n}\r\n.interviews-cat-c {\r\n    background-image: url('forest.jpg');\r\n    background-size: cover;\r\n    padding: 1rem;\r\n}\r\n.black-trans {\r\n    padding: 1.5rem;\r\n    background-color: rgba(0, 0, 0, 0.452);\r\n    height: 100%;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.black-trans hr{\r\n    border-color: white; \r\n}\r\n.black-trans .h3 {\r\n    font-size: 1rem; \r\n    margin: 0.5rem 0;  \r\n    text-transform: uppercase;\r\n    font-family: 'Playfair Display SC';\r\n}\r\n.black-trans p {\r\n    margin: 0.5rem 0; \r\n    /* text-transform: uppercase;  */\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 0.8rem; \r\n}\r\n/* BLOG POST */\r\n.blog-g-c {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    margin-bottom: 1rem; \r\n}\r\n.colum-post-card-c .h4 {\r\n    font-size: 1.5rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    text-transform: uppercase;\r\n}\r\n.post-card-c {\r\n    margin: 2rem auto;\r\n    background-color: rgb(243, 243, 243);\r\n    width: 95%;\r\n    border: 1px rgb(231, 231, 231) solid;\r\n    border-radius: 1rem 1rem;\r\n}\r\n.cont-img-c {\r\n    background-color: rgb(120, 182, 125);\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 300px;\r\n    overflow: hidden;\r\n    border-top-right-radius: 1rem 1rem;\r\n    border-top-left-radius: 1rem 1rem;\r\n}\r\n.cont-img-c img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.data-card-c {\r\n    border-bottom: 1px solid rgb(224, 224, 224);\r\n    height: 50px;\r\n    line-height: 50px;\r\n    width: 100%;\r\n    padding: 0 1.5rem;\r\n}\r\n.data-card-c p:nth-child(1) {\r\n    float: left;\r\n}\r\n.data-card-c p:nth-child(2) {\r\n    float: right;\r\n}\r\n.text-card-c {\r\n    clear: both;\r\n    padding: 0 1rem;\r\n    text-align: justify; \r\n}\r\n.text-card-c .h5{\r\n    margin: 0.5rem 0; \r\n    font-size: 1rem; \r\n}\r\n.text-card-c p{\r\n    margin: 0.5rem 0; \r\n     font-size: 0.8rem; \r\n}\r\n.bottom-card-c {\r\n    line-height: 50px;\r\n    height: 60px;\r\n    padding: 0 1rem;\r\n}\r\n.bottom-card-c p {\r\n    float: right;\r\n    font-size: 0.8rem;\r\n}\r\n.colum-info-c .h4 {\r\n    font-size: 1rem;\r\n    line-height: 1.8rem; \r\n    font-family: \"Quicksand\", sans-serif;\r\n    text-transform: uppercase;\r\n}\r\n.ltl-post-card-c {\r\n    margin: 0.5rem auto;\r\n    width: 80%;\r\n    border: 1px rgb(231, 231, 231) solid;\r\n    border-radius: 0.3rem 0.3rem;\r\n    padding: 1rem;\r\n}\r\n.ltl-cont-img-c {\r\n    background-color: rgb(12, 51, 38);\r\n    width: 60px;\r\n    height: auto;\r\n    max-height: 75px;\r\n    overflow: hidden;\r\n    float: left;\r\n}\r\n.ltl-cont-img-c img {\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n.ltl-data-card-c {\r\n    text-align: center;\r\n    width: 50%;\r\n    height: 50px;\r\n}\r\n.ltl-data-card-c .h7 {\r\n    line-height: 50%;\r\n    font-size: 0.7rem; \r\n}\r\n.ltl-data-card-c p {\r\n    line-height: 50%;\r\n    font-size: 0.5rem; \r\n}\r\n.label-c {\r\n    border-bottom: 1px dotted grey;\r\n    clear: both;\r\n    height: 30px;\r\n    padding: 0 1rem;\r\n    font-size: 0.9rem; \r\n}\r\n.label-c p:nth-child(1) {\r\n    margin: 0;\r\n    float: left;\r\n    line-height: 30px;\r\n}\r\n.label-c p:nth-child(2) {\r\n    float: right;\r\n    margin: 0;\r\n    line-height: 30px;\r\n}\r\n.label-c:hover {\r\n    border-bottom: 1px dotted crimson;\r\n    color: crimson;\r\n}\r\n/* SECCIONES */\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n    /* JUMBO COMPONENT */\r\n    .jumbotrom-c {\r\n        height: 350px;\r\n    }\r\n    .navigation-g-c {\r\n        position: absolute;\r\n        top: calc(50% - (150px / 2));\r\n        left: 10%;\r\n        width: 50%;\r\n        height: 150px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n    /* JUMBO COMPONENT */\r\n    /* BUSCADOR */\r\n    .buscador input {\r\n        width: 96%;\r\n    }\r\n    /* BUSCADOR */\r\n    /* SECCIONES */\r\n    .sections-g-c {\r\n        background-color: whitesmoke;\r\n    }\r\n    /* CATEGORIAS */\r\n    .categories-g-c {\r\n        margin: 0 auto;\r\n        width: 80%;\r\n        display: grid;\r\n        grid-template-columns: 32% 2% 32% 2% 32%;\r\n        margin-bottom: 4rem;\r\n    }\r\n    .news-cat-c {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        background-size: cover;\r\n        padding: 1rem;\r\n        margin-bottom: 0; \r\n    }\r\n    .articles-cat-c {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        background-size: cover;\r\n        padding: 1rem;\r\n        margin-bottom: 0; \r\n    }\r\n    .interviews-cat-c {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n        background-size: cover;\r\n        padding: 1rem;\r\n    }\r\n    .black-trans {\r\n        padding: 1.5rem;\r\n        background-color: rgba(0, 0, 0, 0.452);\r\n        height: 100%;\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n    .black-trans hr{\r\n        border-color: white; \r\n    }\r\n    .black-trans .h3 {\r\n        margin: 0.5rem 0; \r\n        font-size: 1rem; \r\n        text-transform: uppercase;\r\n        font-family: 'Playfair Display SC';\r\n    }\r\n    .black-trans p {\r\n        margin: 0.5rem 0; \r\n        /* text-transform: uppercase;  */\r\n        font-family: 'Quicksand', sans-serif;\r\n        font-size: 0.8rem; \r\n    }\r\n    /* BLOG POST */\r\n    .blog-g-c {\r\n        width: 70%;\r\n        margin: 0 auto;\r\n        display: grid;\r\n        grid-template-columns: 100%;\r\n    }\r\n    .colum-post-card-c {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n    }\r\n    .colum-post-card-c .h4 {\r\n        font-size: 1.5rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        text-transform: uppercase;\r\n    }\r\n    .post-card-c {\r\n        margin: 2rem auto;\r\n        background-color: rgb(243, 243, 243);\r\n        width: 80%;\r\n        border: 1px rgb(231, 231, 231) solid;\r\n        border-radius: 1rem 1rem;\r\n    }\r\n    .cont-img-c {\r\n        background-color: rgb(120, 182, 125);\r\n        width: 100%;\r\n        height: auto;\r\n        max-height: 300px;\r\n        overflow: hidden;\r\n        border-top-right-radius: 1rem 1rem;\r\n        border-top-left-radius: 1rem 1rem;\r\n    }\r\n    .cont-img-c img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .data-card-c {\r\n        border-bottom: 1px solid rgb(224, 224, 224);\r\n        height: 50px;\r\n        line-height: 50px;\r\n        width: 100%;\r\n        padding: 0 2rem;\r\n    }\r\n    .data-card-c p:nth-child(1) {\r\n        float: left;\r\n    }\r\n    .data-card-c p:nth-child(2) {\r\n        float: right;\r\n    }\r\n    .text-card-c {\r\n        clear: both;\r\n        padding: 0 1rem;\r\n        text-align: justify; \r\n    }\r\n    .text-card-c .h5{\r\n        margin: 0.5rem 0; \r\n        font-size: 1rem; \r\n    }\r\n    .text-card-c p{\r\n        margin: 0.5rem 0; \r\n         font-size: 0.8rem; \r\n    }\r\n    .bottom-card-c {\r\n        line-height: 50px;\r\n        height: 60px;\r\n        padding: 0 1rem;\r\n    }\r\n    .bottom-card-c p {\r\n        float: right;\r\n        font-size: 0.8rem;\r\n    }\r\n    /* SECCIONES */\r\n}\r\n@media (min-width: 900px) {\r\n    /* JUMBO COMPONENT */\r\n    .jumbotrom-c {\r\n        height: 450px;\r\n    }\r\n    /* JUMBO COMPONENT */\r\n    /* BUSCADOR */\r\n    .buscador input {\r\n        width: 98%;\r\n    }\r\n    /* BUSCADOR */\r\n    /* SECCIONES */\r\n    /* CATEGORIAS */\r\n    .black-trans .h3 {\r\n        margin: 0.5rem 0; \r\n        font-size: 1.5rem;\r\n    }\r\n    .black-trans p {\r\n        margin: 0.5rem 0; \r\n        font-size: 1rem; \r\n    }\r\n    /* BLOG POST */\r\n    .blog-g-c {\r\n        margin-bottom: 0rem; \r\n    }\r\n    .colum-post-card-c .h4 {\r\n        font-size: 30px;\r\n    }\r\n    .text-card-c {\r\n        padding: 0 1.5rem;\r\n    }\r\n    .text-card-c .h5{\r\n        margin: 0.5rem 0; \r\n        font-size: 1.5rem; \r\n    }\r\n    .text-card-c p{\r\n        margin: 0.5rem 0; \r\n        font-size: 1rem; \r\n    }\r\n    .bottom-card-c {\r\n        padding: 0 1.5rem;\r\n    }\r\n    .bottom-card-c p {\r\n        float: right;\r\n        font-size: 0.8rem;\r\n    }\r\n    .colum-info-c .h4 {\r\n        font-size: 30px;\r\n        line-height: 36px; \r\n    }\r\n    .ltl-post-card-c {\r\n        margin: 1rem auto;\r\n        width: 80%;\r\n    }\r\n    .ltl-cont-img-c {\r\n        background-color: rgb(12, 51, 38);\r\n        width: 120px;\r\n    }\r\n    .ltl-cont-img-c img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .ltl-data-card-c .h7 {\r\n        line-height: 40px;\r\n        font-size: 1.2rem; \r\n    }\r\n    .ltl-data-card-c p {\r\n        font-size: 0.9rem; \r\n    }\r\n    .label-c {\r\n        border-bottom: 1px dotted grey;\r\n        clear: both;\r\n        height: 30px;\r\n        padding: 0 2rem;\r\n    }\r\n    /* SECCIONES */\r\n}\r\n.btn-c {\r\n    font-size: 1rem;\r\n    padding: 0.4rem 1.5rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    text-transform: uppercase;\r\n    border-radius: 0.3rem 0.3rem;\r\n    background-color: transparent;\r\n    color: crimson;\r\n    cursor: pointer;\r\n    bottom: 1rem;\r\n    float: left;\r\n    line-height: 20px;\r\n}\r\n.btn-c:hover,\r\n.btn-c:focus {\r\n    transition: 0.3s;\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n.btn-c:active {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvYmxvZy9ibG9nLWhvbWUvYmxvZy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsc0ZBQXNGO0FBQ3RGLGdHQUFnRztBQUVoRyxZQUFZO0FBRVo7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLDJDQUEyQztBQUMvQztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUdmLHdEQUF3RDtBQUM1RDtBQUVBOztJQUVJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksaUJBQWlCO0lBQ2pCLGlIQUF5STtJQUN6SSxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxnQkFB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Q3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvYmxvZy9ibG9nLWhvbWUvYmxvZy1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0K1N1YnJheWFkYTo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLyogR0VORVJBTCAqL1xyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmxhY2stYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuMzcpO1xyXG59XHJcblxyXG4uYi1zLWMge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmItcy1jOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxMXB4IDEycHggMTRweCAwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4KTtcclxuICAgIGJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG59XHJcblxyXG4uYi1zLWM6YWN0aXZlLFxyXG4uYi1zLWM6Zm9jdXMge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogSlVNQk8gQ09NUE9ORU5UICovXHJcbi5qdW1ib3Ryb20tYyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjY0NCkgNjAlLCByZ2JhKDg3LCA4NywgODcsIDAuMTAzKSksIHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvSU1HL2ZvcmVzdC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDByZW0gMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5uYXZpZ2F0aW9uLWctYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gKDIwcHggLyAyKSk7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubmF2aWdhdGlvbi1oLWMge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5uYXZpZ2F0aW9uLWgtYyBvbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXB4O1xyXG59XHJcbi5uYXZpZ2F0aW9uLWgtYyBsaTpudGgtY2hpbGQoMW4rMik6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyNTAyXCI7XHJcbn1cclxuLm5hdmlnYXRpb24taC1jIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4ubmF2aWdhdGlvbi1oLWMgbGkgYSB7XHJcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4ubmF2aWdhdGlvbi1oLWMgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLm5hdmlnYXRpb24tZy1jIC5oMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLm5hdmlnYXRpb24tZy1jIC5oMjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgxLjFyZW0pO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4vKiBKVU1CTyBDT01QT05FTlQgKi9cclxuLyogQlVTQ0FET1IgKi9cclxuLmJ1c2NhZG9yLWctYyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbn1cclxuLmJ1c2NhZG9yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYnVzY2Fkb3IgaW5wdXQge1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjIwLCAyMCwgNjAsIDAuNDkzKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJyZW0gMnJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJyZW0gMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmJ1c2NhZG9yIGlucHV0OmZvY3VzLFxyXG4uYnVzY2Fkb3IgaW5wdXQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmJ1c2NhZG9yIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiYSgxNjEsIDAsIDMwLCAwLjc0Nyk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi5idXNjYWRvciBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC42MXJlbSAxcmVtO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlLCBjcmltc29uKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtIDJyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbSAycmVtO1xyXG59XHJcbi8qIEJVU0NBRE9SICovXHJcbi8qIENBVEVHT1JJQVMgKi9cclxuLmNhdGVnb3JpZXMtZy1jIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbi5uZXdzLWNhdC1jIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvSU1HL2ZvcmVzdC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxufVxyXG4uYXJ0aWNsZXMtY2F0LWMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9JTUcvZm9yZXN0LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IFxyXG59XHJcbi5pbnRlcnZpZXdzLWNhdC1jIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvSU1HL2ZvcmVzdC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmJsYWNrLXRyYW5zIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NTIpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ibGFjay10cmFucyBocntcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7IFxyXG59XHJcbi5ibGFjay10cmFucyAuaDMge1xyXG4gICAgZm9udC1zaXplOiAxcmVtOyBcclxuICAgIG1hcmdpbjogMC41cmVtIDA7ICBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnO1xyXG59XHJcbi5ibGFjay10cmFucyBwIHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgICovXHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTsgXHJcbn1cclxuLyogQkxPRyBQT1NUICovXHJcbi5ibG9nLWctYyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXHJcbn1cclxuLmNvbHVtLXBvc3QtY2FyZC1jIC5oNCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucG9zdC1jYXJkLWMge1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDIzMSwgMjMxLCAyMzEpIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtO1xyXG59XHJcbi5jb250LWltZy1jIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDE4MiwgMTI1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW0gMXJlbTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW0gMXJlbTtcclxufVxyXG4uY29udC1pbWctYyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmRhdGEtY2FyZC1jIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI0LCAyMjQsIDIyNCk7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbn1cclxuLmRhdGEtY2FyZC1jIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kYXRhLWNhcmQtYyBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnRleHQtY2FyZC1jIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgXHJcbn1cclxuLnRleHQtY2FyZC1jIC5oNXtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgZm9udC1zaXplOiAxcmVtOyBcclxufVxyXG4udGV4dC1jYXJkLWMgcHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgIGZvbnQtc2l6ZTogMC44cmVtOyBcclxufVxyXG4uYm90dG9tLWNhcmQtYyB7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG4uYm90dG9tLWNhcmQtYyBwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi5jb2x1bS1pbmZvLWMgLmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07IFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5sdGwtcG9zdC1jYXJkLWMge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IDFweCByZ2IoMjMxLCAyMzEsIDIzMSkgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4ubHRsLWNvbnQtaW1nLWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCA1MSwgMzgpO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5sdGwtY29udC1pbWctYyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmx0bC1kYXRhLWNhcmQtYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5sdGwtZGF0YS1jYXJkLWMgLmg3IHtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MCU7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTsgXHJcbn1cclxuLmx0bC1kYXRhLWNhcmQtYyBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MCU7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbTsgXHJcbn1cclxuLmxhYmVsLWMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBncmV5O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTsgXHJcbn1cclxuLmxhYmVsLWMgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4ubGFiZWwtYyBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4ubGFiZWwtYzpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGNyaW1zb247XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG4vKiBTRUNDSU9ORVMgKi9cclxuXHJcblxyXG4vKiBNRU5PUiBRVUUgODAwUFggKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgLyogSlVNQk8gQ09NUE9ORU5UICovXHJcbiAgICAuanVtYm90cm9tLWMge1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbi1nLWMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gKDE1MHB4IC8gMikpO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLyogSlVNQk8gQ09NUE9ORU5UICovXHJcbiAgICAvKiBCVVNDQURPUiAqL1xyXG4gICAgLmJ1c2NhZG9yIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgfVxyXG4gICAgLyogQlVTQ0FET1IgKi9cclxuICAgIC8qIFNFQ0NJT05FUyAqL1xyXG4gICAgLnNlY3Rpb25zLWctYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICAgIC8qIENBVEVHT1JJQVMgKi9cclxuICAgIC5jYXRlZ29yaWVzLWctYyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIlIDIlIDMyJSAyJSAzMiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIH1cclxuICAgIC5uZXdzLWNhdC1jIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IFxyXG4gICAgfVxyXG4gICAgLmFydGljbGVzLWNhdC1jIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IFxyXG4gICAgfVxyXG4gICAgLmludGVydmlld3MtY2F0LWMge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuYmxhY2stdHJhbnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUyKTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5ibGFjay10cmFucyBocntcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlOyBcclxuICAgIH1cclxuICAgIC5ibGFjay10cmFucyAuaDMge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgXHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnO1xyXG4gICAgfVxyXG4gICAgLmJsYWNrLXRyYW5zIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgICAgIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICAqL1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgXHJcbiAgICB9XHJcbiAgICAvKiBCTE9HIFBPU1QgKi9cclxuICAgIC5ibG9nLWctYyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb2x1bS1wb3N0LWNhcmQtYyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtLXBvc3QtY2FyZC1jIC5oNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5wb3N0LWNhcmQtYyB7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggcmdiKDIzMSwgMjMxLCAyMzEpIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbTtcclxuICAgIH1cclxuICAgIC5jb250LWltZy1jIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwLCAxODIsIDEyNSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW0gMXJlbTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtIDFyZW07XHJcbiAgICB9XHJcbiAgICAuY29udC1pbWctYyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5kYXRhLWNhcmQtYyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjQsIDIyNCwgMjI0KTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgfVxyXG4gICAgLmRhdGEtY2FyZC1jIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5kYXRhLWNhcmQtYyBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2FyZC1jIHtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTsgXHJcbiAgICB9XHJcbiAgICAudGV4dC1jYXJkLWMgLmg1e1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgXHJcbiAgICB9XHJcbiAgICAudGV4dC1jYXJkLWMgcHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwOyBcclxuICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07IFxyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1jYXJkLWMge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLWNhcmQtYyBwIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICAvKiBTRUNDSU9ORVMgKi9cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAvKiBKVU1CTyBDT01QT05FTlQgKi9cclxuICAgIC5qdW1ib3Ryb20tYyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIH1cclxuICAgIC8qIEpVTUJPIENPTVBPTkVOVCAqL1xyXG4gICAgLyogQlVTQ0FET1IgKi9cclxuICAgIC5idXNjYWRvciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgIH1cclxuICAgIC8qIEJVU0NBRE9SICovXHJcbiAgICAvKiBTRUNDSU9ORVMgKi9cclxuICAgIC8qIENBVEVHT1JJQVMgKi9cclxuICAgIC5ibGFjay10cmFucyAuaDMge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmJsYWNrLXRyYW5zIHAge1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgXHJcbiAgICB9XHJcbiAgICAvKiBCTE9HIFBPU1QgKi9cclxuICAgIC5ibG9nLWctYyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTsgXHJcbiAgICB9XHJcbiAgICAuY29sdW0tcG9zdC1jYXJkLWMgLmg0IHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1jYXJkLWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2FyZC1jIC5oNXtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwOyBcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgXHJcbiAgICB9XHJcbiAgICAudGV4dC1jYXJkLWMgcHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwOyBcclxuICAgICAgICBmb250LXNpemU6IDFyZW07IFxyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1jYXJkLWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1jYXJkLWMgcCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtLWluZm8tYyAuaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDsgXHJcbiAgICB9XHJcbiAgICAubHRsLXBvc3QtY2FyZC1jIHtcclxuICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmx0bC1jb250LWltZy1jIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDUxLCAzOCk7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG4gICAgLmx0bC1jb250LWltZy1jIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmx0bC1kYXRhLWNhcmQtYyAuaDcge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyBcclxuICAgIH1cclxuICAgIC5sdGwtZGF0YS1jYXJkLWMgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07IFxyXG4gICAgfVxyXG4gICAgLmxhYmVsLWMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgZ3JleTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgfVxyXG4gICAgLyogU0VDQ0lPTkVTICovXHJcbn1cclxuXHJcbi5idG4tYyB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5idG4tYzpob3ZlcixcclxuLmJ0bi1jOmZvY3VzIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idG4tYzphY3RpdmUge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/public/blog/blog-home/blog-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-home/blog-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotrom-c\">\n  <div class=\"navigation-g-c\">\n    <div class=\"navigation-h-c\">\n      <ol>\n        <li>\n          <a [routerLink]=\"['/home']\">Home</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/bloghome']\">Blog</a>\n        </li>\n      </ol>\n    </div>\n    <h2 class=\"h2\">Blog Home</h2>\n  </div>\n</div>\n\n<!-- SECTIONS -->\n<div class=\"sections-g-c\">\n  <!-- SEARCH -->\n  <div class=\"buscador-g-c\">\n      <div class=\"buscador\">\n          <input type=\"text\" (keyup.enter)=\"buscar(term.value)\" placeholder=\"¿Qué estas buscando?\" #term/>\n          <button (click)=\"buscar(term.value)\"><i class=\"fas fa-search\"></i></button>\n      </div>\n  </div>\n  <!-- CATEGORIES -->\n  <div class=\"categories-g-c\">\n      <div class=\"news-cat-c b-s-c\" (click)=\"categoria('news')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Novedades</h3>\n              <hr />\n              <p class=\"cat-des\">Novedades del mundo del rol</p>\n          </div>\n      </div>\n      <div class=\"articles-cat-c b-s-c \" (click)=\"categoria('articles')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Artículos</h3>\n              <hr />\n              <p class=\"cat-des\">Artículos a cerca de Re:Roll</p>\n          </div>\n      </div>\n      <div class=\"interviews-cat-c b-s-c\" (click)=\"categoria('interviews')\">\n          <div class=\"black-trans\">\n              <h3 class=\"h3\">Entrevistas</h3>\n              <hr />\n              <p class=\"cat-des\">Entrevistas a rolers conocidos</p>\n          </div>\n      </div>\n  </div>\n  <!-- BLOG POST -->\n  <div class=\"blog-g-c\">\n      <app-blog-publication></app-blog-publication>\n  </div>\n</div>\n<!-- SECTIONS -->\n"

/***/ }),

/***/ "./src/app/components/public/blog/blog-home/blog-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-home/blog-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlogHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHomeComponent", function() { return BlogHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogHomeComponent = /** @class */ (function () {
    function BlogHomeComponent(router) {
        this.router = router;
    }
    BlogHomeComponent.prototype.ngOnInit = function () {
    };
    BlogHomeComponent.prototype.categoria = function (categoria) {
        console.log(categoria);
        return this.router.navigate(['/blog/', categoria]);
    };
    BlogHomeComponent.prototype.buscar = function (term) {
        this.router.navigate(['/blog/search/', term]);
    };
    BlogHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-home',
            template: __webpack_require__(/*! ./blog-home.component.html */ "./src/app/components/public/blog/blog-home/blog-home.component.html"),
            styles: [__webpack_require__(/*! ./blog-home.component.css */ "./src/app/components/public/blog/blog-home/blog-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogHomeComponent);
    return BlogHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2Jsb2cvYmxvZy1wdWJsaWNhdGlvbi1wYWdlL2Jsb2ctcHVibGljYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  blog-publication-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BlogPublicationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPublicationPageComponent", function() { return BlogPublicationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogPublicationPageComponent = /** @class */ (function () {
    function BlogPublicationPageComponent() {
    }
    BlogPublicationPageComponent.prototype.ngOnInit = function () {
    };
    BlogPublicationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-publication-page',
            template: __webpack_require__(/*! ./blog-publication-page.component.html */ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.html"),
            styles: [__webpack_require__(/*! ./blog-publication-page.component.css */ "./src/app/components/public/blog/blog-publication-page/blog-publication-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogPublicationPageComponent);
    return BlogPublicationPageComponent;
}());



/***/ }),

/***/ "./src/app/components/public/blog/blog-publication/blog-publication.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-publication/blog-publication.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"colum-post-card-c\">\n  <h4 class=\"h4\">Ultimos post</h4>\n  <hr />\n  <div class=\"post-card-c\">\n    <div class=\"cont-img-c\">\n      <img src=\"../../../../../assets/IMG/medusa.jpg\" />\n    </div>\n    <div class=\"data-card-c\">\n      <p><i class=\"far fa-calendar\"></i> 12 Dec, 2017</p>\n      <p><i class=\"far fa-comments\"></i> 3 comments</p>\n    </div>\n    <div class=\"text-card-c\">\n      <h5 class=\"h5\"><strong>Card Title</strong></h5>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium\n        corrupti rem iusto sint expedita deserunt at vero distinctio illo, iure\n        facere nobis corporis modi reiciendis, aliquid omnis dolorum deleniti\n        minus.\n      </p>\n    </div>\n    <div class=\"bottom-card-c\">\n      <button (click)=\"show()\" class=\"btn-c\">Ver más</button>\n      <p><i class=\"fas fa-tags\"></i> <a>#Re:Roll</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/public/blog/blog-publication/blog-publication.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-publication/blog-publication.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BlogPublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPublicationComponent", function() { return BlogPublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogPublicationComponent = /** @class */ (function () {
    function BlogPublicationComponent(router) {
        this.router = router;
        this.id = '12';
    }
    BlogPublicationComponent.prototype.ngOnInit = function () {
    };
    BlogPublicationComponent.prototype.show = function () {
        this.router.navigate(['blog/publicaciones/', this.id]);
    };
    BlogPublicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-publication',
            template: __webpack_require__(/*! ./blog-publication.component.html */ "./src/app/components/public/blog/blog-publication/blog-publication.component.html"),
            styles: [__webpack_require__(/*! ../blog-home/blog-home.component.css */ "./src/app/components/public/blog/blog-home/blog-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BlogPublicationComponent);
    return BlogPublicationComponent;
}());



/***/ }),

/***/ "./src/app/components/public/blog/blog-search/blog-search.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-search/blog-search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotrom-c\">\n  <div class=\"navigation-g-c\">\n    <div class=\"navigation-h-c\">\n      <ol>\n        <li>\n          <a [routerLink]=\"['/home']\">Home</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/bloghome']\">Blog</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/blog-search/']\">Search</a>\n        </li>\n      </ol>\n    </div>\n    <h2 class=\"h2\">{{ string }}</h2>\n  </div>\n</div>\n\n<!-- SECTIONS -->\n<div class=\"sections-g-c\">\n  <!-- SEARCH -->\n  <div class=\"buscador-g-c\">\n      <div class=\"buscador\">\n          <input type=\"text\" (keyup.enter)=\"buscar(term.value)\" placeholder=\"¿Qué estas buscando?\" #term/>\n          <button (click)=\"buscar(term.value)\"><i class=\"fas fa-search\"></i></button>\n      </div>\n  </div>\n  <!-- BLOG POST -->\n  <div class=\"blog-g-c\">\n    <app-blog-publication></app-blog-publication>\n  </div>\n</div>\n<!-- SECTIONS -->\n"

/***/ }),

/***/ "./src/app/components/public/blog/blog-search/blog-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/public/blog/blog-search/blog-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlogSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSearchComponent", function() { return BlogSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogSearchComponent = /** @class */ (function () {
    function BlogSearchComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            var term = params.term;
            if (term == '') {
                _this.router.navigate(['/blog']);
            }
            _this.string = term;
        });
    }
    BlogSearchComponent.prototype.ngOnInit = function () {
    };
    BlogSearchComponent.prototype.buscar = function (term) {
        this.router.navigate(['/blog/search/', term]);
    };
    BlogSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-search',
            template: __webpack_require__(/*! ./blog-search.component.html */ "./src/app/components/public/blog/blog-search/blog-search.component.html"),
            styles: [__webpack_require__(/*! ../blog-home/blog-home.component.css */ "./src/app/components/public/blog/blog-home/blog-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogSearchComponent);
    return BlogSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/public/contact/contact.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/public/contact/contact.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url('https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap');\r\n/* GENERAL */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Roboto\", sans-serif;\r\n    transition: 0.3s;\r\n}\r\n.black-c {\r\n    background-color: rgba(212, 212, 212, 0.37);\r\n}\r\n.b-s-c {\r\n    transition: 0.3s;\r\n}\r\n.b-s-c:hover {\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    box-shadow: 11px 12px 14px 0px rgba(128, 128, 128, 0.78);\r\n}\r\n.b-s-c:active,\r\n.b-s-c:focus {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    transition: 0.3s;\r\n}\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n}\r\n@media (min-width: 900px) {\r\n    /* JUMBO COMPONENT */\r\n    .jumbotrom-c {\r\n        padding-top: 6rem;\r\n        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.644) 60%, rgba(87, 87, 87, 0.103)), url(/assets/IMG/forest.jpg);\r\n        background-size: cover;\r\n        background-position: 0rem 20%;\r\n        width: 100%;\r\n        height: 450px;\r\n        position: relative;\r\n    }\r\n    .navigation-g-c {\r\n        position: absolute;\r\n        top: calc(50% - (150px / 2));\r\n        left: 10%;\r\n        width: 50%;\r\n        height: 150px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n    .navigation-h-c {\r\n        height: 35px;\r\n    }\r\n    .navigation-h-c ol {\r\n        color: white;\r\n        position: relative;\r\n        list-style: none;\r\n        margin-left: 2.5px;\r\n    }\r\n    .navigation-h-c li:nth-child(1n+2):before {\r\n        content: \"\\2502\";\r\n    }\r\n    .navigation-h-c li {\r\n        display: inline;\r\n    }\r\n    .navigation-h-c li a {\r\n        color: rgb(228, 228, 228);\r\n        font-size: 1rem;\r\n        text-transform: uppercase;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        transition: 0.3s;\r\n    }\r\n    .navigation-h-c li a:hover {\r\n        color: crimson;\r\n        text-decoration: none;\r\n        transition: 0.3s;\r\n    }\r\n    .navigation-g-c h2 {\r\n        color: white;\r\n        font-size: 3rem;\r\n        text-transform: uppercase;\r\n        font-family: 'Playfair Display SC';\r\n        transition: 0.5s;\r\n    }\r\n    .navigation-g-c h2:hover {\r\n        -webkit-transform: scale(1.1) translateX(1.1rem);\r\n                transform: scale(1.1) translateX(1.1rem);\r\n        transition: 0.5s;\r\n    }\r\n    /* JUMBO COMPONENT */\r\n    /* SECCIONES */\r\n    .sections-g-c {\r\n        background-color: whitesmoke;\r\n    }\r\n    .contact-section-c {\r\n        width: 90%;\r\n        margin: 2rem auto;\r\n        display: grid;\r\n        grid-template-columns: 32% 2% 32% 2%;\r\n    }\r\n    .contact-phone-c {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n    }\r\n    .contact-mail-c {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n    }\r\n    .contact-form-c {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n    }\r\n    .card-contact-c {\r\n        border: 1px solid grey;\r\n        padding: 1rem 0;\r\n        background-color: rgb(255, 255, 255);\r\n    }\r\n    .card-contact-c:hover {\r\n        box-shadow: 11px 12px 14px 0px rgba(128, 128, 128, 0.78);\r\n    }\r\n    .contact-cabecera-c hr {\r\n        border-color: grey;\r\n        margin: 0 auto;\r\n        width: 90%;\r\n    }\r\n    .contact-cabecera-c h4 {\r\n        font-family: 'Playfair Display SC';\r\n        text-align: center;\r\n    }\r\n    .contact-cabecera-c p {\r\n        text-align: center;\r\n        font-size: 3rem;\r\n        color: crimson;\r\n    }\r\n    .contact-cabecera-c p:hover {\r\n        color: rgb(172, 16, 47);\r\n    }\r\n    .contact-content-c {\r\n        padding: 0 1rem;\r\n        margin-top: 1.5rem;\r\n        text-align: left;\r\n    }\r\n    .contact-form-c {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .contact-form-c input {\r\n        padding: 0.5rem;\r\n        margin-bottom: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n    }\r\n    .contact-form-c textarea {\r\n        padding: 0.5rem;\r\n        margin-bottom: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n    }\r\n    .contact-form-c button {\r\n        padding: 0.5rem;\r\n        font-size: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .contact-form-c button:focus,\r\n    .contact-form-c button:hover {\r\n        transition: 0.3s;\r\n        background-color: crimson;\r\n        color: white;\r\n    }\r\n    .contact-form-c button:active {\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n    }\r\n    /* SECCIONES */\r\n    .btn-c {\r\n        font-size: 1rem;\r\n        padding: 0.4rem 1.5rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n        cursor: pointer;\r\n        bottom: 1rem;\r\n        float: left;\r\n        line-height: 20px;\r\n    }\r\n    .btn-c:hover,\r\n    .btn-c:focus {\r\n        transition: 0.3s;\r\n        background-color: crimson;\r\n        color: white;\r\n    }\r\n    .btn-c:active {\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsc0ZBQXNGO0FBQ3RGLGdHQUFnRztBQUVoRyxZQUFZO0FBRVo7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFHZix3REFBd0Q7QUFDNUQ7QUFFQTs7SUFFSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUdBLG9CQUFvQjtBQUVwQjtBQUNBO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEI7UUFDSSxpQkFBaUI7UUFDakIsMkhBQTJIO1FBQzNILHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsU0FBUztRQUNULFVBQVU7UUFDVixhQUFhO1FBQ2IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixvQ0FBb0M7UUFDcEMsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsa0NBQWtDO1FBQ2xDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0RBQXdDO2dCQUF4Qyx3Q0FBd0M7UUFDeEMsZ0JBQWdCO0lBQ3BCO0lBQ0Esb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZDtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isb0NBQW9DO0lBQ3hDO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLG9DQUFvQztJQUN4QztJQUNBO1FBR0ksd0RBQXdEO0lBQzVEO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0NBQWtDO1FBQ2xDLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG9DQUFvQztRQUNwQyxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixvQ0FBb0M7UUFDcEMsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQiw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtJQUN6QjtJQUNBLGNBQWM7SUFDZDtRQUNJLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQiw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0K1N1YnJheWFkYTo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLyogR0VORVJBTCAqL1xyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmJsYWNrLWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjM3KTtcclxufVxyXG5cclxuLmItcy1jIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5iLXMtYzpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMXB4IDEycHggMTRweCAwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTFweCAxMnB4IDE0cHggMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43OCk7XHJcbiAgICBib3gtc2hhZG93OiAxMXB4IDEycHggMTRweCAwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4KTtcclxufVxyXG5cclxuLmItcy1jOmFjdGl2ZSxcclxuLmItcy1jOmZvY3VzIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcblxyXG4vKiBNRU5PUiBRVUUgODAwUFggKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC8qIEpVTUJPIENPTVBPTkVOVCAqL1xyXG4gICAgLmp1bWJvdHJvbS1jIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC42NDQpIDYwJSwgcmdiYSg4NywgODcsIDg3LCAwLjEwMykpLCB1cmwoL2Fzc2V0cy9JTUcvZm9yZXN0LmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcmVtIDIwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5uYXZpZ2F0aW9uLWctYyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAoMTUwcHggLyAyKSk7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbi1oLWMge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgIH1cclxuICAgIC5uYXZpZ2F0aW9uLWgtYyBvbCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjVweDtcclxuICAgIH1cclxuICAgIC5uYXZpZ2F0aW9uLWgtYyBsaTpudGgtY2hpbGQoMW4rMik6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcMjUwMlwiO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24taC1jIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGlvbi1oLWMgbGkgYSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24taC1jIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24tZy1jIGgyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRpb24tZy1jIGgyOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWCgxLjFyZW0pO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbiAgICAvKiBKVU1CTyBDT01QT05FTlQgKi9cclxuICAgIC8qIFNFQ0NJT05FUyAqL1xyXG4gICAgLnNlY3Rpb25zLWctYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXNlY3Rpb24tYyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIlIDIlIDMyJSAyJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXBob25lLWMge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LW1haWwtYyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybS1jIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250YWN0LWMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxuICAgIC5jYXJkLWNvbnRhY3QtYzpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMXB4IDEycHggMTRweCAwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtY2FiZWNlcmEtYyBociB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1jYWJlY2VyYS1jIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXkgU0MnO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWNhYmVjZXJhLWMgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWNhYmVjZXJhLWMgcDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNzIsIDE2LCA0Nyk7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1jb250ZW50LWMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm0tYyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybS1jIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm0tYyB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtLWMgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IGNyaW1zb247XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybS1jIGJ1dHRvbjpmb2N1cyxcclxuICAgIC5jb250YWN0LWZvcm0tYyBidXR0b246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtLWMgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICB9XHJcbiAgICAvKiBTRUNDSU9ORVMgKi9cclxuICAgIC5idG4tYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3R0b206IDFyZW07XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWM6aG92ZXIsXHJcbiAgICAuYnRuLWM6Zm9jdXMge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYnRuLWM6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/public/contact/contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/public/contact/contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- JUMBO COMPONENT -->\n<div class=\"jumbotrom-c\">\n  <div class=\"navigation-g-c\">\n      <div class=\"navigation-h-c\">\n          <ol>\n              <li>\n                  <a [routerLink]=\"['/home']\">Home</a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/contact']\">Contacto</a>\n              </li>\n          </ol>\n      </div>\n      <h2>Contacto</h2>\n  </div>\n</div>\n<!-- JUMBO COMPONENT -->\n<!-- SECTIONS -->\n<div class=\"sections-g-c\">\n  <div class=\"contact-section-c\">\n      <div class=\"contact-phone-c card-contact-c\">\n          <div class=\"contact-cabecera-c\">\n              <h4>Llámanos</h4>\n              <p><i class=\"fas fa-phone\"></i></p>\n              <hr>\n          </div>\n          <div class=\"contact-content-c\">\n              <p>General: +34 <strong>854 471 298</strong></p>\n              <p>Asistencia: +34 <strong>854 471 298</strong></p>\n              <p>Asistencia idiomas: +34 <strong>854 471 298</strong></p>\n          </div>\n      </div>\n      <div class=\"contact-mail-c card-contact-c\">\n          <div class=\"contact-cabecera-c\">\n              <h4>Envíanos un e-mail</h4>\n              <p><i class=\"fas fa-envelope-open\"></i></p>\n              <hr>\n          </div>\n          <div class=\"contact-content-c\">\n              <p>General: <strong>clientes@social-reroll.com</strong></p>\n              <p>Asistencia: <strong>asistencia@social-reroll.com</strong></p>\n              <p>Asistencia idiomas: <strong>lang@social-reroll.com</strong></p>\n          </div>\n      </div>\n      <div class=\"contact-form-c card-contact-c\">\n          <div class=\"contact-cabecera-c\">\n              <h4>Envíanos un mensaje</h4>\n              <p><i class=\"fas fa-comment-alt\"></i></p>\n              <hr>\n          </div>\n          <div class=\"contact-content-c contact-form-c\">\n              <input type=\"text\" placeholder=\"Nombre\" required>\n              <input type=\"text\" placeholder=\"Dirección e-mail\" required>\n              <input type=\"text\" placeholder=\"Asunto\" required>\n              <textarea placeholder=\"Mensaje\" rows=\"5\" required></textarea>\n              <button type=\"submit\">Enviar</button>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- SECTIONS -->"

/***/ }),

/***/ "./src/app/components/public/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/public/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/public/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/public/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/public/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/public/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n/* GENERAL */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n.black-c {\r\n    background-color: rgba(212, 212, 212, 0.37);\r\n}\r\n.btn-c {\r\n    font-size: 1rem;\r\n    padding: 0.4rem 1.5rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    text-transform: uppercase;\r\n    border-radius: 0.3rem 0.3rem;\r\n    background-color: transparent;\r\n    color: crimson;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    bottom: 1rem;\r\n    left: 1rem;\r\n}\r\n.btn-c:hover,\r\n.btn-c:focus {\r\n    transition: 0.3s;\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n.btn-c:active {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n/* COVER COMPONENT */\r\n.cabecera-c {\r\n    background-image: url(/assets/IMG/forest.png);\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n    padding-top: 200px;\r\n    /* box-shadow: inset 0px -85px 37px -49px rgba(177, 220, 235, 1); */\r\n}\r\n.encabezado-c {\r\n    margin: 0rem auto;\r\n    text-align: center;\r\n}\r\n.encabezado-c h2 {\r\n    text-transform: uppercase;\r\n    font-family: \"Julius Sans One\";\r\n    font-size: 5rem;\r\n}\r\n.encabezado-c h2 span {\r\n    font-family: \"Julius Sans One\";\r\n    color: crimson;\r\n    font-weight: 400;\r\n}\r\n.encabezado-c h4 {\r\n    font-size: 1rem;\r\n    font-family: \"Quicksand\";\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    color: rgb(187, 187, 187);\r\n}\r\n/* COVER COMPONENT */\r\n/* CUERPO COMPONENT */\r\n.separador {\r\n    margin: 2rem auto;\r\n    background-color: rgba(220, 20, 60, 0.822);\r\n    width: 200px;\r\n    height: 5px;\r\n}\r\n.seccion-g-c {\r\n    margin-top: 2rem;\r\n    background-color: rgb(255, 255, 255);\r\n    /* background-color: rgba(177, 220, 235, 1); */\r\n    width: 100%;\r\n}\r\n.card:hover {\r\n    box-shadow: 11px 12px 14px 0px rgba(128, 128, 128, 0.78);\r\n}\r\n.titles {\r\n    text-transform: uppercase;\r\n    font-family: \"Quicksand\";\r\n    font-size: 2rem;\r\n    text-align: center;\r\n}\r\n.card {\r\n    position: relative;\r\n}\r\n.card-body {\r\n    padding: 1rem;\r\n}\r\n/* SECTION A */\r\n.seccion-j-c {\r\n    margin: 0rem auto;\r\n    padding-top: 5rem;\r\n    width: 90%;\r\n}\r\n.seccion-j-c p {\r\n    margin-top: 2rem;\r\n    text-align: center;\r\n}\r\n.seccion-j-c a {\r\n    color: grey;\r\n}\r\n.card-deck p {\r\n    text-align: left;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    line-height: 1.3rem;\r\n    max-height: 1rem * 4;\r\n}\r\n.card-deck .card {\r\n    cursor: pointer;\r\n}\r\n/* SECTION B */\r\n.seccion-n-c {\r\n    padding: 2rem 2rem;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n    width: 100%;\r\n}\r\n.seccion-n-c h3 {\r\n    text-align: left;\r\n}\r\n.seccion-n-c {\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n}\r\n.seccion-n-c .svg-image {\r\n    display: none;\r\n}\r\n.seccion-n-c button {\r\n    font-size: 1rem;\r\n    padding: 0.5rem 2rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    text-transform: uppercase;\r\n    border-radius: 0.3rem 0.3rem;\r\n    background-color: transparent;\r\n    color: crimson;\r\n}\r\n.seccion-n-c button:hover,\r\n.seccion-n-c button:focus {\r\n    transition: 0.3s;\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n.seccion-n-c button:active {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n/* SECTION C */\r\n.seccion-t-c {\r\n    margin: 0rem auto;\r\n    width: 90%;\r\n}\r\n.card-img-overlay .card-title {\r\n    color: crimson;\r\n}\r\n.card-img-overlay .card-text {\r\n    color: black;\r\n    font-size: 1.2rem;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n.grid-t-c {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto 1rem auto 1rem auto 1rem auto 1rem auto 1rem auto;\r\n}\r\n.grid-t-c .card {\r\n    cursor: pointer;\r\n}\r\n.item-1 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n}\r\n.item-2 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 3;\r\n    grid-row-end: 3;\r\n}\r\n.item-3 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 5;\r\n    grid-row-end: 5;\r\n}\r\n.item-4 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 7;\r\n    grid-row-end: 7;\r\n}\r\n.item-5 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 9;\r\n    grid-row-end: 9;\r\n}\r\n.item-6 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 11;\r\n    grid-row-end: 11;\r\n}\r\n/* SECCION D */\r\n.seccion-o-c {\r\n    margin: 0rem auto;\r\n    width: 100%;\r\n}\r\n/* Slideshow container */\r\n.slideshow-container {\r\n    position: relative;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n}\r\n/* Slides */\r\n.mySlides {\r\n    display: none;\r\n    padding: 80px;\r\n    text-align: center;\r\n}\r\n.mySlides img {\r\n    border-radius: 50%;\r\n    margin-bottom: 1rem;\r\n    background-color: rgba(255, 255, 255, 0.747);\r\n}\r\n/* Next & previous buttons */\r\n.prev,\r\n.next {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: auto;\r\n    margin-top: -30px;\r\n    padding: 16px;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    border-radius: 0 3px 3px 0;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n/* Position the \"next button\" to the right */\r\n.next {\r\n    position: absolute;\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n/* On hover, add a black background color with a little bit see-through */\r\n.prev:hover,\r\n.next:hover {\r\n    background-color: rgba(185, 185, 185, 0.486);\r\n    color: white;\r\n}\r\n/* The dot/bullet/indicator container */\r\n.dot-container {\r\n    text-align: center;\r\n    padding: 20px;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n}\r\n/* The dots/bullets/indicators */\r\n.dot {\r\n    cursor: pointer;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 2px;\r\n    background-color: rgba(220, 20, 60, 0.507);\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    transition: background-color 0.6s ease;\r\n}\r\n/* Add a background color to the active dot/circle */\r\n.active,\r\n.dot:hover {\r\n    background-color: rgba(0, 0, 255, 0.664);\r\n}\r\n/* Add an italic font style to all quotes */\r\nq {\r\n    font-style: italic;\r\n}\r\n/* Add a blue color to the author */\r\n.author {\r\n    color: rgba(0, 0, 255, 0.664);\r\n}\r\n/* CUERPO COMPONENT */\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n    /* COVER COMPONENT */\r\n    .cabecera-c {\r\n        background-position: center;\r\n        background-size: cover;\r\n        height: 100vh;\r\n        padding-top: 200px;\r\n        /* box-shadow: inset 0px -85px 37px -49px rgba(177, 220, 235, 1); */\r\n    }\r\n    .encabezado-c {\r\n        margin: 0rem auto;\r\n        text-align: center;\r\n    }\r\n    .encabezado-c h2 {\r\n        text-transform: uppercase;\r\n        font-family: \"Julius Sans One\";\r\n        font-size: 10rem;\r\n    }\r\n    .encabezado-c h2 span {\r\n        font-family: \"Julius Sans One\";\r\n        color: crimson;\r\n        font-weight: 400;\r\n    }\r\n    .encabezado-c h4 {\r\n        font-size: 1.5rem;\r\n        font-family: \"Quicksand\";\r\n        text-transform: uppercase;\r\n        font-weight: 400;\r\n        color: rgb(187, 187, 187);\r\n    }\r\n    /* COVER COMPONENT */\r\n    /* CUERPO COMPONENT */\r\n    .separador {\r\n        margin: 2rem auto;\r\n        background-color: rgba(220, 20, 60, 0.822);\r\n        width: 200px;\r\n        height: 5px;\r\n    }\r\n    .seccion-g-c {\r\n        margin-top: 1rem;\r\n        background-color: rgb(255, 255, 255);\r\n        /* background-color: rgba(177, 220, 235, 1); */\r\n        width: 100%;\r\n    }\r\n    .card:hover {\r\n        box-shadow: 11px 12px 14px 0px rgba(128, 128, 128, 0.78);\r\n    }\r\n    .titles {\r\n        text-transform: uppercase;\r\n        font-family: \"Quicksand\";\r\n        font-size: 2rem;\r\n        text-align: center;\r\n    }\r\n    .card {\r\n        position: relative;\r\n    }\r\n    /* SECTION A */\r\n    .seccion-j-c {\r\n        margin: 0rem auto;\r\n        padding-top: 5rem;\r\n        width: 80%;\r\n    }\r\n    .seccion-j-c p {\r\n        margin-top: 2rem;\r\n        text-align: center;\r\n    }\r\n    .seccion-j-c a {\r\n        color: grey;\r\n    }\r\n    .card-deck p {\r\n        text-align: left;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 5;\r\n        line-height: 1.5rem;\r\n        max-height: 1rem * 5;\r\n    }\r\n    .card-deck .card {\r\n        cursor: pointer;\r\n    }\r\n    /* SECTION B */\r\n    .seccion-n-c {\r\n        padding: 2rem 6rem;\r\n        background-image: linear-gradient(to right, orange, crimson);\r\n        width: 100%;\r\n    }\r\n    .seccion-n-c h3 {\r\n        text-align: left;\r\n    }\r\n    .seccion-n-c {\r\n        display: grid;\r\n        grid-template-columns: 100%;\r\n    }\r\n    .seccion-n-c .svg-image {\r\n        display: none;\r\n    }\r\n    .seccion-n-c button {\r\n        font-size: 1rem;\r\n        padding: 0.5rem 2rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n    }\r\n    .seccion-n-c button:hover,\r\n    .seccion-n-c button:focus {\r\n        transition: 0.3s;\r\n        background-color: crimson;\r\n        color: white;\r\n    }\r\n    .seccion-n-c button:active {\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n    }\r\n    /* SECTION C */\r\n    .seccion-t-c {\r\n        margin: 0rem auto;\r\n        width: 80%;\r\n    }\r\n    .card-img-overlay .card-title {\r\n        color: crimson;\r\n    }\r\n    .card-img-overlay .card-text {\r\n        color: black;\r\n        font-size: 1.2rem;\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n    }\r\n    .grid-t-c {\r\n        display: grid;\r\n        grid-template-columns: auto 1rem auto;\r\n        grid-template-rows: auto 1rem auto 1rem auto;\r\n    }\r\n    .grid-t-c .card {\r\n        cursor: pointer;\r\n    }\r\n    .item-1 {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .item-2 {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .item-3 {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .item-4 {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .item-5 {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 5;\r\n        grid-row-end: 5;\r\n    }\r\n    .item-6 {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 5;\r\n        grid-row-end: 5;\r\n    }\r\n    /* SECCION D */\r\n    .seccion-o-c {\r\n        margin: 0rem auto;\r\n        width: 100%;\r\n    }\r\n    /* Slideshow container */\r\n    .slideshow-container {\r\n        position: relative;\r\n        background-image: linear-gradient(to right, orange, crimson);\r\n    }\r\n    /* Slides */\r\n    .mySlides {\r\n        display: none;\r\n        padding: 80px;\r\n        text-align: center;\r\n    }\r\n    .mySlides img {\r\n        border-radius: 50%;\r\n        margin-bottom: 1rem;\r\n        background-color: rgba(255, 255, 255, 0.747);\r\n    }\r\n    /* Next & previous buttons */\r\n    .prev,\r\n    .next {\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 50%;\r\n        width: auto;\r\n        margin-top: -30px;\r\n        padding: 16px;\r\n        color: white;\r\n        font-weight: bold;\r\n        font-size: 20px;\r\n        border-radius: 0 3px 3px 0;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n    }\r\n    /* Position the \"next button\" to the right */\r\n    .next {\r\n        position: absolute;\r\n        right: 0;\r\n        border-radius: 3px 0 0 3px;\r\n    }\r\n    /* On hover, add a black background color with a little bit see-through */\r\n    .prev:hover,\r\n    .next:hover {\r\n        background-color: rgba(185, 185, 185, 0.486);\r\n        color: white;\r\n    }\r\n    /* The dot/bullet/indicator container */\r\n    .dot-container {\r\n        text-align: center;\r\n        padding: 20px;\r\n        background-image: linear-gradient(to right, orange, crimson);\r\n    }\r\n    /* The dots/bullets/indicators */\r\n    .dot {\r\n        cursor: pointer;\r\n        height: 15px;\r\n        width: 15px;\r\n        margin: 0 2px;\r\n        background-color: rgba(220, 20, 60, 0.507);\r\n        border-radius: 50%;\r\n        display: inline-block;\r\n        transition: background-color 0.6s ease;\r\n    }\r\n    /* Add a background color to the active dot/circle */\r\n    .active,\r\n    .dot:hover {\r\n        background-color: rgba(0, 0, 255, 0.664);\r\n    }\r\n    /* Add an italic font style to all quotes */\r\n    q {\r\n        font-style: italic;\r\n    }\r\n    /* Add a blue color to the author */\r\n    .author {\r\n        color: rgba(0, 0, 255, 0.664);\r\n    }\r\n    /* CUERPO COMPONENT */\r\n}\r\n@media (min-width: 900px) {\r\n    /* COVER COMPONENT */\r\n    .cabecera-c {\r\n        height: 100vh;\r\n        padding-top: 200px;\r\n        /* box-shadow: inset 0px -85px 37px -49px rgba(177, 220, 235, 1); */\r\n    }\r\n    /* COVER COMPONENT */\r\n    /* CUERPO COMPONENT */\r\n    .titles {\r\n        font-size: 2.5rem;\r\n    }\r\n    /* SECTION A */\r\n    .seccion-j-c {\r\n        width: 90%;\r\n    }\r\n    /* SECTION B */\r\n    .seccion-n-c {\r\n        height: 350px;\r\n        grid-template-columns: 40% 60%;\r\n        align-items: center; \r\n        align-content: center; \r\n    }\r\n    .seccion-n-c .novedades {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n    }\r\n    .seccion-n-c p {\r\n        margin: 1rem 0; \r\n    }\r\n    .seccion-n-c .svg-image {\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n        display: initial;\r\n        position: relative;\r\n    }\r\n    .seccion-n-c .svg-image img {\r\n        top: calc(50% - 200px);\r\n        right: calc(50% - 300px);\r\n        height: 400px;\r\n        position: absolute;\r\n    }\r\n    /* SECTION C */\r\n    .seccion-t-c {\r\n        width: 90%;\r\n    }\r\n    .grid-t-c {\r\n        display: grid;\r\n        grid-template-columns: auto 2% auto 2% auto;\r\n        grid-template-rows: auto 1rem auto;\r\n    }\r\n    .item-1 {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .item-2 {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .item-3 {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .item-4 {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .item-5 {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .item-6 {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    /* CUERPO COMPONENT */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLDZEQUE2RDtBQUM3RCxnRkFBZ0Y7QUFDaEYsc0ZBQXNGO0FBRXRGLFlBQVk7QUFFWjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QjtBQUdBLG9CQUFvQjtBQUVwQjtJQUNJLDZDQUE2QztJQUM3QywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUVBQW1FO0FBQ3ZFO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBR0Esb0JBQW9CO0FBR3BCLHFCQUFxQjtBQUVyQjtJQUNJLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVB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QixlQUFlO0lBQ25CO0lBQ0EscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuXHJcbi8qIEdFTkVSQUwgKi9cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJsYWNrLWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjM3KTtcclxufVxyXG5cclxuLmJ0bi1jIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIGxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5idG4tYzpob3ZlcixcclxuLmJ0bi1jOmZvY3VzIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWM6YWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcblxyXG4vKiBDT1ZFUiBDT01QT05FTlQgKi9cclxuXHJcbi5jYWJlY2VyYS1jIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL0lNRy9mb3Jlc3QucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IC04NXB4IDM3cHggLTQ5cHggcmdiYSgxNzcsIDIyMCwgMjM1LCAxKTsgKi9cclxufVxyXG5cclxuLmVuY2FiZXphZG8tYyB7XHJcbiAgICBtYXJnaW46IDByZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8tYyBoMiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSnVsaXVzIFNhbnMgT25lXCI7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvLWMgaDIgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIjtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmVuY2FiZXphZG8tYyBoNCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcclxufVxyXG5cclxuXHJcbi8qIENPVkVSIENPTVBPTkVOVCAqL1xyXG5cclxuXHJcbi8qIENVRVJQTyBDT01QT05FTlQgKi9cclxuXHJcbi5zZXBhcmFkb3Ige1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMjAsIDYwLCAwLjgyMik7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnNlY2Npb24tZy1jIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMjIwLCAyMzUsIDEpOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTFweCAxMnB4IDE0cHggMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43OCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgYm94LXNoYWRvdzogMTFweCAxMnB4IDE0cHggMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43OCk7XHJcbn1cclxuXHJcbi50aXRsZXMge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuXHJcbi8qIFNFQ1RJT04gQSAqL1xyXG5cclxuLnNlY2Npb24tai1jIHtcclxuICAgIG1hcmdpbjogMHJlbSBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uc2VjY2lvbi1qLWMgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjY2lvbi1qLWMgYSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNhcmQtZGVjayBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgbWF4LWhlaWdodDogMXJlbSAqIDQ7XHJcbn1cclxuXHJcbi5jYXJkLWRlY2sgLmNhcmQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogU0VDVElPTiBCICovXHJcblxyXG4uc2VjY2lvbi1uLWMge1xyXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2UsIGNyaW1zb24pO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWNjaW9uLW4tYyBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VjY2lvbi1uLWMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxufVxyXG5cclxuLnNlY2Npb24tbi1jIC5zdmctaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlY2Npb24tbi1jIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uc2VjY2lvbi1uLWMgYnV0dG9uOmhvdmVyLFxyXG4uc2VjY2lvbi1uLWMgYnV0dG9uOmZvY3VzIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjY2lvbi1uLWMgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG5cclxuLyogU0VDVElPTiBDICovXHJcblxyXG4uc2VjY2lvbi10LWMge1xyXG4gICAgbWFyZ2luOiAwcmVtIGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uY2FyZC1pbWctb3ZlcmxheSAuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmNhcmQtaW1nLW92ZXJsYXkgLmNhcmQtdGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG5cclxuLmdyaWQtdC1jIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMXJlbSBhdXRvIDFyZW0gYXV0byAxcmVtIGF1dG8gMXJlbSBhdXRvIDFyZW0gYXV0bztcclxufVxyXG5cclxuLmdyaWQtdC1jIC5jYXJkIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLml0ZW0tMSB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG59XHJcblxyXG4uaXRlbS0yIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbn1cclxuXHJcbi5pdGVtLTMge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtcm93LWVuZDogNTtcclxufVxyXG5cclxuLml0ZW0tNCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA3O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA3O1xyXG59XHJcblxyXG4uaXRlbS01IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDk7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDk7XHJcbn1cclxuXHJcbi5pdGVtLTYge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDExO1xyXG59XHJcblxyXG5cclxuLyogU0VDQ0lPTiBEICovXHJcblxyXG4uc2VjY2lvbi1vLWMge1xyXG4gICAgbWFyZ2luOiAwcmVtIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIFNsaWRlc2hvdyBjb250YWluZXIgKi9cclxuXHJcbi5zbGlkZXNob3ctY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlLCBjcmltc29uKTtcclxufVxyXG5cclxuXHJcbi8qIFNsaWRlcyAqL1xyXG5cclxuLm15U2xpZGVzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXlTbGlkZXMgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ3KTtcclxufVxyXG5cclxuXHJcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXHJcblxyXG4ucHJldixcclxuLm5leHQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXHJcblxyXG4ubmV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG5cclxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cclxuXHJcbi5wcmV2OmhvdmVyLFxyXG4ubmV4dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMTg1LCAxODUsIDAuNDg2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIFRoZSBkb3QvYnVsbGV0L2luZGljYXRvciBjb250YWluZXIgKi9cclxuXHJcbi5kb3QtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgY3JpbXNvbik7XHJcbn1cclxuXHJcblxyXG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cclxuXHJcbi5kb3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDIwLCA2MCwgMC41MDcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBhY3RpdmUgZG90L2NpcmNsZSAqL1xyXG5cclxuLmFjdGl2ZSxcclxuLmRvdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC42NjQpO1xyXG59XHJcblxyXG5cclxuLyogQWRkIGFuIGl0YWxpYyBmb250IHN0eWxlIHRvIGFsbCBxdW90ZXMgKi9cclxuXHJcbnEge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuLyogQWRkIGEgYmx1ZSBjb2xvciB0byB0aGUgYXV0aG9yICovXHJcblxyXG4uYXV0aG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC42NjQpO1xyXG59XHJcblxyXG5cclxuLyogQ1VFUlBPIENPTVBPTkVOVCAqL1xyXG5cclxuXHJcbi8qIE1FTk9SIFFVRSA4MDBQWCAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAvKiBDT1ZFUiBDT01QT05FTlQgKi9cclxuICAgIC5jYWJlY2VyYS1jIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgICAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggLTg1cHggMzdweCAtNDlweCByZ2JhKDE3NywgMjIwLCAyMzUsIDEpOyAqL1xyXG4gICAgfVxyXG4gICAgLmVuY2FiZXphZG8tYyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcmVtIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmVuY2FiZXphZG8tYyBoMiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIjtcclxuICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgfVxyXG4gICAgLmVuY2FiZXphZG8tYyBoMiBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIjtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLmVuY2FiZXphZG8tYyBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XHJcbiAgICB9XHJcbiAgICAvKiBDT1ZFUiBDT01QT05FTlQgKi9cclxuICAgIC8qIENVRVJQTyBDT01QT05FTlQgKi9cclxuICAgIC5zZXBhcmFkb3Ige1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMCwgNjAsIDAuODIyKTtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VjY2lvbi1nLWMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAyMjAsIDIzNSwgMSk7ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMXB4IDEycHggMTRweCAwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjc4KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDExcHggMTJweCAxNHB4IDBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzgpO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlcyB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC8qIFNFQ1RJT04gQSAqL1xyXG4gICAgLnNlY2Npb24tai1jIHtcclxuICAgICAgICBtYXJnaW46IDByZW0gYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tai1jIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tai1jIGEge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZGVjayBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxcmVtICogNTtcclxuICAgIH1cclxuICAgIC5jYXJkLWRlY2sgLmNhcmQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC8qIFNFQ1RJT04gQiAqL1xyXG4gICAgLnNlY2Npb24tbi1jIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDZyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2UsIGNyaW1zb24pO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tbi1jIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tbi1jIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgIH1cclxuICAgIC5zZWNjaW9uLW4tYyAuc3ZnLWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tbi1jIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIH1cclxuICAgIC5zZWNjaW9uLW4tYyBidXR0b246aG92ZXIsXHJcbiAgICAuc2VjY2lvbi1uLWMgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tbi1jIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgfVxyXG4gICAgLyogU0VDVElPTiBDICovXHJcbiAgICAuc2VjY2lvbi10LWMge1xyXG4gICAgICAgIG1hcmdpbjogMHJlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWctb3ZlcmxheSAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IGNyaW1zb247XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pbWctb3ZlcmxheSAuY2FyZC10ZXh0IHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLmdyaWQtdC1jIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxcmVtIGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFyZW0gYXV0byAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICAuZ3JpZC10LWMgLmNhcmQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5pdGVtLTEge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICB9XHJcbiAgICAuaXRlbS0yIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tMyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgIH1cclxuICAgIC5pdGVtLTQge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICB9XHJcbiAgICAuaXRlbS01IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tNiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgIH1cclxuICAgIC8qIFNFQ0NJT04gRCAqL1xyXG4gICAgLnNlY2Npb24tby1jIHtcclxuICAgICAgICBtYXJnaW46IDByZW0gYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC8qIFNsaWRlc2hvdyBjb250YWluZXIgKi9cclxuICAgIC5zbGlkZXNob3ctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2UsIGNyaW1zb24pO1xyXG4gICAgfVxyXG4gICAgLyogU2xpZGVzICovXHJcbiAgICAubXlTbGlkZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubXlTbGlkZXMgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQ3KTtcclxuICAgIH1cclxuICAgIC8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXHJcbiAgICAucHJldixcclxuICAgIC5uZXh0IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIH1cclxuICAgIC8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXHJcbiAgICAubmV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgfVxyXG4gICAgLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cclxuICAgIC5wcmV2OmhvdmVyLFxyXG4gICAgLm5leHQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC40ODYpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC8qIFRoZSBkb3QvYnVsbGV0L2luZGljYXRvciBjb250YWluZXIgKi9cclxuICAgIC5kb3QtY29udGFpbmVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgY3JpbXNvbik7XHJcbiAgICB9XHJcbiAgICAvKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cclxuICAgIC5kb3Qge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMjAsIDYwLCAwLjUwNyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcclxuICAgIH1cclxuICAgIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGFjdGl2ZSBkb3QvY2lyY2xlICovXHJcbiAgICAuYWN0aXZlLFxyXG4gICAgLmRvdDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcclxuICAgIH1cclxuICAgIC8qIEFkZCBhbiBpdGFsaWMgZm9udCBzdHlsZSB0byBhbGwgcXVvdGVzICovXHJcbiAgICBxIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgICAvKiBBZGQgYSBibHVlIGNvbG9yIHRvIHRoZSBhdXRob3IgKi9cclxuICAgIC5hdXRob3Ige1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC42NjQpO1xyXG4gICAgfVxyXG4gICAgLyogQ1VFUlBPIENPTVBPTkVOVCAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC8qIENPVkVSIENPTVBPTkVOVCAqL1xyXG4gICAgLmNhYmVjZXJhLWMge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwMHB4O1xyXG4gICAgICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAtODVweCAzN3B4IC00OXB4IHJnYmEoMTc3LCAyMjAsIDIzNSwgMSk7ICovXHJcbiAgICB9XHJcbiAgICAvKiBDT1ZFUiBDT01QT05FTlQgKi9cclxuICAgIC8qIENVRVJQTyBDT01QT05FTlQgKi9cclxuICAgIC50aXRsZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLyogU0VDVElPTiBBICovXHJcbiAgICAuc2VjY2lvbi1qLWMge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAvKiBTRUNUSU9OIEIgKi9cclxuICAgIC5zZWNjaW9uLW4tYyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyOyBcclxuICAgIH1cclxuICAgIC5zZWNjaW9uLW4tYyAubm92ZWRhZGVzIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICB9XHJcbiAgICAuc2VjY2lvbi1uLWMgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7IFxyXG4gICAgfVxyXG4gICAgLnNlY2Npb24tbi1jIC5zdmctaW1hZ2Uge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zZWNjaW9uLW4tYyAuc3ZnLWltYWdlIGltZyB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcclxuICAgICAgICByaWdodDogY2FsYyg1MCUgLSAzMDBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAvKiBTRUNUSU9OIEMgKi9cclxuICAgIC5zZWNjaW9uLXQtYyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5ncmlkLXQtYyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMiUgYXV0byAyJSBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICAuaXRlbS0xIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tMiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIH1cclxuICAgIC5pdGVtLTMge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICB9XHJcbiAgICAuaXRlbS00IHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tNSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgIH1cclxuICAgIC5pdGVtLTYge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICB9XHJcbiAgICAvKiBDVUVSUE8gQ09NUE9ORU5UICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/public/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/public/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cabecera-c\">\n  <div class=\"encabezado-c\">\n      <h2>Re:<span>Rol</span>l</h2>\n      <h4>Lleva tu aventura al siguiente nivel</h4>\n  </div>\n</div>\n<div class=\"seccion-g-c\">\n  <div class=\"seccion-j-c\">\n      <h3 class=\"titles\">Disfruta los juegos que más te gustan</h3>\n      <div class=\"separador\"></div>\n      <div class=\"card-deck\">\n          <div class=\"card\" [routerLink]=\"['/blog/publicaciones/1']\">\n              <img src=\"../../../../../assets/IMG/dungeons.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">Dungeons and Dragons</h5>\n                  <p class=\"card-text\">\n                      El gran conocido Dungeons and Dragons te surmergirá en un mundo de magia y brujería donde el gran motor es la imaginación.\n                  </p>\n              </div>\n          </div>\n          <div class=\"card\" [routerLink]=\"['/blog/publicaciones/2']\">\n              <img src=\"../../../../../assets/IMG/anima.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">Anima: Beyond Fantasy</h5>\n                  <p class=\"card-text\">\n                      El juego de rol Anima: Beyond Fantasy y el mundo de Gaia te sumergen en una ambientación de fantasía que combina lo místico con lo realista, la verdad con las mentiras y la luz con las tinieblas.\n                  </p>\n              </div>\n          </div>\n          <div class=\"card\" [routerLink]=\"['/blog/publicaciones/3']\">\n              <img src=\"../../../../../assets/IMG/cthulhu.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">La llamada de Cthulhu</h5>\n                  <p class=\"card-text\">\n                      La llamada de Cthulhu es un juego de rol lleno de secretos, misterios y horror basado en la obra de H. P. Lovecraft. Interpretando el papel de un resuelto investigador, viajarás a lugares extraños y peligrosos, desenmascararás conspiraciones malignas\n                      y te enfrentarás a los terrores de la noche.\n                  </p>\n              </div>\n          </div>\n      </div>\n      <p><a [routerLink]=\"['/blog/search/games']\">Y muchos más...</a></p>\n      <div class=\"separador\"></div>\n  </div>\n  <div class=\"seccion-n-c\">\n      <div class=\"novedades\">\n          <h3 class=\"titles\">Conoce las últimas novedades</h3>\n          <p>\n              En nuestro blog se publican noticias de rol, acerca de nuestra página y curiosas entrevistas que hacemos a personajes conocidos en el rol\n          </p>\n          <button [routerLink]=\"['/blog']\">Ver blog</button>\n      </div>\n      <div class=\"svg-image\">\n          <img src=\"/assets/SVG/OBJECTS.svg\" />\n      </div>\n  </div>\n  <div class=\"separador\"></div>\n  <div class=\"seccion-t-c\">\n      <h3 class=\"titles\">Descubre nuestras herramientas gratuitas</h3>\n      <div class=\"separador\"></div>\n      <div class=\"grid-t-c\">\n          <div class=\"card item-1\">\n              <img src=\"/assets/IMG/pj.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">PERSONAJES</h5>\n                  <p class=\"card-text mb-5\">\n                      Crea personajes como nunca antes con nuestras herramientas de creación de personajes, podrás usar las fichas que ponemos a tu disposición o crea las tuyas, da vida a tu personaje con los modelados 3D que ponemos a tu disposición e interáctua con ellos\n                      durante las partidas.\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/4']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n          <div class=\"card item-2\">\n              <img src=\"/assets/IMG/mapa.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">MAPAS</h5>\n                  <p class=\"card-text mb-5\">\n                      Utiliza nuestros mapas o sube los tuyos propios y descubre todas las ventajas, mapas en 2D y 3D para que todos los jugadores puedan interactuar, la distancia ya no es un problema.\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/5']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n          <div class=\"card item-3\">\n              <img src=\"/assets/IMG/chat.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">CHAT Y VIDEOCHAT</h5>\n                  <p class=\"card-text mb-5\">\n                      Descubre nuestro chat especializado para rol por escrito o contacta con otros jugadores a traves de nuestro chat de video y/o de voz\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/6']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n          <div class=\"card item-4\">\n              <img src=\"/assets/IMG/dados.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">DADOS</h5>\n                  <p class=\"card-text mb-5\">\n                      Utiliza dados y probabilidades donde quieras. Con nuestros sistemas de códigos puedes calcular las tiradas en cualquier momento.\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/7']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n          <div class=\"card item-5\">\n              <img src=\"/assets/IMG/books.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">IMAGINA, ESCRIBE Y COMPARTE</h5>\n                  <p class=\"card-text mb-5\">\n                      Abre una sección de novelas en tu perfil y comparte tu creatividad con tus amigos y seguidores.\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/8']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n          <div class=\"card item-6\">\n              <img src=\"/assets/IMG/market.png\" class=\"card-img-top\" alt=\"...\" />\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">MARKETPLACE</h5>\n                  <p class=\"card-text mb-5\">\n                      En la tienda puedes encontrar todo lo que quieras desde compedios de reglas hasta personajes 3D. Publica tus creaciones gratis o por un precio y deja que los demás puedan adquirirlo.\n                  </p>\n                  <button [routerLink]=\"['/blog/publicaciones/9']\" class=\"btn-c\">Ver más</button>\n              </div>\n          </div>\n      </div>\n      <div class=\"separador\"></div>\n  </div>\n  <div class=\"seccion-o-c\">\n      <h3 class=\"titles\">Otros ya lo han probado</h3>\n      <div class=\"separador\"></div>\n      <!-- Slideshow container -->\n      <div class=\"slideshow-container\">\n          <!-- Full-width slides/quotes -->\n          <div class=\"mySlides\">\n              <img src=\"/assets/IMG/girl.png\" width=\"100px\" height=\"100px\" /><br />\n              <q>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n        Similique laudantium perferendis atque repellat itaque accusantium\n        quaerat soluta, consequuntur pariatur tempore doloribus est\n        laborum a suscipit dicta, voluptate, vel non repellendus.</q\n      >\n      <p class=\"author\">- John Doe</p>\n    </div>\n\n    <div class=\"mySlides\" style=\"display: block\">\n      <img src=\"/assets/IMG/man.png\" width=\"100px\" height=\"100px\" /><br />\n      <q\n        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum\n        ab nam soluta unde veniam repellat voluptatibus inventore dicta\n        nobis nostrum. Facilis error consequatur perspiciatis sed\n        architecto numquam mollitia provident repellat?</q\n      >\n      <p class=\"author\">- John Doe</p>\n    </div>\n\n    <div class=\"mySlides\">\n      <img\n        src=\"/assets/IMG/girl.png\"\n        width=\"100px\"\n        height=\"100px\"\n      /><br />\n      <q\n        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis\n        autem deleniti eaque consequuntur ratione vero atque non optio\n        officiis nam impedit, voluptatibus neque sed quaerat distinctio!\n        Pariatur amet id possimus!</q\n      >\n      <p class=\"author\">- John Doe</p>\n    </div>\n\n    <!-- Next/prev buttons -->\n    <a class=\"prev\">&#10094;</a>\n    <a class=\"next\">&#10095;</a>\n  </div>\n\n  <!-- Dots/bullets/indicators -->\n  <div class=\"dot-container\">\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n    <span class=\"dot\"></span>\n  </div>\n</div>\n</div>\n<script src=\"./slider.js\"></script>"

/***/ }),

/***/ "./src/app/components/public/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/public/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/public/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/public/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/public/logger/logger.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/public/logger/logger.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n/* GENERAL */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n.black-c {\r\n    background-color: rgba(212, 212, 212, 0.37);\r\n}\r\nbody {\r\n    background-color: whitesmoke;\r\n}\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n    /* LOGIN COMPONENT */\r\n    /* LOGIN COMPONENT */\r\n}\r\n@media (min-width: 900px) {\r\n    /* LOGIN COMPONENT */\r\n    .secction-login-c {\r\n        background-color: whitesmoke;\r\n        margin-top: 6rem;\r\n        position: relative;\r\n        min-height: 600px;\r\n        transition: .1s;\r\n    }\r\n    .login-container-c {\r\n        border: 1px grey solid;\r\n        background-color: white;\r\n        border-radius: 1rem 1rem;\r\n        padding-top: 1rem;\r\n        position: absolute;\r\n        width: 60%;\r\n        top: 30px;\r\n        left: 50%;\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n        z-index: 50;\r\n    }\r\n    .logo-container-c {\r\n        max-height: 100px;\r\n        display: grid;\r\n        grid-template-columns: calc(50% - 140px) 100px 100px;\r\n    }\r\n    .logo-container-c img {\r\n        height: 90px;\r\n        grid-column-start: 2;\r\n        grid-column-end: 2;\r\n    }\r\n    .logo-container-c h5 {\r\n        margin: 0;\r\n        font-size: 2.5rem;\r\n        line-height: 85px;\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        font-family: \"Julius Sans One\";\r\n        text-transform: uppercase;\r\n    }\r\n    .login-form-container-c {\r\n        padding: 2rem 2rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .login-form-container-c h2 {\r\n        text-align: left;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .login-form-container-c form {\r\n        display: grid;\r\n        grid-template-columns: auto 2% auto;\r\n        grid-template-rows: auto 1.5rem auto 1.5rem auto;\r\n    }\r\n    .login-form-container-c form input {\r\n        padding: 0.8rem 1.5rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        border: 2px solid crimson;\r\n        border-radius: 0.3rem 0.3rem;\r\n    }\r\n    .login-form-container-c form button {\r\n        padding: 0.5rem 1rem;\r\n        font-size: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .login-form-container-c form button:hover,\r\n    .login-form-container-c form button:focus {\r\n        background-color: crimson;\r\n        color: white;\r\n        transition: 0.3s;\r\n    }\r\n    .login-form-container-c form button:active {\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n        transition: 0.3s;\r\n    }\r\n    .login-form-container-c form input:nth-child(1) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .login-form-container-c form input:nth-child(2) {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .login-form-container-c form button {\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 5;\r\n        grid-row-end: 5;\r\n        width: 20%;\r\n    }\r\n    .login-form-container-c form span {\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .login-form-container-c p {\r\n        text-align: right;\r\n        font-family: \"Quicksand\", sans-serif;\r\n    }\r\n    .login-form-container-c p a {\r\n        color: #04091e;\r\n    }\r\n    .login-form-container-c p a:hover {\r\n        color: #5a72cf;\r\n        text-decoration: none;\r\n    }\r\n    .singup-cliker {\r\n        background-color: orange;\r\n        border-bottom-left-radius: 1rem;\r\n        border-bottom-right-radius: 1rem;\r\n        padding: 0.7rem 1rem;\r\n        text-align: center;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 900;\r\n    }\r\n    .singup-cliker a {\r\n        color: #04091e;\r\n        letter-spacing: 2px;\r\n        text-transform: uppercase;\r\n    }\r\n    .singup-cliker a:hover {\r\n        color: crimson;\r\n        text-decoration: none;\r\n    }\r\n    /* SING UP */\r\n    .singup-container-c {\r\n        background-color: rgb(255, 166, 0);\r\n        background-image: linear-gradient(to right, orange crimson);\r\n        border-radius: 1rem 1rem;\r\n        padding-top: 1rem;\r\n        position: absolute;\r\n        width: 60%;\r\n        top: 30px;\r\n        left: 50%;\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n        z-index: 60;\r\n        /* display: none; */\r\n    }\r\n    .singup-form-container-c {\r\n        padding: 2rem 2rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .singup-form-container-c h2 {\r\n        text-align: left;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .singup-form-container-c form {\r\n        display: grid;\r\n        grid-template-columns: auto 2% auto;\r\n        grid-template-rows: auto 1.5rem auto 1.5rem auto 1.5rem auto 1.5rem auto 1.5rem auto;\r\n    }\r\n    .singup-form-container-c form input {\r\n        padding: 0.8rem 1.5rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        border: 2px solid crimson;\r\n        border-radius: 0.3rem 0.3rem;\r\n    }\r\n    .singup-form-container-c form button {\r\n        padding: 0.5rem 1rem;\r\n        font-size: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .singup-form-container-c form button:hover,\r\n    .singup-form-container-c form button:focus {\r\n        background-color: crimson;\r\n        color: white;\r\n        transition: 0.3s;\r\n    }\r\n    .singup-form-container-c form button:active {\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n        transition: 0.3s;\r\n    }\r\n    .singup-form-container-c form input:nth-child(1) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n        cursor: text;  \r\n    }\r\n    .singup-form-container-c form input:nth-child(2) {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .singup-form-container-c form input:nth-child(3) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n    }\r\n    .singup-form-container-c form input:nth-child(4) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 5;\r\n        grid-row-end: 5;\r\n    }\r\n    .singup-form-container-c form input:nth-child(5) {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 5;\r\n        grid-row-end: 5;\r\n    }\r\n    .singup-form-container-c form input:nth-child(6) {\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 7;\r\n        grid-row-end: 7;\r\n    }\r\n    .singup-form-container-c form button {\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 11;\r\n        grid-row-end: 11;\r\n        width: 25%;\r\n    }\r\n    .singup-form-container-c form span{\r\n        grid-column-start: 1;\r\n        grid-column-end: 4;\r\n        grid-row-start: 9;\r\n        grid-row-end: 9;\r\n    }\r\n    .singup-form-container-c p {\r\n        text-align: right;\r\n        font-family: \"Quicksand\", sans-serif;\r\n    }\r\n    .singup-form-container-c p a {\r\n        color: #04091e;\r\n    }\r\n    .singup-form-container-c p a:hover {\r\n        color: #5a72cf;\r\n        text-decoration: none;\r\n    }\r\n    .login-cliker {\r\n        background-color: rgb(255, 255, 255);\r\n        border: 1px orange solid;\r\n        border-bottom-left-radius: 1rem;\r\n        border-bottom-right-radius: 1rem;\r\n        padding: 0.7rem 1rem;\r\n        text-align: center;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 900;\r\n    }\r\n    .login-cliker a {\r\n        color: #04091e;\r\n        letter-spacing: 2px;\r\n        text-transform: uppercase;\r\n    }\r\n    .login-cliker a:hover {\r\n        color: crimson;\r\n        text-decoration: none;\r\n    }\r\n    /* LOGIN COMPONENT */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RSw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHNGQUFzRjtBQUV0RixZQUFZO0FBRVo7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLDJDQUEyQztBQUMvQztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBR0Esb0JBQW9CO0FBRXBCO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCO1FBQ0ksNEJBQTRCO1FBQzVCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsbUNBQTJCO2dCQUEzQiwyQkFBMkI7UUFDM0IsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG9EQUFvRDtJQUN4RDtJQUNBO1FBQ0ksWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixvQ0FBb0M7UUFDcEMsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUNBQW1DO1FBQ25DLGdEQUFnRDtJQUNwRDtJQUNBO1FBQ0ksc0JBQXNCO1FB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O1FBQ3BCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksb0NBQW9DO1FBQ3BDLHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztRQUNkLG1CQUFtQjtRQUNuQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGNBQWM7UUFDZCxxQkFBcUI7SUFDekI7SUFDQSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuXHJcbi8qIEdFTkVSQUwgKi9cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJsYWNrLWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjM3KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5cclxuLyogTUVOT1IgUVVFIDgwMFBYICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIC8qIExPR0lOIENPTVBPTkVOVCAqL1xyXG4gICAgLyogTE9HSU4gQ09NUE9ORU5UICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLyogTE9HSU4gQ09NUE9ORU5UICovXHJcbiAgICAuc2VjY3Rpb24tbG9naW4tYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbiAgICB9XHJcbiAgICAubG9naW4tY29udGFpbmVyLWMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGdyZXkgc29saWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGFpbmVyLWMge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDE0MHB4KSAxMDBweCAxMDBweDtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRhaW5lci1jIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRhaW5lci1jIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAubG9naW4tZm9ybS1jb250YWluZXItYyB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAubG9naW4tZm9ybS1jb250YWluZXItYyBmb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyJSBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxLjVyZW0gYXV0byAxLjVyZW0gYXV0bztcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICB9XHJcbiAgICAubG9naW4tZm9ybS1jb250YWluZXItYyBmb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IGNyaW1zb247XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWZvcm0tY29udGFpbmVyLWMgZm9ybSBidXR0b246aG92ZXIsXHJcbiAgICAubG9naW4tZm9ybS1jb250YWluZXItYyBmb3JtIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIGZvcm0gYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICAubG9naW4tZm9ybS1jb250YWluZXItYyBmb3JtIGlucHV0Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWZvcm0tY29udGFpbmVyLWMgZm9ybSBidXR0b24ge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDU7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIGZvcm0gc3BhbiB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWZvcm0tY29udGFpbmVyLWMgcCBhIHtcclxuICAgICAgICBjb2xvcjogIzA0MDkxZTtcclxuICAgIH1cclxuICAgIC5sb2dpbi1mb3JtLWNvbnRhaW5lci1jIHAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM1YTcyY2Y7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1jbGlrZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1jbGlrZXIgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwNDA5MWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1jbGlrZXIgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGNyaW1zb247XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLyogU0lORyBVUCAqL1xyXG4gICAgLnNpbmd1cC1jb250YWluZXItYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY2LCAwKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSBjcmltc29uKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogNjA7XHJcbiAgICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIlIGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEuNXJlbSBhdXRvIDEuNXJlbSBhdXRvIDEuNXJlbSBhdXRvIDEuNXJlbSBhdXRvIDEuNXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICB9XHJcbiAgICAuc2luZ3VwLWZvcm0tY29udGFpbmVyLWMgZm9ybSBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBmb3JtIGJ1dHRvbjpob3ZlcixcclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBmb3JtIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBmb3JtIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgICAgIGN1cnNvcjogdGV4dDsgIFxyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gaW5wdXQ6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDc7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA3O1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIGZvcm0gYnV0dG9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDExO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBmb3JtIHNwYW57XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiA5O1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogOTtcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5zaW5ndXAtZm9ybS1jb250YWluZXItYyBwIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDQwOTFlO1xyXG4gICAgfVxyXG4gICAgLnNpbmd1cC1mb3JtLWNvbnRhaW5lci1jIHAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM1YTcyY2Y7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWNsaWtlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IG9yYW5nZSBzb2xpZDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWNsaWtlciBhIHtcclxuICAgICAgICBjb2xvcjogIzA0MDkxZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAubG9naW4tY2xpa2VyIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC8qIExPR0lOIENPTVBPTkVOVCAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/public/logger/logger.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/public/logger/logger.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <link rel=\"stylesheet\" href=\"../../../../assets/animate.css\">\n</head>\n\n<!-- LOG IN COMPONENT -->\n<div class=\"secction-login-c\">\n  <div class=\"login-container-c\">\n      <div class=\"logo-container-c\">\n          <img src=\"/assets/IMG/logo.png\">\n          <h5>Re:Roll</h5>\n      </div>\n      <div class=\"login-form-container-c\">\n          <h2>Iniciar Sesión</h2>\n          <form (submit)=\"onSubmitLog( formularioLogin )\" #formularioLogin=\"ngForm\">\n              <input [(ngModel)]=\"usuario.uname\" type=\"text\" name=\"username\" placeholder=\"Nombre de Usuario\" required>\n              <input [(ngModel)]=\"usuario.password\" type=\"password\" name=\"password\" placeholder=\"Contraseña\" required>\n              <button type=\"submit\">Acceder</button>\n              <span>\n                <p class=\"animated zoomIn\" *ngIf=\"formularioLogin.submitted && formularioRegistro.controls['password'].errors\">\n                          El campo contraseña es obligatorio\n                </p>\n                <p class=\"animated zoomIn\" *ngIf=\"formularioLogin.submitted && formularioRegistro.controls['username'].errors\">\n                          El campo username es obligatorio\n                </p>\n             </span>\n          </form>\n          <p><a>¿Olvidaste tu contraseña?</a></p>\n      </div>\n      <div class=\"singup-cliker\"><a>Crear cuenta</a></div>\n  </div>\n  <div class=\"singup-container-c\">\n      <div class=\"logo-container-c\">\n          <img src=\"/assets/IMG/logo.png\">\n          <h5>Re:Roll</h5>\n      </div>\n      <div class=\"singup-form-container-c\">\n          <h2>Registrarse</h2>\n          <form (submit)=\"onSubmitReg( formularioRegistro )\" #formularioRegistro=\"ngForm\">\n              <input [(ngModel)]=\"usuario.name\" name=\"name\" type=\"text\" placeholder=\"Nombre\" required minlength=\"2\">\n              <input [(ngModel)]=\"usuario.lastname\" name=\"lastname\" type=\"text\" placeholder=\"Apellidos\" required minlength=\"2\">\n              <input [(ngModel)]=\"usuario.email\" name=\"email\" type=\"email\" placeholder=\"E-mail\" required email>\n              <input [(ngModel)]=\"usuario.password\" name=\"password\" type=\"password\" placeholder=\"Contraseña\" minlength=\"8\" required>\n              <input [(ngModel)]=\"usuario.repassword\" type=\"password\" name=\"repeat_pass\" placeholder=\"Repetir contraseña\" required minlength=\"8\">\n              <input [(ngModel)]=\"usuario.uname\" name=\"username\" type=\"text\" placeholder=\"Nombre de Usuario\" required minlength=\"1\">\n              <span>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['name'].errors\">\n                    El campo nombre es obligatorio y debe tener un mínimo de 2 caracteres\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['lastname'].errors\">\n                    El campo apellidos es obligatorio y debe tener un mínimo de 2 caracteres\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['email'].errors\">\n                    El campo email es obligatorio\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['password'].errors\">\n                    El campo contraseña es obligatorio y debe tener un mínimo de 8 caracteres\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['repeat_pass'].errors\">\n                    El campo repetir contraseña es obligatorio y debe tener un mínimo de 8 caracteres\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && !passes\">\n                    Las contraseñas deben ser iguales\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && formularioRegistro.controls['username'].errors\">\n                    El campo username es obligatorio\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && !validname\">\n                  Este username ya esta en uso\n              </p>\n              <p class=\"animated zoomIn\" *ngIf=\"formularioRegistro.submitted && !validmail\">\n                  Este mail ya esta en uso\n              </p>\n              </span>\n              <button type=\"submit\">Registrar</button>\n              \n          </form>\n      </div>\n      <div class=\"login-cliker\"><a>Inicia Sesión</a></div>\n  </div>\n</div>\n<!-- LOG IN COMPONENT -->\n<!-- COVER COMPONENT -->"

/***/ }),

/***/ "./src/app/components/public/logger/logger.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/public/logger/logger.component.ts ***!
  \**************************************************************/
/*! exports provided: LoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerComponent", function() { return LoggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var LoggerComponent = /** @class */ (function () {
    function LoggerComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.users_names = [];
        this.users_mails = [];
        this.usuarios = [];
        this.isConnected();
    }
    LoggerComponent.prototype.ngOnInit = function () {
        this.jquery();
        this.usuario = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["userModel"]();
        this.getAllusers();
    };
    LoggerComponent.prototype.jquery = function () {
        /* LOGIN - SING UP */
        jquery__WEBPACK_IMPORTED_MODULE_5__('.singup-container-c').hide();
        jquery__WEBPACK_IMPORTED_MODULE_5__('.singup-cliker').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.secction-login-c').css('min-height', '850px');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.singup-container-c').slideDown('slow');
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.login-cliker').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.singup-container-c').slideUp('slow');
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.secction-login-c').css('min-height', '600px');
            }, 500);
        });
        /* LOGIN - SING UP */
    };
    LoggerComponent.prototype.onSubmitReg = function (form) {
        this.getAllusers();
        this.validmail = true;
        this.validname = true;
        this.passes = true;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
        if (this.usuario.password !== this.usuario.repassword) {
            this.passes = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                allowOutsideClick: false,
                type: 'error',
                text: 'Las contraseñas no son iguales'
            });
            return;
        }
        for (var _i = 0, _a = this.users_mails; _i < _a.length; _i++) {
            var m = _a[_i];
            if (this.usuario.email == m) {
                this.validmail = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    allowOutsideClick: false,
                    type: 'error',
                    text: 'El mail está en uso'
                });
                return;
            }
        }
        for (var _b = 0, _c = this.users_names; _b < _c.length; _b++) {
            var n = _c[_b];
            if (this.usuario.uname == n) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    allowOutsideClick: false,
                    type: 'error',
                    text: 'El nombre de usuario está en uso'
                });
                this.validname = false;
                return;
            }
        }
        console.log(this.usuario);
        this.userService.createUser(this.usuario, 'http://localhost:3000/api/users')
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                allowOutsideClick: false,
                type: 'success',
                text: 'Se ha creado con éxito'
            });
            jquery__WEBPACK_IMPORTED_MODULE_5__('.singup-container-c').slideUp('slow');
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.secction-login-c').css('min-height', '80vh');
            }, 500);
        });
    };
    LoggerComponent.prototype.onSubmitLog = function (form) {
        this.getAllusers();
        this.usuarioCorrecto = false;
        if (form.invalid) {
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            allowOutsideClick: false,
            type: 'info',
            text: 'Espere por favor'
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var a = _a[_i];
            if (this.usuario.uname === a.uname && this.usuario.password === a.password) {
                this.usuarioCorrecto = true;
                this.id_usuario = a._id;
            }
        }
        if (this.usuarioCorrecto) {
            localStorage.setItem('_id', this.id_usuario);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                allowOutsideClick: false,
                type: 'success',
                text: 'Los datos son correctos'
            });
            this.router.navigate(['/timeline']);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                allowOutsideClick: false,
                type: 'error',
                text: 'El nombre de usuario y contraseña no cohinciden'
            });
            return;
        }
    };
    LoggerComponent.prototype.getAllusers = function () {
        var _this = this;
        this.users_names.slice(0);
        this.users_mails.slice(0);
        this.usuarios.slice(0);
        this.userService.getElemets('http://localhost:3000/api/users')
            .subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var i = res_1[_i];
                _this.users_names.push(i['uname']);
                _this.users_mails.push(i['email']);
                _this.usuarios.push(i);
            }
        });
    };
    LoggerComponent.prototype.isConnected = function () {
        this.id_usuario = localStorage.getItem('_id');
        if (this.id_usuario != null) {
            this.router.navigate(['/timeline']);
        }
    };
    LoggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logger',
            template: __webpack_require__(/*! ./logger.component.html */ "./src/app/components/public/logger/logger.component.html"),
            styles: [__webpack_require__(/*! ./logger.component.css */ "./src/app/components/public/logger/logger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoggerComponent);
    return LoggerComponent;
}());



/***/ }),

/***/ "./src/app/components/public/not-found-component/not-found-component.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/public/not-found-component/not-found-component.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL25vdC1mb3VuZC1jb21wb25lbnQvbm90LWZvdW5kLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/public/not-found-component/not-found-component.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/public/not-found-component/not-found-component.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  not-found-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/public/not-found-component/not-found-component.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/public/not-found-component/not-found-component.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotFoundComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentComponent", function() { return NotFoundComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponentComponent = /** @class */ (function () {
    function NotFoundComponentComponent() {
    }
    NotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found-component',
            template: __webpack_require__(/*! ./not-found-component.component.html */ "./src/app/components/public/not-found-component/not-found-component.component.html"),
            styles: [__webpack_require__(/*! ./not-found-component.component.css */ "./src/app/components/public/not-found-component/not-found-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponentComponent);
    return NotFoundComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/ficha/ficha.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/snippets/ficha/ficha.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor{\r\n    background-color: whitesmoke; \r\n    width: 100%;\r\n    padding: 2rem; \r\n    position: relative;\r\n}\r\n\r\nh2{\r\n    margin-bottom: 2rem; \r\n    width: 50%;\r\n}\r\n\r\n.button {\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 3rem;\r\n    font-size: 1.2rem;\r\n    background-color: whitesmoke;\r\n    color: crimson;\r\n    border: 1px crimson solid;\r\n    border-radius: 0.2rem 0.2rem;\r\n    padding: 0.5rem 1rem;\r\n    transition: 0.3s;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.button:hover {\r\n    color: whitesmoke;\r\n    background-color: crimson;\r\n    transition: 0.3s;\r\n  }\r\n\r\n.contenido{\r\n    display: grid;\r\n    justify-items: center;\r\n    overflow: scroll;\r\n  }\r\n\r\n.cambiarImagen {\r\n    background-color: rgb(112, 112, 112);\r\n    width: 20%;\r\n    height: 110px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.cambiarImagen input {\r\n    padding: 0.5rem;\r\n    border: 1px crimson solid;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n\r\n.cambiarImagen .buttons button {\r\n    width: 50%;\r\n    border: 1px crimson solid;\r\n    background-color: whitesmoke;\r\n    border-radius: 0.2rem 0.2rem;\r\n    color: crimson;\r\n    padding: 0.3rem;\r\n  }\r\n\r\n.cambiarImagen .buttons button:hover {\r\n    background-color: crimson;\r\n    border-radius: 0.2rem 0.2rem;\r\n    color: whitesmoke;\r\n  }\r\n\r\n.contenido img{\r\n    cursor: pointer;\r\n  }\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: crimson;\r\n  box-shadow: inset 0 0 5px #3f466400;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: crimson;\r\n  border-radius: 20px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: orange;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9maWNoYS9maWNoYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQSxVQUFVOztBQUVaO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBR0EsVUFBVTs7QUFFVjtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUdBLFdBQVc7O0FBRVg7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUdBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NuaXBwZXRzL2ZpY2hhL2ZpY2hhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtOyBcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgcmlnaHQ6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGJvcmRlcjogMXB4IGNyaW1zb24gc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcblxyXG4gIC5jb250ZW5pZG97XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5jYW1iaWFySW1hZ2VuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmNhbWJpYXJJbWFnZW4gaW5wdXQge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggY3JpbXNvbiBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhbWJpYXJJbWFnZW4gLmJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBjcmltc29uIHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbSAwLjJyZW07XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhbWJpYXJJbWFnZW4gLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG5cclxuICAuY29udGVuaWRvIGltZ3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIHdpZHRoICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBUcmFjayAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMzZjQ2NjQwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogSGFuZGxlICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/snippets/ficha/ficha.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/snippets/ficha/ficha.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor\">\n  <h2 id=\"titulo\" [contentEditable]=\"editable\" >{{ficha.title}}</h2>  <button (click)=\"edit()\" class=\"button\">Guardar cambios ficha</button>\n  <div class=\"contenido\">\n    <img (click)=\"openChangeImage()\" [src]=\"ficha.content\">\n  </div>\n</div>\n\n<div class=\"cambiarImagen\" *ngIf=\"divChange\">\n    <input type=\"url\" placeholder=\"Introduce una url\" #url />\n    <div class=\"buttons\">\n        <button (click)=\"changeImage(url.value)\" type=\"button\">Aceptar</button>\n        <button (click)=\"closeChangeImage()\" type=\"button\">Cerrar</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/snippets/ficha/ficha.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/snippets/ficha/ficha.component.ts ***!
  \**************************************************************/
/*! exports provided: FichaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaComponent", function() { return FichaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _models_fichas_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/fichas.model */ "./src/app/models/fichas.model.ts");




var FichaComponent = /** @class */ (function () {
    function FichaComponent(api) {
        this.api = api;
        this.divChange = false;
        this.ficha = new _models_fichas_model__WEBPACK_IMPORTED_MODULE_3__["fichaModel"]();
    }
    FichaComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    FichaComponent.prototype.getInfo = function () {
        var _this = this;
        this.api.getElement(this.id, "http://localhost:3000/api/files")
            .subscribe(function (res) {
            _this.ficha._id = res['Usuario']._id;
            _this.ficha.content = res['Usuario'].content;
            _this.ficha.id_character = res['Usuario'].id_character;
            _this.ficha.id_user = res['Usuario'].id_user;
            _this.ficha.title = res['Usuario'].title;
            if (_this.ficha.id_user == localStorage.getItem("_id")) {
                _this.editable = true;
            }
            else {
                _this.editable = false;
            }
        });
    };
    FichaComponent.prototype.edit = function () {
        this.ficha.title = $("#titulo").html();
        this.save();
    };
    FichaComponent.prototype.save = function () {
        this.api.modifyfichas(this.ficha, "http://localhost:3000/api/files")
            .subscribe(function () {
        });
    };
    FichaComponent.prototype.openChangeImage = function () {
        this.divChange = true;
    };
    FichaComponent.prototype.closeChangeImage = function () {
        this.divChange = false;
    };
    FichaComponent.prototype.changeImage = function (value) {
        this.ficha.content = value;
        this.save();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FichaComponent.prototype, "id", void 0);
    FichaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ficha',
            template: __webpack_require__(/*! ./ficha.component.html */ "./src/app/components/snippets/ficha/ficha.component.html"),
            styles: [__webpack_require__(/*! ./ficha.component.css */ "./src/app/components/snippets/ficha/ficha.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["APIServiceService"]])
    ], FichaComponent);
    return FichaComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/snippets/footer/footer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* FOOTER COMPONENT */\r\n\r\nfooter {\r\n    padding: 3rem;\r\n    padding-bottom: 2rem;\r\n    background-color: #04091e;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 100%;\r\n    grid-template-rows: auto 2rem auto 2rem auto 2rem auto;\r\n    color: #fff;\r\n}\r\n\r\nfooter h5 {\r\n    color: crimson;\r\n}\r\n\r\n.about-c {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n}\r\n\r\n.navigate {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 3;\r\n    grid-row-end: 3;\r\n}\r\n\r\n.navigate ul {\r\n    list-style: none;\r\n}\r\n\r\n.navigate ul li a {\r\n    color: white;\r\n}\r\n\r\n.newsletter {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 5;\r\n    grid-row-end: 5;\r\n}\r\n\r\n.newsletter .form {\r\n    position: relative;\r\n}\r\n\r\n.newsletter .form input {\r\n    width: 90%;\r\n    padding: 1rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    background-color: #04091e;\r\n    color: white;\r\n}\r\n\r\n.newsletter .form button {\r\n    position: absolute;\r\n    text-align: center;\r\n    padding: 1.13rem;\r\n    transition: 0.3s;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n    color: white;\r\n}\r\n\r\n.social {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 7;\r\n    grid-row-end: 7;\r\n    width: 100%;\r\n}\r\n\r\n.social p {\r\n    float: left;\r\n    margin: 0;\r\n}\r\n\r\n.social ul {\r\n    float: left;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.social ul li {\r\n    display: inline;\r\n    margin-right: 0.5rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.social ul li a {\r\n    color: white;\r\n}\r\n\r\n.social ul li a:hover {\r\n    color: crimson;\r\n}\r\n\r\n/* FOOTER COMPONENT */\r\n\r\n@media (min-width: 700px) {\r\n    /* FOOTER COMPONENT */\r\n    footer {\r\n        padding: 4rem;\r\n        padding-bottom: 2rem;\r\n        background-color: #04091e;\r\n        width: 100%;\r\n        display: grid;\r\n        grid-template-columns: 35% 2rem auto 2rem 35%;\r\n        grid-template-rows: auto 3rem auto;\r\n        color: #fff;\r\n    }\r\n    footer h5 {\r\n        color: crimson;\r\n    }\r\n    .about-c {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .navigate {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .navigate ul {\r\n        list-style: none;\r\n    }\r\n    .navigate ul li a {\r\n        color: white;\r\n    }\r\n    .newsletter {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .newsletter .form {\r\n        position: relative;\r\n    }\r\n    .newsletter .form input {\r\n        width: 75%;\r\n        padding: 1rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n        background-color: #04091e;\r\n        color: white;\r\n    }\r\n    .newsletter .form button {\r\n        position: absolute;\r\n        text-align: center;\r\n        padding: 1.13rem;\r\n        transition: 0.3s;\r\n        border: 0;\r\n        text-transform: uppercase;\r\n        background-image: linear-gradient(to right, orange, crimson);\r\n        color: white;\r\n    }\r\n    .social {\r\n        grid-column-start: 1;\r\n        grid-column-end: 6;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n        width: 100%;\r\n    }\r\n    .social p {\r\n        float: left;\r\n        margin: 0;\r\n    }\r\n    .social ul {\r\n        float: right;\r\n        list-style: none;\r\n        margin: 0;\r\n    }\r\n    .social ul li {\r\n        display: inline;\r\n        margin-right: 1rem;\r\n        font-size: 1.5rem;\r\n    }\r\n    .social ul li a {\r\n        color: white;\r\n    }\r\n    .social ul li a:hover {\r\n        color: crimson;\r\n    }\r\n    /* FOOTER COMPONENT */\r\n}\r\n\r\n@media (min-width: 900px) {\r\n    /* FOOTER COMPONENT */\r\n    footer {\r\n        grid-template-columns: 40% 2rem auto 2rem 40%;\r\n        grid-template-rows: auto 3rem auto;\r\n        color: #fff;\r\n    }\r\n    .about-c {\r\n        grid-column-start: 1;\r\n        grid-column-end: 1;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .navigate {\r\n        grid-column-start: 3;\r\n        grid-column-end: 3;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .newsletter {\r\n        grid-column-start: 5;\r\n        grid-column-end: 5;\r\n        grid-row-start: 1;\r\n        grid-row-end: 1;\r\n    }\r\n    .newsletter .form input {\r\n        width: 85%;\r\n    }\r\n    .social {\r\n        grid-column-start: 1;\r\n        grid-column-end: 6;\r\n        grid-row-start: 3;\r\n        grid-row-end: 3;\r\n        width: 100%;\r\n    }\r\n    /* FOOTER COMPONENT */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNEQUFzRDtJQUN0RCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0kscUJBQXFCO0lBQ3JCO1FBQ0ksYUFBYTtRQUNiLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0Msa0NBQWtDO1FBQ2xDLFdBQVc7SUFDZjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULHlCQUF5QjtRQUN6Qiw0REFBNEQ7UUFDNUQsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLFNBQVM7SUFDYjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0EscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO1FBQ0ksNkNBQTZDO1FBQzdDLGtDQUFrQztRQUNsQyxXQUFXO0lBQ2Y7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25pcHBldHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9PVEVSIENPTVBPTkVOVCAqL1xyXG5cclxuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA5MWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMnJlbSBhdXRvIDJyZW0gYXV0byAycmVtIGF1dG87XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZm9vdGVyIGg1IHtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYWJvdXQtYyB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG59XHJcblxyXG4ubmF2aWdhdGUge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMztcclxuICAgIGdyaWQtcm93LWVuZDogMztcclxufVxyXG5cclxuLm5hdmlnYXRlIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXIge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtcm93LWVuZDogNTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXIgLmZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmV3c2xldHRlciAuZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDkxZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5ld3NsZXR0ZXIgLmZvcm0gYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuMTNyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlLCBjcmltc29uKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbCB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiA3O1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zb2NpYWwgcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNvY2lhbCB1bCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zb2NpYWwgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnNvY2lhbCB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvY2lhbCB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG5cclxuLyogRk9PVEVSIENPTVBPTkVOVCAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAvKiBGT09URVIgQ09NUE9ORU5UICovXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDkxZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUlIDJyZW0gYXV0byAycmVtIDM1JTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gM3JlbSBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgZm9vdGVyIGg1IHtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIH1cclxuICAgIC5hYm91dC1jIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRlIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRlIHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmlnYXRlIHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uZXdzbGV0dGVyIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLm5ld3NsZXR0ZXIgLmZvcm0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5uZXdzbGV0dGVyIC5mb3JtIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDkxZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubmV3c2xldHRlciAuZm9ybSBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMS4xM3JlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlLCBjcmltc29uKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBwIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIHVsIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIHVsIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgfVxyXG4gICAgLyogRk9PVEVSIENPTVBPTkVOVCAqL1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC8qIEZPT1RFUiBDT01QT05FTlQgKi9cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgMnJlbSBhdXRvIDJyZW0gNDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAzcmVtIGF1dG87XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtYyB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIH1cclxuICAgIC5uYXZpZ2F0ZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIH1cclxuICAgIC5uZXdzbGV0dGVyIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gICAgfVxyXG4gICAgLm5ld3NsZXR0ZXIgLmZvcm0gaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLyogRk9PVEVSIENPTVBPTkVOVCAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/snippets/footer/footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/snippets/footer/footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"about-c\">\n      <h5>Sobre nosotros</h5>\n      <p>\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab minus placeat at repellat cum asperiores! Tenetur eaque corrupti totam mollitia itaque aspernatur, ut, perspiciatis, fugiat sint sed minima modi dolores.\n      </p>\n  </div>\n  <div class=\"navigate\">\n      <h5>Navegación</h5>\n      <ul>\n          <li><a [routerLink]=\"['/home']\">Inicio</a></li>\n          <li><a [routerLink]=\"['/blog']\">Blog</a></li>\n          <li><a [routerLink]=\"['/contact']\">Contacto</a></li>\n          <li><a [routerLink]=\"['/logger']\">Log in</a></li>\n      </ul>\n  </div>\n  <div class=\"newsletter\">\n      <h5>Newsletter</h5>\n      <p>\n          Subscríbete a nuestra newsletter para mantenerte informado de todo lo que ocurra\n      </p>\n      <div class=\"form\">\n          <input type=\"text\" placeholder=\"Introduce tu email\" />\n          <button><i class=\"far fa-paper-plane\"></i></button>\n      </div>\n  </div>\n  <div class=\"social\">\n      <p>Copyright ©2019 All rights reserved</p>\n      <ul>\n          <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fas fa-envelope\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fas fa-ruler\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fas fa-certificate\"></i></a></li>\n          <li><a href=\"#\"><i class=\"fab fa-angular\"></i></a></li>\n      </ul>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/snippets/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/snippets/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/snippets/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/snippets/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/menu/menu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/snippets/menu/menu.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap\");\r\n/* GENERAL */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n}\r\nbody {\r\n    position: relative;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1em;\r\n    background-color: whitesmoke;\r\n}\r\n.badge-pos {\r\n    position: absolute;\r\n    right: 0.3rem;\r\n    top: 0rem;\r\n    height: 20px;\r\n    min-width: 5px;\r\n    text-indent: -999px;\r\n}\r\n.color-active {\r\n    background-color: crimson !important;\r\n    color: rgb(255, 255, 255);\r\n}\r\n/* MENU COMPONENT */\r\n.menu-container {\r\n    position: fixed;\r\n    background-color: rgba(245, 245, 245, 0.575);\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 100;\r\n}\r\n.grid-menu-row div {\r\n    text-align: center;\r\n    display: grid;\r\n}\r\n/* AREAS */\r\n.grid-menu-row .header {\r\n    grid-area: header;\r\n    grid-template-columns: auto 1% 20% 1% 20% 1% 20%;\r\n    border-bottom: 1px whitesmoke solid;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.header button {\r\n    border: 0;\r\n    padding: 0.5rem 0rem;\r\n    font-size: 25px;\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    transition: 0.3s;\r\n}\r\n.header button:hover,\r\n.header button:focus {\r\n    color: crimson;\r\n    transition: 0.3s;\r\n}\r\n.header button:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n}\r\n.header button:nth-child(2) {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n}\r\n.header button:nth-child(3) {\r\n    grid-column-start: 5;\r\n    grid-column-end: 5;\r\n    position: relative;\r\n}\r\n.header button:nth-child(4) {\r\n    grid-column-start: 7;\r\n    grid-column-end: 7;\r\n    position: relative;\r\n}\r\n.grid-menu-row .column {\r\n    grid-area: column;\r\n}\r\n.column button {\r\n    border: 0;\r\n    font-size: 18px;\r\n    background-color: orange;\r\n    background-image: linear-gradient(to right, crimson, orange);\r\n    color: #04091e;\r\n    padding: 0.5rem;\r\n}\r\n.column button:hover,\r\n.column button:focus {\r\n    transition: 5s ease-in;\r\n    background-image: initial;\r\n    background-color: orange;\r\n}\r\n.column button i {\r\n    color: #04091e;\r\n}\r\n.grid-menu-row .cuerpo {\r\n    grid-area: cuerpo;\r\n    display: grid;\r\n    height: 15rem;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 20% 40% 40%;\r\n}\r\n.cuerpo button {\r\n    border: 1px orange solid;\r\n    border-radius: 0.5rem 0.5rem;\r\n    font-size: 18px;\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    margin: 0.5rem 0rem;\r\n}\r\n.cuerpo button:hover,\r\n.cuerpo button:focus {\r\n    background-color: orange;\r\n    color: #04091e;\r\n    transition: 0.3s;\r\n}\r\n.cuerpo button:active {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    transition: 0.3s;\r\n}\r\n.cuerpo .bault {\r\n    margin: 0;\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    grid-row-start: 1;\r\n    grid-row-end: 3; \r\n    border: 0;\r\n    border-radius: 0;\r\n    text-transform: uppercase;\r\n    background-color: orange;\r\n    background-image: initial;\r\n    color: #04091e;\r\n    transition: 0.3s;\r\n}\r\n.cuerpo .bault:hover,\r\n.cuerpo .bault:focus {\r\n    background-color: crimson;\r\n    transition: 0.3s;\r\n}\r\n.grid-menu-row .busqueda {\r\n    grid-area: busqueda;\r\n}\r\n.busqueda h4 {\r\n    color: crimson;\r\n}\r\n.buscador-group-c {\r\n    position: relative;\r\n}\r\n.buscador-group-c input {\r\n    position: relative;\r\n    padding: 0.5rem;\r\n    border: 2px solid crimson;\r\n    background-color: #04091e;\r\n    color: whitesmoke;\r\n}\r\n.buscador-group-c button {\r\n    position: absolute;\r\n    right: 0;\r\n    padding: 0.61rem 1rem;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n    background-image: linear-gradient(to right, orange, crimson);\r\n    color: white;\r\n}\r\n.grid-menu-row .bottom {\r\n    grid-area: bottom;\r\n    display: grid;\r\n    margin-top: 2rem;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-column-gap: 0.5rem;\r\n}\r\n.bottom button {\r\n    padding: 0.5rem;\r\n    border: 0;\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    border: 1px whitesmoke solid;\r\n    border-radius: 0.5rem 0.5rem;\r\n    transition: 0.3s;\r\n}\r\n.bottom button:hover,\r\n.bottom button:focus {\r\n    background-color: whitesmoke;\r\n    color: #04091e;\r\n    transition: 0.3s;\r\n}\r\n/* AREAS */\r\n.grid-menu-row {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    background-color: #04091e;\r\n    border: 1px #04091e solid;\r\n    border-radius: 1rem 1rem;\r\n    padding: 1rem 1rem;\r\n    padding-bottom: 2rem;\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    grid-template-rows: auto auto auto;\r\n    grid-template-areas: \"header header\" \"column column\" \"cuerpo cuerpo\" \"busqueda busqueda\" \"bottom bottom\";\r\n    grid-column-gap: 0.5rem;\r\n    grid-row-gap: 0.5rem;\r\n    z-index: 1000;\r\n}\r\n/* MENU COMPONENT */\r\n/* MENOR QUE 800PX */\r\n@media (min-width: 700px) {\r\n    .badge-pos {\r\n        position: absolute;\r\n        right: 0.5rem;\r\n        bottom: 1rem;\r\n        height: 35px;\r\n        min-width: 35px;\r\n        font-size: 15px;\r\n        padding-top: 0.7rem;\r\n        padding-right: 0.6rem;\r\n        top: initial;\r\n        text-indent: initial;\r\n    }\r\n    /* MENU COMPONENT */\r\n    .menu-container {\r\n        padding: 0rem 2rem;\r\n    }\r\n    /* AREAS */\r\n    .grid-menu-row .header {\r\n        grid-area: header;\r\n        grid-template-columns: 30% 3.3% 20% 3.3% 20% 3.3% 20%;\r\n        border-bottom: 1px whitesmoke solid;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .grid-menu-row .column {\r\n        grid-area: column;\r\n    }\r\n    .column button {\r\n        border: 0;\r\n        font-size: 18px;\r\n        background-color: orange;\r\n        background-image: linear-gradient(to right, crimson, orange);\r\n        color: #04091e;\r\n        padding: initial;\r\n    }\r\n    .grid-menu-row .cuerpo {\r\n        grid-area: cuerpo;\r\n        display: grid;\r\n        height: 5rem;\r\n        padding-left: 1.25rem;\r\n        grid-template-columns: 50% 50%;\r\n        grid-template-rows: 20% 40% 40%;\r\n    }\r\n    .cuerpo button:nth-child(odd) {\r\n        margin-right: 0.5rem;\r\n    }\r\n    .cuerpo button:nth-child(even) {\r\n        margin-right: 0.5rem;\r\n    }\r\n    .grid-menu-row .busqueda {\r\n        grid-area: busqueda;\r\n        padding-left: 1.25rem;\r\n    }\r\n    /* AREAS */\r\n    .grid-menu-row {\r\n        background-color: #04091e;\r\n        border: 1px #04091e solid;\r\n        border-radius: 1rem 1rem;\r\n        padding: 2rem 2rem;\r\n        padding-bottom: 3rem;\r\n        display: grid;\r\n        grid-template-columns: 30% auto;\r\n        grid-template-rows: auto auto auto;\r\n        grid-template-areas: \"header header\" \"column cuerpo\" \"column busqueda\" \"bottom bottom\";\r\n        grid-column-gap: 0.5rem;\r\n        grid-row-gap: 0.5rem;\r\n        z-index: 1000;\r\n    }\r\n    /* MENU COMPONENT */\r\n}\r\n@media (min-width: 900px) {\r\n    body {\r\n        overflow-y: scroll;\r\n        min-width: 1350px;\r\n        margin: 0 auto;\r\n    }\r\n    .badge-pos {\r\n        position: absolute;\r\n        right: 2.5rem;\r\n    }\r\n    /* MENU COMPONENT */\r\n    .menu-container {\r\n        margin: 0 auto;\r\n        padding: 0rem 5rem;\r\n        padding-top: 6rem; \r\n    }\r\n    /* AREAS */\r\n    .header button {\r\n        font-size: 30px;\r\n    }\r\n    .grid-menu-row .column {\r\n        grid-area: column;\r\n    }\r\n    .column button {\r\n        font-size: 20px;\r\n    }\r\n    .cuerpo button {\r\n        font-size: 20px;\r\n    }\r\n    /* AREAS */\r\n    .grid-menu-row {\r\n        max-width: 1100px;\r\n    }\r\n    /* MENU COMPONENT */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBc0U7QUFDdEUsNkRBQTZEO0FBQzdELGdGQUFnRjtBQUNoRixzRkFBc0Y7QUFDdEYsZ0dBQWdHO0FBRWhHLFlBQVk7QUFFWjtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7QUFFQSxtQkFBbUI7QUFFbkI7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFHQSxVQUFVO0FBRVY7SUFDSSxpQkFBaUI7SUFDakIsZ0RBQWdEO0lBQ2hELG1DQUFtQztJQUNuQyxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLDREQUE0RDtJQUM1RCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBOztJQUVJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsU0FBUztJQUNULHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFHQSxVQUFVO0FBRVY7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsd0dBQXdHO0lBQ3hHLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUdBLG1CQUFtQjtBQUduQixvQkFBb0I7QUFFcEI7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLG9CQUFvQjtJQUN4QjtJQUNBLG1CQUFtQjtJQUNuQjtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBLFVBQVU7SUFDVjtRQUNJLGlCQUFpQjtRQUNqQixxREFBcUQ7UUFDckQsbUNBQW1DO1FBQ25DLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsZUFBZTtRQUNmLHdCQUF3QjtRQUN4Qiw0REFBNEQ7UUFDNUQsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QiwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0lBQ0EsVUFBVTtJQUNWO1FBQ0kseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLGtDQUFrQztRQUNsQyxzRkFBc0Y7UUFDdEYsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0EsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7SUFDakI7SUFDQSxtQkFBbUI7SUFDbkI7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBLFVBQVU7SUFDVjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBLFVBQVU7SUFDVjtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25pcHBldHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCtTdWJyYXlhZGE6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4vKiBHRU5FUkFMICovXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uYmFkZ2UtcG9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwLjNyZW07XHJcbiAgICB0b3A6IDByZW07XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDVweDtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbn1cclxuXHJcbi5jb2xvci1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLyogTUVOVSBDT01QT05FTlQgKi9cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNTc1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uZ3JpZC1tZW51LXJvdyBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuXHJcbi8qIEFSRUFTICovXHJcblxyXG4uZ3JpZC1tZW51LXJvdyAuaGVhZGVyIHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDElIDIwJSAxJSAyMCUgMSUgMjAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlc21va2Ugc29saWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXIgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5oZWFkZXIgYnV0dG9uOmhvdmVyLFxyXG4uaGVhZGVyIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5oZWFkZXIgYnV0dG9uOm50aC1jaGlsZCgxKSB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMTtcclxufVxyXG5cclxuLmhlYWRlciBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4uaGVhZGVyIGJ1dHRvbjpudGgtY2hpbGQoMykge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgYnV0dG9uOm50aC1jaGlsZCg0KSB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogNztcclxuICAgIGdyaWQtY29sdW1uLWVuZDogNztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdyaWQtbWVudS1yb3cgLmNvbHVtbiB7XHJcbiAgICBncmlkLWFyZWE6IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjcmltc29uLCBvcmFuZ2UpO1xyXG4gICAgY29sb3I6ICMwNDA5MWU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb2x1bW4gYnV0dG9uOmhvdmVyLFxyXG4uY29sdW1uIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICB0cmFuc2l0aW9uOiA1cyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmNvbHVtbiBidXR0b24gaSB7XHJcbiAgICBjb2xvcjogIzA0MDkxZTtcclxufVxyXG5cclxuLmdyaWQtbWVudS1yb3cgLmN1ZXJwbyB7XHJcbiAgICBncmlkLWFyZWE6IGN1ZXJwbztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNDAlIDQwJTtcclxufVxyXG5cclxuLmN1ZXJwbyBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggb3JhbmdlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwcmVtO1xyXG59XHJcblxyXG4uY3VlcnBvIGJ1dHRvbjpob3ZlcixcclxuLmN1ZXJwbyBidXR0b246Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgY29sb3I6ICMwNDA5MWU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY3VlcnBvIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmN1ZXJwbyAuYmF1bHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMzsgXHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaXRpYWw7XHJcbiAgICBjb2xvcjogIzA0MDkxZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jdWVycG8gLmJhdWx0OmhvdmVyLFxyXG4uY3VlcnBvIC5iYXVsdDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmdyaWQtbWVudS1yb3cgLmJ1c3F1ZWRhIHtcclxuICAgIGdyaWQtYXJlYTogYnVzcXVlZGE7XHJcbn1cclxuXHJcbi5idXNxdWVkYSBoNCB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmJ1c2NhZG9yLWdyb3VwLWMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnVzY2Fkb3ItZ3JvdXAtYyBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDkxZTtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uYnVzY2Fkb3ItZ3JvdXAtYyBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwLjYxcmVtIDFyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2UsIGNyaW1zb24pO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3JpZC1tZW51LXJvdyAuYm90dG9tIHtcclxuICAgIGdyaWQtYXJlYTogYm90dG9tO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5ib3R0b20gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZXNtb2tlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5ib3R0b20gYnV0dG9uOmhvdmVyLFxyXG4uYm90dG9tIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgY29sb3I6ICMwNDA5MWU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5cclxuLyogQVJFQVMgKi9cclxuXHJcbi5ncmlkLW1lbnUtcm93IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwOTFlO1xyXG4gICAgYm9yZGVyOiAxcHggIzA0MDkxZSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlciBoZWFkZXJcIiBcImNvbHVtbiBjb2x1bW5cIiBcImN1ZXJwbyBjdWVycG9cIiBcImJ1c3F1ZWRhIGJ1c3F1ZWRhXCIgXCJib3R0b20gYm90dG9tXCI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuXHJcbi8qIE1FTlUgQ09NUE9ORU5UICovXHJcblxyXG5cclxuLyogTUVOT1IgUVVFIDgwMFBYICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIC5iYWRnZS1wb3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMC41cmVtO1xyXG4gICAgICAgIGJvdHRvbTogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICB0b3A6IGluaXRpYWw7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgICAvKiBNRU5VIENPTVBPTkVOVCAqL1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbiAgICB9XHJcbiAgICAvKiBBUkVBUyAqL1xyXG4gICAgLmdyaWQtbWVudS1yb3cgLmhlYWRlciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMy4zJSAyMCUgMy4zJSAyMCUgMy4zJSAyMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHdoaXRlc21va2Ugc29saWQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIC5ncmlkLW1lbnUtcm93IC5jb2x1bW4ge1xyXG4gICAgICAgIGdyaWQtYXJlYTogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbHVtbiBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgY3JpbXNvbiwgb3JhbmdlKTtcclxuICAgICAgICBjb2xvcjogIzA0MDkxZTtcclxuICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgLmdyaWQtbWVudS1yb3cgLmN1ZXJwbyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBjdWVycG87XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA0MCUgNDAlO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwbyBidXR0b246bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwbyBidXR0b246bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5ncmlkLW1lbnUtcm93IC5idXNxdWVkYSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBidXNxdWVkYTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICAvKiBBUkVBUyAqL1xyXG4gICAgLmdyaWQtbWVudS1yb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDA5MWU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggIzA0MDkxZSBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0bztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlclwiIFwiY29sdW1uIGN1ZXJwb1wiIFwiY29sdW1uIGJ1c3F1ZWRhXCIgXCJib3R0b20gYm90dG9tXCI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgIH1cclxuICAgIC8qIE1FTlUgQ09NUE9ORU5UICovXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTM1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXBvcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAvKiBNRU5VIENPTVBPTkVOVCAqL1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW07IFxyXG4gICAgfVxyXG4gICAgLyogQVJFQVMgKi9cclxuICAgIC5oZWFkZXIgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZ3JpZC1tZW51LXJvdyAuY29sdW1uIHtcclxuICAgICAgICBncmlkLWFyZWE6IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5jb2x1bW4gYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLyogQVJFQVMgKi9cclxuICAgIC5ncmlkLW1lbnUtcm93IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIH1cclxuICAgIC8qIE1FTlUgQ09NUE9ORU5UICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/snippets/menu/menu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/snippets/menu/menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MENU COMPONENT  -->\n<div class=\"menu-container\">\n  <div class=\"grid-menu-row\">\n      <div class=\"header\">\n          <button routerLink=\"/profile/{{id}}\"><i class=\"fas fa-user\"></i></button> \n          <button [routerLink]=\"['/timeline']\" ><i class=\"fas fa-newspaper\"></i></button>\n          <button><i class=\"fas fa-bell\"></i> <span class=\"badge badge-pill badge-dark badge-pos\"></span></button>\n          <button [routerLink]=\"['/chat']\"><i class=\"fas fa-comments\"> <span class=\"badge badge-pill badge-dark badge-pos\"></span></i></button>\n      </div>\n      <div class=\"column\">\n          <button><i class=\"fas fa-cog\"></i> Configuración</button>\n      </div>\n      <div class=\"cuerpo\">\n          <button [routerLink]=\"['/baul']\" class=\"bault\"> Mi baul</button>\n      </div>\n      <div class=\"busqueda\">\n          <h4>Buscador</h4>\n          <div class=\"buscador-group-c\">\n              <input type=\"text\" (keyup.enter)=\"buscar(term.value)\" placeholder=\"¿Que estas buscando?\" #term>\n              <button (click)=\"buscar(term.value)\" ><i class=\"fas fa-search\"></i></button>\n          </div>\n      </div>\n      <div class=\"bottom\">\n          <button><i class=\"fas fa-file-alt\"></i> Reseña</button>\n          <button><i class=\"fas fa-question-circle\"></i> Ayuda</button>\n          <button (click)=\"CerrarSesion()\">Cerrar Sesión <i class=\"fas fa-sign-out-alt\"></i></button>\n      </div>\n  </div>\n</div>\n<!-- MENU COMPONENT -->"

/***/ }),

/***/ "./src/app/components/snippets/menu/menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/snippets/menu/menu.component.ts ***!
  \************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.UserIsConnected = false;
        this.id = localStorage.getItem("_id");
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("_id") != null) {
            this.UserIsConnected = true;
        }
    };
    MenuComponent.prototype.CerrarSesion = function () {
        localStorage.removeItem("_id");
        this.router.navigate(["/home"]);
    };
    MenuComponent.prototype.buscar = function (term) {
        this.router.navigate(["/search", term]);
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/snippets/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/snippets/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/navbar/navbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/snippets/navbar/navbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.nav-c {\r\n    background-color: rgba(230, 230, 230, 0.37);\r\n    position: fixed;\r\n    height: 6rem;\r\n    transition: 0.3s;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n.nav-c .logo-g-c {\r\n    padding: 1rem 1rem;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    float: left;\r\n}\r\n\r\n.logo-g-c .logo-c {\r\n    height: 100%;\r\n    float: left;\r\n    transition: 0.3s;\r\n}\r\n\r\n.logo-g-c .logo-c:hover {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n\r\n.logo-g-c .marca-c {\r\n    float: right;\r\n    padding: 0rem 0.5rem;\r\n    font-size: 2rem;\r\n    letter-spacing: 0.1rem;\r\n    font-family: \"Julius Sans One\";\r\n    text-transform: uppercase;\r\n    color: rgb(24, 24, 24);\r\n}\r\n\r\n.collapse-c {\r\n    float: right;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.bto-collap-c {\r\n    height: 40%;\r\n    font-size: 1rem;\r\n    padding: 0.1rem 1.3rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    text-transform: uppercase;\r\n    border-radius: 0.3rem 0.3rem;\r\n    background-color: transparent;\r\n    color: crimson;\r\n    cursor: pointer;\r\n}\r\n\r\n.bto-collap-c:hover,\r\n.bto-collap-c:focus {\r\n    transition: 0.3s;\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n\r\n.bto-collap-c:active {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    list-style: none;\r\n    position: absolute;\r\n    width: 100vw;\r\n    right: 0;\r\n    top: 6rem;\r\n    height: 40vh;\r\n    background-color: rgba(0, 0, 0, 0.74);\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    transition: -webkit-transform 0.5s ease-in;\r\n    transition: transform 0.5s ease-in;\r\n    transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;\r\n}\r\n\r\n.active-c {\r\n    transition: -webkit-transform 0.5s ease-out;\r\n    transition: transform 0.5s ease-out;\r\n    transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\r\n    -webkit-transform: translate(0%);\r\n            transform: translate(0%);\r\n}\r\n\r\n.list li a {\r\n    color: rgb(233, 233, 233);\r\n    font-size: 0.9rem;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 500;\r\n    transition: 0.3s;\r\n}\r\n\r\n.list li a:hover {\r\n    color: rgb(233, 233, 233);\r\n    text-decoration: none;\r\n}\r\n\r\n.list li button {\r\n    font-size: 1rem;\r\n    padding: 0.4rem 1.5rem;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 700;\r\n    transition: 0.3s;\r\n    border: 2px solid crimson;\r\n    text-transform: uppercase;\r\n    border-radius: 0.3rem 0.3rem;\r\n    background-color: transparent;\r\n    color: crimson;\r\n    cursor: pointer;\r\n}\r\n\r\n.list li button:focus,\r\n.list li button:hover {\r\n    transition: 0.3s;\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n\r\n.list li button:active {\r\n    transition: 0.3s;\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n}\r\n\r\n@media (min-width: 700px) {\r\n    /* NAVIGATION COMPONENT */\r\n    .ocl-c {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n    .ocl-m-c {\r\n        display: none;\r\n    }\r\n    .nav-c {\r\n        background-color: initial;\r\n    }\r\n    .nav-c .logo-g-c {\r\n        padding: 1rem 2rem;\r\n    }\r\n    .logo-g-c .logo-c {\r\n        float: left;\r\n        transition: 0.3s;\r\n    }\r\n    .logo-g-c .logo-c:hover {\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n    }\r\n    .logo-g-c .marca-c {\r\n        float: left;\r\n        padding: 0rem 1rem;\r\n        font-size: 2rem;\r\n        letter-spacing: 0.1rem;\r\n        font-family: \"Julius Sans One\";\r\n    }\r\n    .list {\r\n        -webkit-transform: initial;\r\n                transform: initial;\r\n        position: initial;\r\n        display: initial;\r\n        background-color: initial;\r\n        width: initial;\r\n        height: 100%;\r\n        display: flex;\r\n        float: right;\r\n        align-items: center;\r\n        list-style: none;\r\n        padding-right: 2.5rem;\r\n    }\r\n    .list li {\r\n        list-style: none;\r\n    }\r\n    .list li a {\r\n        position: relative;\r\n        color: rgb(22, 22, 22);\r\n        font-size: 0.9rem;\r\n        margin-right: 1.8rem;\r\n        text-decoration: none;\r\n        text-transform: uppercase;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 500;\r\n        transition: 0.3s;\r\n    }\r\n    .list li a:hover {\r\n        color: rgb(22, 22, 22);\r\n        text-decoration: none;\r\n    }\r\n    .list li a::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 3px;\r\n        background-color: crimson;\r\n        left: 0;\r\n        bottom: -0.1em;\r\n        -webkit-transform: scaleX(0);\r\n                transform: scaleX(0);\r\n        transition: all 0.3s;\r\n    }\r\n    .list li a:hover::after {\r\n        -webkit-transform: scaleX(1);\r\n                transform: scaleX(1);\r\n        transition: all 0.5s;\r\n    }\r\n    .list li button {\r\n        font-size: 1rem;\r\n        padding: 0.4rem 1.5rem;\r\n        font-family: \"Quicksand\", sans-serif;\r\n        font-weight: 700;\r\n        transition: 0.3s;\r\n        border: 2px solid crimson;\r\n        text-transform: uppercase;\r\n        border-radius: 0.3rem 0.3rem;\r\n        background-color: transparent;\r\n        color: crimson;\r\n        cursor: pointer;\r\n    }\r\n    .list li button:focus,\r\n    .list li button:hover {\r\n        transition: 0.3s;\r\n        background-color: crimson;\r\n        color: white;\r\n    }\r\n    .list li button:active {\r\n        transition: 0.3s;\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n    }\r\n}\r\n\r\n@media (min-width: 900px) {\r\n    /* NAVIGATION COMPONENT */\r\n    .nav-c .logo-g-c {\r\n        padding: 1rem 2.5rem;\r\n    }\r\n    .logo-g-c .marca-c {\r\n        font-size: 2.5rem;\r\n        letter-spacing: 0.1rem;\r\n    }\r\n    .list {\r\n        padding-right: 3rem;\r\n    }\r\n    .list li a {\r\n        font-size: 1.1rem;\r\n        margin-right: 2.5rem;\r\n    }\r\n    .list li button {\r\n        font-size: 1.2rem;\r\n        padding: 0.5rem 2rem;\r\n    }\r\n    .black-c {\r\n        background-color: rgba(212, 212, 212, 0.37);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qixn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QkFBb0I7SUFDeEI7SUFDQTtRQUNJLDJDQUEyQztJQUMvQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYXYtYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuMzcpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5uYXYtYyAubG9nby1nLWMge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvZ28tZy1jIC5sb2dvLWMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ubG9nby1nLWMgLmxvZ28tYzpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ubG9nby1nLWMgLm1hcmNhLWMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSnVsaXVzIFNhbnMgT25lXCI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxufVxyXG5cclxuLmNvbGxhcHNlLWMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5idG8tY29sbGFwLWMge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjFyZW0gMS4zcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG8tY29sbGFwLWM6aG92ZXIsXHJcbi5idG8tY29sbGFwLWM6Zm9jdXMge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG8tY29sbGFwLWM6YWN0aXZlIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA2cmVtO1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hY3RpdmUtYyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxufVxyXG5cclxuLmxpc3QgbGkgYSB7XHJcbiAgICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmxpc3QgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubGlzdCBsaSBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdCBsaSBidXR0b246Zm9jdXMsXHJcbi5saXN0IGxpIGJ1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QgbGkgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIC8qIE5BVklHQVRJT04gQ09NUE9ORU5UICovXHJcbiAgICAub2NsLWMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5vY2wtbS1jIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdi1jIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgLm5hdi1jIC5sb2dvLWctYyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tZy1jIC5sb2dvLWMge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICAubG9nby1nLWMgLmxvZ28tYzpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICAubG9nby1nLWMgLm1hcmNhLWMge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIjtcclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLmxpc3QgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC5saXN0IGxpIGE6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAtMC4xZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBhOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMS41cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBidXR0b246Zm9jdXMsXHJcbiAgICAubGlzdCBsaSBidXR0b246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAubGlzdCBsaSBidXR0b246YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAvKiBOQVZJR0FUSU9OIENPTVBPTkVOVCAqL1xyXG4gICAgLm5hdi1jIC5sb2dvLWctYyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAubG9nby1nLWMgLm1hcmNhLWMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICAgIH1cclxuICAgIC5saXN0IGxpIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLmxpc3QgbGkgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgIH1cclxuICAgIC5ibGFjay1jIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuMzcpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/snippets/navbar/navbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/snippets/navbar/navbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-c\">\n  <div class=\"logo-g-c\">\n      <img class=\"logo-c\" src=\"../../../../assets/IMG/logo.png\" />\n      <h2 class=\"marca-c\">Re:Roll</h2>\n  </div>\n  <div class=\"collapse-c ocl-m-c\">\n      <button class=\"bto-collap-c\"><i class=\"fas fa-bars\"></i></button>\n  </div>\n  <ul class=\"list ocl-c\">\n      <li><a [routerLink]=\"['/home']\">Inicio</a></li>\n      <li><a [routerLink]=\"['/blog']\">Blog</a></li>\n      <li><a [routerLink]=\"['/contact']\">Contacto</a></li>\n      <li><a [routerLink]=\"['/logger']\">Log in </a></li>\n      <li id=\"menu-c\" *ngIf=\"estaConectado\" (click)=\"toggleMenu()\" ><button ><i *ngIf=\"!estaAbierto\" class=\"fas fa-ellipsis-h\"></i><i *ngIf=\"estaAbierto\" class=\"fas fa-times\"></i></button></li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/snippets/navbar/navbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/snippets/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route) {
        var _this = this;
        this.route = route;
        this.estaConectado = false;
        this.estaAbierto = false;
        this.activarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pulsarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.route.events.subscribe(function () {
            if (localStorage.getItem("_id") == null) {
                _this.estaConectado = false;
            }
            else {
                _this.estaConectado = true;
            }
            _this.activarMenu.emit(_this.estaConectado);
        });
        this.pulsarMenu.emit(this.estaAbierto);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleMenu = function () {
        if (this.estaAbierto === true) {
            this.estaAbierto = false;
        }
        else {
            this.estaAbierto = true;
        }
        this.pulsarMenu.emit(this.estaAbierto);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "activarMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "pulsarMenu", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/snippets/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/snippets/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap\");\r\n/* GENERAL */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n}\r\n.color-active {\r\n    background-color: crimson !important;\r\n    color: rgb(255, 255, 255);\r\n}\r\n/* NUEVA PUBLICACIÓN COMPONENT */\r\n.new-back {\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0.507);\r\n    width: 100%;\r\n    top: 0rem;\r\n    left: 0;\r\n    z-index: 1200;\r\n    height: 100%;\r\n}\r\n.new-public {\r\n    margin: 5rem auto;\r\n    width: 50%;\r\n    background-color: white;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem 0.5rem;\r\n}\r\n.top {\r\n    display: grid;\r\n    grid-template-rows: auto auto;\r\n    grid-template-columns: 95% auto;\r\n}\r\n.top h3 {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    margin: 0;\r\n    font-size: 1.5rem;\r\n}\r\n.top .cerrar {\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: rgba(128, 128, 128, 0);\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\r\n.top .cerrar:hover {\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    background-color: rgba(128, 128, 128, 0.24);\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n}\r\n.top hr {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    grid-row-start: 2;\r\n    grid-row-end: 2;\r\n    margin: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n.type-selector {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.type-selector button:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    background-color: white;\r\n    border: 2px crimson solid;\r\n}\r\n.type-selector button:nth-child(2) {\r\n    background-color: white;\r\n    border: 2px crimson solid;\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n}\r\n.estate {\r\n    display: grid;\r\n    grid-template-columns: 50px auto;\r\n    grid-template-rows: 50px auto auto;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n    height: 130px;\r\n}\r\n.img-c {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    border: 4px white solid;\r\n    background-position: center;\r\n    background-size: 100%;\r\n    align-self: center;\r\n    justify-self: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.img-c img{\r\n    height: 100%;\r\n    position: absolute; \r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.estate input {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    grid-row-start: 1;\r\n    grid-row-end: 3;\r\n    border: 2px crimson solid;\r\n    border-radius: 0.5rem 0.5rem;\r\n}\r\n.estate button {\r\n    margin-top: 1rem;\r\n    padding: 0.2rem 1rem; \r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    grid-row-start: 3;\r\n    grid-row-end: 3;\r\n    background-color: transparent;\r\n    color: crimson;\r\n    border: 2px crimson solid;\r\n    border-radius: 0.5rem 0.5rem;\r\n}\r\n.estate button:hover,\r\n.estate button:focus {\r\n    background-color: crimson;\r\n    color: white;\r\n}\r\n.estate button:active {\r\n    -webkit-transform: scale(0.98);\r\n            transform: scale(0.98);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9udWV2YS1wdWJsaWNhY2lvbi9udWV2YS1wdWJsaWNhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RSw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHNGQUFzRjtBQUN0RixnR0FBZ0c7QUFFaEcsWUFBWTtBQUVaO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZDtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QjtBQUVBLGdDQUFnQztBQUVoQztJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsMEJBQWtCO09BQWxCLHVCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25pcHBldHMvbnVldmEtcHVibGljYWNpb24vbnVldmEtcHVibGljYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUp1bGl1cytTYW5zK09uZVwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6MzAwLDQwMCw1MDAsNzAwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5K1NDOjQwMCw3MDAsOTAwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0K1N1YnJheWFkYTo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbi8qIEdFTkVSQUwgKi9cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5jb2xvci1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLyogTlVFVkEgUFVCTElDQUNJw5NOIENPTVBPTkVOVCAqL1xyXG5cclxuLm5ldy1iYWNrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MDcpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDByZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTIwMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5ldy1wdWJsaWMge1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG4udG9wIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTUlIGF1dG87XHJcbn1cclxuXHJcbi50b3AgaDMge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnRvcCAuY2VycmFyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDApO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b3AgLmNlcnJhcjpob3ZlciB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI0KTtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udG9wIGhyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udHlwZS1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4udHlwZS1zZWxlY3RvciBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBjcmltc29uIHNvbGlkO1xyXG59XHJcblxyXG4udHlwZS1zZWxlY3RvciBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggY3JpbXNvbiBzb2xpZDtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG4uZXN0YXRlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4uaW1nLWMge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA0cHggd2hpdGUgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWctYyBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmVzdGF0ZSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICBib3JkZXI6IDJweCBjcmltc29uIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbTtcclxufVxyXG5cclxuLmVzdGF0ZSBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtOyBcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgYm9yZGVyOiAycHggY3JpbXNvbiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5lc3RhdGUgYnV0dG9uOmhvdmVyLFxyXG4uZXN0YXRlIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZXN0YXRlIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-back\">\n  <div class=\"new-public\">\n    <div class=\"top\">\n      <h3>Nueva publicación</h3>\n      <div class=\"cerrar\"><i class=\"fas fa-times\"></i></div>\n      <hr />\n    </div>\n    <!-- <div class=\"type-selector\">\n          <button id=\"states\">Estado</button>\n          <button id=\"longe\">Texto largo</button>\n      </div> -->\n    <div class=\"estate\">\n        <div class=\"img-c\">\n          <img [src]=\"Usuario.img\">\n        </div>\n      <form (submit)=\"crearPublicacion( formularioPublic )\" #formularioPublic=\"ngForm\">\n        <input\n          [(ngModel)]=\"nuevaPublicacion.content\"\n          name=\"content\"\n          placeholder=\"Escribe lo que quieras\"\n          minlength=\"1\"\n        >\n        <button type=\"submit\">Publicar</button>\n      </form>\n    </div>\n    <!-- <div class=\"long\">\n          <img src=\"../../assets/IMG/girl.png\">\n          <textarea placeholder=\"Escribe lo que quieras\" rows=\"15\"></textarea>\n          <button>Publicar</button>\n      </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NuevaPublicacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaPublicacionComponent", function() { return NuevaPublicacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_publications_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/publications.model */ "./src/app/models/publications.model.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");






var NuevaPublicacionComponent = /** @class */ (function () {
    function NuevaPublicacionComponent(api) {
        this.api = api;
        this.nuevaPublicacion = new src_app_models_publications_model__WEBPACK_IMPORTED_MODULE_2__["publicationModel"]();
        this.Usuario = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_5__["userModel"]();
        this.getUser();
    }
    NuevaPublicacionComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".new-back").hide();
            $(".cerrar").on("click", function () {
                $(".new-back").hide();
            });
            $(".new-public-c button").on("click", function () {
                $(".new-back").show();
            });
        });
    };
    NuevaPublicacionComponent.prototype.crearPublicacion = function (form) {
        if (form.invalid) {
            return;
        }
        /* console.log(this.nuevaPublicacion); */
        this.nuevaPublicacion.id_user = localStorage.getItem("_id");
        this.nuevaPublicacion.game_room_id = " ";
        this.nuevaPublicacion.id_character = " ";
        this.api.createPublication(this.nuevaPublicacion, 'http://localhost:3000/api/publications')
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                allowOutsideClick: false,
                type: 'success',
                text: 'Listo!'
            });
        });
    };
    NuevaPublicacionComponent.prototype.getUser = function () {
        var _this = this;
        this.api
            .getElement(localStorage.getItem("_id"), "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.Usuario.Bdate = res["Usuario"].Bdate;
            _this.Usuario.email = res["Usuario"].email;
            _this.Usuario.lastname = res["Usuario"].lastname;
            _this.Usuario.name = res["Usuario"].name;
            _this.Usuario.open = res["Usuario"].open;
            _this.Usuario.password = res["Usuario"].password;
            _this.Usuario._id = res["Usuario"]._id;
            _this.Usuario.friendList = res["Usuario"].friendList;
            _this.Usuario.img = res["Usuario"].img;
            _this.Usuario.level = res["Usuario"].level;
            _this.Usuario.uname = res["Usuario"].uname;
            _this.Usuario.cdate = res["Usuario"].cdate;
            _this.Usuario.followList = res["Usuario"].followList;
        });
    };
    NuevaPublicacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-publicacion',
            template: __webpack_require__(/*! ./nueva-publicacion.component.html */ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.html"),
            styles: [__webpack_require__(/*! ./nueva-publicacion.component.css */ "./src/app/components/snippets/nueva-publicacion/nueva-publicacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"]])
    ], NuevaPublicacionComponent);
    return NuevaPublicacionComponent;
}());



/***/ }),

/***/ "./src/app/components/snippets/publicacion/publicacion.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/snippets/publicacion/publicacion.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Julius+Sans+One\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700,900\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700&display=swap\");\r\n/* GENERAL */\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n}\r\nbody {\r\n    position: relative;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1em;\r\n    background-color: whitesmoke;\r\n}\r\n/* PUBLICACIONES */\r\n/* PUBLICACIONES */\r\n.publicacion {\r\n    padding: 0 1rem;\r\n    margin: 1rem 0rem;\r\n    text-align: justify;\r\n}\r\n.publicacion-grid {\r\n    display: grid;\r\n    grid-template-columns: 10% auto;\r\n    grid-template-rows: auto auto;\r\n    -webkit-column-gap: 0.5rem;\r\n       -moz-column-gap: 0.5rem;\r\n            column-gap: 0.5rem;\r\n    row-gap: 0.2rem;\r\n}\r\n.publicacion-grid .image-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    justify-self: right;\r\n    align-self: center;\r\n}\r\n.image-container img{\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.nombre-u {\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n    grid-row-start: 1;\r\n    grid-row-end: 1;\r\n    margin: 0;\r\n    align-self: center;\r\n}\r\n.content-p {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n    grid-row-start: 2;\r\n    grid-row-end: 2;\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbmlwcGV0cy9wdWJsaWNhY2lvbi9wdWJsaWNhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RSw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHNGQUFzRjtBQUN0RixnR0FBZ0c7QUFFaEcsWUFBWTtBQUVaO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBR0Esa0JBQWtCO0FBR2xCLGtCQUFrQjtBQUVsQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QiwwQkFBa0I7T0FBbEIsdUJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NuaXBwZXRzL3B1YmxpY2FjaW9uL3B1YmxpY2FjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1KdWxpdXMrU2FucytPbmVcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjMwMCw0MDAsNTAwLDcwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzo0MDAsNzAwLDkwMFwiKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCtTdWJyYXlhZGE6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4vKiBHRU5FUkFMICovXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5cclxuLyogUFVCTElDQUNJT05FUyAqL1xyXG5cclxuXHJcbi8qIFBVQkxJQ0FDSU9ORVMgKi9cclxuXHJcbi5wdWJsaWNhY2lvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbi1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICByb3ctZ2FwOiAwLjJyZW07XHJcbn1cclxuXHJcbi5wdWJsaWNhY2lvbi1ncmlkIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGdyaWQtcm93LWVuZDogMTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm5vbWJyZS11IHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LXAge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgIGdyaWQtcm93LWVuZDogMjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/snippets/publicacion/publicacion.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/snippets/publicacion/publicacion.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"publicacion\">\n  <div class=\"publicacion-grid\">\n      <div routerLink=\"{{ide}}\" class=\"image-container\">\n          <img class=\"usu\" [src]=\"img\">\n      </div>\n      <p class=\"nombre-u\">{{ nombre }}</p>\n      <div class=\"content-p\">\n          <p>{{ publication.content }}</p>\n      </div>\n  </div>\n</div>\n<hr>"

/***/ }),

/***/ "./src/app/components/snippets/publicacion/publicacion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/snippets/publicacion/publicacion.component.ts ***!
  \**************************************************************************/
/*! exports provided: PublicacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionComponent", function() { return PublicacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_publications_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/publications.model */ "./src/app/models/publications.model.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-service.service */ "./src/app/services/api-service.service.ts");




var PublicacionComponent = /** @class */ (function () {
    function PublicacionComponent(api) {
        this.api = api;
        this.publication = new _models_publications_model__WEBPACK_IMPORTED_MODULE_2__["publicationModel"]();
    }
    PublicacionComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    PublicacionComponent.prototype.getData = function () {
        var _this = this;
        this.api
            .getElement(this.id, "http://localhost:3000/api/publications")
            .subscribe(function (res) {
            _this.publication.content = res["Usuario"].content;
            _this.publication.id_user = res["Usuario"].id_user;
            _this.publication.id_character = res["Usuario"].id_character;
            _this.publication.game_room_id = res["Usuario"].game_room_id;
            if (_this.publication.game_room_id === " ") {
                _this.getUser();
            }
            else {
                if ((_this.publication.id_character === " ")) {
                    _this.getUser();
                }
                else {
                    _this.getChar();
                }
            }
        });
    };
    PublicacionComponent.prototype.getUser = function () {
        var _this = this;
        this.api
            .getElement(this.publication.id_user, "http://localhost:3000/api/users")
            .subscribe(function (res) {
            _this.nombre = res["Usuario"].uname;
            _this.img = res["Usuario"].img;
            _this.id = "/profile/" + res["Usuario"]._id;
        });
    };
    PublicacionComponent.prototype.getChar = function () {
        var _this = this;
        this.api
            .getElement(this.publication.id_character, "http://localhost:3000/api/characters")
            .subscribe(function (res) {
            _this.nombre = res["Usuario"].name;
            _this.img = res["Usuario"].img;
            _this.id = "/personaje/" + res["Usuario"]._id;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PublicacionComponent.prototype, "id", void 0);
    PublicacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-publicacion",
            template: __webpack_require__(/*! ./publicacion.component.html */ "./src/app/components/snippets/publicacion/publicacion.component.html"),
            styles: [__webpack_require__(/*! ./publicacion.component.css */ "./src/app/components/snippets/publicacion/publicacion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service_service__WEBPACK_IMPORTED_MODULE_3__["APIServiceService"]])
    ], PublicacionComponent);
    return PublicacionComponent;
}());



/***/ }),

/***/ "./src/app/models/character.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/character.model.ts ***!
  \*******************************************/
/*! exports provided: characterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterModel", function() { return characterModel; });
var characterModel = /** @class */ (function () {
    function characterModel() {
        this.friendList = [];
    }
    return characterModel;
}());



/***/ }),

/***/ "./src/app/models/chat-room.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/chat-room.model.ts ***!
  \*******************************************/
/*! exports provided: chatRoomModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatRoomModel", function() { return chatRoomModel; });
var chatRoomModel = /** @class */ (function () {
    function chatRoomModel() {
        this.id_users = [];
        this.id_characters = [];
        this.id_masters = [];
    }
    return chatRoomModel;
}());



/***/ }),

/***/ "./src/app/models/fichas.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/fichas.model.ts ***!
  \****************************************/
/*! exports provided: fichaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fichaModel", function() { return fichaModel; });
var fichaModel = /** @class */ (function () {
    function fichaModel() {
    }
    return fichaModel;
}());



/***/ }),

/***/ "./src/app/models/game-room.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/game-room.model.ts ***!
  \*******************************************/
/*! exports provided: gameRoomModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameRoomModel", function() { return gameRoomModel; });
var gameRoomModel = /** @class */ (function () {
    function gameRoomModel() {
        this.players = [];
    }
    return gameRoomModel;
}());



/***/ }),

/***/ "./src/app/models/messages.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/messages.model.ts ***!
  \******************************************/
/*! exports provided: messagesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesModel", function() { return messagesModel; });
var messagesModel = /** @class */ (function () {
    function messagesModel() {
    }
    return messagesModel;
}());



/***/ }),

/***/ "./src/app/models/publications.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/publications.model.ts ***!
  \**********************************************/
/*! exports provided: publicationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicationModel", function() { return publicationModel; });
var publicationModel = /** @class */ (function () {
    function publicationModel() {
        this.numLikes = 0;
        this.game_room_id = null;
    }
    return publicationModel;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: userModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userModel", function() { return userModel; });
var userModel = /** @class */ (function () {
    function userModel() {
        this.Bdate = new Date(2000, 2, 9);
        this.open = true;
        this.friendList = [];
        this.followList = [];
    }
    return userModel;
}());



/***/ }),

/***/ "./src/app/services/api-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: APIServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIServiceService", function() { return APIServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var APIServiceService = /** @class */ (function () {
    /*  readonly URL_API: string = 'http://localhost:3000/api/characters'; */
    function APIServiceService(http) {
        this.http = http;
        this._refreshNedeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(APIServiceService.prototype, "refreshNedeed$", {
        get: function () {
            return this._refreshNedeed$;
        },
        enumerable: true,
        configurable: true
    });
    APIServiceService.prototype.getElemets = function (URL_API) {
        return this.http.get(URL_API);
    };
    APIServiceService.prototype.getElement = function (_id, URL_API) {
        return this.http.get(URL_API + ("/" + _id));
    };
    APIServiceService.prototype.createCharacter = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyCharacter = function (character, URL_API) {
        var _this = this;
        console.log(character._id);
        return this.http.put(URL_API + ("/" + character._id), character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.createUser = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyUser = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createBlogPublic = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyBlogPublic = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createChatRoom = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyChatRoom = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createfichas = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyfichas = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createGameRoom = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyGameRoom = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createMaster = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyMaster = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createMessage = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyMessage = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.createPublication = function (character, URL_API) {
        var _this = this;
        return this.http.post(URL_API, character)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._refreshNedeed$.next();
        }));
    };
    APIServiceService.prototype.modifyPublication = function (character, URL_API) {
        return this.http.put(URL_API + ("/" + character._id), character);
    };
    APIServiceService.prototype.deleteElement = function (_id, URL_API) {
        return this.http.delete(URL_API + ("/" + _id));
    };
    APIServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], APIServiceService);
    return APIServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Carolina\Documents\GitHub\mean-rol\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map