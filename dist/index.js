"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(G,x){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),l=require('@stdlib/complex-float64-real/dist'),R=require('@stdlib/complex-float64-imag/dist');function _(e,r,i,a,z){var n,f,o,t,u;if(e<=0)return-1;for(f=l(r),o=R(r),n=j(i,0),t=z*2,a*=2,u=0;u<e;u++){if(n[t]===f&&n[t+1]===o)return u;t+=a}return-1}x.exports=_
});var p=v(function(H,d){
var g=require('@stdlib/strided-base-stride2offset/dist'),w=s();function b(e,r,i,a){return w(e,r,i,a,g(e,a))}d.exports=b
});var O=v(function(I,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=p(),A=s();k(c,"ndarray",A);y.exports=c
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),E=O(),q,m=C(B(__dirname,"./native.js"));D(m)?q=E:q=m;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
