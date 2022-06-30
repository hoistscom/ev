exports.ids = [16];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GalleryWithFilter.vue?vue&type=template&id=0a12fe7b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-masonry-section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"sorting-button\"><button data-filter=\"all\" class=\"port-filter\">All</button> <button data-filter=\".residential\" class=\"port-filter\">Residentials</button> <button data-filter=\".commercial\" class=\"port-filter\">Commercials</button> <button data-filter=\".architecture\" class=\"port-filter\">Architecture</button> <button data-filter=\".interior\" class=\"port-filter\">Interior</button></div></div> "),_vm._ssrNode("<div class=\"row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30\">","</div>",_vm._l((_vm.projects),function(project,index){return _vm._ssrNode("<div"+(_vm._ssrClass("col mix mt-30",project.category))+">","</div>",[_vm._ssrNode("<div class=\"single-project-wrap\">","</div>",[_vm._ssrNode("<div class=\"project-thumb position-relative\">","</div>",[_c('n-link',{staticClass:"image",attrs:{"to":"/project-details"}},[_c('img',{attrs:{"src":project.imgSrc,"alt":project.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"inner-content\">","</div>",[_vm._ssrNode("<div class=\"sub-title\">"+_vm._ssrEscape(_vm._s(project.category))+"</div> "),_vm._ssrNode("<h4 class=\"title\">","</h4>",[_c('n-link',{attrs:{"to":"/project-details"}},[_vm._v(_vm._s(project.title))])],1)],2)],2)])}),0),_vm._ssrNode(" <div class=\"row section-padding-bottom\"><div class=\"col-12\"><div class=\"load-more text-center mt-30\"><a href=\"javascript:void(0)\">...Load more...</a></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GalleryWithFilter.vue?vue&type=template&id=0a12fe7b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GalleryWithFilter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GalleryWithFiltervue_type_script_lang_js_ = ({
  data() {
    return {
      mixer: null,
      projects: [{
        imgSrc: "/images/gallery/2.jpg",
        title: "Dustin Villa, Spain",
        category: "residential"
      }, {
        imgSrc: "/images/gallery/3.jpg",
        title: "ABC Financial Bank",
        category: "commercial"
      }, {
        imgSrc: "/images/gallery/4.jpg",
        title: "Cubic Villa",
        category: "residential"
      }, {
        imgSrc: "/images/gallery/5.jpg",
        title: "Culture House",
        category: "architecture"
      }, {
        imgSrc: "/images/gallery/6.jpg",
        title: "B6-No.5 OLA Tower",
        category: "interior"
      }, {
        imgSrc: "/images/gallery/7.jpg",
        title: "Minimal Interior - A5, Italy",
        category: "interior"
      }]
    };
  },

  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  }

});
// CONCATENATED MODULE: ./components/GalleryWithFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GalleryWithFiltervue_type_script_lang_js_ = (GalleryWithFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/GalleryWithFilter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GalleryWithFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d986ddb8"
  
)

/* harmony default export */ var GalleryWithFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=gallery-with-filter.js.map