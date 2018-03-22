// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global Vue*/

/* weex initialized here, please do not move this line */
// const router = require('./router');
var App = __webpack_require__(1);
/* eslint-disable no-new */
// console.log(Vue.util.extend({el: '#root', router}, App))
var vm = new Vue({
    // el: '#root',
    // router,
    render: function render(h) {
        return h(App);
    }
}).$mount('#root');
// new Vue(Vue.util.extend({el: '#root', router}, App));
// router.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-49364758"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "fontSize": 0.8
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _List = __webpack_require__(4);

var _List2 = _interopRequireDefault(_List);

var _Loading = __webpack_require__(8);

var _Loading2 = _interopRequireDefault(_Loading);

var _Slider = __webpack_require__(12);

var _Slider2 = _interopRequireDefault(_Slider);

var _Switch = __webpack_require__(16);

var _Switch2 = _interopRequireDefault(_Switch);

var _WaterFall = __webpack_require__(20);

var _WaterFall2 = _interopRequireDefault(_WaterFall);

var _Animations = __webpack_require__(24);

var _Animations2 = _interopRequireDefault(_Animations);

var _clip = __webpack_require__(28);

var _clip2 = _interopRequireDefault(_clip);

var _Dom = __webpack_require__(31);

var _Dom2 = _interopRequireDefault(_Dom);

var _GlobalEvent = __webpack_require__(35);

var _GlobalEvent2 = _interopRequireDefault(_GlobalEvent);

var _Picker = __webpack_require__(38);

var _Picker2 = _interopRequireDefault(_Picker);

var _Storage = __webpack_require__(42);

var _Storage2 = _interopRequireDefault(_Storage);

var _Stream = __webpack_require__(46);

var _Stream2 = _interopRequireDefault(_Stream);

var _Socket = __webpack_require__(51);

var _Socket2 = _interopRequireDefault(_Socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  components: {
    //      Tmp,
    //      Ind,
    //      List2,
    //      Loading,
    //      Slider,
    //      Switch
    //      Water
    Anim: _Animations2.default
    //      Clip
    //      Dom
    //      Glob
    //      Pick
    //      Storage
    //      Stream
    //      Socket
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  import Tmp from './Tmp.vue';
//  import Ind from './components/indictors.vue'

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\List.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22049fc6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var LOADMORE_COUNT = 4;

exports.default = {
    data: function data() {
        return {
            lists: [1, 2, 3, 4, 5]
        };
    },

    methods: {
        fetch: function fetch(event) {
            var _this = this;

            modal.toast({ message: 'loadmore', duration: 1 });

            console.log(222222222222);
            setTimeout(function () {
                var length = _this.lists.length;
                for (var i = length; i < length + LOADMORE_COUNT; ++i) {
                    _this.lists.push(i + 1);
                }
            }, 800);
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "10"
    },
    on: {
      "loadmore": function($event) {
        _vm.fetch()
      }
    }
  }, _vm._l((_vm.lists), function(num) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ad011f78"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  },
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');

exports.default = {
    data: function data() {
        return {
            loadinging: false,
            lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    },

    methods: {
        onloading: function onloading(event) {
            var _this = this;

            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            setTimeout(function () {
                _this.loadinging = false;
            }, 2000);
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_vm._l((_vm.lists), function(num) {
    return _c('div', {
      staticClass: ["cell"]
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loadinging ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v("Loading ...")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1e7dea89"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883",
    "display": "flex",
    "alignItems": "center"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  },
  "indic": {
    "itemColor": "#FF0000",
    "itemSelectedColor": "#0000FF",
    "itemSize": "50"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
        };
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indic"]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Switch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-70487148"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "marginTop": "60"
  },
  "label": {
    "fontSize": "40",
    "lineHeight": "60",
    "width": "350",
    "color": "#666666",
    "textAlign": "right",
    "marginRight": "20"
  },
  "info": {
    "fontSize": "30",
    "lineHeight": "60",
    "color": "#BBBBBB",
    "marginLeft": "10"
  },
  "heheheh": {
    "height": "300",
    "width": 100,
    "background": "#ccc"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            checked: false
        };
    },

    methods: {
        onchange: function onchange(event) {
            console.log("onchage, value: " + event.value);
            this.checked = event.value;
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["heheheh"]
  }, [_c('switch', {
    staticClass: ["pwww"]
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\WaterFall.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4384753a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "backgroundColor": "#EFEFEF"
  },
  "refresh": {
    "height": "128",
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refreshText": {
    "color": "#888888",
    "fontWeight": "bold"
  },
  "indicator": {
    "color": "#888888",
    "height": "40",
    "width": "40",
    "marginRight": "30"
  },
  "absolute": {
    "position": "absolute",
    "top": "0",
    "width": "750",
    "height": "377"
  },
  "banner": {
    "height": "377",
    "flexDirection": "row"
  },
  "bannerInfo": {
    "width": "270",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "avatar": {
    "width": "148",
    "height": "108",
    "borderRadius": "54",
    "borderWidth": "4",
    "borderColor": "#FFFFFF",
    "marginBottom": "14"
  },
  "name": {
    "fontWeight": "bold",
    "fontSize": "32",
    "color": "#ffffff",
    "lineHeight": "32",
    "textAlign": "center",
    "marginBottom": "16"
  },
  "titleWrap": {
    "width": "100",
    "height": "24",
    "marginBottom": "10",
    "backgroundColor": "rgba(255,255,255,0.8)",
    "borderRadius": "12",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title": {
    "fontSize": "20",
    "color": "#000000"
  },
  "bannerPhotoWrap": {
    "width": "449",
    "height": "305",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "12",
    "marginTop": "35",
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  "bannerPhoto": {
    "width": "137",
    "height": "137",
    "marginBottom": "6"
  },
  "stickyHeader": {
    "position": "sticky",
    "height": "94",
    "flexDirection": "row",
    "paddingBottom": "6"
  },
  "stickyWrapper": {
    "flexDirection": "row",
    "backgroundColor": "#00cc99",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 1
  },
  "stickyTextImageWrapper": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "stickyText": {
    "color": "#FFFFFF",
    "fontWeight": "bold",
    "fontSize": "32",
    "marginRight": "12"
  },
  "stickyImage": {
    "width": "64",
    "height": "64",
    "borderRadius": "32"
  },
  "cell": {
    "paddingTop": "6",
    "paddingBottom": "6"
  },
  "item": {
    "backgroundColor": "#FFFFFF",
    "alignItems": "center"
  },
  "itemName": {
    "fontSize": "28",
    "color": "#333333",
    "lineHeight": "42",
    "textAlign": "left",
    "marginTop": "24"
  },
  "itemPhoto": {
    "marginTop": "18",
    "width": "220",
    "height": "220",
    "marginBottom": "18"
  },
  "itemDesc": {
    "fontSize": "24",
    "marginTop": "12",
    "marginRight": "12",
    "marginBottom": "12",
    "marginLeft": "12",
    "color": "#999999",
    "lineHeight": "36",
    "textAlign": "left"
  },
  "itemClickBehaviour": {
    "fontSize": "36",
    "color": "#00cc99",
    "lineHeight": "36",
    "textAlign": "center",
    "marginTop": "6",
    "marginLeft": "24",
    "marginRight": "24",
    "marginBottom": "30"
  },
  "footer": {
    "height": "94",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#00cc99"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "78",
    "height": "78",
    "backgroundColor": "#00cc99",
    "right": "32",
    "bottom": "32",
    "borderRadius": "39",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "fixedText": {
    "fontSize": "32",
    "color": "#FFFFFF",
    "lineHeight": "32"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        var items = [{
            src: 'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
            name: 'Thomas Carlyle',
            desc: 'Genius only means hard-working all one\'s life',
            behaviourName: 'Change width',
            behaviour: 'changeColumnWidth'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
            desc: 'The man who has made up his mind to win will never say "impossible "',
            behaviourName: 'Change gap',
            behaviour: 'changeColumnGap'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
            desc: 'There is no such thing as a great talent without great will - power',
            behaviourName: 'Change count',
            behaviour: 'changeColumnCount'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg',
            name: 'Addison',
            desc: 'Cease to struggle and you cease to live',
            behaviourName: 'Show scrollbar',
            behaviour: 'showScrollbar'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg',
            desc: 'A strong man will struggle with the storms of fate',
            behaviourName: 'Listen appear',
            behaviour: 'listenAppear'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg',
            name: 'Ruskin',
            desc: 'Living without an aim is like sailing without a compass',
            behaviourName: 'Set scrollable',
            behaviour: 'setScrollable'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg',
            behaviourName: 'waterfall padding',
            behaviour: 'setPadding'
        }, {
            src: 'https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg',
            name: 'Balzac',
            desc: 'There is no such thing as a great talent without great will - power',
            behaviourName: 'listen scroll',
            behaviour: 'listenScroll'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg',
            behaviourName: 'Remove cell',
            behaviour: 'removeCell'
        }, {
            src: 'https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg',
            behaviourName: 'Move cell',
            behaviour: 'moveCell'
        }];

        var repeatItems = [];
        for (var i = 0; i < 3; i++) {
            repeatItems.push.apply(repeatItems, items);
        }

        return {
            padding: 0,
            refreshing: false,
            refreshText: '↓   pull to refresh...',
            columnCount: 2,
            columnGap: 12,
            columnWidth: 'auto',
            contentOffset: '0',
            showHeader: true,
            showScrollbar: false,
            scrollable: true,
            showStickyHeader: false,
            appearImage: null,
            disappearImage: null,
            stickyHeaderType: 'none',
            // fixedRect:'',
            banner: {
                photos: [{ src: 'https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1MwSFPFXXXXbdXXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg' }, { src: 'https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg' }]
            },
            items: repeatItems
        };
    },

    created: function created() {
        // let self = this
        // setTimeout(()=>{
        //   weex.requireModule('dom').getComponentRect(this.$refs.fixed, result=>{
        //     const x = result.size.left
        //     const y = result.size.top
        //     const width = result.size.width
        //     const height = result.size.height
        //     self.fixedRect = `${x}|${y}|${width}|${height}`
        //   })
        // }, 3000)
    },


    methods: {
        recylerScroll: function recylerScroll(e) {
            this.contentOffset = e.contentOffset.y;
        },
        loadmore: function loadmore(e) {
            console.log('receive loadmore event');
            // this.$refs.waterfall.resetLoadmore()
        },
        showOrRemoveHeader: function showOrRemoveHeader() {
            this.showHeader = !this.showHeader;
        },
        onItemclick: function onItemclick(behaviour, index) {
            console.log('click...' + behaviour + ' at index ' + index);
            switch (behaviour) {
                case 'changeColumnCount':
                    this.changeColumnCount();
                    break;
                case 'changeColumnGap':
                    this.changeColumnGap();
                    break;
                case 'changeColumnWidth':
                    this.changeColumnWidth();
                    break;
                case 'showScrollbar':
                    this.showOrHideScrollbar();
                    break;
                case 'listenAppear':
                    this.listenAppearAndDisappear();
                    break;
                case 'setScrollable':
                    this.setScrollable();
                    break;
                case 'setPadding':
                    this.setRecyclerPadding();
                    break;
                case 'listenScroll':
                    this.listenScrollEvent();
                    break;
                case 'removeCell':
                    this.removeCell(index);
                    break;
                case 'moveCell':
                    this.moveCell(index);
                    break;
            }
        },

        itemAppear: function itemAppear(src) {
            this.appearImage = src;
        },

        itemDisappear: function itemDisappear(src) {
            this.disappearImage = src;
        },

        changeColumnCount: function changeColumnCount() {
            if (this.columnCount === 2) {
                this.columnCount = 3;
            } else {
                this.columnCount = 2;
            }
        },

        changeColumnGap: function changeColumnGap() {
            if (this.columnGap === 12) {
                this.columnGap = 'normal';
            } else {
                this.columnGap = 12;
            }
        },

        changeColumnWidth: function changeColumnWidth() {
            if (this.columnWidth === 'auto') {
                this.columnWidth = 600;
            } else {
                this.columnWidth = 'auto';
            }
        },

        showOrHideScrollbar: function showOrHideScrollbar() {
            this.showScrollbar = !this.showScrollbar;
        },

        setScrollable: function setScrollable() {
            this.scrollable = !this.scrollable;
        },

        listenAppearAndDisappear: function listenAppearAndDisappear() {
            this.stickyHeaderType = this.stickyHeaderType === 'appear' ? 'none' : 'appear';
        },

        listenScrollEvent: function listenScrollEvent() {
            this.stickyHeaderType = this.stickyHeaderType === 'scroll' ? 'none' : 'scroll';
        },

        scrollToNext: function scrollToNext() {
            weex.requireModule('dom').scrollToElement(this.$refs.footer);
        },

        setRecyclerPadding: function setRecyclerPadding() {
            this.padding = this.padding == 0 ? 12 : 0;
        },

        removeCell: function removeCell(index) {
            this.items.splice(index, 1);
        },

        moveCell: function moveCell(index) {
            if (index == 0) {
                this.items.splice(this.items.length - 1, 0, this.items.splice(index, 1)[0]);
            } else {
                this.items.splice(0, 0, this.items.splice(index, 1)[0]);
            }
        },

        onrefresh: function onrefresh(event) {
            var _this = this;

            this.refreshing = true;
            this.refreshText = "loading...";
            setTimeout(function () {
                _this.refreshing = false;
                _this.refreshText = '↓   pull to refresh...';
            }, 2000);
        },
        onpullingdown: function onpullingdown(event) {
            // console.log(`${event.pullingDistance}`)
            if (event.pullingDistance < -64) {
                this.refreshText = '↑   release to refresh...';
            } else {
                this.refreshText = '↓   pull to refresh...';
            }
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('waterfall', {
    ref: "waterfall",
    staticClass: ["page"],
    style: {
      padding: _vm.padding
    },
    attrs: {
      "columnWidth": _vm.columnWidth,
      "columnCount": _vm.columnCount,
      "columnGap": _vm.columnGap,
      "showScrollbar": _vm.showScrollbar,
      "scrollable": _vm.scrollable,
      "loadmoreoffset": "3000"
    },
    on: {
      "scroll": _vm.recylerScroll,
      "loadmore": _vm.loadmore
    }
  }, [(_vm.showHeader) ? _c('header', {
    ref: "header",
    staticClass: ["header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["banner"]
  }, [_c('image', {
    staticClass: ["absolute"],
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB1ESN1PFXXXXX1apXXXXXXXXXX-1000-600.jpg",
      "resize": "cover"
    }
  }), _c('div', {
    staticClass: ["bannerInfo"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": "https://gw.alicdn.com/tps/TB1EP9bPFXXXXbpXVXXXXXXXXXX-150-110.jpg",
      "resize": "cover"
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v("Adam Cat")]), _c('div', {
    staticClass: ["titleWrap"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Genius")])])]), _c('div', {
    staticClass: ["bannerPhotoWrap"]
  }, _vm._l((_vm.banner.photos), function(photo) {
    return _c('image', {
      staticClass: ["bannerPhoto"],
      attrs: {
        "src": photo.src
      }
    })
  }))])]) : _vm._e(), _c('header', {
    staticClass: ["stickyHeader"],
    appendAsTree: true,
    attrs: {
      "sticky": "",
      "append": "tree"
    }
  }, [(_vm.stickyHeaderType === 'none') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Sticky Header")])]) : _vm._e(), (_vm.stickyHeaderType === 'appear') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('div', {
    staticClass: ["stickyTextImageWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Last Appear:")]), _c('image', {
    staticClass: ["stickyImage"],
    attrs: {
      "src": _vm.appearImage
    }
  })]), _c('div', {
    staticClass: ["stickyTextImageWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Last Disappear:")]), _c('image', {
    staticClass: ["stickyImage"],
    attrs: {
      "src": _vm.disappearImage
    }
  })])]) : _vm._e(), (_vm.stickyHeaderType === 'scroll') ? _c('div', {
    staticClass: ["stickyWrapper"]
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Content Offset:" + _vm._s(_vm.contentOffset))])]) : _vm._e()]), _vm._l((_vm.items), function(item, index) {
    return _c('cell', {
      key: item.src,
      ref: "index",
      refInFor: true,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["item"],
      on: {
        "click": function($event) {
          _vm.onItemclick(item.behaviour, index)
        },
        "appear": function($event) {
          _vm.itemAppear(item.src)
        },
        "disappear": function($event) {
          _vm.itemDisappear(item.src)
        }
      }
    }, [(item.name) ? _c('text', {
      staticClass: ["itemName"]
    }, [_vm._v(_vm._s(item.name))]) : _vm._e(), _c('image', {
      staticClass: ["itemPhoto"],
      attrs: {
        "src": item.src
      }
    }), (item.desc) ? _c('text', {
      staticClass: ["itemDesc"]
    }, [_vm._v(_vm._s(item.desc))]) : _vm._e(), (item.behaviourName) ? _c('text', {
      staticClass: ["itemClickBehaviour"]
    }, [_vm._v(" " + _vm._s(item.behaviourName))]) : _vm._e()])])
  }), _c('header', {
    ref: "footer",
    staticClass: ["footer"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["stickyText"]
  }, [_vm._v("Footer")])]), _c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"],
    on: {
      "click": _vm.scrollToNext
    }
  }, [_c('text', {
    staticClass: ["fixedText"]
  }, [_vm._v("bot")])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Animations.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f93aefd2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "width": "200",
    "height": "200",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "backgroundColor": "#0000FF"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
exports.default = {
    mounted: function mounted() {
        var el = this.$refs.box;

        animation.transition(el, {
            styles: {
                left: '200px',
                top: '200px',
                transformOrigin: 'center',
                transform: 'rotate(3600deg)'
                //                    transform: {
                //                        rotateX: 800
                //                    },
            },

            delay: 200,
            duration: 300
        }, function () {
            console.log(22);
        });
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "box",
    staticClass: ["box"]
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\clip.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

var clipboard = weex.requireModule('clipboard');
exports.default = {
    data: function data() {
        return {
            msg: 'hello world , i love you'
        };
    },

    methods: {
        copy: function copy() {

            console.log(this.$refs.r3);
            clipboard.setString(this.msg);
        },
        getClip: function getClip() {
            clipboard.getString(function (ret) {
                alert(ret.data);
                alert(ret.result);
            });
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "r3"
  }, [_c('text', {
    on: {
      "click": _vm.copy
    }
  }, [_vm._v(_vm._s(_vm.msg))]), _c('text', {
    on: {
      "click": function($event) {
        _vm.getClip()
      }
    }
  }, [_vm._v("getClip")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Dom.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b47d4d6c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "700",
    "height": "700",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginLeft": "25"
  },
  "row": {
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingLeft": "30",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD"
  },
  "text": {
    "fontSize": "45",
    "color": "#666666"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "60"
  },
  "button": {
    "width": "200",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "30",
    "marginRight": "30",
    "textAlign": "center",
    "color": "#41B883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var arr = [1, 2, 3, 4];
var dom = weex.requireModule('dom');

exports.default = {
    data: function data() {
        return {
            rows: [],
            arr: arr
        };
    },
    created: function created() {
        for (var i = 0; i < 30; i++) {
            this.rows.push('row ' + i);
        }
    },

    methods: {
        goto10: function goto10(count) {
            debugger;
            var el = this.$refs.item10[0];
            dom.scrollToElement(el, {});
        },
        goto20: function goto20(count) {
            var el = this.$refs.item20[0];
            dom.scrollToElement(el, { offset: 0 });
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: 'wrap',
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_vm._l((_vm.rows), function(name, index) {
    return _c('div', {
      ref: 'item' + index,
      refInFor: true,
      staticClass: ["row"]
    }, [_c('text', {
      ref: 'text' + index,
      refInFor: true,
      staticClass: ["text"]
    }, [_vm._v(_vm._s(name))])])
  }), _vm._l((_vm.arr), function(item) {
    return _c('div', {
      ref: 'p' + item,
      refInFor: true
    }, [_c('text', [_vm._v(_vm._s(item))])])
  })], 2), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.goto10
    }
  }, [_vm._v("Go to 10")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.goto20
    }
  }, [_vm._v("Go to 20")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\GlobalEvent.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

var GlobalEvent = weex.requireModule('globalEvent');
var modal = weex.requireModule('modal');
exports.default = {
    mounted: function mounted() {
        GlobalEvent.addEventListener('hello', function (data) {
            alert(JSON.stringify(data));
        });
    },

    methods: {
        sendMsg: function sendMsg() {
            //                modal.alert({
            //                    message: 'hello',
            //                    okTitle: '确定'
            //                }, function(value) {
            //                    console.log(value)
            //                })

            //                modal.confirm({
            //                    message: 'hello',
            //                    okTitle: '确定',
            //                    cancelTitle: '取消'
            //                }, function(value) {
            //                    console.log(value)
            //                })

            modal.prompt({
                message: 'hello',
                okTitle: '确定',
                cancelTitle: '取消'
            }, function (value) {
                console.log(value);
            });
            //                alert(JSON.stringify(document));
            //                var evt = new Event('hello')
            //                evt.data = { foo: 'bar' }
            //                document.dispatchEvent(evt)
        }
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    on: {
      "click": function($event) {
        _vm.sendMsg()
      }
    }
  }, [_vm._v("hello")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Picker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f04e4894"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": "40",
    "alignItems": "center"
  },
  "label": {
    "fontSize": "40",
    "color": "#888888"
  },
  "title": {
    "fontSize": "80",
    "color": "#41B883"
  },
  "button": {
    "fontSize": "36",
    "width": "280",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//

var picker = weex.requireModule('picker');

exports.default = {
    data: function data() {
        return {
            value: ''
        };
    },

    methods: {
        pickTime: function pickTime() {
            var _this = this;

            debugger;
            picker.pickTime({
                value: this.value
            }, function (event) {
                if (event.result === 'success') {
                    _this.value = event.data;
                }
            });
        }
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("Time: ")]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.value))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pickTime
    }
  }, [_vm._v("Pick Time")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Storage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d003cbfa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            active: false
        };
    },

    methods: {
        removeItem: function removeItem(key) {
            var _this = this;

            if (!this.active) {
                this.active = true;
                setTimeout(function () {
                    _this.active = false;
                }, 3000);
                storage.removeItem(key, function (ret) {
                    if (ret.result === 'success') {
                        modal.toast({
                            message: 'remove ' + key + ' success',
                            duration: 3
                        });
                    } else {
                        modal.toast({
                            message: 'remove ' + key + ' fail',
                            duration: 3
                        });
                    }
                });
            }
        },
        getAllKeys: function getAllKeys() {
            var _this2 = this;

            if (!this.active) {
                this.active = true;
                setTimeout(function () {
                    _this2.active = false;
                }, 3000);
                storage.getAllKeys(function (ret) {
                    if (ret.result === 'success') {
                        modal.toast({
                            message: ret.data,
                            duration: 3
                        });
                    } else {
                        modal.toast({
                            message: 'remove ' + ret.data + ' fail',
                            duration: 3
                        });
                    }
                });
            }
        },
        getStorage: function getStorage(key) {
            var _this3 = this;

            if (!this.active) {
                this.active = true;
                setTimeout(function () {
                    _this3.active = false;
                }, 3000);
                storage.getItem(key, function (ret) {
                    if (ret.result === 'success') {
                        modal.toast({
                            message: 'success ' + ret.data,
                            duration: 3
                        });
                    } else {
                        modal.toast({
                            message: 'error ' + ret.data,
                            duration: 3
                        });
                    }
                });
            }
        },
        setStorage: function setStorage(key, value) {
            var _this4 = this;

            if (!this.active) {
                this.active = true;
                setTimeout(function () {
                    _this4.active = false;
                }, 3000);
                storage.setItem(key, value, function (ret) {
                    if (ret.result === 'success') {
                        modal.toast({
                            message: 'success',
                            duration: 2
                        });
                    } else {
                        modal.toast({
                            message: 'error ' + ret.data,
                            duration: 2
                        });
                    }
                });
            }
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    on: {
      "click": function($event) {
        _vm.setStorage('name', 'maoruibin')
      }
    }
  }, [_vm._v("setStorage")]), _c('text', {
    on: {
      "click": function($event) {
        _vm.getStorage('name')
      }
    }
  }, [_vm._v("getStorage")]), _c('text', {
    on: {
      "click": function($event) {
        _vm.getAllKeys()
      }
    }
  }, [_vm._v("getAllKeys")]), _c('text', {
    on: {
      "click": function($event) {
        _vm.removeItem('name')
      }
    }
  }, [_vm._v("removeItem")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(49)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Stream.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d54f4cb0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "btnBox": {
    "display": "flex",
    "flexDirection": "row"
  },
  "retBox": {
    "display": "flex",
    "flexDirection": "column"
  },
  "btn": {
    "backgroundColor": "#ADD8E6",
    "color": "#FFFFFF",
    "marginRight": "20",
    "fontSize": "40",
    "paddingTop": 0.5,
    "paddingRight": 0.5,
    "paddingBottom": 0.5,
    "paddingLeft": 0.5,
    "border": "1px solid black",
    "borderRadius": "10"
  },
  "content": {
    "marginBottom": "10"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
exports.default = {
    data: function data() {
        return {
            getContent: {},
            postContent: {},
            putContent: {},
            deleteContent: {}
        };
    },

    methods: {
        getMethod: function getMethod() {
            var _this = this;

            stream.fetch({
                url: 'http://localhost:8089/',
                type: 'json',
                method: 'GET'
            }, function (ret) {
                _this.getContent = ret.data;
            });
        },
        postMethod: function postMethod() {
            var _this2 = this;

            stream.fetch({
                url: 'http://localhost:8089/',
                type: 'json',
                method: 'post',
                body: JSON.stringify({
                    name: 'maoruibin'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }, function (ret) {
                _this2.postContent = ret.data;
            });
        },
        putMethod: function putMethod() {
            var _this3 = this;

            stream.fetch({
                url: 'http://localhost:8089/',
                type: 'json',
                method: 'put',
                body: JSON.stringify({
                    name: 'maoruibin'
                })
            }, function (ret) {
                _this3.putContent = ret.data;
            });
        },
        deleteMethod: function deleteMethod() {
            var _this4 = this;

            stream.fetch({
                url: 'http://localhost:8089/',
                type: 'json',
                method: 'delete',
                body: 'name=maoruibin',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }, function (ret) {
                _this4.deleteContent = ret.data;
            });
        }
    }
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', [_vm._v("reqeust button:")]), _c('div', {
    staticClass: ["btnBox"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.getMethod()
      }
    }
  }, [_vm._v("get")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.postMethod()
      }
    }
  }, [_vm._v("post")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.putMethod()
      }
    }
  }, [_vm._v("put")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.deleteMethod()
      }
    }
  }, [_vm._v("delete")])]), _c('text', [_vm._v("response result: ")]), _c('div', {
    staticClass: ["retBox"]
  }, [_c('text', {
    staticClass: ["content"]
  }, [_vm._v("get content: " + _vm._s(JSON.stringify(_vm.getContent)))]), _c('text', {
    staticClass: ["content"]
  }, [_vm._v("post content: " + _vm._s(JSON.stringify(_vm.postContent)) + "}")]), _c('text', {
    staticClass: ["content"]
  }, [_vm._v("put content: " + _vm._s(JSON.stringify(_vm.putContent)) + "}")]), _c('text', {
    staticClass: ["content"]
  }, [_vm._v("delete content: " + _vm._s(JSON.stringify(_vm.deleteContent)) + "}")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('Anim')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\github\\weex-app\\src\\components\\Socket.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43280fca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "input": {
    "fontSize": "40",
    "height": "80",
    "width": "600"
  },
  "button": {
    "fontSize": "36",
    "width": "150",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "marginRight": "20",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var websocket = weex.requireModule('webSocket');
exports.default = {
    created: function created() {
        console.log(this.$el);
    },
    data: function data() {
        return {
            connectinfo: '',
            sendinfo: '',
            onopeninfo: '',
            onmessage: '',
            oncloseinfo: '',
            onerrorinfo: '',
            closeinfo: '',
            txtInput: '',
            navBarHeight: 88,
            title: 'Navigator',
            dir: 'examples',
            baseURL: ''
        };
    },

    methods: {
        connect: function connect() {
            websocket.WebSocket('ws://echo.websocket.org', '');
            var self = this;
            self.onopeninfo = 'connecting...';
            websocket.onopen = function (e) {
                self.onopeninfo = 'websocket open';
            };
            websocket.onmessage = function (e) {
                self.onmessage = e.data;
            };
            websocket.onerror = function (e) {
                self.onerrorinfo = e.data;
            };
            websocket.onclose = function (e) {
                self.onopeninfo = '';
                self.onerrorinfo = e.code;
            };
        },
        send: function send(e) {
            var input = this.$refs.input;
            input.blur();
            websocket.send(this.txtInput);
            this.sendinfo = this.txtInput;
        },
        oninput: function oninput(event) {
            this.txtInput = event.value;
        },
        close: function close(e) {
            websocket.close();
        }
    }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', [_vm._m(0), _c('input', {
    ref: "input",
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "please input message to send",
      "autofocus": "false",
      "value": ""
    },
    on: {
      "change": _vm.onchange,
      "input": _vm.oninput
    }
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      justifyContent: "center"
    }
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.connect
    }
  }, [_vm._v("connect")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.send
    }
  }, [_vm._v("send")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.close
    }
  }, [_vm._v("close")])]), _vm._m(1), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.sendinfo))]), _vm._m(2), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onopeninfo))]), _vm._m(3), _c('text', {
    staticStyle: {
      color: "black",
      height: "400px"
    }
  }, [_vm._v(_vm._s(_vm.onmessage))]), _vm._m(4), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.oncloseinfo))]), _vm._m(5), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.onerrorinfo))]), _vm._m(6), _c('text', {
    staticStyle: {
      color: "black",
      height: "80px"
    }
  }, [_vm._v(_vm._s(_vm.closeinfo))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "#286090"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "white"
    }
  }, [_vm._v("websocket")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = send")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onopen")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onmessage")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onclose")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = onerror")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      backgroundColor: "lightgray"
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      height: "80px",
      padding: "20px",
      color: "black"
    }
  }, [_vm._v("method = close")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);