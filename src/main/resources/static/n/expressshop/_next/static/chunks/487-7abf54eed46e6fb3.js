"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{1626:function(e,n,r){var t=r(7458),o=r(2983),s=r(848),i=r(4086),a=function(){var e=(0,o.useRef)(null);return(0,o.useEffect)(function(){e.current&&i.Z.render([{name:"BottomNavigation",container:e.current},])},[e]),(0,t.jsx)("div",{ref:e})},c=function(){return(0,t.jsx)(s.Z,{children:(0,t.jsx)(a,{})})};n.Z=c},4111:function(e,n,r){var t=r(7458),o=r(2983),s=r(848),i=r(4086),a=function(){var e=(0,o.useRef)(null),n=(0,o.useState)({minHeight:193}),r=n[0],s=n[1];return(0,o.useEffect)(function(){e.current&&(i.Z.render([{name:"Footer",container:e.current},]),s({}))},[e]),(0,t.jsx)("div",{ref:e,style:r})},c=function(){return(0,t.jsx)(s.Z,{children:(0,t.jsx)(a,{})})};n.Z=c},174:function(e,n,r){var t=r(7458),o=function(){return(0,t.jsxs)("div",{id:"skip-navigation",className:"skip-navigation-simpleheader",children:[(0,t.jsx)("strong",{className:"for-a11y",children:"스킵 네비게이션"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#skip-navigation-search",children:"검색창 바로가기"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#button__category-all",children:"전체카테고리 바로가기"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#container",children:"본문 바로가기"})})]})]})};n.Z=o},7115:function(e,n,r){var t=r(9758),o=r(7458),s=r(3681),i=r(2038),a=r(4365),c=r(2983),l=r(893),u=r(8112),d=r(316),f=function(){var e=(0,l.useRouter)(),n=(0,t.Z)((0,i.KO)(a.o),2),r=n[0],f=n[1],h=function(){f(!1),u.Z.sendEvent("click",{acode:d.Z.addressBookCloseButton}),e.reload()};return((0,c.useEffect)(function(){var n=function(n){"close"===n.data.action&&(f(!1),e.reload())};return window.addEventListener("message",n),function(){return window.removeEventListener("message",n)}},[r]),r)?(0,o.jsxs)("div",{className:"ly_today-delivery--bridge",children:[(0,o.jsx)("div",{className:"dimmed"}),(0,o.jsxs)("div",{className:"ly_wrap",children:[(0,o.jsx)("iframe",{title:"배송주소",src:"".concat(s.Z.hostUrl,"/address-book"),className:"ifrm_bridge"}),(0,o.jsx)("button",{className:"ly_wrap_close",onClick:h,children:(0,o.jsx)("span",{className:"icon sp_cart",children:"닫기"})})]})]}):null};n.Z=f},5232:function(e,n,r){var t=r(6690),o=r(9106),s=r(7458),i=r(2983),a=function(e){var n=e.src,r=e.alt,a=e.isLazy,c=(0,o.Z)(e,["src","alt","isLazy"]),l=(0,i.useState)(n),u=l[0],d=l[1];return(0,i.useEffect)(function(){var e=new Image;n&&(e.src=n),e.onload=function(){return d(n)},e.onerror=function(){d("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")}},[n]),(0,s.jsx)("img",(0,t.Z)({src:u,alt:r},void 0!==a&&a&&{loading:"lazy",decoding:"async"},c))};n.Z=a},4617:function(e,n,r){r.d(n,{Dr:function(){return t},om:function(){return o}});var t=function(e){return"Enter"===e.key||"Enter"===e.code||13===e.keyCode},o=function(e){return"Escape"===e.key||"Escape"===e.code||27===e.keyCode}},2221:function(e,n,r){r.d(n,{Z:function(){return L}});var t=r(6690),o=r(3089),s=r(7458),i=r(2983),a=r(893),c=r(2038),l=r(3681),u=r(7222),d=r(7071),f=r(8149),h=r(8417),m=r(9116),v=r(1865),p=r(4617),y=r(338),g=r(6687),x=r(316),j=function(e){var n=e.categoryNo,r=e.categoryName,o=e.sellerId,i=e.montelenaRef,a={pathname:"".concat(u.Mx,"/category"),query:(0,t.Z)({categoryCode:n},!!o&&{sellerId:o})};return(0,s.jsx)("li",{children:(0,s.jsx)(m,{href:a,as:a,children:(0,s.jsx)("a",{ref:i,children:r})})})},_=function(e){var n=e.isFirst,r=e.categoryNo,o=e.categoryName,i=e.subCategories,a=e.sellerId,c=i.length>0,l={pathname:"".concat(u.Mx,"/category"),query:(0,t.Z)({categoryCode:r},!!a&&{sellerId:a})},d=(0,g.Z)({acode:x.Z.category1Depth,seller_id:a,category_name:o});return(0,s.jsxs)("li",{className:v(n&&"first"),children:[(0,s.jsx)("h3",{children:(0,s.jsx)(m,{href:l,children:(0,s.jsx)("a",{ref:d,children:o})})}),c&&(0,s.jsx)("ol",{className:"category_depth2",children:i.map(function(e,n){return(0,s.jsx)(j,{categoryName:e.categoryName,categoryNo:e.categoryNo,sellerId:a,montelenaRef:d},"".concat(n,"-").concat(e.categoryNo))})}),(0,s.jsx)("span",{className:"line"})]})},w=function(e){var n=e.categories,r=(0,a.useRouter)().query.sellerId,o=void 0===r?"":r,c=(null==n?void 0:n.length)>0,l=(0,i.useState)(!1),u=l[0],d=l[1],m=(0,i.useRef)(null),j=n.reduce(function(e,n,r){var t=Math.floor(r/8);return e[t]=e[t]?(0,h.Z)(e[t]).concat([n]):[n],e},[]),w=(0,g.Z)({acode:u?x.Z.categoryClose:x.Z.headerCategoryAll,seller_id:o}),Z=function(e){e.preventDefault(),e.stopPropagation(),d(!u)};return(0,i.useEffect)(function(){var e=function(e){var n,r,t=(0,f.Z)(e.target,Element)&&!(null===(n=m.current)||void 0===n?void 0:n.contains(e.target)),o=(0,f.Z)(e.target,Element)&&(null===(r=m.current)||void 0===r?void 0:r.contains(e.target))&&"a"===e.target.tagName.toLowerCase();(t||o)&&d(!1)},n=function(e){(0,p.om)(e)&&(d(!1),(0,y.Z)("당일배송 카테고리 메뉴 닫힘"))},r=function(){document.removeEventListener("click",e),document.removeEventListener("keyup",n)};return u?(document.addEventListener("keyup",n),document.addEventListener("click",e)):r(),r},[u,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:"expresslnb",className:v("corenavi navi_allmenu",u&&"on"),children:(0,s.jsxs)("button",{type:"button",ref:w,id:"btn_totalMenu",className:"navi_opener","aria-expanded":u,"aria-controls":"expressshop_category_list",onClick:Z,children:[(0,s.jsx)("p",{className:"for-a11y",children:"당일배송 전체 메뉴"}),(0,s.jsxs)("em",{className:v("ico_hambugermenu",u&&"active"),children:[(0,s.jsx)("span",{className:"line1"}),(0,s.jsx)("span",{className:"line2"}),(0,s.jsx)("span",{className:"line3"})]})]})}),c&&(0,s.jsx)("div",{ref:m,id:"expressshop_category_list",className:v(u&&"active"),children:(0,s.jsxs)("div",{className:"smile_gnb_list",children:[(0,s.jsx)("h2",{className:"for-a11y",children:"당일배송 전용 카테고리"}),(0,s.jsx)("div",{className:"category_depth1",children:j.map(function(e,n){return(0,s.jsx)("ul",{className:"row",children:e.map(function(e,n){return(0,s.jsx)(_,(0,t.Z)({isFirst:0===n,sellerId:o},e),"".concat(n,"-").concat(e.categoryNo))})},n)})})]})})]})},Z=function(){var e,n=(null===(e=(0,a.useRouter)().query.sellerId)||void 0===e?void 0:e.toString().toLowerCase())||"",r={"":{logoUrl:l.Z.expressshopLogoUrl,link:"".concat(l.Z.hostUrl,"/home")},shomeplus:{logoUrl:l.Z.homeplusLogoUrl,alt:"홈플러스 탭",link:"".concat(l.Z.hostUrl,"/home?sellerId=SHomeplus")}}[n],t=(0,g.Z)({acode:x.Z.headerLogo,seller_id:n}),o=(0,g.Z)({acode:x.Z.headerExpress,seller_id:n});return(0,s.jsxs)("h1",{className:"h_page-corner",children:[!n&&(0,s.jsx)("a",{href:l.Z.homeUrl,ref:t,className:"link__service-tab",children:(0,s.jsx)("img",{src:null==r?void 0:r.logoUrl,alt:"지마켓",className:"image__logo-minishop"})}),(0,s.jsx)("a",{href:"".concat(l.Z.hostUrl,"/home"),ref:o,className:"link__home-tab",children:"당일배송"}),n&&(0,s.jsx)(m,{href:(null==r?void 0:r.link)||"",children:(0,s.jsx)("a",{ref:t,className:"link__minishop-tab",children:(0,s.jsx)("img",{src:null==r?void 0:r.logoUrl,alt:null==r?void 0:r.alt,className:"image__logo-minishop"})})})]})},k=r(3380),N=r(8112),b="".concat(u.Mx,"/search"),A=function(e){var n=0;return e.map(function(e){return(0,o.Z)((0,t.Z)({},e),{keyword:e.Keyword})}).reduce(function(e,r){var s=r.keyword,i=++n;return(0,o.Z)((0,t.Z)({},e),{count:i,keywords:(0,h.Z)(e.keywords).concat([{id:i,keyword:s},])})},{count:0,keywords:[]})},C=function(e){var n=e.currentArrowFocusIndex,r=e.id,o=e.keyword,i=e.currentKeyword,a=e.serviceType,c=(0,t.Z)({},{backgroundColor:"#f2f2f2"},{}),l=(0,t.Z)({},{}),u=n===r,d=u?l:{},f={pathname:b,query:(0,t.Z)({keyword:o},!!a&&{serviceType:a})};return(0,s.jsx)("li",{style:u?c:{},children:(0,s.jsx)(m,{href:f,scroll:!0,children:(0,s.jsx)("a",{title:o,children:(0,s.jsx)("span",{style:d,children:o===i?(0,s.jsx)("em",{style:d,children:i}):(o||"").split(RegExp("(\\".concat(i.split("").join("\\"),")"),"g")).map(function(e,n){return e===i?(0,s.jsx)("em",{style:d,children:i},"".concat(n,"-").concat(i)):e})})})})},o)},E=function(e){var n=e.suggestion,r=e.currentKeyword,t=e.currentArrowFocusIndex,o=e.serviceType;return n.length>0?(0,s.jsx)("div",{className:"suggestion_keyword",children:(0,s.jsx)("ul",{children:n.map(function(e){var n=e.id,i=e.keyword;return(0,s.jsx)(C,{currentArrowFocusIndex:t,id:n,keyword:i,currentKeyword:r,serviceType:o?"&serviceType=".concat(o):""},i)})})}):null},R=function(e){var n,r=e.initialKeyword,o=(0,a.useRouter)(),c=o.query,u=c.serviceType,d=c.sellerId,f=void 0===d?"":d,h=(0,i.useRef)(null),m=(0,i.useRef)(null),p=(0,i.useRef)(0),y=(0,i.useRef)(0),g=(0,i.useState)(void 0===r?"":r),j=g[0],_=g[1],w=(0,i.useState)(""),Z=w[0],C=w[1],R=(0,i.useState)(!1),S=R[0],I=R[1],D=(0,i.useState)(0),L=D[0],U=D[1],q={keywords:[],count:0},F=(0,i.useState)(q),T=F[0],H=F[1],B=T.count>0,K=(null===(n=null==f?void 0:f.toString())||void 0===n?void 0:n.toLowerCase())||"",O=function(){var e;null===(e=m.current)||void 0===e||e.focus(),I(!0)},M=function(){I(!0)},z=function(e){p.current&&clearTimeout(p.current);var n=e.currentTarget.value;if(_(n),C(n),U(0),!n)return H(q);p.current=window.setTimeout(function(){var e;if(!(!l.Z.keywordAutocompleteApi||!/[\wㄱ-ㅎㅏ-ㅣ가-힣]/.test(n))){var r=l.Z.keywordAutocompleteApi.replace("{keyword}",encodeURIComponent(n));k(r).then(function(e){return e.json()}).then(function(e){return 0===e.ResultCode&&Z&&H(A(e.Data))}).catch(function(e){console.error("keywordAutocompleteApi error",e)})}},300)},J=function(e){!h.current||h.current.contains(e.relatedTarget)||(I(!1),U(0),H(q))},P=function(e){if(e.preventDefault(),!(null==j?void 0:j.trim())){var n;return alert("검색어를 입력해주세요"),null===(n=m.current)||void 0===n?void 0:n.focus()}var r={pathname:b,query:(0,t.Z)({keyword:j},!!f&&{sellerId:f})};N.Z.sendEvent("click",{acode:x.Z.headerSearch,seller_id:f}),o.push(r,r,{scroll:!0}),I(!1),U(0),H(q)},G=function(e){if(y.current&&clearTimeout(y.current),0===e){U(e),_(Z);return}y.current=window.setTimeout(function(){var n,r=T.keywords.reduce(function(n,r){return r.id===e?(0,t.Z)({},n,r):n},{keyword:""});U(e),r.keyword&&_(r.keyword)},1e3/60)},W=function(e){var n={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Escape:"Escape"},r={38:n.ArrowUp,40:n.ArrowDown,27:n.Escape},t=e.key||r[e.keyCode];if(n.Escape===t)return I(!1);S&&n.ArrowUp===t&&G(L<=0?T.count:L-1),S&&n.ArrowDown===t&&G(L>=T.count?0:L+1)};return(0,s.jsx)("div",{ref:h,className:v("smile_search",{active:S}),children:(0,s.jsxs)("form",{method:"get",action:b,onSubmit:P,id:"searchForm",name:"searchForm",acceptCharset:"utf-8",autoComplete:"off",children:[(0,s.jsx)("input",{id:"sellerId",name:"sellerId",value:"",type:"hidden"}),(0,s.jsxs)("div",{className:v("search_box",{frm_focus:S}),children:[(0,s.jsx)("label",{htmlFor:"keySearch",onClick:O,className:v("placeholder",{blind:S||j}),children:{"":"당일배송 전체 상품 검색",shomeplus:"홈플러스 상품 검색"}[K]}),(0,s.jsx)("input",{ref:m,id:"keySearch",type:"text",className:"search_input_keyword",name:"keyword",title:"검색어입력",autoComplete:"off",spellCheck:"false",autoCorrect:"off",autoCapitalize:"off",onFocus:M,onChange:z,onBlur:J,onKeyDown:W,value:j}),(0,s.jsx)("input",{type:"button",value:"검색",className:"search_btn_ok sp_sd",id:"searchButton",onClick:P})]}),(0,s.jsx)("div",{className:v("suggestion_search",S&&B&&"active"),children:(0,s.jsx)(E,{suggestion:T.keywords,currentKeyword:Z,currentArrowFocusIndex:L,serviceType:u})})]})})},S=r(4365),I=function(e){var n,r,o=e.shopAndAddress,u=(0,a.useRouter)().query,d=(null==u?void 0:null===(n=u.sellerId)||void 0===n?void 0:n.toString())||"",f=(0,c.b9)(S.o),h=(0,i.useRef)(null),m=o||{},p=m.userAddressInfo,y=m.buttonLabel,g=p||{},j=g.address,_=g.addressExposeType,w="UserAddress"===_,Z="LoginRequired"===_,k="AddressCheckRequired"===_,b=Z||"AddressRequired"===_,A=(null===(r=h.current)||void 0===r?void 0:r.clientWidth)||0,C=k||!b?A+12:0,E=function(){window.location.href="".concat(l.Z.loginUrl,"?url=").concat(window.location.href)},R=function(){var e=k?x.Z.headerNothingDelivery:w?x.Z.headerDelivery:x.Z.headerNoDelivery;N.Z.sendEvent("click",{acode:e,seller_id:d}),Z?(alert("로그인이 필요한 서비스입니다."),E()):f(!0)};if(o)return(0,s.jsxs)("div",{className:v("box__delivery-schedule",{"box__delivery-schedule--setting":b}),children:[(0,s.jsx)("h3",{className:"for-a11y",children:"배송지/배송시간표 확인"}),(0,s.jsx)("div",{className:v("link_delivery-schedule",{"link_delivery-schedule--none":b}),style:(0,t.Z)({},C>0?{paddingRight:"".concat(C,"px")}:{}),children:(0,s.jsxs)("button",{type:"button",className:"box__text","aria-haspopup":"dialog",tabIndex:0,onClick:R,children:[(0,s.jsx)("span",{className:"icon_location sp_sd"}),"\xa0",(0,s.jsx)("span",{className:"text__content",children:j}),b?(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)("span",{className:"text_arrow sp_sd"})]}):(0,s.jsx)(s.Fragment,{children:k?(0,s.jsx)("span",{ref:h,className:"sprite__timetable sp_sd",children:(0,s.jsx)("span",{children:"배송점포없음"})}):(0,s.jsx)("span",{ref:h,className:"sprite__timetable sp_sd",children:(0,s.jsx)("span",{children:d?y:"배송시간표"})})})]})})]})},D=r(9232)(function(){return r.e(693).then(r.bind(r,9693))},{loadableGenerated:{webpack:function(){return[require.resolveWeak("../../../desktop/components/layout/CartGauge")]}},ssr:!1,loading:function(){return null}}),L=function(e){var n=e.shopAndAddress,r=(0,a.useRouter)().query.keyword,f=(0,c.b9)(d.D),h=(0,i.useRef)(null),m=(0,i.useRef)(),v=(0,i.useState)({categories:[]}),p=v[0],y=v[1];return(0,i.useEffect)(function(){fetch("".concat(l.Z.api,"/lnb")).then(function(e){return e.json()}).then(function(e){return y({categories:e.categories})}).catch(function(e){console.error(e)})},[]),(0,i.useEffect)(function(){var e="desktop_layout-header";h.current&&e&&(m.current=document.getElementById(e),f(function(e){var n,r;return(0,o.Z)((0,t.Z)({},e),{headerHeight:(null===(n=m.current)||void 0===n?void 0:n.offsetHeight)||0,lnbHeight:(null===(r=h.current)||void 0===r?void 0:r.offsetHeight)||0})}))},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"hide",children:"당일배송 검색창"}),(0,s.jsx)("div",{ref:h,id:"express_gnb",role:"complementary",suppressHydrationWarning:u.kM,children:(0,s.jsxs)("div",{className:"gnb_container",children:[(0,s.jsxs)("div",{className:"layout_left",children:[(0,s.jsx)(w,{categories:p.categories}),(0,s.jsx)(Z,{}),(0,s.jsx)(R,{initialKeyword:r})]}),(0,s.jsxs)("div",{className:"layout_right",children:[(0,s.jsx)(I,{shopAndAddress:n}),(0,s.jsx)(D,{})]})]})})]})}},4365:function(e,n,r){r.d(n,{o:function(){return t}});var t=(0,r(9522).cn)(!1)},7071:function(e,n,r){r.d(n,{D:function(){return t}});var t=(0,r(9522).cn)({headerHeight:0,lnbHeight:0,set:function(){},isLnbFixed:!1})},338:function(e,n,r){r.d(n,{Z:function(){return f}});var t,o=r(148),s=r(6690),i=r(9758),a=r(544),c=r(8417),l=r(3112),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return new Promise(function(n){return setTimeout(n,e)})},d=function(e,n,r){if("undefined"!=typeof window&&void 0!==e&&void 0!==n){var t,o,s=document.createElement("div");return s.setAttribute("id",e),s.setAttribute("aria-live",n||"off"),s.className="for-a11y",null===(t=r||document.body)||void 0===t||null===(o=t.appendChild)||void 0===o||o.call(t,s),s}},f=(t=(0,o.Z)(function(e,n){var r,t,f,h,m,v,p,y,g,x,j;return(0,l.__generator)(this,function(_){switch(_.label){case 0:var w,Z;if("undefined"==typeof window||!e||"complete"!==document.readyState||(t=(r=(0,s.Z)({id:"_aria-live",politeness:"polite",announceDelay:200,removeDelay:500,rootNode:null},n)).id,f=r.politeness,h=r.announceDelay,m=r.removeDelay,v=r.rootNode,p=document.getElementById(t)||d(t,f,v),y=function(){if(!p)return[];var e=p.getAttribute("data-messages");return e?JSON.parse(e):[]},g=function(e){if(p){var n=y();p.setAttribute("data-messages",JSON.stringify((0,c.Z)(n).concat([e])))}},w=(0,o.Z)(function(){var e,n;return(0,l.__generator)(this,function(e){switch(e.label){case 0:if(!p)return[2];return[4,u(m)];case 1:return e.sent(),p.textContent="",(n=(0,a.Z)(y()).slice(1)).length>0?p.setAttribute("data-messages",JSON.stringify(n)):p.remove(),[2]}})}),x=function(){return w.apply(this,arguments)},Z=(0,o.Z)(function(e){var n,r,t,o,s=arguments;return(0,l.__generator)(this,function(a){switch(a.label){case 0:if(n=!(s.length>1)||void 0===s[1]||s[1],!p)return[2];return n&&g(e),[4,u(h)];case 1:if(a.sent(),p.textContent)return[2];return t=(r=(0,i.Z)(y(),2))[0],o=r[1],p.textContent=t,[4,x()];case 2:if(a.sent(),!o)return[3,4];return[4,j(o,!1)];case 3:a.sent(),a.label=4;case 4:return[2]}})}),j=function(e){return Z.apply(this,arguments)},!p))return[2];return[4,j(e)];case 1:return _.sent(),[2]}})}),function(e,n){return t.apply(this,arguments)})},3983:function(e,n,r){var t=r(6690),o=r(2983),s=function(){var e=(0,o.useState)(""),n=e[0],r=e[1],s=(0,o.useMemo)(function(){return(0,t.Z)({},n&&{minHeight:n})},[n]);return(0,o.useEffect)(function(){var e,n=document.querySelector("#header"),t=(null==n?void 0:n.clientHeight)||0,o=(null===(e=document.querySelector(".box__bottom-navigation"))||void 0===e?void 0:e.clientHeight)||0,s=document.querySelector(".box__footer"),i=s&&(s.currentStyle||window.getComputedStyle(s)),a=parseInt((null==i?void 0:i.marginTop)||0,10),c=((null==s?void 0:s.clientHeight)||0)+a;r("calc(100vh - ".concat(t+o+c,"px)"))},[]),s};n.Z=s},6687:function(e,n,r){var t=r(9758),o=r(2983),s=function(e){var n=(0,o.useRef)(null),r=(0,o.useCallback)(function(r){r&&(n.current=r,e&&function(e,n){Object.entries(e).forEach(function(e){var r=(0,t.Z)(e,2),o=r[0],s=r[1];if("object"==typeof s)try{s=JSON.stringify(s)}catch(i){}if(void 0!==s){if("string"==typeof s&&0===s.length)return;n.setAttribute("data-montelena-".concat(o.toLowerCase()),s)}})}(e,r))},[e,n]);return Object.defineProperty(r,"current",{get:function(){return n.current}}),r};n.Z=s}}]);