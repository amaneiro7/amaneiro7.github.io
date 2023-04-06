"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[574],{

/***/ 5574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_Navbar_Navbar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Navbar/Navbar.css
var Navbar = __webpack_require__(4684);
;// CONCATENATED MODULE: ./src/Components/Navbar/Navbar.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Navbar/* default */.Z, options);




       /* harmony default export */ const Navbar_Navbar = (Navbar/* default */.Z && Navbar/* default.locals */.Z.locals ? Navbar/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Navbar/index.jsx



function Components_Navbar_Navbar() {
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return /*#__PURE__*/react.createElement("nav", {
    id: "navbar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "navbar__container"
  }, /*#__PURE__*/react.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react.createElement("img", {
    className: "navbar__logo",
    src: "./../../assets/images/profile-pic.png",
    alt: "profile pic"
  }), /*#__PURE__*/react.createElement("p", null, "Andres Maneiro", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("small", null, "IT Support | Frontend Developer"))), /*#__PURE__*/react.createElement("button", {
    className: "navbar__btn ".concat(state && "active"),
    onClick: function onClick() {
      return setState(!state);
    }
  }, "\u2630")), state && /*#__PURE__*/react.createElement("div", {
    className: "navbar__menu ".concat(state && "active")
  }, /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#aboutme",
    onClick: function onClick() {
      return setState(false);
    }
  }, "About Me")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#portfolio",
    onClick: function onClick() {
      return setState(false);
    }
  }, "Portfolio")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#skillset",
    onClick: function onClick() {
      return setState(false);
    }
  }, "Skillset")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#achievements",
    onClick: function onClick() {
      return setState(false);
    }
  }, "Achievements")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "#contact",
    onClick: function onClick() {
      return setState(false);
    }
  }, "Contact")))));
}

/***/ }),

/***/ 4684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#navbar {\r\n    width: 100%;\r\n    height: auto;\r\n    background: linear-gradient(var(--lt-bk3), var(--lt-bk4));    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    top: 0;\r\n    position: sticky;\r\n    z-index: 10;\r\n}\r\n\r\n.navbar__container {\r\n    width: 100%;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 1rem;\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\r\n}\r\n\r\n.navbar__container a {\r\n    margin-left: .5rem;\r\n    align-items: center;\r\n    color: var(--lt-tx);\r\n    display: flex;\r\n    padding: 1rem .5rem;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar__container a span {\r\n    font-size: 1rem;\r\n}\r\n\r\n.navbar__container a span:hover {\r\n    color: var(--lt-tx2);\r\n}\r\n\r\n#navbar .navbar__logo {\r\n    width: 24px;\r\n    height: 24px;\r\n    border-radius: 50%;\r\n    margin-right: .5rem;\r\n}\r\n\r\n#navbar .navbar__btn {\r\n    width: 35px;\r\n    height: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: var(--lt-tx);\r\n    cursor: pointer;\r\n    font-size: 2.4rem;\r\n    margin: .7rem;\r\n    padding: .2rem .7rem;    \r\n    border-radius: 2rem;\r\n    transition: background-color .5s ease, color .5s ease;\r\n}\r\n\r\n#navbar .navbar__btn.active {\r\n    background-color: var(--lt-tx);\r\n    color: var(--tx-action);\r\n}\r\n\r\n#navbar .navbar__menu  {\r\n    width: 100%;\r\n    max-height: 0;\r\n    border-top: 1px solid rgba(255, 255, 255, .1);    \r\n    overflow: hidden;\r\n    background: linear-gradient(var(--lt-bk3), var(--lt-bk4));\r\n    opacity: 0;    \r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 10;\r\n    animation: fadeOut .6s;\r\n}\r\n\r\n@keyframes fadeOut {\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n#navbar .navbar__menu.active {\r\n    max-height: 450px;    \r\n    animation: fadeIn .6s;\r\n    opacity: 1;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n#navbar .navbar__menu.active ul li a {\r\n    display: block;\r\n}\r\n\r\n#navbar ul li {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n#navbar ul li a,\r\n#navbar ul li a:active {\r\n    font-size: 1.5rem;\r\n    color: var(--lt-tx2);    \r\n    padding: 10px 15px;\r\n    text-decoration: none;\r\n    transition: color .3s ease, background-color .3s ease;\r\n}\r\n\r\n#navbar ul li a:hover {\r\n    background-color: var(--lt-bk1);\r\n    color: var(--lt-tx);\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _slicedToArray)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/***/ })

}]);