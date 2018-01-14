'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.someProp = exports.uniqArray = exports.getUrlPath = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: 48em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: 48em) {\n      ', '\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    @media (min-width: 48em) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 48em) {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getUrlPath = exports.getUrlPath = function getUrlPath(data) {
  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data.url : data;
};

var uniqArray = exports.uniqArray = function uniqArray(array) {
  return Array.from(new Set(array));
};

var someProp = exports.someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return data[prop] !== null && data[prop] !== undefined;
  })];
};

var media = exports.media = {
  mobile: function mobile() {
    return (0, _styledComponents.css)(_templateObject, _styledComponents.css.apply(undefined, arguments));
  },
  desktop: function desktop() {
    return (0, _styledComponents.css)(_templateObject2, _styledComponents.css.apply(undefined, arguments));
  }
};