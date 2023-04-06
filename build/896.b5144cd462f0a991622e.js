"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[896],{

/***/ 6896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SentMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 598).then(__webpack_require__.bind(__webpack_require__, 5598));
});
function SentMessage(_ref) {
  var state = _ref.state,
    handleSubmit = _ref.handleSubmit,
    setInputEmail = _ref.setInputEmail,
    setInputMessage = _ref.setInputMessage;
  var onHandleButton = function onHandleButton() {
    setInputEmail("");
    setInputMessage("");
    handleSubmit(!state.succeeded);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "SentMessage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Thanks!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The form has been sent succesfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {
    type: "buttton",
    name: "Sent a new message",
    onHandleButton: onHandleButton
  })));
}

/***/ })

}]);