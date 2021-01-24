(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{217:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kubernetes-sigs/krew",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kubernetes-sigs/krew"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("krew")]),t._v(" 는 "),s("router-link",{attrs:{to:"./kubectl-plugin.html"}},[t._v("kubectl plugin")]),t._v(" 설치를 도와주는 "),s("a",{staticClass:"tag",attrs:{href:"/tags.html#kubernetes"}},[t._v("#kubernetes")]),t._v(" 유틸리티입니다. OSX 에서 "),s("code",[t._v("brew")]),t._v(" 의 역할을 해준다고 할 수 있겠네요.")],1),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("아래와 같이 간단하게 "),s("code",[t._v("brew")]),t._v(" 를 이용해 설치할 수 있습니다.\n(하지만 "),s("a",{attrs:{href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식문서"),s("OutboundLink")],1),t._v("에서는 직접 설치하는걸 권장하네요.)")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("플러그인의 정보를 검색하고,")]),t._v(" "),t._m(10),s("p",[t._v("플러그인의 정보를 확인하고,")]),t._v(" "),t._m(11),s("p",[t._v("플러그인을 설치하고,")]),t._v(" "),t._m(12),s("p",[t._v("플러그인을 언인스톨해봅니다.")]),t._v(" "),t._m(13)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"krew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#krew"}},[this._v("#")]),this._v(" krew")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#소개"}},[this._v("소개")])]),e("li",[e("a",{attrs:{href:"#설치-방법"}},[this._v("설치 방법")])]),e("li",[e("a",{attrs:{href:"#사용해보기"}},[this._v("사용해보기")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"소개"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[this._v("#")]),this._v(" 소개")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"설치-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설치-방법"}},[this._v("#")]),this._v(" 설치 방법")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" krew\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("설치 후 "),e("code",[this._v(".bash_profile")]),this._v(" 파일에 "),e("code",[this._v("PATH")]),this._v("를 업데이트해줍니다.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KREW_ROOT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("$HOME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(".krew}")]),t._v("/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v('"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("설치가 완료된 후 "),e("code",[this._v("kubectl krew")]),this._v(" 명령이 잘 동작하면 준비가 끝났습니다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"사용해보기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용해보기"}},[this._v("#")]),this._v(" 사용해보기")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("제가 유용하게 사용하고 있는 "),e("code",[this._v("kubectl-example")]),this._v(" 을 설치해봅시다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ kubectl krew search example\nNAME     DESCRIPTION                        INSTALLED\nexample  Prints out example manifest YAMLs  no\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ kubectl krew info example\nNAME: example\nURI: https://github.com/seredot/kubectl-example/releases/download/v1.0.1/kubectl-example_1.0.1_Darwin_x86_64.tar.gz\nSHA256: 2f63f29d92c236c7bea56cfb5825529d6b4b966bcf79a386a669b24774d24e6c\nVERSION: v1.0.0\nHOMEPAGE: https://github.com/seredot/kubectl-example\nDESCRIPTION:\nPrints out a example manifest YAML "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" a given resource type.\nThe plugin works similar to a dry run output but "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" arbitrary resources.\nAll examples originate from kubernetes.io.\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl krew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" example\nInstalling plugin: example\nInstalled plugin: example\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Use this plugin:\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" \tkubectl example\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Documentation:\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" \thttps://github.com/seredot/kubectl-example\n/\nWARNING: You installed plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),t._v(" from the krew-index plugin repository.\n   These plugins are not audited "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" security by the Krew maintainers.\n   Run them at your own risk.\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl krew uninstall example\nI0104 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":23:15.058168   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("41408")]),t._v(" migration.go:41"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Migrating krew index layout.\nI0104 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":23:15.058573   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("41408")]),t._v(" migration.go:58"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Migration completed successfully.\nUninstalled plugin example\n")])])])}],!1,null,null,null);e.default=r.exports}}]);