"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(G,x){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),l=require('@stdlib/complex-float64-real/dist'),R=require('@stdlib/complex-float64-imag/dist');function _(e,r,u,i,z){var n,f,o,a,t;if(e<=0)return-1;for(f=l(r),o=R(r),n=j(u,0),a=z*2,i*=2,t=0;t<e;t++){if(n[a]===f&&n[a+1]===o)return t;a+=i}return-1}x.exports=_
});var p=v(function(H,d){
var g=require('@stdlib/strided-base-stride2offset/dist'),w=s();function b(e,r,u,i){return w(e,r,u,i,g(e,i))}d.exports=b
});var O=v(function(I,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=p(),A=s();k(c,"ndarray",A);y.exports=c
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),E=O(),q,m=C(B(__dirname,"./native.js"));D(m)?q=E:q=m;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
