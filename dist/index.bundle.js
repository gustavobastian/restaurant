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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactComp\": () => (/* binding */ contactComp)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\n\n\nconst contactComp= ()=>{    \n        console.log(\"contact\")\n\n        const globalElement = document.createElement('div');   \n        globalElement.style.cssText=\"display:flex;flex-direction:column;justify-content:center;text-align:center;\"             \n\n        ///mail \n        const contentElement = document.createElement('div');                \n        let textElement = document.createElement('div');\n        textElement.className = \"textContact\";\n        let snippet3 = document.createTextNode(\"for contact, send email to: juanito@juanito-rest.com\");\n        textElement.appendChild(snippet3);\n        contentElement.appendChild(textElement);\n\n\n        ///showing a map\n        const contentElement2 = document.createElement('H2');                \n        let snippet2 = document.createTextNode(\"Or visit us:\");\n        contentElement2.appendChild(snippet2);\n\n        const contentElement3 = document.createElement('div');                \n        contentElement3.innerHTML=\" <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2848963682663!2d-60.75319641198171!3d-31.66849121382591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a88a875bc171%3A0x3ab6de74b58a36f1!2sPuente%20Carretero%20Santa%20Fe%20-%20Santo%20Tom%C3%A9!5e0!3m2!1ses-419!2sar!4v1680125825690!5m2!1ses-419!2sar' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>\"\n        contentElement3.style.cssText=\"display:flex;justify-content:center;width:100%\";\n        globalElement.appendChild(contentElement);\n        globalElement.appendChild(contentElement2);\n        globalElement.appendChild(contentElement3);\n\n        return globalElement;    \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction component(){\n    let contentElement=document.createElement('div') \n    contentElement.className=\"mainContent\";\n    //generating header\n    let headerElement=document.createElement('header');\n    let headerDiv=document.createElement('div');\n    let headerDiv2=document.createElement('div');\n    let headerDiv3=document.createElement('div');    \n    let headerDiv5=document.createElement('div');\n    headerDiv.innerHTML=\"<p> </p>\";\n    headerDiv2.innerHTML=\"<p> </p>\";\n    headerDiv3.innerHTML=\"<p>  </p>\";\n    \n    headerDiv5.innerHTML=\"<p>   </p>\";\n    \n    \n    let navBarClass=document.createElement('div');\n    navBarClass.className=\"navBarClass\";\n\n    let navBarL=document.createElement('div');\n    let snippetL = document.createTextNode(\"Home\");\n    navBarL.className=\"navBarText\";    \n    navBarL.appendChild(snippetL)\n    navBarL.addEventListener(\"click\",onLeft)\n\n    let navBarR=document.createElement('div');\n    let snippetR = document.createTextNode(\"Contact\");\n    navBarR.className=\"navBarText\";\n    navBarR.appendChild(snippetR)\n    navBarR.addEventListener(\"click\",onRight)\n    \n    let navBarC=document.createElement('div');\n    let snippetC = document.createTextNode(\"Menu\");\n    navBarC.appendChild(snippetC)\n    navBarC.className=\"navBarText\";\n    navBarC.addEventListener(\"click\",onCenter)\n\n    navBarClass.appendChild(navBarL);\n    navBarClass.appendChild(navBarC);\n    navBarClass.appendChild(navBarR);\n\n    let navBar= document.createElement('div'); \n    let snippetLocal = document.createTextNode(\"JUANITO's Restaurant\");\n    navBar.appendChild(snippetLocal);\n    navBar.className=\"titleClass\";\n    headerElement.appendChild(headerDiv);\n    headerElement.appendChild(navBar);\n    headerElement.appendChild(headerDiv2);\n    headerElement.appendChild(headerDiv3);\n    headerElement.appendChild(navBarClass);\n    headerElement.appendChild(headerDiv5);\n\n    contentElement.appendChild(headerElement)\n    let homeContent= document.createElement('div');    \n    contentElement.appendChild(homeContent);\n    let menuContent= document.createElement('div');    \n    contentElement.appendChild(menuContent);\n    let contactContent= document.createElement('div');    \n    contentElement.appendChild(contactContent);\n\n    ///dinamic content\n    let dinamicContentElement=document.createElement('div') \n    dinamicContentElement.id=\"dinamicContent\";\n    dinamicContentElement.className=\"dinamicContent\"\n    let homeEl = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeComp)();//initial page home\n    dinamicContentElement.appendChild(homeEl);\n    contentElement.appendChild(dinamicContentElement);\n\n\n    //generating footer\n\n    let footerContent=document.createElement('div');\n    footerContent.className=\"textFooter\";\n    let snippetFooter = document.createTextNode(\"All images from Wikimedia Commons (Simon Burchell,Finn McMissile,stu_spivack,Susan Slater)\");       \n    footerContent.appendChild(snippetFooter);\n    contentElement.appendChild(footerContent);\n\n    return contentElement;\n}\n\nfunction onLeft() {\n    console.log(\"Left Cliked\");\n    let element=document.getElementById(\"dinamicContent\");\n    element.innerHTML=\" \";\n    let homeEl = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeComp)();\n    element.appendChild(homeEl);\n    \n}\nfunction onRight() {\n    console.log(\"Right Cliked\");\n    let element=document.getElementById(\"dinamicContent\");\n    element.innerHTML=\" \";    \n    let contactEl = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactComp)();\n    element.appendChild(contactEl);\n    \n}\nfunction onCenter() {\n    console.log(\"Center Cliked\");\n    let element=document.getElementById(\"dinamicContent\");\n    element.innerHTML=\" \";        \n    \n    let menuEl = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuComp)();\n    element.appendChild(menuEl);    \n}\ndocument.body.appendChild(component());\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuComp\": () => (/* binding */ menuComp)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Choripan_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choripan.png */ \"./src/Choripan.png\");\n/* harmony import */ var _Caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Caesar_salad.jpg */ \"./src/Caesar_salad.jpg\");\n/* harmony import */ var _glass_water_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glass_water.jpg */ \"./src/glass_water.jpg\");\n\n\n\n\n\nconst menuComp= ()=>{    \n    console.log(\"here\")\n    const allcontentElement = document.createElement('div');\n    allcontentElement.className=\"allMenu\";\n    //menu 1 choripan\n    const contentCard=document.createElement('div');\n    contentCard.className=\"menu\";\n    const contentElement = document.createElement('div');\n    contentElement.style.cssText=\"display:flex;flex-direction:row;justify-content:space-between;\"\n    let imgContent = document.createElement('div');\n    imgContent.className = \"menuImage\";\n    let imgElement = new Image();\n    imgElement.src = _Choripan_png__WEBPACK_IMPORTED_MODULE_1__;\n    imgElement.style.cssText = \"border-radius:100px; \";\n    imgContent.appendChild(imgElement);\n    contentElement.appendChild(imgContent);\n    let textElement = document.createElement('div');\n    textElement.className = \"textMenu\";\n    let snippet2 = document.createTextNode(\"The choripan is a sandwich from Argentina. \");\n    textElement.appendChild(snippet2);\n    contentElement.appendChild(textElement);\n\n    let textElement2 = document.createElement('div');\n    textElement2.className = \"textMenu\";\n    let snippet3 = document.createTextNode(\"Price: 100 $\");\n    textElement2.appendChild(snippet3);\n    contentElement.appendChild(textElement2);\n\n\n    //menu 2 Caesar Salad\n    const contentCard2=document.createElement('div');\n    contentCard2.className=\"menu\";\n    const contentElement2 = document.createElement('div');\n    contentElement2.style.cssText=\"display:flex;flex-direction:row;justify-content:space-between;\"\n    let imgContent3c = document.createElement('div');\n    imgContent3c.className = \"menuImage\";\n    let imgElement3c = new Image();\n    imgElement3c.src = _Caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    imgElement3c.style.cssText = \"border-radius:100px; \";\n    imgContent3c.appendChild(imgElement3c);\n    contentElement2.appendChild(imgContent3c);\n    let textElementC = document.createElement('div');\n    textElementC.className = \"textMenu\";\n    let snippetC = document.createTextNode(\"The Caesar salad is light. \");\n    textElementC.appendChild(snippetC);\n    contentElement2.appendChild(textElementC);\n\n    let textElement2C = document.createElement('div');\n    textElement2C.className = \"textMenu\";\n    let snippet3C = document.createTextNode(\"Price: 50 $\");\n    textElement2C.appendChild(snippet3C);\n    contentElement2.appendChild(textElement2C);\n\n    //menu 2 Caesar Salad\n    const contentCard3=document.createElement('div');\n    contentCard3.className=\"menu\";\n    const contentElement3 = document.createElement('div');\n    contentElement3.style.cssText=\"display:flex;flex-direction:row;justify-content:space-between;\"\n    let imgContent4c = document.createElement('div');\n    imgContent4c.className = \"menuImage\";\n    let imgElement4c = new Image();\n    imgElement4c.src = _glass_water_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    imgElement4c.style.cssText = \"border-radius:100px; \";\n    imgContent4c.appendChild(imgElement4c);\n    contentElement3.appendChild(imgContent4c);\n    let textElement4C = document.createElement('div');\n    textElement4C.className = \"textMenu\";\n    let snippet4C = document.createTextNode(\"Water... Ideal for all meals.\");\n    textElement4C.appendChild(snippet4C);\n    contentElement3.appendChild(textElement4C);\n\n    let textElement5C = document.createElement('div');\n    textElement5C.className = \"textMenu\";\n    let snippet5C = document.createTextNode(\"Price: 10 $\");\n    textElement5C.appendChild(snippet5C);\n    contentElement3.appendChild(textElement5C);\n\n    //add cards\n    contentCard.appendChild(contentElement);\n    contentCard2.appendChild(contentElement2)\n    contentCard3.appendChild(contentElement3)\n    allcontentElement.appendChild(contentCard);\n    allcontentElement.appendChild(contentCard2);\n    allcontentElement.appendChild(contentCard3);\n    \n    return allcontentElement;    \n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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

/***/ }),

/***/ "./src/glass_water.jpg":
/*!*****************************!*\
  !*** ./src/glass_water.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f16230f99aaa984259c.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/glass_water.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);