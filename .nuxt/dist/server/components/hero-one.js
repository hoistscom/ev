exports.ids = [19];
exports.modules = {

/***/ 55:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroOne_vue_vue_type_style_index_0_id_0df096ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroOne_vue_vue_type_style_index_0_id_0df096ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroOne_vue_vue_type_style_index_0_id_0df096ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroOne_vue_vue_type_style_index_0_id_0df096ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroOne_vue_vue_type_style_index_0_id_0df096ee_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroOne.vue?vue&type=template&id=0df096ee&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "hero-slider",
    attrs: {
      "id": "hero"
    }
  }, [_c('swiper', {
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.heros, function (hero, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "hero-slide-item bg-cover",
      style: {
        backgroundImage: `url('${hero.imgSrc}')`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "hero-slide-content"
    }, [_c('h4', {
      staticClass: "subtitle"
    }, [_vm._v(_vm._s(hero.subTitle))]), _vm._v(" "), _c('h2', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(hero.title)
      }
    }, [_vm._v(_vm._s(hero.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(hero.desc))]), _vm._v(" "), _c('n-link', {
      staticClass: "btn-link",
      attrs: {
        "to": hero.btnUrl
      }
    }, [_vm._v("EV Charger Program")]), _vm._v(" "), _c('n-link', {
      staticClass: "btn-link cta-space",
      attrs: {
        "to": hero.btnUrl
      }
    }, [_vm._v("Our Services")])], 1)])])])])]);
  }), 0)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroOne.vue?vue&type=template&id=0df096ee&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroOne.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroOnevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        loop: true,
        speed: 1150,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
          nextEl: '.hero-slider .home-slider-next',
          prevEl: '.hero-slider .home-slider-prev'
        },
        pagination: {
          el: '.hero-slider .swiper-pagination',
          type: 'bullets',
          clickable: 'true'
        }
      },
      heros: [{
        id: 1,
        subTitle: "Illinois Residents",
        title: "80% Rebate For EV Chargers",
        desc: "Starting July 1st, 2022, Illinois businesses and residents may receive up to 80% rebate when installing new electric vehicle chargers.",
        btnUrl: "/project",
        imgSrc: "/images/slider/EV-Charger-Hero.jpg"
      }, {
        id: 2,
        subTitle: "Illinois Residents",
        title: "80% Rebate For EV Chargers",
        desc: "Starting July 1st, 2022, Illinois businesses and residents may receive up to 80% rebate when installing new electric vehicle chargers.",
        btnUrl: "/project",
        imgSrc: "/images/slider/EV-Hero2.jpg"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/HeroOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroOnevue_type_script_lang_js_ = (HeroOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroOne.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0df096ee",
  "400ee960"
  
)

/* harmony default export */ var HeroOne = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-one.js.map