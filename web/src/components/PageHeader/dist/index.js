"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var logo_svg_1 = require("../../assets/images/logo.svg");
var back_svg_1 = require("../../assets/images/icons/back.svg");
require("./styles.css");
var PageHeader = function (props) {
    return (react_1["default"].createElement("header", { className: "page-header" },
        react_1["default"].createElement("div", { className: "top-bar-container" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                react_1["default"].createElement("img", { src: back_svg_1["default"], alt: "Voltar" })),
            react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "Proffy" })),
        react_1["default"].createElement("div", { className: "header-content" },
            react_1["default"].createElement("strong", null, props.title),
            props.description && react_1["default"].createElement("p", null, props.description),
            props.children)));
};
exports["default"] = PageHeader;
