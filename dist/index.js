"use strict";var l=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var c=l(function(h,n){
var o=require('@stdlib/array-base-arraylike2object/dist'),s=require('@stdlib/assert-is-same-value/dist');function v(r,t,a){var e;for(e=a;e>=0;e--)if(s(t,r[e]))return e;return-1}function f(r,t,a){var e,u,i;for(e=r.data,u=r.accessors[0],i=a;i>=0;i--)if(s(t,u(e,i)))return i;return-1}function g(r,t,a){var e;if(a<0){if(a+=r.length,a<0)return-1}else a>r.length&&(a=r.length-1);return e=o(r),e.accessorProtocol?f(e,t,a):v(r,t,a)}n.exports=g
});var q=c();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
