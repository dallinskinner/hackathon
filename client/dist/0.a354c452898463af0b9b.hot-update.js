webpackHotUpdate(0,{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);


let socket = __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default()();

socket.on('slack message', data => {
    document.body.innerHTML = `Got Message ${date}`;
});

/***/ })

})