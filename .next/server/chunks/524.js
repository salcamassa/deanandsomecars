exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 7475:
/***/ ((module) => {

// Exports
module.exports = {
	"navLink": "navbar_navLink__4PqCx",
	"active": "navbar_active__JWejU",
	"logoLink": "navbar_logoLink__HnLnO"
};


/***/ }),

/***/ 1524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":".//_next/static/media/logo.2787b980.svg","height":75,"width":149});
// EXTERNAL MODULE: ./components/layout/Navbar/navbar.module.scss
var navbar_module = __webpack_require__(7475);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/layout/Navbar/index.tsx






const navData = [
    {
        linkText: "About",
        href: "/about"
    },
    {
        linkText: "Services",
        href: "/services"
    },
    {
        linkText: "FAQ",
        href: "/faq"
    }, 
];
const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    return /** TODO: conditional sticky/fixed-top class for index page only **/ /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `navbar navbar-expand-lg ${(navbar_module_default()).dscNav}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `navbar-brand ${(navbar_module_default()).logoLink}`,
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo,
                            alt: "dsc Logo",
                            height: 100
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#dscNavbar",
                    "aria-controls": "dscNavbar",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse justify-content-end",
                    id: "dscNavbar",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ms-auto mb-2 mb-lg-0",
                        children: [
                            navData.map((data, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: `nav-item ${index == 3 ? "pe-2" : ""}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: data.href,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `${router.pathname === data.href ? "active" : ""} nav-link`,
                                            children: data.linkText
                                        })
                                    })
                                }, index)),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    href: "/contact",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-outline-warning",
                                        type: "submit",
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Navbar = (Navbar);


/***/ })

};
;