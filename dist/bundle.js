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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 1em auto 0.5em auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n#map {\n\tmargin-top: 0.7em;\n\tmax-width: 22em;\n\tborder-radius: 10px;\n}\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAAwC;AACzC;;AAEA;CACC,iCAAiC;CACjC,+BAA+B;AAChC;AACA;CACC,mBAAmB;CACnB,aAAa;CACb;;;wBAGuB;CACvB,uBAAuB;CACvB,aAAa;CACb;yCACwB;CACxB,qBAAqB;CACrB,4BAA4B;CAC5B,kCAAkC;CAClC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,eAAe;AAChB;AACA;CACC,mBAAmB;CACnB,iCAAiC;CACjC,4CAA4C;CAC5C,mBAAmB;CACnB,gBAAgB;CAChB,+BAA+B;;CAE/B,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;AAC1C;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,wCAAwC;CACxC,YAAY;CACZ,mBAAmB;CACnB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,wCAAwC;CACxC,mBAAmB;CACnB,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,4CAA4C;AAC7C;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,+BAA+B;;CAE/B,gBAAgB;CAChB,4CAA4C;CAC5C,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,wCAAwC;CACxC,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,gBAAgB;CAChB,4CAA4C;AAC7C;;AAEA;CACC,qBAAqB;CACrB,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA,cAAc;;AAEd;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,2BAA2B;CAC3B,mDAAmD;CACnD,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,4CAA4C;CAC5C,mBAAmB;CACnB,WAAW;CACX,qBAAqB;AACtB;AACA;CACC,aAAa;CACb,gCAAgC;AACjC;;AAEA,iBAAiB;;AAEjB;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,mBAAmB;AACpB;AACA,kBAAkB;;AAElB;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC;EACC,aAAa;EACb,2BAA2B;CAC5B;CACA;EACC,cAAc;CACf;CACA;EACC,oBAAoB;CACrB;AACD;AACA;CACC;EACC,cAAc;CACf;CACA;EACC,kBAAkB;CACnB;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(./Caveat-VariableFont_wght.ttf);\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl('./background.jpg');\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 1em auto 0.5em auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n#map {\n\tmargin-top: 0.7em;\n\tmax-width: 22em;\n\tborder-radius: 10px;\n}\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _contact_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg");




function createContact() {
	(0,_clearHtml__WEBPACK_IMPORTED_MODULE_1__.clearHtml)();
	(0,_htmlSkeleton__WEBPACK_IMPORTED_MODULE_0__.htmlSkeleton)();
	const myMap = new Image();
	myMap.src = _contact_jpg__WEBPACK_IMPORTED_MODULE_2__;

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
	myMap.id = 'map';
	contact.appendChild(myMap);
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
		'When it comes to the best rooftop bars in NYC, ĐЯ/NK$ is a place you have to visit to enjoy a drink. On top of the an incredible Hotel, this gorgeous bar offers stunning views of Manhattan. We consistently are recognized as one of the best rooftop bars in the world.';
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

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "574665666ec24fb67852.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDZTtBQUNROztBQUU1Qyx5REFBVTtBQUNWLGlEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NsZWFySHRtbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaHRtbFNrZWxldG9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcbn1cXG4jY29udGVudCB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0J2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcblxcdFxcdCcuIG1haW4gLidcXG5cXHRcXHQnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSxcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMzIwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbnAge1xcblxcdG1pbi13aWR0aDogMTVlbTtcXG5cXHRtYXgtd2lkdGg6IDI1ZW07XFxufVxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4Mik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0LyogY29sb3I6IHJnYmEoMjUzLCAxNjcsIDU0LCAwLjg5KTsgKi9cXG5cXHRwYWRkaW5nOiAwZW0gMC4zZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjQ3OSk7XFxufVxcbmhlYWRlciB7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbi50YWIge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRtYXJnaW46IDByZW0gMXJlbSAwLjRyZW0gMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDJlbSAzZW07XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuXFx0bWFyZ2luOiAwIDAgLTEuM2VtIDA7XFxufVxcblxcbiNvcGVuIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuI29wZW5Ib3VycyB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuXFx0LyogQ29kZSBmb3IgRmlyZWZveCAqL1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLm1lbnUtY2FyZCB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHdpZHRoOiAxNWVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwLjVlbSBhdXRvO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWNhcmQtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuM2VtO1xcbn1cXG4ubGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3Qge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtYXAge1xcblxcdG1hcmdpbi10b3A6IDAuN2VtO1xcblxcdG1heC13aWR0aDogMjJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDg2NXB4KSB7XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjVweCkge1xcblxcdC5saXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG5cXHR9XFxuXFx0Lm1lbnUtY2FyZCB7XFxuXFx0XFx0cGFkZGluZzogMC43ZW07XFxuXFx0fVxcblxcdC5tZW51LXRpdGxlIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0cGFkZGluZzogMC40ZW07XFxuXFx0fVxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHgtbGFyZ2U7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MscUJBQXFCO0NBQ3JCLDRDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQywrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2I7Ozt3QkFHdUI7Q0FDdkIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYjt5Q0FDd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsNENBQTRDO0NBQzVDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsK0JBQStCOztDQUUvQixxQ0FBcUM7Q0FDckMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUNBQXlDO0FBQzFDO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHdDQUF3QztDQUN4QyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGVBQWU7Q0FDZiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysd0NBQXdDO0NBQ3hDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLCtCQUErQjs7Q0FFL0IsZ0JBQWdCO0NBQ2hCLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHdDQUF3QztDQUN4QyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLCtCQUErQjtDQUMvQixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IscUNBQXFDO0FBQ3RDOztBQUVBLGNBQWM7O0FBRWQ7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLG1EQUFtRDtDQUNuRCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixnQ0FBZ0M7QUFDakM7O0FBRUEsaUJBQWlCOztBQUVqQjtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0Esa0JBQWtCOztBQUVsQjtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtBQUNEO0FBQ0E7Q0FDQztFQUNDLGFBQWE7RUFDYiwyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msb0JBQW9CO0NBQ3JCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0NhdmVhdCc7XFxuXFx0c3JjOiB1cmwoLi9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxufVxcbiNjb250ZW50IHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcblxcdFxcdHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMzIwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbnAge1xcblxcdG1pbi13aWR0aDogMTVlbTtcXG5cXHRtYXgtd2lkdGg6IDI1ZW07XFxufVxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4Mik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0LyogY29sb3I6IHJnYmEoMjUzLCAxNjcsIDU0LCAwLjg5KTsgKi9cXG5cXHRwYWRkaW5nOiAwZW0gMC4zZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjQ3OSk7XFxufVxcbmhlYWRlciB7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbi50YWIge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRtYXJnaW46IDByZW0gMXJlbSAwLjRyZW0gMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDJlbSAzZW07XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuXFx0bWFyZ2luOiAwIDAgLTEuM2VtIDA7XFxufVxcblxcbiNvcGVuIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuI29wZW5Ib3VycyB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuXFx0LyogQ29kZSBmb3IgRmlyZWZveCAqL1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLm1lbnUtY2FyZCB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHdpZHRoOiAxNWVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwLjVlbSBhdXRvO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWNhcmQtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuM2VtO1xcbn1cXG4ubGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3Qge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiNtYXAge1xcblxcdG1hcmdpbi10b3A6IDAuN2VtO1xcblxcdG1heC13aWR0aDogMjJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDg2NXB4KSB7XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjVweCkge1xcblxcdC5saXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG5cXHR9XFxuXFx0Lm1lbnUtY2FyZCB7XFxuXFx0XFx0cGFkZGluZzogMC43ZW07XFxuXFx0fVxcblxcdC5tZW51LXRpdGxlIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0cGFkZGluZzogMC40ZW07XFxuXFx0fVxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHgtbGFyZ2U7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFySHRtbCgpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSAnJztcbn1cbiIsImltcG9ydCB7IGh0bWxTa2VsZXRvbiB9IGZyb20gJy4vaHRtbFNrZWxldG9uJztcbmltcG9ydCB7IGNsZWFySHRtbCB9IGZyb20gJy4vY2xlYXJIdG1sJztcbmltcG9ydCBtYXAgZnJvbSAnLi9jb250YWN0LmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuXHRjbGVhckh0bWwoKTtcblx0aHRtbFNrZWxldG9uKCk7XG5cdGNvbnN0IG15TWFwID0gbmV3IEltYWdlKCk7XG5cdG15TWFwLnNyYyA9IG1hcDtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuXHR0aXRsZS5pZCA9ICd0aXRsZSc7XG5cdG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29udGFjdC5pZCA9ICdjb250YWN0Jztcblx0bWFpbi5hcHBlbmRDaGlsZChjb250YWN0KTtcblx0Y29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiArMSAyMTItMTIzLTAxMjMnO1xuXHRjb250YWN0LmFwcGVuZENoaWxkKHBob25lKTtcblx0Y29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGVtYWlsLnRleHRDb250ZW50ID0gJ0VtYWlsOiBpbmZvQGRyaW5rcy5jb20nO1xuXHRjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsKTtcblx0Y29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0YWRkcmVzcy50ZXh0Q29udGVudCA9XG5cdFx0J0FkZHJlc3M6IDU3IENodXJjaCBTdCwgTmV3IFlvcmssIE5ZIDEwMDA3LCBVbml0ZWQgU3RhdGVzJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblx0bXlNYXAuaWQgPSAnbWFwJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChteU1hcCk7XG59XG4iLCJpbXBvcnQgeyBodG1sU2tlbGV0b24gfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5pbXBvcnQgeyBjbGVhckh0bWwgfSBmcm9tICcuL2NsZWFySHRtbCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG5cdGNsZWFySHRtbCgpO1xuXHRodG1sU2tlbGV0b24oKTtcblx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuXHRjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0d2VsY29tZS5pZCA9ICd3ZWxjb21lJztcblx0d2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvJztcblx0bWFpbi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcblxuXHRjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskJztcblx0bWFpbi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cblx0Y29uc3Qgb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRvcGVuLmlkID0gJ29wZW4nO1xuXHRtYWluLmFwcGVuZENoaWxkKG9wZW4pO1xuXG5cdGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG5cdG9wZW5Ib3Vycy5pZCA9ICdvcGVuSG91cnMnO1xuXHRpZiAobm93LmdldERheSgpID4gNSkge1xuXHRcdG5vdy5nZXRIb3VycygpIDwgMTNcblx0XHRcdD8gKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIENMT1NFRCcpXG5cdFx0XHQ6IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBPUEVOJyk7XG5cdH0gZWxzZSB7XG5cdFx0bm93LmdldEhvdXJzKCkgPCAxOVxuXHRcdFx0PyAob3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskIC8gQ0xPU0VEJylcblx0XHRcdDogKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIE9QRU4nKTtcblx0fVxuXG5cdG9wZW4uYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcblxuXHRjb25zdCBob3VyczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRob3VyczEudGV4dENvbnRlbnQgPSAnTW9uIC0gRnJpOiAxOTowMCAtIDI0OjAwJztcblx0b3Blbi5hcHBlbmRDaGlsZChob3VyczEpO1xuXG5cdGNvbnN0IGhvdXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdGhvdXJzMi50ZXh0Q29udGVudCA9ICdTYXQgLSBTdW46IDEzOjAwIC0gMjQ6MDAnO1xuXHRvcGVuLmFwcGVuZENoaWxkKGhvdXJzMik7XG5cblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuXHRcdCdXaGVuIGl0IGNvbWVzIHRvIHRoZSBiZXN0IHJvb2Z0b3AgYmFycyBpbiBOWUMsIMSQ0K8vTkskIGlzIGEgcGxhY2UgeW91IGhhdmUgdG8gdmlzaXQgdG8gZW5qb3kgYSBkcmluay4gT24gdG9wIG9mIHRoZSBhbiBpbmNyZWRpYmxlIEhvdGVsLCB0aGlzIGdvcmdlb3VzIGJhciBvZmZlcnMgc3R1bm5pbmcgdmlld3Mgb2YgTWFuaGF0dGFuLiBXZSBjb25zaXN0ZW50bHkgYXJlIHJlY29nbml6ZWQgYXMgb25lIG9mIHRoZSBiZXN0IHJvb2Z0b3AgYmFycyBpbiB0aGUgd29ybGQuJztcblx0bWFpbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0bWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU1lbnUoKSk7XG5cdG1haW4uYXBwZW5kQ2hpbGQobWVudUJ0bik7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQuanBnJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldEJhY2tncm91bmQoKSB7XG4vLyBcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50KTtcbi8vIFx0Y29uc3QgbXlCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4vLyBcdG15QmFja2dyb3VuZC5zcmMgPSBiYWNrZ3JvdW5kO1xuLy8gXHRjb250ZW50LmFwcGVuZENoaWxkKG15QmFja2dyb3VuZCk7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50RGl2KCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBodG1sU2tlbGV0b24oKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblx0Y29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRyZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICfEkNCvL05LJCc7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cblx0Y29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXHRob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlSG9tZSgpKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG5cdGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0bWVudVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0bWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU1lbnUoKSk7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuXHRjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cdGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVDb250YWN0KCkpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblx0Zm9vdGVyLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIxIGdpYW5sdWNhY2lvbmknO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJpbXBvcnQgeyBodG1sU2tlbGV0b24gfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5pbXBvcnQgeyBjbGVhckh0bWwgfSBmcm9tICcuL2NsZWFySHRtbCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcblx0Y2xlYXJIdG1sKCk7XG5cdGh0bWxTa2VsZXRvbigpO1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblx0Zm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9ICczZW0nO1xuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0dGl0bGUuaWQgPSAndGl0bGUnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cblx0c3ViTWVudUZhY3RvcnkoJ1dpbmUnKTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdXaW5lJyxcblx0XHQnQW5raWRhIFJpZGdlIFZpbmV5YXJkcyBQaW5vdCBOb2lyIHwgMjAxNycsXG5cdFx0J1RoZSBwYWxhdGUgaXMgYmVhdXRpZnVsbHkgZ3JpcHB5IGFuZCBpbnRlbnNlLCBhbmQgdGhlIGZpbmlzaCBpcyB1bmJlbGlldmFibHkgYnJpZ2h0IGFuZCByZWZyZXNoaW5nLicsXG5cdFx0JzExJCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdXaW5lJyxcblx0XHQnQ2hlbmUgQmxldSBcIkFiZWxhcmRcIiAyMDEyJyxcblx0XHQnQXJvbWFzIG9mIGNvb2tpbmcgaGVyYnMgbGlrZSByb3NlbWFyeSBhbmQgb3JlZ2FubywgYXMgd2VsbCBhcyBicmFtYmx5IGJlcnJpZXMsIGdpdmUgdGhpcyB3aW5lIGFuIGF1dHVtbmFsIGZlZWwnLFxuXHRcdCcxNiQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0xhIENhbmEgTmF2aWEgQWxiYXJpw7FvIHwgMjAxNycsXG5cdFx0J0l0cyBkZXB0aCBvZiBmbGF2b3IgcGxheXMgb2ZmIHRoZSBhcm9tYXMgb2YgcGVhciwgaG9uZXlzdWNrbGUsIGFuZCB3aGl0ZSBwZXBwZXIuJyxcblx0XHQnOCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0hlcm1hbm4gSi4gV2llbWVyIERyeSBSaWVzbGluZyB8IDIwMTknLFxuXHRcdCdUaGUgbm9zZSBvbiB0aGlzIHdpbmUgaXMgZnVsbCBvZiBmbG9yYWwsIGhvbmV5LCBhbmQgY2l0cnVzIG5vdGVzIHRoYXQgd2lsbCBhd2FrZW4geW91ciBzZW5zZXMuJyxcblx0XHQnOSQnXG5cdCk7XG5cblx0c3ViTWVudUZhY3RvcnkoJ0NvY2t0YWlscycpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0NvY2t0YWlscycsXG5cdFx0J0p1bmdsZSBCaXJkJyxcblx0XHQnSXQgZG9lc27igJl0IGdldCBtb3JlIGNsYXNzaWMgdGhhbiB0aGUgSnVuZ2xlIEJpcmQsIHdoaWNoIHdhcyByZXBvcnRlZGx5IGludmVudGVkIGluIEt1YWxhIEx1bXB1ciwgTWFsYXlzaWEsIGNpcmNhIDE5NzguICcsXG5cdFx0JzE0JCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdDb2NrdGFpbHMnLFxuXHRcdCdNYW5oYXR0YW4nLFxuXHRcdCdTcGljeSByeWUsIHN3ZWV0IHZlcm1vdXRoLCBhbmQgdHdvIGRhc2hlcyBvZiBBbmdvc3R1cmEsIHN0aXJyZWQsIHN0cmFpbmVkLCBhbmQgZ2FybmlzaGVkIHdpdGggYSBicmFuZGllZCBjaGVycnkgY2FuIG1ha2UgeW91IGZlZWwgbGlrZSBhIHRydWUgY2xhc3MgYWN0LicsXG5cdFx0JzEyJCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdDb2NrdGFpbHMnLFxuXHRcdCdNb3Njb3cgTXVsZScsXG5cdFx0J1RoaXMgZmFtb3VzIG11Zy1kd2VsbGluZyBkcmluayBjb250YWlucyBnaW5nZXIsIHZvZGthLCBsaW1lLCBhbmQgc29kYS4nLFxuXHRcdCcxMSQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQ29ja3RhaWxzJyxcblx0XHQnUGVuaWNpbGxpbicsXG5cdFx0J05vdGhpbmcgY3VyZXMgdGhlIHdlYXJ5IHdpbnRlciBkcmlua2VyIGxpa2UgYSBQZW5pY2lsbGluLCBtYWRlIHdpdGggYmxlbmRlZCBTY290Y2gsIHNtb2t5IElzbGF5IFNjb3RjaCwgbGVtb24ganVpY2UsIGFuZCBob25leSBnaW5nZXIgc2ltcGxlIHN5cnVwLicsXG5cdFx0JzExJCdcblx0KTtcblxuXHRzdWJNZW51RmFjdG9yeSgnQmVlcnMnKTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdCZWVycycsXG5cdFx0J1lhem9vIERvcyBQZXJyb3MgQnJvd24gQWxlJyxcblx0XHRcIkRvcyBQZXJyb3MgbmFpbHMgdGhlIGJyb3duIGFsZSdzIG51dHR5IG1hbHQgY2hhcmFjdGVyIHdpdGggYSB0b3VjaCBvZiBjaG9jb2xhdGUsIGJ1dCBsaWdodGVucyB0aGluZ3MgdXAgYXMgTWV4aWNhbiBicmV3ZXJzIGZyZXF1ZW50bHkgZG8gd2l0aCBmbGFrZWQgbWFpemUgZm9yIGEgcGVyZmVjdCBiYWxhbmNlLlwiLFxuXHRcdCc4JCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdCZWVycycsXG5cdFx0J0d1aW5uZXNzIERyYXVnaHQgU3RvdXQnLFxuXHRcdCdHdWlubmVzcyBEcmF1Z2h0IFN0b3V0IHdyb3RlIHRoZSBib29rIG9uIHN0b3V0cywgbGF5aW5nIHRoZSBncm91bmR3b3JrIGZvciBzbW9vdGggYW5kIHJvYXN0eSBkYXJrIGJlZXJzIHdpdGggZHJlYW15LCBjcmVhbXkgZm9hbS4nLFxuXHRcdCcxMCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQmVlcnMnLFxuXHRcdCdLw7ZzdHJpdHplciBTY2h3YXJ6YmllcicsXG5cdFx0J0Egc2Nod2FyemJpZXIgaXMgYSB0cmFkaXRpb25hbCBHZXJtYW4gc3R5bGUgdGhhdCBjb21iaW5lcyB0aGUgZWFzeS1kcmlua2luZyBuYXR1cmUgb2YgYSBsYWdlciB3aXRoIHRoZSBjb21wbGV4IGZsYXZvciBwcm9maWxlIG9mIGEgcG9ydGVyIG9yIHN0b3V0LicsXG5cdFx0JzkkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0JlZXJzJyxcblx0XHQnQ2hpbWF5IEdyYW5kZSBSZXNlcnZlJyxcblx0XHQnVGhlIEdyYW5kZSBSZXNlcnZlIGlzIGEgQmVsZ2lhbiBTdHJvbmcgQWxlLCB3aGljaCBib2FzdHMgYSBib3VxdWV0IG9mIGNhcmFtZWwsIHRvYXN0LCBwbHVtLCBmaWcsIHJhaXNpbiwgcGVwcGVyLCBhbmQgcGVyZnVtZSBub3RlcyB3aXRoIGEgYm9venkgd2FybXRoLicsXG5cdFx0JzEyJCdcblx0KTtcbn1cblxuZnVuY3Rpb24gbWVudUl0ZW1GYWN0b3J5KHN1Yk1lbnUsIGl0ZW0sIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ViTWVudSk7XG5cblx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG5cdGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRpdGVtRGl2LnRleHRDb250ZW50ID0gaXRlbTtcblx0aXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQtaXRlbScpO1xuXHRjYXJkLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG5cdGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRlc2NEaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblx0ZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQtaXRlbScpO1xuXHRjYXJkLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xuXG5cdGNvbnN0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0cHJpY2VEaXYudGV4dENvbnRlbnQgPSBwcmljZTtcblx0cHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChwcmljZURpdik7XG5cblx0bWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gc3ViTWVudUZhY3Rvcnkoc3ViTWVudU5hbWUpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBzdWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc3ViLW1lbnUnKTtcblx0bGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cdGxpc3QuaWQgPSBzdWJNZW51TmFtZTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHN1Yk1lbnVOYW1lO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG5cdHN1Yk1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRzdWJNZW51LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRtYWluLmFwcGVuZENoaWxkKHN1Yk1lbnUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY29udGVudERpdiB9IGZyb20gJy4vaHRtbFNrZWxldG9uJztcblxuY29udGVudERpdigpO1xuY3JlYXRlSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9