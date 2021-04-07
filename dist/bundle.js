/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calc() {\r\n  //Calc\r\n\r\n  const result = document.querySelector(\".calculating__result>span\");\r\n  let sex = \"famale\",\r\n    height,\r\n    weight,\r\n    age,\r\n    ratio = 1.375;\r\n\r\n  function calcTotal() {\r\n    if (!sex || !height || !weight || !age || !ratio) {\r\n      result.textContent = \"____\";\r\n      return;\r\n    } else if (sex === \"female\") {\r\n      result.textContent = Math.round(\r\n        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio\r\n      );\r\n    } else {\r\n      result.textContent = Math.round(\r\n        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio\r\n      );\r\n    }\r\n  }\r\n  calcTotal();\r\n\r\n  function getStaticInformation(parentSelector, activeClass) {\r\n    const elements = document.querySelectorAll(`${parentSelector} div`);\r\n    elements.forEach((elem) => {\r\n      elem.addEventListener(\"click\", (e) => {\r\n        if (e.target.getAttribute(\"data-ratio\")) {\r\n          ratio = +e.target.getAttribute(\"data-ratio\");\r\n        } else {\r\n          sex = e.target.getAttribute(\"id\");\r\n        }\r\n        elements.forEach((el) => {\r\n          el.classList.remove(activeClass);\r\n          e.target.classList.add(activeClass);\r\n        });\r\n        console.log(ratio, sex);\r\n        calcTotal();\r\n      });\r\n    });\r\n  }\r\n\r\n  getStaticInformation(\"#gender\", \"calculating__choose-item_active\");\r\n  getStaticInformation(\r\n    \".calculating__choose_big\",\r\n    \"calculating__choose-item_active\"\r\n  );\r\n\r\n  function getDynamicInformation(selector) {\r\n    const input = document.querySelector(selector);\r\n    input.addEventListener(\"input\", () => {\r\n      if (input.value.match(/\\D/g)) {\r\n        input.style.border = \"1px solid red\";\r\n      } else {\r\n        input.style.border = \"none\";\r\n      }\r\n\r\n      switch (input.getAttribute(\"id\")) {\r\n        case \"height\":\r\n          height = +input.value;\r\n          break;\r\n        case \"weight\":\r\n          weight = +input.value;\r\n          break;\r\n        case \"age\":\r\n          age = +input.value;\r\n          break;\r\n      }\r\n      calcTotal();\r\n    });\r\n  }\r\n\r\n  getDynamicInformation(\"#height\");\r\n  getDynamicInformation(\"#weight\");\r\n  getDynamicInformation(\"#age\");\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/calc.js?");

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\r\n\r\nfunction forms() {\r\n  //Forms\r\n\r\n  const forms = document.querySelectorAll(\"form\");\r\n\r\n  const message = {\r\n    loading: \"img/form/spinner.svg\",\r\n    success: \"Скоро мы с вами свяжемся\",\r\n    failure: \"что-то пошло не так...\",\r\n  };\r\n\r\n  forms.forEach((i) => postData(i));\r\n\r\n  function postData(form) {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault(); //отмена перезагрузки при отправке\r\n      const statusMessage = document.createElement(\"img\");\r\n      statusMessage.src = message.loading;\r\n      statusMessage.style.cssText = `display: block; margin : 0 auto;`;\r\n      form.insertAdjacentElement(\"afterend\", statusMessage); //вставляет снизу модального окна\r\n\r\n      // const request = new XMLHttpRequest();\r\n      // request.open(\"POST\", \"server.php\");\r\n      // request.setRequestHeader(\"Content-type\", \"multipart/form-data\");//если form-data\r\n      const formData = new FormData(form);\r\n      const object = {};\r\n      formData.forEach((value, key) => {\r\n        object[key] = value;\r\n      });\r\n\r\n      fetch(\"server.php\", {\r\n        method: \"POST\",\r\n        headers: { \"Content-Type\": \"application/json\" },\r\n        body: JSON.stringify(object),\r\n      })\r\n        .then((data) => data.text())\r\n        .then((data) => {\r\n          console.log(data);\r\n          showModalThanks(message.success);\r\n          setTimeout(() => statusMessage.remove(), 2000);\r\n        })\r\n        .catch(() => {\r\n          showModalThanks(message.failure);\r\n        })\r\n        .finally(() => {\r\n          form.reset();\r\n          console.log(\"Fine!\");\r\n        });\r\n\r\n      // request.setRequestHeader(\"Content-type\", \"application/json\"); //если json\r\n\r\n      // const json = JSON.stringify(object);\r\n      // request.send(json);\r\n    });\r\n  }\r\n\r\n  function showModalThanks(message) {\r\n    const prevModalDialog = document.querySelector(\".modal__dialog\");\r\n    prevModalDialog.classList.add(\"hide\");\r\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();\r\n\r\n    const thanksModal = document.createElement(\"div\");\r\n    thanksModal.classList.add(\"modal__dialog\");\r\n    thanksModal.innerHTML = `\r\n      <div class=\"modal__content\">    \r\n      <div data-close class=\"modal__close\">&times;</div>\r\n      <div class=\"modal__title\">\r\n           ${message}\r\n          </div>\r\n  `;\r\n    document.querySelector(\".modal\").append(thanksModal);\r\n    setTimeout(() => {\r\n      thanksModal.remove();\r\n      prevModalDialog.classList.add(\"show\");\r\n      prevModalDialog.classList.remove(\"hide\");\r\n      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\r\n    }, 3000);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/forms.js?");

/***/ }),

/***/ "./js/modules/menuCards.js":
/*!*********************************!*\
  !*** ./js/modules/menuCards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuCards() {\r\n  //Menu cards\r\n\r\n  class MenuCard {\r\n    constructor(img, altimg, title, descr, price, parentSelector, ...classes) {\r\n      this.img = img;\r\n      this.altimg = altimg;\r\n      this.title = title;\r\n      this.descr = descr;\r\n      this.price = price;\r\n      this.classes = classes;\r\n      this.parent = document.querySelector(parentSelector);\r\n      this.kurs = 2.65;\r\n      this.sumeInBLR();\r\n    }\r\n\r\n    sumeInBLR() {\r\n      this.price = Math.floor(this.price * this.kurs);\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement(\"div\");\r\n      if (this.classes.length === 0) {\r\n        this.element = \"menu__item\";\r\n        element.classList.add(this.element);\r\n      } else {\r\n        this.classes.forEach((className) => element.classList.add(className));\r\n      }\r\n      element.innerHTML = `\r\n      <img src=${this.img} alt=${this.altimg} />\r\n      <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n      <div class=\"menu__item-descr\">\r\n       ${this.descr}\r\n      </div>\r\n      <div class=\"menu__item-divider\"></div>\r\n      <div class=\"menu__item-price\">\r\n        <div class=\"menu__item-cost\">Цена:</div>\r\n        <div class=\"menu__item-total\"><span>${this.price}</span> р\r\n        /день</div>\r\n      </div>\r\n    </div>`;\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  axios.get(\"http://localhost:3000/menu\").then((data) => {\r\n    data.data.forEach(({ img, alt, title, descr, price }) => {\r\n      new MenuCard(img, alt, title, descr, price, `.menu .container`).render();\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCards);\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/menuCards.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nfunction closeModal() {\r\n  modalWindow.style.display = \"none\";\r\n  document.body.style.overflow = \"\";\r\n}\r\nfunction openModal() {\r\n  modalWindow.style.display = \"block\";\r\n  document.body.style.overflow = \"hidden\"; //убираем прокрутку окна\r\n  /* clearTimeout(modalTimer); */ //выключаем таймер\r\n}\r\n\r\nconst modalWindow = document.querySelector(\".modal\"),\r\n  modalBtns = document.querySelectorAll(\"[data-modal]\");\r\nfunction modal() {\r\n  // Modal\r\n\r\n  modalBtns.forEach((i) => {\r\n    i.addEventListener(\"click\", openModal);\r\n  });\r\n\r\n  //close with onclick button\r\n  //close with onclick modalWindow area\r\n  modalWindow.addEventListener(\"click\", (e) => {\r\n    if (e.target === modalWindow || e.target.getAttribute(\"data-close\") == \"\") {\r\n      closeModal();\r\n    }\r\n  });\r\n  //close with keydown \"esc\"\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.code === \"Escape\" && modalWindow.style.display === \"block\")\r\n      closeModal();\r\n  });\r\n\r\n  // const modalTimer  = setTimeout(openModal, 10000) ; //таймер всплытия\r\n\r\n  function showModalByScroll() {\r\n    if (\r\n      Math.floor(window.pageYOffset) +\r\n        document.documentElement.clientHeight +\r\n        10 >= //не хватает длины\r\n      document.documentElement.scrollHeight\r\n    ) {\r\n      openModal();\r\n      window.removeEventListener(\"scroll\", showModalByScroll); //удаляем после открытия\r\n    }\r\n  }\r\n  window.addEventListener(\"scroll\", showModalByScroll);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./js/modules/timer.js\");\n\r\nfunction slider() {\r\n  //Slider\r\n  const slides = document.querySelectorAll(\".offer__slide\");\r\n  const curr = document.querySelector(\"#current\");\r\n  const total = document.querySelector(\"#total\");\r\n  const slider = document.querySelector(\".offer__slider\");\r\n  let slidesIndex = 0;\r\n  total.textContent = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.getZero)(slides.length);\r\n\r\n  slider.addEventListener(\"click\", (event) => {\r\n    const target = event.target;\r\n    if (target.className === \"offer__slider-prev\") {\r\n      slidesIndex--;\r\n      if (slidesIndex < 0) {\r\n        slidesIndex = slides.length - 1;\r\n      }\r\n    }\r\n    if (target.className === \"offer__slider-next\") {\r\n      slidesIndex++;\r\n      if (slidesIndex > slides.length - 1) {\r\n        slidesIndex = 0;\r\n      }\r\n    }\r\n    hideSlide();\r\n    showSlide(slidesIndex);\r\n  });\r\n\r\n  function showSlide(i = 0) {\r\n    slides[i].style.display = \"block\";\r\n    curr.textContent = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.getZero)(i + 1);\r\n  }\r\n  function hideSlide() {\r\n    slides.forEach((slide) => {\r\n      slide.style.display = \"none\";\r\n    });\r\n  }\r\n  hideSlide();\r\n  showSlide();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n  // Tabs\r\n  const tabs = document.querySelectorAll(\".tabheader__item\"),\r\n    tabsContent = document.querySelectorAll(\".tabcontent\"),\r\n    tabParent = document.querySelector(\".tabheader__items\");\r\n\r\n  function hideTabContent() {\r\n    tabsContent.forEach((i) => {\r\n      i.style.display = \"none\";\r\n    });\r\n    tabs.forEach((i) => {\r\n      i.classList.remove(\"tabheader__item_active\");\r\n    });\r\n  }\r\n  function showTabContent(i = 0) {\r\n    tabsContent[i].style.display = \"block\";\r\n    tabs[i].classList.add(\"tabheader__item_active\");\r\n  }\r\n  hideTabContent();\r\n  showTabContent();\r\n\r\n  tabParent.addEventListener(\"click\", (event) => {\r\n    const target = event.target;\r\n\r\n    if (target && target.classList.contains(\"tabheader__item\")) {\r\n      tabs.forEach((f, i) => {\r\n        if (target == f) {\r\n          hideTabContent();\r\n          showTabContent(i);\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/tabs.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getZero\": () => (/* binding */ getZero)\n/* harmony export */ });\nfunction getZero(nums) {\r\n  return nums >= 0 && nums <= 9 ? `0${nums}` : nums; //добавляем \"0\" перед цифрой\r\n}\r\n\r\nfunction timer() {\r\n  //   Timer\r\n\r\n  const deadline = \"2021-09-21\";\r\n\r\n  function getTimeRemaining(endtime) {\r\n    const t = Date.parse(endtime) - Date.parse(new Date()),\r\n      days = Math.floor(t / (1000 * 60 * 60 * 24)),\r\n      hours = Math.floor((t / (1000 * 60 * 60)) % 24),\r\n      minutes = Math.floor((t / 1000 / 60) % 60),\r\n      seconds = Math.floor((t / 1000) % 60);\r\n    return {\r\n      total: t,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  }\r\n\r\n  function setClock(selector, endtime) {\r\n    const timer = document.querySelector(selector),\r\n      days = timer.querySelector(\"#days\"),\r\n      hours = timer.querySelector(\"#hours\"),\r\n      minutes = timer.querySelector(\"#minutes\"),\r\n      seconds = timer.querySelector(\"#seconds\"),\r\n      timeInterval = setInterval(updateClock, 1000);\r\n\r\n    updateClock(); //сразу запускаем - не будет моргать после запуска\r\n\r\n    function updateClock() {\r\n      const t = getTimeRemaining(endtime);\r\n      days.innerHTML = getZero(t.days);\r\n      hours.innerHTML = getZero(t.hours);\r\n      minutes.innerHTML = getZero(t.minutes);\r\n      seconds.innerHTML = getZero(t.seconds);\r\n\r\n      if (t.total <= 0) {\r\n        clearInterval(timeInterval);\r\n      }\r\n    }\r\n  }\r\n  setClock(\".timer\", deadline);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack://food-dist/./js/modules/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ \"./js/modules/calc.js\");\n/* harmony import */ var _modules_menuCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuCards */ \"./js/modules/menuCards.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./js/modules/forms.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ \"./js/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  (0,_modules_menuCards__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n});\r\n\n\n//# sourceURL=webpack://food-dist/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;