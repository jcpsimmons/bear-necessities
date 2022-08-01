"use strict";
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
exports.id = "pages/[post]";
exports.ids = ["pages/[post]"];
exports.modules = {

/***/ "./pages/[post].tsx":
/*!**************************!*\
  !*** ./pages/[post].tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/post */ \"./utils/post.ts\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Post = ({ postData  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: postData?.content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            dangerouslySetInnerHTML: {\n                __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(postData.content)\n            }\n        }, void 0, false, {\n            fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/[post].tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/joshsimmons/Documents/GitHub/bear-necessities/pages/[post].tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"posts\");\n    const paths = files.map((fileName)=>({\n            params: {\n                post: fileName.split(\".\")[0].replace(/ /g, \"-\").toLowerCase()\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { post  }  }) {\n    const postData = (0,_utils_post__WEBPACK_IMPORTED_MODULE_2__.getSinglePostData)(post);\n    return {\n        props: {\n            postData\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcG9zdF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQjtBQUM4QjtBQUVyQjtBQVk3QixNQUFNRyxJQUFJLEdBQW9CLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDOUMscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0RELFFBQVEsRUFBRUUsT0FBTyxrQkFDaEIsOERBQUNELEtBQUc7WUFDRkUsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRU4sa0RBQUUsRUFBRSxDQUFDTyxNQUFNLENBQUNMLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO2FBQUU7Ozs7O3FCQUNsRTs7Ozs7aUJBRUEsQ0FDTjtDQUNIO0FBRU0sZUFBZUksY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLEtBQUssR0FBR1gscURBQWMsQ0FBQyxPQUFPLENBQUM7SUFDckMsTUFBTWEsS0FBSyxHQUFHRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUssQ0FBQztZQUNyQ0MsTUFBTSxFQUFFO2dCQUNOQyxJQUFJLEVBQUVGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLE9BQU8sR0FBRyxDQUFDLENBQUNDLFdBQVcsRUFBRTthQUM5RDtTQUNGLENBQUMsQ0FBQztJQUNILE9BQU87UUFDTFAsS0FBSztRQUNMUSxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0g7QUFFTSxlQUFlQyxjQUFjLENBQUMsRUFBRU4sTUFBTSxFQUFFLEVBQUVDLElBQUksR0FBRSxHQUFlLEVBQUU7SUFDdEUsTUFBTWIsUUFBUSxHQUFHSCw4REFBaUIsQ0FBQ2dCLElBQUksQ0FBQztJQUN4QyxPQUFPO1FBQ0xNLEtBQUssRUFBRTtZQUNMbkIsUUFBUTtTQUNUO0tBQ0YsQ0FBQztDQUNIO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JlYXItbmVjZXNzaXRpZXMvLi9wYWdlcy9bcG9zdF0udHN4P2Y5ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBnZXRTaW5nbGVQb3N0RGF0YSB9IGZyb20gXCIuLi91dGlscy9wb3N0XCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgbWQgZnJvbSBcIm1hcmtkb3duLWl0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3REYXRhOiBQb3N0O1xufVxuXG5pbnRlcmZhY2UgU3RhdGljUHJvcHMge1xuICBwYXJhbXM6IHtcbiAgICBwb3N0OiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IFBvc3Q6IE5leHRQYWdlPFByb3BzPiA9ICh7IHBvc3REYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3REYXRhPy5jb250ZW50ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWQoKS5yZW5kZXIocG9zdERhdGEuY29udGVudCkgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoXCJwb3N0c1wiKTtcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVOYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgcG9zdDogZmlsZU5hbWUuc3BsaXQoXCIuXCIpWzBdLnJlcGxhY2UoLyAvZywgXCItXCIpLnRvTG93ZXJDYXNlKCksXG4gICAgfSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHBvc3QgfSB9OiBTdGF0aWNQcm9wcykge1xuICBjb25zdCBwb3N0RGF0YSA9IGdldFNpbmdsZVBvc3REYXRhKHBvc3QpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImZzIiwiZ2V0U2luZ2xlUG9zdERhdGEiLCJtZCIsIlBvc3QiLCJwb3N0RGF0YSIsImRpdiIsImNvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlbmRlciIsImdldFN0YXRpY1BhdGhzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInBhdGhzIiwibWFwIiwiZmlsZU5hbWUiLCJwYXJhbXMiLCJwb3N0Iiwic3BsaXQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[post].tsx\n");

/***/ }),

/***/ "./utils/post.ts":
/*!***********************!*\
  !*** ./utils/post.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostData\": () => (/* binding */ getAllPostData),\n/* harmony export */   \"getSinglePostData\": () => (/* binding */ getSinglePostData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ \"./utils/string.ts\");\n\n\nconst getSinglePostData = (slug)=>{\n    const fileName = slug.replace(/-/g, \" \") + \".md\";\n    const filenameNoExtension = fileName.split(\".\")[0];\n    const content = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`posts/${fileName}`, \"utf8\");\n    const frontmatter = {\n        preview: content.slice(0, 10),\n        title: (0,_string__WEBPACK_IMPORTED_MODULE_1__.titleCase)(filenameNoExtension)\n    };\n    return {\n        slug,\n        frontmatter,\n        content\n    };\n};\nconst getAllPostData = ()=>{\n    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(\"posts\");\n    let filesSortedByDate = files.sort((a, b)=>{\n        let aStat = fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(`posts/${a}`), bStat = fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(`posts/${b}`);\n        return new Date(bStat.birthtime).getTime() - new Date(aStat.birthtime).getTime();\n    });\n    const posts = filesSortedByDate.map((filename)=>{\n        const filenameNoExtension = filename.split(\".\")[0];\n        const slug = filenameNoExtension.replace(/ /g, \"-\");\n        const readFile = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`posts/${filename}`, \"utf8\");\n        const frontmatter = {\n            preview: readFile.slice(0, 10),\n            title: (0,_string__WEBPACK_IMPORTED_MODULE_1__.titleCase)(filenameNoExtension)\n        };\n        return {\n            slug,\n            frontmatter\n        };\n    });\n    return posts;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9wb3N0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBRWlCO0FBRTlCLE1BQU1FLGlCQUFpQixHQUFHLENBQUNDLElBQVksR0FBVztJQUN2RCxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUs7SUFDaEQsTUFBTUMsbUJBQW1CLEdBQUdGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNQyxPQUFPLEdBQUdSLHNEQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUVJLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQzVELE1BQU1NLFdBQVcsR0FBRztRQUNsQkMsT0FBTyxFQUFFSCxPQUFPLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdCQyxLQUFLLEVBQUVaLGtEQUFTLENBQUNLLG1CQUFtQixDQUFDO0tBQ3RDO0lBQ0QsT0FBTztRQUFFSCxJQUFJO1FBQUVPLFdBQVc7UUFBRUYsT0FBTztLQUFFLENBQUM7Q0FDdkMsQ0FBQztBQUVLLE1BQU1NLGNBQWMsR0FBRyxJQUFjO0lBQzFDLE1BQU1DLEtBQUssR0FBR2YscURBQWMsQ0FBQyxPQUFPLENBQUM7SUFFckMsSUFBSWlCLGlCQUFpQixHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsR0FBSztRQUMzQyxJQUFJQyxLQUFLLEdBQUdyQixrREFBVyxDQUFDLENBQUMsTUFBTSxFQUFFbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNuQ0ksS0FBSyxHQUFHdkIsa0RBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkMsT0FDRSxJQUFJSSxJQUFJLENBQUNELEtBQUssQ0FBQ0UsU0FBUyxDQUFDLENBQUNDLE9BQU8sRUFBRSxHQUFHLElBQUlGLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxTQUFTLENBQUMsQ0FBQ0MsT0FBTyxFQUFFLENBQ3pFO0tBQ0gsQ0FBQztJQUVGLE1BQU1DLEtBQUssR0FBR1YsaUJBQWlCLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLEdBQUs7UUFDaEQsTUFBTXZCLG1CQUFtQixHQUFHdUIsUUFBUSxDQUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNSixJQUFJLEdBQUdHLG1CQUFtQixDQUFDRCxPQUFPLE9BQU8sR0FBRyxDQUFDO1FBQ25ELE1BQU15QixRQUFRLEdBQUc5QixzREFBZSxDQUFDLENBQUMsTUFBTSxFQUFFNkIsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDN0QsTUFBTW5CLFdBQVcsR0FBRztZQUNsQkMsT0FBTyxFQUFFbUIsUUFBUSxDQUFDbEIsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUJDLEtBQUssRUFBRVosa0RBQVMsQ0FBQ0ssbUJBQW1CLENBQUM7U0FDdEM7UUFDRCxPQUFPO1lBQUVILElBQUk7WUFBRU8sV0FBVztTQUFFLENBQUM7S0FDOUIsQ0FBQztJQUVGLE9BQU9pQixLQUFLLENBQUM7Q0FDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhci1uZWNlc3NpdGllcy8uL3V0aWxzL3Bvc3QudHM/MjllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0aXRsZUNhc2UgfSBmcm9tIFwiLi9zdHJpbmdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVBvc3REYXRhID0gKHNsdWc6IHN0cmluZyk6IFBvc3QgPT4ge1xuICBjb25zdCBmaWxlTmFtZSA9IHNsdWcucmVwbGFjZSgvLS9nLCBcIiBcIikgKyBcIi5tZFwiO1xuICBjb25zdCBmaWxlbmFtZU5vRXh0ZW5zaW9uID0gZmlsZU5hbWUuc3BsaXQoXCIuXCIpWzBdO1xuICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGBwb3N0cy8ke2ZpbGVOYW1lfWAsIFwidXRmOFwiKTtcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSB7XG4gICAgcHJldmlldzogY29udGVudC5zbGljZSgwLCAxMCksXG4gICAgdGl0bGU6IHRpdGxlQ2FzZShmaWxlbmFtZU5vRXh0ZW5zaW9uKSxcbiAgfTtcbiAgcmV0dXJuIHsgc2x1ZywgZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQb3N0RGF0YSA9ICgpOiBQb3N0W10gPT4ge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwicG9zdHNcIik7XG5cbiAgbGV0IGZpbGVzU29ydGVkQnlEYXRlID0gZmlsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBhU3RhdCA9IGZzLnN0YXRTeW5jKGBwb3N0cy8ke2F9YCksXG4gICAgICBiU3RhdCA9IGZzLnN0YXRTeW5jKGBwb3N0cy8ke2J9YCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmV3IERhdGUoYlN0YXQuYmlydGh0aW1lKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhU3RhdC5iaXJ0aHRpbWUpLmdldFRpbWUoKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IHBvc3RzID0gZmlsZXNTb3J0ZWRCeURhdGUubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lTm9FeHRlbnNpb24gPSBmaWxlbmFtZS5zcGxpdChcIi5cIilbMF07XG4gICAgY29uc3Qgc2x1ZyA9IGZpbGVuYW1lTm9FeHRlbnNpb24ucmVwbGFjZSgvIC9nLCBcIi1cIik7XG4gICAgY29uc3QgcmVhZEZpbGUgPSBmcy5yZWFkRmlsZVN5bmMoYHBvc3RzLyR7ZmlsZW5hbWV9YCwgXCJ1dGY4XCIpO1xuICAgIGNvbnN0IGZyb250bWF0dGVyID0ge1xuICAgICAgcHJldmlldzogcmVhZEZpbGUuc2xpY2UoMCwgMTApLFxuICAgICAgdGl0bGU6IHRpdGxlQ2FzZShmaWxlbmFtZU5vRXh0ZW5zaW9uKSxcbiAgICB9O1xuICAgIHJldHVybiB7IHNsdWcsIGZyb250bWF0dGVyIH07XG4gIH0pO1xuXG4gIHJldHVybiBwb3N0cztcbn07XG4iXSwibmFtZXMiOlsiZnMiLCJ0aXRsZUNhc2UiLCJnZXRTaW5nbGVQb3N0RGF0YSIsInNsdWciLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJmaWxlbmFtZU5vRXh0ZW5zaW9uIiwic3BsaXQiLCJjb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZnJvbnRtYXR0ZXIiLCJwcmV2aWV3Iiwic2xpY2UiLCJ0aXRsZSIsImdldEFsbFBvc3REYXRhIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbGVzU29ydGVkQnlEYXRlIiwic29ydCIsImEiLCJiIiwiYVN0YXQiLCJzdGF0U3luYyIsImJTdGF0IiwiRGF0ZSIsImJpcnRodGltZSIsImdldFRpbWUiLCJwb3N0cyIsIm1hcCIsImZpbGVuYW1lIiwicmVhZEZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/post.ts\n");

/***/ }),

/***/ "./utils/string.ts":
/*!*************************!*\
  !*** ./utils/string.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titleCase\": () => (/* binding */ titleCase)\n/* harmony export */ });\nconst titleCase = (str)=>{\n    return str.toLowerCase().split(\" \").map(function(word) {\n        return word.replace(word[0], word[0].toUpperCase());\n    }).join(\" \");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdHJpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxHQUFXLEdBQUs7SUFDeEMsT0FBT0EsR0FBRyxDQUNQQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWQyxHQUFHLENBQUMsU0FBVUMsSUFBSSxFQUFFO1FBQ25CLE9BQU9BLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUNyRCxDQUFDLENBQ0RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWFyLW5lY2Vzc2l0aWVzLy4vdXRpbHMvc3RyaW5nLnRzPzQ1Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRpdGxlQ2FzZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgICAgcmV0dXJuIHdvcmQucmVwbGFjZSh3b3JkWzBdLCB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0pXG4gICAgLmpvaW4oXCIgXCIpO1xufTtcbiJdLCJuYW1lcyI6WyJ0aXRsZUNhc2UiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwibWFwIiwid29yZCIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/string.ts\n");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[post].tsx"));
module.exports = __webpack_exports__;

})();