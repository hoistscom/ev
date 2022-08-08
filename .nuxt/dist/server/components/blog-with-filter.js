exports.ids = [8];
exports.modules = {

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWithFilter.vue?vue&type=template&id=5ed9f427&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "blog-tab-section"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"sorting-button\"><button data-filter=\"all\" class=\"port-filter\">All</button> <button data-filter=\".residential\" class=\"port-filter\">Residentials</button> <button data-filter=\".commercial\" class=\"port-filter\">Commercials</button> <button data-filter=\".architecture\" class=\"port-filter\">Architecture</button> <button data-filter=\".interior\" class=\"port-filter\">Interior</button></div></div> "), _vm._ssrNode("<div class=\"row row-cols-1 box mtn-50\">", "</div>", _vm._l(_vm.blogs, function (blog, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass("col mix mt-50", blog.category) + ">", "</div>", [_vm._ssrNode("<div class=\"single-blog-wrap\">", "</div>", [_vm._ssrNode("<div class=\"blog-thumb\">", "</div>", [_c('n-link', {
      staticClass: "image",
      attrs: {
        "to": "/blog-details"
      }
    }, [_c('img', {
      staticClass: "fit-image",
      attrs: {
        "src": blog.imgSrc,
        "alt": blog.title
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"inner-content\">", "</div>", [_vm._ssrNode("<ul class=\"info-list\"><li>" + _vm._ssrEscape(_vm._s(blog.date)) + "</li> <li>" + _vm._ssrEscape(_vm._s(blog.category)) + "</li></ul> "), _vm._ssrNode("<h4 class=\"title\">", "</h4>", [_c('n-link', {
      attrs: {
        "to": "/blog-details"
      }
    }, [_vm._v(_vm._s(blog.title))])], 1), _vm._ssrNode(" <p>" + _vm._ssrEscape(_vm._s(blog.desc)) + "</p> "), _c('n-link', {
      staticClass: "article",
      attrs: {
        "to": "/blog-details"
      }
    }, [_vm._v("\n                            full article "), _c('span', {
      staticClass: "arrow icofont-rounded-right"
    })])], 2)], 2)]);
  }), 0), _vm._ssrNode(" <div class=\"row section-padding-bottom\"><div class=\"col-12\"><div class=\"load-more text-center mt-50\"><a href=\"javascript:void(0)\">...Load more...</a></div></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogWithFilter.vue?vue&type=template&id=5ed9f427&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWithFilter.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogWithFiltervue_type_script_lang_js_ = ({
  mounted() {
    this.$nextTick(() => {
      const containerEl = document.querySelector('.box');
      this.mixer = new this.mixitup(containerEl);
    });
  },

  data() {
    return {
      mixer: null,
      blogs: [{
        date: "Jan 28, 2021",
        imgSrc: "/images/news/blog/1.jpg",
        title: "The Way Of Building",
        category: "interior",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
      }, {
        date: "Jun 08, 2021",
        imgSrc: "/images/news/blog/2.jpg",
        title: "The Arch In Modern Architecture, Art and Aesthetic More",
        category: "commercial",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
      }, {
        date: "Mar 15, 2021",
        imgSrc: "/images/news/blog/3.jpg",
        title: "Spiral Stair, New Interior Design Trends 2021",
        category: "architecture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
      }, {
        date: "Nov 25, 2020",
        imgSrc: "/images/news/blog/4.jpg",
        title: "Nordic Interior Style",
        category: "residential",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav da metus. Curabitur quis sagittis nisl. In lectus ligula, varius quis..."
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BlogWithFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogWithFiltervue_type_script_lang_js_ = (BlogWithFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogWithFilter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogWithFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d21b6908"
  
)

/* harmony default export */ var BlogWithFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-with-filter.js.map