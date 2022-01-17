__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ "./pkg/geopattern.js");


const container = document.querySelector("#container");
const input = document.querySelector("#input");

const image = _pkg__WEBPACK_IMPORTED_MODULE_0__["generate_base64_svg_string"]("");
container.style.background = `url("data:image/svg+xml;base64,${image}")`;

input.addEventListener("keyup", () => {
    const image = _pkg__WEBPACK_IMPORTED_MODULE_0__["generate_base64_svg_string"](input.value);
    container.style.background = `url("data:image/svg+xml;base64,${image}")`;
});

