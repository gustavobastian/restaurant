"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactComp\": () => (/* binding */ contactComp)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\n\n\nconst contactComp= ()=>{    \n        console.log(\"contact\")\n        const contentElement = document.createElement('div');                \n        let textElement = document.createElement('div');\n        textElement.className = \"textBottom\";\n        let snippet2 = document.createTextNode(\"for contact, send email to: juanito@juanito-rest.com\");\n        textElement.appendChild(snippet2);\n        contentElement.appendChild(textElement);\n        return contentElement;    \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction component(){\n    let contentElement=document.createElement('div') \n    contentElement.className=\"mainContent\";\n    //generating header\n    let headerElement=document.createElement('header');\n    let headerDiv=document.createElement('div');\n    let headerDiv2=document.createElement('div');\n    let headerDiv3=document.createElement('div');    \n    let headerDiv5=document.createElement('div');\n    headerDiv.innerHTML=\"<p> </p>\";\n    headerDiv2.innerHTML=\"<p> </p>\";\n    headerDiv3.innerHTML=\"<p>  </p>\";\n    \n    headerDiv5.innerHTML=\"<p>   </p>\";\n    \n    \n    let navBarClass=document.createElement('div');\n    navBarClass.className=\"navBarClass\";\n\n    let navBarL=document.createElement('div');\n    let snippetL = document.createTextNode(\"Home\");\n    navBarL.className=\"navBarText\";\n    navBarL.appendChild(snippetL)\n\n    let navBarR=document.createElement('div');\n    let snippetR = document.createTextNode(\"Contact\");\n    navBarR.className=\"navBarText\";\n    navBarR.appendChild(snippetR)\n    \n    let navBarC=document.createElement('div');\n    let snippetC = document.createTextNode(\"Menu\");\n    navBarC.appendChild(snippetC)\n    navBarC.className=\"navBarText\";\n\n    navBarClass.appendChild(navBarL);\n    navBarClass.appendChild(navBarC);\n    navBarClass.appendChild(navBarR);\n\n    let navBar= document.createElement('div'); \n    let snippetLocal = document.createTextNode(\"Restaurant Juanito\");\n    navBar.appendChild(snippetLocal);\n    navBar.className=\"titleClass\";\n    headerElement.appendChild(headerDiv);\n    headerElement.appendChild(navBar);\n    headerElement.appendChild(headerDiv2);\n    headerElement.appendChild(headerDiv3);\n    headerElement.appendChild(navBarClass);\n    headerElement.appendChild(headerDiv5);\n\n    contentElement.appendChild(headerElement)\n    let homeContent= document.createElement('div');    \n    contentElement.appendChild(homeContent);\n    let menuContent= document.createElement('div');    \n    contentElement.appendChild(menuContent);\n    let contactContent= document.createElement('div');    \n    contentElement.appendChild(contactContent);\n\n    ///dinamic content\n    let homeEl = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeComp)();\n    contentElement.appendChild(homeEl);\n    let menuEl = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuComp)();\n    contentElement.appendChild(menuEl);\n    let contactEl = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactComp)();\n    contentElement.appendChild(contactEl);\n\n    //generating footer\n\n    let footerContent=document.createElement('div');\n    footerContent.className=\"textFooter\";\n    let snippetFooter = document.createTextNode(\"Image from Wikimedia Commons by:Simon Burchell\");       \n    footerContent.appendChild(snippetFooter);\n    contentElement.appendChild(footerContent);\n\n    return contentElement;\n}\ndocument.body.appendChild(component());\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuComp\": () => (/* binding */ menuComp)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Choripan_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choripan.png */ \"./src/Choripan.png\");\n/* harmony import */ var _Caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Caesar_salad.jpg */ \"./src/Caesar_salad.jpg\");\n\n\n\n\nconst menuComp= ()=>{    \n    console.log(\"here\")\n    const allcontentElement = document.createElement('div');\n\n    const contentElement = document.createElement('div');\n    contentElement.style.cssText=\"display:flex;flex-direction:row;justify-content:space-between;\"\n    let imgContent = document.createElement('div');\n    imgContent.className = \"centerImage\";\n    let imgElement = new Image();\n    imgElement.src = _Choripan_png__WEBPACK_IMPORTED_MODULE_1__;\n    imgElement.style.cssText = \"border-radius:100px; \";\n    imgContent.appendChild(imgElement);\n    contentElement.appendChild(imgContent);\n    let textElement = document.createElement('div');\n    textElement.className = \"textMenu\";\n    let snippet2 = document.createTextNode(\"The choripan is a sandwich from Argentina. \");\n    textElement.appendChild(snippet2);\n    contentElement.appendChild(textElement);\n\n    let textElement2 = document.createElement('div');\n    textElement2.className = \"textMenu\";\n    let snippet3 = document.createTextNode(\"Price: 100 $\");\n    textElement2.appendChild(snippet3);\n    contentElement.appendChild(textElement2);\n\n\n    const contentElement2 = document.createElement('div');\n    contentElement2.style.cssText=\"display:flex;flex-direction:row;justify-content:space-between;\"\n    let imgContent3c = document.createElement('div');\n    imgContent3c.className = \"centerImage\";\n    let imgElement3c = new Image();\n    imgElement3c.src = _Caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    imgElement3c.style.cssText = \"border-radius:100px; \";\n    imgContent3c.appendChild(imgElement3c);\n    contentElement2.appendChild(imgContent3c);\n    let textElementC = document.createElement('div');\n    textElement.className = \"textMenu\";\n    let snippetC = document.createTextNode(\"The Caesar salad is light. \");\n    textElementC.appendChild(snippetC);\n    contentElement2.appendChild(textElementC);\n\n    let textElement2C = document.createElement('div');\n    textElement2C.className = \"textMenu\";\n    let snippet3C = document.createTextNode(\"Price: 50 $\");\n    textElement2C.appendChild(snippet3C);\n    contentElement2.appendChild(textElement2C);\n\n\n    allcontentElement.appendChild(contentElement);\n    allcontentElement.appendChild(contentElement2);\n    \n    return allcontentElement;    \n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/Caesar_salad.jpg":
/*!******************************!*\
  !*** ./src/Caesar_salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d45871435afd0d51100f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/Caesar_salad.jpg?");

/***/ }),

/***/ "./src/Choripan.png":
/*!**************************!*\
  !*** ./src/Choripan.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c2ba77c43aeb700b674.png\";\n\n//# sourceURL=webpack://restaurant/./src/Choripan.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);