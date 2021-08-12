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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 1em auto 0.5em auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: center;\n}\n\n#map {\n\tmargin-top: 0.7em;\n\tmax-width: 22em;\n\tborder-radius: 10px;\n}\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n\t.menu-card {\n\t\tpadding: 1em;\n\t\twidth: 12em;\n\t}\n\t.description {\n\t\tfont-size: 0.8em;\n\t\tmargin: 0.3em;\n\t}\n\t#map {\n\t\tmargin-bottom: 0.5em;\n\t\tmax-width: 15em;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAAwC;AACzC;;AAEA;CACC,iCAAiC;CACjC,+BAA+B;AAChC;AACA;CACC,mBAAmB;CACnB,aAAa;CACb;;;wBAGuB;CACvB,uBAAuB;CACvB,aAAa;CACb;yCACwB;CACxB,qBAAqB;CACrB,4BAA4B;CAC5B,kCAAkC;CAClC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,eAAe;AAChB;AACA;CACC,mBAAmB;CACnB,iCAAiC;CACjC,4CAA4C;CAC5C,mBAAmB;CACnB,gBAAgB;CAChB,+BAA+B;;CAE/B,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;AAC1C;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,wCAAwC;CACxC,YAAY;CACZ,mBAAmB;CACnB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,wCAAwC;CACxC,mBAAmB;CACnB,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,4CAA4C;AAC7C;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,+BAA+B;;CAE/B,gBAAgB;CAChB,4CAA4C;CAC5C,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,wCAAwC;CACxC,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,gBAAgB;CAChB,4CAA4C;AAC7C;;AAEA;CACC,qBAAqB;CACrB,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA,cAAc;;AAEd;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,2BAA2B;CAC3B,mDAAmD;CACnD,kBAAkB;AACnB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,4CAA4C;CAC5C,mBAAmB;CACnB,WAAW;CACX,qBAAqB;AACtB;AACA;CACC,aAAa;CACb,gCAAgC;AACjC;;AAEA,iBAAiB;;AAEjB;CACC,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;CACjB,eAAe;CACf,mBAAmB;AACpB;AACA,kBAAkB;;AAElB;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC;EACC,aAAa;EACb,2BAA2B;CAC5B;CACA;EACC,cAAc;CACf;CACA;EACC,oBAAoB;CACrB;AACD;AACA;CACC;EACC,cAAc;CACf;CACA;EACC,kBAAkB;CACnB;CACA;EACC,YAAY;EACZ,WAAW;CACZ;CACA;EACC,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,oBAAoB;EACpB,eAAe;CAChB;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(./Caveat-VariableFont_wght.ttf);\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl('./background.jpg');\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-title {\n\tmargin: 1em auto 0.5em auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: center;\n}\n\n#map {\n\tmargin-top: 0.7em;\n\tmax-width: 22em;\n\tborder-radius: 10px;\n}\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\tmain {\n\t\tpadding: 0.4em;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n\t.menu-card {\n\t\tpadding: 1em;\n\t\twidth: 12em;\n\t}\n\t.description {\n\t\tfont-size: 0.8em;\n\t\tmargin: 0.3em;\n\t}\n\t#map {\n\t\tmargin-bottom: 0.5em;\n\t\tmax-width: 15em;\n\t}\n}\n"],"sourceRoot":""}]);
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
	descDiv.classList.add('description');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdURBQWE7QUFDekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDhDO0FBQ047QUFDakM7QUFDUCxDQUFDLHFEQUFTO0FBQ1YsQ0FBQywyREFBWTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25JQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2U7QUFDUTs7QUFFNUMseURBQVU7QUFDVixpREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jbGVhckh0bWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2h0bWxTa2VsZXRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0NhdmVhdCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG59XFxuI2NvbnRlbnQge1xcblxcdGZvbnQtZmFtaWx5OiBDYXZlYXQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0J2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDMyMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi41ZW07XFxufVxcblxcbmgyIHtcXG5cXHRmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5wIHtcXG5cXHRtaW4td2lkdGg6IDE1ZW07XFxuXFx0bWF4LXdpZHRoOiAyNWVtO1xcbn1cXG5idXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiBDYXZlYXQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wODIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdC8qIGNvbG9yOiByZ2JhKDI1MywgMTY3LCA1NCwgMC44OSk7ICovXFxuXFx0cGFkZGluZzogMGVtIDAuM2VtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC40NzkpO1xcbn1cXG5oZWFkZXIge1xcblxcdGdyaWQtYXJlYTogaGVhZGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4udGFiIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxuXFx0bWFyZ2luOiAwcmVtIDFyZW0gMC40cmVtIDFyZW07XFxufVxcblxcbiN0aXRsZSB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuXFxubWFpbiB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRwYWRkaW5nOiAyZW0gM2VtO1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuI3dlbGNvbWUge1xcblxcdG1hcmdpbjogMCAwIC0xLjNlbSAwO1xcbn1cXG5cXG4jb3BlbiB7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXG5cXHRwYWRkaW5nLXRvcDogMWVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XFxufVxcblxcbiNvcGVuSG91cnMge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRncmlkLWFyZWE6IGZvb3RlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjc1ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdG1hcmdpbi10b3A6IGF1dG87XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcblxcdC8qIENvZGUgZm9yIEZpcmVmb3ggKi9cXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNDAsIDMxLCAwLjA3NSk7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcdGJhY2tncm91bmQ6IHJnYmEoMjM1LCAxNDAsIDMxLCAwLjA3NSk7XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcblxcbi5tZW51LWNhcmQge1xcblxcdHBhZGRpbmc6IDFlbTtcXG5cXHR3aWR0aDogMTVlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcblxcdG1hcmdpbjogMWVtIGF1dG8gMC41ZW0gYXV0bztcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubWVudS1jYXJkLWl0ZW0ge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnN1Yi1tZW51IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG1hcmdpbjogMWVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjNlbTtcXG59XFxuLmxpc3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbiNjb250YWN0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtYXAge1xcblxcdG1hcmdpbi10b3A6IDAuN2VtO1xcblxcdG1heC13aWR0aDogMjJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDg2NXB4KSB7XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjVweCkge1xcblxcdC5saXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG5cXHR9XFxuXFx0Lm1lbnUtY2FyZCB7XFxuXFx0XFx0cGFkZGluZzogMC43ZW07XFxuXFx0fVxcblxcdC5tZW51LXRpdGxlIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XFxuXFx0bWFpbiB7XFxuXFx0XFx0cGFkZGluZzogMC40ZW07XFxuXFx0fVxcblxcdGgyIHtcXG5cXHRcXHRmb250LXNpemU6IHgtbGFyZ2U7XFxuXFx0fVxcblxcdC5tZW51LWNhcmQge1xcblxcdFxcdHBhZGRpbmc6IDFlbTtcXG5cXHRcXHR3aWR0aDogMTJlbTtcXG5cXHR9XFxuXFx0LmRlc2NyaXB0aW9uIHtcXG5cXHRcXHRmb250LXNpemU6IDAuOGVtO1xcblxcdFxcdG1hcmdpbjogMC4zZW07XFxuXFx0fVxcblxcdCNtYXAge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcdFxcdG1heC13aWR0aDogMTVlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsNENBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O3dCQUd1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiO3lDQUN3QjtDQUN4QixxQkFBcUI7Q0FDckIsNEJBQTRCO0NBQzVCLGtDQUFrQztDQUNsQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGlDQUFpQztDQUNqQyw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQiwrQkFBK0I7O0NBRS9CLHFDQUFxQztDQUNyQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsd0NBQXdDO0NBQ3hDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3Q0FBd0M7Q0FDeEMsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsK0JBQStCOztDQUUvQixnQkFBZ0I7Q0FDaEIsNENBQTRDO0NBQzVDLG1CQUFtQjtDQUNuQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsd0NBQXdDO0NBQ3hDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsK0JBQStCO0NBQy9CLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQixxQ0FBcUM7QUFDdEM7O0FBRUEsY0FBYzs7QUFFZDtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsbURBQW1EO0NBQ25ELGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGdDQUFnQztBQUNqQzs7QUFFQSxpQkFBaUI7O0FBRWpCO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQSxrQkFBa0I7O0FBRWxCO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsYUFBYTtFQUNiLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsY0FBYztDQUNmO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7QUFDRDtBQUNBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtDQUNBO0VBQ0Msb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ0NhdmVhdCc7XFxuXFx0c3JjOiB1cmwoLi9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxufVxcbiNjb250ZW50IHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcblxcdFxcdHVybCgnLi9iYWNrZ3JvdW5kLmpwZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMzIwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbnAge1xcblxcdG1pbi13aWR0aDogMTVlbTtcXG5cXHRtYXgtd2lkdGg6IDI1ZW07XFxufVxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4Mik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0LyogY29sb3I6IHJnYmEoMjUzLCAxNjcsIDU0LCAwLjg5KTsgKi9cXG5cXHRwYWRkaW5nOiAwZW0gMC4zZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjQ3OSk7XFxufVxcbmhlYWRlciB7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbi50YWIge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRtYXJnaW46IDByZW0gMXJlbSAwLjRyZW0gMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDJlbSAzZW07XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuXFx0bWFyZ2luOiAwIDAgLTEuM2VtIDA7XFxufVxcblxcbiNvcGVuIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuI29wZW5Ib3VycyB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuXFx0LyogQ29kZSBmb3IgRmlyZWZveCAqL1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLm1lbnUtY2FyZCB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHdpZHRoOiAxNWVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gYXV0byAwLjVlbSBhdXRvO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5tZW51LWNhcmQtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuM2VtO1xcbn1cXG4ubGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3Qge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21hcCB7XFxuXFx0bWFyZ2luLXRvcDogMC43ZW07XFxuXFx0bWF4LXdpZHRoOiAyMmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODY1cHgpIHtcXG5cXHRmb290ZXIge1xcblxcdFxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2NXB4KSB7XFxuXFx0Lmxpc3Qge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcblxcdH1cXG5cXHQubWVudS1jYXJkIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjdlbTtcXG5cXHR9XFxuXFx0Lm1lbnUtdGl0bGUge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDAuM2VtO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcXG5cXHRtYWluIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjRlbTtcXG5cXHR9XFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogeC1sYXJnZTtcXG5cXHR9XFxuXFx0Lm1lbnUtY2FyZCB7XFxuXFx0XFx0cGFkZGluZzogMWVtO1xcblxcdFxcdHdpZHRoOiAxMmVtO1xcblxcdH1cXG5cXHQuZGVzY3JpcHRpb24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0XFx0bWFyZ2luOiAwLjNlbTtcXG5cXHR9XFxuXFx0I21hcCB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0XFx0bWF4LXdpZHRoOiAxNWVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBjbGVhckh0bWwoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gJyc7XG59XG4iLCJpbXBvcnQgeyBodG1sU2tlbGV0b24gfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5pbXBvcnQgeyBjbGVhckh0bWwgfSBmcm9tICcuL2NsZWFySHRtbCc7XG5pbXBvcnQgbWFwIGZyb20gJy4vY29udGFjdC5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcblx0Y2xlYXJIdG1sKCk7XG5cdGh0bWxTa2VsZXRvbigpO1xuXHRjb25zdCBteU1hcCA9IG5ldyBJbWFnZSgpO1xuXHRteU1hcC5zcmMgPSBtYXA7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcblx0dGl0bGUuaWQgPSAndGl0bGUnO1xuXHRtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG5cdG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cdGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogKzEgMjEyLTEyMy0wMTIzJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRlbWFpbC50ZXh0Q29udGVudCA9ICdFbWFpbDogaW5mb0Bkcmlua3MuY29tJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XG5cdGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGFkZHJlc3MudGV4dENvbnRlbnQgPVxuXHRcdCdBZGRyZXNzOiA1NyBDaHVyY2ggU3QsIE5ldyBZb3JrLCBOWSAxMDAwNywgVW5pdGVkIFN0YXRlcyc7XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cdG15TWFwLmlkID0gJ21hcCc7XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQobXlNYXApO1xufVxuIiwiaW1wb3J0IHsgaHRtbFNrZWxldG9uIH0gZnJvbSAnLi9odG1sU2tlbGV0b24nO1xuaW1wb3J0IHsgY2xlYXJIdG1sIH0gZnJvbSAnLi9jbGVhckh0bWwnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuXHRjbGVhckh0bWwoKTtcblx0aHRtbFNrZWxldG9uKCk7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cblx0Y29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdHdlbGNvbWUuaWQgPSAnd2VsY29tZSc7XG5cdHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XG5cdG1haW4uYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cblx0Y29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRyZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICfEkNCvL05LJCc7XG5cdG1haW4uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG5cdGNvbnN0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0b3Blbi5pZCA9ICdvcGVuJztcblx0bWFpbi5hcHBlbmRDaGlsZChvcGVuKTtcblxuXHRjb25zdCBvcGVuSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuXHRvcGVuSG91cnMuaWQgPSAnb3BlbkhvdXJzJztcblx0aWYgKG5vdy5nZXREYXkoKSA+IDUpIHtcblx0XHRub3cuZ2V0SG91cnMoKSA8IDEzXG5cdFx0XHQ/IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBDTE9TRUQnKVxuXHRcdFx0OiAob3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskIC8gT1BFTicpO1xuXHR9IGVsc2Uge1xuXHRcdG5vdy5nZXRIb3VycygpIDwgMTlcblx0XHRcdD8gKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIENMT1NFRCcpXG5cdFx0XHQ6IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBPUEVOJyk7XG5cdH1cblxuXHRvcGVuLmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XG5cblx0Y29uc3QgaG91cnMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0aG91cnMxLnRleHRDb250ZW50ID0gJ01vbiAtIEZyaTogMTk6MDAgLSAyNDowMCc7XG5cdG9wZW4uYXBwZW5kQ2hpbGQoaG91cnMxKTtcblxuXHRjb25zdCBob3VyczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRob3VyczIudGV4dENvbnRlbnQgPSAnU2F0IC0gU3VuOiAxMzowMCAtIDI0OjAwJztcblx0b3Blbi5hcHBlbmRDaGlsZChob3VyczIpO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID1cblx0XHQnV2hlbiBpdCBjb21lcyB0byB0aGUgYmVzdCByb29mdG9wIGJhcnMgaW4gTllDLCDEkNCvL05LJCBpcyBhIHBsYWNlIHlvdSBoYXZlIHRvIHZpc2l0IHRvIGVuam95IGEgZHJpbmsuIE9uIHRvcCBvZiB0aGUgYW4gaW5jcmVkaWJsZSBIb3RlbCwgdGhpcyBnb3JnZW91cyBiYXIgb2ZmZXJzIHN0dW5uaW5nIHZpZXdzIG9mIE1hbmhhdHRhbi4gV2UgY29uc2lzdGVudGx5IGFyZSByZWNvZ25pemVkIGFzIG9uZSBvZiB0aGUgYmVzdCByb29mdG9wIGJhcnMgaW4gdGhlIHdvcmxkLic7XG5cdG1haW4uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuXHRjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51KCkpO1xuXHRtYWluLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuLy8gaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kLmpwZyc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKCkge1xuLy8gXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGVudCk7XG4vLyBcdGNvbnN0IG15QmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuLy8gXHRteUJhY2tncm91bmQuc3JjID0gYmFja2dyb3VuZDtcbi8vIFx0Y29udGVudC5hcHBlbmRDaGlsZChteUJhY2tncm91bmQpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudERpdigpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaHRtbFNrZWxldG9uKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cdGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblx0cmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnxJDQry9OSyQnO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG5cdGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0aG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0aG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcblx0aG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUhvbWUoKSk7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuXHRjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVNZW51KCkpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cblx0Y29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXHRjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGFjdCgpKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cdGZvb3Rlci50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMSBnaWFubHVjYWNpb25pJztcblx0Y29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuIiwiaW1wb3J0IHsgaHRtbFNrZWxldG9uIH0gZnJvbSAnLi9odG1sU2tlbGV0b24nO1xuaW1wb3J0IHsgY2xlYXJIdG1sIH0gZnJvbSAnLi9jbGVhckh0bWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG5cdGNsZWFySHRtbCgpO1xuXHRodG1sU2tlbGV0b24oKTtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cdGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSAnM2VtJztcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHRpdGxlLmlkID0gJ3RpdGxlJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cdG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdXaW5lJyk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0Fua2lkYSBSaWRnZSBWaW5leWFyZHMgUGlub3QgTm9pciB8IDIwMTcnLFxuXHRcdCdUaGUgcGFsYXRlIGlzIGJlYXV0aWZ1bGx5IGdyaXBweSBhbmQgaW50ZW5zZSwgYW5kIHRoZSBmaW5pc2ggaXMgdW5iZWxpZXZhYmx5IGJyaWdodCBhbmQgcmVmcmVzaGluZy4nLFxuXHRcdCcxMSQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnV2luZScsXG5cdFx0J0NoZW5lIEJsZXUgXCJBYmVsYXJkXCIgMjAxMicsXG5cdFx0J0Fyb21hcyBvZiBjb29raW5nIGhlcmJzIGxpa2Ugcm9zZW1hcnkgYW5kIG9yZWdhbm8sIGFzIHdlbGwgYXMgYnJhbWJseSBiZXJyaWVzLCBnaXZlIHRoaXMgd2luZSBhbiBhdXR1bW5hbCBmZWVsJyxcblx0XHQnMTYkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdMYSBDYW5hIE5hdmlhIEFsYmFyacOxbyB8IDIwMTcnLFxuXHRcdCdJdHMgZGVwdGggb2YgZmxhdm9yIHBsYXlzIG9mZiB0aGUgYXJvbWFzIG9mIHBlYXIsIGhvbmV5c3Vja2xlLCBhbmQgd2hpdGUgcGVwcGVyLicsXG5cdFx0JzgkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdIZXJtYW5uIEouIFdpZW1lciBEcnkgUmllc2xpbmcgfCAyMDE5Jyxcblx0XHQnVGhlIG5vc2Ugb24gdGhpcyB3aW5lIGlzIGZ1bGwgb2YgZmxvcmFsLCBob25leSwgYW5kIGNpdHJ1cyBub3RlcyB0aGF0IHdpbGwgYXdha2VuIHlvdXIgc2Vuc2VzLicsXG5cdFx0JzkkJ1xuXHQpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdDb2NrdGFpbHMnKTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdDb2NrdGFpbHMnLFxuXHRcdCdKdW5nbGUgQmlyZCcsXG5cdFx0J0l0IGRvZXNu4oCZdCBnZXQgbW9yZSBjbGFzc2ljIHRoYW4gdGhlIEp1bmdsZSBCaXJkLCB3aGljaCB3YXMgcmVwb3J0ZWRseSBpbnZlbnRlZCBpbiBLdWFsYSBMdW1wdXIsIE1hbGF5c2lhLCBjaXJjYSAxOTc4LiAnLFxuXHRcdCcxNCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQ29ja3RhaWxzJyxcblx0XHQnTWFuaGF0dGFuJyxcblx0XHQnU3BpY3kgcnllLCBzd2VldCB2ZXJtb3V0aCwgYW5kIHR3byBkYXNoZXMgb2YgQW5nb3N0dXJhLCBzdGlycmVkLCBzdHJhaW5lZCwgYW5kIGdhcm5pc2hlZCB3aXRoIGEgYnJhbmRpZWQgY2hlcnJ5IGNhbiBtYWtlIHlvdSBmZWVsIGxpa2UgYSB0cnVlIGNsYXNzIGFjdC4nLFxuXHRcdCcxMiQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQ29ja3RhaWxzJyxcblx0XHQnTW9zY293IE11bGUnLFxuXHRcdCdUaGlzIGZhbW91cyBtdWctZHdlbGxpbmcgZHJpbmsgY29udGFpbnMgZ2luZ2VyLCB2b2RrYSwgbGltZSwgYW5kIHNvZGEuJyxcblx0XHQnMTEkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0NvY2t0YWlscycsXG5cdFx0J1BlbmljaWxsaW4nLFxuXHRcdCdOb3RoaW5nIGN1cmVzIHRoZSB3ZWFyeSB3aW50ZXIgZHJpbmtlciBsaWtlIGEgUGVuaWNpbGxpbiwgbWFkZSB3aXRoIGJsZW5kZWQgU2NvdGNoLCBzbW9reSBJc2xheSBTY290Y2gsIGxlbW9uIGp1aWNlLCBhbmQgaG9uZXkgZ2luZ2VyIHNpbXBsZSBzeXJ1cC4nLFxuXHRcdCcxMSQnXG5cdCk7XG5cblx0c3ViTWVudUZhY3RvcnkoJ0JlZXJzJyk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQmVlcnMnLFxuXHRcdCdZYXpvbyBEb3MgUGVycm9zIEJyb3duIEFsZScsXG5cdFx0XCJEb3MgUGVycm9zIG5haWxzIHRoZSBicm93biBhbGUncyBudXR0eSBtYWx0IGNoYXJhY3RlciB3aXRoIGEgdG91Y2ggb2YgY2hvY29sYXRlLCBidXQgbGlnaHRlbnMgdGhpbmdzIHVwIGFzIE1leGljYW4gYnJld2VycyBmcmVxdWVudGx5IGRvIHdpdGggZmxha2VkIG1haXplIGZvciBhIHBlcmZlY3QgYmFsYW5jZS5cIixcblx0XHQnOCQnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeShcblx0XHQnQmVlcnMnLFxuXHRcdCdHdWlubmVzcyBEcmF1Z2h0IFN0b3V0Jyxcblx0XHQnR3Vpbm5lc3MgRHJhdWdodCBTdG91dCB3cm90ZSB0aGUgYm9vayBvbiBzdG91dHMsIGxheWluZyB0aGUgZ3JvdW5kd29yayBmb3Igc21vb3RoIGFuZCByb2FzdHkgZGFyayBiZWVycyB3aXRoIGRyZWFteSwgY3JlYW15IGZvYW0uJyxcblx0XHQnMTAkJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J0JlZXJzJyxcblx0XHQnS8O2c3RyaXR6ZXIgU2Nod2FyemJpZXInLFxuXHRcdCdBIHNjaHdhcnpiaWVyIGlzIGEgdHJhZGl0aW9uYWwgR2VybWFuIHN0eWxlIHRoYXQgY29tYmluZXMgdGhlIGVhc3ktZHJpbmtpbmcgbmF0dXJlIG9mIGEgbGFnZXIgd2l0aCB0aGUgY29tcGxleCBmbGF2b3IgcHJvZmlsZSBvZiBhIHBvcnRlciBvciBzdG91dC4nLFxuXHRcdCc5JCdcblx0KTtcblx0bWVudUl0ZW1GYWN0b3J5KFxuXHRcdCdCZWVycycsXG5cdFx0J0NoaW1heSBHcmFuZGUgUmVzZXJ2ZScsXG5cdFx0J1RoZSBHcmFuZGUgUmVzZXJ2ZSBpcyBhIEJlbGdpYW4gU3Ryb25nIEFsZSwgd2hpY2ggYm9hc3RzIGEgYm91cXVldCBvZiBjYXJhbWVsLCB0b2FzdCwgcGx1bSwgZmlnLCByYWlzaW4sIHBlcHBlciwgYW5kIHBlcmZ1bWUgbm90ZXMgd2l0aCBhIGJvb3p5IHdhcm10aC4nLFxuXHRcdCcxMiQnXG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1lbnVJdGVtRmFjdG9yeShzdWJNZW51LCBpdGVtLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN1Yk1lbnUpO1xuXG5cdGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuXHRjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0aXRlbURpdi50ZXh0Q29udGVudCA9IGl0ZW07XG5cdGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcblxuXHRjb25zdCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNjRGl2LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cdGRlc2NEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0ZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXHRjYXJkLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xuXG5cdGNvbnN0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0cHJpY2VEaXYudGV4dENvbnRlbnQgPSBwcmljZTtcblx0cHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChwcmljZURpdik7XG5cblx0bWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gc3ViTWVudUZhY3Rvcnkoc3ViTWVudU5hbWUpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBzdWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc3ViLW1lbnUnKTtcblx0bGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cdGxpc3QuaWQgPSBzdWJNZW51TmFtZTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHN1Yk1lbnVOYW1lO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG5cdHN1Yk1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRzdWJNZW51LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRtYWluLmFwcGVuZENoaWxkKHN1Yk1lbnUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY29udGVudERpdiB9IGZyb20gJy4vaHRtbFNrZWxldG9uJztcblxuY29udGVudERpdigpO1xuY3JlYXRlSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9