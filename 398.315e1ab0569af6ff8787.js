"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[398],{

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var ALinkButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 315).then(__webpack_require__.bind(__webpack_require__, 315));
});
function PortfolioList(_ref) {
  var project = _ref.project;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: project.image,
    alt: project.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, project.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ALinkButton, {
    name: "Watch Here",
    link: project.deploy_link
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ALinkButton, {
    name: "Repository",
    link: project.repository_link
  }));
}

/***/ })

}]);