/*!
 * jQuery UI Core 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(t,e){function i(e,i){var n,s,r,a=e.nodeName.toLowerCase();return"area"===a?(n=e.parentNode,s=n.name,e.href&&s&&"map"===n.nodeName.toLowerCase()?(r=t("img[usemap=#"+s+"]")[0],!!r&&o(r)):!1):(/input|select|textarea|button|object/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&o(e)}function o(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,s=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,o){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),o&&o.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var o,n,s=t(this[0]);s.length&&s[0]!==document;){if(o=s.css("position"),("absolute"===o||"relative"===o||"fixed"===o)&&(n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){s.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,o){return!!t.data(e,o[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var o=t.attr(e,"tabindex"),n=isNaN(o);return(n||o>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,o){function n(e,i,o,n){return t.each(s,function(){i-=parseFloat(t.css(e,"padding"+this))||0,o&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var s="Width"===o?["Left","Right"]:["Top","Bottom"],r=o.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+o]=function(i){return i===e?a["inner"+o].call(this):this.each(function(){t(this).css(r,n(this,i)+"px")})},t.fn["outer"+o]=function(e,i){return"number"!=typeof e?a["outer"+o].call(this,e):this.each(function(){t(this).css(r,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,o){var n,s=t.ui[e].prototype;for(n in o)s.plugins[n]=s.plugins[n]||[],s.plugins[n].push([i,o[n]])},call:function(t,e,i){var o,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var o=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[o]>0?!0:(e[o]=1,n=e[o]>0,e[o]=0,n)}})}(jQuery),/*!
 * jQuery UI Widget 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t,e){var i=0,o=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,o=0;null!=(i=e[o]);o++)try{t(i).triggerHandler("remove")}catch(s){}n(e)},t.widget=function(e,i,o){var n,s,r,a,l={},u=e.split(".")[0];e=e.split(".")[1],n=u+"-"+e,o||(o=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[u]=t[u]||{},s=t[u][e],r=t[u][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new r(t,e)},t.extend(r,s,{version:o.version,_proto:t.extend({},o),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(o,function(e,o){return t.isFunction(o)?(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=n,e=o.apply(this,arguments),this._super=i,this._superApply=s,e}}(),void 0):(l[e]=o,void 0)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix:e},l,{constructor:r,namespace:u,widgetName:e,widgetFullName:n}),s?(t.each(s._childConstructors,function(e,i){var o=i.prototype;t.widget(o.namespace+"."+o.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r)},t.widget.extend=function(i){for(var n,s,r=o.call(arguments,1),a=0,l=r.length;l>a;a++)for(n in r[a])s=r[a][n],r[a].hasOwnProperty(n)&&s!==e&&(i[n]=t.isPlainObject(s)?t.isPlainObject(i[n])?t.widget.extend({},i[n],s):t.widget.extend({},s):s);return i},t.widget.bridge=function(i,n){var s=n.prototype.widgetFullName||i;t.fn[i]=function(r){var a="string"==typeof r,l=o.call(arguments,1),u=this;return r=!a&&l.length?t.widget.extend.apply(null,[r].concat(l)):r,a?this.each(function(){var o,n=t.data(this,s);return n?t.isFunction(n[r])&&"_"!==r.charAt(0)?(o=n[r].apply(n,l),o!==n&&o!==e?(u=o&&o.jquery?u.pushStack(o.get()):o,!1):void 0):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var e=t.data(this,s);e?e.option(r||{})._init():t.data(this,s,new n(r,this))}),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,o){o=t(o||this.defaultElement||this)[0],this.element=t(o),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),o!==this&&(t.data(o,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===o&&this.destroy()}}),this.document=t(o.style?o.ownerDocument:o.document||o),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,o){var n,s,r,a=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(a={},n=i.split("."),i=n.shift(),n.length){for(s=a[i]=t.widget.extend({},this.options[i]),r=0;r<n.length-1;r++)s[n[r]]=s[n[r]]||{},s=s[n[r]];if(i=n.pop(),o===e)return s[i]===e?null:s[i];s[i]=o}else{if(o===e)return this.options[i]===e?null:this.options[i];a[i]=o}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(e,i,o){var n,s=this;"boolean"!=typeof e&&(o=i,i=e,e=!1),o?(i=n=t(i),this.bindings=this.bindings.add(i)):(o=i,i=this.element,n=this.widget()),t.each(o,function(o,r){function a(){return e||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var l=o.match(/^(\w+)\s*(.*)$/),u=l[1]+s.eventNamespace,h=l[2];h?n.delegate(h,u,a):i.bind(u,a)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?o[t]:t).apply(o,arguments)}var o=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,o){var n,s,r=this.options[e];if(o=o||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(n in s)n in i||(i[n]=s[n]);return this.element.trigger(i,o),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(o))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(o,n,s){"string"==typeof n&&(n={effect:n});var r,a=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),r=!t.isEmptyObject(n),n.complete=s,n.delay&&o.delay(n.delay),r&&t.effects&&t.effects.effect[a]?o[e](n):a!==e&&o[a]?o[a](n.duration,n.easing,s):o.queue(function(i){t(this)[e](),s&&s.call(o[0]),i()})}})}(jQuery),/*!
 * jQuery UI Position 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(t,e){function i(t,e,i){return[parseFloat(t[0])*(f.test(t[0])?e/100:1),parseFloat(t[1])*(f.test(t[1])?i/100:1)]}function o(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var s,r=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,h=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,f=/%$/,p=t.fn.position;t.position={scrollbarWidth:function(){if(s!==e)return s;var i,o,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=n.children()[0];return t("body").append(n),i=r.offsetWidth,n.css("overflow","scroll"),o=r.offsetWidth,i===o&&(o=n[0].clientWidth),n.remove(),s=i-o},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),o=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,s="scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight;return{width:s?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]);return{element:i,isWindow:o,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:o?i.width():i.outerWidth(),height:o?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return p.apply(this,arguments);e=t.extend({},e);var s,f,g,m,v,b,w=t(e.of),y=t.position.getWithinInfo(e.within),_=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),W={};return b=n(w),w[0].preventDefault&&(e.at="left top"),f=b.width,g=b.height,m=b.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=u.test(o[0])?o.concat(["center"]):h.test(o[0])?["center"].concat(o):["center","center"]),o[0]=u.test(o[0])?o[0]:"center",o[1]=h.test(o[1])?o[1]:"center",t=c.exec(o[0]),i=c.exec(o[1]),W[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(o[0])[0],d.exec(o[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=f:"center"===e.at[0]&&(v.left+=f/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),s=i(W.at,f,g),v.left+=s[0],v.top+=s[1],this.each(function(){var n,u,h=t(this),c=h.outerWidth(),d=h.outerHeight(),p=o(this,"marginLeft"),b=o(this,"marginTop"),C=c+p+o(this,"marginRight")+_.width,T=d+b+o(this,"marginBottom")+_.height,E=t.extend({},v),N=i(W.my,h.outerWidth(),h.outerHeight());"right"===e.my[0]?E.left-=c:"center"===e.my[0]&&(E.left-=c/2),"bottom"===e.my[1]?E.top-=d:"center"===e.my[1]&&(E.top-=d/2),E.left+=N[0],E.top+=N[1],t.support.offsetFractions||(E.left=l(E.left),E.top=l(E.top)),n={marginLeft:p,marginTop:b},t.each(["left","top"],function(i,o){t.ui.position[x[i]]&&t.ui.position[x[i]][o](E,{targetWidth:f,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:n,collisionWidth:C,collisionHeight:T,offset:[s[0]+N[0],s[1]+N[1]],my:e.my,at:e.at,within:y,elem:h})}),e.using&&(u=function(t){var i=m.left-E.left,o=i+f-c,n=m.top-E.top,s=n+g-d,l={target:{element:w,left:m.left,top:m.top,width:f,height:g},element:{element:h,left:E.left,top:E.top,width:c,height:d},horizontal:0>o?"left":i>0?"right":"center",vertical:0>s?"top":n>0?"bottom":"middle"};c>f&&a(i+o)<f&&(l.horizontal="center"),d>g&&a(n+s)<g&&(l.vertical="middle"),l.important=r(a(i),a(o))>r(a(n),a(s))?"horizontal":"vertical",e.using.call(this,t,l)}),h.offset(t.extend(E,{using:u}))})},t.ui.position={fit:{left:function(t,e){var i,o=e.within,n=o.isWindow?o.scrollLeft:o.offset.left,s=o.width,a=t.left-e.collisionPosition.marginLeft,l=n-a,u=a+e.collisionWidth-s-n;e.collisionWidth>s?l>0&&0>=u?(i=t.left+l+e.collisionWidth-s-n,t.left+=l-i):t.left=u>0&&0>=l?n:l>u?n+s-e.collisionWidth:n:l>0?t.left+=l:u>0?t.left-=u:t.left=r(t.left-a,t.left)},top:function(t,e){var i,o=e.within,n=o.isWindow?o.scrollTop:o.offset.top,s=e.within.height,a=t.top-e.collisionPosition.marginTop,l=n-a,u=a+e.collisionHeight-s-n;e.collisionHeight>s?l>0&&0>=u?(i=t.top+l+e.collisionHeight-s-n,t.top+=l-i):t.top=u>0&&0>=l?n:l>u?n+s-e.collisionHeight:n:l>0?t.top+=l:u>0?t.top-=u:t.top=r(t.top-a,t.top)}},flip:{left:function(t,e){var i,o,n=e.within,s=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,u=t.left-e.collisionPosition.marginLeft,h=u-l,c=u+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];0>h?(i=t.left+d+f+p+e.collisionWidth-r-s,(0>i||i<a(h))&&(t.left+=d+f+p)):c>0&&(o=t.left-e.collisionPosition.marginLeft+d+f+p-l,(o>0||a(o)<c)&&(t.left+=d+f+p))},top:function(t,e){var i,o,n=e.within,s=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,u=t.top-e.collisionPosition.marginTop,h=u-l,c=u+e.collisionHeight-r-l,d="top"===e.my[1],f=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>h?(o=t.top+f+p+g+e.collisionHeight-r-s,t.top+f+p+g>h&&(0>o||o<a(h))&&(t.top+=f+p+g)):c>0&&(i=t.top-e.collisionPosition.marginTop+f+p+g-l,t.top+f+p+g>c&&(i>0||a(i)<c)&&(t.top+=f+p+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,o,n,s,r=document.getElementsByTagName("body")[0],a=document.createElement("div");e=document.createElement(r?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&t.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in o)e.style[s]=o[s];e.appendChild(a),i=r||document.documentElement,i.insertBefore(e,i.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",n=t(a).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),/*!
 * jQuery UI Tooltip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
function(t){function e(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),o=t.trim(o.join(" ")),o?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")}var o=0;t.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var o=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){o._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each(function(){var e,o=t(this);o.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))}),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,s=e?e.type:null;return"string"==typeof o?this._open(e,t,o):(i=o.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=s),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,o,n){function s(t){u.of=t,r.is(":hidden")||r.position(u)}var r,a,l,u=t.extend({},this.options.position);if(n){if(r=this._find(o),r.length)return r.find(".ui-tooltip-content").html(n),void 0;o.is("[title]")&&(i&&"mouseover"===i.type?o.attr("title",""):o.removeAttr("title")),r=this._tooltip(o),e(o,r.attr("id")),r.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:s}),s(i)):r.position(t.extend({of:o},this.options.position)),r.hide(),this._show(r,this.options.show),this.options.show&&this.options.show.delay&&(l=this.delayedShow=setInterval(function(){r.is(":visible")&&(s(u.of),clearInterval(l))},t.fx.interval)),this._trigger("open",i,{tooltip:r}),a={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=o[0],this.close(i,!0)}},remove:function(){this._removeTooltip(r)}},i&&"mouseover"!==i.type||(a.mouseleave="close"),i&&"focusin"!==i.type||(a.focusout="close"),this._on(!0,o,a)}},close:function(e){var o=this,n=t(e?e.currentTarget:this.element),s=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),s.stop(!0),this._hide(s,this.options.hide,function(){o._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:s}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+o++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))})}})}(jQuery);