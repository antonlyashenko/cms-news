var codex=function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),codex=function(e){"use strict";return e.nodes={content:null},e.init=function(){e.content.customCheckboxes.init(),e.content.approvalButtons.init(),e.autoresizeTextarea.init(),window.codexSpecial.init({blockId:"js-contrast-version-holder"}),e.scrollUp.init("js-layout-holder"),e.core.log("Initialized","CodeX","info"),e.branding.init()},e}({}),codex.docReady=function(e){/in/.test(document.readyState)?window.setTimeout(codex.docReady,9,e):e()},codex.core=n(3),codex.ajax=n(4),codex.transport=n(5),codex.content=n(6),codex.appender=n(7),codex.parser=n(8),codex.comments=n(9),codex.alerts=n(10),codex.islandSettings=n(12),codex.autoresizeTextarea=n(13),codex.user=n(14),codex.sharer=n(15),codex.writing=n(16),codex.loader=n(17),codex.scrollUp=n(18),codex.branding=n(19),codex.pages=n(20),e.exports=codex,codex.docReady(function(){codex.init()})},function(e,t){},,function(e,t){e.exports={log:function(e,t,n,o){var a=32;if(t){for(t=t.length<a?t:t.substr(0,a-2);t.length<a-1;)t+=" ";t+=":",e=t+e}n=n||"log";try{"console"in window&&window.console[n]&&(o?console[n](e,o):console[n](e))}catch(e){}},getOffset:function(e){var t,n,o,a;if(e)return e.getClientRects().length?(o=e.getBoundingClientRect(),o.width||o.height?(a=e.ownerDocument,n=window,t=a.documentElement,{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):{top:0,left:0}},isElementOnScreen:function(e){var t=codex.core.getOffset(e).top,n=window.scrollY+window.innerHeight;return n>t},css:function(e){return window.getComputedStyle(e)},insertAfter:function(e,t){e.parentNode.insertBefore(t,e.nextSibling)},replace:function(e,t){return e.parentNode.replaceChild(t,e)},insertBefore:function(e,t){e.parentNode.insertBefore(t,e)},random:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},delegateEvent:function(e,t,n,o){e.addEventListener(n,function(e){for(var n,a=e.target;a&&!n;)n=a.matches(t),n||(a=a.parentElement);n&&o.call(e.target,e,a)},!0)},nodeTypes:{TAG:1,TEXT:3,COMMENT:8,DOCUMENT_FRAGMENT:11},keys:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},isDomNode:function(e){return e&&"object"==typeof e&&e.nodeType&&e.nodeType==this.nodeTypes.TAG},parseHTML:function(e){var t,n,o=[];t=document.createElement("div"),t.innerHTML=e.trim(),n=t.childNodes;for(var a,i=0;a=n[i];i++)(a.nodeType!=codex.core.nodeTypes.TEXT||a.textContent.trim())&&o.push(a);return o},isEmpty:function(e){return 0===Object.keys(e).length},isVisible:function(e){return null!==e.offsetParent},setCookie:function(e,t,n,o,a){var i=e+"="+t;n&&(i+="; expires="+n.toGMTString()),o&&(i+="; path="+o),a&&(i+="; domain="+a),document.cookie=i},getCookie:function(e){var t=document.cookie,n=e+"=",o=t.indexOf("; "+n);if(o==-1){if(o=t.indexOf(n),0!==o)return null}else o+=2;var a=document.cookie.indexOf(";",o);return a==-1&&(a=t.length),unescape(t.substring(o+n.length,a))}}},function(e,t){var n=function(){function e(e){return"function"==typeof e.append}var t=function(t){if(t&&t.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),o=function(){};t.async=!0,t.type=t.type||"GET",t.data=t.data||"",t["content-type"]=t["content-type"]||"application/json; charset=utf-8",o=t.success||o,"GET"==t.type&&t.data&&(t.url=/\?/.test(t.url)?t.url+"&"+t.data:t.url+"?"+t.data),t.withCredentials&&(n.withCredentials=!0),t.beforeSend&&"function"==typeof t.beforeSend&&t.beforeSend.call(),n.open(t.type,t.url,t.async),e(t.data)||n.setRequestHeader("Content-type",t["content-type"]),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&o(n.responseText)},n.send(t.data)}};return{call:t}}();e.exports=n},function(e,t){e.exports=function(e){var t=null;e.input=null,e.init=function(a){if(!a.url)return void codex.core.log("can't send request because `url` is missed","Transport module","error");t=a;var i=document.createElement("INPUT");i.type="file",t&&t.multiple&&i.setAttribute("multiple","multiple"),t&&t.accept&&i.setAttribute("accept",t.accept),i.addEventListener("change",o,!1),e.input=i,n()};var n=function(){e.input.click()},o=function(){var n=t.url,o=t.beforeSend,a=t.success,i=t.error,r=new FormData,d=e.input.files;if(d.length>1)for(var s=0;s<d.length;s++)r.append("files[]",d[s],d[s].name);else r.append("files",d[0],d[0].name);codex.ajax.call({type:"POST",data:r,url:n,beforeSend:o,success:a,error:i})};return e}({})},function(e,t){e.exports=function(){var e=function(e,t){for(var n=document.querySelectorAll(e),o=n.length-1;o>=0;o--)n[o].classList.toggle(t)},t=function(e){var t=document.getElementById("js-mobile-menu-holder"),n="mobile-menu-holder--opened";t.classList.toggle(n),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()},n={CHECKED_CLASS:"checked",init:function(){var e=document.getElementsByClassName("js-custom-checkbox");if(e.length)for(var t=e.length-1;t>=0;t--)e[t].addEventListener("click",codex.content.customCheckboxes.clicked,!1)},clicked:function(){var e=this,t=this.querySelector("input"),n=this.classList.contains(codex.content.customCheckboxes.CHECKED_CLASS);e.classList.toggle(codex.content.customCheckboxes.CHECKED_CLASS),n?t.removeAttribute("checked"):t.setAttribute("checked","checked")}},o={CLICKED_CLASS:"click-again-to-approve",init:function(){var e=document.getElementsByClassName("js-approval-button");if(e.length)for(var t=e.length-1;t>=0;t--)e[t].addEventListener("click",codex.content.approvalButtons.clicked,!1)},clicked:function(e){var t=this,n=this.classList.contains(codex.content.approvalButtons.CLICKED_CLASS);n||(t.classList.add(codex.content.approvalButtons.CLICKED_CLASS),e.preventDefault())}};return{toggleMobileMenu:t,customCheckboxes:n,approvalButtons:o,toggle:e}}()},function(e,t){var n={page:1,settings:null,blockForItems:null,loadMoreButton:null,buttonText:null,init:function(e){return this.settings=e,this.loadMoreButton=document.getElementById(this.settings.buttonId),!!this.loadMoreButton&&(this.blockForItems=document.getElementById(this.settings.targetBlockId),!!this.blockForItems&&(this.page=e.currentPage,this.buttonText=this.loadMoreButton.innerHTML,this.settings.autoLoading&&(this.autoLoading.isAllowed=!0),void this.loadMoreButton.addEventListener("click",function(e){codex.appender.load(),e.preventDefault(),codex.appender.autoLoading.init()},!1)))},load:function(){var e=this.settings.url+(parseInt(this.page)+1);codex.ajax.call({type:"post",url:e,data:{},beforeSend:function(){codex.appender.loadMoreButton.classList.add("loading")},success:function(e){if(e=JSON.parse(e),e.success){if(!e.list)return;codex.appender.blockForItems.innerHTML+=e.list,codex.appender.page++,codex.appender.settings.autoLoading&&(codex.appender.autoLoading.canLoad=!0),e.next_page||codex.appender.disable()}else codex.core.showException("Не удалось подгрузить новости");codex.appender.loadMoreButton.classList.remove("loading")}})},disable:function(){codex.appender.loadMoreButton.style.display="none",codex.appender.autoLoading.isLaunched&&codex.appender.autoLoading.disable()},autoLoading:{isAllowed:!1,isLaunched:!1,canLoad:!0,init:function(){this.isAllowed&&(window.addEventListener("scroll",codex.appender.autoLoading.scrollEvent),codex.appender.autoLoading.isLaunched=!0)},disable:function(){window.removeEventListener("scroll",codex.appender.autoLoading.scrollEvent),codex.appender.autoLoading.isLaunched=!1},scrollEvent:function(){var e=window.pageYOffset+window.innerHeight>=document.body.clientHeight;e&&codex.appender.autoLoading.canLoad&&(codex.appender.autoLoading.canLoad=!1,codex.appender.load())}}};e.exports=n},function(e,t){var n={input:null,init:function(){var e=this;this.input.addEventListener("paste",function(){e.inputPasteCallback()},!1)},inputPasteCallback:function(){var e=this.input,t=this;window.setTimeout(function(){t.sendRequest(e.value)},100)},sendRequest:function(e){codex.core.ajax({type:"get",url:"/ajax/get_page",data:{url:e},success:function(t){var n,o,a;1==t.success?(n=document.getElementById("page_form_title"),o=document.getElementById("page_form_content"),a=document.getElementById("source_link"),n.value=t.title,o.value=t.article,a.value=e,document.getElementsByClassName("redactor_redactor")[0].innerHTML=t.article):codex.core.showException("Не удалось импортировать страницу")}})}};e.exports=n},function(e,t){e.exports=function(){function e(e){h=document.getElementById(e.listId),v&&m()}function t(e){if(!e.classList.contains(x.replyOpened)){var t={parentId:e.dataset.parentId,rootId:e.dataset.rootId,action:e.dataset.action},o=n(t);codex.core.insertAfter(e,o),e.classList.add(x.replyOpened),r(o).focus()}}function n(e){var t=o(),n=a(),i=document.createElement("DIV");return i.classList.add(x.replyForm),t.dataset.parentId=e.parentId,t.dataset.rootId=e.rootId,t.dataset.action=e.action,i.appendChild(t),i.appendChild(n),i}function o(){var e=document.createElement("TEXTAREA");return e.classList.add(x.replyTextarea),e.placeholder="Ваш комментарий",e.addEventListener("keydown",c,!1),e.addEventListener("blur",d,!1),codex.autoresizeTextarea.addListener(e),e}function a(){var e=document.createElement("DIV");return e.classList.add(x.replySubmitButton,"button","master"),e.textContent="Отправить",e.addEventListener("click",i,!1),e}function i(){var e=this,t=e.parentNode,n=r(t);l(n)}function r(e){return e.getElementsByTagName("TEXTAREA")[0]}function d(e){var t=e.target,n=t.parentNode,o=t.dataset.parentId;t.value.trim()||s(n,o)}function s(e,t){var n=document.getElementById("reply"+t);e.remove(),n.classList.remove(x.replyOpened)}function c(e){var t=e.ctrlKey||e.metaKey,n=13==e.keyCode,o=e.target;t&&n&&(l(o),e.preventDefault())}function l(e){var t=new FormData,n=e.parentNode,o=n.querySelector("."+x.replySubmitButton),a=e.dataset.rootId,i=e.dataset.parentId,r=e.dataset.action;t.append("root_id",a),t.append("parent_id",i),t.append("comment_text",e.value),t.append("csrf",window.csrf),codex.ajax.call({type:"POST",url:r,data:t,beforeSend:function(){o.classList.add("loading")},success:function(e){var t;return o.classList.remove("loading"),e=JSON.parse(e),e.success?(s(n,i),u(),t=codex.core.parseHTML(e.comment)[0],h.appendChild(t),window.scrollTo(0,document.body.scrollHeight),f(e.commentId),void p(t)):void codex.alerts.show(e.error)}})}function u(){var e=document.querySelector(".js-empty-comments");e&&e.remove()}function p(e){var t=e.querySelector(w);t&&codex.islandSettings.prepareToggler(t,w)}function f(e){var t=document.getElementById("comment"+e);t.classList.add(x.highlighted),window.setTimeout(function(){t.classList.remove(x.highlighted)},500)}function m(){var e,t=v.match(/\d+/);t&&(e=t[0],f(e))}function g(){var e=this,t=e.dataset.id;window.confirm("Подтвердите удаление комментария")&&(document.location="/delete-comment/"+t)}var h=null,v=document.location.hash,x={replyForm:"comments-form",replyTextarea:"comment-form__text",replyOpened:"comment-form__placeholder--opened",replySubmitButton:"comment-form__button",highlighted:"comment--highligthed"},w=".js-comment-settings";return{init:e,reply:t,remove:g}}()},function(e,t,n){e.exports=function(){function e(){return!!a||(a=document.createElement("DIV"),a.classList.add(o.wrapper),void document.body.appendChild(a))}function t(t){e();var n=document.createElement("DIV");n.classList.add(o.exception),n.innerHTML=t,a.appendChild(n),n.classList.add("bounceIn"),window.setTimeout(function(){n.remove()},8e3)}n(11);var o={wrapper:"exceptionWrapper",exception:"clientException"},a=null;return{show:t}}({})},function(e,t){},function(e,t){e.exports=function(){var e=null,t=[],n={menu:"island-settings__menu",item:"island-settings__item",showed:"island-settings__menu--showed"},o=function(e){for(var n=document.querySelectorAll(e.selector),o=t.length,i=n.length+t.length,r=o;r<i;r++)t.push({el:n[r],settings:e}),a(r,n[r-o])},a=function(e,t){t.dataset.index=e,t.addEventListener("mouseover",i,!1),t.addEventListener("mouseleave",r,!1)},i=function(){var t,n=this;"true"!=n.dataset.opened&&(n.dataset.opened=!0,e||(e=l()),t=d(n.dataset.index),console.assert(t.items,"Menu items missed"),s(t.items,n),u(n))},r=function(){this.dataset.opened=!1},d=function(e){return t[e].settings},s=function(t,n){var o,a,i;for(e.innerHTML="",o=0;a=t[o];o++){i=c(a),i.dataset.itemIndex=o;for(var r in n.dataset)i.dataset[r]=n.dataset[r];e.appendChild(i)}},c=function(e){var t=document.createElement("LI");return t.classList.add(n.item),console.assert(e.title,"islandSettings: item title is missed"),console.assert("function"==typeof e.handler,"islandSettings: item handler is not a function"),t.textContent=e.title,t.addEventListener("click",e.handler),t},l=function(){var e=document.createElement("UL");return e.classList.add(n.menu),e},u=function(t){t.appendChild(e),e.classList.add(n.showed)},p=function(n,o,a,i){console.assert(t[n],"Toggler was not found by index");var r,d,s=t[n];s&&(r=t[n].settings.items[o],a&&(r.title=a),"function"==typeof i&&(r.handler=i),e&&(d=e.childNodes[o],a&&(d.textContent=a),i&&d.addEventListener("click",i)),codex.core.log("item updated %o","islandSettings","info",r))};return{init:o,updateItem:p,prepareToggler:a}}()},function(e,t){e.exports=function(){var e=function(){var e=document.getElementsByClassName("js-autoresizable");if(e.length)for(var n=0;n<e.length;n++)t(e[n])},t=function(e){e.addEventListener("input",n,!1)},n=function(e){var t=e.target;o(t)},o=function(e){e.scrollHeight>e.clientHeight&&(e.style.height=e.scrollHeight+"px")};return{init:e,addListener:t}}()},function(e,t){e.exports=function(){var e=function(){var e="js-img-updatable",t=function(e,t){codex.transport.init({url:"/upload/"+t,success:o,error:n})},n=function(e){console.log(e)},o=function(e){return e=JSON.parse(e),e.success?(console.assert(e.data&&e.data.url,"Wrong response data"),void a(e.data.url)):void codex.alerts.show(e.message||"File uploading error :(")},a=function(t){for(var n=document.getElementsByName(e),o=n.length-1;o>=0;o--)n[o].src=t};return{change:t}}(),t=function(e){codex.ajax.call({url:"/user/changeStatus?status="+e,success:function(e){console.log(e)}})},n=function(){},o=function(){var e=null,t=function(t){var o=t.querySelector("textarea");o||(e=document.createElement("TEXTAREA"),e.innerHTML=t.textContent.trim(),e.addEventListener("keydown",n),t.innerHTML="",t.appendChild(e),e.focus(),codex.autoresizeTextarea.addListener(e))},n=function(e){e.keyCode==codex.core.keys.ENTER&&(o(this.value),e.preventDefault())},o=function(e){if(!e.trim())return void codex.alerts.show("Write something about yourself");var t=new FormData;t.append("bio",e),t.append("csrf",window.csrf),codex.ajax.call({type:"POST",url:"/user/updateBio",data:t,beforeSend:a,success:i})},a=function(){e.classList.add("loading")},i=function(t){if(t=JSON.parse(t),!t.success||!t.bio)return e.classList.remove("loading"),void codex.alerts.show("Saving error, sorry");var n=document.createTextNode(t.bio||"");window.csrf=t.csrf,codex.core.replace(e,n)};return{edit:t}}();return{init:n,changeStatus:t,photo:e,bio:o}}()},function(e,t){var n={init:function(){for(var e=document.querySelectorAll(".js-share"),t=e.length-1;t>=0;t--)e[t].addEventListener("click",n.click,!0)},shareVk:function(e){var t="https://vk.com/share.php?";t+="url="+e.url,t+="&title="+e.title,t+="&description="+e.desc,t+="&image="+e.img,t+="&noparse=true",this.popup(t,"vkontakte")},shareFacebook:function(e){var t=0x62eef6f1917ee,n="https://www.facebook.com/dialog/share?display=popup";n+="&app_id="+t,n+="&href="+e.url,n+="&redirect_uri="+document.location.href,this.popup(n,"facebook")},shareTwitter:function(e){var t="https://twitter.com/share?";t+="text="+e.title,t+="&url="+e.url,t+="&counturl="+e.url,this.popup(t,"twitter")},shareTelegram:function(e){var t="https://telegram.me/share/url";t+="?text="+e.title,t+="&url="+e.url,this.popup(t,"telegram")},popup:function(e,t){window.open(e,"","toolbar=0,status=0,width=626,height=436"),window.yaCounter32652805&&window.yaCounter32652805.reachGoal("article-share",function(){},this,{type:t,url:e})},click:function(e){var t=e.target,o=t.dataset.shareType||t.parentNode.dataset.shareType;if(n[o]){var a={url:t.dataset.url||t.parentNode.dataset.url,title:t.dataset.title||t.parentNode.dataset.title,desc:t.dataset.desc||t.parentNode.dataset.desc,img:t.dataset.img||t.parentNode.dataset.title};n[o](a)}}};e.exports=n},function(e,t){e.exports=function(){function e(e){for(var t in e)i[t]=e[t]}function t(){var e=1,t=2;codex.editor.start({holderId:i.holderId,initialBlockPlugin:i.initialBlockPlugin,hideToolbar:i.hideEditorToolbar,tools:{paragraph:{type:"paragraph",iconClassname:"ce-icon-paragraph",render:window.paragraph.render,validate:window.paragraph.validate,save:window.paragraph.save,allowedToPaste:!0,showInlineToolbar:!0,destroy:window.paragraph.destroy,allowRenderOnPaste:!0},header:{type:"header",iconClassname:"ce-icon-header",appendCallback:window.header.appendCallback,makeSettings:window.header.makeSettings,render:window.header.render,validate:window.header.validate,save:window.header.save,destroy:window.header.destroy,displayInToolbox:!0},image:{type:"image",iconClassname:"ce-icon-picture",appendCallback:window.image.appendCallback,prepare:window.image.prepare,makeSettings:window.image.makeSettings,render:window.image.render,save:window.image.save,destroy:window.image.destroy,isStretched:!0,showInlineToolbar:!0,displayInToolbox:!0,renderOnPastePatterns:window.image.pastePatterns,config:{uploadImage:"/upload/"+e,uploadFromUrl:""}},attaches:{type:"attaches",displayInToolbox:!0,iconClassname:"cdx-attaches__icon",prepare:window.cdxAttaches.prepare,render:window.cdxAttaches.render,save:window.cdxAttaches.save,validate:window.cdxAttaches.validate,destroy:window.cdxAttaches.destroy,appendCallback:window.cdxAttaches.appendCallback,config:{fetchUrl:"/upload/"+t,maxSize:25e3}}},data:i.data});var n=document.getElementById(i.titleId);n.focus(),n.addEventListener("keydown",d)}function n(e){var t=e.name,n=e.path.script,o=e.path.style;return Promise.all([codex.loader.importScript(n,t),codex.loader.importStyle(o,t)])}var o=!1,a=null,i={hideEditorToolbar:!1,titleId:"editorWritingTitle",initialBlockPlugin:"paragraph",data:{items:[]},resources:[],holderId:null,pageId:0,parentId:0},r=function(t){return e(t),u(i.resources).then(function(){o=!0})},d=function(e){e.keyCode==codex.core.keys.ENTER&&(e.preventDefault(),s())},s=function(){var e,t=codex.editor.nodes.redactor.firstChild,n=t.firstChild,o=n.firstChild;e=document.createTextNode("​"),o.appendChild(e),codex.editor.caret.set(o,0,0)},c=function(){o&&t()},l=function(e,t,n){if(o){var a=e;document.getElementById(t).classList.remove("hide"),a.classList.add(n),a.onclick=null,c()}},u=function(e){return Promise.all(e.map(n))},p=function(){var e=document.forms.atlas;if(e){var t=document.createElement("TEXTAREA");return t.name="content",t.id="json_result",t.hidden=!0,e.appendChild(t),codex.editor.saver.saveBlocks(),e}},f=function(e){var t,n=document.forms.atlas.elements.title;return""===n.value.trim()?void codex.editor.notifications.notification({type:"warn",message:"Заполните заголовок"}):(t=p(),a=e,a.classList.add("loading"),void window.setTimeout(function(){t.elements.content.innerHTML=JSON.stringify({items:codex.editor.state.jsonOutput}),codex.ajax.call({url:"/p/save",data:new FormData(t),success:m,type:"POST"})},500))},m=function(e){return a.classList.remove("loading"),e=JSON.parse(e),e.success?void(window.location=e.redirect):void codex.editor.notifications.notification({type:"warn",message:e.message})},g=function(){var e=p();window.setTimeout(function(){e.elements.content.innerHTML=JSON.stringify({items:codex.editor.state.jsonOutput}),e.submit()},500)};return{init:c,prepare:r,open:l,openEditorFullscreen:g,submit:f}}()},function(e,t){e.exports={prefixJS:"cdx-script-",prefixCSS:"cdx-style-",importScript:function(e,t){return new Promise(function(n,o){var a;t?document.getElementById(this.prefixJS+t)&&n(e):o("Instance name is missed"),a=document.createElement("SCRIPT"),a.async=!0,a.defer=!0,a.id=codex.loader.prefixJS+t,a.onload=function(){n(e)},a.onerror=function(){o(e)},a.src=e,document.head.appendChild(a)})},importStyle:function(e,t){return new Promise(function(n,o){var a;t?document.getElementById(this.prefixCSS+t)&&n(e):o("Instance name is missed"),a=document.createElement("LINK"),a.type="text/css",a.href=e,a.rel="stylesheet",a.id=codex.loader.prefixCSS+t,a.onload=function(){n(e)},a.onerror=function(){o(e)},a.src=e,document.head.appendChild(a)})}}},function(e,t){e.exports=function(){var e=300,t=0,n=null,o=null,a=function(e){var o=document.getElementById(e);return o?(t=o.offsetWidth,n=c(),n.addEventListener("click",i),window.addEventListener("scroll",r),window.addEventListener("resize",s,!1),d(),void r()):void codex.core.log("Layout center-col ID wissed","scrollUp","warn")},i=function(e){window.scrollTo(0,e)},r=function(){var t=window.pageYOffset>e;t?n.classList.add("show"):n.classList.remove("show")},d=function(){var e=document.body.clientWidth,o=(e-t)/2;n.style.width=o+"px"},s=function(){o&&window.clearTimeout(o),o=window.setTimeout(d,150)},c=function(){var e=document.createElement("DIV"),t=document.createElement("DIV");return e.classList.add("scroll-up"),t.classList.add("scroll-up__arrow"),e.appendChild(t),document.body.appendChild(e),e};return{init:a}}()},function(e,t){e.exports=function(){var e="branding--empty",t="branding--loading",n="branding__preloader",o="branding__preloader--shown",a=null,i=function(){if(a=document.getElementById("brandingSection")){var e=a.dataset.src;r(e)}},r=function(e,t){var i=a.querySelector("."+n),r=document.createElement("IMG");t&&(i.style.backgroundImage="url('"+t+"')",i.classList.add(o)),r.src=e,r.onload=function(){a.style.backgroundImage="url('"+e+"')",i.classList.remove(o)}},d=function(){codex.transport.init({url:"/upload/4",accept:"image/*",beforeSend:function(){a.classList.add(t)},success:function(n){var o,i,d=JSON.parse(n);a.classList.remove(t),d.success?(o=d.data.url,i="/upload/branding/preload_"+d.data.name+".jpg",a.classList.contains(e)&&a.classList.remove(e),r(o,i)):codex.alerts.show("Uploading failed")},error:function(){a.classList.remove(t),codex.alerts.show("Error while uploading branding image;")}})};return{init:i,change:d}}({})},function(e,t){e.exports=function(){var e=null,t=function(){e=this;var t=e.dataset.id;document.location="/p/writing?id="+t},n=function(){e=this;var t=e.dataset.id;window.confirm("Подтвердите удаление страницы")&&codex.ajax.call({url:"/p/"+t+"/delete",success:r.delete})},o=function(){e=this;var t=e.dataset.id;document.location="/p/writing?parent="+t},a=function(){e=this,e.classList.add("loading");var t=e.dataset.id;codex.ajax.call({url:"/p/"+t+"/promote?list=menu",success:r.promote})},i=function(){e=this,e.classList.add("loading");var t=e.dataset.id;codex.ajax.call({url:"/p/"+t+"/promote?list=news",success:r.promote})},r={getResponse:function(e){try{e=JSON.parse(e)}catch(e){return{success:0,message:"Произошла ошибка, попробуйте позже"}}return e},delete:function(e){return e=r.getResponse(e),e.success?void window.location.replace(e.redirect):void codex.alerts.show(e.message)},promote:function(t){return t=r.getResponse(t),e.classList.remove("loading"),t.success?(t.menu&&r.replaceMenu(t.menu),void codex.alerts.show(t.message)):void codex.alerts.show(t.message)},replaceMenu:function(e){var t=document.getElementById("menu"),n=codex.core.parseHTML(e)[0];codex.core.replace(t,n)}};return{openWriting:t,newChild:o,addToMenu:a,addToNews:i,remove:n}}()}]);
//# sourceMappingURL=bundle.js.map