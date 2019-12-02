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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../slidein/index.js":
/*!***************************!*\
  !*** ../slidein/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import './slidein.css'\nconst DEFAULT_ATTRS = {\n  'slide-anim': 'fadeleft',\n  'slide-duration': '0.5s',\n  'slide-anim-function': 'ease-in-out',\n  'slide-delay': 0,\n  'slide-visibility': 'full'\n};\nconst DEFAULT_CASCADE_ATTRS = { ...DEFAULT_ATTRS,\n  'slide-cascade-increment': '0.25s'\n}; // If there is a <slide-settings> or --slide-default CSS\n// properties on the body, use them to set default values.\n\nconst setDefaultAttrs = () => {\n  const slideSettings = document.querySelector('slide-settings');\n  const bodyStyle = window.getComputedStyle(document.body); // Use DEFAULT_CASCADE_ATTRS since it is a superset of DEFAULT_ATTRS\n\n  Object.entries(DEFAULT_CASCADE_ATTRS).forEach(([attrName, value]) => {\n    // For every slide- attribute, look for a corresponding\n    // attribute in slide-settings, replacing 'slide-' with 'default-',\n    // or in the style of the body, replacing 'slide-' with '--slide-default-'.\n    // CSS styles take a higher precendence than HTML attributes.\n    const defaultAttrCSS = bodyStyle.getPropertyValue(attrName.replace('slide-', '--slide-default-'));\n\n    if (defaultAttrCSS) {\n      DEFAULT_ATTRS[attrName] = defaultAttrCSS;\n      DEFAULT_CASCADE_ATTRS[attrName] = defaultAttrCSS;\n    } else if (slideSettings) {\n      const defaultAttrHTML = slideSettings.attributes[attrName.replace('slide-', 'default-')];\n      DEFAULT_ATTRS[attrName] = defaultAttrHTML.nodeValue;\n      DEFAULT_CASCADE_ATTRS[attrName] = defaultAttrHTML.nodeValue;\n    }\n  });\n}; // Gets the slide attributes for an element, defaulting to\n// those in `defaults` for whichever ones aren't present.\n\n\nconst getSlideAttrs = (defaults, elem) => {\n  const slideAttributes = { ...defaults\n  };\n  const style = window.getComputedStyle(elem);\n  Object.keys(slideAttributes).forEach(k => {\n    const htmlAttr = elem.attributes[k];\n    const cssAttr = style.getPropertyValue(`--${k}`); // Here as well, CSS styles take precedence\n\n    if (cssAttr) {\n      slideAttributes[k] = cssAttr;\n    } else if (htmlAttr) {\n      slideAttributes[k] = htmlAttr.nodeValue;\n    }\n  });\n  return slideAttributes;\n}; // Helper method to set animation properties on element e.\n\n\nconst setAttributes = (e, attrs) => {\n  if (!e.attributes['noslide']) {\n    e.setAttribute('slide-visibility', attrs['slide-visibility']);\n    e.classList.remove('noslide');\n    e.style['animation-play-state'] = 'paused';\n    e.style['animation-fill-mode'] = 'forwards';\n    e.style['animation-name'] = attrs['slide-anim'];\n    e.style['animation-duration'] = attrs['slide-duration'];\n    e.style['animation-delay'] = attrs['slide-delay'];\n  } else {\n    e.classList.add('noslide');\n  }\n}; // Is the element visible in the viewport?\n\n\nconst isVisible = el => {\n  const rect = el.getBoundingClientRect();\n  const elemTop = rect.top;\n  const elemBottom = rect.bottom;\n  const slideVisibility = el.getAttribute('slide-visibility').trim(); // Only completely visible elements return true:\n\n  if (slideVisibility === 'full') {\n    return elemTop >= 0 && elemBottom <= window.innerHeight;\n  } // Partially visible elements return true:\n  else if (slideVisibility === 'partial') {\n      return elemTop < window.innerHeight && elemBottom >= 0;\n    } else {\n      throw new Error(`Unrecognized property for slide-visibility: ${slideVisibility}`);\n    }\n};\n\nconst shouldReveal = e => e.style['animation-play-state'] !== 'running' && !e.attributes['noslide'] && isVisible(e); // Reveal any elements that are in view.\n\n\nconst revealElements = elements => {\n  for (const e of elements) {\n    if (shouldReveal(e)) {\n      e.style['animation-play-state'] = 'running';\n    }\n  }\n}; // Set animation properties on children of elements who have a 'slide-cascade' property\n\n\nconst initCascadeElems = () => {\n  const cascadeElems = Array.from(document.querySelectorAll('[slide-cascade]'));\n  const cascadeChildren = [];\n\n  for (const parent of cascadeElems) {\n    const parentAttrs = getSlideAttrs(DEFAULT_CASCADE_ATTRS, parent);\n    const initialDelay = '0s';\n    let delays = parent.attributes['slide'] ? 1 : 0;\n\n    for (const child of parent.children) {\n      const childAttrs = getSlideAttrs(parentAttrs, child);\n      setAttributes(child, { ...childAttrs,\n        'slide-delay': `calc(${initialDelay} + ${delays++} * ${parentAttrs['slide-cascade-increment']})`\n      });\n      cascadeChildren.push(child);\n    }\n  }\n\n  return cascadeChildren;\n}; // Set animation properties on children of elements who have a 'slide-children' property\n\n\nconst initSlideChildrenElems = () => {\n  const slideChildrenElems = Array.from(document.querySelectorAll('[slide-children]'));\n  const slideChildren = [];\n\n  for (const parent of slideChildrenElems) {\n    const parentAttrs = getSlideAttrs(DEFAULT_ATTRS, parent);\n\n    for (const child of parent.children) {\n      const childAttrs = getSlideAttrs(parentAttrs, child);\n      setAttributes(child, childAttrs);\n      slideChildren.push(child);\n    }\n  }\n\n  return slideChildren;\n}; // Set animation properties on elements who have a 'slide' property\n\n\nconst initSlideElems = () => {\n  const slideInElems = Array.from(document.querySelectorAll('[slide]'));\n\n  for (const e of slideInElems) {\n    setAttributes(e, getSlideAttrs(DEFAULT_ATTRS, e));\n  }\n\n  return slideInElems;\n}; // Init all necessary animation properties for slide elements\n// and change listener to check for visible elements to slide in.\n// Can be called externally, if the user adds slide elements to the DOM post-load\n\n\nconst update = () => {\n  setDefaultAttrs();\n  const cascadedElems = initCascadeElems();\n  const slideChildrenElems = initSlideChildrenElems();\n  const slideElems = initSlideElems();\n  const allElems = [...cascadedElems, ...slideChildrenElems, ...slideElems];\n\n  const onScroll = () => revealElements(allElems);\n\n  onScroll();\n  window.removeEventListener('scroll', onScroll);\n  window.addEventListener('scroll', onScroll);\n};\n\ndocument.addEventListener('DOMContentLoaded', update);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  update\n});\n\n//# sourceURL=webpack:///../slidein/index.js?");

/***/ }),

/***/ "./src/Cloud.js":
/*!**********************!*\
  !*** ./src/Cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cloud; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cloud = function Cloud(elem, speed) {\n  _classCallCheck(this, Cloud);\n\n  this.elem = elem;\n  this.speed = speed;\n};\n\n\n\n//# sourceURL=webpack:///./src/Cloud.js?");

/***/ }),

/***/ "./src/comets.js":
/*!***********************!*\
  !*** ./src/comets.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nvar comet = function comet(_ref) {\n  var speed = _ref.speed,\n      startx = _ref.startx,\n      starty = _ref.starty,\n      _ref$size = _ref.size,\n      size = _ref$size === void 0 ? 100 : _ref$size,\n      theta = _ref.theta,\n      container = _ref.container;\n  var elem = document.createElementNS('http://www.w3.org/2000/svg', 'image');\n  elem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'svg/comet.svg');\n  elem.setAttributeNS(null, 'x', startx);\n  elem.setAttributeNS(null, 'y', starty);\n  elem.setAttributeNS(null, 'transform', \"rotate(\".concat(theta, \", \").concat(startx + size / 2, \", \").concat(starty + size / 2, \")\"));\n  elem.setAttributeNS(null, 'width', size);\n  elem.setAttributeNS(null, 'height', size);\n  elem.classList.add('comet');\n  elem.style.transition = \"transform \".concat(speed, \"s linear\"); // Prevent transform from being immediately applied\n\n  setTimeout(function () {\n    return elem.style.transform = \"translate(\".concat(Math.cos(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"radians\"])(theta)) * 200, \"vw, \").concat(Math.sin(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"radians\"])(theta)) * 200, \"vw)\");\n  }, 0);\n  container.appendChild(elem);\n  elem.addEventListener('transitionend', function () {\n    elem.remove();\n  });\n};\n\nvar spawnComet = function spawnComet(layer) {\n  var width = window.innerWidth;\n  var height = window.innerHeight;\n\n  if (\n  /*scrollPercent() >= .2 && */\n  document.hasFocus() && Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"prob\"])(0.35)) {\n    comet({\n      speed: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"randrange\"])(0.9, 1.1),\n      startx: -100,\n      starty: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"randrange\"])(-5, height * 0.175),\n      size: Math.floor(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"randrange\"])(50, 90)),\n      theta: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"randrange\"])(5, 20),\n      container: layer\n    });\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var layer = document.querySelector('#comets-layer');\n  setInterval(function () {\n    return spawnComet(layer);\n  }, 2000);\n});\n\n//# sourceURL=webpack:///./src/comets.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comets.js */ \"./src/comets.js\");\n/* harmony import */ var _stars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stars.js */ \"./src/stars.js\");\n/* harmony import */ var _stars_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stars_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll.js */ \"./src/scroll.js\");\n/* harmony import */ var _scroll_anchors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll_anchors.js */ \"./src/scroll_anchors.js\");\n/* harmony import */ var _scroll_anchors_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scroll_anchors_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resize.js */ \"./src/resize.js\");\n/* harmony import */ var _resize_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resize_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slidein__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slidein */ \"../slidein/index.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var width = window.innerWidth;\n  var height = window.innerHeight;\n  var svg = document.querySelector('#canvas');\n  svg.setAttribute('width', width);\n  svg.setAttribute('height', height);\n  var downArrow = document.querySelector('#down-arrow');\n  downArrow.addEventListener('click', function () {\n    window.scrollTo({\n      top: window.scrollY + window.innerHeight,\n      left: 0,\n      behavior: 'smooth'\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/resize.js":
/*!***********************!*\
  !*** ./src/resize.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n// Toggle CSS transitions on window resize to prevent animation\nvar toggleTransitions = function toggleTransitions() {\n  var toggleElems = [document.querySelector('#sun'), document.querySelector('#moon')].concat(_toConsumableArray(document.querySelectorAll('.cloud')));\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var e = _step.value;\n      e.classList.add('notransition');\n      setTimeout(function () {\n        return e.classList.remove('notransition');\n      }, 0);\n    };\n\n    for (var _iterator = toggleElems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      _loop();\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\nwindow.addEventListener('resize', function () {\n  toggleTransitions();\n});\n\n//# sourceURL=webpack:///./src/resize.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cloud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloud.js */ \"./src/Cloud.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n // Rounds x down to the nearest multiple of 1/n\n\nvar roundTo = function roundTo(x, n) {\n  return Math.floor(x * n) / n;\n}; // Round floating points to hundreds place\n\n\nvar roundToHundreds = function roundToHundreds(x) {\n  return Math.round(x * 100) / 100;\n};\n\nvar transformFromPercentage = function transformFromPercentage(p, steps, min, max) {\n  return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"clamp\"])(min + (max - min) * roundTo(p, steps), min, max);\n};\n\nvar updateSun = function updateSun(p, elem) {\n  var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var percentSet = p / 0.5;\n  var x = transformFromPercentage(percentSet, 6, 57, 65);\n  var y = transformFromPercentage(percentSet, 6, 57, 100);\n  var scale = transformFromPercentage(percentSet, 6, 1, 1.3);\n  var transform = \"translate(\".concat(x, \"vw, \").concat(y, \"vh) scale(\").concat(scale, \")\");\n  elem.style.transform = transform;\n};\n\nvar updateMoon = function updateMoon(p, elem) {\n  var percentRisen = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"clamp\"])(p / 0.5 - 1, 0, 1);\n  var x = transformFromPercentage(percentRisen, 6, 0, 2);\n  var y = 100 - transformFromPercentage(percentRisen, 6, 0, 65);\n  var scale = transformFromPercentage(percentRisen, 6, 1, 1.3);\n  var transform = \"translate(\".concat(x, \"vw, \").concat(y, \"vh) scale(\").concat(scale, \")\");\n  elem.style.transform = transform;\n};\n\nvar updateClouds = function updateClouds(p, clouds) {\n  clouds.forEach(function (cloud) {\n    var opacity = 0.7 - transformFromPercentage(p, 12, 0, .6);\n    var initx = Number(cloud.elem.attributes.x.value);\n    var inity = Number(cloud.elem.attributes.y.value);\n    var offx = transformFromPercentage(p, 12, 0, 20);\n    var offy = transformFromPercentage(p, 12, 0, 10);\n    var x = initx + offx * cloud.speed;\n    var y = inity + offy * cloud.speed;\n    var transform = \"translate(\".concat(x, \"vw, \").concat(y, \"vh)\");\n    cloud.elem.style.transform = transform;\n    cloud.elem.style.opacity = opacity * cloud.speed;\n  });\n}; // Gradually fade the top background layer to reveal the body's background\n\n\nvar updateBgGradient = function updateBgGradient(p, topBackgroundElem) {\n  return topBackgroundElem.style.opacity = 1 - p;\n};\n\nvar updateArrow = function updateArrow(arrow) {\n  if (window.scrollY > 10) {\n    arrow.style.opacity = 0;\n    arrow.style.visibility = 'hidden';\n  } else {\n    arrow.style.visibility = 'visible';\n    arrow.style.opacity = 0.6;\n  }\n};\n\nvar updateElems = function updateElems(_ref) {\n  var sun = _ref.sun,\n      moon = _ref.moon,\n      clouds = _ref.clouds,\n      arrow = _ref.arrow,\n      topBackground = _ref.topBackground;\n  var percentToBottom = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"scrollPercent\"])();\n  updateSun(percentToBottom, sun);\n  updateMoon(percentToBottom, moon);\n  updateClouds(percentToBottom, clouds);\n  updateBgGradient(percentToBottom, topBackground);\n  updateArrow(arrow);\n};\n\nvar initClouds = function initClouds() {\n  var width = window.innerWidth;\n  var cloudSize = width / 10;\n\n  var cloudElems = _toConsumableArray(document.querySelectorAll('.cloud'));\n\n  var cloudSpeeds = [1, 0.8, 0.95, 0.9];\n  return cloudElems.map(function (el, i) {\n    var cloud = new _Cloud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el, cloudSpeeds[i]);\n    cloud.elem.setAttributeNS(null, 'width', \"\".concat(cloudSize));\n    cloud.elem.setAttributeNS(null, 'height', \"\".concat(cloudSize));\n    cloud.elem.style.display = null;\n    return cloud;\n  });\n};\n\nvar initialUpdate = function initialUpdate(_ref2) {\n  var sun = _ref2.sun,\n      moon = _ref2.moon,\n      clouds = _ref2.clouds,\n      arrow = _ref2.arrow,\n      topBackground = _ref2.topBackground;\n  var domElems = [sun, moon, arrow, topBackground].concat(_toConsumableArray(clouds.map(function (c) {\n    return c.elem;\n  })));\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = domElems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var elem = _step.value;\n      elem.classList.add('no-transition');\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  updateElems({\n    sun: sun,\n    moon: moon,\n    clouds: clouds,\n    arrow: arrow,\n    topBackground: topBackground\n  });\n  setTimeout(function () {\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = domElems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var elem = _step2.value;\n        elem.classList.remove('no-transition');\n      } // Show hidden elements\n\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    sun.style.display = null;\n    moon.style.display = null;\n  }, 0);\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sun = document.querySelector('#sun');\n  var moon = document.querySelector('#moon');\n  var arrow = document.querySelector('#down-arrow');\n  var topBackground = document.querySelector('#initial-background');\n  var clouds = initClouds();\n  setTimeout(function () {\n    return initialUpdate({\n      sun: sun,\n      moon: moon,\n      clouds: clouds,\n      arrow: arrow,\n      topBackground: topBackground\n    });\n  }, 0);\n  window.addEventListener('scroll', function () {\n    updateElems({\n      sun: sun,\n      moon: moon,\n      clouds: clouds,\n      arrow: arrow,\n      topBackground: topBackground\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/scroll.js?");

/***/ }),

/***/ "./src/scroll_anchors.js":
/*!*******************************!*\
  !*** ./src/scroll_anchors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Smooth scrolling for anchor links\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n    anchor.addEventListener('click', function (e) {\n      e.preventDefault();\n      document.querySelector(this.getAttribute('href')).scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/scroll_anchors.js?");

/***/ }),

/***/ "./src/stars.js":
/*!**********************!*\
  !*** ./src/stars.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var svgns = \"http://www.w3.org/2000/svg\";\nvar WIDTH = window.innerWidth;\nvar HEIGHT = window.innerHeight;\n\nvar randrange = function randrange(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\nvar floatrange = function floatrange(min, max) {\n  return Math.random() * (max - min + 1) + min;\n};\n\nvar makeStar = function makeStar(r1, r2) {\n  var cx = randrange(0, WIDTH);\n  var cy = randrange(0, HEIGHT);\n  var r = floatrange(r1, r2);\n  var rg = randrange(200, 255);\n  var color = \"rgb(\".concat(rg, \", \").concat(rg, \", 255)\");\n  var blurColor = \"rgba(\".concat(rg, \", \").concat(rg, \", 255, \").concat((0.25, 1.0), \")\");\n  var group = document.createElementNS(svgns, 'g');\n  var star = document.createElementNS(svgns, 'circle');\n  star.setAttributeNS(null, 'cx', cx);\n  star.setAttributeNS(null, 'cy', cy);\n  star.setAttributeNS(null, 'r', r);\n  star.setAttributeNS(null, 'style', \"fill: \".concat(color, \";\"));\n  var blur = document.createElementNS(svgns, 'circle');\n  blur.setAttributeNS(null, 'cx', cx);\n  blur.setAttributeNS(null, 'cy', cy);\n  blur.setAttributeNS(null, 'r', r);\n  blur.setAttributeNS(null, 'style', \"fill: \".concat(blurColor, \"; filter: url(#blur);\"));\n  group.appendChild(blur);\n  group.appendChild(star);\n  return group;\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var bgLayer = document.querySelector('#bg-layer');\n\n  for (var i = 0; i < 2000; i++) {\n    bgLayer.appendChild(makeStar(0.15, 0.2));\n  }\n});\n\n//# sourceURL=webpack:///./src/stars.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: scrollPercent, radians, degrees, prob, diff, norm, normalize, randrange, avg, clamp, darken, hexToRgb, rgbStr, rgbToHex, lerpColor, rgbToHsl, hslToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollPercent\", function() { return scrollPercent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radians\", function() { return radians; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"degrees\", function() { return degrees; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prob\", function() { return prob; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return diff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"norm\", function() { return norm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randrange\", function() { return randrange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avg\", function() { return avg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darken\", function() { return darken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToRgb\", function() { return hexToRgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbStr\", function() { return rgbStr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHex\", function() { return rgbToHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerpColor\", function() { return lerpColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHsl\", function() { return rgbToHsl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hslToRgb\", function() { return hslToRgb; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Returns % scrolled down the page\nvar scrollPercent = function scrollPercent() {\n  var h = document.documentElement,\n      b = document.body,\n      st = 'scrollTop',\n      sh = 'scrollHeight';\n  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);\n};\nvar radians = function radians(degrees) {\n  return degrees * Math.PI / 180.0;\n};\nvar degrees = function degrees(radians) {\n  return radians * 180.0 / Math.PI;\n}; // Returns true with probability p\n// 0.1\n\nvar prob = function prob(p) {\n  return Math.random() <= p;\n};\nvar diff = function diff(p1, p2) {\n  return [p2[0] - p1[0], p2[1] - p1[1]];\n};\nvar norm = function norm(v) {\n  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);\n};\nvar normalize = function normalize(v) {\n  var normv = norm(v);\n  return v.map(function (p) {\n    return p / normv;\n  });\n};\nvar randrange = function randrange(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nvar avg = function avg() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (a, b) {\n    return a + b;\n  }) / args.length;\n}; // Confine n to the range [x, y]\n\nvar clamp = function clamp(n, x, y) {\n  if (n > y) return y;else if (n < x) return x;\n  return n;\n};\nvar darken = function darken(rgb, amount) {\n  return rgb.map(function (n) {\n    return n - amount;\n  });\n}; // Cuts arr into pieces of size n\n// chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]\n\nvar chunk = function chunk(arr, n) {\n  var chunks = [];\n\n  for (var i = 0; i < arr.length; i += n) {\n    chunks.push(arr.slice(i, i + n));\n  }\n\n  return chunks;\n}; // Convert hex string to [r, g, b] array: #9ac0ff -> [154, 192, 255]\n\n\nvar hexToRgb = function hexToRgb(hstr) {\n  var rgb = chunk(hstr.slice(1, hstr.length), 2);\n  return rgb.map(function (hex) {\n    return parseInt(hex, 16);\n  });\n};\nvar rgbStr = function rgbStr(_ref) {\n  var _ref2 = _slicedToArray(_ref, 3),\n      r = _ref2[0],\n      g = _ref2[1],\n      b = _ref2[2];\n\n  return \"rgb(\".concat(r, \", \").concat(g, \", \").concat(b, \")\");\n}; // Convert [r, g, b] array to hex string: #9ac0ff -> [154, 192, 255]\n\nvar rgbToHex = function rgbToHex(rgb) {\n  return \"#\".concat(rgb.map(function (n) {\n    return Math.floor(n).toString(16);\n  }).join(''));\n};\nvar lerpColor = function lerpColor(_ref3, _ref4, p) {\n  var _ref5 = _slicedToArray(_ref3, 3),\n      r1 = _ref5[0],\n      g1 = _ref5[1],\n      b1 = _ref5[2];\n\n  var _ref6 = _slicedToArray(_ref4, 3),\n      r2 = _ref6[0],\n      g2 = _ref6[1],\n      b2 = _ref6[2];\n\n  return [(r2 - r1) * p + r1, (g2 - g1) * p + g1, (b2 - b1) * p + b1];\n};\nvar rgbToHsl = function rgbToHsl(_ref7) {\n  var _ref8 = _slicedToArray(_ref7, 3),\n      r = _ref8[0],\n      g = _ref8[1],\n      b = _ref8[2];\n\n  r /= 255, g /= 255, b /= 255;\n  var max = Math.max(r, g, b),\n      min = Math.min(r, g, b);\n  var h,\n      s,\n      l = (max + min) / 2;\n\n  if (max == min) {\n    h = s = 0; // achromatic\n  } else {\n    var d = max - min;\n    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n\n    switch (max) {\n      case r:\n        h = (g - b) / d + (g < b ? 6 : 0);\n        break;\n\n      case g:\n        h = (b - r) / d + 2;\n        break;\n\n      case b:\n        h = (r - g) / d + 4;\n        break;\n    }\n\n    h /= 6;\n  }\n\n  return [h, s, l];\n};\nvar hslToRgb = function hslToRgb(_ref9) {\n  var _ref10 = _slicedToArray(_ref9, 3),\n      h = _ref10[0],\n      s = _ref10[1],\n      l = _ref10[2];\n\n  var r, g, b;\n\n  if (s == 0) {\n    r = g = b = l; // achromatic\n  } else {\n    var hue2rgb = function hue2rgb(p, q, t) {\n      if (t < 0) t += 1;\n      if (t > 1) t -= 1;\n      if (t < 1 / 6) return p + (q - p) * 6 * t;\n      if (t < 1 / 2) return q;\n      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;\n      return p;\n    };\n\n    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;\n    var p = 2 * l - q;\n    r = hue2rgb(p, q, h + 1 / 3);\n    g = hue2rgb(p, q, h);\n    b = hue2rgb(p, q, h - 1 / 3);\n  }\n\n  return [r * 255, g * 255, b * 255];\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });