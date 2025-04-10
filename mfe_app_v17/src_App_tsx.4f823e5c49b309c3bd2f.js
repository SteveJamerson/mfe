"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe_app_v17"] = self["webpackChunkmfe_app_v17"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?474c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_count_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/count.context */ \"./src/contexts/count.context.tsx\");\n/* harmony import */ var _components_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/count */ \"./src/components/count.tsx\");\n\n\n\nconst App = () => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_count_context__WEBPACK_IMPORTED_MODULE_1__.CounterProvider, null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Microfrontend Application - Version 17 \"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://mfe-app-v17/./src/App.tsx?");

/***/ }),

/***/ "./src/components/count.tsx":
/*!**********************************!*\
  !*** ./src/components/count.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?474c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_count_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/count.context */ \"./src/contexts/count.context.tsx\");\n\n\nconst Counter = () => {\n    const { count, increment, decrement } = (0,_contexts_count_context__WEBPACK_IMPORTED_MODULE_1__.useCounter)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null,\n            \"Valor atual: \",\n            count),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { onClick: increment }, \"Incrementar\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { onClick: decrement }, \"Decrementar\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n\n//# sourceURL=webpack://mfe-app-v17/./src/components/count.tsx?");

/***/ }),

/***/ "./src/contexts/count.context.tsx":
/*!****************************************!*\
  !*** ./src/contexts/count.context.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CounterProvider: () => (/* binding */ CounterProvider),\n/* harmony export */   useCounter: () => (/* binding */ useCounter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?474c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_count_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/count.hook */ \"./src/hooks/count.hook.ts\");\n\n\nconst CounterContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useCounter = () => {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CounterContext);\n};\nconst CounterProvider = ({ children }) => {\n    const { count, decrement, increment } = (0,_hooks_count_hook__WEBPACK_IMPORTED_MODULE_1__.useCounterState)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CounterContext.Provider, { value: { count, increment, decrement } }, children));\n};\n\n\n//# sourceURL=webpack://mfe-app-v17/./src/contexts/count.context.tsx?");

/***/ }),

/***/ "./src/hooks/count.hook.ts":
/*!*********************************!*\
  !*** ./src/hooks/count.hook.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCounterState: () => (/* binding */ useCounterState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?474c\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useCounterState = () => {\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const increment = () => setCount((prev) => prev + 1);\n    const decrement = () => setCount((prev) => prev - 1);\n    return { count, increment, decrement };\n};\n\n\n//# sourceURL=webpack://mfe-app-v17/./src/hooks/count.hook.ts?");

/***/ })

}]);