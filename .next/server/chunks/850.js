"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar.js




const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "static",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h6",
                    component: "div",
                    sx: {
                        flexGrow: 1
                    },
                    children: "4ePoeM"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        color: "inherit",
                        children: "Главная"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/queue",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        color: "inherit",
                        children: "Очередь"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/profile",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        color: "inherit",
                        children: "Профиль"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.js






const theme = (0,styles_.createTheme)();
const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "4ePoeM - Караоке PWA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Прогрессивное веб-приложение для караоке"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;