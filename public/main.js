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
/* harmony import */ var _course_champion_course_champion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-champion/course-champion.component */ "./src/app/course-champion/course-champion.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");





var routes = [
    { path: '', component: _course_champion_course_champion_component__WEBPACK_IMPORTED_MODULE_3__["CourseChampionComponent"], data: { depth: 1 } },
    { path: 'file', component: _file_file_component__WEBPACK_IMPORTED_MODULE_4__["FileComponent"], data: { depth: 2 } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.title = 'course-champion';
        this.items = db.collection('files').valueChanges();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _course_champion_course_champion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-champion/course-champion.component */ "./src/app/course-champion/course-champion.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");

//Default import




//Firebase import







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _course_champion_course_champion_component__WEBPACK_IMPORTED_MODULE_10__["CourseChampionComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_11__["FileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                //Firebase
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'coursechampion'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"] // imports firebase/storage only needed for storage features
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course-champion/course-champion.component.html":
/*!****************************************************************!*\
  !*** ./src/app/course-champion/course-champion.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" style=\"height: 160px; width: 100vw;\">\n  <div id=\"wrap\">\n    <input #box id=\"search\" name=\"search\" type=\"text\" placeholder=\"What're we looking for ?\" (keyup.enter)=\"search(box.value)\"><input id=\"search_submit\" value=\"Rechercher\" type=\"submit\">\n  </div>\n</div>\n<div id=\"content\" style=\"display: flex;\">\n  <app-file></app-file>\n</div>\n{{this.subject}}\n"

/***/ }),

/***/ "./src/app/course-champion/course-champion.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/course-champion/course-champion.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrap {\n  margin: 50px 100px;\n  display: inline-block;\n  position: relative;\n  height: 60px;\n  float: right;\n  padding: 0; }\n\ninput[type=\"text\"] {\n  height: 60px;\n  font-size: 55px;\n  display: inline-block;\n  font-family: \"Lato\";\n  font-weight: 100;\n  border: none;\n  outline: none;\n  color: #555;\n  padding: 3px;\n  padding-right: 60px;\n  width: 0px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: none;\n  z-index: 3;\n  transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n  cursor: pointer; }\n\ninput[type=\"text\"]:focus:hover {\n  border-bottom: 1px solid #BBB; }\n\ninput[type=\"text\"]:focus {\n  width: 700px;\n  z-index: 1;\n  border-bottom: 1px solid #BBB;\n  cursor: text; }\n\ninput[type=\"submit\"] {\n  height: 67px;\n  width: 63px;\n  display: inline-block;\n  color: red;\n  float: right;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;\n  text-indent: -10000px;\n  border: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0.4;\n  cursor: pointer;\n  transition: opacity .4s ease; }\n\ninput[type=\"submit\"]:hover {\n  opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLWNoYW1waW9uL2M6XFxVc2Vyc1xcUG93bnRoZXAgTGFva2h1bnRob3RcXERlc2t0b3BcXGNvdXJzZS1jaGFtcGlvbi9zcmNcXGFwcFxcY291cnNlLWNoYW1waW9uXFxjb3Vyc2UtY2hhbXBpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtREFBOEQ7RUFDOUQsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFVBQVM7RUFDVCxZQUFZO0VBQ1osMnNCQUEyc0I7RUFDM3NCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1jaGFtcGlvbi9jb3Vyc2UtY2hhbXBpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcCB7XHJcbiAgICBtYXJnaW46IDUwcHggMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC40cyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuNzk1LCAwLjAwMCwgMS4wMDApO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1czpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JCQjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkJCO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBRE5RVEZSRlUxTlQ5ZlgxbEpTVVhsNWUxZFhWZm41K2MzTno2dXJxdjcrL3RMUzBpWW1KcWFtcG41K2Z5c3JLMzkvZmFXbHAvLy8vVmk0Wnl3QUFBQkYwVWs1VC8vLy8vLy8vLy8vLy8vLy8vLy8vL3dBbHJabGlBQUFCTGtsRVFWUjQyclNXV1JiRElBaEZIZU9VdE4zL2FnczF6YUE0Y0hyS1o4SkZSSHdvWGt3VHZ3R1AxUW8wYllPYkFQd2lMbWJOQUhCV0ZCWmxEOWowSnhmbERWaUlPYk5IRy9EbzhQUkhUSmswVGV6QWh2N3Fsb0swSkpFQmgrRjgrVS9ob3BJRUxPV2ZpWlVDRE9aRDFSQURPUUtBNzVvcTRjdlZrY1QrT2RIbnFxcFFDSVRXQWpuV1ZnR1FVV3oxMmxKdUd3R29hV2dCS3pSVkJjQ3lwZ1VrT0FvV2dCWC9MMENteE40MHU2eHdjSUoxY096V1lEZmZwM2F4c1FPeXZka1hpSDlGS1JGd1BSSFlaVWFYTWdQTGVpVzdRaGJEUmNpeUxYSmFLaGVDdUxiaVZvcXgxRFZSeUgyNnliMGhzdW9PRkVQc296K0JWRTBNUmxaTmpHWmNSUXlIWWttTXAyaEJUSXpka3pDVGMvcExxT25Ccms3L3laZEFPcS9xNU5QQkgxZjd4N2ZHUDRDM0FBTUFRcmh6WDl6aGNHc0FBQUFBU1VWT1JLNUNZSUk9KSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgIHRleHQtaW5kZW50OiAtMTAwMDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/course-champion/course-champion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/course-champion/course-champion.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseChampionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseChampionComponent", function() { return CourseChampionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file/file.component */ "./src/app/file/file.component.ts");



var CourseChampionComponent = /** @class */ (function () {
    function CourseChampionComponent() {
        this.subject = "";
    }
    CourseChampionComponent.prototype.ngOnInit = function () {
    };
    CourseChampionComponent.prototype.search = function (value) {
        this.fileComponent.subjectSearch(value);
        //console.log(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_file_file_component__WEBPACK_IMPORTED_MODULE_2__["FileComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _file_file_component__WEBPACK_IMPORTED_MODULE_2__["FileComponent"])
    ], CourseChampionComponent.prototype, "fileComponent", void 0);
    CourseChampionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-champion',
            template: __webpack_require__(/*! ./course-champion.component.html */ "./src/app/course-champion/course-champion.component.html"),
            styles: [__webpack_require__(/*! ./course-champion.component.scss */ "./src/app/course-champion/course-champion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourseChampionComponent);
    return CourseChampionComponent;
}());



/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"items\" *ngFor=\"let item of items | async\" style=\"text-align: center;\">\n      <img src=\"../assets/pdf.svg\" alt=\"\" style=\"width: 100px; height: 250px; display: block;\n      margin-left: auto;\n      margin-right: auto;\">\n      <div class=\"project-name\">\n        <p>{{item.name}}</p>\n      </div>\n    </div>   \n</div>"

/***/ }),

/***/ "./src/app/file/file.component.scss":
/*!******************************************!*\
  !*** ./src/app/file/file.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 80vw;\n  height: 350px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-template-rows: 1fr;\n  grid-gap: 15px; }\n\n.items {\n  border-radius: 5px;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  grid-gap: 10px;\n  cursor: pointer;\n  border: 3px dotted black;\n  transition: all 0.6s; }\n\n.icon-wrapper, .project-name {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.icon-wrapper i {\n  font-size: 100px;\n  color: #555;\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n  transition: all 0.6s; }\n\n.icon-wrapper {\n  align-self: end; }\n\n.project-name {\n  align-self: start; }\n\n.project-name p {\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  color: #555;\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px);\n  transition: all 0.5s; }\n\n.items:hover {\n  border: 3px solid #555; }\n\n.items:hover .project-name p {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n\n.items:hover .icon-wrapper i {\n    -webkit-transform: translateY(5px);\n            transform: translateY(5px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS9jOlxcVXNlcnNcXFBvd250aGVwIExhb2todW50aG90XFxEZXNrdG9wXFxjb3Vyc2UtY2hhbXBpb24vc3JjXFxhcHBcXGZpbGVcXGZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQUUsT0FBTztFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQ3BDLFlBQVk7RUFDWixzQkFBc0I7RUFFdEIsYUFBYTtFQUNiLDJEQUE2RDtFQUM3RCx1QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLG9CQUFvQixFQUFBOztBQUl0QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBbkNRO0VBb0NSLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBbkRRO0VBb0RSLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usc0JBekRRLEVBQUE7O0FBd0RWO0lBSUksb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBOztBQUpoQztJQU9JLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmk6ICNGRDI1NDk7XHJcbiRzZWM6ICM1NTU7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogODB2dztcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSApO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAzcHggZG90dGVkIGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcblxyXG5cclxuLmljb24td3JhcHBlciwgLnByb2plY3QtbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbi13cmFwcGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6ICRzZWM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbn1cclxuXHJcbi5pY29uLXdyYXBwZXIge1xyXG4gIGFsaWduLXNlbGY6IGVuZDsgIFxyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lIHtcclxuICBhbGlnbi1zZWxmOiBzdGFydDtcclxufVxyXG4ucHJvamVjdC1uYW1lIHAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiAkc2VjOyAgXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5pdGVtczpob3ZlciB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHNlYztcclxuICBcclxuICAmIC5wcm9qZWN0LW5hbWUgcCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxuICAmIC5pY29uLXdyYXBwZXIgaSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FileComponent = /** @class */ (function () {
    function FileComponent(db) {
        this.db = db;
        this.subject = "";
        this.selected = false;
        this.items = db.collection('files', function (ref) { return ref.limit(5); }).valueChanges();
    }
    FileComponent.prototype.ngOnInit = function () {
    };
    FileComponent.prototype.subjectSearch = function (subject) {
        this.selected = false;
        if (subject.length == 0) {
            this.items = this.db.collection('files', function (ref) { return ref.limit(5); }).valueChanges();
        }
        else {
            this.items = this.db.collection('files', function (ref) { return ref.orderBy('file_name')
                .startAt(subject)
                .endAt(subject + "\uf8ff"); }).valueChanges();
        }
    };
    FileComponent.prototype.test = function () {
        console.log("Hello world");
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.scss */ "./src/app/file/file.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FileComponent);
    return FileComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyA1IyHPGgIYN63cREuDxuwgYoMqyImtF8E",
        authDomain: "course-chapion.firebaseapp.com",
        databaseURL: "https://course-chapion.firebaseio.com",
        projectId: "course-chapion",
        storageBucket: "course-chapion.appspot.com",
        messagingSenderId: "639700191623"
    }
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Pownthep Laokhunthot\Desktop\course-champion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map