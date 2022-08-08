exports.ids = [25,6];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=template&id=564eca1e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "news-block"
  }, [_vm._ssrNode("<div class=\"image\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/blog-details"
    }
  }, [_c('img', {
    staticClass: "fit-image",
    attrs: {
      "src": _vm.blog.imgSrc,
      "alt": _vm.blog.title
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"lower-content\">", "</div>", [_vm._ssrNode("<ul class=\"info-list\"><li>" + _vm._ssrEscape(_vm._s(_vm.blog.date)) + "</li> <li>" + _vm._ssrEscape(_vm._s(_vm.blog.category)) + "</li></ul> "), _vm._ssrNode("<h4 class=\"title\">", "</h4>", [_c('n-link', {
    attrs: {
      "to": "/blog-details"
    }
  }, [_vm._v(_vm._s(_vm.blog.title))])], 1)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=template&id=564eca1e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=script&lang=js&
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedBlogPost.vue?vue&type=template&id=13aaaa72&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-padding-bottom"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"blog-related-news\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1\"><div class=\"section-title\"><h4 class=\"title text-capitalize\">Related Posts</h4></div></div></div> "), _vm._ssrNode("<div class=\"row mtn-30\">", "</div>", _vm._l(_vm.blogs.slice(0, 3), function (blog, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-lg-4 col-md-6 mt-30\">", "</div>", [_c('BlogPost', {
      attrs: {
        "blog": blog
      }
    })], 1);
  }), 0)], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/RelatedBlogPost.vue?vue&type=template&id=13aaaa72&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RelatedBlogPost.vue?vue&type=script&lang=js&
/* harmony default export */ var RelatedBlogPostvue_type_script_lang_js_ = ({
  components: {
    BlogPost: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 41))
  },

  data() {
    return {
      blogs: [{
        imgSrc: "/images/news/1.jpg",
        title: "The Way Of Building Nordic Interior",
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
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/RelatedBlogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RelatedBlogPostvue_type_script_lang_js_ = (RelatedBlogPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RelatedBlogPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RelatedBlogPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ecf86cfe"
  
)

/* harmony default export */ var RelatedBlogPost = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogPost: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=related-blog-post.js.map