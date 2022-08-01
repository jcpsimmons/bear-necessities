/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JlYXItbmVjZXNzaXRpZXMvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/string */ \"./utils/string.ts\");\n\n\n\n\nconst Home = ({ posts  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.frontmatter.title\n                    }, void 0, false, {\n                        fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.frontmatter.preview\n                    }, void 0, false, {\n                        fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, post.slug, true, {\n                fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticProps() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"posts\");\n    let filesSortedByDate = files.sort((a, b)=>{\n        let aStat = fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(`${posts}/${a}`), bStat = fs__WEBPACK_IMPORTED_MODULE_1___default().statSync(`${posts}/${b}`);\n        return new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime();\n    });\n    const posts = filesSortedByDate.map((filename)=>{\n        const filenameNoExtension = filename.split(\".\")[0];\n        const slug = filenameNoExtension.replace(/ /g, \"-\").toLowerCase();\n        const readFile = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`posts/${filename}`, \"utf8\");\n        const frontmatter = {\n            preview: readFile.slice(0, 10),\n            title: (0,_utils_string__WEBPACK_IMPORTED_MODULE_2__.titleCase)(filenameNoExtension)\n        };\n        return {\n            slug,\n            frontmatter\n        };\n    });\n    console.log(posts);\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFHb0I7QUFDMkI7QUFDSDtBQVc1QyxNQUFNRyxJQUFJLEdBQW9CLENBQUMsRUFBRUMsS0FBSyxHQUFFLEdBQUs7SUFDM0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCwwRUFBZ0I7a0JBQzdCRyxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxJQUFVLEdBQUs7WUFDekIscUJBQ0UsOERBQUNKLEtBQUc7O2tDQUNGLDhEQUFDSyxJQUFFO2tDQUFFRCxJQUFJLENBQUNFLFdBQVcsQ0FBQ0MsS0FBSzs7Ozs7aUNBQU07a0NBQ2pDLDhEQUFDQyxHQUFDO2tDQUFFSixJQUFJLENBQUNFLFdBQVcsQ0FBQ0csT0FBTzs7Ozs7aUNBQUs7O2VBRnpCTCxJQUFJLENBQUNNLElBQUk7Ozs7eUJBR2IsQ0FDTjtTQUNILENBQUM7Ozs7O2lCQUNFLENBQ047Q0FDSDtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUdqQixxREFBYyxDQUFDLE9BQU8sQ0FBQztJQUVyQyxJQUFJbUIsaUJBQWlCLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLO1FBQzNDLElBQUlDLEtBQUssR0FBR3ZCLGtEQUFXLENBQUMsQ0FBQyxFQUFFSSxLQUFLLENBQUMsQ0FBQyxFQUFFaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN0Q0ksS0FBSyxHQUFHekIsa0RBQVcsQ0FBQyxDQUFDLEVBQUVJLEtBQUssQ0FBQyxDQUFDLEVBQUVrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQ0UsSUFBSUksSUFBSSxDQUFDRCxLQUFLLENBQUNFLFNBQVMsQ0FBQyxDQUFDQyxPQUFPLEVBQUUsR0FBRyxJQUFJRixJQUFJLENBQUNILEtBQUssQ0FBQ0ksU0FBUyxDQUFDLENBQUNDLE9BQU8sRUFBRSxDQUN6RTtLQUNILENBQUM7SUFFRixNQUFNeEIsS0FBSyxHQUFHZSxpQkFBaUIsQ0FBQ1gsR0FBRyxDQUFDLENBQUNxQixRQUFRLEdBQUs7UUFDaEQsTUFBTUMsbUJBQW1CLEdBQUdELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNaEIsSUFBSSxHQUFHZSxtQkFBbUIsQ0FBQ0UsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDQyxXQUFXLEVBQUU7UUFDakUsTUFBTUMsUUFBUSxHQUFHbEMsc0RBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRTZCLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQzdELE1BQU1sQixXQUFXLEdBQUc7WUFDbEJHLE9BQU8sRUFBRW9CLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUJ4QixLQUFLLEVBQUVWLHdEQUFTLENBQUM0QixtQkFBbUIsQ0FBQztTQUN0QztRQUNELE9BQU87WUFBRWYsSUFBSTtZQUFFSixXQUFXO1NBQUUsQ0FBQztLQUM5QixDQUFDO0lBRUYwQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2xDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU87UUFDTG1DLEtBQUssRUFBRTtZQUNMbkMsS0FBSztTQUNOO0tBQ0YsQ0FBQztDQUNIO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JlYXItbmVjZXNzaXRpZXMvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdGl0bGVDYXNlIH0gZnJvbSBcIi4uL3V0aWxzL3N0cmluZ1wiO1xuXG50eXBlIFBvc3QgPSB7XG4gIHNsdWc6IHN0cmluZztcbiAgZnJvbnRtYXR0ZXI6IHsgdGl0bGU6IHN0cmluZzsgcHJldmlldzogc3RyaW5nIH07XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0czogUG9zdFtdO1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBwb3N0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdDogUG9zdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgPGgyPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICA8cD57cG9zdC5mcm9udG1hdHRlci5wcmV2aWV3fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwicG9zdHNcIik7XG5cbiAgbGV0IGZpbGVzU29ydGVkQnlEYXRlID0gZmlsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBhU3RhdCA9IGZzLnN0YXRTeW5jKGAke3Bvc3RzfS8ke2F9YCksXG4gICAgICBiU3RhdCA9IGZzLnN0YXRTeW5jKGAke3Bvc3RzfS8ke2J9YCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmV3IERhdGUoYlN0YXQuYmlydGh0aW1lKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhU3RhdC5iaXJ0aHRpbWUpLmdldFRpbWUoKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IHBvc3RzID0gZmlsZXNTb3J0ZWRCeURhdGUubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lTm9FeHRlbnNpb24gPSBmaWxlbmFtZS5zcGxpdChcIi5cIilbMF07XG4gICAgY29uc3Qgc2x1ZyA9IGZpbGVuYW1lTm9FeHRlbnNpb24ucmVwbGFjZSgvIC9nLCBcIi1cIikudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCByZWFkRmlsZSA9IGZzLnJlYWRGaWxlU3luYyhgcG9zdHMvJHtmaWxlbmFtZX1gLCBcInV0ZjhcIik7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSB7XG4gICAgICBwcmV2aWV3OiByZWFkRmlsZS5zbGljZSgwLCAxMCksXG4gICAgICB0aXRsZTogdGl0bGVDYXNlKGZpbGVuYW1lTm9FeHRlbnNpb24pLFxuICAgIH07XG4gICAgcmV0dXJuIHsgc2x1ZywgZnJvbnRtYXR0ZXIgfTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cocG9zdHMpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbImZzIiwic3R5bGVzIiwidGl0bGVDYXNlIiwiSG9tZSIsInBvc3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFwIiwicG9zdCIsImgyIiwiZnJvbnRtYXR0ZXIiLCJ0aXRsZSIsInAiLCJwcmV2aWV3Iiwic2x1ZyIsImdldFN0YXRpY1Byb3BzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbGVzU29ydGVkQnlEYXRlIiwic29ydCIsImEiLCJiIiwiYVN0YXQiLCJzdGF0U3luYyIsImJTdGF0IiwiRGF0ZSIsImJpcnRodGltZSIsImdldFRpbWUiLCJmaWxlbmFtZSIsImZpbGVuYW1lTm9FeHRlbnNpb24iLCJzcGxpdCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInJlYWRGaWxlIiwicmVhZEZpbGVTeW5jIiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/string.ts":
/*!*************************!*\
  !*** ./utils/string.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleCase\": () => (/* binding */ titleCase)\n/* harmony export */ });\nconst titleCase = (str)=>{\n    return str.toLowerCase().split(\" \").map(function(word) {\n        return word.replace(word[0], word[0].toUpperCase());\n    }).join(\" \");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdHJpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxHQUFXLEdBQUs7SUFDeEMsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsU0FBVUMsSUFBSSxFQUFFO1FBQ25CLE9BQU9BLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUNyRCxDQUFDLENBQ0RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWFyLW5lY2Vzc2l0aWVzLy4vdXRpbHMvc3RyaW5nLnRzPzQ1Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgICAgcmV0dXJuIHdvcmQucmVwbGFjZSh3b3JkWzBdLCB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0pXG4gICAgLmpvaW4oXCIgXCIpO1xufTtcbiJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwibWFwIiwid29yZCIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/string.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();