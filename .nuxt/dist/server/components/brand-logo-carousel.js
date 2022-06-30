exports.ids = [8];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=template&id=8d3c4132&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-logo-wrapper"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"brand-logo-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.brandLogos),function(brand,index){return _c('div',{key:index,staticClass:"swiper-slide single-brand-logo"},[_c('n-link',{attrs:{"to":""}},[_c('img',{attrs:{"src":brand.imgSrc,"alt":brand.alt}})])],1)}),0)],1)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=template&id=8d3c4132&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BrandLogoCarouselvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        slidesPerView: 5,
        autoplay: true,
        // Responsive breakpoints
        breakpoints: {
          320: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 5
          }
        }
      },
      brandLogos: [{
        imgSrc: "/images/brand-logo/1.png",
        alt: "brand logo"
      }, {
        imgSrc: "/images/brand-logo/2.png",
        alt: "brand logo"
      }, {
        imgSrc: "/images/brand-logo/3.png",
        alt: "brand logo"
      }, {
        imgSrc: "/images/brand-logo/4.png",
        alt: "brand logo"
      }, {
        imgSrc: "/images/brand-logo/5.png",
        alt: "brand logo"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselvue_type_script_lang_js_ = (BrandLogoCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b84aca6"
  
)

/* harmony default export */ var BrandLogoCarousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=brand-logo-carousel.js.map