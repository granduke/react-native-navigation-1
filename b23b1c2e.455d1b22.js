/*! For license information please see b23b1c2e.455d1b22.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(171)),o=n(175),i=n(176);n(174);const s={id:"docs-overlay",title:"Overlay",sidebar_label:"Overlay"},l={id:"docs-overlay",title:"Overlay",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/docs-overlay.mdx",permalink:"/react-native-navigation/docs/docs-overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-overlay.mdx",sidebar_label:"Overlay",sidebar:"docs",previous:{title:"Modal",permalink:"/react-native-navigation/docs/docs-modal"},next:{title:"Themes",permalink:"/react-native-navigation/docs/theme"}},c=[{value:"Handling touch events outside the view",id:"handling-touch-events-outside-the-view",children:[]},{value:"Overlay examples",id:"overlay-examples",children:[]}],u={rightToc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Overlays are used to layout content on top of all other layout hierarchies, while fitting the screen bounds.\nThe contents displayed in an Overlay can either be non-obtrusive, like Toasts and Snackbars, or an Alert that blocks all interactions with any content behind it. The view contained within it should be aligned either with absolute position, flex, or with margins, all according to your needs."),Object(a.b)("h2",{id:"handling-touch-events-outside-the-view"},"Handling touch events outside the view"),Object(a.b)("p",null,"When showing views like Alert or Toast in an Overlay, you would want to configure if you want to allow users to interact with content behind the alert. This is done via the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:""}),"interceptTouchOutside")," option."),Object(a.b)("h2",{id:"overlay-examples"},"Overlay examples"),Object(a.b)(o.a,{defaultValue:"alert",values:[{label:"Alert",value:"alert"},{label:"Toast",value:"toast"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"alert",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to create a simple alert dialog using an Overlay. Touch events outside the alert will be blocked and won't pass through to the content behind the alert since we're specifying ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: true")," in the static options of the Alert."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/img/alert_android.png"}),"screenshot")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { Text, Button, View } = require('react-native');\nconst { Navigation } = require('react-native-navigation');\n\nfunction Alert({ componentId, title, message }) {\n  const dismiss = () => Navigation.dismissOverlay(componentId);\n\n  return (\n    <View style={styles.root}>\n      <View style={styles.alert}>\n        <Text style={styles.title}>{title}</Text>\n        <Text style={styles.message}>{message}</Text>\n        <Button title='OK' onPress={dismiss} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = {\n  root: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#00000050'\n  },\n  alert: {\n    alignItems: 'center',\n    backgroundColor: 'whitesmoke',\n    width: 250,\n    elevation: 4,\n    padding: 16\n  },\n  title: {\n    fontSize: 18\n  },\n  message: {\n    marginVertical: 8\n  }\n};\n\nAlert.options = (props) => {\n  return ({\n    overlay: {\n      interceptTouchOutside: true\n    }\n  });\n}\n\nmodule.exports = Alert;\n\n"))),Object(a.b)(i.a,{value:"toast",mdxType:"TabItem"},Object(a.b)("p",null,"The example below demonstrates how to show a Toast using an Overlay. A user can interact with the content behind the toast since we've declared ",Object(a.b)("inlineCode",{parentName:"p"},"interceptTouchOutside: false")," in the static options of the Alert."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/img/toast_android.png"}),"screenshot")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst { View, Text, StyleSheet, TouchableOpacity } = require('react-native');\nconst Colors = require('../commons/Colors');\nconst Navigation = require('../services/Navigation');\n\nconst Toast = function ({componentId}) {\n  return (\n    <View style={styles.root}>\n      <View style={styles.toast}>\n        <Text style={styles.text}>This a very important message!</Text>\n        <TouchableOpacity style={styles.button} onPress={() => Navigation.dismissOverlay(componentId)}>\n          <Text style={styles.buttonText}>OK</Text>\n        </TouchableOpacity>\n      </View>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    flexDirection: 'column-reverse',\n  },\n  toast: {\n    elevation: 2,\n    flexDirection: 'row',\n    height: 40,\n    margin: 16,\n    borderRadius: 20,\n    backgroundColor: Colors.accent,\n    alignItems: 'center',\n    justifyContent: 'space-between'\n  },\n  text: {\n    color: 'white',\n    fontSize: 16,\n    marginLeft: 16\n  },\n  button: {\n    marginRight: 16\n  },\n  buttonText: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 'bold'\n  }\n});\n\nToast.options = {\n  layout: {\n    componentBackgroundColor: 'transparent'\n  },\n  overlay: {\n    interceptTouchOutside: false\n  }\n}\n\nmodule.exports = Toast;\n")))))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(h,s({ref:t},c,{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},172:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},173:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(173);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},175:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(172),i=n.n(o),s=n(93),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:s}=e,[p,d]=Object(r.useState)(o),b=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},s.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:i()("tab-item",l.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>d(e),onClick:()=>d(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},176:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);