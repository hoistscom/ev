exports.ids = [0];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=template&id=04f39e2b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-padding-top"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12 position-relative\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"section-title client-title\"><h2 class=\"title\">100+ Clients Love Us</h2></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"client-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.clients),function(client,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('div',{staticClass:"single-client-wrapper"},[_c('div',{staticClass:"client-thumb-icon"},[_c('div',{staticClass:"thumb"},[_c('img',{attrs:{"src":client.imgSrc,"alt":client.name}})]),_vm._v(" "),_c('div',{staticClass:"icon"},[_c('i',{staticClass:"icofont-quote-right"})])]),_vm._v(" "),_c('div',{staticClass:"client-content"},[_c('h6',{staticClass:"name"},[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(client.name))]),_vm._v(" / "),_c('span',[_vm._v(" "+_vm._s(client.position))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(client.desc))])])])])}),0),_vm._ssrNode(" <div class=\"swiper-pagination d-none\"></div> <div class=\"client-carousel-prev swiper-button-prev\"><i class=\"icofont-thin-left\"></i></div> <div class=\"client-carousel-next swiper-button-next\"><i class=\"icofont-thin-right\"></i></div>")],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=template&id=04f39e2b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var Testimonialvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        speed: 1000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.client-carousel .swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.client-carousel .client-carousel-next',
          prevEl: '.client-carousel .client-carousel-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          }
        }
      },
      clients: [{
        id: 1,
        imgSrc: "/images/client/1.png",
        name: "Ryan Betthalyn",
        position: "Director at Chobham Manor",
        desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
      }, {
        id: 2,
        imgSrc: "/images/client/2.png",
        name: "Bobs Hanely",
        position: "Director at Spotify",
        desc: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testimonialvue_type_script_lang_js_ = (Testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6ce1bb1a"
  
)

/* harmony default export */ var Testimonial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial.js.map