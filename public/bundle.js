webpackJsonp([0],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = content;
exports.handleGetData = handleGetData;

var _effects = __webpack_require__(113);

var _axios = __webpack_require__(454);

var _axios2 = _interopRequireDefault(_axios);

var _sagasManager = __webpack_require__(180);

var _sagasManager2 = _interopRequireDefault(_sagasManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getData);

var GET_DATA_REQUEST = 'todos/GET_DATA_REQUEST';
var GET_DATA_SUCCESS = 'todos/GET_DATA_SUCCESS';
var GET_DATA_ERROR = 'todos/GET_DATA_ERROR';

var initialState = {
	data: 'No data'
};

function content() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	switch (action.type) {
		case GET_DATA_SUCCESS:
			return _extends({}, state, {
				data: action.data
			});
		default:
			return state;
	}
}

function handleGetData(data) {
	return {
		type: GET_DATA_REQUEST,
		data: data
	};
}

function getData(action) {
	var data;
	return regeneratorRuntime.wrap(function getData$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.prev = 0;
					data = action.data;
					_context.next = 4;
					return (0, _effects.put)({ type: GET_DATA_SUCCESS, data: data });

				case 4:
					_context.next = 10;
					break;

				case 6:
					_context.prev = 6;
					_context.t0 = _context['catch'](0);
					_context.next = 10;
					return (0, _effects.put)({ type: GET_DATA_ERROR });

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[0, 6]]);
}

_sagasManager2.default.addSagaToRoot( /*#__PURE__*/regeneratorRuntime.mark(function watcher() {
	return regeneratorRuntime.wrap(function watcher$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return (0, _effects.all)([(0, _effects.takeLatest)(GET_DATA_REQUEST, getData)]);

				case 2:
				case 'end':
					return _context2.stop();
			}
		}
	}, watcher, this);
}));

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _effects = __webpack_require__(113);

var _reduxSaga = __webpack_require__(169);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SagasManager = function () {
	function SagasManager() {
		_classCallCheck(this, SagasManager);

		this.sagasWithArguments = (0, _reduxSaga.channel)();
	}

	_createClass(SagasManager, [{
		key: 'addSagaToRoot',
		value: function addSagaToRoot() {
			for (var _len = arguments.length, sagaWithArguments = Array(_len), _key = 0; _key < _len; _key++) {
				sagaWithArguments[_key] = arguments[_key];
			}

			this.sagasWithArguments.put([].concat(sagaWithArguments));
		}
	}, {
		key: 'getRootSaga',
		value: function getRootSaga() {
			var sagasChannel = this.sagasWithArguments;

			return (/*#__PURE__*/regeneratorRuntime.mark(function rootSaga() {
					var initialSagas, dynamicSaga;
					return regeneratorRuntime.wrap(function rootSaga$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									_context.next = 2;
									return (0, _effects.flush)(sagasChannel);

								case 2:
									initialSagas = _context.sent;
									_context.next = 5;
									return (0, _effects.all)(initialSagas.map(function (initialSagaWithArguments) {
										return _effects.fork.apply(undefined, _toConsumableArray(initialSagaWithArguments));
									}));

								case 5:
									if (false) {
										_context.next = 13;
										break;
									}

									_context.next = 8;
									return (0, _effects.take)(sagasChannel);

								case 8:
									dynamicSaga = _context.sent;
									_context.next = 11;
									return _effects.fork.apply(undefined, _toConsumableArray(dynamicSaga));

								case 11:
									_context.next = 5;
									break;

								case 13:
								case 'end':
									return _context.stop();
							}
						}
					}, rootSaga, this);
				})
			);
		}
	}]);

	return SagasManager;
}();

exports.default = new SagasManager();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(182);
module.exports = __webpack_require__(384);


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(386);

var _reactRouterDom = __webpack_require__(396);

var _reactRedux = __webpack_require__(160);

var _createBrowserHistory = __webpack_require__(151);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _redux = __webpack_require__(110);

var _reduxSaga = __webpack_require__(169);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _ducks = __webpack_require__(453);

var _ducks2 = _interopRequireDefault(_ducks);

var _sagasManager = __webpack_require__(180);

var _sagasManager2 = _interopRequireDefault(_sagasManager);

var _App = __webpack_require__(474);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = window.__INITIAL_STATE__;
var sagaMiddleware = (0, _reduxSaga2.default)();
var history = (0, _createBrowserHistory2.default)();

var store = (0, _redux.createStore)(_ducks2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	return f;
}));

sagaMiddleware.run(_sagasManager2.default.getRootSaga());

(0, _reactDom.render)(_jsx(_reactRedux.Provider, {
	store: store
}, void 0, _jsx(_reactRouterDom.Router, {
	history: history
}, void 0, _jsx('div', {}, void 0, _jsx(_reactRouterDom.Route, {
	exact: true,
	path: '/',
	component: _App2.default
})))), document.getElementById('app'));

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(110);

var _content = __webpack_require__(174);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	content: _content2.default
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(160);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _content = __webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _reactRedux.connect)(function (state) {
	return { content: state.content };
}, { handleGetData: _content.handleGetData }), _dec(_class = function (_Component) {
	_inherits(App, _Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (data) {
			return function () {
				_this.props.handleGetData(data);
			};
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var styles = __webpack_require__(475);
			var content = this.props.content;


			return _jsx('div', {
				className: styles.app
			}, void 0, _jsx('div', {
				onClick: this.handleClick('test content')
			}, void 0, 'Click me'), content.data);
		}
	}]);

	return App;
}(_react.Component)) || _class);
exports.default = App;

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"app":"_3oYmw","title":"AONln","container":"_3cYMU","button":"Bzz6q","data":"wjsLX"};

/***/ })

},[181]);