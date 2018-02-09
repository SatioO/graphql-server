"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _profiles = require("./profiles");

Object.keys(_profiles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profiles[key];
    }
  });
});

var _demos = require("./demos");

Object.keys(_demos).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _demos[key];
    }
  });
});