"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/about/page",{

/***/ "(app-pages-browser)/./app/(pages)/about/page.tsx":
/*!************************************!*\
  !*** ./app/(pages)/about/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"preet665\";\n    const repoName = \"b2b-match-ui-docs\";\n    const filePath = \"aboutus.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Home() {\n    _s();\n    const [htmlContent, setHtmlContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(Home, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2Fib3V0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQVNhO0FBRzVDLGVBQWVHO0lBQ2IsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVcsZ0JBQWdCLDhCQUE4QjtJQUUvRCxNQUFNQyxTQUFTLGdDQUE2Q0YsT0FBYkQsV0FBVSxLQUF3QkUsT0FBckJELFVBQVMsY0FBcUIsT0FBVEM7SUFFakYsSUFBSTtRQUNGLE1BQU1FLFdBQVcsTUFBTUMsTUFBTUY7UUFDN0IsTUFBTUcsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBRWhDLHVEQUF1RDtRQUN2RCxNQUFNQyxnQkFBZ0JGLEtBQUtHLE9BQU87UUFFbEMsd0JBQXdCO1FBQ3hCLE1BQU1DLGNBQWNDLEtBQUtIO1FBRXpCLE9BQU9FO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU87SUFDVDtBQUNGO0FBRWUsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0osYUFBYUssZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsbUVBQW1FO1FBQ25FLE1BQU1tQixZQUFZO1lBQ2hCLE1BQU1QLFVBQVUsTUFBTVY7WUFDdEIsSUFBSVUsU0FBUztnQkFDWEksUUFBUUksR0FBRyxDQUFDLGlCQUFpQlI7Z0JBQzdCTSxlQUFlTjtZQUNmLG9FQUFvRTtZQUN0RTtRQUNGO1FBRUFPO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7QUFJSjtHQXJCd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL2Fib3V0L3BhZ2UudHN4PzU0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hIdG1sQ29udGVudCgpIHtcclxuICBjb25zdCByZXBvT3duZXIgPSBcInByZWV0NjY1XCI7XHJcbiAgY29uc3QgcmVwb05hbWUgPSBcImIyYi1tYXRjaC11aS1kb2NzXCI7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBcImFib3V0dXMuaHRtbFwiOyAvLyBVcGRhdGUgd2l0aCB0aGUgYWN0dWFsIHBhdGhcclxuXHJcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtyZXBvT3duZXJ9LyR7cmVwb05hbWV9L2NvbnRlbnRzLyR7ZmlsZVBhdGh9YDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgLy8gVXNlIHRoZSAnY29udGVudCcgcHJvcGVydHkgZGlyZWN0bHkgZm9yIEhUTUwgY29udGVudFxyXG4gICAgY29uc3QgYmFzZTY0Q29udGVudCA9IGRhdGEuY29udGVudDtcclxuXHJcbiAgICAvLyBEZWNvZGUgYmFzZTY0IGNvbnRlbnRcclxuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gYXRvYihiYXNlNjRDb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gaHRtbENvbnRlbnQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBIVE1MIGNvbnRlbnQ6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbaHRtbENvbnRlbnQsIHNldEh0bWxDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2FsbCB0aGUgZmV0Y2hIdG1sQ29udGVudCBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmV0Y2hIdG1sQ29udGVudCgpO1xyXG4gICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSFRNTCBDb250ZW50OlwiLCBjb250ZW50KTtcclxuICAgICAgICBzZXRIdG1sQ29udGVudChjb250ZW50KTtcclxuICAgICAgICAvLyBVcGRhdGUgeW91ciBjb21wb25lbnQgc3RhdGUgb3IgZG8gc29tZXRoaW5nIHdpdGggdGhlIEhUTUwgY29udGVudFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hIdG1sQ29udGVudCIsInJlcG9Pd25lciIsInJlcG9OYW1lIiwiZmlsZVBhdGgiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJiYXNlNjRDb250ZW50IiwiY29udGVudCIsImh0bWxDb250ZW50IiwiYXRvYiIsImVycm9yIiwiY29uc29sZSIsIkhvbWUiLCJzZXRIdG1sQ29udGVudCIsImZldGNoRGF0YSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/about/page.tsx\n"));

/***/ })

});