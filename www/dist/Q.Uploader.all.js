//devin87@qq.com
//build:2016/10/12 13:57:35
!function(t,e){"use strict";function n(t,n){return t!==e?t:n}function i(t){return"[object Function]"===L.call(t)}function r(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function a(t,e){return i(t)?t.apply(e,O.call(arguments,2)):void 0}function s(t,n,i){if(!t||!n)return t;for(var r in n)r!=e&&k.call(n,r)&&(i||t[r]===e)&&(t[r]=n[r]);return t}function o(t,e){if(e!==!1&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(n){}}function l(t,n){1>=n&&(n*=100),t.style.opacity!=e?t.style.opacity=n/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(n)+")")}function u(t,e){var n=0,i=0,r=t.offsetWidth,a=t.offsetHeight;do n+=t.offsetLeft,i+=t.offsetTop,t=t.offsetParent;while(t&&t!=e);return{left:n,top:i,width:r,height:a}}function d(t,e,n,i){for(var r=t[n||e],a=[];r;){if(1==r.nodeType){if(!i)return r;a.push(r)}r=r[e]}return i?a:null}function c(t){return t.previousElementSibling||d(t,"previousSibling",null,!1)}function f(t){return t.nextElementSibling||d(t,"nextSibling",null,!1)}function p(t){return t.firstElementChild||d(t,"nextSibling","firstChild",!1)}function v(t){return t.lastElementChild||d(t,"previousSibling","lastChild",!1)}function h(t){return t.children||d(t,"nextSibling","firstChild",!0)}function m(t,e,n){var i=document.createElement(t);return e&&(i.className=e),n&&(i.innerHTML=n),i}function g(t,e){var n=m("div","",t);return e?n.childNodes:p(n)}function y(e){var n=e||t.event;return n.target||(n.target=n.srcElement),n}function w(t,e,n,i){var r=function(a){n.call(t,y(a)),i&&Q(t,e,r)};return N(t,e,r),i?void 0:{stop:function(){Q(t,e,r)}}}function x(t,e){if(i(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}}function E(t,e,n){var i=y(t);e!==!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1),n!==!1&&(i.stopPropagation?i.stopPropagation():i.cancelBubble=!0)}function S(t){return I.test(t)}function T(t){if(!S(t))return!0;var n=RegExp.lastMatch.length,i=t.indexOf("/",n),r=t.slice(0,-1!=i?i:e);return r.toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()}function b(t,e,n){t=+t,e=e||1024;for(var i=0,a="number"==typeof e,s=1,o=r(n)?n:a?100:e.length;t>=s&&o>i;)s*=a?e:e[i],i++;return i&&s>t&&(s/=a?e:e.last(),i--),{value:i?t/s:t,level:i}}function _(t,i){if(i=i===!0?{all:!0}:i||{},isNaN(t)||t==e||0>t){var r=i.error||"--";return i.all?{text:r}:r}var a=b(t,i.steps,i.limit),s=a.value,o=s.toFixed(n(i.digit,2));return i.trim!==!1&&-1!=o.lastIndexOf(".")&&(o=o.replace(/\.?0+$/,"")),a.text=o+(i.join||"")+(i.units||C)[a.level+(i.start||0)],i.all?a:a.text}var L=Object.prototype.toString,k=Object.prototype.hasOwnProperty,O=Array.prototype.slice;s(Object,{forEach:function(t,e,n){for(var i in t)k.call(t,i)&&e.call(n,i,t[i],t)}}),s(Date,{now:function(){return+new Date}});var M;(t.ActiveXObject||t.msIndexedDB)&&(M=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=o);var N,Q;document.addEventListener?(N=function(t,e,n){t.addEventListener(e,n,!1)},Q=function(t,e,n){t.removeEventListener(e,n,!1)}):document.attachEvent&&(N=function(t,e,n){t.attachEvent("on"+e,n)},Q=function(t,e,n){t.detachEvent("on"+e,n)});var I=/^https?:\/\//i,C=["B","KB","MB","GB","TB","PB","EB"],H={def:n,isFunc:i,isUInt:r,fire:a,extend:s,ie:M,setOpacity:l,getOffset:u,walk:d,getPrev:c,getNext:f,getFirst:p,getLast:v,getChilds:h,createEle:m,parseHTML:g,isHttpURL:S,isSameHost:T,parseLevel:b,formatSize:_};M&&(H["ie"+(6>M?6:M)]=!0),H.event={fix:y,stop:E,trigger:x,add:w},t.Q=H}(window),function(t,e){"use strict";function n(t){switch(t){case N:return"准备中";case I:return"上传中";case C:return"已完成";case H:return"已跳过";case P:return"已取消";case z:return"已失败"}return t}function i(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(b=!0);var n=document.createElement("input");n.type="file",_=!!n.files,L=b}function r(t,e){var n=t.lastIndexOf(e);return-1!=n?t.slice(n):""}function a(t){if(t){for(var e=t.split(","),n={},i=0,r=e.length;r>i;i++)n[e[i]]=!0;return n}}function s(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}function o(t,e,n){if(e&&!(0>=e)){var i,r=Date.now();if(n>=e)return i=r-t.startTime,i?t.avgSpeed=Math.min(Math.round(1e3*e/i),e):t.speed||(t.avgSpeed=t.speed=e),t.time=i||0,void(t.endTime=r);i=r-t.lastTime,200>i||(t.speed=Math.min(Math.round(1e3*(n-t.loaded)/i),t.total),t.lastTime=r)}}function l(t){var e=this;e.guid=t.guid||"uploader"+ ++k,e.url=t.url,e.dataType=t.dataType||"json",e.data=t.data,e.target=t.target,e.html5=b&&!!u(t.html5,!0),e.multiple=_&&e.html5&&!!u(t.multiple,!0),e.clickTrigger=L&&!!u(t.clickTrigger,!0),e.workerThread=e.html5?t.workerThread||1:1,e.workerIdle=e.workerThread,e.auto=t.auto!==!1,e.upName=t.upName||"upfile",e.allows=a(t.allows),e.disallows=a(t.disallows),e.chunkSize=t.chunkSize||2097152,e.isSlice=!!t.isSlice,e.isQueryState=!!u(t.isQueryState,e.isSlice),e.isMd5=!!u(t.isMd5,e.isSlice),e.isUploadAfterHash=t.isUploadAfterHash!==!1,e.container=t.container||document.body,t.getPos&&(e.getPos=t.getPos);var n=t.UI||{};n.init&&(e.init=n.init),n.draw&&(e.draw=n.draw),n.update&&(e.update=n.update),n.over&&(e.over=n.over),e.fns=t.on||{},e.ops=t,e.list=[],e.map={},e.index=0,e.started=!1,e._init()}var u=Q.def,d=Q.fire,c=Q.extend,f=Q.getFirst,p=Q.getLast,v=JSON.parse,h=Q.createEle,m=Q.parseHTML,g=Q.setOpacity,y=Q.getOffset,w=Q.md5File,x=Q.event,E=x.add,S=x.trigger,T=x.stop,b=!1,_=!1,L=!1,k=0,O=0,M=0,N=0,I=1,C=2,H=-1,P=-2,z=-3;l.prototype={constructor:l,_init:function(){var t=this;if(!t._inited){t._inited=!0;var n=t.guid,i=t.target,r=t.container,a=h("div","upload-input "+n);if(r.appendChild(a),t.boxInput=a,!t.html5){var o="upload_iframe_"+n,l='<iframe class="u-iframe" name="'+o+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+o+'"></form>',u=h("div","upload-html4 "+n,l);r.appendChild(u);var d=f(u),c=p(u);t.iframe=d,t.form=c,s(d,function(){if(0==t.workerIdle){var n;try{n=d.contentWindow.document.body.innerHTML}catch(i){}t.complete(e,C,n)}})}return t.clickTrigger?E(i,"click",function(e){t.fire("select",e)!==!1&&(t.resetInput(),S(t.inputFile,"click"))}):(E(a,"click",function(e){t.fire("select",e)===!1&&T(e)}),g(a,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var n=f(e);return E(n,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=n,t.updatePos()},updatePos:function(t){var e=this;if(e.clickTrigger)return e;var n=e.getPos||y,i=e.boxInput,r=f(i),a=e.target,s=a.offsetWidth,o=a.offsetHeight,l=0==s?{left:-1e4,top:-1e4}:n(a);return i.style.width=r.style.width=s+"px",i.style.height=r.style.height=o+"px",i.style.left=l.left+"px",i.style.top=l.top+"px",t&&(i.style.zIndex=++M),e},fire:function(t,e,n){if(!n)return d(this.fns[t],this,e);var i=this.fns[t+"Async"];return i?d(i,this,e,n):void n(d(this.fns[t],this,e))},run:function(t,e){var n=this[t];return n&&d(n,this,e),this},addTask:function(t,e){if(t||e){var n,i;e?(n=e.name||e.fileName,i=e.size||e.fileSize):(n=r(t.value,"\\").slice(1)||t.value,i=-1);var a=this,s=r(n,".").toLowerCase(),o=a.disallows&&a.disallows[s]||a.allows&&!a.allows[s],l={id:++O,name:n,ext:s,size:i,input:t,file:e,state:o?H:N};return o&&(l.disabled=!0),a.fire("add",l,function(t){t===!1||l.disabled||(l.index=a.list.length,a.list.push(l),a.map[l.id]=l,a.run("draw",l),a.auto&&a.start())}),l}},add:function(t){var n=this;if("INPUT"==t.tagName){var i=t.files;if(i)for(var r=0,a=i.length;a>r;r++)n.addTask(t,i[r]);else n.addTask(t)}else n.addTask(e,t)},addList:function(t){for(var e=0,n=t.length;n>e;e++)this.add(t[e])},get:function(t){return t!=e?this.map[t]:void 0},cancel:function(t,e){var n=this,i=n.get(t);if(i){var r=i.state;if(r!=N&&r!=I)return n;if(r==I){var a=i.xhr;if(a)return a.abort(),n;n.iframe.contentWindow.location="about:blank"}return e?n:n.complete(i,P)}},remove:function(t){var e=this.get(t);e&&(e.state==I&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this,e=t.workerIdle,n=t.list,i=t.index,r=n.length;if(t.started||(t.started=!0),0>=r||i>=r||0>=e)return t;var a=n[i];return t.index++,t.upload(a)},upload:function(t){var e=this;return!t||t.state!=N||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(n){return n===!1?e.complete(t,H):void(e.html5&&t.file?e._upload_html5_ready(t):t.input?e._upload_html4(t):e.complete(t,H))}),e)},queryState:function(t,e){var n=this,i=n.url,r=new XMLHttpRequest;return t.queryUrl=i+(-1==i.indexOf("?")?"?":"&")+"action=query&hash="+(t.hash||t.name),n.fire("sliceQuery",t),r.open("GET",t.queryUrl),r.onreadystatechange=function(){if(4==r.readyState){var i,a;if(r.status>=200&&r.status<400)if(i=r.responseText,"ok"===i?a={ret:1}:i&&(a=v(i)),a&&"number"!=typeof a||(a={ret:0,start:a}),t.response=i,t.json=a,1==a.ret)t.queryOK=!0,n.cancel(t.id,!0).complete(t,C);else{var s=+a.start||0;s!=Math.floor(s)&&(s=0),t.sliceStart=s}d(e,n,r)}},r.onerror=function(){d(e,n,r)},r.send(null),n},_upload_html5_ready:function(t){var e=this,n=function(){t.state!=C&&(e.isSlice?e._upload_slice(t):e._upload_html5(t))},i=function(n){e.fire("hash",t,function(){t.hash&&e.isQueryState&&t.state!=C?e.queryState(t,n):n()})},r=function(n){if(e.isMd5&&w){var r=e.fns.hashProgress;w(t.file,function(e,r){t.hash=e,t.timeHash=r,i(n)},function(n){d(r,e,t,n)})}else i(n)};return e.isUploadAfterHash?r(n):(n(),r()),e},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,n=new XMLHttpRequest;t.xhr=n,n.upload.addEventListener("progress",function(n){e.progress(t,n.total,n.loaded)},!1),n.addEventListener("load",function(n){e.complete(t,C,n.target.responseText)},!1),n.addEventListener("error",function(){e.complete(t,z)},!1),n.addEventListener("abort",function(){e.complete(t,P)},!1);var i=new FormData;e._process_params(t,function(t,e){i.append(t,e)}),i.append("fileName",t.name),i.append(e.upName,t.blob||t.file,t.name),n.open("POST",t.url),e.fire("send",t,function(r){return r===!1?e.complete(t,H):(n.send(i),void e._afterSend(t))})},_upload_html4:function(t){var e=this,n=e.form,i=t.input;return i._uploaded?e.complete(t,C):(i._uploaded=!0,i.name=e.upName,n.innerHTML="",n.appendChild(i),n.action=t.url,e._process_params(t,function(t,e){n.appendChild(m('<input type="hidden" name="'+t+'" value="'+e+'">'))}),void e.fire("send",t,function(i){return i===!1?e.complete(t,H):(n.submit(),void e._afterSend(t))}))},_afterSend:function(t){t.lastTime=t.startTime=Date.now(),t.state=I,this._lastTask=t,this.progress(t)},progress:function(t,e,n){e||(e=t.size),(!n||0>n)&&(n=0);var i=t.state||N;n>e&&(n=e),n>0&&i==N&&(t.state=i=I);var r=i==C;r&&(e=n=t.size),o(t,e,n),t.total=e,t.loaded=n,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=v(e))},complete:function(t,n,i){var r=this;return t||1!=r.workerThread||(t=r._lastTask),t&&(n!=e&&(t.state=n),t.state!=I&&n!=C||(t.state=C,r.progress(t,t.size,t.size)),i!==e&&r._process_response(t,i)),n==P&&r.fire("cancel",t),r.fire("complete",t),r.run("over",t).run("update",t),r.workerIdle++,r.started&&r.start(),r}},l.extend=function(t,e){c(l.prototype,t,e)},i(),c(l,{support:{html5:b,multiple:_},READY:N,PROCESSING:I,COMPLETE:C,SKIP:H,CANCEL:P,ERROR:z,getStatusText:n}),Q.Uploader=l}(window),function(t,e){"use strict";function n(t,e){t.className+=" "+e}function i(t,e){t&&(t.innerHTML=e||"")}var r=Q.def,a=Q.getFirst,s=Q.getLast,o=Q.getNext,l=Q.createEle,u=Q.formatSize,d=Q.event,c=d.add,f=Q.Uploader;f.extend({init:function(){var t=this.ops.view;t&&n(t,this.html5?"html5":"html4")},draw:function(t){var e=this,n=e.ops,i=n.view;if(i){var o=n.button||{},u=r(o.cancel,"取消"),d=r(o.remove,"删除"),f=t.name,p='<div class="fl"><div class="u-name" title="'+f+'">'+f+'</div></div><div class="fr"><div class="u-size"></div><div class="u-speed">--/s</div><div class="u-progress-bar"><div class="u-progress" style="width:1%;"></div></div><div class="u-detail">0%</div><div class="u-state"></div><div class="u-op"><a class="u-op-cancel">'+u+'</a><a class="u-op-remove">'+d+'</a></div></div><div class="clear"></div>',v=t.id,h=l("div","u-item",p);h.taskId=v,t.box=h,i.appendChild(h);var m=s(h.childNodes[1]),g=a(m),y=s(m);c(g,"click",function(){e.cancel(v)}),c(y,"click",function(){e.remove(v),i.removeChild(h)}),e.update(t)}},update:function(t){if(t&&t.box){var n=t.total||t.size,r=t.loaded,s=t.state,l=t.box,d=l.childNodes[1],c=a(d),p=o(c),v=o(p),h=a(v),m=o(v),g=o(m);if(i(g,f.getStatusText(s)),!(0>n)){var y="";if(this.html5&&r!=e&&r>=0){var w;if(s==f.PROCESSING){var x=Math.min(100*r/n,100);w=x.toFixed(1),"100.0"==w&&(w="99.9")}else s==f.COMPLETE&&(w="100");w&&(w+="%",h.style.width=w,i(m,w)),y='<span class="u-loaded">'+u(r)+"</span> / ";var E=t.avgSpeed||t.speed;i(p,u(E)+"/s")}y+='<span class="u-total">'+u(n)+"</span>",i(c,y)}}},over:function(t){t&&t.box&&n(t.box,"u-over")}})}(window);