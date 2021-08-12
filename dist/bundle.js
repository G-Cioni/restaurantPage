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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-title {\n\tmargin: 0.5em auto 0 auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\t#content {\n\t\tfont-size: smaller;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,4CAAwC;AACzC;;AAEA;CACC,iCAAiC;CACjC,+BAA+B;AAChC;AACA;CACC,mBAAmB;CACnB,aAAa;CACb;;;wBAGuB;CACvB,uBAAuB;CACvB,aAAa;CACb;yCACsB;CACtB,qBAAqB;CACrB,4BAA4B;CAC5B,kCAAkC;CAClC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,eAAe;AAChB;AACA;CACC,mBAAmB;CACnB,iCAAiC;CACjC,4CAA4C;CAC5C,mBAAmB;CACnB,gBAAgB;CAChB,+BAA+B;;CAE/B,qCAAqC;CACrC,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;AAC1C;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,wCAAwC;CACxC,YAAY;CACZ,mBAAmB;CACnB,4CAA4C;AAC7C;;AAEA;CACC,eAAe;CACf,6BAA6B;AAC9B;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,eAAe;CACf,wCAAwC;CACxC,mBAAmB;CACnB,kBAAkB;CAClB,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,eAAe;CACf,4CAA4C;AAC7C;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,+BAA+B;;CAE/B,gBAAgB;CAChB,4CAA4C;CAC5C,mBAAmB;CACnB,oBAAoB;AACrB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,wCAAwC;CACxC,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,gBAAgB;CAChB,4CAA4C;AAC7C;;AAEA;CACC,qBAAqB;CACrB,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;CAC/B,qCAAqC;AACtC;;AAEA,cAAc;;AAEd;CACC,yBAAyB;CACzB,mDAAmD;CACnD,kBAAkB;AACnB;AACA;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,4CAA4C;CAC5C,mBAAmB;CACnB,WAAW;CACX,qBAAqB;AACtB;AACA;CACC,aAAa;CACb,gCAAgC;AACjC;;AAEA,iBAAiB;;AAEjB;CACC,gBAAgB;AACjB;;AAEA,kBAAkB;;AAElB;CACC;EACC,eAAe;CAChB;AACD;AACA;CACC;EACC,aAAa;EACb,2BAA2B;CAC5B;CACA;EACC,cAAc;CACf;CACA;EACC,oBAAoB;CACrB;AACD;AACA;CACC;EACC,kBAAkB;CACnB;CACA;EACC,kBAAkB;CACnB;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Caveat';\n\tsrc: url(./Caveat-VariableFont_wght.ttf);\n}\n\nbody {\n\tbackground-color: rgb(32, 32, 32);\n\tcolor: rgba(253, 190, 54, 0.89);\n}\n#content {\n\tfont-family: Caveat;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'. main .'\n\t\t'footer footer footer';\n\tjustify-content: center;\n\theight: 100vh;\n\tbackground: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),\n\t\turl('background.jpg');\n\tbackground-size: 320%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tfont-size: 20px;\n}\n\nh1 {\n\tfont-size: 2.5em;\n}\n\nh2 {\n\tfont-size: xx-large;\n}\np {\n\tmin-width: 15em;\n\tmax-width: 25em;\n}\nbutton {\n\tfont-family: Caveat;\n\tbackground-color: rgb(32, 32, 32);\n\tborder: 1px solid rgba(255, 255, 255, 0.082);\n\tborder-radius: 10px;\n\tfont-size: 1.2em;\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\t/* color: rgba(253, 167, 54, 0.89); */\n\tpadding: 0em 0.3em;\n}\n\nbutton:hover {\n\tbackground-color: rgba(32, 32, 32, 0.479);\n}\nheader {\n\tgrid-area: header;\n\ttext-align: center;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\twidth: 100vw;\n\theight: max-content;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n.tab {\n\tdisplay: inline;\n\tmargin: 0rem 1rem 0.4rem 1rem;\n}\n\n#title {\n\tmargin-top: 0;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: max-content;\n\ttext-align: center;\n\tborder-radius: 10px;\n\tfont-size: 1em;\n\tpadding: 2em 3em;\n\tmargin-top: 3em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n#welcome {\n\tmargin: 0 0 -1.3em 0;\n}\n\n#open {\n\tcolor: rgba(253, 190, 54, 0.89);\n\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin-bottom: 1.5em;\n}\n\n#openHours {\n\tmargin: 0;\n}\n\nfooter {\n\tgrid-area: footer;\n\tbackground-color: rgba(31, 31, 31, 0.87);\n\theight: 2em;\n\tpadding-top: 0.75em;\n\ttext-align: center;\n\tmargin-top: auto;\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n}\n\n::-moz-selection {\n\t/* Code for Firefox */\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n::selection {\n\tcolor: rgba(253, 190, 54, 0.89);\n\tbackground: rgba(235, 140, 31, 0.075);\n}\n\n/* Menu Page */\n\n.menu-title {\n\tmargin: 0.5em auto 0 auto;\n\tborder-bottom: 2px solid rgba(255, 255, 255, 0.418);\n\twidth: max-content;\n}\n.menu-card {\n\tpadding: 1em;\n\twidth: 15em;\n}\n\n.menu-card-item {\n\tmargin: 0;\n}\n\n.sub-menu {\n\tborder: 1px solid rgba(255, 255, 255, 0.418);\n\tborder-radius: 10px;\n\tmargin: 1em;\n\tpadding-bottom: 1.3em;\n}\n.list {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* Contact page */\n\n#contact {\n\ttext-align: left;\n}\n\n/* Media queries */\n\n@media screen and (max-height: 865px) {\n\tfooter {\n\t\tmargin-top: 3em;\n\t}\n}\n@media screen and (max-width: 865px) {\n\t.list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto;\n\t}\n\t.menu-card {\n\t\tpadding: 0.7em;\n\t}\n\t.menu-title {\n\t\tmargin-bottom: 0.3em;\n\t}\n}\n@media screen and (max-width: 525px) {\n\t#content {\n\t\tfont-size: smaller;\n\t}\n\th2 {\n\t\tfont-size: x-large;\n\t}\n}\n"],"sourceRoot":""}]);
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
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit totam praesentium eos nostrum labore voluptate ipsa voluptatem magni vero. Corrupti, optio neque repellat itaque corporis temporibus quidem quasi dolores repudiandae?';
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
/* harmony export */   "htmlSkeleton": () => (/* binding */ htmlSkeleton)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
	menuItemFactory('Wine', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory(
		'Wine',
		'Morellino di Scanzano',
		'Red wine from Tuscany',
		'8€'
	);
	menuItemFactory(
		'Wine',
		'Canonau',
		'Red wine from SardegniaRed wine from SardegniaRed wine from SardegniaRed wine from SardegniaRed wine from Sardegnia',
		'7€'
	);
	menuItemFactory('Wine', 'Shiraz', 'Red wine', '7€');

	subMenuFactory('Cocktails');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');

	subMenuFactory('Beers');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


// delete these imports. (they are already in HTML skeleton)
// import { createMenu } from './menu';




(0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)();
(0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUNoRyw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0QywyR0FBaUM7QUFDN0UsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMEJBQTBCLHlEQUF5RCxHQUFHLFVBQVUsc0NBQXNDLG9DQUFvQyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixpR0FBaUcsNEJBQTRCLGtCQUFrQiw4SEFBOEgsMEJBQTBCLGlDQUFpQyx1Q0FBdUMsb0JBQW9CLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHdCQUF3QixHQUFHLEtBQUssb0JBQW9CLG9CQUFvQixHQUFHLFVBQVUsd0JBQXdCLHNDQUFzQyxpREFBaUQsd0JBQXdCLHFCQUFxQixvQ0FBb0MsMENBQTBDLHlCQUF5QixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxVQUFVLHNCQUFzQix1QkFBdUIsNkNBQTZDLGlCQUFpQix3QkFBd0IsaURBQWlELEdBQUcsVUFBVSxvQkFBb0Isa0NBQWtDLEdBQUcsWUFBWSxrQkFBa0IsR0FBRyxVQUFVLG9CQUFvQiw2Q0FBNkMsd0JBQXdCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixvQkFBb0IsaURBQWlELEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxXQUFXLG9DQUFvQyx1QkFBdUIsaURBQWlELHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLFlBQVksc0JBQXNCLDZDQUE2QyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcsc0JBQXNCLDhEQUE4RCwwQ0FBMEMsR0FBRyxpQkFBaUIsb0NBQW9DLDBDQUEwQyxHQUFHLG9DQUFvQyw4QkFBOEIsd0RBQXdELHVCQUF1QixHQUFHLGNBQWMsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQixjQUFjLEdBQUcsZUFBZSxpREFBaUQsd0JBQXdCLGdCQUFnQiwwQkFBMEIsR0FBRyxTQUFTLGtCQUFrQixxQ0FBcUMsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUcsa0VBQWtFLFlBQVksc0JBQXNCLEtBQUssR0FBRyx3Q0FBd0MsV0FBVyxvQkFBb0Isa0NBQWtDLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGlCQUFpQiwyQkFBMkIsS0FBSyxHQUFHLHdDQUF3QyxjQUFjLHlCQUF5QixLQUFLLFFBQVEseUJBQXlCLEtBQUssR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sT0FBTyxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxxQ0FBcUMsMEJBQTBCLDZDQUE2QyxHQUFHLFVBQVUsc0NBQXNDLG9DQUFvQyxHQUFHLFlBQVksd0JBQXdCLGtCQUFrQixpR0FBaUcsNEJBQTRCLGtCQUFrQixvR0FBb0csMEJBQTBCLGlDQUFpQyx1Q0FBdUMsb0JBQW9CLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxRQUFRLHdCQUF3QixHQUFHLEtBQUssb0JBQW9CLG9CQUFvQixHQUFHLFVBQVUsd0JBQXdCLHNDQUFzQyxpREFBaUQsd0JBQXdCLHFCQUFxQixvQ0FBb0MsMENBQTBDLHlCQUF5QixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxVQUFVLHNCQUFzQix1QkFBdUIsNkNBQTZDLGlCQUFpQix3QkFBd0IsaURBQWlELEdBQUcsVUFBVSxvQkFBb0Isa0NBQWtDLEdBQUcsWUFBWSxrQkFBa0IsR0FBRyxVQUFVLG9CQUFvQiw2Q0FBNkMsd0JBQXdCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixvQkFBb0IsaURBQWlELEdBQUcsY0FBYyx5QkFBeUIsR0FBRyxXQUFXLG9DQUFvQyx1QkFBdUIsaURBQWlELHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0IsY0FBYyxHQUFHLFlBQVksc0JBQXNCLDZDQUE2QyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixxQkFBcUIsaURBQWlELEdBQUcsc0JBQXNCLDhEQUE4RCwwQ0FBMEMsR0FBRyxpQkFBaUIsb0NBQW9DLDBDQUEwQyxHQUFHLG9DQUFvQyw4QkFBOEIsd0RBQXdELHVCQUF1QixHQUFHLGNBQWMsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQixjQUFjLEdBQUcsZUFBZSxpREFBaUQsd0JBQXdCLGdCQUFnQiwwQkFBMEIsR0FBRyxTQUFTLGtCQUFrQixxQ0FBcUMsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUcsa0VBQWtFLFlBQVksc0JBQXNCLEtBQUssR0FBRyx3Q0FBd0MsV0FBVyxvQkFBb0Isa0NBQWtDLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGlCQUFpQiwyQkFBMkIsS0FBSyxHQUFHLHdDQUF3QyxjQUFjLHlCQUF5QixLQUFLLFFBQVEseUJBQXlCLEtBQUssR0FBRyxxQkFBcUI7QUFDOTNQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0osb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y4QztBQUNOO0FBQ2pDO0FBQ1AsQ0FBQyxxREFBUztBQUNWLENBQUMsMkRBQVk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCOEM7QUFDTjtBQUNKOztBQUU3QjtBQUNQLENBQUMscURBQVM7QUFDVixDQUFDLDJEQUFZO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsaURBQVU7QUFDbkQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERvQztBQUNBO0FBQ007O0FBRW5DO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlEQUFVO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpREFBVTtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsdURBQWE7QUFDekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzhDO0FBQ047QUFDakM7QUFDUCxDQUFDLHFEQUFTO0FBQ1YsQ0FBQywyREFBWTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCOztBQUVyQjtBQUNBLFlBQVksYUFBYTtBQUNXO0FBQ0E7QUFDTTs7QUFFMUMsaURBQVU7QUFDVix1REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jbGVhckh0bWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2h0bWxTa2VsZXRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9DYXZlYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdDYXZlYXQnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxufVxcbiNjb250ZW50IHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpLFxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAzMjAlO1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDIuNWVtO1xcbn1cXG5cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxucCB7XFxuXFx0bWluLXdpZHRoOiAxNWVtO1xcblxcdG1heC13aWR0aDogMjVlbTtcXG59XFxuYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogQ2F2ZWF0O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgyKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXG5cXHQvKiBjb2xvcjogcmdiYSgyNTMsIDE2NywgNTQsIDAuODkpOyAqL1xcblxcdHBhZGRpbmc6IDBlbSAwLjNlbTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuNDc5KTtcXG59XFxuaGVhZGVyIHtcXG5cXHRncmlkLWFyZWE6IGhlYWRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuLnRhYiB7XFxuXFx0ZGlzcGxheTogaW5saW5lO1xcblxcdG1hcmdpbjogMHJlbSAxcmVtIDAuNHJlbSAxcmVtO1xcbn1cXG5cXG4jdGl0bGUge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcblxcbm1haW4ge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMSwgMzEsIDAuODcpO1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMmVtIDNlbTtcXG5cXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbiN3ZWxjb21lIHtcXG5cXHRtYXJnaW46IDAgMCAtMS4zZW0gMDtcXG59XFxuXFxuI29wZW4ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0cGFkZGluZy10b3A6IDFlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbn1cXG5cXG4jb3BlbkhvdXJzIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0Z3JpZC1hcmVhOiBmb290ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRwYWRkaW5nLXRvcDogMC43NWVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG5cXHQvKiBDb2RlIGZvciBGaXJlZm94ICovXFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMTQwLCAzMSwgMC4wNzUpO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMTQwLCAzMSwgMC4wNzUpO1xcbn1cXG5cXG4vKiBNZW51IFBhZ2UgKi9cXG5cXG4ubWVudS10aXRsZSB7XFxuXFx0bWFyZ2luOiAwLjVlbSBhdXRvIDAgYXV0bztcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ubWVudS1jYXJkIHtcXG5cXHRwYWRkaW5nOiAxZW07XFxuXFx0d2lkdGg6IDE1ZW07XFxufVxcblxcbi5tZW51LWNhcmQtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc3ViLW1lbnUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0bWFyZ2luOiAxZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuM2VtO1xcbn1cXG4ubGlzdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuI2NvbnRhY3Qge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODY1cHgpIHtcXG5cXHRmb290ZXIge1xcblxcdFxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2NXB4KSB7XFxuXFx0Lmxpc3Qge1xcblxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcblxcdH1cXG5cXHQubWVudS1jYXJkIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjdlbTtcXG5cXHR9XFxuXFx0Lm1lbnUtdGl0bGUge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDAuM2VtO1xcblxcdH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcXG5cXHQjY29udGVudCB7XFxuXFx0XFx0Zm9udC1zaXplOiBzbWFsbGVyO1xcblxcdH1cXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiB4LWxhcmdlO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQiw0Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiOzs7d0JBR3VCO0NBQ3ZCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2I7eUNBQ3NCO0NBQ3RCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDLDRDQUE0QztDQUM1QyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLCtCQUErQjs7Q0FFL0IscUNBQXFDO0NBQ3JDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQix3Q0FBd0M7Q0FDeEMsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHdDQUF3QztDQUN4QyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQywrQkFBK0I7O0NBRS9CLGdCQUFnQjtDQUNoQiw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix3Q0FBd0M7Q0FDeEMsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiwrQkFBK0I7Q0FDL0IscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLHFDQUFxQztBQUN0Qzs7QUFFQSxjQUFjOztBQUVkO0NBQ0MseUJBQXlCO0NBQ3pCLG1EQUFtRDtDQUNuRCxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixnQ0FBZ0M7QUFDakM7O0FBRUEsaUJBQWlCOztBQUVqQjtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsYUFBYTtFQUNiLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsY0FBYztDQUNmO0NBQ0E7RUFDQyxvQkFBb0I7Q0FDckI7QUFDRDtBQUNBO0NBQ0M7RUFDQyxrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcXG5cXHRzcmM6IHVybCguL0NhdmVhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Y29sb3I6IHJnYmEoMjUzLCAxOTAsIDU0LCAwLjg5KTtcXG59XFxuI2NvbnRlbnQge1xcblxcdGZvbnQtZmFtaWx5OiBDYXZlYXQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0J2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC4yKSksXFxuXFx0XFx0dXJsKCdiYWNrZ3JvdW5kLmpwZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMzIwJTtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuaDIge1xcblxcdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbnAge1xcblxcdG1pbi13aWR0aDogMTVlbTtcXG5cXHRtYXgtd2lkdGg6IDI1ZW07XFxufVxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IENhdmVhdDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4Mik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFxuXFx0LyogY29sb3I6IHJnYmEoMjUzLCAxNjcsIDU0LCAwLjg5KTsgKi9cXG5cXHRwYWRkaW5nOiAwZW0gMC4zZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjQ3OSk7XFxufVxcbmhlYWRlciB7XFxuXFx0Z3JpZC1hcmVhOiBoZWFkZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxufVxcblxcbi50YWIge1xcblxcdGRpc3BsYXk6IGlubGluZTtcXG5cXHRtYXJnaW46IDByZW0gMXJlbSAwLjRyZW0gMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5tYWluIHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAwLjg3KTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDJlbSAzZW07XFxuXFx0bWFyZ2luLXRvcDogM2VtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcbn1cXG5cXG4jd2VsY29tZSB7XFxuXFx0bWFyZ2luOiAwIDAgLTEuM2VtIDA7XFxufVxcblxcbiNvcGVuIHtcXG5cXHRjb2xvcjogcmdiYSgyNTMsIDE5MCwgNTQsIDAuODkpO1xcblxcblxcdHBhZGRpbmctdG9wOiAxZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxOCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuI29wZW5Ib3VycyB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGdyaWQtYXJlYTogZm9vdGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDMxLCAzMSwgMC44Nyk7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0bWFyZ2luLXRvcDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG59XFxuXFxuOjotbW96LXNlbGVjdGlvbiB7XFxuXFx0LyogQ29kZSBmb3IgRmlyZWZveCAqL1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGNvbG9yOiByZ2JhKDI1MywgMTkwLCA1NCwgMC44OSk7XFxuXFx0YmFja2dyb3VuZDogcmdiYSgyMzUsIDE0MCwgMzEsIDAuMDc1KTtcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLm1lbnUtdGl0bGUge1xcblxcdG1hcmdpbjogMC41ZW0gYXV0byAwIGF1dG87XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuLm1lbnUtY2FyZCB7XFxuXFx0cGFkZGluZzogMWVtO1xcblxcdHdpZHRoOiAxNWVtO1xcbn1cXG5cXG4ubWVudS1jYXJkLWl0ZW0ge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnN1Yi1tZW51IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDE4KTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG1hcmdpbjogMWVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjNlbTtcXG59XFxuLmxpc3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcblxcbiNjb250YWN0IHtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDg2NXB4KSB7XFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAzZW07XFxuXFx0fVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjVweCkge1xcblxcdC5saXN0IHtcXG5cXHRcXHRkaXNwbGF5OiBncmlkO1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG5cXHR9XFxuXFx0Lm1lbnUtY2FyZCB7XFxuXFx0XFx0cGFkZGluZzogMC43ZW07XFxuXFx0fVxcblxcdC5tZW51LXRpdGxlIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XFxuXFx0I2NvbnRlbnQge1xcblxcdFxcdGZvbnQtc2l6ZTogc21hbGxlcjtcXG5cXHR9XFxuXFx0aDIge1xcblxcdFxcdGZvbnQtc2l6ZTogeC1sYXJnZTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gY2xlYXJIdG1sKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xufVxuIiwiaW1wb3J0IHsgaHRtbFNrZWxldG9uIH0gZnJvbSAnLi9odG1sU2tlbGV0b24nO1xuaW1wb3J0IHsgY2xlYXJIdG1sIH0gZnJvbSAnLi9jbGVhckh0bWwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG5cdGNsZWFySHRtbCgpO1xuXHRodG1sU2tlbGV0b24oKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcblx0dGl0bGUuaWQgPSAndGl0bGUnO1xuXHRtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG5cdG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cdGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogKzEgMjEyLTEyMy0wMTIzJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG5cdGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRlbWFpbC50ZXh0Q29udGVudCA9ICdFbWFpbDogaW5mb0Bkcmlua3MuY29tJztcblx0Y29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XG5cdGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGFkZHJlc3MudGV4dENvbnRlbnQgPVxuXHRcdCdBZGRyZXNzOiA1NyBDaHVyY2ggU3QsIE5ldyBZb3JrLCBOWSAxMDAwNywgVW5pdGVkIFN0YXRlcyc7XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG59XG4iLCJpbXBvcnQgeyBodG1sU2tlbGV0b24gfSBmcm9tICcuL2h0bWxTa2VsZXRvbic7XG5pbXBvcnQgeyBjbGVhckh0bWwgfSBmcm9tICcuL2NsZWFySHRtbCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG5cdGNsZWFySHRtbCgpO1xuXHRodG1sU2tlbGV0b24oKTtcblx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuXHRjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0d2VsY29tZS5pZCA9ICd3ZWxjb21lJztcblx0d2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvJztcblx0bWFpbi5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcblxuXHRjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskJztcblx0bWFpbi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cblx0Y29uc3Qgb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRvcGVuLmlkID0gJ29wZW4nO1xuXHRtYWluLmFwcGVuZENoaWxkKG9wZW4pO1xuXG5cdGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG5cdG9wZW5Ib3Vycy5pZCA9ICdvcGVuSG91cnMnO1xuXHRpZiAobm93LmdldERheSgpID4gNSkge1xuXHRcdG5vdy5nZXRIb3VycygpIDwgMTNcblx0XHRcdD8gKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIENMT1NFRCcpXG5cdFx0XHQ6IChvcGVuSG91cnMudGV4dENvbnRlbnQgPSAnxJDQry9OSyQgLyBPUEVOJyk7XG5cdH0gZWxzZSB7XG5cdFx0bm93LmdldEhvdXJzKCkgPCAxOVxuXHRcdFx0PyAob3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskIC8gQ0xPU0VEJylcblx0XHRcdDogKG9wZW5Ib3Vycy50ZXh0Q29udGVudCA9ICfEkNCvL05LJCAvIE9QRU4nKTtcblx0fVxuXG5cdG9wZW4uYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcblxuXHRjb25zdCBob3VyczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRob3VyczEudGV4dENvbnRlbnQgPSAnTW9uIC0gRnJpOiAxOTowMCAtIDI0OjAwJztcblx0b3Blbi5hcHBlbmRDaGlsZChob3VyczEpO1xuXG5cdGNvbnN0IGhvdXJzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdGhvdXJzMi50ZXh0Q29udGVudCA9ICdTYXQgLSBTdW46IDEzOjAwIC0gMjQ6MDAnO1xuXHRvcGVuLmFwcGVuZENoaWxkKGhvdXJzMik7XG5cblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxuXHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2l0IHRvdGFtIHByYWVzZW50aXVtIGVvcyBub3N0cnVtIGxhYm9yZSB2b2x1cHRhdGUgaXBzYSB2b2x1cHRhdGVtIG1hZ25pIHZlcm8uIENvcnJ1cHRpLCBvcHRpbyBuZXF1ZSByZXBlbGxhdCBpdGFxdWUgY29ycG9yaXMgdGVtcG9yaWJ1cyBxdWlkZW0gcXVhc2kgZG9sb3JlcyByZXB1ZGlhbmRhZT8nO1xuXHRtYWluLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTWVudSgpKTtcblx0bWFpbi5hcHBlbmRDaGlsZChtZW51QnRuKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWxTa2VsZXRvbigpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHRjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ8SQ0K8vTkskJztcblx0aGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuXHRjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cdGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVIb21lKCkpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cblx0Y29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXHRtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTWVudSgpKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG5cdGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0Y29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblx0Y29udGFjdFRhYi50ZXh0Q29udGVudCA9ICdDb250YWN0Jztcblx0Y29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZUNvbnRhY3QoKSk7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXHRmb290ZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjEgZ2lhbmx1Y2FjaW9uaSc7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImltcG9ydCB7IGh0bWxTa2VsZXRvbiB9IGZyb20gJy4vaHRtbFNrZWxldG9uJztcbmltcG9ydCB7IGNsZWFySHRtbCB9IGZyb20gJy4vY2xlYXJIdG1sJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuXHRjbGVhckh0bWwoKTtcblx0aHRtbFNrZWxldG9uKCk7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXHRmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gJzNlbSc7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHR0aXRsZS5pZCA9ICd0aXRsZSc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXHRtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuXHRzdWJNZW51RmFjdG9yeSgnV2luZScpO1xuXHRtZW51SXRlbUZhY3RvcnkoJ1dpbmUnLCAnQ2hpYW50aScsICdSZWQgd2luZSBmcm9tIFR1c2NhbnknLCAnN+KCrCcpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdNb3JlbGxpbm8gZGkgU2Nhbnphbm8nLFxuXHRcdCdSZWQgd2luZSBmcm9tIFR1c2NhbnknLFxuXHRcdCc44oKsJ1xuXHQpO1xuXHRtZW51SXRlbUZhY3RvcnkoXG5cdFx0J1dpbmUnLFxuXHRcdCdDYW5vbmF1Jyxcblx0XHQnUmVkIHdpbmUgZnJvbSBTYXJkZWduaWFSZWQgd2luZSBmcm9tIFNhcmRlZ25pYVJlZCB3aW5lIGZyb20gU2FyZGVnbmlhUmVkIHdpbmUgZnJvbSBTYXJkZWduaWFSZWQgd2luZSBmcm9tIFNhcmRlZ25pYScsXG5cdFx0JzfigqwnXG5cdCk7XG5cdG1lbnVJdGVtRmFjdG9yeSgnV2luZScsICdTaGlyYXonLCAnUmVkIHdpbmUnLCAnN+KCrCcpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdDb2NrdGFpbHMnKTtcblx0bWVudUl0ZW1GYWN0b3J5KCdDb2NrdGFpbHMnLCAnQ2hpYW50aScsICdSZWQgd2luZSBmcm9tIFR1c2NhbnknLCAnN+KCrCcpO1xuXHRtZW51SXRlbUZhY3RvcnkoJ0NvY2t0YWlscycsICdDaGlhbnRpJywgJ1JlZCB3aW5lIGZyb20gVHVzY2FueScsICc34oKsJyk7XG5cdG1lbnVJdGVtRmFjdG9yeSgnQ29ja3RhaWxzJywgJ0NoaWFudGknLCAnUmVkIHdpbmUgZnJvbSBUdXNjYW55JywgJzfigqwnKTtcblx0bWVudUl0ZW1GYWN0b3J5KCdDb2NrdGFpbHMnLCAnQ2hpYW50aScsICdSZWQgd2luZSBmcm9tIFR1c2NhbnknLCAnN+KCrCcpO1xuXG5cdHN1Yk1lbnVGYWN0b3J5KCdCZWVycycpO1xuXHRtZW51SXRlbUZhY3RvcnkoJ0JlZXJzJywgJ0NoaWFudGknLCAnUmVkIHdpbmUgZnJvbSBUdXNjYW55JywgJzfigqwnKTtcblx0bWVudUl0ZW1GYWN0b3J5KCdCZWVycycsICdDaGlhbnRpJywgJ1JlZCB3aW5lIGZyb20gVHVzY2FueScsICc34oKsJyk7XG5cdG1lbnVJdGVtRmFjdG9yeSgnQmVlcnMnLCAnQ2hpYW50aScsICdSZWQgd2luZSBmcm9tIFR1c2NhbnknLCAnN+KCrCcpO1xuXHRtZW51SXRlbUZhY3RvcnkoJ0JlZXJzJywgJ0NoaWFudGknLCAnUmVkIHdpbmUgZnJvbSBUdXNjYW55JywgJzfigqwnKTtcbn1cblxuZnVuY3Rpb24gbWVudUl0ZW1GYWN0b3J5KHN1Yk1lbnUsIGl0ZW0sIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ViTWVudSk7XG5cblx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG5cdGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRpdGVtRGl2LnRleHRDb250ZW50ID0gaXRlbTtcblx0aXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQtaXRlbScpO1xuXHRjYXJkLmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuXG5cdGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRlc2NEaXYudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblx0ZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQtaXRlbScpO1xuXHRjYXJkLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xuXG5cdGNvbnN0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblx0cHJpY2VEaXYudGV4dENvbnRlbnQgPSBwcmljZTtcblx0cHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkLWl0ZW0nKTtcblx0Y2FyZC5hcHBlbmRDaGlsZChwcmljZURpdik7XG5cblx0bWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gc3ViTWVudUZhY3Rvcnkoc3ViTWVudU5hbWUpIHtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBzdWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc3ViLW1lbnUnKTtcblx0bGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG5cdGxpc3QuaWQgPSBzdWJNZW51TmFtZTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHN1Yk1lbnVOYW1lO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG5cdHN1Yk1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRzdWJNZW51LmFwcGVuZENoaWxkKGxpc3QpO1xuXHRtYWluLmFwcGVuZENoaWxkKHN1Yk1lbnUpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gZGVsZXRlIHRoZXNlIGltcG9ydHMuICh0aGV5IGFyZSBhbHJlYWR5IGluIEhUTUwgc2tlbGV0b24pXG4vLyBpbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcblxuY3JlYXRlSG9tZSgpO1xuY3JlYXRlQ29udGFjdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9