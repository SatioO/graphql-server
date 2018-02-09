"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Demo = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Demo = exports.Demo = {
	getDemos: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_, _ref2) {
			var _ref2$pageOffset = _ref2.pageOffset,
			    pageOffset = _ref2$pageOffset === undefined ? 0 : _ref2$pageOffset,
			    _ref2$pageLength = _ref2.pageLength,
			    pageLength = _ref2$pageLength === undefined ? 10 : _ref2$pageLength,
			    _ref2$sortBy = _ref2.sortBy,
			    sortBy = _ref2$sortBy === undefined ? "id" : _ref2$sortBy,
			    _ref2$orderBy = _ref2.orderBy,
			    orderBy = _ref2$orderBy === undefined ? 1 : _ref2$orderBy;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return _models.DemoModel.find({
								$or: [{ milestone: "approved" }, { milestone: "published" }]
							}).sort(_defineProperty({}, sortBy, orderBy)).skip(pageOffset).limit(pageLength);

						case 3:
							return _context.abrupt("return", _context.sent);

						case 6:
							_context.prev = 6;
							_context.t0 = _context["catch"](0);
							return _context.abrupt("return", _context.t0);

						case 9:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 6]]);
		}));

		return function getDemos(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}(),
	getDemoById: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_, _ref4) {
			var id = _ref4.id;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return _models.DemoModel.findOne({ id: id });

						case 3:
							return _context2.abrupt("return", _context2.sent);

						case 6:
							_context2.prev = 6;
							_context2.t0 = _context2["catch"](0);
							return _context2.abrupt("return", _context2.t0);

						case 9:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[0, 6]]);
		}));

		return function getDemoById(_x3, _x4) {
			return _ref3.apply(this, arguments);
		};
	}(),
	createDemo: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_, _ref6) {
			var data = _ref6.data;
			var demoModel, response;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;
							demoModel = new _models.DemoModel(data);
							_context3.next = 4;
							return demoModel.save();

						case 4:
							response = _context3.sent;
							_context3.next = 7;
							return _models.DemoModel.findOne({ _id: response._id });

						case 7:
							return _context3.abrupt("return", _context3.sent);

						case 10:
							_context3.prev = 10;
							_context3.t0 = _context3["catch"](0);
							return _context3.abrupt("return", _context3.t0);

						case 13:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[0, 10]]);
		}));

		return function createDemo(_x5, _x6) {
			return _ref5.apply(this, arguments);
		};
	}(),
	updateDemo: function () {
		var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_, _ref8) {
			var data = _ref8.data;
			var id;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;
							id = data.id;

							delete data.id;
							_context4.next = 5;
							return _models.DemoModel.update({ id: id }, data);

						case 5:
							_context4.next = 7;
							return Demo.getDemoById(null, { id: id });

						case 7:
							return _context4.abrupt("return", _context4.sent);

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4["catch"](0);
							return _context4.abrupt("return", _context4.t0);

						case 13:
						case "end":
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[0, 10]]);
		}));

		return function updateDemo(_x7, _x8) {
			return _ref7.apply(this, arguments);
		};
	}(),
	deleteDemo: function () {
		var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_, _ref10) {
			var id = _ref10.id;
			var response;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return _models.DemoModel.update({ id: id }, { milestone: "deleted" });

						case 3:
							response = _context5.sent;
							_context5.next = 6;
							return Demo.getDemoById(null, { id: id });

						case 6:
							return _context5.abrupt("return", _context5.sent);

						case 9:
							_context5.prev = 9;
							_context5.t0 = _context5["catch"](0);
							return _context5.abrupt("return", _context5.t0);

						case 12:
						case "end":
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[0, 9]]);
		}));

		return function deleteDemo(_x9, _x10) {
			return _ref9.apply(this, arguments);
		};
	}()
};