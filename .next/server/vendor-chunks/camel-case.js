/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/camel-case";
exports.ids = ["vendor-chunks/camel-case"];
exports.modules = {

/***/ "(ssr)/./node_modules/camel-case/camel-case.js":
/*!***********************************************!*\
  !*** ./node_modules/camel-case/camel-case.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var upperCase = __webpack_require__(/*! upper-case */ \"(ssr)/./node_modules/upper-case/upper-case.js\");\nvar noCase = __webpack_require__(/*! no-case */ \"(ssr)/./node_modules/no-case/no-case.js\");\n/**\n * Camel case a string.\n *\n * @param  {string} value\n * @param  {string} [locale]\n * @return {string}\n */ module.exports = function(value, locale, mergeNumbers) {\n    var result = noCase(value, locale);\n    // Replace periods between numeric entities with an underscore.\n    if (!mergeNumbers) {\n        result = result.replace(/ (?=\\d)/g, \"_\");\n    }\n    // Replace spaces between words with an upper cased character.\n    return result.replace(/ (.)/g, function(m, $1) {\n        return upperCase($1, locale);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9jYW1lbC1jYXNlLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDO0FBQ3hCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBRXJCOzs7Ozs7Q0FNQyxHQUNERSxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDcEQsSUFBSUMsU0FBU04sT0FBT0csT0FBT0M7SUFFM0IsK0RBQStEO0lBQy9ELElBQUksQ0FBQ0MsY0FBYztRQUNqQkMsU0FBU0EsT0FBT0MsT0FBTyxDQUFDLFlBQVk7SUFDdEM7SUFFQSw4REFBOEQ7SUFDOUQsT0FBT0QsT0FBT0MsT0FBTyxDQUFDLFNBQVMsU0FBVUMsQ0FBQyxFQUFFQyxFQUFFO1FBQzVDLE9BQU9YLFVBQVVXLElBQUlMO0lBQ3ZCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9jYW1lbC1jYXNlLmpzPzJlNDUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHVwcGVyQ2FzZSA9IHJlcXVpcmUoJ3VwcGVyLWNhc2UnKVxudmFyIG5vQ2FzZSA9IHJlcXVpcmUoJ25vLWNhc2UnKVxuXG4vKipcbiAqIENhbWVsIGNhc2UgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtICB7c3RyaW5nfSBbbG9jYWxlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbG9jYWxlLCBtZXJnZU51bWJlcnMpIHtcbiAgdmFyIHJlc3VsdCA9IG5vQ2FzZSh2YWx1ZSwgbG9jYWxlKVxuXG4gIC8vIFJlcGxhY2UgcGVyaW9kcyBiZXR3ZWVuIG51bWVyaWMgZW50aXRpZXMgd2l0aCBhbiB1bmRlcnNjb3JlLlxuICBpZiAoIW1lcmdlTnVtYmVycykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC8gKD89XFxkKS9nLCAnXycpXG4gIH1cblxuICAvLyBSZXBsYWNlIHNwYWNlcyBiZXR3ZWVuIHdvcmRzIHdpdGggYW4gdXBwZXIgY2FzZWQgY2hhcmFjdGVyLlxuICByZXR1cm4gcmVzdWx0LnJlcGxhY2UoLyAoLikvZywgZnVuY3Rpb24gKG0sICQxKSB7XG4gICAgcmV0dXJuIHVwcGVyQ2FzZSgkMSwgbG9jYWxlKVxuICB9KVxufVxuIl0sIm5hbWVzIjpbInVwcGVyQ2FzZSIsInJlcXVpcmUiLCJub0Nhc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwidmFsdWUiLCJsb2NhbGUiLCJtZXJnZU51bWJlcnMiLCJyZXN1bHQiLCJyZXBsYWNlIiwibSIsIiQxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/camel-case/camel-case.js\n");

/***/ })

};
;