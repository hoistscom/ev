exports.ids = [6,5];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=template&id=564eca1e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news-block"},[_vm._ssrNode("<div class=\"image\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_c('img',{staticClass:"fit-image",attrs:{"src":_vm.blog.imgSrc,"alt":_vm.blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"lower-content\">","</div>",[_vm._ssrNode("<ul class=\"info-list\"><li>"+_vm._ssrEscape(_vm._s(_vm.blog.date))+"</li> <li>"+_vm._ssrEscape(_vm._s(_vm.blog.category))+"</li></ul> "),_vm._ssrNode("<h4 class=\"title\">","</h4>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(_vm.blog.title))])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=template&id=564eca1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BlogPostvue_type_script_lang_js_ = ({
  props: ['blog']
});
// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogPostvue_type_script_lang_js_ = (BlogPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "416b1884"
  
)

/* harmony default export */ var BlogPost = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogStyleOne.vue?vue&type=template&id=32702052&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news-section"},[_vm._ssrNode("<div class=\"container-fluid p-0\">","</div>",[_vm._ssrNode("<div class=\"row no-gutters\">","</div>",_vm._l((_vm.blogs),function(blog,index){return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-xl-3 col-md-6\">","</div>",[_c('BlogPost',{attrs:{"blog":blog}})],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogStyleOne.vue?vue&type=template&id=32702052&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogStyleOne.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BlogStyleOnevue_type_script_lang_js_ = ({
  components: {
    BlogPost: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32))
  },

  data() {
    return {
      blogs: [{
        imgSrc: "/images/news/1.jpg",
        title: "The Way Of Building",
        date: "Jan 28, 2021",
        category: "news"
      }, {
        imgSrc: "/images/news/2.jpg",
        title: "The Arch In Modern Architecture & Art",
        date: "Mar 21, 2021",
        category: "inspiration"
      }, {
        imgSrc: "/images/news/3.jpg",
        title: "Spiral Stair, New Interior Design Trends 2020",
        date: "Apr 26, 2021",
        category: "lifestyle"
      }, {
        imgSrc: "/images/news/4.jpg",
        title: "Nordic Interior Style",
        date: "Nov 28, 2021",
        category: "others"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BlogStyleOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogStyleOnevue_type_script_lang_js_ = (BlogStyleOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogStyleOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogStyleOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "523b36da"
  
)

/* harmony default export */ var BlogStyleOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogPost: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=blog-style-one.js.map