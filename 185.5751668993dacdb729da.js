"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[185],{

/***/ 4185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _formspree_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3556);


var Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/* import() */ 598).then(__webpack_require__.bind(__webpack_require__, 5598));
});
function Form(_ref) {
  var handleSubmit = _ref.handleSubmit,
    state = _ref.state,
    inputEmail = _ref.inputEmail,
    inputMessage = _ref.inputMessage,
    setInputEmail = _ref.setInputEmail,
    setInputMessage = _ref.setInputMessage;
  var onChangeInputEmail = function onChangeInputEmail(_ref2) {
    var value = _ref2.target.value;
    setInputEmail(value);
  };
  var onChangeInputMessage = function onChangeInputMessage(_ref3) {
    var value = _ref3.target.value;
    setInputMessage(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email"
  }, "Email Address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Introduce your email",
    required: true,
    value: inputEmail,
    onChange: onChangeInputEmail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_formspree_react__WEBPACK_IMPORTED_MODULE_1__/* .ValidationError */ .p8, {
    prefix: "Email",
    field: "email",
    errors: state.errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: ""
  }, "Your message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    id: "message",
    name: "message",
    placeholder: "Leave a message",
    value: inputMessage,
    onChange: onChangeInputMessage,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_formspree_react__WEBPACK_IMPORTED_MODULE_1__/* .ValidationError */ .p8, {
    prefix: "Message",
    field: "message",
    errors: state.errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {
    name: "Send",
    type: "submit",
    disabled: state.disabled
  })));
}

/***/ })

}]);