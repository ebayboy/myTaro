(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/scrollViewTest"],{

/***/ "./src/component/scrollViewTest.jsx":
/*!******************************************!*\
  !*** ./src/component/scrollViewTest.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollViewTest = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ScrollViewTest, _BaseComponent);

  function ScrollViewTest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollViewTest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollViewTest.__proto__ || Object.getPrototypeOf(ScrollViewTest)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "scrollTop", "Threshold"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollViewTest, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ScrollViewTest.prototype.__proto__ || Object.getPrototypeOf(ScrollViewTest.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "onScrollToUpper",
    value: function onScrollToUpper() {}

    // or 使用箭头函数
    // onScrollToUpper = () => {}

  }, {
    key: "onScroll",
    value: function onScroll(e) {
      console.log(e.detail);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var scrollStyle = {
        height: '150px'
      };
      var scrollTop = 0;
      var Threshold = 20;
      var vStyleA = {
        height: '150px',
        'background-color': 'rgb(26, 173, 25)'
      };
      var vStyleB = {
        height: '150px',
        'background-color': 'rgb(39,130,215)'
      };
      var vStyleC = {
        height: '150px',
        'background-color': 'rgb(241,241,241)',
        color: '#333'
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(scrollStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(vStyleA);
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(vStyleB);
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(vStyleC);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        scrollTop: scrollTop,
        Threshold: Threshold
      });
      return this.__state;
    }
  }]);

  return ScrollViewTest;
}(_taroWeapp.Component), _class.$$events = ["onScrollToUpper", "onScroll"], _class.$$componentPath = "component/scrollViewTest", _temp2);
exports.default = ScrollViewTest;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ScrollViewTest));

/***/ })

},[["./src/component/scrollViewTest.jsx","runtime","vendors"]]]);