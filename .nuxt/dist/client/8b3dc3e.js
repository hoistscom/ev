(window.webpackJsonp=window.webpackJsonp||[]).push([[33,6,7,12,17,21,22,23,25,29],{295:function(t,e,l){"use strict";l.r(e);var n=l(52),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"section-padding-top bg-image1 overflow-hidden"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 text-center"},[l("div",{staticClass:"footer-logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/images/logo/Chicago-EV-Logo-Grey.jpg",alt:"Logo Black"}})])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"contact-info"},[l("p",[t._v("1230 S. Hannah Ave. Forest Park, IL 60130")]),t._v(" "),l("p",[l("a",{attrs:{href:"tel:7087714549"}},[t._v("(708)771-4549")])]),t._v(" "),l("p",[l("a",{attrs:{href:"mailto:mike.clutter@sievertelectric.com"}},[t._v("mike.clutter@sievertelectric.com")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"footer-social-icons social-media-link justify-content-center"},[l("li",[l("a",{staticClass:"icofont-facebook",attrs:{href:"#"}})]),t._v(" "),l("li",[l("a",{staticClass:"icofont-twitter",attrs:{href:"#"}})]),t._v(" "),l("li",[l("a",{staticClass:"icofont-instagram",attrs:{href:"#"}})]),t._v(" "),l("li",[l("a",{staticClass:"icofont-linkedin",attrs:{href:"#"}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"copyright"},[t._v("© 2022 "),l("span",[t._v("Chicago EV")]),t._v(" "),l("p",[t._v("All rights reserved")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(295).default})},296:function(t,e,l){},297:function(t,e,l){"use strict";l.r(e);var n={props:["addClassNeme"]},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"main-menu",class:t.addClassNeme},[l("ul",[l("li",[l("n-link",{attrs:{to:"#about"}},[t._v("About Us")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"#services"}},[t._v("Services")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"#products"}},[t._v("Products")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"#ev-program"}},[t._v("EV Program")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"#contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,l){"use strict";l(296)},299:function(t,e,l){"use strict";l.r(e);var n={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),o=n.length,r=0;r<o;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=(l(298),l(52)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mobile-navigation"},[l("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[l("ul",[l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),l("li",{staticClass:"menu-item-has-children"},[l("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"sub-menu"},[l("li",[l("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,l){"use strict";l.r(e);l(1),l(46),l(53);var n={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,299))}},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[l("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),l("div",{staticClass:"inner custom-scrollbar"},[l("div",{staticClass:"mobile-header"},[l("div",{staticClass:"logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{attrs:{src:"/images/logo/logo-white.png",alt:"site logo"}})])],1),t._v(" "),l("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),l("div",{staticClass:"menu-content"},[l("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(299).default})},301:function(t,e,l){"use strict";l.r(e);l(1),l(46),l(53);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,297))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header section-fluid border-bottom header-black",class:{"is-sticky":t.isSticky}},[l("div",{staticClass:"header-wrapper"},[l("div",{staticClass:"header-sticky"},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-lg-2 col-md-3 col-6"},[l("div",{staticClass:"header-logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-black.png",alt:"Header Logo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[l("div",{staticClass:"main-menu-language-wrapper"},[l("Navigation"),t._v(" "),t._m(0)],1)]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-2 col-6"},[l("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[l("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"language d-md-none d-lg-flex"},[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),l("a",{attrs:{href:"javascript:void(0)"}},[l("span",[t._v("Fra")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("button",{staticClass:"toggle"},[l("i",{staticClass:"icon-top"}),t._v(" "),l("i",{staticClass:"icon-middle"}),t._v(" "),l("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(297).default})},303:function(t,e,l){"use strict";l.r(e);var n={props:["blog"]},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"news-block"},[l("div",{staticClass:"image"},[l("n-link",{attrs:{to:"/blog-details"}},[l("img",{staticClass:"fit-image",attrs:{src:t.blog.imgSrc,alt:t.blog.title}})])],1),t._v(" "),l("div",{staticClass:"lower-content"},[l("ul",{staticClass:"info-list"},[l("li",[t._v(t._s(t.blog.date))]),t._v(" "),l("li",[t._v(t._s(t.blog.category))])]),t._v(" "),l("h4",{staticClass:"title"},[l("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(t.blog.title))])],1)])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,l){"use strict";l.r(e);var n={},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-details-wrapper"},[t._m(0),t._v(" "),l("div",{staticClass:"section-padding-top"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1"},[l("div",{staticClass:"blog-details-content",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[l("div",{staticClass:"inner-container"},[l("ul",{staticClass:"page-breadcrumb"},[l("li",[l("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),l("li",[t._v("Nordic Interior STyle")])]),t._v(" "),l("h1",{staticClass:"title"},[t._v("Nordic Interior Style")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),l("h3",{staticClass:"sub-title"},[t._v("Defaulting to Mindfulness")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),l("p",[t._v("Both of these assumptions, of course, could be entirely false. Self-censoring is firmly rooted in our experiences with mistakes in the past and not the present. The brain messages arising from those experiences can be deceptive. ")]),t._v(" "),t._m(7)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-detils-image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/news/blog/large-blog.jpg",alt:"Project"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"info-list"},[l("li",[t._v("Dec 23, 2021")]),t._v(" "),l("li",[t._v("news")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"big-text"},[t._v("To mark the first UK show of artist "),l("br"),t._v(" Henri Barande, graphic designer Alex Maxell and German studio Schultzschultz have created "),l("br"),t._v(" The Lodge Wooden")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",[t._v("This response is important for our ability to learn from mistakes, but it also "),l("br"),t._v(" gives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact "),l("br"),t._v(" it can trigger self-censoring.")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"list-style-one"},[l("li",[t._v("Welsh novelist Sarah Waters sums it up eloquently")]),t._v(" "),l("li",[t._v("In their classic book, Creativity in Business, based on a popular course they co-taught")]),t._v(" "),l("li",[t._v("Novelist and screenwriter Steven Pressfield")]),t._v(" "),l("li",[t._v("A possible off-the-wall idea or solution appears like a blip and disappears without us")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",[t._v("Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. "),l("br"),t._v("I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("blockquote",{staticClass:"blockquote"},[l("p",[t._v("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.")]),t._v(" "),l("footer",{staticClass:"blockquote-footer"},[l("h2",{staticClass:"title-name"},[t._v("John Doe")]),t._v(" "),l("h4",{staticClass:"title-desig"},[t._v("Project Director")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"post-share-options"},[l("div",{staticClass:"post-share-inner"},[l("div",{staticClass:"post-title"},[t._v("Tags:")]),t._v(" "),l("ul",{staticClass:"tags"},[l("li",[l("a",{attrs:{href:"#"}},[t._v("Construction,")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Building,")])]),t._v(" "),l("li",[l("a",{attrs:{href:"#"}},[t._v("Structure,")])])]),l("br"),t._v(" "),l("ul",{staticClass:"social-box"},[l("li",{staticClass:"facebook"},[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"icofont-facebook"})])]),t._v(" "),l("li",{staticClass:"twitter"},[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"icofont-twitter"})])]),t._v(" "),l("li",{staticClass:"linkedin"},[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"icofont-linkedin"})])]),t._v(" "),l("li",{staticClass:"rss"},[l("a",{attrs:{href:"#"}},[l("i",{staticClass:"icofont-rss"})])])])])])}],!1,null,"b3458f48",null);e.default=component.exports;installComponents(component,{Footer:l(295).default})},322:function(t,e,l){"use strict";l.r(e);l(1),l(46),l(53);var n={components:{BlogPost:function(){return Promise.resolve().then(l.bind(null,303))}},data:function(){return{blogs:[{imgSrc:"/images/news/1.jpg",title:"The Way Of Building Nordic Interior",date:"Jan 28, 2021",category:"news"},{imgSrc:"/images/news/2.jpg",title:"The Arch In Modern Architecture & Art",date:"Mar 21, 2021",category:"inspiration"},{imgSrc:"/images/news/3.jpg",title:"Spiral Stair, New Interior Design Trends 2020",date:"Apr 26, 2021",category:"lifestyle"}]}}},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"section-padding-bottom"},[l("div",{staticClass:"container"},[l("div",{staticClass:"blog-related-news"},[t._m(0),t._v(" "),l("div",{staticClass:"row mtn-30"},t._l(t.blogs.slice(0,3),(function(t,e){return l("div",{key:e,staticClass:"col-lg-4 col-md-6 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[l("BlogPost",{attrs:{blog:t}})],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[l("div",{staticClass:"section-title"},[l("h4",{staticClass:"title text-capitalize"},[t._v("Related Posts")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogPost:l(303).default})},329:function(t,e,l){"use strict";l.r(e);var n=l(52),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-comment-section"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row inner-container"},[l("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 comment-form"},[l("div",{staticClass:"group-title"},[l("h4",{staticClass:"title"},[t._v("Leave A Comment")])]),t._v(" "),l("form",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6 form-group",attrs:{"data-aos":"fade-right","data-aos-delay":"300"}},[l("input",{attrs:{type:"text",name:"username",placeholder:"Name *",required:""}})]),t._v(" "),l("div",{staticClass:"col-md-6 form-group",attrs:{"data-aos":"fade-left","data-aos-delay":"300"}},[l("input",{attrs:{type:"email",name:"email",placeholder:"Email *",required:""}})]),t._v(" "),l("div",{staticClass:"col-12 form-group",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[l("input",{attrs:{type:"text",name:"subject",placeholder:"Subject (Optional)",required:""}})]),t._v(" "),l("div",{staticClass:"col-12 form-group",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[l("textarea",{staticClass:"darma",attrs:{name:"message",placeholder:"Message"}})]),t._v(" "),l("div",{staticClass:"col-12 form-group"},[l("button",{staticClass:"btn btn-primary btn-hover-dark",attrs:{type:"submit",name:"submit-form"}},[l("span",{staticClass:"txt"},[t._v("Post Comments")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,l){"use strict";l.r(e);l(1),l(46),l(53);var n={components:{TheHeaderTwo:function(){return Promise.resolve().then(l.bind(null,301))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,300))},BlogDetailsPost:function(){return Promise.resolve().then(l.bind(null,321))},RelatedBlogPost:function(){return Promise.resolve().then(l.bind(null,322))},CommentForm:function(){return Promise.resolve().then(l.bind(null,329))},Footer:function(){return Promise.resolve().then(l.bind(null,295))}},head:function(){return{title:"Blog Details"}}},o=l(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main-container"},[l("TheHeaderTwo"),t._v(" "),l("OffCanvasMobileMenu"),t._v(" "),l("BlogDetailsPost"),t._v(" "),l("RelatedBlogPost"),t._v(" "),l("div",{staticClass:"old-new-post-section overflow-hidden"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"old-new-post-content mtn-30"},[l("n-link",{staticClass:"old-post mt-30",attrs:{to:"/blog-details","data-aos":"fade-right","data-aos-delay":"300"}},[t._v("Older"),l("span",[t._v("The Way Of Building")])]),t._v(" "),l("n-link",{staticClass:"new-post mt-30",attrs:{to:"/blog-details","data-aos":"fade-left","data-aos-delay":"300"}},[t._v("Newer"),l("span",[t._v("New Interior Design Trends")])])],1)])])])]),t._v(" "),l("CommentForm"),t._v(" "),l("Footer"),t._v(" "),l("client-only",[l("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[l("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),l("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeaderTwo:l(301).default,OffCanvasMobileMenu:l(300).default,BlogDetailsPost:l(321).default,RelatedBlogPost:l(322).default,CommentForm:l(329).default,Footer:l(295).default})}}]);