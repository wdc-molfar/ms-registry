(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{574:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},575:function(t,e,s){var n=s(34),r=s(28),o="["+s(574)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var s=r(n(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},577:function(t,e,s){var n=s(6),r=s(9),o=s(140);t.exports=function(t,e,s){var i,a;return o&&n(i=e.constructor)&&i!==s&&r(a=i.prototype)&&a!==s.prototype&&o(t,a),t}},598:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"What is the full form of HTTP?","responses":[{"text":"Hyper text transfer package"},{"text":"Hyper text transfer protocol","correct":true},{"text":"Hyphenation text test program"},{"text":"None of the above"}]},{"text":"HTML document start and end with which tag pairs?","responses":[{"text":"HTML","correct":true},{"text":"WEB"},{"text":"HEAD"},{"text":"BODY"}]},{"text":"Which tag is used to create body text in HTML?","responses":[{"text":"HEAD"},{"text":"BODY","correct":true},{"text":"TITLE"},{"text":"TEXT"}]},{"text":"Outlook Express is _________","responses":[{"text":"E-Mail Client","correct":true},{"text":"Browser"},{"text":"Search Engine"},{"text":"None of the above"}]},{"text":"What is a search engine?","responses":[{"text":"A hardware component "},{"text":"A machinery engine that search data"},{"text":"A web site that searches anything","correct":true},{"text":"A program that searches engines"}]},{"text":"What does the .com domain represents?","responses":[{"text":"Network"},{"text":"Education"},{"text":"Commercial","correct":true},{"text":"None of the above"}]},{"text":"In Satellite based communication, VSAT stands for? ","responses":[{"text":" Very Small Aperture Terminal","correct":true},{"text":"Varying Size Aperture Terminal "},{"text":"Very Small Analog Terminal"},{"text":"None of the above"}]},{"text":"What is the full form of TCP/IP? ","responses":[{"text":"Telephone call protocol / international protocol"},{"text":"Transmission control protocol / internet protocol","correct":true},{"text":"Transport control protocol / internet protocol "},{"text":"None of the above"}]},{"text":"What is the full form of HTML?","responses":[{"text":"Hyper text marking language"},{"text":"Hyphenation text markup language "},{"text":"Hyper text markup language","correct":true},{"text":"Hyphenation test marking language"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},599:function(t){t.exports=JSON.parse('{"user":"Dave","questions":[{"text":"Who is the Batman","responses":[{"text":"Laughing Bat"},{"text":"Bruce Wayne","correct":true},{"text":"Dick Grayson"},{"text":"None of the above"}]},{"text":"\\"Yahoo\\", \\"Infoseek\\" and \\"Lycos\\" are _________?","responses":[{"text":"Browsers "},{"text":"Search Engines","correct":true},{"text":"News Group"},{"text":"None of the above"}]}]}')},600:function(t,e,s){},633:function(t,e,s){"use strict";var n=s(14),r=s(5),o=s(381),i=s(36),a=s(11),u=s(577),c=s(97),l=s(389),x=s(3),p=s(66).f,h=s(44).f,f=s(15).f,d=s(634),v=s(575).trim,_=r.Number,q=_.prototype,g=function(t){var e=l(t,"number");return"bigint"==typeof e?e:m(e)},m=function(t){var e,s,n,r,o,i,a,u,x=l(t,"number");if(c(x))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof x&&x.length>2)if(43===(e=(x=v(x)).charCodeAt(0))||45===e){if(88===(s=x.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(x.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+x}for(i=(o=x.slice(2)).length,a=0;a<i;a++)if((u=o.charCodeAt(a))<48||u>r)return NaN;return parseInt(o,n)}return+x};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var I,b=function(t){var e=arguments.length<1?0:_(g(t)),s=this;return s instanceof b&&x((function(){d(s)}))?u(Object(e),s,b):e},N=n?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),y=0;N.length>y;y++)a(_,I=N[y])&&!a(b,I)&&f(b,I,h(_,I));b.prototype=q,q.constructor=b,i(r,"Number",b)}},634:function(t,e){var s=1..valueOf;t.exports=function(t){return s.call(t)}},635:function(t,e,s){var n=s(2),r=s(636),o=s(141);n({target:"Array",proto:!0},{fill:r}),o("fill")},636:function(t,e,s){"use strict";var n=s(18),r=s(146),o=s(37);t.exports=function(t){for(var e=n(this),s=o(e),i=arguments.length,a=r(i>1?arguments[1]:void 0,s),u=i>2?arguments[2]:void 0,c=void 0===u?s:r(u,s);c>a;)e[a++]=t;return e}},637:function(t,e,s){"use strict";s(600)},644:function(t,e,s){"use strict";s.r(e);s(633),s(635);var n=s(598),r=s(599),o={name:"Quiz",props:{quizNum:Number},data:function(){var t;switch(this.quizNum){case 1:t=n;break;case 2:t=r;break;default:t=n}return{quiz:t,questionIndex:0,userResponses:Array(t.questions.length).fill(null),isActive:!1}},filters:{charIndex:function(t){return String.fromCharCode(97+t)}},methods:{restart:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)},selectOption:function(t){this.$set(this.userResponses,this.questionIndex,t)},next:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++},prev:function(){this.quiz.questions.length>0&&this.questionIndex--},score:function(){for(var t=0,e=0;e<this.userResponses.length;e++)void 0!==this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}}},i=(s(637),s(64)),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"questionContainer"},[s("header",[s("div",{staticClass:"shell"},[s("div",{staticClass:"bar",style:{width:t.questionIndex/t.quiz.questions.length*100+"%"}},[s("span",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"%")])])])]),t._v(" "),s("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex]&&t.quiz.questions[t.questionIndex].text))]),t._v(" "),t.quiz.questions[t.questionIndex]?s("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,n){return s("div",{key:n,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==n},on:{click:function(e){return t.selectOption(n)}}},[t._v("\n            "+t._s(t._f("charIndex")(n))+". "+t._s(e.text||"Mpthasdng")+"\n          ")])})),0):t._e(),t._v(" "),s("footer",{staticClass:"questionFooter"},[s("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[s("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("\n                    Back\n                  ")]),t._v(" "),s("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t._v(" "),t.questionIndex>=t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),t._v(" "),s("h2",{staticClass:"title"},[t._v("\n      You did "+t._s(t.score()/t.quiz.questions.length>.7?"an amazing":t.score()/t.quiz.questions.length<.4?"a poor":"a good")+" job!\n    ")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n      Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n    ")]),t._v(" "),s("br"),t._v(" "),s("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),s("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)}),[],!1,null,"2871fdf4",null);e.default=a.exports}}]);