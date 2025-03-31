// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-same-value@esm/index.mjs";function t(t,s,n){var a;if(n<0){if((n+=t.length)<0)return-1}else n>t.length&&(n=t.length-1);return(a=r(t)).accessorProtocol?function(r,t,s){var n,a,i;for(n=r.data,a=r.accessors[0],i=s;i>=0;i--)if(e(t,a(n,i)))return i;return-1}(a,s,n):function(r,t,s){var n;for(n=s;n>=0;n--)if(e(t,r[n]))return n;return-1}(t,s,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
