(window.webpackJsonp=window.webpackJsonp||[]).push([[27,26],{311:function(t,e,n){"use strict";n.r(e);var o={props:["member"]},c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team-block"},[n("div",{staticClass:"inner-box"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:t.member.imgSrc,alt:t.member.name}}),t._v(" "),n("ul",{staticClass:"social-icons"},t._l(t.member.socials,(function(t,e){return n("li",{key:e},[n("a",{class:t.icon,attrs:{href:t.url}})])})),0)]),t._v(" "),n("div",{staticClass:"team-content"},[n("h4",{staticClass:"title"},[t._v(t._s(t.member.name))]),t._v(" "),n("h5",{staticClass:"subtitle"},[t._v(t._s(t.member.position))])])])])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);n(1),n(46),n(53);var o={components:{SingleTeamMember:function(){return Promise.resolve().then(n.bind(null,311))}},data:function(){return{members:[{name:"Edward Eric",position:"CEO Founder",imgSrc:"/images/team/team-1.jpg",socials:[{icon:"icofont-twitter",url:"#"},{icon:"icofont-facebook",url:"#"},{icon:"icofont-instagram",url:"#"},{icon:"icofont-linkedin",url:"#"}]},{name:"Tom Holland",position:"Architect & Project Management",imgSrc:"/images/team/team-2.jpg",socials:[{icon:"icofont-twitter",url:"#"},{icon:"icofont-facebook",url:"#"},{icon:"icofont-instagram",url:"#"},{icon:"icofont-linkedin",url:"#"}]},{name:"Laura Erakovic",position:"Executive & Marketing Management",imgSrc:"/images/team/team-3.jpg",socials:[{icon:"icofont-twitter",url:"#"},{icon:"icofont-facebook",url:"#"},{icon:"icofont-instagram",url:"#"},{icon:"icofont-linkedin",url:"#"}]}]}}},c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding bg-light"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row mtn-30"},t._l(t.members,(function(t,e){return n("div",{key:e,staticClass:"col-lg-4 col-md-6 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[n("SingleTeamMember",{attrs:{member:t}})],1)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"section-title",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[n("h2",{staticClass:"title"},[t._v("Our Team")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SingleTeamMember:n(311).default})}}]);