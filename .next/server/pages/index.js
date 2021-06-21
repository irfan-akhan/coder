module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/AirportForm.js":
/*!***********************************!*\
  !*** ./components/AirportForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_LocalAirport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LocalAirport */ "@material-ui/icons/LocalAirport");
/* harmony import */ var _material_ui_icons_LocalAirport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalAirport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\AirportForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let intialPickupValues = {
  pickupAirport: "",
  dropoffAddress: "",
  dropoffDate: "",
  passengers: 0
};
let intialDropoffValues = {
  DropoffAirport: "",
  pickupAddress: "",
  pickupDate: "",
  passengers: 0
};

const AirportForm = () => {
  let {
    0: formType,
    1: setFormType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Airport-Pickup");
  let {
    0: airportPickupValues,
    1: setAirportPickupValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(intialPickupValues);
  let {
    0: airportDropoffValues,
    1: setAirportDropoffValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(intialDropoffValues);

  function onChangeHandler(e) {
    e.persist();
    console.log(e.target);
    formType === "Airport-Pickup" ? setAirportPickupValues(_objectSpread(_objectSpread({}, airportPickupValues), {}, {
      [e.target.id]: e.target.value
    })) : setAirportDropoffValues(_objectSpread(_objectSpread({}, airportDropoffValues), {}, {
      [e.target.id]: e.target.value
    }));
    console.log('airportPickupValues:', airportPickupValues);
    console.log('airportDropoffValues:', airportDropoffValues);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(e.target); // formType === "Airport-Pickup"? airportPickupValues={...airportPickupValues, [e.target.id]:  e.target.value}:airportDropoffValues={...airportDropoffValues, [e.target.id]:e.target.value}

    console.log('airportPickupValues:', airportPickupValues);
    console.log('airportDropoffValues:', airportDropoffValues);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.radios,
      style: {
        paddingTop: "1rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "Airport-Pickup",
        style: {
          color: "#fff",
          paddingLeft: "1rem",
          fontSize: ".9rem"
        },
        children: "Airport Pickup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onClick: e => {
          console.log("Pickup");
          setFormType("Airport-Pickup");
          setAirportDropoffValues(_objectSpread({}, intialDropoffValues));
          setAirportPickupValues(_objectSpread({}, intialPickupValues));
        },
        type: "radio",
        name: "Pickup",
        id: "Airport-Pickup",
        value: "Airport-Pickup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "Airport-Dropoff",
        style: {
          color: "#fff",
          paddingLeft: "1rem",
          fontSize: ".9rem"
        },
        children: "Airport Dropoff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        onClick: e => {
          console.log("Dropoff");
          setFormType("Airport-Dropoff");
          setAirportDropoffValues(_objectSpread({}, intialDropoffValues));
          setAirportPickupValues(_objectSpread({}, intialPickupValues));
        },
        type: "radio",
        name: "Pickup",
        id: "Airport-Dropoff",
        value: "Airport-Dropoff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, undefined), formType === "Airport-Dropoff" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: onSubmitHandler,
      className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formMain,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          onChange: onChangeHandler,
          name: "pickupAddress",
          id: "pickupAddress",
          placeholder: "Pick-up Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          name: "airport",
          onChange: onChangeHandler,
          id: "dropoffAirport",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            selected: true,
            disabled: true,
            value: "null",
            id: "null",
            children: "Select Dropoff Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Murtala Muhammed International Airport",
            children: "Murtala Muhammed International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Murtala Muhammed Domestic Airport",
            children: "Murtala Muhammed Domestic Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Port Harcourt International Airport",
            children: "Port Harcourt International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Nnamdi Azikwe International Airport",
            children: "Nnamdi Azikwe International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Kotoka International Airport",
            children: "Kotoka International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Kumasi Airport",
            children: "Kumasi Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "London Heathrow Airport",
            children: "London Heathrow Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Gatwick Airport",
            children: "Gatwick Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "London City Airport",
            children: "London City Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          required: true,
          type: "text",
          onChange: onChangeHandler,
          id: "pickupDate",
          placeholder: "Pick-up Date",
          onFocus: e => {
            e.target.type = "date";
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          name: "passengers",
          onChange: onChangeHandler,
          id: "passengers",
          placeholder: "Number of Passengers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "submit",
          value: "BOOK NOW"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.formMain,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: onSubmitHandler,
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          required: true,
          onChange: onChangeHandler,
          name: "pickupAirport",
          id: "pickupAirport",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            selected: true,
            disabled: true,
            value: "",
            children: "Select Pickup Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Murtala Muhammed International Airport",
            children: "Murtala Muhammed International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Murtala Muhammed Domestic Airport",
            children: "Murtala Muhammed Domestic Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Port Harcourt International Airport",
            children: "Port Harcourt International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Nnamdi Azikwe International Airport",
            children: "Nnamdi Azikwe International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Kotoka International Airport",
            children: "Kotoka International Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Kumasi Airport",
            children: "Kumasi Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "London Heathrow Airport",
            children: "London Heathrow Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Gatwick Airport",
            children: "Gatwick Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "London City Airport",
            children: "London City Airport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          required: true,
          type: "text",
          name: "dropAddress",
          placeholder: "Drop-off Address",
          id: "dropoffAddress",
          onChange: onChangeHandler,
          value: airportPickupValues.dropoffAddress
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          required: true,
          type: "text",
          placeholder: "Drop-off Date",
          onFocus: e => {
            e.target.type = "date";
          },
          id: "dropoffDate",
          onChange: onChangeHandler,
          value: airportPickupValues.dropoffDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          required: true,
          type: "number",
          name: "passengers",
          onChange: onChangeHandler,
          value: airportPickupValues.passengers,
          id: "passengers",
          placeholder: "Number of Passengers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "submit",
          value: "BOOK NOW"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AirportForm);

/***/ }),

/***/ "./components/Carhire.jsx":
/*!********************************!*\
  !*** ./components/Carhire.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carhire; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./components/Modal.jsx");
/* harmony import */ var _styles_Carform_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Carform.module.css */ "./styles/Carform.module.css");
/* harmony import */ var _styles_Carform_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Carform_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Carhire.jsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Carhire extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      vehicle: '',
      address: '',
      destination: '',
      date: '',
      time: '',
      days: '',
      open: false
    });

    _defineProperty(this, "handleOpen", () => {
      this.setState({
        open: true
      });
    });

    _defineProperty(this, "handleClose", () => {
      this.setState({
        open: false
      });
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: _styles_Carform_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          name: "",
          id: "",
          value: this.state.vehicle,
          onChange: e => this.setState({
            vehicle: e.target.value
          }),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Focus",
            children: "Ford Focus "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Figo",
            children: "Ford Figo "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Fusion",
            children: "Ford Fusion "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Eco Sport",
            children: "Ford Eco Sport"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Camry",
            children: "Toyota Camry"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Volkswagon Passat",
            children: "Volkswagon Passat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Corolla",
            children: "Toyota Corolla"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Hyundai Elentra",
            children: "Hyundai Elentra"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Escape",
            children: "Ford Escape"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Hyundai IX35",
            children: "Hyundai IX35"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Hyundai Santa Fe",
            children: "Hyundai Santa Fe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Rav 4",
            children: "Toyota Rav 4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Honda CRV",
            children: "Honda CRV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Sienna",
            children: "Toyota Sienna"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Mercedes Benz E200",
            children: "Mercedes Benz E200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "BMW Grancoupe 428i",
            children: "BMW Grancoupe 428i"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Camry 2018",
            children: "Toyota Camry 2018"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Prado 2014",
            children: "Toyota Prado 2014"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Prado 2017",
            children: "Toyota Prado 2017"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Prado 2018",
            children: "Toyota Prado 2018"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Prado 2020",
            children: "Toyota Prado 2020"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Landcruiser 2018",
            children: "Toyota Landcruiser 2018"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Edge",
            children: "Ford Edge"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Ford Explorer",
            children: "Ford Explorer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Hiace",
            children: "Toyota Hiace"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "Toyota Coaster",
            children: "Toyota Coaster"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Pickup Address",
          type: "text",
          name: "",
          id: "",
          value: this.state.address,
          onChange: e => this.setState({
            address: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Destination Address",
          type: "text",
          name: "",
          id: "",
          value: this.state.destination,
          onChange: e => this.setState({
            destination: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Date of Booking",
          type: "date",
          name: "",
          id: "",
          value: this.state.date,
          onChange: e => this.setState({
            date: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Time of Booking",
          type: "time",
          name: "",
          id: "",
          value: this.state.time,
          onChange: e => this.setState({
            time: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Number of Passengers",
          type: "number",
          name: "",
          id: "",
          value: this.state.days,
          onChange: e => this.setState({
            days: e.target.value
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_Carform_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btnGrad,
          onClick: this.handleOpen,
          children: "Proceed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          handleClose: this.handleClose,
          open: this.state.open
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/Choose.jsx":
/*!*******************************!*\
  !*** ./components/Choose.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/QueryBuilder */ "@material-ui/icons/QueryBuilder");
/* harmony import */ var _material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LocalAtm */ "@material-ui/icons/LocalAtm");
/* harmony import */ var _material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Choose.jsx";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  card: {
    padding: "0.5rem"
  },
  weightLight: {
    fontWeight: 300
  }
});

const Choose = () => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      padding: "4rem",
      width: "80%",
      margin: "auto"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 5,
      justify: "center",
      alignItems: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          align: "center",
          variant: "h4",
          children: "Why Choose Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "caption",
          color: "grey",
          align: "center",
          paragraph: true,
          children: ["We strive to provide quality service and great customer satisfaction.", " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          style: {
            height: "286px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_QueryBuilder__WEBPACK_IMPORTED_MODULE_4___default.a, {
              style: {
                fontSize: "60px"
              },
              color: "secondary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              variant: "h6",
              align: "center",
              color: "secondary",
              children: "ALWAYS ON TIME"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Punctuality is one of our strength. We strictly keep to schedule as we don't want to keep our clients waiting."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          style: {
            height: "286px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LocalAtm__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                fontSize: "60px"
              },
              color: "secondary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              variant: "h6",
              align: "center",
              color: "secondary",
              children: "GREAT VALUE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Despite the quality of the service we render to our clients, our rates are one of the most affordable in the industry."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          style: {
            height: "286px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_6___default.a, {
              style: {
                fontSize: "50px"
              },
              color: "secondary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              variant: "h6",
              align: "center",
              children: "SECURE AND RELIABLE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Our client's safety and satisfaction is our priority and as such, we prioritize their security and comfort."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Choose);

/***/ }),

/***/ "./components/CovidModal.jsx":
/*!***********************************!*\
  !*** ./components/CovidModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\CovidModal.jsx";




function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    // backgroundImage: url("/assets/images/covid.jpg"),
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
function SimpleModal() {
  const classes = useStyles(); // getModalStyle is not a pure function, we roll the style only on the first render

  const [modalStyle] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(getModalStyle);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: modalStyle,
    className: classes.paper,
    style: {
      background: `url("/assets/images/covid.jpg")`,
      position: "absolute",
      top: '30vh',
      left: ' 10vw',
      width: '80%',
      border: '1px solid #E2B443',
      outline: 'none',
      borderRadius: '10px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      id: "simple-modal-title",
      style: {
        color: '#000080',
        textShadow: '1px 1px #fff'
      },
      children: "Responsible Travel: Coronavirus (COVID-19): "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      id: "simple-modal-description",
      children: "Our priority is to ensure all our customers and drivers have a safe and comfortable journey. We are committed to doing everything we can to guard against the spread of COVID-19 and hope that all passengers will follow the advice from the Nigeria Centre for Disease Control (NCDC)."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      id: "simple-modal-description",
      children: "We advise all our customers to follow the current PUBLIC HEALTH ADVISORY ON COVID-19 guidance before taking journeys."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Read More.."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      children: body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/FleetItem.js":
/*!*********************************!*\
  !*** ./components/FleetItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ "@material-ui/icons/LocalMall");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\FleetItem.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
function MediaCard({
  title,
  description
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    direction: "column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: `/assets/images/${title}.png`,
        alt: title,
        width: 400,
        height: 300,
        "data-aos": "fade-top"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        gutterBottom: true,
        variant: "h5",
        component: "h2",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "body1",
        component: "p",
        color: "primary",
        paragraph: true,
        children: "Mercedes Benz E350, BMW Grancoupe 428i, BMW 523i, Toyota Camry 2018, Jagua XF, Mercedez Benz E200, Mercedez Benz E300, etc."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "body1",
        color: "textSecondary",
        component: "p",
        children: "A step closer to luxury. Comfort and convenience is guaranteed. Can accommodate up to 4 passengers and 2 luggages."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default.a, {
            fontSize: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), " 4", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_5___default.a, {
            fontSize: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), " 2"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Modal.jsx":
/*!******************************!*\
  !*** ./components/Modal.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionsModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "@material-ui/core/Modal");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Modal.module.css */ "./styles/Modal.module.css");
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Modal.jsx";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
function TransitionsModal(props) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      className: classes.modal,
      open: props.open,
      onClose: props.handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4___default.a,
      BackdropProps: {
        timeout: 500
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
        in: props.open,
        style: {
          background: '#362e8b',
          borderTopRightRadius: '50px',
          borderBottomLeftRadius: '50px',
          border: 'none'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.paper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.modalForm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.name,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                placeholder: "First Name",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Last Name",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "email",
                placeholder: "Email ",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "tel",
                placeholder: "Mobile",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.disabled,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "cost",
                children: "Price Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "cost",
                placeholder: "5243254",
                disabled: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 58
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "vat",
                children: "VAT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                id: "vat",
                placeholder: "87235",
                disabled: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 49
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "total",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                id: "total",
                type: "text",
                disabled: true,
                placeholder: "3500000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btnGrad,
              type: "submit",
              children: "Book Now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Partners.jsx":
/*!*********************************!*\
  !*** ./components/Partners.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "@material-ui/icons/WhatsApp");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "@material-ui/icons/MailOutline");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Phone */ "@material-ui/icons/Phone");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Partners.jsx";






const Partners = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      marginTop: "5rem",
      paddingBottom: "5rem"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 3,
      justify: "center",
      alignItems: "center",
      direction: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "h4",
          align: "center",
          children: "Our Payment Partners"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          color: "grey",
          align: "center",
          paragraph: true,
          children: "Globally tested and trusted online payment processors."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          raised: true,
          style: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "1rem 5rem"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/flutter.png",
            alt: "Flutter wave",
            style: {
              width: "300px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/paypal.png",
            alt: "Paypal",
            style: {
              width: "200px",
              margin: "0px 30px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/images/stripe.png",
            alt: "Stripe",
            style: {
              width: "150px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./components/Reviews.jsx":
/*!********************************!*\
  !*** ./components/Reviews.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/FormatQuote */ "@material-ui/icons/FormatQuote");
/* harmony import */ var _material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Reviews.jsx";



const Reviews = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 3,
      justify: "center",
      alignItems: "center",
      direction: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h4",
        "data-aos": "zoom-in",
        paragrah: true,
        align: "center",
        children: "What our Clients are saying"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "caption",
          "data-aos": "zoom-in",
          color: "grey",
          align: "center",
          paragraph: true,
          children: "Our clients are saying great things about us. Here are a few:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        container: true,
        spacing: 8,
        style: {
          width: "70%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
            "data-aos": "fade-right",
            className: "",
            style: {
              background: "#212121",
              padding: "1rem 1.5rem",
              color: "#fff",
              position: "relative"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "body2",
              paragraph: true,
              style: {
                color: "#fff"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_2___default.a, {
                style: {
                  transform: "rotate(180deg)",
                  marginLeft: "-25px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente esse est veniam ea natus hic deserunt explicabo cumque soluta?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "Jaan Wick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "caption",
              style: {
                color: "#fff"
              },
              children: "Lagos, Nigeria"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
            "data-aos": "fade-left",
            className: "",
            style: {
              background: "#212121",
              padding: "1rem 1.5rem",
              color: "#fff",
              position: "relative"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "body2",
              paragraph: true,
              style: {
                color: "#fff"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_FormatQuote__WEBPACK_IMPORTED_MODULE_2___default.a, {
                style: {
                  transform: "rotate(180deg)",
                  marginLeft: "-25px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, undefined), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente esse est veniam ea natus hic deserunt explicabo cumque soluta?"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "subtitle2",
              color: "primary",
              children: "Jaan Wick"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
              variant: "caption",
              style: {
                color: "#fff"
              },
              children: "Lagos, Nigeria"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./components/Works.js":
/*!*****************************!*\
  !*** ./components/Works.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_NavigationSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/NavigationSharp */ "@material-ui/icons/NavigationSharp");
/* harmony import */ var _material_ui_icons_NavigationSharp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigationSharp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CreditCard */ "@material-ui/icons/CreditCard");
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Room */ "@material-ui/icons/Room");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\components\\Works.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  card: {
    padding: "0.5rem"
  },
  weightLight: {
    fontWeight: 300
  }
});

const Works = () => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: {
      padding: "4rem",
      width: "80%",
      margin: "auto"
    },
    "data-aos": "fade-right",
    "data-aos-delay": "400",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 5,
      justify: "center",
      alignItems: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          align: "center",
          variant: "h4",
          style: {
            color: "#fff"
          },
          children: "How It Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "caption",
          color: "grey",
          align: "center",
          style: {
            color: "#fff"
          },
          paragraph: true,
          children: "Accessing our services is as simple as illustrated below."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          "data-aos": "zoom-in",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_NavigationSharp__WEBPACK_IMPORTED_MODULE_4___default.a, {
              style: {
                fontSize: "60px"
              },
              color: "primary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              color: "secondary",
              gutterBottom: true,
              variant: "h6",
              align: "center",
              children: "Book"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Make a booking by specifying your travel date, pickup location, destination and desired vehicle class."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          "data-aos": "zoom-in",
          "data-aos-delay": "500",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                fontSize: "60px"
              },
              color: "primary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              variant: "h6",
              align: "center",
              children: "Pay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Confirm your booking by securely making instant online payment, either using a credit card or debit card."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        item: true,
        sm: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: classes.card,
          style: {
            height: "286px"
          },
          "data-aos": "zoom-in",
          "data-aos-delay": "500",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_6___default.a, {
              style: {
                fontSize: "60px"
              },
              color: "primary",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              variant: "h6",
              align: "center",
              children: "Travel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              gutterBottom: true,
              color: "secondary",
              align: "center",
              variant: "body1",
              className: classes.weightLight,
              children: "Driver will arrive on schedule for pickup at pickup location and proceed to your destination in style and comfort."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Works);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FleetItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FleetItem */ "./components/FleetItem.js");
/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Reviews */ "./components/Reviews.jsx");
/* harmony import */ var _components_Choose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Choose */ "./components/Choose.jsx");
/* harmony import */ var _components_Works__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Works */ "./components/Works.js");
/* harmony import */ var _components_Partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Partners */ "./components/Partners.jsx");
/* harmony import */ var _components_AirportForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AirportForm */ "./components/AirportForm.js");
/* harmony import */ var _components_Carhire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Carhire */ "./components/Carhire.jsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_CovidModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CovidModal */ "./components/CovidModal.jsx");


var _jsxFileName = "C:\\Users\\irfan\\Desktop\\ocacfr\\pages\\index.jsx";













function Home() {
  let {
    0: baseForm,
    1: setBaseForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Airport Transfer");

  function onClickHandler(e) {
    console.log("clicked");
    let targetValue = e.target.innerText.trim();
    setBaseForm(targetValue);
    console.log(e.target.innerText.trim());
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      justify: "center",
      className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.formBg,
      style: {
        height: "85vh",
        background: `url('/assets/images/car.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CovidModal__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        item: true,
        xs: 8,
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.formContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.tabs,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            onClick: onClickHandler,
            style: {
              backgroundColor: baseForm === "Airport Transfer" ? "#E3B646cc" : ""
            },
            children: "Airport Transfer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            onClick: onClickHandler,
            style: {
              backgroundColor: baseForm === "Car Hire" ? "#E3B646cc" : ""
            },
            children: "Car Hire"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            onClick: onClickHandler,
            style: {
              backgroundColor: baseForm === "Priority Pass" ? "#E3B646cc" : ""
            },
            children: "Priority Pass"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), baseForm === "Airport" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AirportForm__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this) : baseForm === "Car Hire" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Carhire__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AirportForm__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.fleet,
      style: {
        padding: "4rem",
        width: "60%",
        margin: "auto",
        textAlign: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        spacing: 2,
        justify: "center",
        direction: "column",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h4",
            align: "center",
            color: "textPrimary",
            children: "Our Fleet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          variant: "body2",
          paragraph: true,
          children: "Shuttle Lane offers a variety of service class you can choose from depending on your needs."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FleetItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "luxury",
            description: "A step closer to luxury. Comfort and convenience is guaranteed. Can accommodate up to 4 passengers and 2 luggages. Ford Focus, Ford Figo, MG550, Ford Fusion, Toyota Camry, Volkswagon Passat, Toyota Corolla, Hyundai Elentra, etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.works,
      id: "how-it-works",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Works__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.choose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Choose__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.reviews,
      style: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        background: `url("/assets/images/background.jpg")`
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Reviews__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        spacing: 3,
        justify: "center",
        alignItems: "center",
        style: {
          width: "70vw",
          margin: " 5rem auto"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.trustpilot.com/review/shuttlelane.com",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/assets/images/trustpilot.png",
              alt: "trustpilot logo",
              style: {
                width: "150px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "flex",
                alignItems: "center",
                marginLeft: "2rem"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/assets/images/star.png",
                style: {
                  width: "20px"
                },
                alt: "rating star"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  color: "Green"
                },
                children: ["4.3", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    color: "black",
                    fontSize: ".7rem"
                  },
                  children: " /5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "_blank",
              href: `https://www.google.com/search?q=google+shuttlelane+review&sxsrf=ALeKk03nngNGPkFxjmokthABTb56bA1aWA%3A1624185657820&ei=ORvPYNnAMZWO4-EPk6iEyA4&oq=google+shuttlelane+review&gs_lcp=Cgdnd3Mtd2l6EANQhxFY7iNg1yVoAHAAeACAAZoRiAGiG5IBCzAuNC4xLjEuOS0xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZwbuJg6bxAhUVxzgGHRMUAekQ4dUDCBI&uact=5#lrd=0x103b8c448e2f97c3:0xc95f24c00955aecc,1`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/assets/images/google.png",
                alt: "google logo",
                style: {
                  width: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "2rem"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/assets/images/star.png",
                  style: {
                    width: "20px"
                  },
                  alt: "rating star"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    color: "Green"
                  },
                  children: ["5", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    style: {
                      color: "black",
                      fontSize: ".7rem"
                    },
                    children: " /5"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.tripadvisor.in/Attraction_Review-g304026-d17527097-Reviews-Shuttlelane-Lagos_Lagos_State.html",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/assets/images/tripadvisor.png",
              alt: "tripadvisor logo",
              style: {
                width: "150px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "flex",
                alignItems: "center",
                marginLeft: "2rem"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/assets/images/star.png",
                style: {
                  width: "20px"
                },
                alt: "rating star"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  color: "Green"
                },
                children: ["4.9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    color: "black",
                    fontSize: ".7rem"
                  },
                  children: " /5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.partner,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Partners__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./styles/Carform.module.css":
/*!***********************************!*\
  !*** ./styles/Carform.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "Carform_form__zkJsm",
	"btnGrad": "Carform_btnGrad__1MlSA"
};


/***/ }),

/***/ "./styles/Form.module.css":
/*!********************************!*\
  !*** ./styles/Form.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"formContainer": "Form_formContainer__FUH_X",
	"form": "Form_form__1jpez",
	"formBg": "Form_formBg__3BmY-",
	"radios": "Form_radios__uopkc",
	"MuiBox-root-17": "Form_MuiBox-root-17__1Lbor",
	"tabs": "Form_tabs__3P480",
	"toggle": "Form_toggle__3INZp",
	"btnGrad": "Form_btnGrad__nM1Cb"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Home_header__3vlZW",
	"fleet": "Home_fleet__2_iQV",
	"works": "Home_works__3QYg_"
};


/***/ }),

/***/ "./styles/Modal.module.css":
/*!*********************************!*\
  !*** ./styles/Modal.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalForm": "Modal_modalForm__1WGAO",
	"disabled": "Modal_disabled__25JKO",
	"btnGrad": "Modal_btnGrad__3p7EM"
};


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/CreditCard":
/*!************************************************!*\
  !*** external "@material-ui/icons/CreditCard" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CreditCard");

/***/ }),

/***/ "@material-ui/icons/FormatQuote":
/*!*************************************************!*\
  !*** external "@material-ui/icons/FormatQuote" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatQuote");

/***/ }),

/***/ "@material-ui/icons/LocalAirport":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LocalAirport" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalAirport");

/***/ }),

/***/ "@material-ui/icons/LocalAtm":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LocalAtm" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalAtm");

/***/ }),

/***/ "@material-ui/icons/LocalMall":
/*!***********************************************!*\
  !*** external "@material-ui/icons/LocalMall" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalMall");

/***/ }),

/***/ "@material-ui/icons/MailOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MailOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "@material-ui/icons/NavigationSharp":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/NavigationSharp" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigationSharp");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/Phone":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Phone" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "@material-ui/icons/QueryBuilder":
/*!**************************************************!*\
  !*** external "@material-ui/icons/QueryBuilder" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/QueryBuilder");

/***/ }),

/***/ "@material-ui/icons/Room":
/*!******************************************!*\
  !*** external "@material-ui/icons/Room" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Room");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "@material-ui/icons/WhatsApp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/WhatsApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WhatsApp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FpcnBvcnRGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyaGlyZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaG9vc2UuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ292aWRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GbGVldEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0bmVycy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXZpZXdzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0NhcmZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlZGl0Q2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Gb3JtYXRRdW90ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEFpcnBvcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRpb25TaGFycFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUXVlcnlCdWlsZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Jvb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1doYXRzQXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbnRpYWxQaWNrdXBWYWx1ZXMiLCJwaWNrdXBBaXJwb3J0IiwiZHJvcG9mZkFkZHJlc3MiLCJkcm9wb2ZmRGF0ZSIsInBhc3NlbmdlcnMiLCJpbnRpYWxEcm9wb2ZmVmFsdWVzIiwiRHJvcG9mZkFpcnBvcnQiLCJwaWNrdXBBZGRyZXNzIiwicGlja3VwRGF0ZSIsIkFpcnBvcnRGb3JtIiwiZm9ybVR5cGUiLCJzZXRGb3JtVHlwZSIsInVzZVN0YXRlIiwiYWlycG9ydFBpY2t1cFZhbHVlcyIsInNldEFpcnBvcnRQaWNrdXBWYWx1ZXMiLCJhaXJwb3J0RHJvcG9mZlZhbHVlcyIsInNldEFpcnBvcnREcm9wb2ZmVmFsdWVzIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsInBlcnNpc3QiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInJhZGlvcyIsInBhZGRpbmdUb3AiLCJjb2xvciIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJmb3JtTWFpbiIsInR5cGUiLCJDYXJoaXJlIiwiQ29tcG9uZW50IiwidmVoaWNsZSIsImFkZHJlc3MiLCJkZXN0aW5hdGlvbiIsImRhdGUiLCJ0aW1lIiwiZGF5cyIsIm9wZW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsImNhciIsInN0YXRlIiwiYnRuR3JhZCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjYXJkIiwicGFkZGluZyIsIndlaWdodExpZ2h0IiwiZm9udFdlaWdodCIsIkNob29zZSIsImNsYXNzZXMiLCJ3aWR0aCIsIm1hcmdpbiIsImhlaWdodCIsInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJnZXRNb2RhbFN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInRoZW1lIiwicGFwZXIiLCJwb3NpdGlvbiIsImJvcmRlciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJzcGFjaW5nIiwiU2ltcGxlTW9kYWwiLCJtb2RhbFN0eWxlIiwiUmVhY3QiLCJzZXRPcGVuIiwiYm9keSIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwiYm9yZGVyUmFkaXVzIiwidGV4dFNoYWRvdyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiTWVkaWFDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtb2RhbCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJUcmFuc2l0aW9uc01vZGFsIiwicHJvcHMiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJtb2RhbEZvcm0iLCJuYW1lIiwiaW5wdXQiLCJkaXNhYmxlZCIsIlBhcnRuZXJzIiwibWFyZ2luVG9wIiwicGFkZGluZ0JvdHRvbSIsIlJldmlld3MiLCJtYXJnaW5MZWZ0IiwiV29ya3MiLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInBlcmNlbnRTaXplcyIsIm0iLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJzcmMiLCJsb2FkIiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkhvbWUiLCJiYXNlRm9ybSIsInNldEJhc2VGb3JtIiwib25DbGlja0hhbmRsZXIiLCJ0YXJnZXRWYWx1ZSIsImlubmVyVGV4dCIsInRyaW0iLCJmb3JtQmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmb3JtQ29udGFpbmVyIiwidGFicyIsInN0eWxlcyIsImZsZWV0IiwidGV4dEFsaWduIiwid29ya3MiLCJjaG9vc2UiLCJyZXZpZXdzIiwicGFydG5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvY2FsQWlycG9ydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEFpcnBvcnRcIjtcclxuaW1wb3J0IHtcclxuICBGbGlnaHRMYW5kT3V0bGluZWQsXHJcbiAgRmxpZ2h0VGFrZW9mZixcclxuICBSb29tLFxyXG4gIERhdGVSYW5nZSxcclxuICBHcm91cEFkZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5sZXQgaW50aWFsUGlja3VwVmFsdWVzID17cGlja3VwQWlycG9ydDpcIlwiLGRyb3BvZmZBZGRyZXNzOlwiXCIsZHJvcG9mZkRhdGU6XCJcIiwgcGFzc2VuZ2VyczowfVxyXG5sZXQgaW50aWFsRHJvcG9mZlZhbHVlcyA9e0Ryb3BvZmZBaXJwb3J0OlwiXCIscGlja3VwQWRkcmVzczpcIlwiLHBpY2t1cERhdGU6XCJcIiwgcGFzc2VuZ2VyczowfVxyXG5cclxuY29uc3QgQWlycG9ydEZvcm0gPSAoKSA9PiB7XHJcbiAgbGV0IFtmb3JtVHlwZSwgc2V0Rm9ybVR5cGVdID0gdXNlU3RhdGUoXCJBaXJwb3J0LVBpY2t1cFwiKTtcclxuICBsZXQgW2FpcnBvcnRQaWNrdXBWYWx1ZXMsIHNldEFpcnBvcnRQaWNrdXBWYWx1ZXNdID0gdXNlU3RhdGUoaW50aWFsUGlja3VwVmFsdWVzKVxyXG4gIGxldCBbYWlycG9ydERyb3BvZmZWYWx1ZXMsIHNldEFpcnBvcnREcm9wb2ZmVmFsdWVzXSA9IHVzZVN0YXRlKGludGlhbERyb3BvZmZWYWx1ZXMpXHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihlKXtcclxuICAgIGUucGVyc2lzdCgpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpIFxyXG4gICAgZm9ybVR5cGUgPT09IFwiQWlycG9ydC1QaWNrdXBcIj8gc2V0QWlycG9ydFBpY2t1cFZhbHVlcyh7Li4uYWlycG9ydFBpY2t1cFZhbHVlcywgW2UudGFyZ2V0LmlkXTogIGUudGFyZ2V0LnZhbHVlfSk6c2V0QWlycG9ydERyb3BvZmZWYWx1ZXMoey4uLmFpcnBvcnREcm9wb2ZmVmFsdWVzLCBbZS50YXJnZXQuaWRdOmUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICBjb25zb2xlLmxvZygnYWlycG9ydFBpY2t1cFZhbHVlczonLCBhaXJwb3J0UGlja3VwVmFsdWVzKTtcclxuICAgIGNvbnNvbGUubG9nKCdhaXJwb3J0RHJvcG9mZlZhbHVlczonLCBhaXJwb3J0RHJvcG9mZlZhbHVlcyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0SGFuZGxlcihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KSBcclxuICAgIC8vIGZvcm1UeXBlID09PSBcIkFpcnBvcnQtUGlja3VwXCI/IGFpcnBvcnRQaWNrdXBWYWx1ZXM9ey4uLmFpcnBvcnRQaWNrdXBWYWx1ZXMsIFtlLnRhcmdldC5pZF06ICBlLnRhcmdldC52YWx1ZX06YWlycG9ydERyb3BvZmZWYWx1ZXM9ey4uLmFpcnBvcnREcm9wb2ZmVmFsdWVzLCBbZS50YXJnZXQuaWRdOmUudGFyZ2V0LnZhbHVlfVxyXG4gICAgY29uc29sZS5sb2coJ2FpcnBvcnRQaWNrdXBWYWx1ZXM6JywgYWlycG9ydFBpY2t1cFZhbHVlcyk7XHJcbiAgICBjb25zb2xlLmxvZygnYWlycG9ydERyb3BvZmZWYWx1ZXM6JywgYWlycG9ydERyb3BvZmZWYWx1ZXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtLnJhZGlvc30gc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgaHRtbEZvcj1cIkFpcnBvcnQtUGlja3VwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiLCBwYWRkaW5nTGVmdDogXCIxcmVtXCIsIGZvbnRTaXplOiBcIi45cmVtXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWlycG9ydCBQaWNrdXBcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBpY2t1cFwiKTtcclxuICAgICAgICAgICAgICBzZXRGb3JtVHlwZShcIkFpcnBvcnQtUGlja3VwXCIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNldEFpcnBvcnREcm9wb2ZmVmFsdWVzKHsuLi5pbnRpYWxEcm9wb2ZmVmFsdWVzfSlcclxuICAgICAgICAgICAgICBzZXRBaXJwb3J0UGlja3VwVmFsdWVzKHsuLi5pbnRpYWxQaWNrdXBWYWx1ZXN9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwiUGlja3VwXCJcclxuICAgICAgICAgICAgaWQ9XCJBaXJwb3J0LVBpY2t1cFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWlycG9ydC1QaWNrdXBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiQWlycG9ydC1Ecm9wb2ZmXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiLCBwYWRkaW5nTGVmdDogXCIxcmVtXCIsIGZvbnRTaXplOiBcIi45cmVtXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWlycG9ydCBEcm9wb2ZmXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wb2ZmXCIpO1xyXG4gICAgICAgICAgICAgIHNldEZvcm1UeXBlKFwiQWlycG9ydC1Ecm9wb2ZmXCIpO1xyXG4gICAgICAgICAgICAgIHNldEFpcnBvcnREcm9wb2ZmVmFsdWVzKHsuLi5pbnRpYWxEcm9wb2ZmVmFsdWVzfSlcclxuICAgICAgICAgICAgICBzZXRBaXJwb3J0UGlja3VwVmFsdWVzKHsuLi5pbnRpYWxQaWNrdXBWYWx1ZXN9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwiUGlja3VwXCJcclxuICAgICAgICAgICAgaWQ9XCJBaXJwb3J0LURyb3BvZmZcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIkFpcnBvcnQtRHJvcG9mZlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Zm9ybVR5cGUgPT09IFwiQWlycG9ydC1Ecm9wb2ZmXCIgPyAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfSBjbGFzc05hbWU9e2Zvcm0uZm9ybU1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybS5mb3JtfT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gIG5hbWU9XCJwaWNrdXBBZGRyZXNzXCIgaWQ9XCJwaWNrdXBBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJQaWNrLXVwIEFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImFpcnBvcnRcIiAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0gIGlkPVwiZHJvcG9mZkFpcnBvcnRcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQgIHZhbHVlPSdudWxsJyBpZD1cIm51bGxcIj5cclxuICAgICAgICAgICAgICAgICAgU2VsZWN0IERyb3BvZmYgQWlycG9ydFxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICB2YWx1ZT1cIk11cnRhbGEgTXVoYW1tZWQgSW50ZXJuYXRpb25hbCBBaXJwb3J0XCIgPk11cnRhbGEgTXVoYW1tZWQgSW50ZXJuYXRpb25hbCBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICB2YWx1ZT1cIk11cnRhbGEgTXVoYW1tZWQgRG9tZXN0aWMgQWlycG9ydFwiPk11cnRhbGEgTXVoYW1tZWQgRG9tZXN0aWMgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAgdmFsdWU9XCJQb3J0IEhhcmNvdXJ0IEludGVybmF0aW9uYWwgQWlycG9ydFwiPlBvcnQgSGFyY291cnQgSW50ZXJuYXRpb25hbCBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICB2YWx1ZT1cIk5uYW1kaSBBemlrd2UgSW50ZXJuYXRpb25hbCBBaXJwb3J0XCI+Tm5hbWRpIEF6aWt3ZSBJbnRlcm5hdGlvbmFsIEFpcnBvcnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gIHZhbHVlPVwiS290b2thIEludGVybmF0aW9uYWwgQWlycG9ydFwiPktvdG9rYSBJbnRlcm5hdGlvbmFsIEFpcnBvcnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gIHZhbHVlPVwiS3VtYXNpIEFpcnBvcnRcIj5LdW1hc2kgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAgdmFsdWU9XCJMb25kb24gSGVhdGhyb3cgQWlycG9ydFwiPkxvbmRvbiBIZWF0aHJvdyBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICB2YWx1ZT1cIkdhdHdpY2sgQWlycG9ydFwiPkdhdHdpY2sgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAgdmFsdWU9XCJMb25kb24gQ2l0eSBBaXJwb3J0XCI+TG9uZG9uIENpdHkgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBpZD1cInBpY2t1cERhdGVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWNrLXVwIERhdGVcIlxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc2VuZ2Vyc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzZW5nZXJzXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyIG9mIFBhc3NlbmdlcnNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkJPT0sgTk9XXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtLmZvcm1NYWlufT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0gIGNsYXNzTmFtZT17Zm9ybS5mb3JtfT5cclxuICAgICAgICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9ICBuYW1lPVwicGlja3VwQWlycG9ydFwiIGlkPVwicGlja3VwQWlycG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCBkaXNhYmxlZCB2YWx1ZT1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgU2VsZWN0IFBpY2t1cCBBaXJwb3J0XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNdXJ0YWxhIE11aGFtbWVkIEludGVybmF0aW9uYWwgQWlycG9ydFwiID5NdXJ0YWxhIE11aGFtbWVkIEludGVybmF0aW9uYWwgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk11cnRhbGEgTXVoYW1tZWQgRG9tZXN0aWMgQWlycG9ydFwiPk11cnRhbGEgTXVoYW1tZWQgRG9tZXN0aWMgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBvcnQgSGFyY291cnQgSW50ZXJuYXRpb25hbCBBaXJwb3J0XCI+UG9ydCBIYXJjb3VydCBJbnRlcm5hdGlvbmFsIEFpcnBvcnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJObmFtZGkgQXppa3dlIEludGVybmF0aW9uYWwgQWlycG9ydFwiPk5uYW1kaSBBemlrd2UgSW50ZXJuYXRpb25hbCBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS290b2thIEludGVybmF0aW9uYWwgQWlycG9ydFwiPktvdG9rYSBJbnRlcm5hdGlvbmFsIEFpcnBvcnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLdW1hc2kgQWlycG9ydFwiPkt1bWFzaSBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG9uZG9uIEhlYXRocm93IEFpcnBvcnRcIj5Mb25kb24gSGVhdGhyb3cgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdhdHdpY2sgQWlycG9ydFwiPkdhdHdpY2sgQWlycG9ydDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvbmRvbiBDaXR5IEFpcnBvcnRcIj5Mb25kb24gQ2l0eSBBaXJwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZHJvcEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEcm9wLW9mZiBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHJvcG9mZkFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXthaXJwb3J0UGlja3VwVmFsdWVzLmRyb3BvZmZBZGRyZXNzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEcm9wLW9mZiBEYXRlXCJcclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3BvZmZEYXRlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWlycG9ydFBpY2t1cFZhbHVlcy5kcm9wb2ZmRGF0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3NlbmdlcnNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXthaXJwb3J0UGlja3VwVmFsdWVzLnBhc3NlbmdlcnN9XHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3NlbmdlcnNcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW1iZXIgb2YgUGFzc2VuZ2Vyc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkJPT0sgTk9XXCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJwb3J0Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcclxuaW1wb3J0IGNhciBmcm9tIFwiLi4vc3R5bGVzL0NhcmZvcm0ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyaGlyZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgICAgIHZlaGljbGU6JycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6JycsXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOicnLFxyXG4gICAgICAgICAgICBkYXRlOicnLFxyXG4gICAgICAgICAgICB0aW1lOicnLFxyXG4gICAgICAgICAgICBkYXlzOicnLCBcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2FyLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiXCIgdmFsdWU9e3RoaXMuc3RhdGUudmVoaWNsZX0gIG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7dmVoaWNsZTogZS50YXJnZXQudmFsdWV9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGb3JkIEZvY3VzXCI+Rm9yZCBGb2N1cyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZvcmQgRmlnb1wiPkZvcmQgRmlnbyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZvcmQgRnVzaW9uXCI+Rm9yZCBGdXNpb24gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGb3JkIEVjbyBTcG9ydFwiPkZvcmQgRWNvIFNwb3J0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUb3lvdGEgQ2FtcnlcIj5Ub3lvdGEgQ2Ftcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZvbGtzd2Fnb24gUGFzc2F0XCI+Vm9sa3N3YWdvbiBQYXNzYXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRveW90YSBDb3JvbGxhXCI+VG95b3RhIENvcm9sbGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkh5dW5kYWkgRWxlbnRyYVwiPkh5dW5kYWkgRWxlbnRyYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRm9yZCBFc2NhcGVcIj5Gb3JkIEVzY2FwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSHl1bmRhaSBJWDM1XCI+SHl1bmRhaSBJWDM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIeXVuZGFpIFNhbnRhIEZlXCI+SHl1bmRhaSBTYW50YSBGZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIFJhdiA0XCI+VG95b3RhIFJhdiA0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIb25kYSBDUlZcIj5Ib25kYSBDUlY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRveW90YSBTaWVubmFcIj5Ub3lvdGEgU2llbm5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZXJjZWRlcyBCZW56IEUyMDBcIj5NZXJjZWRlcyBCZW56IEUyMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJNVyBHcmFuY291cGUgNDI4aVwiPkJNVyBHcmFuY291cGUgNDI4aTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIENhbXJ5IDIwMThcIj5Ub3lvdGEgQ2FtcnkgMjAxODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIFByYWRvIDIwMTRcIj5Ub3lvdGEgUHJhZG8gMjAxNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIFByYWRvIDIwMTdcIj5Ub3lvdGEgUHJhZG8gMjAxNzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIFByYWRvIDIwMThcIj5Ub3lvdGEgUHJhZG8gMjAxODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIFByYWRvIDIwMjBcIj5Ub3lvdGEgUHJhZG8gMjAyMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIExhbmRjcnVpc2VyIDIwMThcIj5Ub3lvdGEgTGFuZGNydWlzZXIgMjAxODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRm9yZCBFZGdlXCI+Rm9yZCBFZGdlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGb3JkIEV4cGxvcmVyXCI+Rm9yZCBFeHBsb3Jlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVG95b3RhIEhpYWNlXCI+VG95b3RhIEhpYWNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUb3lvdGEgQ29hc3RlclwiPlRveW90YSBDb2FzdGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGlja3VwIEFkZHJlc3NcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cIlwiICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHthZGRyZXNzIDogZS50YXJnZXQudmFsdWV9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkRlc3RpbmF0aW9uIEFkZHJlc3NcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cIlwiICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzdGluYXRpb259IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc3RpbmF0aW9uOiBlLnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRGF0ZSBvZiBCb29raW5nXCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJcIiAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX0gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHtkYXRlOiBlLnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlRpbWUgb2YgQm9va2luZ1wiIHR5cGU9XCJ0aW1lXCIgbmFtZT1cIlwiIGlkPVwiXCIgIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWV9IG9uQ2hhbmdlPXtlPT4gdGhpcy5zZXRTdGF0ZSh7dGltZTogZS50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOdW1iZXIgb2YgUGFzc2VuZ2Vyc1wiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiXCIgaWQ9XCJcIiAgdmFsdWU9e3RoaXMuc3RhdGUuZGF5c30gb25DaGFuZ2U9e2U9PiB0aGlzLnNldFN0YXRlKHtkYXlzOiBlLnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2FyLmJ0bkdyYWR9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwgaGFuZGxlQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9IG9wZW49e3RoaXMuc3RhdGUub3Blbn0vPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgUXVlcnlCdWlsZGVySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1F1ZXJ5QnVpbGRlclwiO1xyXG5pbXBvcnQgTG9jYWxBdG1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG1cIjtcclxuaW1wb3J0IFZlcmlmaWVkVXNlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXJcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgY2FyZDoge1xyXG4gICAgcGFkZGluZzogXCIwLjVyZW1cIixcclxuICB9LFxyXG4gIHdlaWdodExpZ2h0OiB7XHJcbiAgICBmb250V2VpZ2h0OiAzMDAsXHJcbiAgfSxcclxufSk7XHJcbmNvbnN0IENob29zZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzdHlsZT17eyBwYWRkaW5nOiBcIjRyZW1cIiwgd2lkdGg6IFwiODAlXCIsIG1hcmdpbjogXCJhdXRvXCIgfX0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fSBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgIFdoeSBDaG9vc2UgVXNcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJncmV5XCIgYWxpZ249XCJjZW50ZXJcIiBwYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIFdlIHN0cml2ZSB0byBwcm92aWRlIHF1YWxpdHkgc2VydmljZSBhbmQgZ3JlYXQgY3VzdG9tZXJcclxuICAgICAgICAgICAgc2F0aXNmYWN0aW9uLntcIiBcIn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17NH0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjI4NnB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxRdWVyeUJ1aWxkZXJJY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQUxXQVlTIE9OIFRJTUVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWlnaHRMaWdodH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQdW5jdHVhbGl0eSBpcyBvbmUgb2Ygb3VyIHN0cmVuZ3RoLiBXZSBzdHJpY3RseSBrZWVwIHRvIHNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgICBhcyB3ZSBkb24ndCB3YW50IHRvIGtlZXAgb3VyIGNsaWVudHMgd2FpdGluZy5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gc209ezR9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9IHN0eWxlPXt7IGhlaWdodDogXCIyODZweFwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8TG9jYWxBdG1JY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR1JFQVQgVkFMVUVcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWlnaHRMaWdodH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEZXNwaXRlIHRoZSBxdWFsaXR5IG9mIHRoZSBzZXJ2aWNlIHdlIHJlbmRlciB0byBvdXIgY2xpZW50cywgb3VyXHJcbiAgICAgICAgICAgICAgICByYXRlcyBhcmUgb25lIG9mIHRoZSBtb3N0IGFmZm9yZGFibGUgaW4gdGhlIGluZHVzdHJ5LlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17NH0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjI4NnB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxWZXJpZmllZFVzZXJJY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU0VDVVJFIEFORCBSRUxJQUJMRVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndlaWdodExpZ2h0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE91ciBjbGllbnQncyBzYWZldHkgYW5kIHNhdGlzZmFjdGlvbiBpcyBvdXIgcHJpb3JpdHkgYW5kIGFzXHJcbiAgICAgICAgICAgICAgICBzdWNoLCB3ZSBwcmlvcml0aXplIHRoZWlyIHNlY3VyaXR5IGFuZCBjb21mb3J0LlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDaG9vc2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTAgKyByYW5kKCk7XHJcbiAgY29uc3QgbGVmdCA9IDUwICsgcmFuZCgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgLy8gYmFja2dyb3VuZEltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb3ZpZC5qcGdcIiksXHJcbiAgICBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZU1vZGFsKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBnZXRNb2RhbFN0eWxlIGlzIG5vdCBhIHB1cmUgZnVuY3Rpb24sIHdlIHJvbGwgdGhlIHN0eWxlIG9ubHkgb24gdGhlIGZpcnN0IHJlbmRlclxyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBib2R5ID0gKFxyXG4gICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSAgc3R5bGU9e3tiYWNrZ3JvdW5kOmB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb3ZpZC5qcGdcIilgLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6ICczMHZoJywgbGVmdDogJyAxMHZ3Jywgd2lkdGggOiAnODAlJywgYm9yZGVyOicxcHggc29saWQgI0UyQjQ0MycsIG91dGxpbmU6J25vbmUnLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0+XHJcbiAgICAgIDxoMyBpZD1cInNpbXBsZS1tb2RhbC10aXRsZVwiIHN0eWxlPXt7Y29sb3I6JyMwMDAwODAnLCB0ZXh0U2hhZG93OicxcHggMXB4ICNmZmYnfX0+UmVzcG9uc2libGUgVHJhdmVsOiBDb3JvbmF2aXJ1cyAoQ09WSUQtMTkpOiA8L2gzPlxyXG4gICAgICA8cCBpZD1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICBPdXIgcHJpb3JpdHkgaXMgdG8gZW5zdXJlIGFsbCBvdXIgY3VzdG9tZXJzIGFuZCBkcml2ZXJzIGhhdmUgYSBzYWZlIGFuZCBjb21mb3J0YWJsZSBqb3VybmV5LiBXZSBhcmUgY29tbWl0dGVkIHRvIGRvaW5nIGV2ZXJ5dGhpbmcgd2UgY2FuIHRvIGd1YXJkIGFnYWluc3QgdGhlIHNwcmVhZCBvZiBDT1ZJRC0xOSBhbmQgaG9wZSB0aGF0IGFsbCBwYXNzZW5nZXJzIHdpbGwgZm9sbG93IHRoZSBhZHZpY2UgZnJvbSB0aGUgTmlnZXJpYSBDZW50cmUgZm9yIERpc2Vhc2UgQ29udHJvbCAoTkNEQykuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgaWQ9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIj5cclxuICAgICAgV2UgYWR2aXNlIGFsbCBvdXIgY3VzdG9tZXJzIHRvIGZvbGxvdyB0aGUgY3VycmVudCBQVUJMSUMgSEVBTFRIIEFEVklTT1JZIE9OIENPVklELTE5IGd1aWRhbmNlIGJlZm9yZSB0YWtpbmcgam91cm5leXMuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGJ1dHRvbj5SZWFkIE1vcmUuLjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUGVvcGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiO1xyXG5pbXBvcnQgTG9jYWxNYWxsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDM0NSxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhQ2FyZCh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2AvYXNzZXRzL2ltYWdlcy8ke3RpdGxlfS5wbmdgfVxyXG4gICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS10b3BcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJwXCIgY29sb3I9XCJwcmltYXJ5XCIgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgTWVyY2VkZXMgQmVueiBFMzUwLCBCTVcgR3JhbmNvdXBlIDQyOGksIEJNVyA1MjNpLCBUb3lvdGEgQ2FtcnkgMjAxOCxcclxuICAgICAgICAgIEphZ3VhIFhGLCBNZXJjZWRleiBCZW56IEUyMDAsIE1lcmNlZGV6IEJlbnogRTMwMCwgZXRjLlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgIEEgc3RlcCBjbG9zZXIgdG8gbHV4dXJ5LiBDb21mb3J0IGFuZCBjb252ZW5pZW5jZSBpcyBndWFyYW50ZWVkLiBDYW5cclxuICAgICAgICAgIGFjY29tbW9kYXRlIHVwIHRvIDQgcGFzc2VuZ2VycyBhbmQgMiBsdWdnYWdlcy5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGVvcGxlSWNvbiBmb250U2l6ZT1cIjIwXCIgLz4gNFxyXG4gICAgICAgICAgICA8TG9jYWxNYWxsSWNvbiBmb250U2l6ZT1cIjIwXCIgLz4gMlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbW9kYWw6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMylcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zaXRpb25zTW9kYWwocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxyXG4gICAgICAgIG9wZW49e3Byb3BzLm9wZW59XHJcbiAgICAgICAgb25DbG9zZT17cHJvcHMuaGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwXHJcbiAgICAgICAgfX1cclxuICAgICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxGYWRlIGluPXtwcm9wcy5vcGVufSBzdHlsZT17e2JhY2tncm91bmQ6JyMzNjJlOGInLCBib3JkZXJUb3BSaWdodFJhZGl1czonNTBweCcsICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOic1MHB4JywgYm9yZGVyOidub25lJywgIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e21vZGFsLm1vZGFsRm9ybX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGFsLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kYWwuaW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgXCIgIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJNb2JpbGVcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGFsLmRpc2FibGVkfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjb3N0Jz5QcmljZSBUb3RhbDwvbGFiZWw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9J2Nvc3QnIHBsYWNlaG9sZGVyPVwiNTI0MzI1NFwiIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndmF0Jz5WQVQ8L2xhYmVsPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPSd2YXQnIHBsYWNlaG9sZGVyPVwiODcyMzVcIiBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RvdGFsJz5Ub3RhbDwvbGFiZWw+PGlucHV0IGlkPSd0b3RhbCcgdHlwZT1cInRleHRcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIjM1MDAwMDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e21vZGFsLmJ0bkdyYWR9dHlwZT1cInN1Ym1pdFwiPkJvb2sgTm93PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FyZCwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2hhdHNBcHBcIjtcclxuaW1wb3J0IE1haWxPdXRsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmVcIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lXCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuY29uc3QgUGFydG5lcnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cmVtXCIsIHBhZGRpbmdCb3R0b206IFwiNXJlbVwiIH19PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICBPdXIgUGF5bWVudCBQYXJ0bmVyc1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwiZ3JleVwiIGFsaWduPVwiY2VudGVyXCIgcGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBHbG9iYWxseSB0ZXN0ZWQgYW5kIHRydXN0ZWQgb25saW5lIHBheW1lbnQgcHJvY2Vzc29ycy5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgcmFpc2VkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW0gNXJlbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZmx1dHRlci5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIkZsdXR0ZXIgd2F2ZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcGF5cGFsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGF5cGFsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiMHB4IDMwcHhcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3RyaXBlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3RyaXBlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRuZXJzO1xyXG4iLCJpbXBvcnQgeyBDYXJkLCBHcmlkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgRm9ybWF0UXVvdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0UXVvdGVcIjtcclxuXHJcbmNvbnN0IFJldmlld3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIHNwYWNpbmc9ezN9XHJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGRhdGEtYW9zPVwiem9vbS1pblwiIHBhcmFncmFoIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBXaGF0IG91ciBDbGllbnRzIGFyZSBzYXlpbmdcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJ6b29tLWluXCJcclxuICAgICAgICAgICAgY29sb3I9XCJncmV5XCJcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBwYXJhZ3JhcGhcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgT3VyIGNsaWVudHMgYXJlIHNheWluZyBncmVhdCB0aGluZ3MgYWJvdXQgdXMuIEhlcmUgYXJlIGEgZmV3OlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBzcGFjaW5nPXs4fSBzdHlsZT17eyB3aWR0aDogXCI3MCVcIiB9fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMjEyMTIxXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFyZW0gMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBwYXJhZ3JhcGggc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdFF1b3RlSWNvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IFwicm90YXRlKDE4MGRlZylcIiwgbWFyZ2luTGVmdDogXCItMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXRcclxuICAgICAgICAgICAgICAgIHNhcGllbnRlIGVzc2UgZXN0IHZlbmlhbSBlYSBuYXR1cyBoaWMgZGVzZXJ1bnQgZXhwbGljYWJvIGN1bXF1ZVxyXG4gICAgICAgICAgICAgICAgc29sdXRhP1xyXG4gICAgICAgICAgICAgICAgey8qIDxGb3JtYXRRdW90ZUljb24gc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBKYWFuIFdpY2tcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBMYWdvcywgTmlnZXJpYVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcmVtIDEuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgcGFyYWdyYXBoIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtYXRRdW90ZUljb25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsIG1hcmdpbkxlZnQ6IFwiLTI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV0XHJcbiAgICAgICAgICAgICAgICBzYXBpZW50ZSBlc3NlIGVzdCB2ZW5pYW0gZWEgbmF0dXMgaGljIGRlc2VydW50IGV4cGxpY2FibyBjdW1xdWVcclxuICAgICAgICAgICAgICAgIHNvbHV0YT9cclxuICAgICAgICAgICAgICAgIHsvKiA8Rm9ybWF0UXVvdGVJY29uIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSAvPiAqL31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgSmFhbiBXaWNrXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19PlxyXG4gICAgICAgICAgICAgICAgTGFnb3MsIE5pZ2VyaWFcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblNoYXJwSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRpb25TaGFycFwiO1xyXG5pbXBvcnQgQ3JlZGl0Q2FyZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DcmVkaXRDYXJkXCI7XHJcbmltcG9ydCBSb29tSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Jvb21cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGNhcmQ6IHtcclxuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXHJcbiAgfSxcclxuICB3ZWlnaHRMaWdodDoge1xyXG4gICAgZm9udFdlaWdodDogMzAwLFxyXG4gIH0sXHJcbn0pO1xyXG5jb25zdCBXb3JrcyA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjRyZW1cIiwgd2lkdGg6IFwiODAlXCIsIG1hcmdpbjogXCJhdXRvXCIgfX1cclxuICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcclxuICAgICAgZGF0YS1hb3MtZGVsYXk9XCI0MDBcIlxyXG4gICAgPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0ganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNFwiIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fT5cclxuICAgICAgICAgICAgSG93IEl0IFdvcmtzXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19XHJcbiAgICAgICAgICAgIHBhcmFncmFwaFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBY2Nlc3Npbmcgb3VyIHNlcnZpY2VzIGlzIGFzIHNpbXBsZSBhcyBpbGx1c3RyYXRlZCBiZWxvdy5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBzbT17NH0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gZGF0YS1hb3M9XCJ6b29tLWluXCI+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uU2hhcnBJY29uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJvb2tcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWlnaHRMaWdodH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNYWtlIGEgYm9va2luZyBieSBzcGVjaWZ5aW5nIHlvdXIgdHJhdmVsIGRhdGUsIHBpY2t1cCBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uIGFuZCBkZXNpcmVkIHZlaGljbGUgY2xhc3MuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHNtPXs0fT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDcmVkaXRDYXJkSWNvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQYXlcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWlnaHRMaWdodH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtIHlvdXIgYm9va2luZyBieSBzZWN1cmVseSBtYWtpbmcgaW5zdGFudCBvbmxpbmUgcGF5bWVudCxcclxuICAgICAgICAgICAgICAgIGVpdGhlciB1c2luZyBhIGNyZWRpdCBjYXJkIG9yIGRlYml0IGNhcmQuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHNtPXs0fT5cclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjg2cHhcIiB9fVxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cInpvb20taW5cIlxyXG4gICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxSb29tSWNvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUcmF2ZWxcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53ZWlnaHRMaWdodH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEcml2ZXIgd2lsbCBhcnJpdmUgb24gc2NoZWR1bGUgZm9yIHBpY2t1cCBhdCBwaWNrdXAgbG9jYXRpb24gYW5kXHJcbiAgICAgICAgICAgICAgICBwcm9jZWVkIHRvIHlvdXIgZGVzdGluYXRpb24gaW4gc3R5bGUgYW5kIGNvbWZvcnQuXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgTW9kYWwsQ2FyZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IEZsZWV0SXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9GbGVldEl0ZW1cIjtcbmltcG9ydCBSZXZpZXdzIGZyb20gXCIuLi9jb21wb25lbnRzL1Jldmlld3NcIjtcbmltcG9ydCBDaG9vc2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hvb3NlXCI7XG5pbXBvcnQgV29ya3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ya3NcIjtcbmltcG9ydCBQYXJ0bmVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJ0bmVyc1wiO1xuaW1wb3J0IEFpcnBvcnRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0FpcnBvcnRGb3JtXCI7XG5pbXBvcnQgQ2FyaGlyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJoaXJlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgZm9ybSBmcm9tIFwiLi4vc3R5bGVzL0Zvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IENvdmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ292aWRNb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBbYmFzZUZvcm0sIHNldEJhc2VGb3JtXSA9IHVzZVN0YXRlKFwiQWlycG9ydCBUcmFuc2ZlclwiKTtcblxuICBmdW5jdGlvbiBvbkNsaWNrSGFuZGxlcihlKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIGxldCB0YXJnZXRWYWx1ZSA9IGUudGFyZ2V0LmlubmVyVGV4dC50cmltKCk7XG4gICAgc2V0QmFzZUZvcm0odGFyZ2V0VmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dC50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWRcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2Zvcm0uZm9ybUJnfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogXCI4NXZoXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogYHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyLmpwZycpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8IENvdmlkIC8+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IGNsYXNzTmFtZT17Zm9ybS5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybS50YWJzfT5cbiAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICBiYXNlRm9ybSA9PT0gXCJBaXJwb3J0IFRyYW5zZmVyXCIgPyBcIiNFM0I2NDZjY1wiIDogXCJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWlycG9ydCBUcmFuc2ZlclxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxoNFxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhc2VGb3JtID09PSBcIkNhciBIaXJlXCIgPyBcIiNFM0I2NDZjY1wiIDogXCJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FyIEhpcmVcbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgYmFzZUZvcm0gPT09IFwiUHJpb3JpdHkgUGFzc1wiID8gXCIjRTNCNjQ2Y2NcIiA6IFwiXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByaW9yaXR5IFBhc3NcbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Jhc2VGb3JtID09PSBcIkFpcnBvcnRcIiA/IChcbiAgICAgICAgICAgIDxBaXJwb3J0Rm9ybSAvPlxuICAgICAgICAgICkgOiBiYXNlRm9ybSA9PT0gXCJDYXIgSGlyZVwiID8gKFxuICAgICAgICAgICAgPENhcmhpcmUgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFpcnBvcnRGb3JtIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxlZXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogXCI0cmVtXCIsXG4gICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICAgICAgICBPdXIgRmxlZXRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB2YXJpYW50PVwiYm9keTJcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBTaHV0dGxlIExhbmUgb2ZmZXJzIGEgdmFyaWV0eSBvZiBzZXJ2aWNlIGNsYXNzIHlvdSBjYW4gY2hvb3NlIGZyb21cbiAgICAgICAgICAgIGRlcGVuZGluZyBvbiB5b3VyIG5lZWRzLlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgPEZsZWV0SXRlbVxuICAgICAgICAgICAgICB0aXRsZT1cImx1eHVyeVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQSBzdGVwIGNsb3NlciB0byBsdXh1cnkuIENvbWZvcnQgYW5kIGNvbnZlbmllbmNlIGlzIGd1YXJhbnRlZWQuIENhbiBhY2NvbW1vZGF0ZSB1cCB0byA0IHBhc3NlbmdlcnMgYW5kIDIgbHVnZ2FnZXMuIEZvcmQgRm9jdXMsIEZvcmQgRmlnbywgTUc1NTAsIEZvcmQgRnVzaW9uLCBUb3lvdGEgQ2FtcnksIFZvbGtzd2Fnb24gUGFzc2F0LCBUb3lvdGEgQ29yb2xsYSwgSHl1bmRhaSBFbGVudHJhLCBldGMuXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndvcmtzfSBpZD1cImhvdy1pdC13b3Jrc1wiPlxuICAgICAgICA8V29ya3MgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNob29zZX0+XG4gICAgICAgIDxDaG9vc2UgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnJldmlld3N9IHN0eWxlPXt7YmFja2dyb3VuZFNpemU6XCJjb250YWluXCIsIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIiwgIGJhY2tncm91bmQ6YHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpYH19PlxuICAgICAgICA8UmV2aWV3cyAvPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3t3aWR0aDpcIjcwdndcIiwgbWFyZ2luOlwiIDVyZW0gYXV0b1wifX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gPlxuICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy9zaHV0dGxlbGFuZS5jb21cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvdHJ1c3RwaWxvdC5wbmdcIiBhbHQ9XCJ0cnVzdHBpbG90IGxvZ29cIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIn19Lz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6XCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmdcIiBzdHlsZT17e3dpZHRoOlwiMjBweFwifX0gYWx0PVwicmF0aW5nIHN0YXJcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIkdyZWVuXCJ9fT4gXG4gICAgICAgICAgICAgICAgICA0LjNcbiAgICAgICAgICAgICAgICAgIDxzcGFuICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIiwgZm9udFNpemU6XCIuN3JlbVwifX0+IC81PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSA+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9Z29vZ2xlK3NodXR0bGVsYW5lK3JldmlldyZzeHNyZj1BTGVLazAzbm5nTkdQa0Z4am1va3RoQUJUYjU2YkExYVdBJTNBMTYyNDE4NTY1NzgyMCZlaT1PUnZQWU5uQU1aV080LUVQazZpRXlBNCZvcT1nb29nbGUrc2h1dHRsZWxhbmUrcmV2aWV3JmdzX2xjcD1DZ2RuZDNNdGQybDZFQU5RaHhGWTdpTmcxeVZvQUhBQWVBQ0FBWm9SaUFHaUc1SUJDekF1TkM0eExqRXVPUzB4bUFFQW9BRUJxZ0VIWjNkekxYZHBlc0FCQVEmc2NsaWVudD1nd3Mtd2l6JnZlZD0wYWhVS0V3aVp3YnVKZzZieEFoVVZ4emdHSFJNVUFla1E0ZFVEQ0JJJnVhY3Q9NSNscmQ9MHgxMDNiOGM0NDhlMmY5N2MzOjB4Yzk1ZjI0YzAwOTU1YWVjYywxYH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnBuZ1wiIGFsdD1cImdvb2dsZSBsb2dvXCIgc3R5bGU9e3t3aWR0aDpcIjEyMHB4XCJ9fS8+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6XCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zdGFyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6XCIyMHB4XCJ9fSBhbHQ9XCJyYXRpbmcgc3RhclwiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCJHcmVlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gIHN0eWxlPXt7Y29sb3I6XCJibGFja1wiLCBmb250U2l6ZTpcIi43cmVtXCJ9fT4gLzU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9ID5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cudHJpcGFkdmlzb3IuaW4vQXR0cmFjdGlvbl9SZXZpZXctZzMwNDAyNi1kMTc1MjcwOTctUmV2aWV3cy1TaHV0dGxlbGFuZS1MYWdvc19MYWdvc19TdGF0ZS5odG1sXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3RyaXBhZHZpc29yLnBuZ1wiIGFsdD1cInRyaXBhZHZpc29yIGxvZ29cIiBzdHlsZT17e3dpZHRoOlwiMTUwcHhcIn19Lz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6XCIycmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmdcIiBzdHlsZT17e3dpZHRoOlwiMjBweFwifX0gYWx0PVwicmF0aW5nIHN0YXJcIi8+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIkdyZWVuXCJ9fT4gXG4gICAgICAgICAgICAgICAgICA0LjlcbiAgICAgICAgICAgICAgICAgIDxzcGFuICBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIiwgZm9udFNpemU6XCIuN3JlbVwifX0+IC81PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICBcbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucGFydG5lcn0+XG4gICAgICAgIDxQYXJ0bmVycyAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcIkNhcmZvcm1fZm9ybV9femtKc21cIixcblx0XCJidG5HcmFkXCI6IFwiQ2FyZm9ybV9idG5HcmFkX18xTWxTQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkZvcm1fZm9ybUNvbnRhaW5lcl9fRlVIX1hcIixcblx0XCJmb3JtXCI6IFwiRm9ybV9mb3JtX18xanBlelwiLFxuXHRcImZvcm1CZ1wiOiBcIkZvcm1fZm9ybUJnX18zQm1ZLVwiLFxuXHRcInJhZGlvc1wiOiBcIkZvcm1fcmFkaW9zX191b3BrY1wiLFxuXHRcIk11aUJveC1yb290LTE3XCI6IFwiRm9ybV9NdWlCb3gtcm9vdC0xN19fMUxib3JcIixcblx0XCJ0YWJzXCI6IFwiRm9ybV90YWJzX18zUDQ4MFwiLFxuXHRcInRvZ2dsZVwiOiBcIkZvcm1fdG9nZ2xlX18zSU5acFwiLFxuXHRcImJ0bkdyYWRcIjogXCJGb3JtX2J0bkdyYWRfX25NMUNiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fM3ZsWldcIixcblx0XCJmbGVldFwiOiBcIkhvbWVfZmxlZXRfXzJfaVFWXCIsXG5cdFwid29ya3NcIjogXCJIb21lX3dvcmtzX18zUVlnX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxGb3JtXCI6IFwiTW9kYWxfbW9kYWxGb3JtX18xV0dBT1wiLFxuXHRcImRpc2FibGVkXCI6IFwiTW9kYWxfZGlzYWJsZWRfXzI1SktPXCIsXG5cdFwiYnRuR3JhZFwiOiBcIk1vZGFsX2J0bkdyYWRfXzNwN0VNXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlZGl0Q2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0UXVvdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsQWlycG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxBdG1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbE91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRpb25TaGFycFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QaG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUXVlcnlCdWlsZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Sb29tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WZXJpZmllZFVzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1doYXRzQXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==