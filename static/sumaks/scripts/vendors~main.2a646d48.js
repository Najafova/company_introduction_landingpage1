(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{
/***/"+Gof":
/***/function(t,e,i){"use strict";
// CONCATENATED MODULE: ../node_modules/is-dom-node/dist/is-dom-node.es.js
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var n=function(t){return"object"===typeof window.Node?t instanceof window.Node:null!==t&&"object"===typeof t&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName};
// CONCATENATED MODULE: ../node_modules/is-dom-node-list/dist/is-dom-node-list.es.js
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var s=function(t){var e=Object.prototype.toString.call(t);return"object"===typeof window.NodeList?t instanceof window.NodeList:null!==t&&"object"===typeof t&&"number"===typeof t.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(e)&&(0===t.length||n(t[0]))};
// CONCATENATED MODULE: ../node_modules/tealight/dist/tealight.es.js
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
/* harmony default export */var o=function(t,e){if(void 0===e&&(e=document),t instanceof Array)return t.filter(n);if(n(t))return[t];if(s(t))return Array.prototype.slice.call(t);if("string"===typeof t)try{var i=e.querySelectorAll(t);return Array.prototype.slice.call(i)}catch(o){return[]}return[]};
// CONCATENATED MODULE: ../node_modules/rematrix/dist/rematrix.es.js
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */
/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */function r(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var e=a();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */function a(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function l(t,e){for(var i=r(t),n=r(e),s=[],o=0;o<4;o++)for(var a=[i[o],i[o+4],i[o+8],i[o+12]],l=0;l<4;l++){var h=4*l,c=[n[h],n[h+1],n[h+2],n[h+3]],d=a[0]*c[0]+a[1]*c[1]+a[2]*c[2]+a[3]*c[3];s[o+h]=d}return s}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function h(t){var e=Math.PI/180*t,i=a();return i[0]=i[5]=Math.cos(e),i[1]=i[4]=Math.sin(e),i[4]*=-1,i}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */function c(t,e){var i=a();return i[0]=t,i[5]="number"===typeof e?e:t,i}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
// CONCATENATED MODULE: ../node_modules/miniraf/dist/miniraf.es.js
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var d,u=(d=Date.now(),function(t){var e=Date.now();e-d>16?(d=e,t(e)):setTimeout(function(){return u(t)},0)}),f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||u,p={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var v={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function g(t){return null!==t&&t instanceof Object&&(t.constructor===Object||"[object Object]"===Object.prototype.toString.call(t))}function m(t,e){if(g(t))return Object.keys(t).forEach(function(i){return e(t[i],i,t)});if(t instanceof Array)return t.forEach(function(i,n){return e(i,n,t)});throw new TypeError("Expected either an array or object literal.")}function y(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+t;e.forEach(function(t){return n+="\n \u2014 "+t}),console.log(n,"color: #ea654b;")}}function b(){var t=this,e={active:[],stale:[]},i={active:[],stale:[]},n={active:[],stale:[]};
/**
	 * Take stock of active element IDs.
	 */
try{m(o("[data-sr-id]"),function(t){var i=parseInt(t.getAttribute("data-sr-id"));e.active.push(i)})}catch(s){throw s}
/**
	 * Destroy stale elements.
	 */m(this.store.elements,function(t){-1===e.active.indexOf(t.id)&&e.stale.push(t.id)}),m(e.stale,function(e){return delete t.store.elements[e]}),
/**
	 * Take stock of active container and sequence IDs.
	 */
m(this.store.elements,function(t){-1===n.active.indexOf(t.containerId)&&n.active.push(t.containerId),t.hasOwnProperty("sequence")&&-1===i.active.indexOf(t.sequence.id)&&i.active.push(t.sequence.id)}),
/**
	 * Destroy stale containers.
	 */
m(this.store.containers,function(t){-1===n.active.indexOf(t.id)&&n.stale.push(t.id)}),m(n.stale,function(e){var i=t.store.containers[e].node;i.removeEventListener("scroll",t.delegate),i.removeEventListener("resize",t.delegate),delete t.store.containers[e]}),
/**
	 * Destroy stale sequences.
	 */
m(this.store.sequences,function(t){-1===i.active.indexOf(t.id)&&i.stale.push(t.id)}),m(i.stale,function(e){return delete t.store.sequences[e]})}function w(t){var e,i=this;try{m(o(t),function(t){var n=t.getAttribute("data-sr-id");if(null!==n){e=!0;var s=i.store.elements[n];s.callbackTimer&&window.clearTimeout(s.callbackTimer.clock),t.setAttribute("style",s.styles.inline.generated),t.removeAttribute("data-sr-id"),delete i.store.elements[n]}})}catch(n){return y.call(this,"Clean failed.",n.message)}if(e)try{b.call(this)}catch(n){return y.call(this,"Clean failed.",n.message)}}var E=function(){var t={},e=document.documentElement.style;function i(i,n){if(void 0===n&&(n=e),i&&"string"===typeof i){if(t[i])return t[i];if("string"===typeof n[i])return t[i]=i;if("string"===typeof n["-webkit-"+i])return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return i.clearCache=function(){return t={}},i}();function S(t){var e=window.getComputedStyle(t.node),i=e.position,n=t.config,s={},o=(t.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];s.computed=o?o.map(function(t){return t.trim()}).join("; ")+";":"",s.generated=o.some(function(t){return t.match(/visibility\s?:\s?visible/i)})?s.computed:o.concat(["visibility: visible"]).map(function(t){return t.trim()}).join("; ")+";";
/**
	 * Generate opacity styles
	 */
var d,u,f,p=parseFloat(e.opacity),v=isNaN(parseFloat(n.opacity))?parseFloat(e.opacity):parseFloat(n.opacity),g={computed:p!==v?"opacity: "+p+";":"",generated:p!==v?"opacity: "+v+";":""},m=[];if(parseFloat(n.distance)){var y="top"===n.origin||"bottom"===n.origin?"Y":"X",b=n.distance;
/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */"top"!==n.origin&&"left"!==n.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),S=w[0];switch(w[1]){case"em":b=parseInt(e.fontSize)*S;break;case"px":b=S;break;case"%":
/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distaince calculation
				 */
b="Y"===y?t.node.getBoundingClientRect().height*S/100:t.node.getBoundingClientRect().width*S/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===y?m.push(
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function(t){var e=a();return e[13]=t,e}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */(b)):m.push(
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function(t){var e=a();return e[12]=t,e}(b))}n.rotate.x&&m.push((d=n.rotate.x,u=Math.PI/180*d,(f=a())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),n.rotate.y&&m.push(
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function(t){var e=Math.PI/180*t,i=a();return i[0]=i[10]=Math.cos(e),i[2]=i[8]=Math.sin(e),i[2]*=-1,i}(n.rotate.y)),n.rotate.z&&m.push(h(n.rotate.z)),1!==n.scale&&(0===n.scale?
/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
m.push(c(2e-4)):m.push(c(n.scale)));var x={};if(m.length){x.property=E("transform"),
/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
x.computed={raw:e[x.property],matrix:function(t){if("string"===typeof t){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e)return r(e[2].split(", ").map(parseFloat))}return a()}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */(e[x.property])},m.unshift(x.computed.matrix);var C=m.reduce(l);x.generated={initial:x.property+": matrix3d("+C.join(", ")+");",final:x.property+": matrix3d("+x.computed.matrix.join(", ")+");"}}else x.generated={initial:"",final:""};
/**
	 * Generate transition styles
	 */var D={};if(g.generated||x.generated.initial){D.property=E("transition"),D.computed=e[D.property],D.fragments=[];var P=n.delay,A=n.duration,k=n.easing;g.generated&&D.fragments.push({delayed:"opacity "+A/1e3+"s "+k+" "+P/1e3+"s",instant:"opacity "+A/1e3+"s "+k+" 0s"}),x.generated.initial&&D.fragments.push({delayed:x.property+" "+A/1e3+"s "+k+" "+P/1e3+"s",instant:x.property+" "+A/1e3+"s "+k+" 0s"})
/**
		 * The default computed transition property should be one of:
		 * undefined || '' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */,D.computed&&!D.computed.match(/all 0s/)&&D.fragments.unshift({delayed:D.computed,instant:D.computed});var _=D.fragments.reduce(function(t,e,i){return t.delayed+=0===i?e.delayed:", "+e.delayed,t.instant+=0===i?e.instant:", "+e.instant,t},{delayed:"",instant:""});D.generated={delayed:D.property+": "+_.delayed+";",instant:D.property+": "+_.instant+";"}}else D.generated={delayed:"",instant:""};return{inline:s,opacity:g,position:i,transform:x,transition:D}}function x(t,e){void 0===e&&(e={});var i=e.pristine||this.pristine,n="always"===t.config.useDelay||"onload"===t.config.useDelay&&i||"once"===t.config.useDelay&&!t.seen,s=t.visible&&!t.revealed,o=!t.visible&&t.revealed&&t.config.reset;return e.reveal||s?function(t,e){var i=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?i.push(t.styles.transition.generated.delayed):i.push(t.styles.transition.generated.instant);t.revealed=t.seen=!0,t.node.setAttribute("style",i.filter(function(t){return""!==t}).join(" ")),C.call(this,t,e)}.call(this,t,n):e.reset||o?function(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,t.node.setAttribute("style",e.filter(function(t){return""!==t}).join(" ")),C.call(this,t)}.call(this,t):void 0}function C(t,e){var i=this,n=e?t.config.duration+t.config.delay:t.config.duration,s=t.revealed?t.config.beforeReveal:t.config.beforeReset,o=t.revealed?t.config.afterReveal:t.config.afterReset,r=0;t.callbackTimer&&(r=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),s(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&w.call(i,t.node)},n-r)}}var D,P=(D=0,function(){return D++});function A(t,e){
/**
	 * We first check if the element should reset.
	 */
if(void 0===e&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return x.call(this,t,{reset:!0});var i=this.store.sequences[t.sequence.id],n=t.sequence.index;if(i){var s=new _(i,"visible",this.store),o=new _(i,"revealed",this.store);
/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
if(i.models={visible:s,revealed:o},!o.body.length){var r=i.members[s.body[0]],a=this.store.elements[r];if(a)return L.call(this,i,s.body[0],-1,e),L.call(this,i,s.body[0],1,e),x.call(this,a,{reveal:!0,pristine:e})}
/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */if(!i.blocked.head&&n===[].concat(o.head).pop()&&n>=[].concat(s.body).shift())return L.call(this,i,n,-1,e),x.call(this,t,{reveal:!0,pristine:e});if(!i.blocked.foot&&n===[].concat(o.foot).shift()&&n<=[].concat(s.body).pop())return L.call(this,i,n,1,e),x.call(this,t,{reveal:!0,pristine:e})}}function k(t){var e=Math.abs(t);if(isNaN(e))throw new RangeError("Invalid sequence interval.");this.id=P(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function _(t,e,i){var n=this;this.head=[],this.body=[],this.foot=[],m(t.members,function(t,s){var o=i.elements[t];o&&o[e]&&n.body.push(s)}),this.body.length&&m(t.members,function(t,s){var o=i.elements[t];o&&!o[e]&&(s<n.body[0]?n.head.push(s):n.foot.push(s))})}function L(t,e,i,n){var s=this,o=["head",null,"foot"][1+i],r=t.members[e+i],a=this.store.elements[r];t.blocked[o]=!0,setTimeout(function(){t.blocked[o]=!1,a&&A.call(s,a,n)},t.interval)}function T(){var t=this;b.call(this),m(this.store.elements,function(t){var e=[t.styles.inline.generated];t.visible?(e.push(t.styles.opacity.computed),e.push(t.styles.transform.generated.final),t.revealed=!0):(e.push(t.styles.opacity.generated),e.push(t.styles.transform.generated.initial),t.revealed=!1),t.node.setAttribute("style",e.filter(function(t){return""!==t}).join(" "))}),m(this.store.containers,function(e){var i=e.node===document.documentElement?window:e.node;i.addEventListener("scroll",t.delegate),i.addEventListener("resize",t.delegate)}),
/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
this.delegate(),
/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
this.initTimeout=null}function M(t){return void 0===t&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}function z(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(g(t))return m(e,function(e){m(e,function(e,i){g(e)?(t[i]&&g(t[i])||(t[i]={}),z(t[i],e)):t[i]=e})}),t;throw new TypeError("Target must be an object literal.")}function I(t,e,i){var n=this;void 0===e&&(e={}),void 0===i&&(i=!1);var s,r=[],a=e.interval||p.interval;try{a&&(s=new k(a));var l=o(t);if(!l.length)throw new Error("Invalid reveal target.");var h=l.reduce(function(t,i){var a={},l=i.getAttribute("data-sr-id");l?(z(a,n.store.elements[l]),
/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
a.node.setAttribute("style",a.styles.inline.computed)):(a.id=P(),a.node=i,a.seen=!1,a.revealed=!1,a.visible=!1);var h=z({},a.config||n.defaults,e);if(!h.mobile&&M()||!h.desktop&&!M())return l&&w.call(n,a),t;// skip elements that are disabled
var c,d=o(h.container)[0];if(!d)throw new Error("Invalid container.");return d.contains(i)?(null===(c=function(t){var e=[],i=arguments.length-1;for(;i-- >0;)e[i]=arguments[i+1];var n=null;return m(e,function(e){m(e,function(e){null===n&&e.node===t&&(n=e.id)})}),n}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */(d,r,n.store.containers))&&(c=P(),r.push({id:c,node:d})),a.config=h,a.containerId=c,a.styles=S(a),s&&(a.sequence={id:s.id,index:s.members.length},s.members.push(a.id)),t.push(a),t):t},[]);
/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */m(h,function(t){n.store.elements[t.id]=t,t.node.setAttribute("data-sr-id",t.id)})}catch(c){return y.call(this,"Reveal failed.",c.message)}
/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */m(r,function(t){n.store.containers[t.id]={id:t.id,node:t.node}}),s&&(this.store.sequences[s.id]=s)
/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */,!0!==i&&(this.store.history.push({target:t,options:e}),
/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(T.bind(this),0))}var O=Math.sign||function(t){return(t>0)-(t<0)||+t};function W(t,e){
/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
var i=e?t.node.clientHeight:t.node.offsetHeight,n=e?t.node.clientWidth:t.node.offsetWidth,s=0,o=0,r=t.node;do{isNaN(r.offsetTop)||(s+=r.offsetTop),isNaN(r.offsetLeft)||(o+=r.offsetLeft),r=r.offsetParent}while(r);return{bounds:{top:s,right:o+n,bottom:s+i,left:o},height:i,width:n}}function F(t,e){var i=this;void 0===t&&(t={type:"init"}),void 0===e&&(e=this.store.elements),f(function(){var n="init"===t.type||"resize"===t.type;m(i.store.containers,function(t){n&&(t.geometry=W.call(i,t,!0));var e=function(t){var e,i;return t.node===document.documentElement?(e=window.pageYOffset,i=window.pageXOffset):(e=t.node.scrollTop,i=t.node.scrollLeft),{top:e,left:i}}.call(i,t);t.scroll&&(t.direction={x:O(e.left-t.scroll.left),y:O(e.top-t.scroll.top)}),t.scroll=e}),
/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
m(e,function(t){n&&(t.geometry=W.call(i,t)),t.visible=function(t){void 0===t&&(t={});var e=this.store.containers[t.containerId];if(e){var i=Math.max(0,Math.min(1,t.config.viewFactor)),n=t.config.viewOffset,s=t.geometry.bounds.top+t.geometry.height*i,o=t.geometry.bounds.right-t.geometry.width*i,r=t.geometry.bounds.bottom-t.geometry.height*i,a=t.geometry.bounds.left+t.geometry.width*i,l=e.geometry.bounds.top+e.scroll.top+n.top,h=e.geometry.bounds.right+e.scroll.left-n.right,c=e.geometry.bounds.bottom+e.scroll.top-n.bottom,d=e.geometry.bounds.left+e.scroll.left+n.left;return s<c&&o>d&&r>l&&a<h||"fixed"===t.styles.position}}.call(i,t)}),m(e,function(t){t.sequence?A.call(i,t):x.call(i,t)}),i.pristine=!1})}var N,R,j,B,q,H,U,X,G="4.0.5";function V(t){var e;if(void 0===t&&(t={}),"undefined"===typeof this||Object.getPrototypeOf(this)!==V.prototype)return new V(t);if(!V.isSupported())return y.call(this,"Instantiation failed.","This browser is not supported."),v.failure();try{e=z({},H||p,t)}catch(i){return y.call(this,"Invalid configuration.",i.message),v.failure()}try{if(!o(e.container)[0])throw new Error("Invalid container.")}catch(i){return y.call(this,i.message),v.failure()}return!(H=e).mobile&&M()||!H.desktop&&!M()?(y.call(this,"This device is disabled.","desktop: "+H.desktop,"mobile: "+H.mobile),v.failure()):(v.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,N=N||F.bind(this),R=R||function(){var t=this;
/**
	 * Remove all generated styles and element ids
	 */m(this.store.elements,function(t){t.node.setAttribute("style",t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),
/**
	 * Remove all event listeners.
	 */
m(this.store.containers,function(e){var i=e.node===document.documentElement?window:e.node;i.removeEventListener("scroll",t.delegate),i.removeEventListener("resize",t.delegate)}),
/**
	 * Clear all data from the store
	 */
this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),j=j||I.bind(this),B=B||w.bind(this),q=q||function(){var t=this;m(this.store.history,function(e){I.call(t,e.target,e.options,!0)}),T.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return N}}),Object.defineProperty(this,"destroy",{get:function(){return R}}),Object.defineProperty(this,"reveal",{get:function(){return j}}),Object.defineProperty(this,"clean",{get:function(){return B}}),Object.defineProperty(this,"sync",{get:function(){return q}}),Object.defineProperty(this,"defaults",{get:function(){return H}}),Object.defineProperty(this,"version",{get:function(){return G}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),X||(X=this))}V.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&function(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}();var t},Object.defineProperty(V,"debug",{get:function(){return U||!1},set:function(t){return U="boolean"===typeof t?t:U}}),V();
/* harmony default export */e.a=V;
/***/},
/***/"+Lqo":
/***/function(t,e,i){var n,s;// prev/next buttons
window,n=[i("gTkP"),i("xcA+"),i("SAmA")],void 0===(s=function(t,e,i){return function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";
// -------------------------- PrevNextButton -------------------------- //
function o(t,e){this.direction=t,this.parent=e,this._create()}o.prototype=Object.create(i.prototype),o.prototype._create=function(){
// properties
this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",
// prevent button from submitting form http://stackoverflow.com/a/10836076/182183
e.setAttribute("type","button"),
// init as disabled
this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");
// create arrow
var i=this.createSVG();e.appendChild(i),
// events
this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),
// add to DOM
this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){
// remove from DOM
this.parent.element.removeChild(this.element),
// click events
this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e,i=document.createElementNS(s,"path"),n=
// use shape as movement if string
"string"==typeof(e=this.parent.options.arrowShape)?e:"M "+e.x0+",50 L "+e.x1+","+(e.y1+50)+" L "+e.x2+","+(e.y2+50)+" L "+e.x3+",50  L "+e.x2+","+(50-e.y2)+" L "+e.x1+","+(50-e.y1)+" Z";return i.setAttribute("d",n),i.setAttribute("class","arrow"),
// rotate arrow
this.isLeft||i.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(i),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},
// -----  ----- //
o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){
// index of first or last slide, if previous or next
var t=this.parent.slides;
// enable is wrapAround and at least 2 slides
if(this.parent.options.wrapAround&&t.length>1)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},
// -------------------------- Flickity prototype -------------------------- //
n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},
// --------------------------  -------------------------- //
e.PrevNextButton=o,e}(0,t,e,i)}.apply(e,n))||(t.exports=s)},
/***/"7T+4":
/***/function(t,e,i){var n,s;
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */
/* jshint unused: true, undef: true, strict: true */"undefined"!=typeof window&&window,void 0===(s="function"===typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){
// set events hash
var i=this._events=this._events||{},n=i[t]=i[t]||[];
// set listeners array
// only add once
return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){
// add event
this.on(t,e);
// set once flag
// set onceEvents hash
var i=this._onceEvents=this._onceEvents||{};
// set onceListeners object
// set flag
return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){
// copy over to avoid interference if .off() in listener
i=i.slice(0),e=e||[];for(
// once stuff
var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(
// remove listener
// remove before trigger to prevent recursion
this.off(t,o),
// unset once flag
delete n[o]),
// trigger listener
o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=s)},
/***/DKqM:
/***/function(t,e,i){var n,s;// lazyload
window,n=[i("gTkP"),i("SAmA")],void 0===(s=function(t,e){return function(t,e,i){"use strict";e.createMethods.push("_createLazyload");var n=e.prototype;
// -------------------------- LazyLoader -------------------------- //
/**
 * class to handle loading images
 */
function s(t,e){this.img=t,this.flickity=e,this.load()}return n._createLazyload=function(){this.on("select",this.lazyLoad)},n.lazyLoad=function(){var t=this.options.lazyLoad;if(t){
// get adjacent cells, use lazyLoad option for adjacent count
var e="number"==typeof t?t:0,n=this.getAdjacentCellElements(e),o=[];n.forEach(function(t){var e=function(t){
// check if cell element is lazy image
if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),n=t.getAttribute("data-flickity-lazyload-src"),s=t.getAttribute("data-flickity-lazyload-srcset");if(e||n||s)return[t]}
// select lazy images in cell
var o=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return i.makeArray(o)}(t);o=o.concat(e)}),
// load lazy images
o.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);
// get src & srcset
var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");
// set src & serset
this.img.src=t,e&&this.img.setAttribute("srcset",e),
// remove attr
this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){
// unbind events
this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},
// -----  ----- //
e.LazyLoader=s,e}(0,t,e)}.apply(e,n))||(t.exports=s)},
/***/EF0F:
/***/function(t,e,i){var n,s;// slide
window,void 0===(s="function"===typeof(n=function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){
// first cell stuff
if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;// x comes from first cell
var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t})?n.call(e,i,e,t):n)||(t.exports=s)},
/***/Ii6x:
/***/function(t,e,i){var n,s;// add, remove cell
window,n=[i("gTkP"),i("SAmA")],void 0===(s=function(t,e){return function(t,e,i){"use strict";
// append cells to a document fragment
// -------------------------- add/remove cell prototype -------------------------- //
var n=e.prototype;
/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
// -----  ----- //
return n.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;
// default to append
e=void 0===e?n:e;
// add cells with document fragment
var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;
// append to slider
if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}
// add to this.cells
if(0===e)
// prepend, add to start
this.cells=i.concat(this.cells);else if(o)
// append, add to end
this.cells=this.cells.concat(i);else{
// insert in this.cells
var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},n.append=function(t){this.insert(t,this.cells.length)},n.prepend=function(t){this.insert(t,0)},
/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
n.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;
// remove cells from collection & DOM
e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},
/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
n.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},
/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
n.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();
// update selectedIndex
// try to maintain position & select previous selected element
var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),
// position slider
this.select(this.selectedIndex),
// do not position slider after lazy load
e&&this.positionSliderAtSelected()},e}(0,t,e)}.apply(e,n))||(t.exports=s)},
/***/Mwck:
/***/function(t,e,i){var n,s;// player & autoPlay
window,n=[i("7T+4"),i("SAmA"),i("gTkP")],void 0===(s=function(t,e,i){return function(t,e,i){"use strict";
// -------------------------- Player -------------------------- //
function n(t){this.parent=t,this.state="stopped",
// visibility change event handler
this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),
// start play
n.prototype.play=function(){if("playing"!=this.state){
// do not play if page is hidden, start playing when page is visible
var t=document.hidden;t?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",
// listen to visibility change
document.addEventListener("visibilitychange",this.onVisibilityChange),
// start ticking
this.tick())}},n.prototype.tick=function(){
// do not tick if not playing
if("playing"==this.state){var t=this.parent.options.autoPlay;
// default to 3 seconds
t="number"==typeof t?t:3e3;var e=this;
// HACK: reset ticks if stopped and started within interval
this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),
// remove visibility change event
document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){
// re-start play if paused
"paused"==this.state&&this.play()},
// pause if page visibility is hidden, unpause if visible
n.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},
// -------------------------- Flickity -------------------------- //
e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},
// Player API, don't hate the ... thanks I know where the door is
s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},
// ----- mouseenter/leave ----- //
// pause auto-play on hover
s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},
// resume auto-play on hover off
s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},
// -----  ----- //
i.Player=n,i}(t,e,i)}.apply(e,n))||(t.exports=s)},
/***/PAiP:
/***/function(t,e,i){var n,s;
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */
/*jshint browser: true, strict: true, undef: true, unused: true */
!function(o,r){
/*global define: false, module: false */
"use strict";
// universal module definition
void 0===(s="function"===typeof(n=r)?n.call(e,i,e,t):n)||(t.exports=s)}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;
// check for the standard method name first
if(t.matches)return"matches";
// check un-prefixed
if(t.matchesSelector)return"matchesSelector";
// check vendor prefixes
for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}})},
/***/S07k:
/***/function(t,e,i){var n,s;// page dots
window,n=[i("gTkP"),i("xcA+"),i("SAmA")],void 0===(s=function(t,e,i){return function(t,e,i,n){
// -------------------------- PageDots -------------------------- //
"use strict";function s(t){this.parent=t,this._create()}s.prototype=Object.create(i.prototype),s.prototype._create=function(){
// create holder element
this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",
// create dots, array of elements
this.dots=[],
// events
this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),
// add to DOM
this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),
// remove from DOM
this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){
// get difference between number of slides and number of dots
var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){
// remove from this.dots collection
var e=this.dots.splice(this.dots.length-t,t);
// remove from DOM
e.forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){
// remove selected class on previous
this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),
// don't proceed if no dots
this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=// old method name, backwards-compatible
s.prototype.onClick=function(t){var e=t.target;
// only care about dot clicks
if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,
// -------------------------- Flickity -------------------------- //
n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),
// events
this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},
// -----  ----- //
e.PageDots=s,e}(0,t,e,i)}.apply(e,n))||(t.exports=s)},
/***/SAmA:
/***/function(t,e,i){var n,s;
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
!function(o,r){n=[i("PAiP")],void 0===(s=function(t){return function(t,e){"use strict";var i={
// ----- extend ----- //
// extends objects
extend:function(t,e){for(var i in e)t[i]=e[i];return t},
// ----- modulo ----- //
modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;
// turn element or nodeList into an array
i.makeArray=function(t){if(Array.isArray(t))
// use object if already an array
return t;
// return empty array if undefined or null. #6
if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t];
// array of single index
},
// ----- removeFrom ----- //
i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},
// ----- getParent ----- //
i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},
// ----- getQueryElement ----- //
// use element as selector string
i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},
// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},
// ----- filterFindElements ----- //
i.filterFindElements=function(t,n){
// make array of elems
t=i.makeArray(t);var s=[];return t.forEach(function(t){
// check that elem is an actual element
if(t instanceof HTMLElement)
// add elem if no selector
if(n){
// filter & find items if we have a selector
// filter
e(t,n)&&s.push(t);
// find children
// concat childElems to filterFound array
for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}else s.push(t)}),s},
// ----- debounceMethod ----- //
i.debounceMethod=function(t,e,i){i=i||100;
// original method
var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},
// ----- docReady ----- //
i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?
// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(t):document.addEventListener("DOMContentLoaded",t)},
// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
// -----  ----- //
return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+o),h=i.makeArray(a).concat(i.makeArray(l)),c=r+"-options",d=t.jQuery;h.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(l){
// log error, do not initialize
return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+l))}
// initialize
var a=new e(t,i);
// make available via $().data('namespace')
d&&d.data(t,n,a)})})},i}(o,t)}.apply(e,n))||(t.exports=s)}(window)},
/***/WnVB:
/***/function(t,e,i){var n,s;// drag
// drag
!function(o,r){n=[i("gTkP"),i("iqmN"),i("SAmA")],void 0===(s=function(t,e,i){return function(t,e,i,n){"use strict";
// ----- defaults ----- //
n.extend(e.defaults,{draggable:">1",dragThreshold:3}),
// ----- create ----- //
e.createMethods.push("_createDrag");
// -------------------------- drag prototype -------------------------- //
var s=e.prototype;n.extend(s,i.prototype),s._touchActionValue="pan-y";
// --------------------------  -------------------------- //
var o="createTouch"in document,r=!1;s._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),
// TODO updateDraggable on resize? if groupCells & slides change
// HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
// #457, RubaXa/Sortable#973
o&&!r&&(t.addEventListener("touchmove",function(){}),r=!0)},s.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},s.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},s.updateDraggable=function(){
// disable dragging if less than 2 slides. #278
">1"==this.options.draggable?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},
// backwards compatibility
s.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},s.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},s._uiChangeDrag=function(){delete this.isFreeScrolling},
// -------------------------- pointer events -------------------------- //
s.pointerDown=function(e,i){if(this.isDraggable){var n=this.okayPointerDown(e);n&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),
// blur
document.activeElement!=this.element&&
// do not blur if already focused
this.pointerDownBlur(),
// stop if it was moving
this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),
// track scrolling
this.pointerDownScroll=l(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i))}else this._pointerDownDefault(e,i)},
// default pointerDown logic, used for staticClick
s._pointerDownDefault=function(t,e){
// track start event position
// Safari 9 overrides pageX and pageY. These values needs to be copied. #779
this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},
// bind move and end events
this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var a={INPUT:!0,TEXTAREA:!0,SELECT:!0};
// ----- utils ----- //
function l(){return{x:t.pageXOffset,y:t.pageYOffset}}
// -----  ----- //
return s.pointerDownFocus=function(t){a[t.target.nodeName]||this.focus()},s._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=a[t.target.nodeName];e||i||n||t.preventDefault()},
// ----- move ----- //
s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},
// ----- up ----- //
s.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},s.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},
// -------------------------- dragging -------------------------- //
s.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},s.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;
// reverse if right-to-left
var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(
// wrap around move. #589
i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){
// slow drag
var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},s.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);
// set selectedIndex based on where flick will end up
var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){
// if free-scroll & not wrap around
// do not free-scroll if going outside of bounding slides
// so bounding slides can attract slider, and keep it in bounds
var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(
// boost selection if selected index has not changed
i+=this.dragEndBoostSelect());delete this.previousDragX,
// apply selection
// TODO refactor this, selecting here feels weird
// HACK, set flag so dragging stays in correct direction
this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},s.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);
// how far away from selected slide
return i.distance<n.distance?i.index:n.index},
/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
s._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?
// if contain, keep going if distance is equal to minDistance
function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(
// measure distance to next cell
n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,
// selected was previous index
index:n-i}},
/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
s.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];
// wrap around if at least 2 slides
if(!r)return null;
// add distance for wrap-around slides
var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},s.dragEndBoostSelect=function(){
// do not boost if no previousDragX or dragMoveTime
if(void 0===this.previousDragX||!this.dragMoveTime||
// or if drag was held for 100 ms
new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},
// ----- staticClick ----- //
s.staticClick=function(t,e){
// get clickedCell, if cell was clicked
var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},
// ----- scroll ----- //
s.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;
// cancel click/tap if scroll is too much
(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}(o,t,e,i)}.apply(e,n))||(t.exports=s)}(window)},
/***/bxKv:
/***/function(t,e,i){var n,s;// animate
window,n=[i("SAmA")],void 0===(s=function(t){return function(t,e){"use strict";
// -------------------------- animate -------------------------- //
var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;
// animate next frame
if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;
// wrap position around
this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,
// reverse if right-to-left and using transform
t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);
// use 3D tranforms for hardware acceleration on iOS
// but use 2D when settled, for better font-rendering
this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,// stop wobble
this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){
// keep track of frames where x hasn't moved
this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,
// stop animating if resting for 3 or more frames
this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,
// render position with translateX when settled
this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){
// shift before cells
var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);
// shift after cells
var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},
// -------------------------- physics -------------------------- //
integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){
// my thanks to Steven Wittens, who simplified this math greatly
return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){
// change the position to drag position by applying force
var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if((!this.isDraggable||!this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}(0,t)}.apply(e,n))||(t.exports=s)},
/***/cPna:
/***/function(t,e,i){var n,s;
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */window,void 0===(s="function"===typeof(n=function(){"use strict";
// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);
// not a percent like '100%', and a number
return i&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;
// -------------------------- measurements -------------------------- //
// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function s(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}
// -------------------------- setup -------------------------- //
var o,r=!1;
// -------------------------- getSize -------------------------- //
function a(e){
// do not proceed on non-objects
if(
/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function(){
// setup once
if(!r){r=!0;
// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=s(e);
// round value for browser zoom. desandro/masonry#928
o=200==Math.round(t(n.width)),a.isBoxSizeOuter=o,i.removeChild(e)}}(),
// use querySeletor if elem is string
"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var l=s(e);
// if hidden, everything is 0
if("none"==l.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++){var s=i[e];t[s]=0}return t}();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;
// get all measurements
for(var c=h.isBorderBox="border-box"==l.boxSizing,d=0;d<n;d++){var u=i[d],f=l[u],p=parseFloat(f);
// any 'auto', 'medium' value will be 0
h[u]=isNaN(p)?0:p}var v=h.paddingLeft+h.paddingRight,g=h.paddingTop+h.paddingBottom,m=h.marginLeft+h.marginRight,y=h.marginTop+h.marginBottom,b=h.borderLeftWidth+h.borderRightWidth,w=h.borderTopWidth+h.borderBottomWidth,E=c&&o,S=t(l.width);!1!==S&&(h.width=S+(
// add padding and border unless it's already including it
E?0:v+b));var x=t(l.height);return!1!==x&&(h.height=x+(
// add padding and border unless it's already including it
E?0:g+w)),h.innerWidth=h.width-(v+b),h.innerHeight=h.height-(g+w),h.outerWidth=h.width+m,h.outerHeight=h.height+y,h}}return a})?n.call(e,i,e,t):n)||(t.exports=s)},
/***/eOdm:
/***/function(t,e,i){var n,s;// Flickity.Cell
window,n=[i("cPna")],void 0===(s=function(t){return function(t,e){"use strict";function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){
// reset style
this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},
// setDefaultTarget v1 method, backwards compatibility, remove in v3
n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){
// render position of cell with in slider
var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},
/**
 * @param {Integer} factor - 0, 1, or -1
**/
n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}(0,t)}.apply(e,n))||(t.exports=s)},
/***/gTkP:
/***/function(t,e,i){var n,s;// Flickity main
// Flickity main
!function(o,r){n=[i("7T+4"),i("cPna"),i("SAmA"),i("eOdm"),i("EF0F"),i("bxKv")],void 0===(s=function(t,e,i,n,s,r){return function(t,e,i,n,s,o,r){"use strict";
// vars
var a=t.jQuery,l=t.getComputedStyle,h=t.console;function c(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}
// -------------------------- Flickity -------------------------- //
// globally unique identifiers
var d=0,u={};
// internal store of all Flickity intances
function f(t,e){var i=n.getQueryElement(t);if(i){
// do not initialize twice on same element
if(this.element=i,this.element.flickityGUID){var s=u[this.element.flickityGUID];return s.option(e),s}
// add jQuery
a&&(this.$element=a(this.element)),
// options
this.options=n.extend({},this.constructor.defaults),this.option(e),
// kick things off
this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,
// adaptiveHeight: false,
cellAlign:"center",
// cellSelector: undefined,
// contain: false,
freeScrollFriction:.075,// friction when free-scrolling
friction:.28,// friction when selecting
namespaceJQueryEvents:!0,
// initialIndex: 0,
percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},
// hash of methods triggered on _create()
f.createMethods=[];var p=f.prototype;
// inherit EventEmitter
n.extend(p,e.prototype),p._create=function(){
// add id for Flickity.data
var e=this.guid=++d;
// add listeners from on option
for(var i in this.element.flickityGUID=e,// expando
u[e]=this,// associate via id
// initial properties
this.selectedIndex=0,
// how many frames slider has been in same position
this.restingFrames=0,
// initial physics properties
this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",
// create viewport & slider
this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this),this.options.on){var n=this.options.on[i];this.on(i,n)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},
/**
 * set options
 * @param {Object} opts
 */
p.option=function(t){n.extend(this.options,t)},p.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();
// move initial cell elements so they can be loaded as cells
var t=this._filterFindCellElements(this.element.children);c(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),
// get cells from children
this.reloadCells(),this.options.accessibility&&(
// allow element to focusable
this.element.tabIndex=0,
// listen for key presses
this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),
// flag for initial activation, for using initialIndex
this.isInitActivated=!0,
// ready event. #493
this.dispatchEvent("ready")}},
// slider positions the cells
p._createSlider=function(){
// slider element does all the positioning
var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},
// goes through all children
p.reloadCells=function(){
// collection of item elements
this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},
/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
p._makeCells=function(t){var e=this._filterFindCellElements(t),i=e.map(function(t){return new s(t,this)},this);
// create new Flickity for collection
return i},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},
// positions all cells
p.positionCells=function(){
// size all cells
this._sizeCells(this.cells),
// position all cells
this._positionCells(0)},
/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
p._positionCells=function(t){t=t||0,
// also measure maxCellHeight
// start 0 if positioning all cells
this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;
// get cellX
if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}
// keep track of cellX for wrap-around
this.slideableWidth=e,
// slides
this.updateSlides(),
// contain slides target
this._containSlides(),
// update slidesWidth
this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},
/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},
// --------------------------  -------------------------- //
p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide,i=e?"marginRight":"marginLeft",n=this._getCanCellFit();this.cells.forEach(function(e,s){
// just add cell if first cell in slide
if(t.cells.length){var r=t.outerWidth-t.firstMargin+(e.size.outerWidth-e.size[i]);n.call(this,s,r)?t.addCell(e):(
// doesn't fit, new slide
t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(e))}else t.addCell(e)},this),
// last slide
t.updateTarget(),
// update .selectedSlide
this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};
// default, group by width of slide
// parse '75%
if("number"==typeof t){
// group by number. 3 -> [0,1,2], [3,4,5], ...
var e=parseInt(t,10);return function(t){return t%e!==0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},
// alias _init for jQuery plugin .flickity()
p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var v={
// cell align, then based on origin side
center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};p.setCellAlign=function(){var t=v[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){
// only for wrap-around
if(this.options.wrapAround){
// unshift previous cells
this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);
// get before cells
// initial gap
var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),
// get after cells
// ending gap between last cell and end of gallery viewport
t=this.size.innerWidth-this.cursorPosition,
// start cloning at first cell, working forwards
this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(
// keep adding cells until the cover the initial gap
var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},
// ----- contain ----- //
// contain cell targets so no excess sliding
p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);
// contain each cell target
this.slides.forEach(function(t){s?
// all cells fit inside gallery
t.target=n*this.cellAlign:(
// contain to bounds
t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},
// -----  ----- //
/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),a&&this.$element){var s=
// default trigger with type if no event
t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){
// create jQuery event
var o=a.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},
// -------------------------- select -------------------------- //
/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t]))
// bail if invalid index
{var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),
// events
this.dispatchEvent("select",null,[t]),
// change event if new index
t!=s&&this.dispatchEvent("change",null,[t]),
// old v1 event name, remove in v3
this.dispatchEvent("cellSelect")}},
// wraps position for wrapAround, to move to closest slide. #113
p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&e>1))return t;var i=n.modulo(t,e),s=Math.abs(i-this.selectedIndex),o=Math.abs(i+e-this.selectedIndex),r=Math.abs(i-e-this.selectedIndex);
// go to shortest
!this.isDragSelect&&o<s?t+=e:!this.isDragSelect&&r<s&&(t-=e),
// wrap position so slider is within normal area
t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];
// selectedIndex could be outside of slides, if triggered before resize()
t&&(
// unselect previous selected slide
this.unselectSelectedSlide(),
// update new selected slide
this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),
// HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
// Remove in v3?
this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;
// already activated, select previous selectedIndex
if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{
// select with selector string
if(t&&"string"==typeof t&&this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;
// select with number
t&&this.slides[t]&&(e=t),
// select instantly
this.select(e,!1,!0)}},
/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
p.selectCell=function(t,e,i){
// get cell
var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){
// get index of slides that has cell
for(var e=0;e<this.slides.length;e++)if(-1!=this.slides[e].cells.indexOf(t))return e},
// -------------------------- get cells -------------------------- //
/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
p.getCell=function(t){
// loop through cells to get the one that matches
for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},
/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},
/**
 * get cell elements
 * @returns {Array} cellElems
 */
p.getCellElements=function(){return this.cells.map(function(t){return t.element})},
/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
p.getParentCell=function(t){
// first check if elem is cell
var e=this.getCell(t);return e||(
// try to get parent cell elem
t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},
/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},
/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
p.queryCell=function(t){if("number"==typeof t)
// use number as index
return this.cells[t];if("string"==typeof t){
// do not select invalid selectors from hash: #123, #/. #791
if(t.match(/^[#\.]?[\d\/]/))return;
// use string as selector, get element
t=this.element.querySelector(t)}
// get cell from element
return this.getCell(t)},
// -------------------------- events -------------------------- //
p.uiChange=function(){this.emitEvent("uiChange")},
// keep focus on element when child UI elements are clicked
p.childUIPointerDown=function(t){
// HACK iOS does not allow touch events to bubble up?!
"touchstart"!=t.type&&t.preventDefault(),this.focus()},
// ----- resize ----- //
p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),
// wrap values
this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");
// update selected index for group slides, instant
// TODO: position can be lost between groups of various numbers
var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},
// watches the :after property, activates/deactivates
p.watchCSS=function(){this.options.watchCSS&&(
// activate if :after { content: 'flickity' }
-1!=l(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},
// ----- keydown ----- //
// go previous/next if left/right keys pressed
p.onkeydown=function(t){
// only work if element is in focus
var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={
// left arrow
37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},
// right arrow
39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},
// ----- focus ----- //
p.focus=function(){
// TODO remove scrollTo once focus options gets more support
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
var e=t.pageYOffset;this.element.focus({preventScroll:!0}),
// hack to fix scroll jump after focus, #76
t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},
// -------------------------- destroy -------------------------- //
// deactivate all Flickity functionality, but keep stuff available
p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),
// destroy cells
this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),
// move child elements back into element
c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),
// set flags
this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),a&&this.$element&&a.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},
// -------------------------- prototype -------------------------- //
n.extend(p,r),
// -------------------------- extras -------------------------- //
/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
f.data=function(t){var e=(t=n.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},n.htmlInit(f,"flickity"),a&&a.bridget&&a.bridget("flickity",f);
// set internal jQuery, for Webpack + jQuery v3, #478
return f.setJQuery=function(t){a=t},f.Cell=s,f.Slide=o,f}(o,t,e,i,n,s,r)}.apply(e,n))||(t.exports=s)}(window)},
/***/iqmN:
/***/function(t,e,i){var n,s;
/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
/*jshint browser: true, unused: true, undef: true, strict: true */
/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */
/*jshint browser: true, unused: true, undef: true, strict: true */
!function(o,r){n=[i("xcA+")],void 0===(s=function(t){return function(t,e){"use strict";
// -------------------------- Unidragger -------------------------- //
function i(){}
// inherit Unipointer & EvEmitter
var n=i.prototype=Object.create(e.prototype);
// ----- bind start ----- //
n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},
/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
n._bindHandles=function(e){for(
// bind each handle
var i=(
// munge isAdd, default to true
e=void 0===e||e)?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),
// touch-action: none to override browser touch gestures. metafizzy/flickity#540
t.PointerEvent&&(o.style.touchAction=n)}},
// prototype so it can be overwriteable by Flickity
n._touchActionValue="none",
// ----- start event ----- //
/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
n.pointerDown=function(t,e){var i=this.okayPointerDown(t);i&&(
// track start event position
this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),
// bind move and end events
this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};
// nodes that have text fields
var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};
// input types that do not have text fields
// -----  ----- //
// dismiss inputs with text fields. flickity#403, flickity#404
return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},
// kludge to blur previously focused input
n.pointerDownBlur=function(){var t=document.activeElement;
// do not blur body for IE10, metafizzy/flickity#117
t&&t.blur&&t!=document.body&&t.blur()},
// ----- move event ----- //
/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},
// base pointer move logic
n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};
// start drag if pointer has moved far enough to start drag
return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},
// condition if pointer has moved far enough to start drag
n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},
// ----- end event ----- //
/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):
// pointer didn't move enough for drag to start
this._staticClick(t,e)},
// -------------------------- drag -------------------------- //
// dragStart
n._dragStart=function(t,e){this.isDragging=!0,
// prevent clicks
this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},
// dragMove
n._dragMove=function(t,e,i){
// do not drag if not dragging yet
this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},
// dragEnd
n._dragEnd=function(t,e){
// set flags
this.isDragging=!1,
// re-enable clicking async
setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},
// ----- onclick ----- //
// handle all clicks and prevent clicks when dragging
n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},
// ----- staticClick ----- //
// triggered after pointer down & up with no/tiny movement
n._staticClick=function(t,e){
// ignore emulated mouse up clicks
this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),
// set flag for emulated clicks 300ms after touchend
"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,
// reset flag after 300ms
setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},
// ----- utils ----- //
i.getPointerPoint=e.getPointerPoint,i}(o,t)}.apply(e,n))||(t.exports=s)}(window)},
/***/nMSW:
/***/function(t,e,i){var n,s,o;
/*!
 * Flickity v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */window,s=[i("gTkP"),i("WnVB"),i("+Lqo"),i("S07k"),i("Mwck"),i("Ii6x"),i("DKqM")],void 0===(o="function"===typeof(n=function(t){
/*jshint strict: false*/
return t})?n.apply(e,s):n)||(t.exports=o)},
/***/"xcA+":
/***/function(t,e,i){var n,s;
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
/*jshint browser: true, undef: true, unused: true, strict: true */
!function(o,r){n=[i("7T+4")],void 0===(s=function(t){return function(t,e){"use strict";function i(){}
// inherit EvEmitter
var n=i.prototype=Object.create(e.prototype);n.bindStartEvent=function(t){this._bindStartEvent(t,!0)},n.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},
/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
n._bindStartEvent=function(e,i){var n=(
// munge isAdd, default to true
i=void 0===i||i)?"addEventListener":"removeEventListener",s="mousedown";
// default to mouse events
t.PointerEvent?
// Pointer Events
s="pointerdown":"ontouchstart"in t&&(
// Touch Events. iOS Safari
s="touchstart"),e[n](s,this)},
// trigger handler methods for events
n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},
// returns the touch that we're keeping track of
n.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},
// ----- start event ----- //
n.onmousedown=function(t){
// dismiss clicks from right or middle buttons
var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},n.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},n.onpointerdown=function(t){this._pointerDown(t,t)},
/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
n._pointerDown=function(t,e){
// dismiss right click and other pointers
// button = 0 is okay, 1-4 not
t.button||this.isPointerDown||(this.isPointerDown=!0,
// save pointer identifier to match up touch events
this.pointerIdentifier=void 0!==e.pointerId?
// pointerId for pointer events, touch.indentifier for touch events
e.pointerId:e.identifier,this.pointerDown(t,e))},n.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};
// hash of events to be bound after start event
var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};
// -----  ----- //
return n._bindPostStartEvents=function(e){if(e){
// get proper events to match start event
var i=s[e.type];
// bind events to node
i.forEach(function(e){t.addEventListener(e,this)},this),
// save these arguments
this._boundPointerEvents=i}},n._unbindPostStartEvents=function(){
// check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},
// ----- move event ----- //
n.onmousemove=function(t){this._pointerMove(t,t)},n.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},n.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},
/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
n._pointerMove=function(t,e){this.pointerMove(t,e)},
// public
n.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},
// ----- end event ----- //
n.onmouseup=function(t){this._pointerUp(t,t)},n.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},n.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},
/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
n._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},
// public
n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},
// ----- pointer done ----- //
// triggered on pointer up & pointer cancel
n._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},n._pointerReset=function(){
// reset properties
this.isPointerDown=!1,delete this.pointerIdentifier},n.pointerDone=function(){},
// ----- pointer cancel ----- //
n.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},n.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},
/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
n._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},
// public
n.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},
// -----  ----- //
// utility function for getting x/y coords from event
i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}(o,t)}.apply(e,n))||(t.exports=s)}(window)}}]);