//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          case '!':
            processedArgs[key] = args[key];
            break;

          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
 * @file
 * JavaScript for autologout.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Attaches the batch behavior for autologout.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.autologout = {
    attach: function (context, settings) {
      if (context !== document) {
        return;
      }

      var paddingTimer;
      var theDialog;
      var t;
      var localSettings;

      // Activity is a boolean used to detect a user has
      // interacted with the page.
      var activity;

      // Timer to keep track of activity resets.
      var activityResetTimer;

      // Prevent settings being overridden by ajax callbacks by cloning it.
      localSettings = jQuery.extend(true, {}, settings.autologout);

      // Add timer element to prevent detach of all behaviours.
      var timerMarkup = $('<div id="timer"></div>').hide();
      $('body').append(timerMarkup);

      if (localSettings.refresh_only) {
        // On pages where user shouldn't be logged out, don't set the timer.
        t = setTimeout(keepAlive, localSettings.timeout);
      }
      else {
        // Set no activity to start with.
        activity = false;

        // Bind formUpdated events to preventAutoLogout event.
        $('body').bind('formUpdated', function (event) {
          $(event.target).trigger('preventAutologout');
        });

        // Bind formUpdated events to preventAutoLogout event.
        $('body').bind('mousemove', function (event) {
          $(event.target).trigger('preventAutologout');
        });

        // Support for CKEditor.
        if (typeof CKEDITOR !== 'undefined') {
          CKEDITOR.on('instanceCreated', function (e) {
            e.editor.on('contentDom', function () {
              e.editor.document.on('keyup', function (event) {
                // Keyup event in ckeditor should prevent autologout.
                $(e.editor.element.$).trigger('preventAutologout');
              });
            });
          });
        }

        $('body').bind('preventAutologout', function (event) {
          // When the preventAutologout event fires, we set activity to true.
          activity = true;

          // Clear timer if one exists.
          clearTimeout(activityResetTimer);

          // Set a timer that goes off and resets this activity indicator after
          // a minute, otherwise sessions never timeout.
          activityResetTimer = setTimeout(function () {
            activity = false;
          }, 60000);
        });

        // On pages where the user should be logged out, set the timer to popup
        // and log them out.
        t = setTimeout(init, localSettings.timeout);
      }

      function init() {
        var noDialog = settings.autologout.no_dialog;
        if (activity) {
          // The user has been active on the page.
          activity = false;
          refresh();
        }
        else {
          // The user has not been active, ask them if they want to stay logged
          // in and start the logout timer.
          paddingTimer = setTimeout(confirmLogout, localSettings.timeout_padding);
          // While the countdown timer is going, lookup the remaining time. If
          // there is more time remaining (i.e. a user is navigating in another
          // tab), then reset the timer for opening the dialog.
          Drupal.Ajax['autologout.getTimeLeft'].autologoutGetTimeLeft(function (time) {
            if (time > 0) {
              clearTimeout(paddingTimer);
              t = setTimeout(init, time);
            }
            else {
              // Logout user right away without displaying a confirmation dialog.
              if (noDialog) {
                logout();
                return;
              }
              theDialog = dialog();
            }
          });
        }
      }

      function dialog() {
        var buttons = {};
        buttons[Drupal.t('Yes')] = function () {
          $(this).dialog("destroy");
          clearTimeout(paddingTimer);
          refresh();
        };

        buttons[Drupal.t('No')] = function () {
          $(this).dialog("destroy");
          logout();
        };

        return $('<div id="autologout-confirm">' + localSettings.message + '</div>').dialog({
          modal: true,
          closeOnEscape: false,
          width: "auto",
          dialogClass: 'autologout-dialog',
          title: localSettings.title,
          buttons: buttons,
          close: function (event, ui) {
            logout();
          }
        });
      }

      // A user could have used the reset button on the tab/window they're
      // actively using, so we need to double check before actually logging out.
      function confirmLogout() {
        $(theDialog).dialog('destroy');

        Drupal.Ajax['autologout.getTimeLeft'].autologoutGetTimeLeft(function (time) {
          if (time > 0) {
            t = setTimeout(init, time);
          }
          else {
            logout();
          }
        });
      }

      function logout() {
        if (localSettings.use_alt_logout_method) {
          window.location = drupalSettings.path.baseUrl + "autologout_ahah_logout";
        }
        else {
          $.ajax({
            url: drupalSettings.path.baseUrl + "autologout_ahah_logout",
            type: "POST",
            beforeSend: function (xhr) {
              xhr.setRequestHeader('X-Requested-With', {
                toString: function (){
                  return '';
                }
              });
            },
            success: function () {
              window.location = localSettings.redirect_url;
            },
            error: function (XMLHttpRequest, textStatus) {
              if (XMLHttpRequest.status === 403 || XMLHttpRequest.status === 404) {
                window.location = localSettings.redirect_url;
              }
            }
          });
        }
      }

      /**
       * Get the remaining time.
       *
       * Use the Drupal ajax library to handle get time remaining events
       * because if using the JS Timer, the return will update it.
       *
       * @param function callback(time)
       *   The function to run when ajax is successful. The time parameter
       *   is the time remaining for the current user in ms.
       */
      Drupal.Ajax.prototype.autologoutGetTimeLeft = function (callback) {
        var ajax = this;

        if (ajax.ajaxing) {
          return false;
        }
        ajax.options.success = function (response, status) {
          if (typeof response == 'string') {
            response = $.parseJSON(response);
          }
          if (typeof response[0].command === 'string' && response[0].command === 'alert') {
            // In the event of an error, we can assume user has been logged out.
            window.location = localSettings.redirect_url;
          }

          callback(response[1].settings.time);

          response[0].data = '<div id="timer" style="display: none;">' + response[0].data + '</div>';

          // Let Drupal.ajax handle the JSON response.
          return ajax.success(response, status);
        };

        try {
          $.ajax(ajax.options);
        }
        catch (e) {
          ajax.ajaxing = false;
        }
      };

      Drupal.Ajax['autologout.getTimeLeft'] = Drupal.ajax({
        base: null,
        element: document.body,
        url: drupalSettings.path.baseUrl + 'autologout_ajax_get_time_left',
        event: 'autologout.getTimeLeft',
        error: function (XMLHttpRequest, textStatus) {
          // Disable error reporting to the screen.
        }
      });

      /**
       * Handle refresh event.
       *
       * Use the Drupal ajax library to handle refresh events because if using
       * the JS Timer, the return will update it.
       *
       * @param function timerFunction
       *   The function to tell the timer to run after its been restarted.
       */
      Drupal.Ajax.prototype.autologoutRefresh = function (timerfunction) {
        var ajax = this;

        if (ajax.ajaxing) {
          return false;
        }

        ajax.options.success = function (response, status) {
          if (typeof response === 'string') {
            response = $.parseJSON(response);
          }
          if (typeof response[0].command === 'string' && response[0].command === 'alert') {
            // In the event of an error, we can assume the user has been logged out.
            window.location = localSettings.redirect_url;
          }

          t = setTimeout(timerfunction, localSettings.timeout);
          activity = false;

          // Wrap response data in timer markup to prevent detach of all behaviors.
          response[0].data = '<div id="timer" style="display: none;">' + response[0].data + '</div>';

          // Let Drupal.ajax handle the JSON response.
          return ajax.success(response, status);
        };

        try {
          $.ajax(ajax.options);
        }
        catch (e) {
          ajax.ajaxing = false;
        }
      };

      Drupal.Ajax['autologout.refresh'] = Drupal.ajax({
        base: null,
        element: document.body,
        url: drupalSettings.path.baseUrl + 'autologout_ahah_set_last',
        event: 'autologout.refresh',
        error: function (XMLHttpRequest, textStatus) {
          // Disable error reporting to the screen.
        }
      });

      function keepAlive() {
        Drupal.Ajax['autologout.refresh'].autologoutRefresh(keepAlive);
      }

      function refresh() {
        Drupal.Ajax['autologout.refresh'].autologoutRefresh(init);
      }

      // Check if the page was loaded via a back button click.
      var $dirty_bit = $('#autologout-cache-check-bit');
      if ($dirty_bit.length !== 0) {
        if ($dirty_bit.val() === '1') {
          // Page was loaded via back button click, we should refresh the timer.
          refresh();
        }

        $dirty_bit.val('1');
      }
    }
  };

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  function displace(broadcast) {
    offsets = Drupal.displace.offsets = calculateOffsets();
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function show() {
        openDialog({ modal: false });
      },
      showModal: function showModal() {
        openDialog({ modal: true });
      },

      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var $buttons = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};

        element_settings.progress = { type: 'throbber' };

        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialogRenderer = $(this).data('dialog-renderer');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        element_settings.url = $(this.form).attr('action');

        element_settings.setClick = true;

        element_settings.event = 'click';

        element_settings.progress = { type: 'throbber' };
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var pathText = void 0;
    var responseText = void 0;
    var readyStateText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', { '!statusText': $.trim(xmlhttp.statusText) });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', { '!responseText': $.trim(xmlhttp.responseText) });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', { '!readyState': xmlhttp.readyState }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', { '!customMessage': customMessage }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = element_settings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function beforeSubmit(form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (element_settings.dialogType || 'ajax');
    if (element_settings.dialogRenderer) {
      wrapper += '.' + element_settings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', { '!url': ajax.url }));
      }
      return ajax.eventResponse(this, event);
    });

    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.element_settings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response, status) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = void 0;

      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      $wrapper[method]($new_content);

      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      if ($new_content.parents('html').length > 0) {
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
 * @file
 * Provides CrazyEgg script.
 */

(function (drupalSettings) {

  setTimeout(
    function () {
      var a = document.createElement("script");
      var b = document.getElementsByTagName('script')[0];

      a.src = document.location.protocol +
      "//script.crazyegg.com/" + drupalSettings.crazyegg.crazyegg.account_path +
      "?" + Math.floor(new Date().getTime() / 3600000);
      a.async = true;
      a.type = "text/javascript";
      b.parentNode.insertBefore(a, b)
    }, 1
  );
})(drupalSettings);
;
/**
 * @file Common data layer helper.
 */

(function ($) {
  Drupal.behaviors.dataLayer = {

    /**
     * The language prefix list (no blank).
     *
     * @return {array}
     */
    langPrefixes: function langPrefixes() {
      var languages = Drupal.settings.dataLayer.languages,
          langList = [];

      for (var lang in languages) {
        if (languages[lang].prefix !== '') {
          langList.push(languages[lang].prefix);
        }
      }
      return langList;

      // With Underscore.js dependency.
      //var list = _.pluck(Drupal.settings.datalayer.languages, 'prefix');
      //return _.filter(list, function(lang) { return lang });
    },

    /**
     * Drupal behavior.
     */
    attach: function() { return }

  };
})(jQuery);
;
/**
 * @file
 * Extends Drupal object with mass custom js objects
 *
 * Loads google custom search results page FORM + RESULTS (loads once)
 * Using Mass.gov custom search engine at cse.google.com
 * - api v2 js code
 * - header and mobile nav search forms js in mass_search.forms.js
 *
 * Improves accessibility (a11y) to google custom search dynamic content with Drupal.announce().
 */

(function (Drupal) {
  'use strict';

  // ****** Mobile Search button should open mobile menu ******
  var mobileSearchButton = document.querySelector('.ma__header .ma__header__search .ma__header-search .ma__button-search');

  if (mobileSearchButton !== null) {
    mobileSearchButton.addEventListener('click', function (event) {
      if (document.documentElement.clientWidth <= 620) {
        event.preventDefault();
        document.querySelector('body').classList.toggle('show-menu');
      }
    });
  }
  // Adds labels to all GCSE search inputs on the page
  function adjustStandardGCSEsearchForAccessibility() {
    var inputContainer = document.querySelectorAll('.ma__search-banner__form td.gsc-input');
    var inputLabel;
    var actualInput;
    for (var i = 0, j = inputContainer.length; i < j; i++) {
      inputLabel = document.createElement('label');
      inputLabel.classList.add('visually-hidden');
      inputLabel.textContent = 'Search terms';
      actualInput = inputContainer[i].querySelector('input');
      // Add placeholder
      actualInput.setAttribute('placeholder', 'Search Mass.gov');

      // Add label to search input
      inputLabel.setAttribute('for', actualInput.id);
      inputContainer[i].insertBefore(inputLabel, actualInput);
    }
  }

  function adjustMarkupToSearchPage() {
    var suggestedLinksHeadline = document.createElement('h2');
    var searchResultsHeadline = document.createElement('h2');

    suggestedLinksHeadline.textContent = 'Suggested Links';
    suggestedLinksHeadline.classList.add('ma__search-heading');
    searchResultsHeadline.textContent = 'Search Results';
    searchResultsHeadline.classList.add('ma__search-heading');
  }

  function initialize() {
    adjustStandardGCSEsearchForAccessibility();

    if (document.body.classList.contains('search-results-page')) {
      adjustMarkupToSearchPage();
    }
  }

  // Google CSE is already loaded on all pages because of the autocomplete functionality.
  // So, we just kick things off, not need to load google libraries.
  initialize();

})(Drupal);



;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/*!
 * jQuery Once v2.1.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

!function e(t,a,n){function o(s,i){if(!a[s]){if(!t[s]){var u="function"==typeof require&&require;if(!i&&u)return u(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=a[s]={exports:{}};t[s][0].call(d.exports,function(e){var a=t[s][1][e];return o(a?a:e)},d,d.exports,e,t,a,n)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,a){"use strict";t.exports=function(e,t,a){function n(e,a,n){if("number"==typeof n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var n="expires="+o.toUTCString();t.cookie=e+"="+a+"; "+n+"; path=/"}else t.cookie=e+"="+a+"; path=/"}function o(e){var a="; "+t.cookie,n=a.split("; "+e+"=");if(2==n.length)return n.pop().split(";").shift()}return{setCookie:n,getCookie:o}}(window,document)},{}],2:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e){var t="true";try{t=window.getComputedStyle(e[0],":before").getPropertyValue("content").replace(/\"/g,"")}catch(a){}return"false"!==t},t.exports=a["default"]},{}],3:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML},t.exports=a["default"]},{}],4:[function(e,t,a){"use strict";t.exports=function(e){return void 0!==Handlebars.templates&&void 0!==Handlebars.templates[e]||jQuery.ajax({url:ma.themePath+"/js/templates/"+e+".html",success:function(t){void 0===Handlebars.templates&&(Handlebars.templates={}),Handlebars.templates[e]=Handlebars.compile(t)},async:!1}),Handlebars.templates[e]}},{}],5:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a.extend(a.expr[":"],{focusable:function(e,t,n){return a(e).is("a, button, :input, [tabindex]")}})}(window,document,jQuery),t.exports=a["default"]},{}],6:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){var o=function(e,n){var o=n.endpoint,r=n.renderPattern,s=n.transform,i=this,u=a(e);return i.updatePattern=function(){i.getPatternData().then(function(e){if(s&&"function"==typeof s&&(e=s(e)),!a.isEmptyObject(e))try{i.renderPattern(r,e)}catch(t){console.error(t)}}).fail(function(){console.error("MA::AjaxPattern::Could not get data at endpoint:",o)})},i.renderPattern=function(e,n){Twig.twig({href:i.getPatternPath(e),id:e,allowInlineIncludes:!0,namespaces:{base:ma.patternPaths["@base"],atoms:ma.patternPaths["@atoms"],molecules:ma.patternPaths["@molecules"],organisms:ma.patternPaths["@organisms"],templates:ma.patternPaths["@templates"],pages:ma.patternPaths["@pages"],meta:ma.patternPaths["@meta"]},async:!0,load:function(e){var o=e.render(n);u.html(o),a(t).trigger("ma:AjaxPattern:Render",[{el:u}])}})},i.getPatternPath=function(e){var t=e.split("/"),a=t.shift(),n=t.join("/");return ma.patternPaths[a]+n},i.getPatternData=function(){if(!o)throw new Error("MA::AjaxPattern::An endpoint argument is required.");var e=a.Deferred();return a.ajax({type:"GET",url:o,cache:!0,dataType:"json"}).done(function(t){e.resolve(t)}).fail(function(t,a,n){console.error("MA::AjaxPattern::Ajax Error: ",a),e.reject()}),e},i.updatePattern(),!0};a.fn.MassAjaxPattern=function(e){return this.each(function(t,n){var r=a(n);if(!r.data("mass-ajax-data")){var s=new o(this,e);r.data("mass-ajax-data",s)}})},a.fn.MassAjaxPattern.defaults={endpoint:"",pattern:"",transform:n}}(window,document,jQuery),t.exports=a["default"]},{}],7:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/getHandlebarTemplate.js"),r=n(o),s=e("../helpers/sticky.js"),i=n(s),u=e("../vendor/bower_components/moment/src/moment"),l=n(u),d=e("../helpers/getElementOuterHtml.js"),c=n(d);a["default"]=function(e,t,a,n){function o(e){return e.data.hasOwnProperty("selectors")?void!function(){k(e.data.selectors.container,e.data.selectors.parent);var t=n(e.data.selectors.container).find(e.data.selectors.parent),a=e.page?e.page:1;e.data.items.forEach(function(e){e.isActive&&e.page===a&&t.append(e.markup)});var o=t.find(e.data.selectors.row).first();o.find(":focusable").eq(0).focus(),e.data.selectors.hasOwnProperty("map")&&e.data.selectors.map&&i["default"].init(n(e.data.selectors.map))}():(console.warn("masterData.selectors must be set for this listing."),!1)}function s(e){for(var t=e.data,a=e.targetPage?e.targetPage:1,n=t.totalPages,o=[],r=1;r<=n;r++)o.push({text:r.toString(),active:r===a});return t.pagination.prev={text:"Previous",disabled:1===a},t.pagination.next={text:"Next",disabled:a===n},t.pagination.pages=o,t.pagination.currentPage=a,t.pagination}function u(e){var t=0,a=0,n=e.page?e.page:1,o=e.data,r=o.resultsHeading;o.items.map(function(e){e.isActive&&(a+=1,e.page===n&&(t+=1))});var s=Number(o.maxItems)*Number(n)-(Number(o.maxItems)-1),i=s+(Number(t)-1);return r.totalResults=a,r.numResults=s+" - "+i,r}function d(e,t){var a=(0,r["default"])(t),n=[];return e.forEach(function(e,t){var o=f(e);n[t]=a(o)}),n}function f(e){var t=[];n.map(e.tags,function(e,a){t[a]=e}),e.tags=t;var a={tagsFormatted:e.tags.map(m)};return Object.assign({},e,a)}function m(e){return{label:e.label,svg:h(e.id)}}function h(e){return(0,c["default"])(n(".js-filter-by-tags").find("#"+e).siblings("svg")[0])}function p(e,t){return e.some(function(e){return e.hasOwnProperty("type")&&e.type===t})}function g(e,t){return e.filter(function(e){return e.type===t}).map(function(e){return e.value})}function _(e){return e.filterData.hasOwnProperty("clearedFilter")?v(e.data,e.filterData):e.filterData.formData}function v(e,t){if("all"!==t.clearedFilter){var a=e.resultsHeading.tags;return a.filter(function(e){return e.value!==t.clearedFilter.value})}return[]}function y(e,t){var a=1,n=0,o=e.map(function(e){return e.isActive&&(n<t?e.page=a:(a+=1,n=0,e.page=a),n+=1),e});return{items:o,totalPages:a}}function k(e,t){n(e).find(t).html("")}function M(e,t){var a=_({data:e,filterData:t});if(e.resultsHeading.tags=a,p(a,"tag")){var n=g(a,"tag");return O(n,e)}return p(a,"dateRange")?Y(a,e):x(e)}function w(e){var t=e.items.sort(function(e,t){var a=e.data.title.text.toUpperCase(),n=t.data.title.text.toUpperCase();return a<n?-1:a>n?1:0}),a=y(t,e.maxItems);return e.items=a.items,e.totalPages=a.totalPages,e}function b(e,t){"undefined"!=typeof ma.geocoder&&ma.geocoder.geocode({address:e},function(e,a){if(a===google.maps.GeocoderStatus.OK){var n=e[0];return t(n)}console.warn("Geocode was not successful for the following reason: "+a)})}function j(e,t){"undefined"!=typeof ma.geocoder&&ma.geocoder.geocode({placeId:e},function(e,a){if(a===google.maps.GeocoderStatus.OK){var n=e[0];return t(n)}console.warn("Geocode was not successful for the following reason: "+a)})}function x(e){return e.items=e.items.map(function(e){return e.isActive=!0,e}),e}function O(e,t){return t.items=t.items.map(function(t){return t.isActive=P(t.data.tags,e),t}),t}function P(e,t){return t.every(function(t){return Boolean(e.filter(function(e){return Object.keys(e).map(function(t){return e[t]}).indexOf(t)!==-1}).length)})}function T(e,t,a,n,o){var r=Math.PI*e/180,s=Math.PI*a/180,i=(Math.PI*t/180,Math.PI*n/180,t-n),u=Math.PI*i/180,l=Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(u);return l=Math.acos(l),l=180*l/Math.PI,l=60*l*1.1515,"K"===o&&(l=1.609344*l),"N"===o&&(l=.8684*l),l}function S(e){return e.hasOwnProperty("type")&&"start"===e.type?(0,l["default"])(e.data.startTimestamp,"M/DD/YYYY"):!(!e.hasOwnProperty("type")||"end"!==e.type)&&(e.data.endTimestamp?(0,l["default"])(e.data.endTimestamp,"M/DD/YYYY"):"")}function D(e,t){var a=t?t:"start",n="",o="",r=e.items.sort(function(e,t){"end"!==a?(n=e.start,o=t.start):(n=e.end,o=t.end);var r=e.data.title.text.toUpperCase(),s=t.data.title.text.toUpperCase();return n.isBefore(o,"minute")?-1:n.isAfter(o,"minute")?1:r<s?-1:r>s?1:0}),s=y(r,e.maxItems);return e.items=s.items,e.totalPages=s.totalPages,e}function Y(e,t){t.items=t.items.map(function(t){return t.isActive=C(t,e),t});var a=y(t.items,t.maxItems);return t.items=a.items,t.totalPages=a.totalPages,t}function C(e,t){var a="",n="";return t.map(function(e){"dateRange"==e.type&&(a=(0,l["default"])(e.start,"M/DD/YYYY")),"dateRange"==e.type&&(n=(0,l["default"])(e.end,"M/DD/YYYY"))}),n&&a?!(!e.start.isSameOrAfter(a,"day")||!e.start.isSameOrBefore(n,"day")):!!e.start.isSame(a,"day")}return{renderListingPage:o,transformPaginationData:s,transformResultsHeading:u,filterListingData:M,hasFilter:p,getFilterValues:g,filterDataByTags:O,filterDataByDateTags:Y,transformActiveTagsData:_,paginateItems:y,clearListingPage:k,sortDataAlphabetically:w,sortDataByDate:D,geocodeAddressString:b,geocodePlaceId:j,makeAllActive:x,calculateDistance:T,transformListing:d,makeMoment:S}}(window,document,void 0,jQuery),t.exports=a["default"]},{"../helpers/getElementOuterHtml.js":3,"../helpers/getHandlebarTemplate.js":4,"../helpers/sticky.js":9,"../vendor/bower_components/moment/src/moment":145}],8:[function(e,t,a){"use strict";t.exports=function(e,t,a){function n(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}return n}(window,document)},{}],9:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cssControlCode.js"),r=n(o);a["default"]=function(e,t,a,n){function o(t){u=t,l="relative"===u.parent().css("position")?u.parent():u.parent().offsetParent(),u.attr("data-sticky","top"),s(),e.setTimeout(function(){s()},1e3),a(e).resize(function(){s(),i()}),a(e).scroll(function(){i()})}function s(){var e=(0,r["default"])(u);h&&!e&&u.removeAttr("style"),h=e,h&&(h=e,d=u.height(),c=l.width(),m=l.offset().top,f=m+l.outerHeight(!0)-u.height(),u.width(c))}function i(){if(!h)return u.attr("data-sticky","top"),!1;var t=a(e).scrollTop(),n=u.attr("data-sticky"),o="top"!==n&&t<=m,r="middle"!==n&&t<f&&t>m,s="bottom"!==n&&t>=f;o?u.attr("data-sticky","top"):r?u.attr("data-sticky","middle"):s&&u.attr("data-sticky","bottom")}var u=n,l=n,d=n,c=n,f=n,m=n,h=!1;return{init:o}}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cssControlCode.js":2}],10:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a){function n(e,t,n){t||(t=250);var o=a,r=a;return function(){var a=n||this,s=+new Date,i=arguments;o&&s<o+t?(clearTimeout(r),r=setTimeout(function(){o=s,e.apply(a,i)},t)):(o=s,e.apply(a,i))}}return n}(window,document),t.exports=a["default"]},{}],11:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}e("./helpers/jQueryExtend.js"),e("./helpers/jQueryExtend_ajaxPattern.js");var o=e("./modules/ajaxPattern.js"),r=(n(o),e("./modules/ajaxPatternOverride.js")),s=(n(r),e("./modules/accordions.js")),i=(n(s),e("./modules/googleMap.js")),u=(n(i),e("./modules/back2top.js")),l=(n(u),e("./modules/clickable.js")),d=(n(l),e("./modules/dropdown.js")),c=(n(d),e("./modules/emergencyAlerts.js")),f=(n(c),e("./modules/eventFilters")),m=(n(f),e("./modules/eventListingInteractive")),h=(n(m),e("./modules/footnote.js")),p=(n(h),e("./modules/formValidation.js")),g=(n(p),e("./modules/headerTags.js")),_=(n(g),e("./modules/hideAlert.js")),v=(n(_),e("./modules/inlineOverlay.js")),y=(n(v),e("./modules/imageFill.js")),k=(n(y),e("./modules/keywordSearch.js")),M=(n(k),e("./modules/locationFilters.js")),w=(n(M),e("./modules/locationListing.js")),b=(n(w),e("./modules/mainNav.js")),j=(n(b),e("./modules/mobileNav.js")),x=(n(j),e("./modules/orgSelector.js")),O=(n(x),e("./modules/pagination.js")),P=(n(O),e("./modules/pikaday.js")),T=(n(P),e("./modules/responsiveVideo.js")),S=(n(T),e("./modules/resultsHeading.js")),D=(n(S),e("./modules/richText.js")),Y=(n(D),e("./modules/scrollAnchors.js")),C=(n(Y),e("./modules/formInputs.js")),L=(n(C),e("./modules/utilNav.js")),R=(n(L),e("./modules/stickyTOC.js"));n(R)},{"./helpers/jQueryExtend.js":5,"./helpers/jQueryExtend_ajaxPattern.js":6,"./modules/accordions.js":12,"./modules/ajaxPattern.js":13,"./modules/ajaxPatternOverride.js":14,"./modules/back2top.js":15,"./modules/clickable.js":16,"./modules/dropdown.js":17,"./modules/emergencyAlerts.js":18,"./modules/eventFilters":19,"./modules/eventListingInteractive":20,"./modules/footnote.js":21,"./modules/formInputs.js":22,"./modules/formValidation.js":23,"./modules/googleMap.js":24,"./modules/headerTags.js":25,"./modules/hideAlert.js":26,"./modules/imageFill.js":27,"./modules/inlineOverlay.js":28,"./modules/keywordSearch.js":29,"./modules/locationFilters.js":30,"./modules/locationListing.js":31,"./modules/mainNav.js":32,"./modules/mobileNav.js":33,"./modules/orgSelector.js":34,"./modules/pagination.js":35,"./modules/pikaday.js":36,"./modules/responsiveVideo.js":37,"./modules/resultsHeading.js":38,"./modules/richText.js":39,"./modules/scrollAnchors.js":40,"./modules/stickyTOC.js":41,"./modules/utilNav.js":42}],12:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cssControlCode.js"),r=n(o);a["default"]=function(e,t,a,n){function o(t){var n=a(this),o=n.find(".js-accordion-link"),s=n.find(".js-accordion-content"),i=n.find(".js-accordion-status"),u=s.attr("id")||"accordion"+(t+1),l=(0,r["default"])(n),d=n.hasClass("is-open");s.attr("id",u),o.attr("aria-expanded",d).attr("aria-controls",u),d&&s.stop(!0,!0).slideDown(),o.on("click",function(e){l&&(e.preventDefault(),d=n.hasClass("is-open"),d?(s.stop(!0,!0).slideUp(),i.attr("aria-label","click to show info")):(s.stop(!0,!0).slideDown(),i.attr("aria-label","click to hide info")),o.attr("aria-expanded",!d),n.toggleClass("is-open"))}),a(e).resize(function(){var e=(0,r["default"])(n);e===l||e||(s.removeAttr("style"),n.removeClass("is-open"),o.attr("aria-expanded","false")),l=e}).resize()}a(".js-accordion").each(function(e){o.apply(this,[e])}),a(t).on("ma:AjaxPattern:Render",function(e,t){var a=t.el;a.find(".js-accordion").length&&a.find(".js-accordion").each(function(e){var t=100,a=t+e;o.apply(this,[a])})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cssControlCode.js":2}],13:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-ajax-pattern").each(function(){var e=a(this).data("ma-ajax-endpoint");if(!e)return console.error("MA::AjaxPattern::This pattern requires an endpoint to be passed in as an argument."),!1;var t=a(this).data("ma-ajax-render-pattern");if(!t)return console.error("MA::AjaxPattern::This pattern requires a child pattern to be passed as an argument."),!1;try{a(this).MassAjaxPattern({endpoint:e,renderPattern:t})}catch(n){console.error(n)}})}(window,document,jQuery),t.exports=a["default"]},{}],14:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-ajax-pattern-override").each(function(){var e=a(this).data("ma-ajax-endpoint");if(!e)return console.error("MA::AjaxPattern::This pattern requires an endpoint to be passed in as an argument."),!1;var t=a(this).data("ma-ajax-render-pattern");if(!t)return console.error("MA::AjaxPattern::This pattern requires a child pattern to be passed as an argument."),!1;try{a(this).MassAjaxPattern({endpoint:e,renderPattern:t,transform:function(e){return data=e,data.emergencyAlerts.alerts=data.emergencyAlerts.these.are.alerts,data}})}catch(n){console.error(n)}})}(window,document,jQuery),t.exports=a["default"]},{}],15:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){var o=(a(".js-footer"),250);a(".js-back2top").each(function(){var t=a(this);t.on("click",function(e){e.preventDefault();try{a("html, body").stop(!0,!0).animate({scrollTop:0},"750")}catch(e){a("body").scrollTop(0)}return a("#main-content").focus(),!1}),a(e).on("scroll",function(){var n=a(e).scrollTop();n>o?t.removeClass("is-hidden"):t.addClass("is-hidden")})})}(window,document,jQuery),t.exports=a["default"]},{}],16:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-clickable").each(function(){a(this).click(function(t){t.preventDefault();var n=a(this).find(".js-clickable-link").first(),o=n.attr("href");"_blank"===n.attr("target")?e.open(o):e.location=o})})}(window,document,jQuery),t.exports=a["default"]},{}],17:[function(e,t,a){"use strict";var n=document.querySelectorAll(".js-dropdown");if(null!==n)for(var o=n.length,r=function(e){var t=n[e],a=t.querySelector(".js-dropdown-select"),o=t.querySelector(".js-dropdown-link");return null===a||null===o?"break":void(a.onchange=function(){var e="undefined"==typeof this.selectedIndex?window.event.srcElement:this;o.innerText=e.text||e.options[e.selectedIndex].text})},s=0;s<o;s++){var i=r(s);if("break"===i)break}},{}],18:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cookies.js"),r=n(o);a["default"]=function(e,t,a,n){function o(){var e=!0,t=a(this).data("id"),n="emergency-alerts"+t,o=r["default"].getCookie(n),s=a(this).find(".js-accordion-link");s.on("click",function(){e=!e,r["default"].setCookie(n,e)}),"undefined"!=typeof o&&"false"===o&&(e=!1,s.attr("aria-expanded",e)),e&&(e=!1,s.first().trigger("click"))}a(".js-emergency-alerts").each(function(){o.apply(this)}),a(t).on("ma:AjaxPattern:Render",function(e,t){var a=t.el;a.find(".js-emergency-alerts").length&&a.find(".js-emergency-alerts").each(function(){o.apply(this)})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cookies.js":1}],19:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){function o(e){var t=e.clearedFilter;"all"===t?i(e):s(e)}function r(e){var t=a(e.$form),n=t.find(".js-event-filter-by-location"),o=t.find(".js-filter-by-tags"),r=t.find(".js-filter-by-date-range__start"),s=t.find(".js-filter-by-date-range__end"),i=[];if(n.find("input").length){var u=n.find("input").val();u&&i.push({type:"location",text:u,value:u})}var l="",d="",c="",f=!1;return r.find("input").length&&(d=r.find("input").val(),d?l+=d:(d=moment().format("M/DD/YYYY"),f=!0)),s.find("input").length&&(c=s.find("input").val(),c&&(d&&!f?l+=" - "+c:l="Today - "+c)),l&&i.push({type:"dateRange",text:l,value:l,start:d,end:c}),o.find("input:checked").each(function(){i.push({type:"tag",text:a(this).next("label").text(),value:a(this).val()})}),i}function s(e){var t=a(e.$form),n=t.find(".js-event-filter-by-location"),o=t.find(".js-filter-by-date-range__start"),r=t.find(".js-filter-by-date-range__end"),s=t.find(".js-filter-by-tags"),i=e.clearedFilter;return"location"===i.type?void n.find("input").val(""):"dateRange"===i.type?(o.find("input").val(""),void r.find("input").val("")):void("tag"===i.type&&s.find("input[type=checkbox][value="+i.value+"]").prop("checked",!1))}function i(e){var t=a(e.$form),n=a(".js-event-filter-by-location",t).find("input"),o=a(".js-filter-by-date-range__start",t).find("input"),r=a(".js-filter-by-date-range__end",t).find("input");n.length&&n.val(""),o.length&&o.val(""),r.length&&r.val(""),"undefined"!=typeof $tags&&$tags.find("input:checked").prop("checked",!1)}a(".js-event-filters").each(function(){var e=a(this);a(t).on("ma:LibrariesLoaded:GoogleMaps",function(){var n=a(".js-event-filter-by-location",e),o=n.find("input");if(o.length){var r=t.getElementById(o.attr("id")),s=n.data("maPlaceBoundsSwLat"),i=n.data("maPlaceBoundsSwLng"),u=n.data("maPlaceBoundsNeLat"),l=n.data("maPlaceBoundsNeLng"),d=new google.maps.LatLngBounds(new google.maps.LatLng(s,i),new google.maps.LatLng(u,l)),c={bounds:d,strictBounds:!0,types:["geocode"],componentRestrictions:{country:"us"},placeIdOnly:!0};ma.autocomplete=new google.maps.places.Autocomplete(r,c)}}),e.on("ma:FormFilter:DataUpdated",function(t,a){o({clearedFilter:a.clearedFilter,$form:e})}),e.submit(function(t){t.preventDefault();var n=r({$form:a(this)});e.trigger("ma:EventFilter:FormSubmitted",[{formData:n}])})})}(window,document,jQuery),t.exports=a["default"]},{}],20:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/listing.js"),r=n(o);a["default"]=function(e,t,a,n){function o(e,t){var n=a.Deferred(),o={},i=r["default"].filterListingData(e,t),u=i.resultsHeading.tags,l=r["default"].sortDataByDate(i),d="";if(r["default"].hasFilter(u,"location")){d=r["default"].getFilterValues(u,"location")[0];var c=ma.autocomplete.getPlace();ma.geocoder=ma.geocoder?ma.geocoder:new google.maps.Geocoder,"undefined"!=typeof c&&c.hasOwnProperty("place_id")?r["default"].geocodePlaceId(c.place_id,function(e){o.data=s(e,i),o.geocode=e,n.resolve(o)}):r["default"].geocodeAddressString(d,function(e){o.data=s(e,i),o.geocode=e,n.resolve(o)})}else n.resolve({data:l,place:d});return n}function s(e,t){var a=e.geometry.location.lat(),n=e.geometry.location.lng();for(var o in t.items)t.items.hasOwnProperty(o)&&(t.items[o].distance=r["default"].calculateDistance(t.items[o].data.position.lat,t.items[o].data.position.lng,a,n,"K"));t.items.sort(function(e,t){return e.distance-t.distance});var s=r["default"].paginateItems(t.items,t.maxItems);return t.items=s.items,t.totalPages=s.totalPages,t}var i=".js-event-listing-interactive",u=".js-event-listing-items",l=".js-event-listing-item";a(".js-event-listing-interactive").each(function(e){function t(e){c.trigger("ma:ResultsHeading:DataUpdated",[e.data.resultsHeading]),f.trigger("ma:Pagination:DataUpdated",[e.data.pagination]),e.clearedFilter&&m.trigger("ma:FormFilter:DataUpdated",[e.clearedFilter])}function n(e){var t=[],n=[];a.map(e.eventListing.events,function(e,t){n[t]=e}),e.eventListing.events=n;var o=[];a.map(e.pagination.pages,function(e,t){o[t]=e}),e.pagination.pages=o;var d=1;o.forEach(function(e){e.active&&(d=Number(e.text))});var c=e.eventListing.events,f=r["default"].transformListing(c,"eventListingRow");return t.maxItems=e.maxItems?e.maxItems:c.length,t.resultsHeading=e.resultsHeading,t.items=s(c,f,t.maxItems),t.pagination=e.pagination,t.pagination.currentPage=d,t.totalPages=Math.ceil(t.items.length/t.maxItems),t.selectors={},t.selectors.container=i,t.selectors.parent=u,t.selectors.row=l,t}function s(e,t,a){var n=[];return e.forEach(function(o,s){var i=e[s].date.endDay.length;n[s]={isActive:!0,page:Math.ceil((s+1)/a),markup:t[s],data:e[s],start:r["default"].makeMoment({data:e[s].date,type:"start"}),end:i?r["default"].makeMoment({data:e[s].date,type:"end"}):i}}),n}var d=a(this),c=d.find(".js-results-heading"),f=d.find(".js-pagination"),m=d.find(".js-event-filters"),h=ma.eventListingInteractive[e],p=[];p=n(h),m.on("ma:EventFilter:FormSubmitted",function(e,a){o(p,a).done(function(e){p=e.data,e.data.resultsHeading=r["default"].transformResultsHeading({data:e.data}),e.data.pagination=r["default"].transformPaginationData({data:e.data}),r["default"].renderListingPage({data:e.data}),t(e)})}),c.on("ma:ResultsHeading:ActiveTagClicked",function(e,a){o(p,a).done(function(e){p=e.data,e.clearedFilter=a,p=e.data,e.data.resultsHeading=r["default"].transformResultsHeading({data:e.data}),e.data.pagination=r["default"].transformPaginationData({data:e.data}),r["default"].renderListingPage({data:e.data}),t(e)})}),f.on("ma:Pagination:Pagination",function(e,a){var n=a,o=p.pagination.currentPage?p.pagination.currentPage:1;"next"===a&&(n=o+1),"previous"===a&&(n=o-1),p.pagination=r["default"].transformPaginationData({data:p,targetPage:n}),p.resultsHeading=r["default"].transformResultsHeading({data:p,page:n}),r["default"].renderListingPage({data:p,page:n}),t({data:p})})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/listing.js":7}],21:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cssControlCode.js"),r=n(o);a["default"]=function(e,t,a,n){a(".js-footnote").each(function(){function t(e){var t=e.offset()||0;if(l){var n=a(".js-sticky-header").height()||0,o=a(".js-scroll-anchors").height()||0;t.top=t.top-n-o}return t}function n(e,t){a("html,body").stop(!0,!0).animate({scrollTop:e},"750",function(){t&&a(t).focus()})}var o=a(this),s=o.find(".js-footnote-link"),i=s.clone(),u=null,l=(0,r["default"])(o);"#"!==s.attr("href")&&(u=a(s.attr("href")),i.text(""),o.find(".js-footnote-message p:last-child").append(i),a(e).resize(function(){l=(0,r["default"])(o)}),o.on("click",".js-footnote-link",function(e){e.preventDefault();var o=a(this).attr("href"),r=t(a(o).parent());n(r.top,o)}),u.click(function(e){e.preventDefault();var o=a(this).attr("href"),r=t(a(o));n(r.top,o)}))})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cssControlCode.js":2}],22:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a("textarea[maxlength]").each(function(){var e=a(this),t=e.attr("maxlength"),n=t-e.val().length,o=n+"/"+t;e.wrap('<div class="ma__textarea__wrapper"></div>'),e.parent().attr("data-char-left",o),e.on("keyup mouseup blur",function(){n=t-e.val().length,o=n+"/"+t,e.parent().attr("data-char-left",o)})}),a('input[type="text"][pattern="[0-9]*"]').on("keydown",function(e){a.inArray(e.keyCode,[46,8,9,27,13,32])!==-1||65==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||67==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||88==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()}),a('input[type="number"], .js-input-number').each(function(){var e=a(this),t=a('<button type="button" aria-label="increase value" class="ma__input-number__plus"></button>'),n=a('<button type="button" aria-label="decrease value" class="ma__input-number__minus"></button>');e.val();"number"!==e.attr("type")&&e.on("keydown",function(e){a.inArray(e.keyCode,[46,8,9,27,13,110,190])!==-1||65==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||67==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||88==e.keyCode&&(e.ctrlKey===!0||e.metaKey===!0)||e.keyCode>=35&&e.keyCode<=39||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()}),t.on("click",function(){var t=parseInt(e.val().trim(),10);t!==t&&(t=0),e.val(t+1)}),n.on("click",function(){var t=parseInt(e.val(),10);t!==t&&(t=0),e.val(t-1)}),e.wrap('<div class="ma__input-number"></div>'),e.parent().append(t,n)})}(window,document,jQuery),t.exports=a["default"]},{}],23:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){function o(e){e.removeClass("has-error"),e.prev(".ma__error-msg").removeClass("has-error")}function r(e){e.addClass("has-error"),e.prev(".ma__error-msg").addClass("has-error")}function s(e){var t=arguments.length<=1||arguments[1]===n?"text":arguments[1],a=!1;switch(t){case"email":a=!!e.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);break;default:a=0!==e.length}return a}a("form").each(function(){var e=a(this),t=[],n=e.find(".js-error-list");a(".js-is-required").each(function(){var e=a(this),n=e.data("type"),o=e.val(),r=s(o,n);t.push({type:n,valid:r,$el:e}),a(this).data("index",t.length)}),0!==t.length&&e.find('button[type="submit"], input[type="submit"]').on("click",function(i){var u=!0;if(t.forEach(function(e){var t=e.$el.val();e.valid=s(t,e.type),e.valid?o(e.$el):(u=!1,r(e.$el))}),!u){i.preventDefault(),e.addClass("has-error");var l=e.offset();a("html,body").stop(!0,!0).animate({scrollTop:l.top-100},"750",function(){n.focus()})}})})}(window,document,jQuery),t.exports=a["default"]},{}],24:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/getHandlebarTemplate.js"),r=n(o);a["default"]=function(e,t,a,n){function o(){m=!0,clearInterval(h),clearTimeout(p),a(".js-google-map").each(function(e){var t=a(this);f=ma.googleMapData[e].maxItems?ma.googleMapData[e].maxItems:ma.googleMapData[e].markers.length;var n=ma.googleMapData[e],o={scrollwheel:!1},r=Object.assign({},n.map,o),i=new google.maps.Map(this,r),u=new google.maps.LatLngBounds,d=s(i,n.markers);c(d,i,u),t.trigger("ma:GoogleMap:MapInitialized",[d]),google.maps.event.addListenerOnce(i,"idle",function(){var e=a(".js-google-map").find('div[title="Show street map"],div[title="Show street map with terrain"],div[title="Show satellite imagery"],div[title="Zoom in to show 45 degree view"],div[title="Show imagery with street names"],div[title="Pan up"],div[title="Pan down"],div[title="Pan left"],div[title="Pan right"],div[title="Return to the last result"],div[title="Zoom in"],div[title="Zoom out"],img[title="Rotate map 90 degrees"],.gmnoprint area');e.each(function(e,t){a(t).attr({role:"button",tabindex:"0","aria-label":t.title}).bind("keydown",function(e){13==e.which&&(e.preventDefault(),a(t).trigger("click"))})})}),t.on("ma:GoogleMap:MapRecenter",function(e,t){if("undefined"==typeof d[t])return!1;var a=d[t];i.setCenter(a.getPosition());for(var n in d)d[n].open&&d[n].hideInfo();a.showInfo()}),t.on("ma:GoogleMap:MarkerBounce",function(e,t){if("undefined"==typeof d[t])return!1;var a=d[t];i.setCenter(a.getPosition()),i.setZoom(15),a.bounce()}),t.on("ma:GoogleMap:MarkersUpdated",function(e,t){d=l({dataMarkers:t.markers,map:i,markers:d,place:!!t.place&&t.place});for(var a in d)d[a].open&&d[a].hideInfo()})})}function s(e,t){var a=[];return t.forEach(function(t){var n={position:new google.maps.LatLng({lat:t.position.lat,lng:t.position.lng}),label:t.label,infoWindow:t.infoWindow,title:"Marker: "+t.infoWindow.name},o=new google.maps.Marker(n),s=i(n.infoWindow),u=(0,r["default"])("googleMapInfo"),l=u(s),d=new google.maps.InfoWindow({content:l}),c=null;o.addListener("click",function(){for(var e in a)a[e].open&&a[e].hideInfo();o.showInfo()}),o.showInfo=function(){d.open(e,o),o.open=!0},o.hideInfo=function(){d.close(e,o),o.open=!1},o.bounce=function(){clearTimeout(c),o.setAnimation(null),o.setAnimation(google.maps.Animation.BOUNCE),c=setTimeout(function(){o.setAnimation(null)},3e3)},a.push(o)}),a}function i(e){var t={phoneFormatted:u(e.phone),faxFormatted:u(e.fax)};return Object.assign({},e,t)}function u(e){var t="1"===e[0]?e.substring(1):e;return t.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")}function l(e){d(e.markers);var t=new google.maps.LatLngBounds;return e.place&&ma.autocomplete.getPlace()&&t.extend(e.place.geometry.location),c(e.dataMarkers,e.map,t),1===e.dataMarkers.length&&e.map.setZoom(16),e.dataMarkers}function d(e){for(var t=0;t<e.length;t++)e[t].setMap(null)}function c(e,t,a){var n=e.length<f?e.length:f;e.forEach(function(e,o){o<n&&(e.setMap(t),a.extend(e.position))}),e.length>1&&t.fitBounds(a)}if(a(".js-google-map").length&&"undefined"!=typeof ma.googleMapData)var f=!1,m=!1,h=setInterval(function(){e.google&&e.google.maps&&!m&&o()},100),p=setTimeout(function(){clearInterval(h)},12e4)}(window,document,jQuery),t.exports=a["default"]},{"../helpers/getHandlebarTemplate.js":4}],25:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-header-tag-link").each(function(e){var t=a(this),n=a(".js-header-tag-button",t),o=a("a:nth-child(n+4)",t),r=t.attr("id")||"headerTags"+(e+1),s=t.hasClass("is-open");t.attr("id",r),o.length&&(n.attr("aria-expanded",s).attr("aria-controls",r),n.show()),n.on("click",function(e){e.preventDefault(),t.toggleClass("is-open"),t.hasClass("is-open")?(n.attr("aria-expanded","true"),o.show()):(n.attr("aria-expanded","false"),o.hide())})})}(window,document,jQuery),t.exports=a["default"]},{}],26:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cookies.js"),r=n(o);a["default"]=function(e,t,a,n){
function o(){var e=a(this),t=e.find(".js-header-alert-link"),n=e.data("id"),o="Alert"+n,s=365,i=r["default"].getCookie(o);"hide"!==i&&e.fadeIn().fadeOut("fast").fadeIn("slow"),t.on("click",function(){r["default"].setCookie(o,"hide",s),e.stop(!0,!0).fadeOut()})}a(".js-header-alert").each(function(){o.apply(this)}),a(t).on("ma:AjaxPattern:Render",function(e,t){var a=t.el;a.find(".js-header-alert").length&&a.find(".js-header-alert").each(function(){o.apply(this)})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cookies.js":1}],27:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){function o(){var e=a(".main-content").width();a(".ma__figure--full, .ma__iframe--full").each(function(){var t=a(this),n=t.position().top;n>r&&t.css("width",e)})}var r=a(".sidebar").outerHeight(!0)+100,s=n;a(e).on("load",function(){o()}),a(e).resize(function(){"number"==typeof s&&e.clearTimeout(s),s=e.setTimeout(function(){o()},250)})}(window,document,jQuery),t.exports=a["default"]},{}],28:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/throttle.js");n(o);a["default"]=function(e,t,a,n){function o(){var e=a(u).attr("id");if(!e){var t="overlay-"+Math.floor(1e5*Math.random());a(i).attr("id",t),a(l).attr("aria-controls, id")}}function r(){var e=a(this).closest(s).find(i),t=e.hasClass("is-open");a("body").toggleClass("scroll-disabled",!t),e.toggleClass("is-open",!t),a(l+"[aria-expanded="+!t+"]").parents(d).focus()}var s=".js-toc-container",i=".js-inline-overlay",u=".js-inline-overlay-content",l=".js-inline-overlay-toggle",d=".js-inline-overlay-title";o(),a(t).on("click",l,r),a(t).keydown(function(e){27===e.keyCode&&a(i).hasClass("is-open")&&r()})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/throttle.js":10}],29:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-keyword-search").each(function(){var e=a(this),t=e.find("form");t.on("submit",function(t){t.preventDefault(),e.addClass("is-dirty")}),t.on("reset",function(){e.removeClass("is-dirty")})})}(window,document,jQuery),t.exports=a["default"]},{}],30:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){function o(e){var t=e.clearedFilter;"all"===t?i(e):s(e)}function r(e){var t=a(e.$form),n=t.find(".js-filter-by-location"),o=t.find(".js-filter-by-tags"),r=[];if(n.find("input").length){var s=n.find("input").val();s&&r.push({type:"location",text:s,value:s})}return o.find("input:checked").each(function(){r.push({type:"tag",value:a(this).val(),text:a(this).siblings("label").text()})}),r}function s(e){var t=a(e.$form),n=t.find(".js-filter-by-location"),o=t.find(".js-filter-by-tags"),r=e.clearedFilter;return"location"===r.type?void n.find("input").val(""):void("tag"===r.type&&o.find("input[type=checkbox][value="+r.value+"]").prop("checked",!1))}function i(e){var t=a(e.$form),n=a(".js-filter-by-tags",t),o=a(".js-filter-by-location",t).find("input");o.length&&o.val(""),n.find("input:checked").prop("checked",!1)}a(".js-location-filters").each(function(){var e=a(this);a(t).on("ma:LibrariesLoaded:GoogleMaps",function(){var n=a(".js-filter-by-location",e),o=n.find("input");if(o.length){var r=t.getElementById(o.attr("id")),s=n.data("maPlaceBoundsSwLat"),i=n.data("maPlaceBoundsSwLng"),u=n.data("maPlaceBoundsNeLat"),l=n.data("maPlaceBoundsNeLng"),d=new google.maps.LatLngBounds(new google.maps.LatLng(s,i),new google.maps.LatLng(u,l)),c={bounds:d,strictBounds:!0,types:["geocode"],componentRestrictions:{country:"us"},placeIdOnly:!0};ma.autocomplete=new google.maps.places.Autocomplete(r,c)}}),e.on("ma:FormFilter:DataUpdated",function(t,a){o({clearedFilter:a.clearedFilter,$form:e})}),e.submit(function(t){t.preventDefault();var n=r({$form:a(this)});e.trigger("ma:LocationFilter:FormSubmitted",[{formData:n}])})})}(window,document,jQuery),t.exports=a["default"]},{}],31:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/sticky.js"),r=n(o),s=e("../helpers/listing.js"),i=n(s);a["default"]=function(e,t,a,n){function o(e,t){var n=[],o=[];a.map(e.imagePromos.items,function(e,t){o[t]=e}),e.imagePromos.items=o;var r=[];a.map(e.pagination.pages,function(e,t){r[t]=e}),e.pagination.pages=r;var u=1;r.forEach(function(e){e.active&&(u=Number(e.text))});var l=e.imagePromos.items,d=i["default"].transformListing(l,"locationListingRow");return n.maxItems=e.maxItems?e.maxItems:e.imagePromos.items.length,n.resultsHeading=e.resultsHeading,n.items=s(l,d,t,n.maxItems),n.pagination=e.pagination,n.pagination.currentPage=u,n.totalPages=Math.ceil(n.items.length/n.maxItems),n.selectors={},n.selectors.container=g,n.selectors.parent=_,n.selectors.row=m,n.selectors.map=v,n}function s(e,t,a,n){var o=[];return a.forEach(function(a,r){o[r]={isActive:!0,page:Math.ceil((r+1)/n),marker:a,markup:t[r],data:e[r]}}),o}function u(e,t){var n=a.Deferred(),o={},r=i["default"].filterListingData(e,t),s=i["default"].sortDataAlphabetically(r),u="";if(i["default"].hasFilter(r.resultsHeading.tags,"location")){u=i["default"].getFilterValues(r.resultsHeading.tags,"location")[0];var l=ma.autocomplete.getPlace();ma.geocoder=ma.geocoder?ma.geocoder:new google.maps.Geocoder,"undefined"!=typeof l&&l.hasOwnProperty("place_id")?i["default"].geocodePlaceId(l.place_id,function(e){o.data=d(e,r),o.geocode=e,n.resolve(o)}):i["default"].geocodeAddressString(u,function(e){o.data=d(e,r),o.geocode=e,n.resolve(o)})}else n.resolve({data:s,place:u});return n}function l(e){var t=e.data,a=e.page?e.page:1;return t.items.filter(function(e){return e.isActive&&e.page===a}).map(function(e){return e.marker})}function d(e,t){for(var a in t.items)t.items.hasOwnProperty(a)&&(t.items[a].marker.distance=google.maps.geometry.spherical.computeDistanceBetween(e.geometry.location,t.items[a].marker.getPosition()));t.items.sort(function(e,t){return e.marker.distance-t.marker.distance});var n=i["default"].paginateItems(t.items,t.maxItems);return t.items=n.items,t.totalPages=n.totalPages,t.place=e,t}var c="is-active",f="is-marker-bounce",m=".js-location-listing-link",h=m+"."+c,p=m+"."+f,g=".js-location-listing-results",_=".js-image-promos",v=".js-location-listing-map";a(".js-location-listing").each(function(e){function n(e){_.trigger("ma:ResultsHeading:DataUpdated",[e.data.resultsHeading]),g.trigger("ma:GoogleMap:MarkersUpdated",[{markers:e.markers,place:e.place}]),v.trigger("ma:Pagination:DataUpdated",[e.data.pagination]),e.clearedFilter&&y.trigger("ma:FormFilter:DataUpdated",[e.clearedFilter])}var s=a(this),d=s.find(".js-location-listing-map"),g=s.find(".js-google-map"),_=s.find(".js-results-heading"),v=s.find(".js-pagination"),y=s.find(".js-location-filters");r["default"].init(d);var k=ma.locationListing[e],M=[];g.on("ma:GoogleMap:MapInitialized",function(e,t){M=o(k,t)}),a(t).on("ma:LibrariesLoaded:GoogleMaps",function(){s.on("click",m,function(e){var t=a(e.currentTarget).index();g.trigger("ma:GoogleMap:MapRecenter",t),s.find(h).removeClass(c),a(e.currentTarget).addClass(c);var n=g.offset().top;a("html,body").stop(!0,!0).animate({scrollTop:n},"750")}),s.on("mouseenter focusin",m,function(e){if(s.find(h).removeClass(c),a(e.currentTarget).hasClass(f))return!1;s.find(p).removeClass(f),a(e.currentTarget).addClass(f);var t=a(e.currentTarget).index();g.trigger("ma:GoogleMap:MarkerBounce",t)}),s.on("mouseleave",m,function(e){s.find(p).removeClass(f)}),y.on("ma:LocationFilter:FormSubmitted",function(e,t){u(M,t).done(function(e){M=e.data,e.data.resultsHeading=i["default"].transformResultsHeading({data:e.data}),e.data.pagination=i["default"].transformPaginationData({data:e.data}),i["default"].renderListingPage({data:e.data}),e.markers=l({data:e.data}),n(e)})}),_.on("ma:ResultsHeading:ActiveTagClicked",function(e,t){u(M,t).done(function(e){M=e.data,e.clearedFilter=t,M=e.data,e.data.resultsHeading=i["default"].transformResultsHeading({data:e.data}),e.data.pagination=i["default"].transformPaginationData({data:e.data}),i["default"].renderListingPage({data:e.data}),e.markers=l({data:e.data}),n(e)})}),v.on("ma:Pagination:Pagination",function(e,t){var a=t,o=M.pagination.currentPage?M.pagination.currentPage:1;"next"===t&&(a=o+1),"previous"===t&&(a=o-1),M.pagination=i["default"].transformPaginationData({data:M,targetPage:a}),M.resultsHeading=i["default"].transformResultsHeading({data:M,page:a}),i["default"].renderListingPage({data:M,page:a});var r=l({data:M,page:a});n({data:M,markers:r})})})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/listing.js":7,"../helpers/sticky.js":9}],32:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){var o=e.innerWidth;a(e).resize(function(){o=e.innerWidth}),a(".js-main-nav").each(function(){function e(e){a("body").removeClass(i),u.find("."+r).removeClass(r),o<=c?e.addClass(s):e.stop(!0,!0).slideUp("fast",function(){e.addClass(s).slideDown(0)})}function n(e){a("body").addClass(i),o<=c?e.addClass(r).removeClass(s):e.stop(!0,!0).delay(200).slideUp(0,function(){e.addClass(r).removeClass(s).slideDown("fast")})}var r="is-open",s="is-closed",i="show-submenu",u=a(this),l=u.find(".js-main-nav-toggle"),d=u.find(".js-main-nav-toggle, .js-main-nav-top-link"),c=840;d.on("keydown",function(s){var i=a(this),l=u.find(".ma__main-nav__top-link"),d=i.hasClass(r),f=u.find(".js-main-nav-content."+r),m=a(t.activeElement),h=o<c,p=m.parents(".ma__main-nav__item"),g=p.find(".ma__main-nav__top-link"),_=i.find(".ma__main-nav__subitem .ma__main-nav__link"),v=_.length,y=_.index(m),k=s.keyCode,M={skip:9===k,close:27===k,left:37===k,right:39===k,up:38===k,down:40===k};if((M.close||M.left||M.right||M.up||M.down)&&s.preventDefault(),M.skip)return e(f),i.removeClass(r),void g.attr("aria-expanded","false");if((M.up||M.down)&&(!h||d)||M.right&&h&&!d)return d||(n(p.find(".js-main-nav-content")),g.attr("aria-expanded","true"),i.addClass(r)),y+=M.up?-1:1,h?y===v-1&&(y+=M.up?-1:1):(0===y||y>=v)&&(y+=M.up?-1:1),y=(y%v+v)%v,void _[y].focus();if(M.close||h&&M.left)return e(f),i.removeClass(r),void g.focus().attr("aria-expanded","false");if((M.left||M.right)&&!h||(M.up||M.down)&&h&&!d){var w=l.index(g),b=M.left||M.up,j=l.length;return e(f),g.attr("aria-expanded","false"),w+=b?-1:1,w=(w%j+j)%j,void l[w].focus()}}),d.on("mouseenter",function(e){if(a(this).children("button").attr("aria-expanded","true"),o>c){var t=a(this).find(".js-main-nav-content");n(t)}}),d.on("mouseleave",function(t){if(a(this).children("button").attr("aria-expanded","false"),o>c){var n=a(this).find(".js-main-nav-content");e(n)}}),l.children("button, a").on("click",function(t){var s=a(this),i=s.parent(),l=i.find(".js-main-nav-content"),d=u.find(".js-main-nav-content."+r),f=l.hasClass(r);o<=c?(t.preventDefault(),i.addClass(r),n(l),s.attr("aria-expanded","true")):(e(d),s.attr("aria-expanded","false"),f||(n(l),s.attr("aria-expanded","true")))}),a(".js-close-sub-nav").on("click",function(){var t=u.find(".js-main-nav-content."+r);e(t)}),a(".js-header-menu-button").click(function(){var t=u.find(".js-main-nav-content."+r);e(t)})})}(window,document,jQuery),t.exports=a["default"]},{}],33:[function(e,t,a){"use strict";var n=document.querySelector(".js-header-menu-button");null!==n&&n.addEventListener("click",function(e){e.preventDefault(),document.querySelector("body").classList.toggle("show-menu")});var o=document.querySelector(".js-header-search-menu .js-header-search-form");null!==o&&o.addEventListener("submit",function(e){window.innerWidth>620||(e.preventDefault(),document.querySelector("body").classList.toggle("show-menu"))})},{}],34:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/getHandlebarTemplate.js"),r=n(o);a["default"]=function(e,t,a,n){a(".js-org-selector").each(function(e){function t(e){return"undefined"==typeof o.organizations[e]?(u.html(""),!1):(u.html(s(o.organizations[e])),!0)}var n=a(this),o=orgSelector[e],s=(0,r["default"])("orgInfo"),i=n.find("select").first(),u=n.find(".js-org-info");t(i.val()),i.change(function(){t(i.val())})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/getHandlebarTemplate.js":4}],35:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/getHandlebarTemplate.js"),r=n(o);a["default"]=function(e,t,a,n){function o(e){if(e.data){var t=s(e.data);e.$el.html(t)}}if(0!==a(".js-pagination").length){Handlebars.registerHelper("compare",function(e,t,a){if(arguments.length<3)throw new Error("Handlerbars Helper 'compare' needs 2 parameters");var n=a.hash.operator||"==",o={"==":function(e,t){return e==t},"===":function(e,t){return e===t},"!=":function(e,t){return e!=t},"<":function(e,t){return e<t},">":function(e,t){return e>t},"<=":function(e,t){return e<=t},">=":function(e,t){return e>=t},"typeof":function(e,t){return typeof e==t}};if(!o[n])throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+n);var r=o[n](e,t);return r?a.fn(this):a.inverse(this)});var s=(0,r["default"])("pagination"),i=".js-pagination-prev",u=".js-pagination-next",l=".js-pagination-page";a(".js-pagination").each(function(){var e=a(this);e.on("click",i,function(){e.trigger("ma:Pagination:Pagination",["previous"])}),e.on("click",u,function(){e.trigger("ma:Pagination:Pagination",["next"])}),e.on("click",l,function(t){var n=a(t.target).data("page");e.trigger("ma:Pagination:Pagination",[n])}),e.on("ma:Pagination:DataUpdated",function(t,a){o({data:a,$el:e})})})}}(window,document,jQuery),t.exports=a["default"]},{"../helpers/getHandlebarTemplate.js":4}],36:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-input-date").each(function(){var e=a(this),t=e.data("restrict"),n=new Pikaday({field:this,format:"MM/DD/YYYY"});switch(t){case"max":n.setMaxDate(new Date);break;case"min":n.setMinDate(new Date)}e.attr("type","text")})}(window,document,jQuery),t.exports=a["default"]},{}],37:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-ma-responsive-video").fitVids()}(window,document,jQuery),t.exports=a["default"]},{}],38:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/getHandlebarTemplate.js"),r=n(o);a["default"]=function(e,t,a,n){function o(e){if(e.data){var t=s(e.data);e.$el.html(t)}}var s=(0,r["default"])("resultsHeading"),i=".js-results-heading-clear",u=".js-results-heading-tag";a(".js-results-heading").each(function(){var e=a(this);e.on("click",i,function(){e.trigger("ma:ResultsHeading:ActiveTagClicked",[{clearedFilter:"all"}])}),e.on("click",u,function(t){var n={type:a(t.target).data("ma-filter-type"),value:a(t.target).data("ma-filter-value"),text:a(t.target).text()};e.trigger("ma:ResultsHeading:ActiveTagClicked",[{clearedFilter:n}])}),e.on("ma:ResultsHeading:DataUpdated",function(t,a){o({data:a,$el:e})})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/getHandlebarTemplate.js":4}],39:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/slugify.js"),r=n(o);a["default"]=function(e,t,a,n){a(".js-ma-rich-text").each(function(e){var t=a(this),n=e;if(t.find("table").wrap("<div class='ma__rich-text__table-wrapper'></div>"),t.hasClass("js-ma-outline-indent")&&t.find(":header").each(function(e,t){"H2"!==a(t).prop("tagName")&&a(t).addClass("ma__rich-text__indent"),a(t).nextUntil(":header").addClass("ma__rich-text__indent").attr("data-ma-heading-parent",a(t).prop("tagName"))}),t.hasClass("js-ma-insert-heading-anchors")){var o=t.find(":header");o.each(function(e,t){if("H2"!==a(t).prop("tagName")){var o=(0,r["default"])(a(t).text());a(t).before("<a name='"+o+"-"+n+"-"+e+"'></a>")}})}})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/slugify.js":8}],40:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../helpers/cssControlCode.js"),r=n(o);a["default"]=function(e,t,a,n){a(".js-scroll-anchors").each(function(){function t(){var e=0;c=0,d=i.outerHeight(!0),m=u.offset().top,y=(0,r["default"])(i),u[0].hasAttribute("style")&&!y&&u.removeAttr("style"),y&&(c=a(".js-sticky-header").height()||0,m-=c,e=d),f=m+u.outerHeight(!0)-i.height(),_=new Array,l.each(function(t,n){var o=a(this),r=o.is("a")?o:o.find("a"),s=r[0].hash,i=a(s).offset()?a(s).offset().top-c-e:m;_[t]={hash:s,position:i},o.data("index",t)}),v=_.length}function o(){var t=a(e).scrollTop(),n=i.attr("data-sticky"),o="top"!==n&&t<=m,r="middle"!==n&&t<f&&t>m,s="bottom"!==n&&t>=f;u[0].hasAttribute("style")&&!y&&u.removeAttr("style"),!u[0].hasAttribute("style")&&y&&"middle"===n&&u.css({paddingTop:d}),o?(i.attr("data-sticky","top"),y&&u.removeAttr("style")):r?(i.attr("data-sticky","middle"),y&&u.css({paddingTop:d})):s&&(i.attr("data-sticky","bottom"),y&&u.removeAttr("style"))}function s(){if(!(v<2||k)){var t=a(e).scrollTop()+e.innerHeight/2,n=g;n>0&&t<_[g].position?--g:n<v-1&&t>_[g+1].position&&++g,n!==g&&(i.find("."+p).removeClass(p),l.eq(g).addClass(p))}}var i=a(this),u="relative"===i.parent().css("position")?i.parent():i.parent().offsetParent(),l=i.find(".js-scroll-anchors-link"),d=n,c=0,f=n,m=n,h=n,p="is-active",g=0,_=[],v=0,y=!1,k=!1;t(),i.attr("data-sticky","top"),e.setTimeout(function(){t()},1e3),l.on("click",function(e){e.preventDefault();var t=a(this);if(!i.hasClass("is-open")&&y)return void i.addClass("is-open");g=a(this).data("index");var n=_[g].position;i.removeClass("is-open"),k=!0,a("html,body").stop(!0,!0).animate({scrollTop:n},"750",function(){k=!1;var e=_[g].hash;a(e).focus(),setTimeout(function(){i.find("."+p).removeClass(p),t.addClass(p)},30)})}),a(".js-accordion-link").on("click",function(){"number"==typeof h&&e.clearTimeout(h),h=e.setTimeout(function(){t(),o(),s()},400)}),i.find(".js-scroll-anchors-toggle").on("click",function(){i.toggleClass("is-open")}),a(e).resize(function(){"number"==typeof h&&e.clearTimeout(h),h=e.setTimeout(function(){t(),o(),s()},300)}),a(e).scroll(function(){o(),k||s()})})}(window,document,jQuery),t.exports=a["default"]},{"../helpers/cssControlCode.js":2}],41:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".pre-content .ma__sticky-toc").each(function(){function n(){a(".ma__sticky-toc__stuck-menu").toggleClass("sticky-nav-open"),a(".ma__sticky-toc__overlay").toggle(),a(".ma__floating-action").toggle()}var o=a(".ma__sticky-toc"),r=a(".ma__sticky-toc__links"),s=a(".ma__information-details .page-content").find("h2"),i=s.last().text(),u=s.length,l=a(".ma__sticky-toc__column"),d=a(".ma__sticky-toc__toggle-link"),c=a(".stickyTOC-open"),f=a(".ma__sticky-toc__footer");u<3?o.remove():a("html").addClass("stickyTOC"),u<=10&&a(e).width()>480&&a(".ma__sticky-toc__footer").toggle(),s.each(function(){var e=a(this),t=e.attr("id"),n=e.text();t||(t=n.replace(/\s+/g,"-").toLowerCase(),e.attr("id",t));var o='<div class="ma__sticky-toc__link"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="35" height="35" viewBox="0 0 35 35"><path class="st0" d="M17.5 35C7.8 35 0 27.2 0 17.5 0 7.8 7.8 0 17.5 0 27.2 0 35 7.8 35 17.5 35 27.2 27.2 35 17.5 35zM16 9l-3 2.9 5.1 5.1L13 22.1l3 2.9 8-8L16 9z"/></svg><a href="#'+t+'" >'+n+"</a></div>",r='<span class="sticky-toc-jump-target" id="'+t+'"></span>';e.removeAttr("id"),e.parent().prepend(r),a(".ma__sticky-toc__column").append(o)}),d.on("click",function(){r.toggleClass("is-open")}),f.on("click",function(){var e=a(this).find("button"),t=e.text();r.toggleClass("open"),e.toggleClass("open"),e.text("show less"===t?"show more":"show less")}),a(e).resize(function(){a(".ma__sticky-toc__link").removeAttr("style"),r.removeClass("open"),f.find("button").removeClass("open").text("Show More")}),a("body").on("click",'.ma__sticky-toc__link a[text="'+i+'"]',function(){a(".ma__sticky-toc__current-section").text(i)}),a(e).scroll(function(){var n=a(e).scrollTop(),r=e.innerHeight,u=a(t).height(),l=o.offset().top+o.outerHeight()-20;a(".ma__information-details__content").offset().top+a(".ma__information-details__content").outerHeight();l>n?o.removeClass("stuck"):o.addClass("stuck"),s.each(function(){var e=a(this).text(),t=a(this).offset().top-20;t<n&&a(".ma__sticky-toc__current-section").text(e),n+r==u&&a(".ma__sticky-toc__current-section").text(i)})}),a(".stickyTOC-top").on("click",function(e){e.preventDefault();try{a("html, body").stop(!0,!0).animate({scrollTop:0},"750")}catch(e){a("body").scrollTop(0)}return a("#main-content").focus(),!1}),c.on("click",function(){0==a(".ma__sticky-toc__stuck-menu").length&&l.clone(!0).addClass("ma__sticky-toc__stuck-menu").appendTo("#main-content"),n()}),a(".secondary-label-close").on("click",function(){n()}),a("body").on("click",function(){a(event.target).closest(".ma__sticky-toc__stuck-menu").length||a(event.target).closest(".ma__sticky-toc__tools").length||a(".ma__sticky-toc__stuck-menu").hasClass("sticky-nav-open")&&n()}),a("body").on("click",".ma__sticky-toc__stuck-menu a",function(){n()})})}(window,document,jQuery),t.exports=a["default"]},{}],42:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=function(e,t,a,n){a(".js-util-nav").each(function(){function e(e){a("body").removeClass(o),r.find("."+t).removeClass(t),e.removeClass(t).addClass(n),s&&clearTimeout(s),s=setTimeout(function(){e.attr("aria-hidden","true")},1e3)}var t="is-open",n="is-closed",o="show-utilmenu",r=a(this),s=null;a(".js-close-sub-nav").on("click",function(){var a=r.find(".js-util-nav-content."+t);e(a)}),r.find(".js-util-nav-toggle > a").on("click",function(s){s.preventdefault;var i=a(this).hasClass(t),u=a(this).next(".js-util-nav-content"),l=r.find(".js-util-nav-content."+t);e(l),i||(a(this).addClass(t),u.attr("aria-hidden","false"),setTimeout(function(){u.removeClass(n).addClass(t),a("body").addClass(o)},.1))}),r.find(".js-close-util-nav").on("click",function(t){t.preventDefault,e(a(this).closest(".js-util-nav-content"))}),a(".js-header-menu-button, .js-close-sub-nav").on("click",function(){var a=r.find(".js-util-nav-content."+t);e(a)})})}(window,document,jQuery),t.exports=a["default"]},{}],43:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t,a=e._a;return a&&(0,u["default"])(e).overflow===-2&&(t=a[s.MONTH]<0||a[s.MONTH]>11?s.MONTH:a[s.DATE]<1||a[s.DATE]>(0,r.daysInMonth)(a[s.YEAR],a[s.MONTH])?s.DATE:a[s.HOUR]<0||a[s.HOUR]>24||24===a[s.HOUR]&&(0!==a[s.MINUTE]||0!==a[s.SECOND]||0!==a[s.MILLISECOND])?s.HOUR:a[s.MINUTE]<0||a[s.MINUTE]>59?s.MINUTE:a[s.SECOND]<0||a[s.SECOND]>59?s.SECOND:a[s.MILLISECOND]<0||a[s.MILLISECOND]>999?s.MILLISECOND:-1,(0,u["default"])(e)._overflowDayOfYear&&(t<s.YEAR||t>s.DATE)&&(t=s.DATE),(0,u["default"])(e)._overflowWeeks&&t===-1&&(t=s.WEEK),(0,u["default"])(e)._overflowWeekday&&t===-1&&(t=s.WEEKDAY),(0,u["default"])(e).overflow=t),e}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o;var r=e("../units/month"),s=e("../units/constants"),i=e("../create/parsing-flags"),u=n(i);t.exports=a["default"]},{"../create/parsing-flags":52,"../units/constants":104,"../units/month":111}],44:[function(e,t,a){"use strict";function n(e,t,a,n,o,r,s){var i=new Date(e,t,a,n,o,r,s);return e<100&&e>=0&&isFinite(i.getFullYear())&&i.setFullYear(e),i}function o(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}Object.defineProperty(a,"__esModule",{value:!0}),a.createDate=n,a.createUTCDate=o},{}],45:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=new b.Moment((0,P["default"])(r(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function r(e){var t=e._i,a=e._f;return e._locale=e._locale||(0,j.getLocale)(e._l),null===t||void 0===a&&""===t?(0,w.createInvalid)({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),(0,b.isMoment)(t)?new b.Moment((0,P["default"])(t)):((0,y["default"])(t)?e._d=t:(0,l["default"])(a)?(0,T.configFromStringAndArray)(e):a?(0,S.configFromStringAndFormat)(e):s(e),(0,w.isValid)(e)||(e._d=null),e))}function s(e){var t=e._i;(0,p["default"])(t)?e._d=new Date(x.hooks.now()):(0,y["default"])(t)?e._d=new Date(t.valueOf()):"string"==typeof t?(0,D.configFromString)(e):(0,l["default"])(t)?(e._a=(0,M["default"])(t.slice(0),function(e){return parseInt(e,10)}),(0,Y.configFromArray)(e)):(0,c["default"])(t)?(0,C.configFromObject)(e):(0,_["default"])(t)?e._d=new Date(t):x.hooks.createFromInputFallback(e)}function i(e,t,a,n,r){var s={};return a!==!0&&a!==!1||(n=a,a=void 0),((0,c["default"])(e)&&(0,m["default"])(e)||(0,l["default"])(e)&&0===e.length)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=r,s._l=a,s._i=e,s._f=t,s._strict=n,o(s)}Object.defineProperty(a,"__esModule",{value:!0}),a.prepareConfig=r,a.createLocalOrUTC=i;var u=e("../utils/is-array"),l=n(u),d=e("../utils/is-object"),c=n(d),f=e("../utils/is-object-empty"),m=n(f),h=e("../utils/is-undefined"),p=n(h),g=e("../utils/is-number"),_=n(g),v=e("../utils/is-date"),y=n(v),k=e("../utils/map"),M=n(k),w=e("./valid"),b=e("../moment/constructor"),j=e("../locale/locales"),x=e("../utils/hooks"),O=e("./check-overflow"),P=n(O),T=e("./from-string-and-array"),S=e("./from-string-and-format"),D=e("./from-string"),Y=e("./from-array"),C=e("./from-object")},{"../locale/locales":76,"../moment/constructor":86,"../utils/hooks":131,"../utils/is-array":133,"../utils/is-date":134,"../utils/is-number":136,"../utils/is-object":138,"../utils/is-object-empty":137,"../utils/is-undefined":139,"../utils/map":141,"./check-overflow":43,"./from-array":46,"./from-object":47,"./from-string":50,"./from-string-and-array":48,"./from-string-and-format":49,"./valid":54}],46:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=new Date(i.hooks.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function r(e){var t,a,n,r,i=[];if(!e._d){for(n=o(e),e._w&&null==e._a[c.DATE]&&null==e._a[c.MONTH]&&s(e),null!=e._dayOfYear&&(r=(0,h["default"])(e._a[c.YEAR],n[c.YEAR]),(e._dayOfYear>(0,l.daysInYear)(r)||0===e._dayOfYear)&&((0,g["default"])(e)._overflowDayOfYear=!0),a=(0,u.createUTCDate)(r,0,e._dayOfYear),e._a[c.MONTH]=a.getUTCMonth(),e._a[c.DATE]=a.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=i[t]=n[t];for(;t<7;t++)e._a[t]=i[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[c.HOUR]&&0===e._a[c.MINUTE]&&0===e._a[c.SECOND]&&0===e._a[c.MILLISECOND]&&(e._nextDay=!0,e._a[c.HOUR]=0),e._d=(e._useUTC?u.createUTCDate:u.createDate).apply(null,i),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[c.HOUR]=24)}}function s(e){var t,a,n,o,r,s,i,u;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)r=1,s=4,a=(0,h["default"])(t.GG,e._a[c.YEAR],(0,d.weekOfYear)((0,f.createLocal)(),1,4).year),n=(0,h["default"])(t.W,1),o=(0,h["default"])(t.E,1),(o<1||o>7)&&(u=!0);else{r=e._locale._week.dow,s=e._locale._week.doy;var l=(0,d.weekOfYear)((0,f.createLocal)(),r,s);a=(0,h["default"])(t.gg,e._a[c.YEAR],l.year),n=(0,h["default"])(t.w,l.week),null!=t.d?(o=t.d,(o<0||o>6)&&(u=!0)):null!=t.e?(o=t.e+r,(t.e<0||t.e>6)&&(u=!0)):o=r}n<1||n>(0,d.weeksInYear)(a,r,s)?(0,g["default"])(e)._overflowWeeks=!0:null!=u?(0,g["default"])(e)._overflowWeekday=!0:(i=(0,d.dayOfYearFromWeeks)(a,n,o,r,s),e._a[c.YEAR]=i.year,e._dayOfYear=i.dayOfYear)}Object.defineProperty(a,"__esModule",{value:!0}),a.configFromArray=r;var i=e("../utils/hooks"),u=e("./date-from-array"),l=e("../units/year"),d=e("../units/week-calendar-utils"),c=e("../units/constants"),f=e("./local"),m=e("../utils/defaults"),h=n(m),p=e("./parsing-flags"),g=n(p)},{"../units/constants":104,"../units/week-calendar-utils":119,"../units/year":122,"../utils/defaults":127,"../utils/hooks":131,"./date-from-array":44,"./local":51,"./parsing-flags":52}],47:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!e._d){var t=(0,r.normalizeObjectUnits)(e._i);e._a=(0,u["default"])([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),(0,s.configFromArray)(e)}}Object.defineProperty(a,"__esModule",{value:!0}),a.configFromObject=o;var r=e("../units/aliases"),s=e("./from-array"),i=e("../utils/map"),u=n(i)},{"../units/aliases":103,"../utils/map":141,"./from-array":46}],48:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t,a,n,o,i;if(0===e._f.length)return(0,u["default"])(e).invalidFormat=!0,void(e._d=new Date(NaN));for(o=0;o<e._f.length;o++)i=0,t=(0,r.copyConfig)({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[o],(0,s.configFromStringAndFormat)(t),(0,l.isValid)(t)&&(i+=(0,u["default"])(t).charsLeftOver,i+=10*(0,u["default"])(t).unusedTokens.length,(0,u["default"])(t).score=i,(null==n||i<n)&&(n=i,a=t));(0,c["default"])(e,a||t)}Object.defineProperty(a,"__esModule",{value:!0}),a.configFromStringAndArray=o;var r=e("../moment/constructor"),s=e("./from-string-and-format"),i=e("./parsing-flags"),u=n(i),l=e("./valid"),d=e("../utils/extend"),c=n(d)},{"../moment/constructor":86,"../utils/extend":129,"./from-string-and-format":49,"./parsing-flags":52,"./valid":54}],49:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e._f===h.hooks.ISO_8601)return void(0,s.configFromISO)(e);if(e._f===h.hooks.RFC_2822)return void(0,s.configFromRFC2822)(e);e._a=[],(0,g["default"])(e).empty=!0;var t,a,n,o,c,p=""+e._i,_=p.length,v=0;for(n=(0,d.expandFormat)(e._f,e._locale).match(d.formattingTokens)||[],t=0;t<n.length;t++)o=n[t],a=(p.match((0,u.getParseRegexForToken)(o,e))||[])[0],a&&(c=p.substr(0,p.indexOf(a)),c.length>0&&(0,g["default"])(e).unusedInput.push(c),p=p.slice(p.indexOf(a)+a.length),v+=a.length),d.formatTokenFunctions[o]?(a?(0,g["default"])(e).empty=!1:(0,g["default"])(e).unusedTokens.push(o),(0,l.addTimeToArrayFromToken)(o,a,e)):e._strict&&!a&&(0,g["default"])(e).unusedTokens.push(o);(0,g["default"])(e).charsLeftOver=_-v,p.length>0&&(0,g["default"])(e).unusedInput.push(p),e._a[m.HOUR]<=12&&(0,g["default"])(e).bigHour===!0&&e._a[m.HOUR]>0&&((0,g["default"])(e).bigHour=void 0),(0,g["default"])(e).parsedDateParts=e._a.slice(0),(0,g["default"])(e).meridiem=e._meridiem,e._a[m.HOUR]=r(e._locale,e._a[m.HOUR],e._meridiem),(0,i.configFromArray)(e),(0,f["default"])(e)}function r(e,t,a){var n;return null==a?t:null!=e.meridiemHour?e.meridiemHour(t,a):null!=e.isPM?(n=e.isPM(a),n&&t<12&&(t+=12),n||12!==t||(t=0),t):t}Object.defineProperty(a,"__esModule",{value:!0}),a.configFromStringAndFormat=o;var s=e("./from-string"),i=e("./from-array"),u=e("../parse/regex"),l=e("../parse/token"),d=e("../format/format"),c=e("./check-overflow"),f=n(c),m=e("../units/constants"),h=e("../utils/hooks"),p=e("./parsing-flags"),g=n(p);h.hooks.ISO_8601=function(){},h.hooks.RFC_2822=function(){}},{"../format/format":67,"../parse/regex":101,"../parse/token":102,"../units/constants":104,"../utils/hooks":131,"./check-overflow":43,"./from-array":46,"./from-string":50,"./parsing-flags":52}],50:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t,a,n,o,r,s,u=e._i,l=f.exec(u)||m.exec(u);if(l){for((0,c["default"])(e).iso=!0,t=0,a=p.length;t<a;t++)if(p[t][1].exec(l[1])){o=p[t][0],n=p[t][2]!==!1;break}if(null==o)return void(e._isValid=!1);if(l[3]){for(t=0,a=g.length;t<a;t++)if(g[t][1].exec(l[3])){r=(l[2]||" ")+g[t][0];break}if(null==r)return void(e._isValid=!1)}if(!n&&null!=r)return void(e._isValid=!1);
if(l[4]){if(!h.exec(l[4]))return void(e._isValid=!1);s="Z"}e._f=o+(r||"")+(s||""),(0,i.configFromStringAndFormat)(e)}else e._isValid=!1}function r(e){var t,a,n,o,r,s,u,l,d={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},f="YXWVUTSRQPONZABCDEFGHIKLM";if(t=e._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),a=v.exec(t)){if(n=a[1]?"ddd"+(5===a[1].length?", ":" "):"",o="D MMM "+(a[2].length>10?"YYYY ":"YY "),r="HH:mm"+(a[4]?":ss":""),a[1]){var m=new Date(a[2]),h=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][m.getDay()];if(a[1].substr(0,3)!==h)return(0,c["default"])(e).weekdayMismatch=!0,void(e._isValid=!1)}switch(a[5].length){case 2:0===l?u=" +0000":(l=f.indexOf(a[5][1].toUpperCase())-12,u=(l<0?" -":" +")+(""+l).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:u=d[a[5]];break;default:u=d[" GMT"]}a[5]=u,e._i=a.splice(1).join(""),s=" ZZ",e._f=n+o+r+s,(0,i.configFromStringAndFormat)(e),(0,c["default"])(e).rfc2822=!0}else e._isValid=!1}function s(e){var t=_.exec(e._i);return null!==t?void(e._d=new Date((+t[1]))):(o(e),void(e._isValid===!1&&(delete e._isValid,r(e),e._isValid===!1&&(delete e._isValid,u.hooks.createFromInputFallback(e)))))}Object.defineProperty(a,"__esModule",{value:!0}),a.configFromISO=o,a.configFromRFC2822=r,a.configFromString=s;var i=e("./from-string-and-format"),u=e("../utils/hooks"),l=e("../utils/deprecate"),d=e("./parsing-flags"),c=n(d),f=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,m=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,h=/Z|[+-]\d\d(?::?\d\d)?/,p=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],g=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],_=/^\/?Date\((\-?\d+)/i,v=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;u.hooks.createFromInputFallback=(0,l.deprecate)("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})},{"../utils/deprecate":128,"../utils/hooks":131,"./from-string-and-format":49,"./parsing-flags":52}],51:[function(e,t,a){"use strict";function n(e,t,a,n){return(0,o.createLocalOrUTC)(e,t,a,n,!1)}Object.defineProperty(a,"__esModule",{value:!0}),a.createLocal=n;var o=e("./from-anything")},{"./from-anything":45}],52:[function(e,t,a){"use strict";function n(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function o(e){return null==e._pf&&(e._pf=n()),e._pf}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o,t.exports=a["default"]},{}],53:[function(e,t,a){"use strict";function n(e,t,a,n){return(0,o.createLocalOrUTC)(e,t,a,n,!0).utc()}Object.defineProperty(a,"__esModule",{value:!0}),a.createUTC=n;var o=e("./from-anything")},{"./from-anything":45}],54:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(null==e._isValid){var t=(0,d["default"])(e),a=f["default"].call(t.parsedDateParts,function(e){return null!=e}),n=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&a);if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function r(e){var t=(0,u.createUTC)(NaN);return null!=e?(0,i["default"])((0,d["default"])(t),e):(0,d["default"])(t).userInvalidated=!0,t}Object.defineProperty(a,"__esModule",{value:!0}),a.isValid=o,a.createInvalid=r;var s=e("../utils/extend"),i=n(s),u=e("./utc"),l=e("../create/parsing-flags"),d=n(l),c=e("../utils/some"),f=n(c)},{"../create/parsing-flags":52,"../utils/extend":129,"../utils/some":142,"./utc":53}],55:[function(e,t,a){"use strict";function n(){var e=this._data;return this._milliseconds=o(this._milliseconds),this._days=o(this._days),this._months=o(this._months),e.milliseconds=o(e.milliseconds),e.seconds=o(e.seconds),e.minutes=o(e.minutes),e.hours=o(e.hours),e.months=o(e.months),e.years=o(e.years),this}Object.defineProperty(a,"__esModule",{value:!0}),a.abs=n;var o=Math.abs},{}],56:[function(e,t,a){"use strict";function n(e,t,a,n){var o=(0,s.createDuration)(t,a);return e._milliseconds+=n*o._milliseconds,e._days+=n*o._days,e._months+=n*o._months,e._bubble()}function o(e,t){return n(this,e,t,1)}function r(e,t){return n(this,e,t,-1)}Object.defineProperty(a,"__esModule",{value:!0}),a.add=o,a.subtract=r;var s=e("./create")},{"./create":60}],57:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(!this.isValid())return NaN;var t,a,n=this._milliseconds;if(e=(0,u.normalizeUnits)(e),"month"===e||"year"===e)return t=this._days+n/864e5,a=this._months+(0,i.daysToMonths)(t),"month"===e?a:a/12;switch(t=this._days+Math.round((0,i.monthsToDays)(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return 24*t+n/36e5;case"minute":return 1440*t+n/6e4;case"second":return 86400*t+n/1e3;case"millisecond":return Math.floor(864e5*t)+n;default:throw new Error("Unknown unit "+e)}}function r(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*(0,d["default"])(this._months/12):NaN}function s(e){return function(){return this.as(e)}}Object.defineProperty(a,"__esModule",{value:!0}),a.as=o,a.valueOf=r;var i=e("./bubble"),u=e("../units/aliases"),l=e("../utils/to-int"),d=n(l),c=s("ms");a.asMilliseconds=c;var f=s("s");a.asSeconds=f;var m=s("m");a.asMinutes=m;var h=s("h");a.asHours=h;var p=s("d");a.asDays=p;var g=s("w");a.asWeeks=g;var _=s("M");a.asMonths=_;var v=s("y");a.asYears=v},{"../units/aliases":103,"../utils/to-int":143,"./bubble":58}],58:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e,t,a,n,o,i=this._milliseconds,l=this._days,c=this._months,f=this._data;return i>=0&&l>=0&&c>=0||i<=0&&l<=0&&c<=0||(i+=864e5*(0,d["default"])(s(c)+l),l=0,c=0),f.milliseconds=i%1e3,e=(0,u["default"])(i/1e3),f.seconds=e%60,t=(0,u["default"])(e/60),f.minutes=t%60,a=(0,u["default"])(t/60),f.hours=a%24,l+=(0,u["default"])(a/24),o=(0,u["default"])(r(l)),c+=o,l-=(0,d["default"])(s(o)),n=(0,u["default"])(c/12),c%=12,f.days=l,f.months=c,f.years=n,this}function r(e){return 4800*e/146097}function s(e){return 146097*e/4800}Object.defineProperty(a,"__esModule",{value:!0}),a.bubble=o,a.daysToMonths=r,a.monthsToDays=s;var i=e("../utils/abs-floor"),u=n(i),l=e("../utils/abs-ceil"),d=n(l);e("../create/date-from-array")},{"../create/date-from-array":44,"../utils/abs-ceil":123,"../utils/abs-floor":124}],59:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=(0,s.normalizeObjectUnits)(e),a=t.year||0,n=t.quarter||0,o=t.month||0,r=t.week||0,u=t.day||0,d=t.hour||0,c=t.minute||0,f=t.second||0,m=t.millisecond||0;this._isValid=(0,l["default"])(t),this._milliseconds=+m+1e3*f+6e4*c+1e3*d*60*60,this._days=+u+7*r,this._months=+o+3*n+12*a,this._data={},this._locale=(0,i.getLocale)(),this._bubble()}function r(e){return e instanceof o}Object.defineProperty(a,"__esModule",{value:!0}),a.Duration=o,a.isDuration=r;var s=e("../units/aliases"),i=e("../locale/locales"),u=e("./valid.js"),l=n(u)},{"../locale/locales":76,"../units/aliases":103,"./valid.js":66}],60:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a,n,o,s=e,l=null;return(0,u.isDuration)(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:(0,d["default"])(e)?(s={},t?s[t]=e:s.milliseconds=e):(l=M.exec(e))?(a="-"===l[1]?-1:1,s={y:0,d:(0,f["default"])(l[_.DATE])*a,h:(0,f["default"])(l[_.HOUR])*a,m:(0,f["default"])(l[_.MINUTE])*a,s:(0,f["default"])(l[_.SECOND])*a,ms:(0,f["default"])((0,h["default"])(1e3*l[_.MILLISECOND]))*a}):(l=w.exec(e))?(a="-"===l[1]?-1:1,s={y:r(l[2],a),M:r(l[3],a),w:r(l[4],a),d:r(l[5],a),h:r(l[6],a),m:r(l[7],a),s:r(l[8],a)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(o=i((0,y.createLocal)(s.from),(0,y.createLocal)(s.to)),s={},s.ms=o.milliseconds,s.M=o.months),n=new u.Duration(s),(0,u.isDuration)(e)&&(0,g["default"])(e,"_locale")&&(n._locale=e._locale),n}function r(e,t){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*t}function s(e,t){var a={milliseconds:0,months:0};return a.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(a.months,"M").isAfter(t)&&--a.months,a.milliseconds=+t-+e.clone().add(a.months,"M"),a}function i(e,t){var a;return e.isValid()&&t.isValid()?(t=(0,v.cloneWithOffset)(t,e),e.isBefore(t)?a=s(e,t):(a=s(t,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}Object.defineProperty(a,"__esModule",{value:!0}),a.createDuration=o;var u=e("./constructor"),l=e("../utils/is-number"),d=n(l),c=e("../utils/to-int"),f=n(c),m=e("../utils/abs-round"),h=n(m),p=e("../utils/has-own-prop"),g=n(p),_=e("../units/constants"),v=e("../units/offset"),y=e("../create/local"),k=e("./valid"),M=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,w=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;o.fn=u.Duration.prototype,o.invalid=k.createInvalid},{"../create/local":51,"../units/constants":104,"../units/offset":112,"../utils/abs-round":125,"../utils/has-own-prop":130,"../utils/is-number":136,"../utils/to-int":143,"./constructor":59,"./valid":66}],61:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),e("./prototype");var n=e("./create"),o=e("./constructor"),r=e("./humanize");a.createDuration=n.createDuration,a.isDuration=o.isDuration,a.getSetRelativeTimeRounding=r.getSetRelativeTimeRounding,a.getSetRelativeTimeThreshold=r.getSetRelativeTimeThreshold},{"./constructor":59,"./create":60,"./humanize":63,"./prototype":65}],62:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e=(0,i.normalizeUnits)(e),this.isValid()?this[e+"s"]():NaN}function r(e){return function(){return this.isValid()?this._data[e]:NaN}}function s(){return(0,l["default"])(this.days()/7)}Object.defineProperty(a,"__esModule",{value:!0}),a.get=o,a.weeks=s;var i=e("../units/aliases"),u=e("../utils/abs-floor"),l=n(u),d=r("milliseconds");a.milliseconds=d;var c=r("seconds");a.seconds=c;var f=r("minutes");a.minutes=f;var m=r("hours");a.hours=m;var h=r("days");a.days=h;var p=r("months");a.months=p;var g=r("years");a.years=g},{"../units/aliases":103,"../utils/abs-floor":124}],63:[function(e,t,a){"use strict";function n(e,t,a,n,o){return o.relativeTime(t||1,!!a,e,n)}function o(e,t,a){var o=(0,u.createDuration)(e).abs(),r=l(o.as("s")),s=l(o.as("m")),i=l(o.as("h")),c=l(o.as("d")),f=l(o.as("M")),m=l(o.as("y")),h=r<=d.ss&&["s",r]||r<d.s&&["ss",r]||s<=1&&["m"]||s<d.m&&["mm",s]||i<=1&&["h"]||i<d.h&&["hh",i]||c<=1&&["d"]||c<d.d&&["dd",c]||f<=1&&["M"]||f<d.M&&["MM",f]||m<=1&&["y"]||["yy",m];return h[2]=t,h[3]=+e>0,h[4]=a,n.apply(null,h)}function r(e){return void 0===e?l:"function"==typeof e&&(l=e,!0)}function s(e,t){return void 0!==d[e]&&(void 0===t?d[e]:(d[e]=t,"s"===e&&(d.ss=t-1),!0))}function i(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),a=o(this,!e,t);return e&&(a=t.pastFuture(+this,a)),t.postformat(a)}Object.defineProperty(a,"__esModule",{value:!0}),a.getSetRelativeTimeRounding=r,a.getSetRelativeTimeThreshold=s,a.humanize=i;var u=e("./create"),l=Math.round,d={ss:44,s:45,m:45,h:22,d:26,M:11}},{"./create":60}],64:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){if(!this.isValid())return this.localeData().invalidDate();var e,t,a,n=i(this._milliseconds)/1e3,o=i(this._days),r=i(this._months);e=(0,s["default"])(n/60),t=(0,s["default"])(e/60),n%=60,e%=60,a=(0,s["default"])(r/12),r%=12;var u=a,l=r,d=o,c=t,f=e,m=n,h=this.asSeconds();return h?(h<0?"-":"")+"P"+(u?u+"Y":"")+(l?l+"M":"")+(d?d+"D":"")+(c||f||m?"T":"")+(c?c+"H":"")+(f?f+"M":"")+(m?m+"S":""):"P0D"}Object.defineProperty(a,"__esModule",{value:!0}),a.toISOString=o;var r=e("../utils/abs-floor"),s=n(r),i=Math.abs},{"../utils/abs-floor":124}],65:[function(e,t,a){"use strict";var n=e("./constructor"),o=e("./abs"),r=e("./add-subtract"),s=e("./as"),i=e("./bubble"),u=e("./get"),l=e("./humanize"),d=e("./iso-string"),c=e("../moment/locale"),f=e("./valid"),m=e("../utils/deprecate"),h=n.Duration.prototype;h.isValid=f.isValid,h.abs=o.abs,h.add=r.add,h.subtract=r.subtract,h.as=s.as,h.asMilliseconds=s.asMilliseconds,h.asSeconds=s.asSeconds,h.asMinutes=s.asMinutes,h.asHours=s.asHours,h.asDays=s.asDays,h.asWeeks=s.asWeeks,h.asMonths=s.asMonths,h.asYears=s.asYears,h.valueOf=s.valueOf,h._bubble=i.bubble,h.get=u.get,h.milliseconds=u.milliseconds,h.seconds=u.seconds,h.minutes=u.minutes,h.hours=u.hours,h.days=u.days,h.weeks=u.weeks,h.months=u.months,h.years=u.years,h.humanize=l.humanize,h.toISOString=d.toISOString,h.toString=d.toISOString,h.toJSON=d.toISOString,h.locale=c.locale,h.localeData=c.localeData,h.toIsoString=(0,m.deprecate)("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",d.toISOString),h.lang=c.lang},{"../moment/locale":92,"../utils/deprecate":128,"./abs":55,"./add-subtract":56,"./as":57,"./bubble":58,"./constructor":59,"./get":62,"./humanize":63,"./iso-string":64,"./valid":66}],66:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){for(var t in e)if(d.indexOf(t)===-1||null!=e[t]&&isNaN(e[t]))return!1;for(var a=!1,n=0;n<d.length;++n)if(e[d[n]]){if(a)return!1;parseFloat(e[d[n]])!==(0,u["default"])(e[d[n]])&&(a=!0)}return!0}function r(){return this._isValid}function s(){return(0,l.createDuration)(NaN)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o,a.isValid=r,a.createInvalid=s;var i=e("../utils/to-int"),u=n(i),l=(e("./constructor"),e("./create")),d=["year","quarter","month","week","day","hour","minute","second","millisecond"]},{"../utils/to-int":143,"./constructor":59,"./create":60}],67:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a,n){var o=n;"string"==typeof n&&(o=function(){return this[n]()}),e&&(g[e]=o),t&&(g[t[0]]=function(){return(0,d["default"])(o.apply(this,arguments),t[1],t[2])}),a&&(g[a]=function(){return this.localeData().ordinal(o.apply(this,arguments),e)})}function r(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function s(e){var t,a,n=e.match(m);for(t=0,a=n.length;t<a;t++)g[n[t]]?n[t]=g[n[t]]:n[t]=r(n[t]);return function(t){var o,r="";for(o=0;o<a;o++)r+=(0,f["default"])(n[o])?n[o].call(t,e):n[o];return r}}function i(e,t){return e.isValid()?(t=u(t,e.localeData()),p[t]=p[t]||s(t),p[t](e)):e.localeData().invalidDate()}function u(e,t){function a(e){return t.longDateFormat(e)||e}var n=5;for(h.lastIndex=0;n>=0&&h.test(e);)e=e.replace(h,a),h.lastIndex=0,n-=1;return e}Object.defineProperty(a,"__esModule",{value:!0}),a.addFormatToken=o,a.formatMoment=i,a.expandFormat=u;var l=e("../utils/zero-fill"),d=n(l),c=e("../utils/is-function"),f=n(c),m=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;a.formattingTokens=m;var h=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,p={},g={};a.formatTokenFunctions=g},{"../utils/is-function":135,"../utils/zero-fill":144}],68:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("./calendar"),o=e("./formats"),r=e("./invalid"),s=e("./ordinal"),i=e("./relative"),u=e("../units/month"),l=e("../units/week"),d=e("../units/day-of-week"),c=e("../units/hour"),f={calendar:n.defaultCalendar,longDateFormat:o.defaultLongDateFormat,invalidDate:r.defaultInvalidDate,ordinal:s.defaultOrdinal,dayOfMonthOrdinalParse:s.defaultDayOfMonthOrdinalParse,relativeTime:i.defaultRelativeTime,months:u.defaultLocaleMonths,monthsShort:u.defaultLocaleMonthsShort,week:l.defaultLocaleWeek,weekdays:d.defaultLocaleWeekdays,weekdaysMin:d.defaultLocaleWeekdaysMin,weekdaysShort:d.defaultLocaleWeekdaysShort,meridiemParse:c.defaultLocaleMeridiemParse};a.baseConfig=f},{"../units/day-of-week":106,"../units/hour":108,"../units/month":111,"../units/week":121,"./calendar":69,"./formats":72,"./invalid":73,"./ordinal":77,"./relative":80}],69:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){var n=this._calendar[e]||this._calendar.sameElse;return(0,s["default"])(n)?n.call(t,a):n}Object.defineProperty(a,"__esModule",{value:!0}),a.calendar=o;var r=e("../utils/is-function"),s=n(r),i={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};a.defaultCalendar=i},{"../utils/is-function":135}],70:[function(e,t,a){"use strict";function n(e){null!=e&&this.set(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.Locale=n},{}],71:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}e("./prototype");var o=e("./locales"),r=e("../utils/to-int"),s=n(r);(0,o.getSetGlobalLocale)("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,a=1===(0,s["default"])(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a}})},{"../utils/to-int":143,"./locales":76,"./prototype":79}],72:[function(e,t,a){"use strict";function n(e){var t=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return t||!a?t:(this._longDateFormat[e]=a.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}Object.defineProperty(a,"__esModule",{value:!0}),a.longDateFormat=n;var o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};a.defaultLongDateFormat=o},{}],73:[function(e,t,a){"use strict";function n(){return this._invalidDate}Object.defineProperty(a,"__esModule",{value:!0}),a.invalidDate=n;var o="Invalid date";a.defaultInvalidDate=o},{}],74:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a,n){var o=(0,h.getLocale)(),r=(0,p.createUTC)().set(n,t);return o[a](r,e)}function r(e,t,a){if((0,m["default"])(e)&&(t=e,e=void 0),e=e||"",null!=t)return o(e,t,a,"month");var n,r=[];for(n=0;n<12;n++)r[n]=o(e,n,a,"month");return r}function s(e,t,a,n){"boolean"==typeof e?((0,m["default"])(t)&&(a=t,t=void 0),t=t||""):(t=e,a=t,e=!1,(0,m["default"])(t)&&(a=t,t=void 0),t=t||"");var r=(0,h.getLocale)(),s=e?r._week.dow:0;if(null!=a)return o(t,(a+s)%7,n,"day");var i,u=[];for(i=0;i<7;i++)u[i]=o(t,(i+s)%7,n,"day");return u}function i(e,t){return r(e,t,"months")}function u(e,t){return r(e,t,"monthsShort")}function l(e,t,a){return s(e,t,a,"weekdays")}function d(e,t,a){return s(e,t,a,"weekdaysShort")}function c(e,t,a){return s(e,t,a,"weekdaysMin")}Object.defineProperty(a,"__esModule",{value:!0}),a.listMonths=i,a.listMonthsShort=u,a.listWeekdays=l,a.listWeekdaysShort=d,a.listWeekdaysMin=c;var f=e("../utils/is-number"),m=n(f),h=e("./locales"),p=e("../create/utc")},{"../create/utc":53,"../utils/is-number":136,"./locales":76}],75:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),e("./prototype");var n=e("./locales"),o=e("./lists"),r=e("../utils/deprecate"),s=e("../utils/hooks");e("./en"),a.getSetGlobalLocale=n.getSetGlobalLocale,a.defineLocale=n.defineLocale,a.updateLocale=n.updateLocale,a.getLocale=n.getLocale,a.listLocales=n.listLocales,a.listMonths=o.listMonths,a.listMonthsShort=o.listMonthsShort,a.listWeekdays=o.listWeekdays,a.listWeekdaysShort=o.listWeekdaysShort,a.listWeekdaysMin=o.listWeekdaysMin,s.hooks.lang=(0,r.deprecate)("moment.lang is deprecated. Use moment.locale instead.",n.getSetGlobalLocale),s.hooks.langData=(0,r.deprecate)("moment.langData is deprecated. Use moment.localeData instead.",n.getLocale)},{"../utils/deprecate":128,"../utils/hooks":131,"./en":71,"./lists":74,"./locales":76,"./prototype":79}],76:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e?e.toLowerCase().replace("_","-"):e}function r(e){for(var t,a,n,r,i=0;i<e.length;){for(r=o(e[i]).split("-"),t=r.length,a=o(e[i+1]),a=a?a.split("-"):null;t>0;){if(n=s(r.slice(0,t).join("-")))return n;if(a&&a.length>=t&&(0,y["default"])(r,a,!0)>=t-1)break;t--}i++}return null}function s(a){var n=null;if(!O[a]&&"undefined"!=typeof t&&t&&t.exports)try{n=f._abbr,e("./locale/"+a),i(n)}catch(o){}return O[a]}function i(e,t){var a;return e&&(a=(0,_["default"])(t)?d(e):u(e,t),a&&(f=a)),f._abbr}function u(e,t){if(null!==t){var a=x.baseConfig;if(t.abbr=e,null!=O[e])(0,k.deprecateSimple)("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=O[e]._config;else if(null!=t.parentLocale){if(null==O[t.parentLocale])return P[t.parentLocale]||(P[t.parentLocale]=[]),P[t.parentLocale].push({name:e,config:t}),null;a=O[t.parentLocale]._config}return O[e]=new w.Locale((0,M.mergeConfigs)(a,t)),P[e]&&P[e].forEach(function(e){u(e.name,e.config)}),i(e),O[e]}return delete O[e],null}function l(e,t){if(null!=t){var a,n=x.baseConfig;null!=O[e]&&(n=O[e]._config),t=(0,M.mergeConfigs)(n,t),a=new w.Locale(t),a.parentLocale=O[e],O[e]=a,i(e)}else null!=O[e]&&(null!=O[e].parentLocale?O[e]=O[e].parentLocale:null!=O[e]&&delete O[e]);return O[e]}function d(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return f;if(!(0,h["default"])(e)){if(t=s(e))return t;e=[e]}return r(e)}function c(){return(0,j["default"])(O)}Object.defineProperty(a,"__esModule",{value:!0}),a.getSetGlobalLocale=i,a.defineLocale=u,a.updateLocale=l,a.getLocale=d,a.listLocales=c;var f,m=e("../utils/is-array"),h=n(m),p=e("../utils/has-own-prop"),g=(n(p),e("../utils/is-undefined")),_=n(g),v=e("../utils/compare-arrays"),y=n(v),k=e("../utils/deprecate"),M=e("./set"),w=e("./constructor"),b=e("../utils/keys"),j=n(b),x=e("./base-config"),O={},P={}},{"../utils/compare-arrays":126,"../utils/deprecate":128,"../utils/has-own-prop":130,"../utils/is-array":133,"../utils/is-undefined":139,"../utils/keys":140,"./base-config":68,"./constructor":70,"./set":81}],77:[function(e,t,a){"use strict";function n(e){return this._ordinal.replace("%d",e)}Object.defineProperty(a,"__esModule",{value:!0}),a.ordinal=n;var o="%d";a.defaultOrdinal=o;var r=/\d{1,2}/;a.defaultDayOfMonthOrdinalParse=r},{}],78:[function(e,t,a){"use strict";function n(e){return e}Object.defineProperty(a,"__esModule",{value:!0}),a.preParsePostFormat=n},{}],79:[function(e,t,a){"use strict";var n=e("./constructor"),o=e("./calendar"),r=e("./formats"),s=e("./invalid"),i=e("./ordinal"),u=e("./pre-post-format"),l=e("./relative"),d=e("./set"),c=e("../units/month"),f=e("../units/week"),m=e("../units/day-of-week"),h=e("../units/hour"),p=n.Locale.prototype;p.calendar=o.calendar,p.longDateFormat=r.longDateFormat,p.invalidDate=s.invalidDate,p.ordinal=i.ordinal,p.preparse=u.preParsePostFormat,p.postformat=u.preParsePostFormat,p.relativeTime=l.relativeTime,p.pastFuture=l.pastFuture,p.set=d.set,p.months=c.localeMonths,p.monthsShort=c.localeMonthsShort,p.monthsParse=c.localeMonthsParse,p.monthsRegex=c.monthsRegex,p.monthsShortRegex=c.monthsShortRegex,p.week=f.localeWeek,p.firstDayOfYear=f.localeFirstDayOfYear,p.firstDayOfWeek=f.localeFirstDayOfWeek,p.weekdays=m.localeWeekdays,p.weekdaysMin=m.localeWeekdaysMin,p.weekdaysShort=m.localeWeekdaysShort,p.weekdaysParse=m.localeWeekdaysParse,p.weekdaysRegex=m.weekdaysRegex,p.weekdaysShortRegex=m.weekdaysShortRegex,p.weekdaysMinRegex=m.weekdaysMinRegex,p.isPM=h.localeIsPM,p.meridiem=h.localeMeridiem},{"../units/day-of-week":106,"../units/hour":108,"../units/month":111,"../units/week":121,"./calendar":69,"./constructor":70,"./formats":72,"./invalid":73,"./ordinal":77,"./pre-post-format":78,"./relative":80,"./set":81}],80:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a,n){var o=this._relativeTime[a];return(0,i["default"])(o)?o(e,t,a,n):o.replace(/%d/i,e)}function r(e,t){var a=this._relativeTime[e>0?"future":"past"];return(0,i["default"])(a)?a(t):a.replace(/%s/i,t)}Object.defineProperty(a,"__esModule",{value:!0}),a.relativeTime=o,a.pastFuture=r;var s=e("../utils/is-function"),i=n(s),u={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};a.defaultRelativeTime=u},{"../utils/is-function":135}],81:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t,a;for(a in e)t=e[a],(0,i["default"])(t)?this[a]=t:this["_"+a]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function r(e,t){var a,n=(0,l["default"])({},e);for(a in t)(0,m["default"])(t,a)&&((0,c["default"])(e[a])&&(0,c["default"])(t[a])?(n[a]={},(0,l["default"])(n[a],e[a]),(0,l["default"])(n[a],t[a])):null!=t[a]?n[a]=t[a]:delete n[a]);for(a in e)(0,m["default"])(e,a)&&!(0,m["default"])(t,a)&&(0,c["default"])(e[a])&&(n[a]=(0,l["default"])({},n[a]));return n}Object.defineProperty(a,"__esModule",{value:!0}),a.set=o,a.mergeConfigs=r;var s=e("../utils/is-function"),i=n(s),u=e("../utils/extend"),l=n(u),d=e("../utils/is-object"),c=n(d),f=e("../utils/has-own-prop"),m=n(f)},{"../utils/extend":129,"../utils/has-own-prop":130,"../utils/is-function":135,"../utils/is-object":138}],82:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return function(a,n){var o,s;return null===n||isNaN(+n)||((0,l.deprecateSimple)(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=a,a=n,n=s),a="string"==typeof a?+a:a,o=(0,u.createDuration)(a,n),r(this,o,e),this}}function r(e,t,a,n){var o=t._milliseconds,r=(0,f["default"])(t._days),u=(0,f["default"])(t._months);e.isValid()&&(n=null==n||n,o&&e._d.setTime(e._d.valueOf()+o*a),r&&(0,s.set)(e,"Date",(0,s.get)(e,"Date")+r*a),u&&(0,i.setMonth)(e,(0,s.get)(e,"Month")+u*a),n&&d.hooks.updateOffset(e,r||u))}Object.defineProperty(a,"__esModule",{value:!0}),a.addSubtract=r;var s=e("./get-set"),i=e("../units/month"),u=e("../duration/create"),l=e("../utils/deprecate"),d=e("../utils/hooks"),c=e("../utils/abs-round"),f=n(c),m=o(1,"add");a.add=m;var h=o(-1,"subtract");a.subtract=h},{"../duration/create":60,"../units/month":111,"../utils/abs-round":125,"../utils/deprecate":128,"../utils/hooks":131,"./get-set":91}],83:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a=e.diff(t,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function r(e,t){var a=e||(0,s.createLocal)(),n=(0,i.cloneWithOffset)(a,this).startOf("day"),o=d.hooks.calendarFormat(this,n)||"sameElse",r=t&&((0,l["default"])(t[o])?t[o].call(this,a):t[o]);return this.format(r||this.localeData().calendar(o,this,(0,s.createLocal)(a)))}Object.defineProperty(a,"__esModule",{value:!0}),a.getCalendarFormat=o,a.calendar=r;var s=e("../create/local"),i=e("../units/offset"),u=e("../utils/is-function"),l=n(u),d=e("../utils/hooks")},{"../create/local":51,"../units/offset":112,"../utils/hooks":131,"../utils/is-function":135}],84:[function(e,t,a){"use strict";function n(){return new o.Moment(this)}Object.defineProperty(a,"__esModule",{value:!0}),a.clone=n;var o=e("./constructor")},{"./constructor":86}],85:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a=(0,d.isMoment)(e)?e:(0,f.createLocal)(e);return!(!this.isValid()||!a.isValid())&&(t=(0,c.normalizeUnits)((0,h["default"])(t)?"millisecond":t),"millisecond"===t?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(t).valueOf())}function r(e,t){var a=(0,d.isMoment)(e)?e:(0,f.createLocal)(e);return!(!this.isValid()||!a.isValid())&&(t=(0,c.normalizeUnits)((0,h["default"])(t)?"millisecond":t),"millisecond"===t?this.valueOf()<a.valueOf():this.clone().endOf(t).valueOf()<a.valueOf())}function s(e,t,a,n){return n=n||"()",("("===n[0]?this.isAfter(e,a):!this.isBefore(e,a))&&(")"===n[1]?this.isBefore(t,a):!this.isAfter(t,a))}function i(e,t){var a,n=(0,d.isMoment)(e)?e:(0,f.createLocal)(e);return!(!this.isValid()||!n.isValid())&&(t=(0,c.normalizeUnits)(t||"millisecond"),"millisecond"===t?this.valueOf()===n.valueOf():(a=n.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf()))}function u(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function l(e,t){return this.isSame(e,t)||this.isBefore(e,t)}Object.defineProperty(a,"__esModule",{value:!0}),a.isAfter=o,a.isBefore=r,a.isBetween=s,a.isSame=i,a.isSameOrAfter=u,a.isSameOrBefore=l;var d=e("./constructor"),c=e("../units/aliases"),f=e("../create/local"),m=e("../utils/is-undefined"),h=n(m)},{"../create/local":51,"../units/aliases":103,"../utils/is-undefined":139,"./constructor":86}],86:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a,n,o;if((0,d["default"])(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),(0,d["default"])(t._i)||(e._i=t._i),(0,d["default"])(t._f)||(e._f=t._f),(0,d["default"])(t._l)||(e._l=t._l),(0,d["default"])(t._strict)||(e._strict=t._strict),(0,d["default"])(t._tzm)||(e._tzm=t._tzm),(0,d["default"])(t._isUTC)||(e._isUTC=t._isUTC),(0,d["default"])(t._offset)||(e._offset=t._offset),(0,d["default"])(t._pf)||(e._pf=(0,f["default"])(t)),(0,d["default"])(t._locale)||(e._locale=t._locale),m.length>0)for(a=0;a<m.length;a++)n=m[a],o=t[n],(0,d["default"])(o)||(e[n]=o);return e}function r(e){o(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),h===!1&&(h=!0,i.hooks.updateOffset(this),h=!1)}function s(e){return e instanceof r||null!=e&&null!=e._isAMomentObject}Object.defineProperty(a,"__esModule",{value:!0}),a.copyConfig=o,a.Moment=r,a.isMoment=s;var i=e("../utils/hooks"),u=e("../utils/has-own-prop"),l=(n(u),e("../utils/is-undefined")),d=n(l),c=e("../create/parsing-flags"),f=n(c),m=i.hooks.momentProperties=[],h=!1},{"../create/parsing-flags":52,"../utils/has-own-prop":130,"../utils/hooks":131,"../utils/is-undefined":139}],87:[function(e,t,a){"use strict";function n(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Object.defineProperty(a,"__esModule",{value:!0}),a.creationData=n},{}],88:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{
"default":e}}function o(e,t,a){var n,o,s,d;return this.isValid()?(n=(0,u.cloneWithOffset)(e,this),n.isValid()?(o=6e4*(n.utcOffset()-this.utcOffset()),t=(0,l.normalizeUnits)(t),"year"===t||"month"===t||"quarter"===t?(d=r(this,n),"quarter"===t?d/=3:"year"===t&&(d/=12)):(s=this-n,d="second"===t?s/1e3:"minute"===t?s/6e4:"hour"===t?s/36e5:"day"===t?(s-o)/864e5:"week"===t?(s-o)/6048e5:s),a?d:(0,i["default"])(d)):NaN):NaN}function r(e,t){var a,n,o=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(o,"months");return t-r<0?(a=e.clone().add(o-1,"months"),n=(t-r)/(r-a)):(a=e.clone().add(o+1,"months"),n=(t-r)/(a-r)),-(o+n)||0}Object.defineProperty(a,"__esModule",{value:!0}),a.diff=o;var s=e("../utils/abs-floor"),i=n(s),u=e("../units/offset"),l=e("../units/aliases")},{"../units/aliases":103,"../units/offset":112,"../utils/abs-floor":124}],89:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function r(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?(0,u.formatMoment)(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):(0,c["default"])(Date.prototype.toISOString)?this.toDate().toISOString():(0,u.formatMoment)(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function s(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var a="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]';return this.format(a+n+o+r)}function i(e){e||(e=this.isUtc()?l.hooks.defaultFormatUtc:l.hooks.defaultFormat);var t=(0,u.formatMoment)(this,e);return this.localeData().postformat(t)}Object.defineProperty(a,"__esModule",{value:!0}),a.toString=o,a.toISOString=r,a.inspect=s,a.format=i;var u=e("../format/format"),l=e("../utils/hooks"),d=e("../utils/is-function"),c=n(d);l.hooks.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",l.hooks.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"},{"../format/format":67,"../utils/hooks":131,"../utils/is-function":135}],90:[function(e,t,a){"use strict";function n(e,t){return this.isValid()&&((0,i.isMoment)(e)&&e.isValid()||(0,s.createLocal)(e).isValid())?(0,r.createDuration)({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function o(e){return this.from((0,s.createLocal)(),e)}Object.defineProperty(a,"__esModule",{value:!0}),a.from=n,a.fromNow=o;var r=e("../duration/create"),s=e("../create/local"),i=e("../moment/constructor")},{"../create/local":51,"../duration/create":60,"../moment/constructor":86}],91:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return function(a){return null!=a?(s(this,e,a),c.hooks.updateOffset(this,t),this):r(this,e)}}function r(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function s(e,t,a){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](a)}function i(e){return e=(0,l.normalizeUnits)(e),(0,m["default"])(this[e])?this[e]():this}function u(e,t){if("object"==typeof e){e=(0,l.normalizeObjectUnits)(e);for(var a=(0,d.getPrioritizedUnits)(e),n=0;n<a.length;n++)this[a[n].unit](e[a[n].unit])}else if(e=(0,l.normalizeUnits)(e),(0,m["default"])(this[e]))return this[e](t);return this}Object.defineProperty(a,"__esModule",{value:!0}),a.makeGetSet=o,a.get=r,a.set=s,a.stringGet=i,a.stringSet=u;var l=e("../units/aliases"),d=e("../units/priorities"),c=e("../utils/hooks"),f=e("../utils/is-function"),m=n(f)},{"../units/aliases":103,"../units/priorities":113,"../utils/hooks":131,"../utils/is-function":135}],92:[function(e,t,a){"use strict";function n(e){var t;return void 0===e?this._locale._abbr:(t=(0,r.getLocale)(e),null!=t&&(this._locale=t),this)}function o(){return this._locale}Object.defineProperty(a,"__esModule",{value:!0}),a.locale=n,a.localeData=o;var r=e("../locale/locales"),s=e("../utils/deprecate"),i=(0,s.deprecate)("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});a.lang=i},{"../locale/locales":76,"../utils/deprecate":128}],93:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a,n;if(1===t.length&&(0,l["default"])(t[0])&&(t=t[0]),!t.length)return(0,d.createLocal)();for(a=t[0],n=1;n<t.length;++n)t[n].isValid()&&!t[n][e](a)||(a=t[n]);return a}function r(){var e=[].slice.call(arguments,0);return o("isBefore",e)}function s(){var e=[].slice.call(arguments,0);return o("isAfter",e)}Object.defineProperty(a,"__esModule",{value:!0}),a.min=r,a.max=s;var i=e("../utils/deprecate"),u=e("../utils/is-array"),l=n(u),d=e("../create/local"),c=e("../create/valid"),f=(0,i.deprecate)("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=d.createLocal.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:(0,c.createInvalid)()});a.prototypeMin=f;var m=(0,i.deprecate)("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=d.createLocal.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:(0,c.createInvalid)()});a.prototypeMax=m},{"../create/local":51,"../create/valid":54,"../utils/deprecate":128,"../utils/is-array":133}],94:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,s.createLocal)(1e3*e)}function r(){return s.createLocal.apply(null,arguments).parseZone()}Object.defineProperty(a,"__esModule",{value:!0});var s=e("../create/local"),i=e("../create/utc"),u=e("../create/valid"),l=e("./constructor"),d=e("./min-max"),c=e("./now"),f=e("./prototype"),m=n(f);a.now=c.now,a.min=d.min,a.max=d.max,a.isMoment=l.isMoment,a.createUTC=i.createUTC,a.createUnix=o,a.createLocal=s.createLocal,a.createInZone=r,a.createInvalid=u.createInvalid,a.momentPrototype=m["default"]},{"../create/local":51,"../create/utc":53,"../create/valid":54,"./constructor":86,"./min-max":93,"./now":95,"./prototype":96}],95:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){return Date.now?Date.now():+new Date};a.now=n},{}],96:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("./constructor"),o=e("./add-subtract"),r=e("./calendar"),s=e("./clone"),i=e("./compare"),u=e("./diff"),l=e("./format"),d=e("./from"),c=e("./to"),f=e("./get-set"),m=e("./locale"),h=e("./min-max"),p=e("./start-end-of"),g=e("./to-type"),_=e("./valid"),v=e("./creation-data"),y=e("../units/year"),k=e("../units/week-year"),M=e("../units/quarter"),w=e("../units/month"),b=e("../units/week"),j=e("../units/day-of-month"),x=e("../units/day-of-week"),O=e("../units/day-of-year"),P=e("../units/hour"),T=e("../units/minute"),S=e("../units/second"),D=e("../units/millisecond"),Y=e("../units/offset"),C=e("../units/timezone"),L=e("../utils/deprecate"),R=n.Moment.prototype;R.add=o.add,R.calendar=r.calendar,R.clone=s.clone,R.diff=u.diff,R.endOf=p.endOf,R.format=l.format,R.from=d.from,R.fromNow=d.fromNow,R.to=c.to,R.toNow=c.toNow,R.get=f.stringGet,R.invalidAt=_.invalidAt,R.isAfter=i.isAfter,R.isBefore=i.isBefore,R.isBetween=i.isBetween,R.isSame=i.isSame,R.isSameOrAfter=i.isSameOrAfter,R.isSameOrBefore=i.isSameOrBefore,R.isValid=_.isValid,R.lang=m.lang,R.locale=m.locale,R.localeData=m.localeData,R.max=h.prototypeMax,R.min=h.prototypeMin,R.parsingFlags=_.parsingFlags,R.set=f.stringSet,R.startOf=p.startOf,R.subtract=o.subtract,R.toArray=g.toArray,R.toObject=g.toObject,R.toDate=g.toDate,R.toISOString=l.toISOString,R.inspect=l.inspect,R.toJSON=g.toJSON,R.toString=l.toString,R.unix=g.unix,R.valueOf=g.valueOf,R.creationData=v.creationData,R.year=y.getSetYear,R.isLeapYear=y.getIsLeapYear,R.weekYear=k.getSetWeekYear,R.isoWeekYear=k.getSetISOWeekYear,R.quarter=R.quarters=M.getSetQuarter,R.month=w.getSetMonth,R.daysInMonth=w.getDaysInMonth,R.week=R.weeks=b.getSetWeek,R.isoWeek=R.isoWeeks=b.getSetISOWeek,R.weeksInYear=k.getWeeksInYear,R.isoWeeksInYear=k.getISOWeeksInYear,R.date=j.getSetDayOfMonth,R.day=R.days=x.getSetDayOfWeek,R.weekday=x.getSetLocaleDayOfWeek,R.isoWeekday=x.getSetISODayOfWeek,R.dayOfYear=O.getSetDayOfYear,R.hour=R.hours=P.getSetHour,R.minute=R.minutes=T.getSetMinute,R.second=R.seconds=S.getSetSecond,R.millisecond=R.milliseconds=D.getSetMillisecond,R.utcOffset=Y.getSetOffset,R.utc=Y.setOffsetToUTC,R.local=Y.setOffsetToLocal,R.parseZone=Y.setOffsetToParsedOffset,R.hasAlignedHourOffset=Y.hasAlignedHourOffset,R.isDST=Y.isDaylightSavingTime,R.isLocal=Y.isLocal,R.isUtcOffset=Y.isUtcOffset,R.isUtc=Y.isUtc,R.isUTC=Y.isUtc,R.zoneAbbr=C.getZoneAbbr,R.zoneName=C.getZoneName,R.dates=(0,L.deprecate)("dates accessor is deprecated. Use date instead.",j.getSetDayOfMonth),R.months=(0,L.deprecate)("months accessor is deprecated. Use month instead",w.getSetMonth),R.years=(0,L.deprecate)("years accessor is deprecated. Use year instead",y.getSetYear),R.zone=(0,L.deprecate)("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Y.getSetZone),R.isDSTShifted=(0,L.deprecate)("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Y.isDaylightSavingTimeShifted),a["default"]=R,t.exports=a["default"]},{"../units/day-of-month":105,"../units/day-of-week":106,"../units/day-of-year":107,"../units/hour":108,"../units/millisecond":109,"../units/minute":110,"../units/month":111,"../units/offset":112,"../units/quarter":114,"../units/second":115,"../units/timezone":117,"../units/week":121,"../units/week-year":120,"../units/year":122,"../utils/deprecate":128,"./add-subtract":82,"./calendar":83,"./clone":84,"./compare":85,"./constructor":86,"./creation-data":87,"./diff":88,"./format":89,"./from":90,"./get-set":91,"./locale":92,"./min-max":93,"./start-end-of":97,"./to":99,"./to-type":98,"./valid":100}],97:[function(e,t,a){"use strict";function n(e){switch(e=(0,r.normalizeUnits)(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function o(e){return e=(0,r.normalizeUnits)(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}Object.defineProperty(a,"__esModule",{value:!0}),a.startOf=n,a.endOf=o;var r=e("../units/aliases")},{"../units/aliases":103}],98:[function(e,t,a){"use strict";function n(){return this._d.valueOf()-6e4*(this._offset||0)}function o(){return Math.floor(this.valueOf()/1e3)}function r(){return new Date(this.valueOf())}function s(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function i(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function u(){return this.isValid()?this.toISOString():null}Object.defineProperty(a,"__esModule",{value:!0}),a.valueOf=n,a.unix=o,a.toDate=r,a.toArray=s,a.toObject=i,a.toJSON=u},{}],99:[function(e,t,a){"use strict";function n(e,t){return this.isValid()&&((0,i.isMoment)(e)&&e.isValid()||(0,s.createLocal)(e).isValid())?(0,r.createDuration)({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function o(e){return this.to((0,s.createLocal)(),e)}Object.defineProperty(a,"__esModule",{value:!0}),a.to=n,a.toNow=o;var r=e("../duration/create"),s=e("../create/local"),i=e("../moment/constructor")},{"../create/local":51,"../duration/create":60,"../moment/constructor":86}],100:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){return(0,i.isValid)(this)}function r(){return(0,l["default"])({},(0,c["default"])(this))}function s(){return(0,c["default"])(this).overflow}Object.defineProperty(a,"__esModule",{value:!0}),a.isValid=o,a.parsingFlags=r,a.invalidAt=s;var i=e("../create/valid"),u=e("../utils/extend"),l=n(u),d=e("../create/parsing-flags"),c=n(d)},{"../create/parsing-flags":52,"../create/valid":54,"../utils/extend":129}],101:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){S[e]=(0,c["default"])(t)?t:function(e,n){return e&&a?a:t}}function r(e,t){return(0,l["default"])(S,e)?S[e](t._strict,t._locale):new RegExp(s(e))}function s(e){return i(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,a,n,o){return t||a||n||o}))}function i(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}Object.defineProperty(a,"__esModule",{value:!0}),a.addRegexToken=o,a.getParseRegexForToken=r,a.regexEscape=i;var u=e("../utils/has-own-prop"),l=n(u),d=e("../utils/is-function"),c=n(d),f=/\d/;a.match1=f;var m=/\d\d/;a.match2=m;var h=/\d{3}/;a.match3=h;var p=/\d{4}/;a.match4=p;var g=/[+-]?\d{6}/;a.match6=g;var _=/\d\d?/;a.match1to2=_;var v=/\d\d\d\d?/;a.match3to4=v;var y=/\d\d\d\d\d\d?/;a.match5to6=y;var k=/\d{1,3}/;a.match1to3=k;var M=/\d{1,4}/;a.match1to4=M;var w=/[+-]?\d{1,6}/;a.match1to6=w;var b=/\d+/;a.matchUnsigned=b;var j=/[+-]?\d+/;a.matchSigned=j;var x=/Z|[+-]\d\d:?\d\d/gi;a.matchOffset=x;var O=/Z|[+-]\d\d(?::?\d\d)?/gi;a.matchShortOffset=O;var P=/[+-]?\d+(\.\d{1,3})?/;a.matchTimestamp=P;var T=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;a.matchWord=T;var S={}},{"../utils/has-own-prop":130,"../utils/is-function":135}],102:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a,n=t;for("string"==typeof e&&(e=[e]),(0,d["default"])(t)&&(n=function(e,a){a[t]=(0,f["default"])(e)}),a=0;a<e.length;a++)m[e[a]]=n}function r(e,t){o(e,function(e,a,n,o){n._w=n._w||{},t(e,n._w,n,o)})}function s(e,t,a){null!=t&&(0,u["default"])(m,e)&&m[e](t,a._a,a,e)}Object.defineProperty(a,"__esModule",{value:!0}),a.addParseToken=o,a.addWeekParseToken=r,a.addTimeToArrayFromToken=s;var i=e("../utils/has-own-prop"),u=n(i),l=e("../utils/is-number"),d=n(l),c=e("../utils/to-int"),f=n(c),m={}},{"../utils/has-own-prop":130,"../utils/is-number":136,"../utils/to-int":143}],103:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var a=e.toLowerCase();l[a]=l[a+"s"]=l[t]=e}function r(e){return"string"==typeof e?l[e]||l[e.toLowerCase()]:void 0}function s(e){var t,a,n={};for(a in e)(0,u["default"])(e,a)&&(t=r(a),t&&(n[t]=e[a]));return n}Object.defineProperty(a,"__esModule",{value:!0}),a.addUnitAlias=o,a.normalizeUnits=r,a.normalizeObjectUnits=s;var i=e("../utils/has-own-prop"),u=n(i),l={}},{"../utils/has-own-prop":130}],104:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=0;a.YEAR=n;var o=1;a.MONTH=o;var r=2;a.DATE=r;var s=3;a.HOUR=s;var i=4;a.MINUTE=i;var u=5;a.SECOND=u;var l=6;a.MILLISECOND=l;var d=7;a.WEEK=d;var c=8;a.WEEKDAY=c},{}],105:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("../moment/get-set"),r=e("../format/format"),s=e("./aliases"),i=e("./priorities"),u=e("../parse/regex"),l=e("../parse/token"),d=e("./constants"),c=e("../utils/to-int"),f=n(c);(0,r.addFormatToken)("D",["DD",2],"Do","date"),(0,s.addUnitAlias)("date","D"),(0,i.addUnitPriority)("date",9),(0,u.addRegexToken)("D",u.match1to2),(0,u.addRegexToken)("DD",u.match1to2,u.match2),(0,u.addRegexToken)("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),(0,l.addParseToken)(["D","DD"],d.DATE),(0,l.addParseToken)("Do",function(e,t){t[d.DATE]=(0,f["default"])(e.match(u.match1to2)[0],10)});var m=(0,o.makeGetSet)("Date",!0);a.getSetDayOfMonth=m},{"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"./aliases":103,"./constants":104,"./priorities":113}],106:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function r(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function s(e,t){return e?(0,O["default"])(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:(0,O["default"])(this._weekdays)?this._weekdays:this._weekdays.standalone}function i(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function u(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function l(e,t,a){var n,o,r,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)r=(0,Y.createUTC)([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(r,"").toLocaleLowerCase();return a?"dddd"===t?(o=T["default"].call(this._weekdaysParse,s),o!==-1?o:null):"ddd"===t?(o=T["default"].call(this._shortWeekdaysParse,s),o!==-1?o:null):(o=T["default"].call(this._minWeekdaysParse,s),o!==-1?o:null):"dddd"===t?(o=T["default"].call(this._weekdaysParse,s),o!==-1?o:(o=T["default"].call(this._shortWeekdaysParse,s),o!==-1?o:(o=T["default"].call(this._minWeekdaysParse,s),o!==-1?o:null))):"ddd"===t?(o=T["default"].call(this._shortWeekdaysParse,s),o!==-1?o:(o=T["default"].call(this._weekdaysParse,s),o!==-1?o:(o=T["default"].call(this._minWeekdaysParse,s),o!==-1?o:null))):(o=T["default"].call(this._minWeekdaysParse,s),o!==-1?o:(o=T["default"].call(this._weekdaysParse,s),o!==-1?o:(o=T["default"].call(this._shortWeekdaysParse,s),o!==-1?o:null)))}function d(e,t,a){var n,o,r;if(this._weekdaysParseExact)return l.call(this,e,t,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(o=(0,Y.createUTC)([2e3,1]).day(n),a&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(o,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(o,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(o,"").replace(".",".?")+"$","i")),this._weekdaysParse[n]||(r="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[n]=new RegExp(r.replace(".",""),"i")),a&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n;if(a&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n;if(a&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n;if(!a&&this._weekdaysParse[n].test(e))return n}}function c(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=o(e,this.localeData()),this.add(e-t,"d")):t}function f(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function m(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=r(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function h(e){return this._weekdaysParseExact?((0,D["default"])(this,"_weekdaysRegex")||_.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):((0,D["default"])(this,"_weekdaysRegex")||(this._weekdaysRegex=A),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function p(e){return this._weekdaysParseExact?((0,D["default"])(this,"_weekdaysRegex")||_.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):((0,D["default"])(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=I),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function g(e){return this._weekdaysParseExact?((0,D["default"])(this,"_weekdaysRegex")||_.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):((0,D["default"])(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=W),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function _(){function e(e,t){return t.length-e.length}var t,a,n,o,r,s=[],i=[],u=[],l=[];for(t=0;t<7;t++)a=(0,Y.createUTC)([2e3,1]).day(t),n=this.weekdaysMin(a,""),o=this.weekdaysShort(a,""),r=this.weekdays(a,""),s.push(n),i.push(o),u.push(r),l.push(n),l.push(o),l.push(r);for(s.sort(e),i.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)i[t]=(0,M.regexEscape)(i[t]),u[t]=(0,M.regexEscape)(u[t]),l[t]=(0,M.regexEscape)(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}Object.defineProperty(a,"__esModule",{value:!0}),a.localeWeekdays=s,a.localeWeekdaysShort=i,a.localeWeekdaysMin=u,a.localeWeekdaysParse=d,a.getSetDayOfWeek=c,a.getSetLocaleDayOfWeek=f,a.getSetISODayOfWeek=m,a.weekdaysRegex=h,a.weekdaysShortRegex=p,a.weekdaysMinRegex=g;var v=e("../format/format"),y=e("./aliases"),k=e("./priorities"),M=e("../parse/regex"),w=e("../parse/token"),b=e("../utils/to-int"),j=n(b),x=e("../utils/is-array"),O=n(x),P=e("../utils/index-of"),T=n(P),S=e("../utils/has-own-prop"),D=n(S),Y=e("../create/utc"),C=e("../create/parsing-flags"),L=n(C);(0,v.addFormatToken)("d",0,"do","day"),(0,v.addFormatToken)("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),(0,v.addFormatToken)("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),(0,v.addFormatToken)("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),(0,v.addFormatToken)("e",0,0,"weekday"),(0,v.addFormatToken)("E",0,0,"isoWeekday"),(0,y.addUnitAlias)("day","d"),(0,y.addUnitAlias)("weekday","e"),(0,y.addUnitAlias)("isoWeekday","E"),(0,k.addUnitPriority)("day",11),(0,k.addUnitPriority)("weekday",11),(0,k.addUnitPriority)("isoWeekday",11),(0,M.addRegexToken)("d",M.match1to2),(0,M.addRegexToken)("e",M.match1to2),(0,M.addRegexToken)("E",M.match1to2),(0,M.addRegexToken)("dd",function(e,t){return t.weekdaysMinRegex(e)}),(0,M.addRegexToken)("ddd",function(e,t){return t.weekdaysShortRegex(e)}),(0,M.addRegexToken)("dddd",function(e,t){return t.weekdaysRegex(e)}),(0,w.addWeekParseToken)(["dd","ddd","dddd"],function(e,t,a,n){var o=a._locale.weekdaysParse(e,n,a._strict);null!=o?t.d=o:(0,L["default"])(a).invalidWeekday=e}),(0,w.addWeekParseToken)(["d","e","E"],function(e,t,a,n){t[n]=(0,j["default"])(e)});var R="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");a.defaultLocaleWeekdays=R;var F="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");a.defaultLocaleWeekdaysShort=F;var U="Su_Mo_Tu_We_Th_Fr_Sa".split("_");a.defaultLocaleWeekdaysMin=U;var A=M.matchWord,I=M.matchWord,W=M.matchWord},{"../create/parsing-flags":52,"../create/utc":53,"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/has-own-prop":130,"../utils/index-of":132,"../utils/is-array":133,"../utils/to-int":143,"./aliases":103,"./priorities":113}],107:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}Object.defineProperty(a,"__esModule",{value:!0}),a.getSetDayOfYear=o;var r=e("../format/format"),s=e("./aliases"),i=e("./priorities"),u=e("../parse/regex"),l=(e("./year"),e("../create/date-from-array"),e("../parse/token")),d=e("../utils/to-int"),c=n(d);(0,r.addFormatToken)("DDD",["DDDD",3],"DDDo","dayOfYear"),(0,s.addUnitAlias)("dayOfYear","DDD"),(0,i.addUnitPriority)("dayOfYear",4),(0,u.addRegexToken)("DDD",u.match1to3),(0,u.addRegexToken)("DDDD",u.match3),(0,l.addParseToken)(["DDD","DDDD"],function(e,t,a){a._dayOfYear=(0,c["default"])(e)})},{"../create/date-from-array":44,"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"./aliases":103,"./priorities":113,"./year":122}],108:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){return this.hours()%12||12}function r(){return this.hours()||24}function s(e,t){(0,c.addFormatToken)(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function i(e,t){return t._meridiemParse}function u(e){return"p"===(e+"").toLowerCase().charAt(0)}function l(e,t,a){return e>11?a?"pm":"PM":a?"am":"AM"}Object.defineProperty(a,"__esModule",{value:!0}),a.localeIsPM=u,a.localeMeridiem=l;var d=e("../moment/get-set"),c=e("../format/format"),f=e("./aliases"),m=e("./priorities"),h=e("../parse/regex"),p=e("../parse/token"),g=e("./constants"),_=e("../utils/to-int"),v=n(_),y=e("../utils/zero-fill"),k=n(y),M=e("../create/parsing-flags"),w=n(M);(0,c.addFormatToken)("H",["HH",2],0,"hour"),(0,c.addFormatToken)("h",["hh",2],0,o),(0,c.addFormatToken)("k",["kk",2],0,r),(0,c.addFormatToken)("hmm",0,0,function(){return""+o.apply(this)+(0,k["default"])(this.minutes(),2)}),(0,c.addFormatToken)("hmmss",0,0,function(){return""+o.apply(this)+(0,k["default"])(this.minutes(),2)+(0,k["default"])(this.seconds(),2)}),(0,c.addFormatToken)("Hmm",0,0,function(){return""+this.hours()+(0,k["default"])(this.minutes(),2)}),(0,c.addFormatToken)("Hmmss",0,0,function(){return""+this.hours()+(0,k["default"])(this.minutes(),2)+(0,k["default"])(this.seconds(),2)}),s("a",!0),s("A",!1),(0,f.addUnitAlias)("hour","h"),(0,m.addUnitPriority)("hour",13),(0,h.addRegexToken)("a",i),(0,h.addRegexToken)("A",i),(0,h.addRegexToken)("H",h.match1to2),(0,h.addRegexToken)("h",h.match1to2),(0,h.addRegexToken)("k",h.match1to2),(0,h.addRegexToken)("HH",h.match1to2,h.match2),(0,h.addRegexToken)("hh",h.match1to2,h.match2),(0,h.addRegexToken)("kk",h.match1to2,h.match2),(0,h.addRegexToken)("hmm",h.match3to4),(0,h.addRegexToken)("hmmss",h.match5to6),(0,h.addRegexToken)("Hmm",h.match3to4),(0,h.addRegexToken)("Hmmss",h.match5to6),(0,p.addParseToken)(["H","HH"],g.HOUR),(0,p.addParseToken)(["k","kk"],function(e,t,a){var n=(0,v["default"])(e);t[g.HOUR]=24===n?0:n}),(0,p.addParseToken)(["a","A"],function(e,t,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),(0,p.addParseToken)(["h","hh"],function(e,t,a){t[g.HOUR]=(0,v["default"])(e),(0,w["default"])(a).bigHour=!0}),(0,p.addParseToken)("hmm",function(e,t,a){var n=e.length-2;t[g.HOUR]=(0,v["default"])(e.substr(0,n)),t[g.MINUTE]=(0,v["default"])(e.substr(n)),(0,w["default"])(a).bigHour=!0}),(0,p.addParseToken)("hmmss",function(e,t,a){var n=e.length-4,o=e.length-2;t[g.HOUR]=(0,v["default"])(e.substr(0,n)),t[g.MINUTE]=(0,v["default"])(e.substr(n,2)),t[g.SECOND]=(0,v["default"])(e.substr(o)),(0,w["default"])(a).bigHour=!0}),(0,p.addParseToken)("Hmm",function(e,t,a){var n=e.length-2;t[g.HOUR]=(0,v["default"])(e.substr(0,n)),t[g.MINUTE]=(0,v["default"])(e.substr(n))}),(0,p.addParseToken)("Hmmss",function(e,t,a){var n=e.length-4,o=e.length-2;t[g.HOUR]=(0,v["default"])(e.substr(0,n)),t[g.MINUTE]=(0,v["default"])(e.substr(n,2)),t[g.SECOND]=(0,v["default"])(e.substr(o))});var b=/[ap]\.?m?\.?/i;a.defaultLocaleMeridiemParse=b;var j=(0,d.makeGetSet)("Hours",!0);a.getSetHour=j},{"../create/parsing-flags":52,"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"../utils/zero-fill":144,"./aliases":103,"./constants":104,"./priorities":113}],109:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){t[c.MILLISECOND]=(0,m["default"])(1e3*("0."+e))}Object.defineProperty(a,"__esModule",{value:!0});var r=e("../moment/get-set"),s=e("../format/format"),i=e("./aliases"),u=e("./priorities"),l=e("../parse/regex"),d=e("../parse/token"),c=e("./constants"),f=e("../utils/to-int"),m=n(f);(0,s.addFormatToken)("S",0,0,function(){return~~(this.millisecond()/100)}),(0,s.addFormatToken)(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),(0,s.addFormatToken)(0,["SSS",3],0,"millisecond"),(0,s.addFormatToken)(0,["SSSS",4],0,function(){return 10*this.millisecond()}),(0,s.addFormatToken)(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),(0,s.addFormatToken)(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),(0,s.addFormatToken)(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),(0,s.addFormatToken)(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),(0,s.addFormatToken)(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),(0,i.addUnitAlias)("millisecond","ms"),(0,u.addUnitPriority)("millisecond",16),(0,l.addRegexToken)("S",l.match1to3,l.match1),(0,l.addRegexToken)("SS",l.match1to3,l.match2),(0,l.addRegexToken)("SSS",l.match1to3,l.match3);var h;for(h="SSSS";h.length<=9;h+="S")(0,l.addRegexToken)(h,l.matchUnsigned);for(h="S";h.length<=9;h+="S")(0,d.addParseToken)(h,o);var p=(0,r.makeGetSet)("Milliseconds",!1);a.getSetMillisecond=p},{"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"./aliases":103,"./constants":104,"./priorities":113}],110:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("../moment/get-set"),o=e("../format/format"),r=e("./aliases"),s=e("./priorities"),i=e("../parse/regex"),u=e("../parse/token"),l=e("./constants");(0,o.addFormatToken)("m",["mm",2],0,"minute"),(0,r.addUnitAlias)("minute","m"),(0,s.addUnitPriority)("minute",14),(0,i.addRegexToken)("m",i.match1to2),(0,i.addRegexToken)("mm",i.match1to2,i.match2),(0,u.addParseToken)(["m","mm"],l.MINUTE);var d=(0,n.makeGetSet)("Minutes",!1);a.getSetMinute=d},{"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"./aliases":103,"./constants":104,"./priorities":113}],111:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function r(e,t){return e?(0,T["default"])(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||U).test(t)?"format":"standalone"][e.month()]:(0,T["default"])(this._months)?this._months:this._months.standalone}function s(e,t){return e?(0,T["default"])(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[U.test(t)?"format":"standalone"][e.month()]:(0,T["default"])(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function i(e,t,a){var n,o,r,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)r=(0,L.createUTC)([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(r,"").toLocaleLowerCase();return a?"MMM"===t?(o=C["default"].call(this._shortMonthsParse,s),o!==-1?o:null):(o=C["default"].call(this._longMonthsParse,s),o!==-1?o:null):"MMM"===t?(o=C["default"].call(this._shortMonthsParse,s),o!==-1?o:(o=C["default"].call(this._longMonthsParse,s),o!==-1?o:null)):(o=C["default"].call(this._longMonthsParse,s),o!==-1?o:(o=C["default"].call(this._shortMonthsParse,s),o!==-1?o:null))}function u(e,t,a){var n,o,r;if(this._monthsParseExact)return i.call(this,e,t,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(o=(0,L.createUTC)([2e3,n]),a&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),a||this._monthsParse[n]||(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[n]=new RegExp(r.replace(".",""),"i")),a&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n;if(a&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n;
if(!a&&this._monthsParse[n].test(e))return n}}function l(e,t){var a;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=(0,O["default"])(t);else if(t=e.localeData().monthsParse(t),!(0,D["default"])(t))return e;return a=Math.min(e.date(),o(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,a),e}function d(e){return null!=e?(l(this,e),b.hooks.updateOffset(this,!0),this):(0,p.get)(this,"Month")}function c(){return o(this.year(),this.month())}function f(e){return this._monthsParseExact?((0,_["default"])(this,"_monthsRegex")||h.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):((0,_["default"])(this,"_monthsShortRegex")||(this._monthsShortRegex=W),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function m(e){return this._monthsParseExact?((0,_["default"])(this,"_monthsRegex")||h.call(this),e?this._monthsStrictRegex:this._monthsRegex):((0,_["default"])(this,"_monthsRegex")||(this._monthsRegex=H),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function h(){function e(e,t){return t.length-e.length}var t,a,n=[],o=[],r=[];for(t=0;t<12;t++)a=(0,L.createUTC)([2e3,t]),n.push(this.monthsShort(a,"")),o.push(this.months(a,"")),r.push(this.months(a,"")),r.push(this.monthsShort(a,""));for(n.sort(e),o.sort(e),r.sort(e),t=0;t<12;t++)n[t]=(0,M.regexEscape)(n[t]),o[t]=(0,M.regexEscape)(o[t]);for(t=0;t<24;t++)r[t]=(0,M.regexEscape)(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}Object.defineProperty(a,"__esModule",{value:!0}),a.daysInMonth=o,a.localeMonths=r,a.localeMonthsShort=s,a.localeMonthsParse=u,a.setMonth=l,a.getSetMonth=d,a.getDaysInMonth=c,a.monthsShortRegex=f,a.monthsRegex=m;var p=e("../moment/get-set"),g=e("../utils/has-own-prop"),_=n(g),v=e("../format/format"),y=e("./aliases"),k=e("./priorities"),M=e("../parse/regex"),w=e("../parse/token"),b=e("../utils/hooks"),j=e("./constants"),x=e("../utils/to-int"),O=n(x),P=e("../utils/is-array"),T=n(P),S=e("../utils/is-number"),D=n(S),Y=e("../utils/index-of"),C=n(Y),L=e("../create/utc"),R=e("../create/parsing-flags"),F=n(R);(0,v.addFormatToken)("M",["MM",2],"Mo",function(){return this.month()+1}),(0,v.addFormatToken)("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),(0,v.addFormatToken)("MMMM",0,0,function(e){return this.localeData().months(this,e)}),(0,y.addUnitAlias)("month","M"),(0,k.addUnitPriority)("month",8),(0,M.addRegexToken)("M",M.match1to2),(0,M.addRegexToken)("MM",M.match1to2,M.match2),(0,M.addRegexToken)("MMM",function(e,t){return t.monthsShortRegex(e)}),(0,M.addRegexToken)("MMMM",function(e,t){return t.monthsRegex(e)}),(0,w.addParseToken)(["M","MM"],function(e,t){t[j.MONTH]=(0,O["default"])(e)-1}),(0,w.addParseToken)(["MMM","MMMM"],function(e,t,a,n){var o=a._locale.monthsParse(e,n,a._strict);null!=o?t[j.MONTH]=o:(0,F["default"])(a).invalidMonth=e});var U=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,A="January_February_March_April_May_June_July_August_September_October_November_December".split("_");a.defaultLocaleMonths=A;var I="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");a.defaultLocaleMonthsShort=I;var W=M.matchWord,H=M.matchWord},{"../create/parsing-flags":52,"../create/utc":53,"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"../utils/has-own-prop":130,"../utils/hooks":131,"../utils/index-of":132,"../utils/is-array":133,"../utils/is-number":136,"../utils/to-int":143,"./aliases":103,"./constants":104,"./priorities":113}],112:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){(0,j.addFormatToken)(e,0,0,function(){var e=this.utcOffset(),a="+";return e<0&&(e=-e,a="-"),a+(0,k["default"])(~~(e/60),2)+t+(0,k["default"])(~~e%60,2)})}function r(e,t){var a=(t||"").match(e);if(null===a)return null;var n=a[a.length-1]||[],o=(n+"").match(W)||["-",0,0],r=+(60*o[1])+(0,L["default"])(o[2]);return 0===r?0:"+"===o[0]?r:-r}function s(e,t){var a,n;return t._isUTC?(a=t.clone(),n=((0,b.isMoment)(e)||(0,Y["default"])(e)?e.valueOf():(0,P.createLocal)(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+n),I.hooks.updateOffset(a,!1),a):(0,P.createLocal)(e).local()}function i(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function u(e,t,a){var n,o=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=r(x.matchShortOffset,e),null===e)return this}else Math.abs(e)<16&&!a&&(e=60*e);return!this._isUTC&&t&&(n=i(this)),this._offset=e,this._isUTC=!0,null!=n&&this.add(n,"m"),o!==e&&(!t||this._changeInProgress?(0,w.addSubtract)(this,(0,M.createDuration)(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,I.hooks.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?o:i(this)}function l(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function d(e){return this.utcOffset(0,e)}function c(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(i(this),"m")),this}function f(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=r(x.matchOffset,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function m(e){return!!this.isValid()&&(e=e?(0,P.createLocal)(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function h(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function p(){if(!(0,F["default"])(this._isDSTShifted))return this._isDSTShifted;var e={};if((0,b.copyConfig)(e,this),e=(0,T.prepareConfig)(e),e._a){var t=e._isUTC?(0,S.createUTC)(e._a):(0,P.createLocal)(e._a);this._isDSTShifted=this.isValid()&&(0,A["default"])(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function g(){return!!this.isValid()&&!this._isUTC}function _(){return!!this.isValid()&&this._isUTC}function v(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}Object.defineProperty(a,"__esModule",{value:!0}),a.cloneWithOffset=s,a.getSetOffset=u,a.getSetZone=l,a.setOffsetToUTC=d,a.setOffsetToLocal=c,a.setOffsetToParsedOffset=f,a.hasAlignedHourOffset=m,a.isDaylightSavingTime=h,a.isDaylightSavingTimeShifted=p,a.isLocal=g,a.isUtcOffset=_,a.isUtc=v;var y=e("../utils/zero-fill"),k=n(y),M=e("../duration/create"),w=e("../moment/add-subtract"),b=e("../moment/constructor"),j=e("../format/format"),x=e("../parse/regex"),O=e("../parse/token"),P=e("../create/local"),T=e("../create/from-anything"),S=e("../create/utc"),D=e("../utils/is-date"),Y=n(D),C=e("../utils/to-int"),L=n(C),R=e("../utils/is-undefined"),F=n(R),U=e("../utils/compare-arrays"),A=n(U),I=e("../utils/hooks");o("Z",":"),o("ZZ",""),(0,x.addRegexToken)("Z",x.matchShortOffset),(0,x.addRegexToken)("ZZ",x.matchShortOffset),(0,O.addParseToken)(["Z","ZZ"],function(e,t,a){a._useUTC=!0,a._tzm=r(x.matchShortOffset,e)});var W=/([\+\-]|\d\d)/gi;I.hooks.updateOffset=function(){}},{"../create/from-anything":45,"../create/local":51,"../create/utc":53,"../duration/create":60,"../format/format":67,"../moment/add-subtract":82,"../moment/constructor":86,"../parse/regex":101,"../parse/token":102,"../utils/compare-arrays":126,"../utils/hooks":131,"../utils/is-date":134,"../utils/is-undefined":139,"../utils/to-int":143,"../utils/zero-fill":144}],113:[function(e,t,a){"use strict";function n(e,t){r[e]=t}function o(e){var t=[];for(var a in e)t.push({unit:a,priority:r[a]});return t.sort(function(e,t){return e.priority-t.priority}),t}Object.defineProperty(a,"__esModule",{value:!0}),a.addUnitPriority=n,a.getPrioritizedUnits=o;var r={}},{}],114:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}Object.defineProperty(a,"__esModule",{value:!0}),a.getSetQuarter=o;var r=e("../format/format"),s=e("./aliases"),i=e("./priorities"),u=e("../parse/regex"),l=e("../parse/token"),d=e("./constants"),c=e("../utils/to-int"),f=n(c);(0,r.addFormatToken)("Q",0,"Qo","quarter"),(0,s.addUnitAlias)("quarter","Q"),(0,i.addUnitPriority)("quarter",7),(0,u.addRegexToken)("Q",u.match1),(0,l.addParseToken)("Q",function(e,t){t[d.MONTH]=3*((0,f["default"])(e)-1)})},{"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"./aliases":103,"./constants":104,"./priorities":113}],115:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("../moment/get-set"),o=e("../format/format"),r=e("./aliases"),s=e("./priorities"),i=e("../parse/regex"),u=e("../parse/token"),l=e("./constants");(0,o.addFormatToken)("s",["ss",2],0,"second"),(0,r.addUnitAlias)("second","s"),(0,s.addUnitPriority)("second",15),(0,i.addRegexToken)("s",i.match1to2),(0,i.addRegexToken)("ss",i.match1to2,i.match2),(0,u.addParseToken)(["s","ss"],l.SECOND);var d=(0,n.makeGetSet)("Seconds",!1);a.getSetSecond=d},{"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"./aliases":103,"./constants":104,"./priorities":113}],116:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=e("../format/format"),r=e("../parse/regex"),s=e("../parse/token"),i=e("../utils/to-int"),u=n(i);(0,o.addFormatToken)("X",0,0,"unix"),(0,o.addFormatToken)("x",0,0,"valueOf"),(0,r.addRegexToken)("x",r.matchSigned),(0,r.addRegexToken)("X",r.matchTimestamp),(0,s.addParseToken)("X",function(e,t,a){a._d=new Date(1e3*parseFloat(e,10))}),(0,s.addParseToken)("x",function(e,t,a){a._d=new Date((0,u["default"])(e))})},{"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143}],117:[function(e,t,a){"use strict";function n(){return this._isUTC?"UTC":""}function o(){return this._isUTC?"Coordinated Universal Time":""}Object.defineProperty(a,"__esModule",{value:!0}),a.getZoneAbbr=n,a.getZoneName=o;var r=e("../format/format");(0,r.addFormatToken)("z",0,0,"zoneAbbr"),(0,r.addFormatToken)("zz",0,0,"zoneName")},{"../format/format":67}],118:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),e("./day-of-month"),e("./day-of-week"),e("./day-of-year"),e("./hour"),e("./millisecond"),e("./minute"),e("./month"),e("./offset"),e("./quarter"),e("./second"),e("./timestamp"),e("./timezone"),e("./week-year"),e("./week"),e("./year");var n=e("./aliases");a.normalizeUnits=n.normalizeUnits},{"./aliases":103,"./day-of-month":105,"./day-of-week":106,"./day-of-year":107,"./hour":108,"./millisecond":109,"./minute":110,"./month":111,"./offset":112,"./quarter":114,"./second":115,"./timestamp":116,"./timezone":117,"./week":121,"./week-year":120,"./year":122}],119:[function(e,t,a){"use strict";function n(e,t,a){var n=7+t-a,o=(7+(0,u.createUTCDate)(e,0,n).getUTCDay()-t)%7;return-o+n-1}function o(e,t,a,o,r){var s,u,l=(7+a-o)%7,d=n(e,o,r),c=1+7*(t-1)+l+d;return c<=0?(s=e-1,u=(0,i.daysInYear)(s)+c):c>(0,i.daysInYear)(e)?(s=e+1,u=c-(0,i.daysInYear)(e)):(s=e,u=c),{year:s,dayOfYear:u}}function r(e,t,a){var o,r,i=n(e.year(),t,a),u=Math.floor((e.dayOfYear()-i-1)/7)+1;return u<1?(r=e.year()-1,o=u+s(r,t,a)):u>s(e.year(),t,a)?(o=u-s(e.year(),t,a),r=e.year()+1):(r=e.year(),o=u),{week:o,year:r}}function s(e,t,a){var o=n(e,t,a),r=n(e+1,t,a);return((0,i.daysInYear)(e)-o+r)/7}Object.defineProperty(a,"__esModule",{value:!0}),a.dayOfYearFromWeeks=o,a.weekOfYear=r,a.weeksInYear=s;var i=e("./year"),u=(e("../create/local"),e("../create/date-from-array"))},{"../create/date-from-array":44,"../create/local":51,"./year":122}],120:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){(0,c.addFormatToken)(0,[e,e.length],0,t)}function r(e){return l.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function s(e){return l.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function i(){return(0,g.weeksInYear)(this.year(),1,4)}function u(){var e=this.localeData()._week;return(0,g.weeksInYear)(this.year(),e.dow,e.doy)}function l(e,t,a,n,o){var r;return null==e?(0,g.weekOfYear)(this,n,o).year:(r=(0,g.weeksInYear)(e,n,o),t>r&&(t=r),d.call(this,e,t,a,n,o))}function d(e,t,a,n,o){var r=(0,g.dayOfYearFromWeeks)(e,t,a,n,o),s=(0,k.createUTCDate)(r.year,0,r.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}Object.defineProperty(a,"__esModule",{value:!0}),a.getSetWeekYear=r,a.getSetISOWeekYear=s,a.getISOWeeksInYear=i,a.getWeeksInYear=u;var c=e("../format/format"),f=e("./aliases"),m=e("./priorities"),h=e("../parse/regex"),p=e("../parse/token"),g=e("./week-calendar-utils"),_=e("../utils/to-int"),v=n(_),y=e("../utils/hooks"),k=(e("../create/local"),e("../create/date-from-array"));(0,c.addFormatToken)(0,["gg",2],0,function(){return this.weekYear()%100}),(0,c.addFormatToken)(0,["GG",2],0,function(){return this.isoWeekYear()%100}),o("gggg","weekYear"),o("ggggg","weekYear"),o("GGGG","isoWeekYear"),o("GGGGG","isoWeekYear"),(0,f.addUnitAlias)("weekYear","gg"),(0,f.addUnitAlias)("isoWeekYear","GG"),(0,m.addUnitPriority)("weekYear",1),(0,m.addUnitPriority)("isoWeekYear",1),(0,h.addRegexToken)("G",h.matchSigned),(0,h.addRegexToken)("g",h.matchSigned),(0,h.addRegexToken)("GG",h.match1to2,h.match2),(0,h.addRegexToken)("gg",h.match1to2,h.match2),(0,h.addRegexToken)("GGGG",h.match1to4,h.match4),(0,h.addRegexToken)("gggg",h.match1to4,h.match4),(0,h.addRegexToken)("GGGGG",h.match1to6,h.match6),(0,h.addRegexToken)("ggggg",h.match1to6,h.match6),(0,p.addWeekParseToken)(["gggg","ggggg","GGGG","GGGGG"],function(e,t,a,n){t[n.substr(0,2)]=(0,v["default"])(e)}),(0,p.addWeekParseToken)(["gg","GG"],function(e,t,a,n){t[n]=y.hooks.parseTwoDigitYear(e)})},{"../create/date-from-array":44,"../create/local":51,"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/hooks":131,"../utils/to-int":143,"./aliases":103,"./priorities":113,"./week-calendar-utils":119}],121:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return(0,g.weekOfYear)(e,this._week.dow,this._week.doy).week}function r(){return this._week.dow}function s(){return this._week.doy}function i(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function u(e){var t=(0,g.weekOfYear)(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}Object.defineProperty(a,"__esModule",{value:!0}),a.localeWeek=o,a.localeFirstDayOfWeek=r,a.localeFirstDayOfYear=s,a.getSetWeek=i,a.getSetISOWeek=u;var l=e("../format/format"),d=e("./aliases"),c=e("./priorities"),f=e("../parse/regex"),m=e("../parse/token"),h=e("../utils/to-int"),p=n(h),g=(e("../create/local"),e("./week-calendar-utils"));(0,l.addFormatToken)("w",["ww",2],"wo","week"),(0,l.addFormatToken)("W",["WW",2],"Wo","isoWeek"),(0,d.addUnitAlias)("week","w"),(0,d.addUnitAlias)("isoWeek","W"),(0,c.addUnitPriority)("week",5),(0,c.addUnitPriority)("isoWeek",5),(0,f.addRegexToken)("w",f.match1to2),(0,f.addRegexToken)("ww",f.match1to2,f.match2),(0,f.addRegexToken)("W",f.match1to2),(0,f.addRegexToken)("WW",f.match1to2,f.match2),(0,m.addWeekParseToken)(["w","ww","W","WW"],function(e,t,a,n){t[n.substr(0,1)]=(0,p["default"])(e)});var _={dow:0,doy:6};a.defaultLocaleWeek=_},{"../create/local":51,"../format/format":67,"../parse/regex":101,"../parse/token":102,"../utils/to-int":143,"./aliases":103,"./priorities":113,"./week-calendar-utils":119}],122:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return r(e)?366:365}function r(e){return e%4===0&&e%100!==0||e%400===0}function s(){return r(this.year())}Object.defineProperty(a,"__esModule",{value:!0}),a.daysInYear=o,a.getIsLeapYear=s;var i=e("../moment/get-set"),u=e("../format/format"),l=e("./aliases"),d=e("./priorities"),c=e("../parse/regex"),f=e("../parse/token"),m=e("../utils/hooks"),h=e("./constants"),p=e("../utils/to-int"),g=n(p);(0,u.addFormatToken)("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),(0,u.addFormatToken)(0,["YY",2],0,function(){return this.year()%100}),(0,u.addFormatToken)(0,["YYYY",4],0,"year"),(0,u.addFormatToken)(0,["YYYYY",5],0,"year"),(0,u.addFormatToken)(0,["YYYYYY",6,!0],0,"year"),(0,l.addUnitAlias)("year","y"),(0,d.addUnitPriority)("year",1),(0,c.addRegexToken)("Y",c.matchSigned),(0,c.addRegexToken)("YY",c.match1to2,c.match2),(0,c.addRegexToken)("YYYY",c.match1to4,c.match4),(0,c.addRegexToken)("YYYYY",c.match1to6,c.match6),(0,c.addRegexToken)("YYYYYY",c.match1to6,c.match6),(0,f.addParseToken)(["YYYYY","YYYYYY"],h.YEAR),(0,f.addParseToken)("YYYY",function(e,t){t[h.YEAR]=2===e.length?m.hooks.parseTwoDigitYear(e):(0,g["default"])(e)}),(0,f.addParseToken)("YY",function(e,t){t[h.YEAR]=m.hooks.parseTwoDigitYear(e)}),(0,f.addParseToken)("Y",function(e,t){t[h.YEAR]=parseInt(e,10)}),m.hooks.parseTwoDigitYear=function(e){return(0,g["default"])(e)+((0,g["default"])(e)>68?1900:2e3)};var _=(0,i.makeGetSet)("FullYear",!0);a.getSetYear=_},{"../format/format":67,"../moment/get-set":91,"../parse/regex":101,"../parse/token":102,"../utils/hooks":131,"../utils/to-int":143,"./aliases":103,"./constants":104,"./priorities":113}],123:[function(e,t,a){"use strict";function n(e){return e<0?Math.floor(e):Math.ceil(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],124:[function(e,t,a){"use strict";function n(e){return e<0?Math.ceil(e)||0:Math.floor(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],125:[function(e,t,a){"use strict";function n(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],126:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,a){var n,o=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0;for(n=0;n<o;n++)(a&&e[n]!==t[n]||!a&&(0,s["default"])(e[n])!==(0,s["default"])(t[n]))&&i++;return i+r}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o;var r=e("./to-int"),s=n(r);t.exports=a["default"]},{"./to-int":143}],127:[function(e,t,a){"use strict";function n(e,t,a){return null!=e?e:null!=t?t:a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],128:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){l.hooks.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function r(e,t){var a=!0;return(0,u["default"])(function(){if(null!=l.hooks.deprecationHandler&&l.hooks.deprecationHandler(null,e),a){for(var n,r=[],s=0;s<arguments.length;s++){if(n="","object"==typeof arguments[s]){n+="\n["+s+"] ";for(var i in arguments[0])n+=i+": "+arguments[0][i]+", ";n=n.slice(0,-2)}else n=arguments[s];r.push(n)}o(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),a=!1}return t.apply(this,arguments)},t)}function s(e,t){null!=l.hooks.deprecationHandler&&l.hooks.deprecationHandler(e,t),c[e]||(o(t),c[e]=!0)}Object.defineProperty(a,"__esModule",{value:!0}),a.deprecate=r,a.deprecateSimple=s;var i=e("./extend"),u=n(i),l=e("./hooks"),d=e("./is-undefined"),c=(n(d),{});l.hooks.suppressDeprecationWarnings=!1,l.hooks.deprecationHandler=null},{"./extend":129,"./hooks":131,"./is-undefined":139}],129:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var a in t)(0,s["default"])(t,a)&&(e[a]=t[a]);return(0,s["default"])(t,"toString")&&(e.toString=t.toString),(0,s["default"])(t,"valueOf")&&(e.valueOf=t.valueOf),e}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o;var r=e("./has-own-prop"),s=n(r);t.exports=a["default"]},{"./has-own-prop":130}],130:[function(e,t,a){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],131:[function(e,t,a){"use strict";function n(){return r.apply(null,arguments)}function o(e){r=e}Object.defineProperty(a,"__esModule",{value:!0}),a.hooks=n,a.setHookCallback=o;var r},{}],132:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n;Array.prototype.indexOf?a["default"]=n=Array.prototype.indexOf:a["default"]=n=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},a["default"]=n,t.exports=a["default"]},{}],133:[function(e,t,a){"use strict";function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],134:[function(e,t,a){"use strict";function n(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],135:[function(e,t,a){"use strict";function n(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],136:[function(e,t,a){"use strict";function n(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],137:[function(e,t,a){"use strict";function n(e){var t;for(t in e)return!1;return!0}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],138:[function(e,t,a){"use strict";function n(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],139:[function(e,t,a){"use strict";function n(e){return void 0===e}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],140:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o,r=e("./has-own-prop"),s=n(r);Object.keys?a["default"]=o=Object.keys:a["default"]=o=function(e){var t,a=[];for(t in e)(0,s["default"])(e,t)&&a.push(t);return a},a["default"]=o,t.exports=a["default"]},{"./has-own-prop":130}],141:[function(e,t,a){"use strict";function n(e,t){var a,n=[];for(a=0;a<e.length;++a)n.push(t(e[a],a));return n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],142:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n;Array.prototype.some?a["default"]=n=Array.prototype.some:a["default"]=n=function(e){for(var t=Object(this),a=t.length>>>0,n=0;n<a;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1},a["default"]=n,t.exports=a["default"]},{}],143:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=+e,a=0;return 0!==t&&isFinite(t)&&(a=(0,s["default"])(t)),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=o;var r=e("./abs-floor"),s=n(r);t.exports=a["default"]},{"./abs-floor":124}],144:[function(e,t,a){"use strict";function n(e,t,a){var n=""+Math.abs(e),o=t-n.length,r=e>=0;return(r?a?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=n,t.exports=a["default"]},{}],145:[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var o=e("./lib/utils/hooks"),r=e("./lib/moment/moment"),s=e("./lib/moment/calendar"),i=e("./lib/locale/locale"),u=e("./lib/duration/duration"),l=e("./lib/units/units"),d=e("./lib/utils/is-date"),c=n(d);o.hooks.version="2.18.1",(0,o.setHookCallback)(r.createLocal),o.hooks.fn=r.momentPrototype,o.hooks.min=r.min,o.hooks.max=r.max,o.hooks.now=r.now,o.hooks.utc=r.createUTC,o.hooks.unix=r.createUnix,o.hooks.months=i.listMonths,o.hooks.isDate=c["default"],o.hooks.locale=i.getSetGlobalLocale,o.hooks.invalid=r.createInvalid,o.hooks.duration=u.createDuration,o.hooks.isMoment=r.isMoment,o.hooks.weekdays=i.listWeekdays,o.hooks.parseZone=r.createInZone,o.hooks.localeData=i.getLocale,o.hooks.isDuration=u.isDuration,o.hooks.monthsShort=i.listMonthsShort,o.hooks.weekdaysMin=i.listWeekdaysMin,o.hooks.defineLocale=i.defineLocale,o.hooks.updateLocale=i.updateLocale,o.hooks.locales=i.listLocales,o.hooks.weekdaysShort=i.listWeekdaysShort,o.hooks.normalizeUnits=l.normalizeUnits,o.hooks.relativeTimeRounding=u.getSetRelativeTimeRounding,o.hooks.relativeTimeThreshold=u.getSetRelativeTimeThreshold,o.hooks.calendarFormat=s.getCalendarFormat,o.hooks.prototype=r.momentPrototype,a["default"]=o.hooks,t.exports=a["default"]},{"./lib/duration/duration":61,"./lib/locale/locale":75,"./lib/moment/calendar":83,"./lib/moment/moment":94,"./lib/units/units":118,"./lib/utils/hooks":131,"./lib/utils/is-date":134}]},{},[11]);

;
/**
 * @file
 * Extends drupal view AJAX filtering functionality with accessible announcements.
 */
(function ($, Drupal) {
  'use strict';

  // @TODO: revisit and confirm this language.
  // See: https://jira.state.ma.us/browse/MASSGOV-1208
  var FILTERED_ANNOUNCEMENT = 'New content loaded. Now displaying a new set of filtered items.';

  Drupal.behaviors.ajaxViewsExt = {
    attach: function (context, settings) {
      // We hook off of the document-level view ajax event
      $(document).once('views-ajax').ajaxComplete(function (e, xhr, settings) {
        xhr.done(function () {
          Drupal.announce(
        Drupal.t(FILTERED_ANNOUNCEMENT)
      );
        });
      });
    }
  };
})(jQuery, Drupal);
;
(function ($) {
  'use strict';
  $('a[href]').click(function (e) {
    var href = $(this).attr('href');
    if (window.localStorage.noInterstitial && JSON.parse(window.localStorage.noInterstitial)) {
      return;
    }
    // regex to pass for a classic mass.gov link (portal and non-portal)
    var classicHrefRgx = /^((http(s)?:\/\/)?(www.)?mass.gov)\/(ago|anf|auditor|berkshireda|capeda|childadvocate|cjc|comptroller|courts|dor|dppc|edu|eea|elders|eohhs|eopss|essexda|essexsheriff|ethics|governor|hdc|hed|ig|informedma|lwd|massit|massworkforce|mcad|mdaa|mova|msa|mtrs|ocabr|osc|pca|perac|portal|recovery|srbtf|treasury|veterans|women|abcc|agr|bb|cgly|ClientsSecurityBoard|daplymouth|export|legis|norfolkda|opendata|better|obcbbo|smartplan)(\/.*)?$/i;

    if (href.match(classicHrefRgx)) {
      e.preventDefault();
      window.location = window.location.origin + '/leaving-pilot?continueURL=' + this.href;
    }
  });
})(jQuery);
;
/* global jQuery Drupal */

/**
 *  Components of autocomplete
 *  - templating/rendering
 *  - API interaction/mutation observer
 *
 *
 *  Required Markup:
 *
 * <div class="ma__suggestions-container js-suggestions-container">
    <div class="visually-hidden js-suggestions-help" role="status"  aria-live="polite"></div>
    <input
        id="..."
        class="..."
        autocomplete="off"
        data-suggest=""
        type="text" />
      <div class="ma__suggestions" data-suggestions=""></div>
    </div>
 */
window.MassSearch = window.MassSearch || {};

(function ($, Drupal) {
  'use strict';

  function arraysEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  function bindMutationObserver() {
    // This targets the injected google autocomplete markup
    // from google Custom Search JS
    // TODO: is this too brittle?
    var autocompleteParent = $('.gssb_c');

    var autocompleteMutationCallback = debounce(function (mutations) {
      var suggestionData = parseAutocompleteMarktupToJson(autocompleteParent);
      if (!window.MassSearch.cachedSuggestionData || !arraysEqual(window.MassSearch.cachedSuggestionData.suggestions, suggestionData.suggestions)) {
        updateAutocomplete(suggestionData);
        window.MassSearch.cachedSuggestionData = suggestionData;
      }
    }, 500);

    window.MassSearch.autocompleteObserver = new MutationObserver(autocompleteMutationCallback);
    var mutationObserverConfig = {attributes: true, childList: true, characterData: false};
    window.MassSearch.autocompleteObserver.observe(autocompleteParent[0], mutationObserverConfig);
  }

  function unbindMutationObserver() {
    if (window.MassSearch.autocompleteObserver) {
      window.MassSearch.autocompleteObserver.disconnect();
    }
  }

  function onGCSEload() {
    $('[data-suggest]').on('focus', function () {
      bindMutationObserver();
    });
    $('[data-suggest]').on('blur', unbindMutationObserver);

    $('[data-suggest]').on('autocomplete:suggestionsUpdated', function () {
      var input = $(this);
      var scope = input.parents('.js-suggestions-container');
      var suggestionList = $('[data-suggestions]', scope).attr('data-suggestions').split(',');
      $('[data-suggestions]', scope).html('<div role="listbox"></div>');
      $('.js-suggestions-help', scope).empty();

      var value = input.val();
      var suggestions = [].filter.call(suggestionList.sort(), function (suggestionItem) {
        return !suggestionItem.indexOf(value);
      });

      if (value) {
        $.each(suggestions, function (k, v) {
          $('[role="listbox"]', scope).append(
            '<div role="option" tabindex="-1" >' + v + '</div>'
          );
        });
        $('[role="listbox"]  [role="option"]', scope).each(function () {
          $(this).attr('id', input.attr('id') + '-' + $(this).index());
        });
        if (suggestions) {
          $('.js-suggestions-help', scope).text(
          'There are ' + suggestions.length + ' suggestions. Use the up and down arrows to browse.');
        }
      }

      input.on('keydown', function (e) {
        if (e.keyCode === 40) {
          e.preventDefault();
          $('[role="listbox"]', scope)
            .attr('tabindex', '0')
            .focus();
          $('[role="listbox"]').attr('aria-activedescendant', $('[role="listbox"] [role="option"]:first-child', scope).attr('id'));
          $('[role="listbox"] [role="option"]:first-child').addClass('selected');
          input.val($('.selected').text());
        }
        if (e.keyCode === 9) {
          $('[role="listbox"]', scope).remove();
        }
      });

      $('[role="listbox"]', scope).on('keydown', function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          input.focus();
        }
        var newOption;
        if (e.keyCode === 40) {
          e.preventDefault();
          newOption = $('.selected').next();
        }
        if (e.keyCode === 38) {
          e.preventDefault();
          newOption = $('.selected').prev();
        }
        if (newOption && newOption.length) {
          $('.selected').removeClass('selected');
          newOption.addClass('selected');
          $(this).attr('aria-activedescendant', newOption.attr('id'));
          input.val($('.selected').text());
        }
      });

      $('[role="listbox"]', scope).on('blur', function () {
        $(this).children().remove();
      });

      $('[role="option"]', scope).on('click', function () {
        $('[data-suggest]', scope).val($(this).text())
        .focus();
        $('[role="listbox"]', scope).remove();
      });

    });
  }

  // sync input with google input to trigger autocomplete under the hood
  $('[data-suggest]').on('keyup', function (event) {
    if (event.keyCode !== 13 && event.keyCode !== 38 && event.keyCode !== 40) {
      var value = $(this).val();
      var $googInput = $('[data-search-junk] .gsc-search-box input.gsc-input');
      $googInput.val(value);
      var evt = new Event('keyup');
      $googInput[0].dispatchEvent(evt);
    }
  });

  function updateAutocomplete(suggestionData) {
    $('[data-suggestions]').attr('data-suggestions', suggestionData.suggestions.join(','));
    $('[data-suggest]').trigger('autocomplete:suggestionsUpdated');
    Drupal.announce('Search suggestions have been updated.');
  }

  function parseAutocompleteMarktupToJson($rootNode) {
    var suggestions = [].map.call($rootNode.find('.gssb_a .gsq_a'), function (n) {
      return n.textContent.trim();
    })
    .filter(function (n) {
      if (n) { return n; }
    });

    return {
      suggestions: suggestions
    };
  }


  function CSEisLoaded() {
    return window.google && window.google.search && window.google.search.cse && window.google.search.cse.element;
  }

  function loadCSE(onGCSEloadCallback) {
    var $hiddenembed = $('<div data-search-junk="" style="display:none;"><gcse:searchbox-only enableHistory="false" gname="gcse"></gcse:searchbox-only></div>');
    $('body').append($hiddenembed);

    window.__gcse = {parsetags: 'onload', callback: onGCSEloadCallback};

    // var cx = '010551267445528504028:kfawarxz0gq'; // test
    var cx = '010551267445528504028:ivl9x2rf5e8'; // prod

    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }


  // Init
  if (!CSEisLoaded()) {
    loadCSE(onGCSEload);
  }

})(jQuery, Drupal);

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
 * This is a polyfill for array.prototype.includes()
 * included in our drupal theme on the lines of how `matchMedia` polyfill was included in core.
 * Refer: https://www.drupal.org/project/drupal/issues/1815602
 */


// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      'use strict';

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n â‰¥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
;
/**
 * @file
 * Functions for serializing alerts jsonapi response to json accepted by mayflower ajax pattern.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.mayflower = {

    getSerializedSiteAlertData: function getSerializedSiteAlertData(responseData) {
      // Start with the scaffolding for serialized site alert data
      // to make life easy and awesome. Like no checks for if a propertyName exists.
      var serializedSiteAlertData = {
        emergencyAlerts: {
          id: null,
          buttonAlert: {
            hideText: 'Hide',
            showText: 'Show',
            text: 'Alerts'
          },
          emergencyHeader: {
            title: null
          },
          alerts: []
        }
      };

      responseData.data.forEach(function (item) {
        // Don't process if we don't have an alert content
        if (item.type !== 'node--alert') {
          return;
        }
        // See if alert is site wide
        if (item.attributes.field_alert_display === 'site_wide') {
          // Create unique id by combining uuid and changed timestamp.
          // Because mayflower wants this id to change everytime alert changes.
          var id = item.attributes.uuid + '__' + item.attributes.changed;
          serializedSiteAlertData.emergencyAlerts.id = id;

          serializedSiteAlertData.emergencyAlerts.emergencyHeader.title = item.attributes.title;
          if (item.attributes.field_alert_severity && item.attributes.field_alert_severity === 'informational_notice') {
            serializedSiteAlertData.emergencyAlerts.emergencyHeader.prefix = 'Informational Alert';
          }
          var currentAlertItem = item;
          var alertParagraphIds = Drupal.behaviors.mayflower.getAlertParagraphIds(item);
          var alertParagraphData = Drupal.behaviors.mayflower.getAlertParagraphData(responseData, alertParagraphIds, currentAlertItem);
          serializedSiteAlertData.emergencyAlerts.alerts = alertParagraphData;
        }
        // NOTE: Currently, if we have multiple site_wide alerts, the N+1th alert data will override Nth alert data.
        // This is by design because only 1 site_wide alert should be published at any given time.
        // Drupal enforces it partially and will fully enforce it after this fix - https://jira.state.ma.us/browse/DP-7095
        // After DP-7095 fix has been shipped, this note can be deleted, no other code change is requried.
      });
      // Don't return the scaffolding we started out with, return only
      // the legit serialized data.
      if (serializedSiteAlertData.emergencyAlerts.id === null) {
        return {};
      }
      return serializedSiteAlertData;
    },

    // Returns list of paragraph ids, that hold alert details, while ignores
    // other paragraph types like the ones that hold alert target pages, etc.
    getAlertParagraphIds: function getAlertParagraphIds(alertData) {
      var alertParagraphIds = [];
      try {
        alertData.relationships.field_alert.data.forEach(function (item) {
          if (item.type === 'paragraph--emergency_alert') {
            alertParagraphIds.push(item.id);
          }
        });
      }
      catch (e) {
        console.error(e);
      }
      return alertParagraphIds;
    },

    // Returns array of individual alert message data, in a consistent manner
    // for site wide and page based alerts.
    getAlertParagraphData: function getAlertParagraphData(responseData, alertParagraphIds, currentAlertItem) {
      var alertParagraphData = [];
      try {
        responseData.included.forEach(function (item) {
          // NOTE: We have a polyfill to ensure Array.includes() works for us in all browsers.
          if (item.type === 'paragraph--emergency_alert' && alertParagraphIds.includes(item.id)) {
            // We generate a unique id, that changes everytime alert content is updated.
            var id = item.attributes.uuid + '__' + currentAlertItem.attributes.changed;
            // NOTE: Drupal stores timestamps in UTC and renders them in whatever timezone setting the site or user has set.
            // No rendering is involved when Drupal returns jsonapi data, so the timestamps are always in UTC.
            // So we read the desired timezone offset and adjust here, or fall back on EST offset if a configuarable offset is not exposed.
            var utfOffsetString = (drupalSettings.mayflower && drupalSettings.mayflower.utcOffsetString) ? drupalSettings.mayflower.utcOffsetString : '-05:00';
            var timeStamp = (typeof moment === 'function') ? moment.utc(item.attributes.field_emergency_alert_timestamp).utcOffset(utfOffsetString).format('MMM. Do, YYYY, h:mm a') : item.attributes.field_emergency_alert_timestamp;
            var serializedAlertParagraph = {
              id: id,
              message: item.attributes.field_emergency_alert_message,
              timeStamp: timeStamp
            };
            // Start with empty alert link for serialized alert data
            serializedAlertParagraph.link = {
              href: null,
              text: null
            };
            // If alert HAS a link, use it
            if (item.attributes.field_emergency_alert_link && item.attributes.field_emergency_alert_link.uri) {
              serializedAlertParagraph.link = {
                href: item.attributes.field_emergency_alert_link.uri,
                text: 'Read more',
                chevron: true
              };
            }
            // If alert has NO link, but has "body"
            // use "SITE.com/alerts#id" as link for site wide alerts
            // use "SITE.com/alert/[alert-clean-url]#id" as link for page specific alerts
            // NOTE: appending #id at the end allows us to link directly to
            // the anchor link of a particular alert message on the full page.
            else if (item.relationships.field_emergency_alert_content.data.length > 0) {
              if (currentAlertItem.attributes.field_alert_display === 'site_wide') {
                serializedAlertParagraph.link = {
                  href: '/alerts' + '#' + item.attributes.id,
                  text: 'Read more',
                  chevron: true
                };
              }
              else if (currentAlertItem.attributes.field_alert_display === 'specific_target_pages') {
                serializedAlertParagraph.link = {
                  href: currentAlertItem.attributes.entity_url + '#' + item.attributes.id,
                  text: 'Read more',
                  chevron: true
                };
              }
            }
            alertParagraphData.push(serializedAlertParagraph);
          }
        });
      }
      catch (e) {
        console.error(e);
      }
      return alertParagraphData;
    },


    getSerializedPageAlertData: function getSerializedPageAlertData(responseData) {
      var serializedPageAlertData = {headerAlerts: []};
      var paragraphsWithCurrentPageAsTarget = [];
      var currentPageUuid = null;

      // If we do not know current page's uuid, we will
      // not be able to target it, so, abort.
      try {
        currentPageUuid = window.dataLayer[0].entityUuid;
      }
      catch (e) {
        console.error(e);
      }
      if (!currentPageUuid) {
        return {};
      }

      try {
        // In the response, paragraph references are included separately from
        // the alerts. We collect any paragraphs references that hold
        // the current page as a target.
        // If the current page is in none of them, we abort.
        responseData.included.forEach(function (item) {
          if (item.type !== 'paragraph--target_pages') {
            return;
          }
          if (item.relationships.field_target_content_ref.data !== null) {
            if (item.relationships.field_target_content_ref.data.id === currentPageUuid) {
              paragraphsWithCurrentPageAsTarget.push(item.attributes.uuid);
            }
          }
        });
        if (paragraphsWithCurrentPageAsTarget.length === 0) {
          return {};
        }
      }
      catch (e) {
        console.error(e);
      }

       // Now we iterate on each alert data.
      responseData.data.forEach(function (item) {
        // Don't process if it not alert content
        if (item.type !== 'node--alert') {
          return;
        }
        // See if the alert item is for specific target pages.
        if (item.attributes.field_alert_display === 'specific_target_pages') {
          var currentAlertItem = item;
          // See if any paragraph in this alert is connected to current page
          // If yes, we want this alert.
          currentAlertItem.relationships.field_target_pages_para_ref.data.forEach(function (paraItem) {
            // NOTE: We have a polyfill to ensure Array.includes() works for us in all browsers.
            if (paragraphsWithCurrentPageAsTarget.includes(paraItem.id)) {
              var alertDetailParagraphIds = Drupal.behaviors.mayflower.getAlertParagraphIds(currentAlertItem);
              var alertDetailParagraphData = Drupal.behaviors.mayflower.getAlertParagraphData(responseData, alertDetailParagraphIds, currentAlertItem);
              alertDetailParagraphData.forEach(function (alertData) {
                // NOTE: getAlertParagraphData already sets the id such that it is unique and it changes everytime an alert content is udpated.
                // We use it to show an alert again, if a user had previously dismissed it, but if the alert now has new updated content.
                var serializedAlertItem = {
                  id: alertData.id,
                  text: alertData.message,
                  href: alertData.link.href,
                  info: ''
                };
                if (currentAlertItem.attributes.field_alert_severity && currentAlertItem.attributes.field_alert_severity === 'informational_notice') {
                  serializedAlertItem.prefix = 'Notice';
                }
                serializedPageAlertData.headerAlerts.push(serializedAlertItem);
              });
              // Exit the loop to prevent multiple copies.
              return;
            }
          });
        }
      });

      return serializedPageAlertData;
    },

    /**
     * Drupal behavior.
     *
     * @param {HTMLDocument|HTMLElement} context
     * The context argument for Drupal.attachBehaviors()/detachBehaviors().
     * @param {object} settings
     * The settings argument for Drupal.attachBehaviors()/detachBehaviors().
     */
    attach: function (context, settings) {
      // Note that this selector is passed into the template so that this is run instead of the
      // default 'js-ajax-pattern'.  See the ajaxPattern.customSelector in guide.json page object.
      // In an implementation of this you would want to create your own selector and avoid
      // js-ajax-pattern and js-ajax-pattern-override since Mayflower will attach to these.
      // See: https://stackoverflow.com/questions/18911182/passing-arguments-to-jquery-each-function
      var processAlerts = function (x) {
        var transformFunction = x;
        return function (index, element) {
          // Get the endpoint which is passed in as ajaxAlerts.endpoint to organism data attribute.
          var $self = $(this);
          var endpoint = $self.data('ma-ajax-endpoint');
          if (!endpoint) {
            console.error('MA::AjaxPattern::This pattern requires an endpoint to be passed in as an argument.');
            return false;
          }

          var renderPattern = $self.data('ma-ajax-render-pattern');
          if (!renderPattern) {
            console.error('MA::AjaxPattern::This pattern requires a child pattern to be passed as an argument.');
            return false;
          }
          try {
            $self.MassAjaxPattern({
              endpoint: endpoint,
              renderPattern: renderPattern,
              transform: transformFunction
            });
          }
          catch (e) {
            console.error(e);
          }
        };
      };

      $('.js-ajax-site-alerts-jsonapi', context).each(processAlerts(Drupal.behaviors.mayflower.getSerializedSiteAlertData));
      $('.js-ajax-page-alerts-jsonapi', context).each(processAlerts(Drupal.behaviors.mayflower.getSerializedPageAlertData));
    }

  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Collapse the workbench_tabs messages.
 *
 * Copyright 2016 Palantir.net, Inc.
 */

(function ($) {

  'use strict';

  var $messageTrigger = $('.workbench-tabs__trigger');
  var $messageContents = $('.workbench-tabs__message');

  var messageHeight = $messageContents.outerHeight(true);
  var messagesOpen = messageHeight > 0;

  Drupal.behaviors.workbenchTabs = {};

  Drupal.behaviors.workbenchTabs.attach = function() {
    // Open/Close functionality for rail navigation.
    $messageTrigger.once('workbenchTabsMessagesButtonClick').click(function(e) {
      e.preventDefault();
      Drupal.behaviors.workbenchTabs.toggleMessagesVisual();
    });

    // Lose focus on the trigger when the mouse leaves. Using .blur() in the
    // click handler breaks menus for users who are tabbing through.
    $messageTrigger.once('workbenchTabsMessagesButtonMouseout').mouseout(function() {
      $(this).blur();
    });

    // Close the drawer when we scroll past it.
    $(window).once('workbenchTabsMessagesScroll').on('scroll', function() {
      if (messagesOpen && $(window).scrollTop() > messageHeight) {

        // Reevaluate message height because user interactions can change it,
        // but we don't want to calculate this on every scroll event.
        messageHeight = $messageContents.outerHeight(true);
        if ($(window).scrollTop() > messageHeight) {
          Drupal.behaviors.workbenchTabs.closeMessages();

          // Scroll to the top of the page to prevent a jump.
          $(window).scrollTop(0);
        }
      }
    });
  };

  Drupal.behaviors.workbenchTabs.toggleMessagesVisual = function() {
    $messageContents.slideToggle('slow', function() {
      messagesOpen = $messageContents.is(':visible');
      Drupal.behaviors.workbenchTabs.toggleMessages(messagesOpen);
    });
  }

  /**
   * @param bool state
   *   Force opening or closing the messages.
   *   - true: open messages
   *   - false: close messages
   */
  Drupal.behaviors.workbenchTabs.toggleMessages = function(state) {
    if (state === true || state === false) {
      messagesOpen = !state;
    }
    else {
      messagesOpen = $messageContents.is(':visible');
    }

    if (messagesOpen) {
      Drupal.behaviors.workbenchTabs.closeMessages();
    }
    else {
      Drupal.behaviors.workbenchTabs.openMessages();
    }
  }

  Drupal.behaviors.workbenchTabs.closeMessages = function() {
    $messageTrigger.addClass('is-closed');
    $messageContents.addClass('is-closed');
    messagesOpen = false;
  }

  Drupal.behaviors.workbenchTabs.openMessages = function() {
    $messageTrigger.removeClass('is-closed');
    $messageContents
      .removeClass('is-closed')
      .attr('style', '');
    messageHeight = $messageContents.outerHeight(true);
    messagesOpen = true;
  }

})(jQuery);
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', { '@label': $box.find('a').text() });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = Drupal.toolbar.models.toolbarModel = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        for (var label in options.breakpoints) {
          if (options.breakpoints.hasOwnProperty(label)) {
            var mq = options.breakpoints[label];
            var mql = Drupal.toolbar.mql[label] = window.matchMedia(mq);

            mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

            Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
          }
        }

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = Drupal.toolbar.models.menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var subtrees = this.model.get('subtrees');

      for (var id in subtrees) {
        if (subtrees.hasOwnProperty(id)) {
          this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
        }
      }

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);

  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  Drupal.tour = Drupal.tour || {
    models: {},

    views: {}
  };

  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],

      isActive: false,

      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: { click: 'onClick' },

    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);

      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },

            template: {
              link: '<a href=\"#close\" class=\"joyride-close-tip\">&times;</a>',
              button: '<a href=\"#\" class=\"button button--primary joyride-next-tip\"></a>'
            }
          });
          this.model.set({ isActive: true, activeTour: $tour });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({ isActive: false, activeTour: [] });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find('#' + itemId).length || itemClass && $document.find('.' + itemClass).length) {
          return;
        }
        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({ tour: [] });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', { '!tour_item': index + 1, '!total': total });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
