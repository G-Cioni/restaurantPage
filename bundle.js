/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Caveat-VariableFont_wght.ttf */ "./src/Caveat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 0.5em auto 0 auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAAwC;AACzC;;AAEA;CACC,iCAAiC;CACjC,+BAA+B;AAChC;AACA;CACC,mBAAmB;CACnB,aAAa;CACb;;;wBAGuB;CACvB,uBAAuB;CACvB,aAAa;CACb;yCACwB;CACxB,qBAAqB;CACrB,4BAA4B;CAC5B,kCAAkC;CAClC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,eAAe;AAChB;AACA;CACC,mBAAmB;CACnB,iCAAiC;CACjC,4CAA4C;CAC5C,mBAAmB;CACnB,gBAAgB;CAChB,+BAA+B;;CAE/B,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;AAC1C;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,wCAAwC;CACxC,YAAY;CACZ,mBAAmB;CACnB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,wCAAwC;CACxC,mBAAmB;CACnB,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,4CAA4C;AAC7C;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,+BAA+B;;CAE/B,gBAAgB;CAChB,4CAA4C;CAC5C,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,wCAAwC;CACxC,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,gBAAgB;CAChB,4CAA4C;AAC7C;;AAEA;CACC,qBAAqB;CACrB,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA,cAAc;;AAEd;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,yBAAyB;CACzB,mDAAmD;CACnD,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,4CAA4C;CAC5C,mBAAmB;CACnB,WAAW;CACX,qBAAqB;AACtB;AACA;CACC,aAAa;CACb,gCAAgC;AACjC;;AAEA,iBAAiB;;AAEjB;CACC,gBAAgB;AACjB;;AAEA,kBAAkB;;AAElB;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC;EACC,aAAa;EACb,2BAA2B;CAC5B;CACA;EACC,cAAc;CACf;CACA;EACC,oBAAoB;CACrB;AACD;AACA;CACC;EACC,cAAc;CACf;CACA;EACC,kBAAkB;CACnB;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(./Caveat-VariableFont_wght.ttf);\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl('./background.jpg');\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 0.5em auto 0 auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/clearHtml.js":
/*!**************************!*\
  !*** ./src/clearHtml.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearHtml": () => (/* binding */ clearHtml)
/* harmony export */ });
function clearHtml() {
	document.getElementById('content').innerHTML = '';
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlSkeleton */ "./src/htmlSkeleton.js");
/* harmony import */ var _clearHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearHtml */ "./src/clearHtml.js");


// import map from './contact.jpg';

function createContact() {
	(0,_clearHtml__WEBPACK_IMPORTED_MODULE_1__.clearHtml)();
	(0,_htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__.htmlSkeleton)();

	const main = document.querySelector('main');
	const title = document.createElement('h1');
	title.textContent = 'Contact us';
	title.id = 'title';
	main.appendChild(title);

	const contact = document.createElement('div');
	contact.id = 'contact';
	main.appendChild(contact);
	const phone = document.createElement('p');
	phone.textContent = 'Phone: +1 212-123-0123';
	contact.appendChild(phone);
	const email = document.createElement('p');
	email.textContent = 'Email: info@drinks.com';
	contact.appendChild(email);
	const address = document.createElement('p');
	address.textContent =
		'Address: 57 Church St, New York, NY 10007, United States';
	contact.appendChild(address);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlSkeleton */ "./src/htmlSkeleton.js");
/* harmony import */ var _clearHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearHtml */ "./src/clearHtml.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createHome() {
	(0,_clearHtml__WEBPACK_IMPORTED_MODULE_1__.clearHtml)();
	(0,_htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__.htmlSkeleton)();
	const now = new Date();
	const main = document.querySelector('main');

	const welcome = document.createElement('h3');
	welcome.id = 'welcome';
	welcome.textContent = 'Welcome to';
	main.appendChild(welcome);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'ĐЯ/NK$';
	main.appendChild(restaurantName);

	const open = document.createElement('div');
	open.id = 'open';
	main.appendChild(open);

	const openHours = document.createElement('h4');
	openHours.id = 'openHours';
	if (now.getDay() > 5) {
		now.getHours() < 13
			? (openHours.textContent = 'ĐЯ/NK$ / CLOSED')
			: (openHours.textContent = 'ĐЯ/NK$ / OPEN');
	} else {
		now.getHours() < 19
			? (openHours.textContent = 'ĐЯ/NK$ / CLOSED')
			: (openHours.textContent = 'ĐЯ/NK$ / OPEN');
	}

	open.appendChild(openHours);

	const hours1 = document.createElement('h3');
	hours1.textContent = 'Mon - Fri: 19:00 - 24:00';
	open.appendChild(hours1);

	const hours2 = document.createElement('h3');
	hours2.textContent = 'Sat - Sun: 13:00 - 24:00';
	open.appendChild(hours2);

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'When it comes to the best rooftop bars in NYC, ĐЯ/NK$ is a place you have to visit to enjoy a drink. On top of the an incredible Hotel, this gorgeous bar offers stunning views of Manhattan. ĐЯ/NK$ also gets consistently recognized as one of the best rooftop bars in the world.';
	main.appendChild(paragraph);

	const menuBtn = document.createElement('button');
	menuBtn.textContent = 'Menu';
	menuBtn.addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());
	main.appendChild(menuBtn);
}


/***/ }),

/***/ "./src/htmlSkeleton.js":
/*!*****************************!*\
  !*** ./src/htmlSkeleton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "htmlSkeleton": () => (/* binding */ htmlSkeleton)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



// import background from './background.jpg';

// export function setBackground() {
// 	const content = document.getElementById(content);
// 	const myBackground = new Image();
// 	myBackground.src = background;
// 	content.appendChild(myBackground);
// }

function contentDiv() {
	const content = document.createElement('div');
	content.id = 'content';
	document.querySelector('body').appendChild(content);
}
function htmlSkeleton() {
	const content = document.getElementById('content');

	const header = document.createElement('header');
	content.appendChild(header);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'ĐЯ/NK$';
	header.appendChild(restaurantName);

	const homeTab = document.createElement('button');
	homeTab.classList.add('tab');
	homeTab.textContent = 'Home';
	homeTab.addEventListener('click', () => (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)());
	header.appendChild(homeTab);

	const menuTab = document.createElement('button');
	menuTab.classList.add('tab');
	menuTab.textContent = 'Menu';
	menuTab.addEventListener('click', () => (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)());
	header.appendChild(menuTab);

	const contactTab = document.createElement('button');
	contactTab.classList.add('tab');
	contactTab.textContent = 'Contact';
	contactTab.addEventListener('click', () => (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)());
	header.appendChild(contactTab);

	const main = document.createElement('main');
	content.appendChild(main);

	const footer = document.createElement('footer');
	footer.textContent = 'Copyright © 2021 gianlucacioni';
	content.appendChild(footer);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlSkeleton */ "./src/htmlSkeleton.js");
/* harmony import */ var _clearHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearHtml */ "./src/clearHtml.js");


function createMenu() {
	(0,_clearHtml__WEBPACK_IMPORTED_MODULE_1__.clearHtml)();
	(0,_htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__.htmlSkeleton)();
	const footer = document.querySelector('footer');
	footer.style.marginTop = '3em';

	const main = document.querySelector('main');
	const title = document.createElement('h1');
	title.id = 'title';
	title.textContent = 'Menu';
	main.appendChild(title);

	subMenuFactory('Wine');
	menuItemFactory(
		'Wine',
		'Ankida Ridge Vineyards Pinot Noir | 2017',
		'The palate is beautifully grippy and intense, and the finish is unbelievably bright and refreshing.',
		'11$'
	);
	menuItemFactory(
		'Wine',
		'Chene Bleu "Abelard" 2012',
		'Aromas of cooking herbs like rosemary and oregano, as well as brambly berries, give this wine an autumnal feel',
		'16$'
	);
	menuItemFactory(
		'Wine',
		'La Cana Navia Albariño | 2017',
		'Its depth of flavor plays off the aromas of pear, honeysuckle, and white pepper.',
		'8$'
	);
	menuItemFactory(
		'Wine',
		'Hermann J. Wiemer Dry Riesling | 2019',
		'The nose on this wine is full of floral, honey, and citrus notes that will awaken your senses.',
		'9$'
	);

	subMenuFactory('Cocktails');
	menuItemFactory(
		'Cocktails',
		'Jungle Bird',
		'It doesn’t get more classic than the Jungle Bird, which was reportedly invented in Kuala Lumpur, Malaysia, circa 1978. ',
		'14$'
	);
	menuItemFactory(
		'Cocktails',
		'Manhattan',
		'Spicy rye, sweet vermouth, and two dashes of Angostura, stirred, strained, and garnished with a brandied cherry can make you feel like a true class act.',
		'12$'
	);
	menuItemFactory(
		'Cocktails',
		'Moscow Mule',
		'This famous mug-dwelling drink contains ginger, vodka, lime, and soda.',
		'11$'
	);
	menuItemFactory(
		'Cocktails',
		'Penicillin',
		'Nothing cures the weary winter drinker like a Penicillin, made with blended Scotch, smoky Islay Scotch, lemon juice, and honey ginger simple syrup.',
		'11$'
	);

	subMenuFactory('Beers');
	menuItemFactory(
		'Beers',
		'Yazoo Dos Perros Brown Ale',
		"Dos Perros nails the brown ale's nutty malt character with a touch of chocolate, but lightens things up as Mexican brewers frequently do with flaked maize for a perfect balance.",
		'8$'
	);
	menuItemFactory(
		'Beers',
		'Guinness Draught Stout',
		'Guinness Draught Stout wrote the book on stouts, laying the groundwork for smooth and roasty dark beers with dreamy, creamy foam.',
		'10$'
	);
	menuItemFactory(
		'Beers',
		'Köstritzer Schwarzbier',
		'A schwarzbier is a traditional German style that combines the easy-drinking nature of a lager with the complex flavor profile of a porter or stout.',
		'9$'
	);
	menuItemFactory(
		'Beers',
		'Chimay Grande Reserve',
		'The Grande Reserve is a Belgian Strong Ale, which boasts a bouquet of caramel, toast, plum, fig, raisin, pepper, and perfume notes with a boozy warmth.',
		'12$'
	);
}

function menuItemFactory(subMenu, item, description, price) {
	const main = document.getElementById(subMenu);

	const card = document.createElement('div');
	card.classList.add('menu-card');

	const itemDiv = document.createElement('h3');
	itemDiv.textContent = item;
	itemDiv.classList.add('menu-card-item');
	card.appendChild(itemDiv);

	const descDiv = document.createElement('p');
	descDiv.textContent = description;
	descDiv.classList.add('menu-card-item');
	card.appendChild(descDiv);

	const priceDiv = document.createElement('h3');
	priceDiv.textContent = price;
	priceDiv.classList.add('menu-card-item');
	card.appendChild(priceDiv);

	main.appendChild(card);
}

function subMenuFactory(subMenuName) {
	const main = document.querySelector('main');
	const list = document.createElement('div');
	const subMenu = document.createElement('div');
	subMenu.classList.add('sub-menu');
	list.classList.add('list');
	list.id = subMenuName;
	const title = document.createElement('h2');
	title.textContent = subMenuName;
	title.classList.add('menu-title');
	subMenu.appendChild(title);
	subMenu.appendChild(list);
	main.appendChild(subMenu);
}


/***/ }),

/***/ "./src/Caveat-VariableFont_wght.ttf":
/*!******************************************!*\
  !*** ./src/Caveat-VariableFont_wght.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddaa3ca37faf96573328.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c25194018cf81ef6ad18.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _htmlSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlSkeleton */ "./src/htmlSkeleton.js");




(0,_htmlSkeleton__WEBPACK_IMPORTED_MODULE_2__.contentDiv)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNlO0FBQ1E7O0FBRTVDLHlEQUFVO0FBQ1YsaURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY2xlYXJIdG1sLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9odG1sU2tlbGV0b24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdDYXZlYXQnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxufVxcbiNjb250ZW50IHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAzMjAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDIuNWVtO1xcbn1cXG5cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxucCB7XFxuXFx0bWluLXdpZHRoOiAxNWVtO1xcblxcdG1heC13aWR0aDogMjVlbTtcXG59XFxuYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgyKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXG5cXHQvKiBjb2xvcjogcmdiYSgyNTMsIDE2NywgNTQsIDAuODkpOyAqL1xcblxcdHBhZGRpbmc6IDBlbSAwLjNlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuNDc5KTtcXG59XFxuaGVhZGVyIHtcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuLnRhYiB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcblxcdG1hcmdpbjogMHJlbSAxcmVtIDAuNHJlbSAxcmVtO1xcbn1cXG5cXG4jdGl0bGUge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcblxcbm1haW4ge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMmVtIDNlbTtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbiN3ZWxjb21lIHtcXG5cXHRtYXJnaW46IDAgMCAtMS4zZW0gMDtcXG59XFxuXFxuI29wZW4ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0cGFkZGluZy10b3A6IDFlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbn1cXG5cXG4jb3BlbkhvdXJzIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0Z3JpZC1hcmVhOiBmb290ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwYWRkaW5nLXRvcDogMC43NWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG5cXHQvKiBDb2RlIGZvciBGaXJlZm94ICovXFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMTQwLCAzMSwgMC4wNzUpO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMTQwLCAzMSwgMC4wNzUpO1xcbn1cXG5cXG4vKiBNZW51IFBhZ2UgKi9cXG5cXG4ubWVudS1jYXJkIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0d2lkdGg6IDE1ZW07XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG5cXHRtYXJnaW46IDAuNWVtIGF1dG8gMCBhdXRvO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWNhcmQtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuM2VtO1xcbn1cXG4ubGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3Qge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODY1cHgpIHtcXG5cXHRmb290ZXIge1xcblxcdFxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2NXB4KSB7XFxuXFx0Lmxpc3Qge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcblxcdH1cXG5cXHQubWVudS1jYXJkIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjdlbTtcXG5cXHR9XFxuXFx0Lm1lbnUtdGl0bGUge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDAuM2VtO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjRlbTtcXG5cXHR9XFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogeC1sYXJnZTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O3dCQUd1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiO3lDQUN3QjtDQUN4QixxQkFBcUI7Q0FDckIsNEJBQTRCO0NBQzVCLGtDQUFrQztDQUNsQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQyw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQiwrQkFBK0I7O0NBRS9CLHFDQUFxQztDQUNyQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsd0NBQXdDO0NBQ3hDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3Q0FBd0M7Q0FDeEMsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsK0JBQStCOztDQUUvQixnQkFBZ0I7Q0FDaEIsNENBQTRDO0NBQzVDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsd0NBQXdDO0NBQ3hDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0JBQStCO0NBQy9CLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQixxQ0FBcUM7QUFDdEM7O0FBRUEsY0FBYzs7QUFFZDtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsbURBQW1EO0NBQ25ELGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGdDQUFnQztBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBLGtCQUFrQjs7QUFFbEI7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUNBO0NBQ0M7RUFDQyxhQUFhO0VBQ2IsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLG9CQUFvQjtDQUNyQjtBQUNEO0FBQ0E7Q0FDQztFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdDYXZlYXQnO1xcblxcdHNyYzogdXJsKC4vQ2F2ZWF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcbn1cXG4jY29udGVudCB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0J2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcblxcdFxcdCcuIG1haW4gLidcXG5cXHRcXHQnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSxcXG5cXHRcXHR1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDMyMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi41ZW07XFxufVxcblxcbmgyIHtcXG5cXHRmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5wIHtcXG5cXHRtaW4td2lkdGg6IDE1ZW07XFxuXFx0bWF4LXdpZHRoOiAyNWVtO1xcbn1cXG5idXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiBDYXZlYXQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wODIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdC8qIGNvbG9yOiByZ2JhKDI1MywgMTY3LCA1NCwgMC44OSk7ICovXFxuXFx0cGFkZGluZzogMGVtIDAuM2VtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC40NzkpO1xcbn1cXG5oZWFkZXIge1xcblxcdGdyaWQtYXJlYTogaGVhZGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4udGFiIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxuXFx0bWFyZ2luOiAwcmVtIDFyZW0gMC40cmVtIDFyZW07XFxufVxcblxcbiN0aXRsZSB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRwYWRkaW5nOiAyZW0gM2VtO1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuI3dlbGNvbWUge1xcblxcdG1hcmdpbjogMCAwIC0xLjNlbSAwO1xcbn1cXG5cXG4jb3BlbiB7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXG5cXHRwYWRkaW5nLXRvcDogMWVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XFxufVxcblxcbiNvcGVuSG91cnMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRncmlkLWFyZWE6IGZvb3RlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjc1ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcblxcdC8qIENvZGUgZm9yIEZpcmVmb3ggKi9cXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNDAsIDMxLCAwLjA3NSk7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNDAsIDMxLCAwLjA3NSk7XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcblxcbi5tZW51LWNhcmQge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHR3aWR0aDogMTVlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcblxcdG1hcmdpbjogMC41ZW0gYXV0byAwIGF1dG87XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLm1lbnUtY2FyZC1pdGVtIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zdWItbWVudSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRtYXJnaW46IDFlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS4zZW07XFxufVxcbi5saXN0IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG5cXG4vKiBDb250YWN0IHBhZ2UgKi9cXG5cXG4jY29udGFjdCB7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4NjVweCkge1xcblxcdGZvb3RlciB7XFxuXFx0XFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODY1cHgpIHtcXG5cXHQubGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuXFx0fVxcblxcdC5tZW51LWNhcmQge1xcblxcdFxcdHBhZGRpbmc6IDAuN2VtO1xcblxcdH1cXG5cXHQubWVudS10aXRsZSB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCkge1xcblxcdG1haW4ge1xcblxcdFxcdHBhZGRpbmc6IDAuNGVtO1xcblxcdH1cXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiB4LWxhcmdlO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckh0bWwoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG59XG4iLCJpbXBvcnQgeyBodG1sU2tlbGV0b24gfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5pbXBvcnQgeyBjbGVhckh0bWwgfSBmcm9tICcuL2NsZWFySHRtbCc7XG4vLyBpbXBvcnQgbWFwIGZyb20gJy4vY29udGFjdC5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcblx0Y2xlYXJIdG1sKCk7XG5cdGh0bWxTa2VsZXRvbigpO1xuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cdHRpdGxlLmlkID0gJ3RpdGxlJztcblx0bWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuXHRtYWluLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXHRjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6ICsxIDIxMi0xMjMtMDEyMyc7XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXHRjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZW1haWwudGV4dENvbnRlbnQgPSAnRW1haWw6IGluZm9AZHJpbmtzLmNvbSc7XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXHRjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRhZGRyZXNzLnRleHRDb250ZW50ID1cblx0XHQnQWRkcmVzczogNTcgQ2h1cmNoIFN0LCBOZXcgWW9yaywgTlkgMTAwMDcsIFVuaXRlZCBTdGF0ZXMnO1xuXHRjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xufVxuIiwiaW1wb3J0IHsgaHRtbFNrZWxldG9uIH0gZnJvbSAnLi9odG1sU2tlbGV0b24nO1xuaW1wb3J0IHsgY2xlYXJIdG1sIH0gZnJvbSAnLi9jbGVhckh0bWwnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuXHRjbGVhckh0bWwoKTtcblx0aHRtbFNrZWxldG9uKCk7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cblx0Y29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHdlbGNvbWUuaWQgPSAnd2VsY29tZSc7XG5cdHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XG5cdG1haW4uYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cblx0Y29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRyZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICfEkNCvL05LJCc7XG5cdG1haW4uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG5cdGNvbnN0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0b3Blbi5pZCA9ICdvcGVuJztcblx0bWFpbi5hcHBlbmRDaGlsZChvcGVuKTtcblxuXHRjb25zdCBvcGVuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuXHRvcGVuSG91cnMuaWQgPSAnb3BlbkhvdXJzJztcblx0aWYgKG5vdy5nZXREYXkoKSA+IDUpIHtcblx0XHRub3cuZ2V0SG91cnMoKSA8IDEzXG5cdFx0XHQ/IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBDTE9TRUQnKVxuXHRcdFx0OiAob3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskIC8gT1BFTicpO1xuXHR9IGVsc2Uge1xuXHRcdG5vdy5nZXRIb3VycygpIDwgMTlcblx0XHRcdD8gKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIENMT1NFRCcpXG5cdFx0XHQ6IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBPUEVOJyk7XG5cdH1cblxuXHRvcGVuLmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XG5cblx0Y29uc3QgaG91cnMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0aG91cnMxLnRleHRDb250ZW50ID0gJ01vbiAtIEZyaTogMTk6MDAgLSAyNDowMCc7XG5cdG9wZW4uYXBwZW5kQ2hpbGQoaG91cnMxKTtcblxuXHRjb25zdCBob3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRob3VyczIudGV4dENvbnRlbnQgPSAnU2F0IC0gU3VuOiAxMzowMCAtIDI0OjAwJztcblx0b3Blbi5hcHBlbmRDaGlsZChob3VyczIpO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID1cblx0XHQnV2hlbiBpdCBjb21lcyB0byB0aGUgYmVzdCByb29mdG9wIGJhcnMgaW4gTllDLCDEkNCvL05LJCBpcyBhIHBsYWNlIHlvdSBoYXZlIHRvIHZpc2l0IHRvIGVuam95IGEgZHJpbmsuIE9uIHRvcCBvZiB0aGUgYW4gaW5jcmVkaWJsZSBIb3RlbCwgdGhpcyBnb3JnZW91cyBiYXIgb2ZmZXJzIHN0dW5uaW5nIHZpZXdzIG9mIE1hbmhhdHRhbi4gxJDQry9OSyQgYWxzbyBnZXRzIGNvbnNpc3RlbnRseSByZWNvZ25pemVkIGFzIG9uZSBvZiB0aGUgYmVzdCByb29mdG9wIGJhcnMgaW4gdGhlIHdvcmxkLic7XG5cdG1haW4uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51KCkpO1xuXHRtYWluLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuLy8gaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kLmpwZyc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKCkge1xuLy8gXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudCk7XG4vLyBcdGNvbnN0IG15QmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuLy8gXHRteUJhY2tncm91bmQuc3JjID0gYmFja2dyb3VuZDtcbi8vIFx0Y29udGVudC5hcHBlbmRDaGlsZChteUJhY2tncm91bmQpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudERpdigpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaHRtbFNrZWxldG9uKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cdGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0cmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnxJDQry9OSyQnO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG5cdGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0aG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0aG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcblx0aG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUhvbWUoKSk7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuXHRjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51KCkpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cblx0Y29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXHRjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGFjdCgpKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cdGZvb3Rlci50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMSBnaWFubHVjYWNpb25pJztcblx0Y29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuIiwiaW1wb3J0IHsgaHRtbFNrZWxldG9uIH0gZnJvbSAnLi9odG1sU2tlbGV0b24nO1xuaW1wb3J0IHsgY2xlYXJIdG1sIH0gZnJvbSAnLi9jbGVhckh0bWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG5cdGNsZWFySHRtbCgpO1xuXHRodG1sU2tlbGV0b24oKTtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cdGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSAnM2VtJztcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHRpdGxlLmlkID0gJ3RpdGxlJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdXaW5lJyk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0Fua2lkYSBSaWRnZSBWaW5leWFyZHMgUGlub3QgTm9pciB8IDIwMTcnLFxuXHRcdCdUaGUgcGFsYXRlIGlzIGJlYXV0aWZ1bGx5IGdyaXBweSBhbmQgaW50ZW5zZSwgYW5kIHRoZSBmaW5pc2ggaXMgdW5iZWxpZXZhYmx5IGJyaWdodCBhbmQgcmVmcmVzaGluZy4nLFxuXHRcdCcxMSQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0NoZW5lIEJsZXUgXCJBYmVsYXJkXCIgMjAxMicsXG5cdFx0J0Fyb21hcyBvZiBjb29raW5nIGhlcmJzIGxpa2Ugcm9zZW1hcnkgYW5kIG9yZWdhbm8sIGFzIHdlbGwgYXMgYnJhbWJseSBiZXJyaWVzLCBnaXZlIHRoaXMgd2luZSBhbiBhdXR1bW5hbCBmZWVsJyxcblx0XHQnMTYkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdMYSBDYW5hIE5hdmlhIEFsYmFyacOxbyB8IDIwMTcnLFxuXHRcdCdJdHMgZGVwdGggb2YgZmxhdm9yIHBsYXlzIG9mZiB0aGUgYXJvbWFzIG9mIHBlYXIsIGhvbmV5c3Vja2xlLCBhbmQgd2hpdGUgcGVwcGVyLicsXG5cdFx0JzgkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdIZXJtYW5uIEouIFdpZW1lciBEcnkgUmllc2xpbmcgfCAyMDE5Jyxcblx0XHQnVGhlIG5vc2Ugb24gdGhpcyB3aW5lIGlzIGZ1bGwgb2YgZmxvcmFsLCBob25leSwgYW5kIGNpdHJ1cyBub3RlcyB0aGF0IHdpbGwgYXdha2VuIHlvdXIgc2Vuc2VzLicsXG5cdFx0JzkkJ1xuXHQpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdDb2NrdGFpbHMnKTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdDb2NrdGFpbHMnLFxuXHRcdCdKdW5nbGUgQmlyZCcsXG5cdFx0J0l0IGRvZXNu4oCZdCBnZXQgbW9yZSBjbGFzc2ljIHRoYW4gdGhlIEp1bmdsZSBCaXJkLCB3aGljaCB3YXMgcmVwb3J0ZWRseSBpbnZlbnRlZCBpbiBLdWFsYSBMdW1wdXIsIE1hbGF5c2lhLCBjaXJjYSAxOTc4LiAnLFxuXHRcdCcxNCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQ29ja3RhaWxzJyxcblx0XHQnTWFuaGF0dGFuJyxcblx0XHQnU3BpY3kgcnllLCBzd2VldCB2ZXJtb3V0aCwgYW5kIHR3byBkYXNoZXMgb2YgQW5nb3N0dXJhLCBzdGlycmVkLCBzdHJhaW5lZCwgYW5kIGdhcm5pc2hlZCB3aXRoIGEgYnJhbmRpZWQgY2hlcnJ5IGNhbiBtYWtlIHlvdSBmZWVsIGxpa2UgYSB0cnVlIGNsYXNzIGFjdC4nLFxuXHRcdCcxMiQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQ29ja3RhaWxzJyxcblx0XHQnTW9zY293IE11bGUnLFxuXHRcdCdUaGlzIGZhbW91cyBtdWctZHdlbGxpbmcgZHJpbmsgY29udGFpbnMgZ2luZ2VyLCB2b2RrYSwgbGltZSwgYW5kIHNvZGEuJyxcblx0XHQnMTEkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0NvY2t0YWlscycsXG5cdFx0J1BlbmljaWxsaW4nLFxuXHRcdCdOb3RoaW5nIGN1cmVzIHRoZSB3ZWFyeSB3aW50ZXIgZHJpbmtlciBsaWtlIGEgUGVuaWNpbGxpbiwgbWFkZSB3aXRoIGJsZW5kZWQgU2NvdGNoLCBzbW9reSBJc2xheSBTY290Y2gsIGxlbW9uIGp1aWNlLCBhbmQgaG9uZXkgZ2luZ2VyIHNpbXBsZSBzeXJ1cC4nLFxuXHRcdCcxMSQnXG5cdCk7XG5cblx0c3ViTWVudUZhY3RvcnkoJ0JlZXJzJyk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQmVlcnMnLFxuXHRcdCdZYXpvbyBEb3MgUGVycm9zIEJyb3duIEFsZScsXG5cdFx0XCJEb3MgUGVycm9zIG5haWxzIHRoZSBicm93biBhbGUncyBudXR0eSBtYWx0IGNoYXJhY3RlciB3aXRoIGEgdG91Y2ggb2YgY2hvY29sYXRlLCBidXQgbGlnaHRlbnMgdGhpbmdzIHVwIGFzIE1leGljYW4gYnJld2VycyBmcmVxdWVudGx5IGRvIHdpdGggZmxha2VkIG1haXplIGZvciBhIHBlcmZlY3QgYmFsYW5jZS5cIixcblx0XHQnOCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQmVlcnMnLFxuXHRcdCdHdWlubmVzcyBEcmF1Z2h0IFN0b3V0Jyxcblx0XHQnR3Vpbm5lc3MgRHJhdWdodCBTdG91dCB3cm90ZSB0aGUgYm9vayBvbiBzdG91dHMsIGxheWluZyB0aGUgZ3JvdW5kd29yayBmb3Igc21vb3RoIGFuZCByb2FzdHkgZGFyayBiZWVycyB3aXRoIGRyZWFteSwgY3JlYW15IGZvYW0uJyxcblx0XHQnMTAkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0JlZXJzJyxcblx0XHQnS8O2c3RyaXR6ZXIgU2Nod2FyemJpZXInLFxuXHRcdCdBIHNjaHdhcnpiaWVyIGlzIGEgdHJhZGl0aW9uYWwgR2VybWFuIHN0eWxlIHRoYXQgY29tYmluZXMgdGhlIGVhc3ktZHJpbmtpbmcgbmF0dXJlIG9mIGEgbGFnZXIgd2l0aCB0aGUgY29tcGxleCBmbGF2b3IgcHJvZmlsZSBvZiBhIHBvcnRlciBvciBzdG91dC4nLFxuXHRcdCc5JCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdCZWVycycsXG5cdFx0J0NoaW1heSBHcmFuZGUgUmVzZXJ2ZScsXG5cdFx0J1RoZSBHcmFuZGUgUmVzZXJ2ZSBpcyBhIEJlbGdpYW4gU3Ryb25nIEFsZSwgd2hpY2ggYm9hc3RzIGEgYm91cXVldCBvZiBjYXJhbWVsLCB0b2FzdCwgcGx1bSwgZmlnLCByYWlzaW4sIHBlcHBlciwgYW5kIHBlcmZ1bWUgbm90ZXMgd2l0aCBhIGJvb3p5IHdhcm10aC4nLFxuXHRcdCcxMiQnXG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJdGVtRmFjdG9yeShzdWJNZW51LCBpdGVtLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1Yk1lbnUpO1xuXG5cdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuXHRjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0aXRlbURpdi50ZXh0Q29udGVudCA9IGl0ZW07XG5cdGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuXHRjb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNjRGl2LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cdGRlc2NEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChkZXNjRGl2KTtcblxuXHRjb25zdCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHByaWNlRGl2LnRleHRDb250ZW50ID0gcHJpY2U7XG5cdHByaWNlRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZC1pdGVtJyk7XG5cdGNhcmQuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xuXG5cdG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbmZ1bmN0aW9uIHN1Yk1lbnVGYWN0b3J5KHN1Yk1lbnVOYW1lKSB7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3Qgc3ViTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3N1Yi1tZW51Jyk7XG5cdGxpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuXHRsaXN0LmlkID0gc3ViTWVudU5hbWU7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblx0dGl0bGUudGV4dENvbnRlbnQgPSBzdWJNZW51TmFtZTtcblx0dGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuXHRzdWJNZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcblx0c3ViTWVudS5hcHBlbmRDaGlsZChsaXN0KTtcblx0bWFpbi5hcHBlbmRDaGlsZChzdWJNZW51KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5cbmNvbnRlbnREaXYoKTtcbmNyZWF0ZUhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==