"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{82:function(e,t,r){r.d(t,{Z:function(){return c}});var o=r(7458),a=r(848),n=r(893),i=r(3681),d=["".concat(i.Z.scriptUrl,"/js/mobile/main/common/jquery-1.7.1.min.js"),"".concat(i.Z.scriptUrl,"/js/mobile/guidGeneration.js"),"".concat(i.Z.scriptUrl,"/mobile/js/front_v4.js?v=4"),],s=function(){return(0,o.jsx)(o.Fragment,{children:d.map(function(e,t){return(0,o.jsx)("script",{src:e},t)})})},l=function(){return(0,n.useRouter)().asPath.includes("appGatePopup")?(0,o.jsx)(s,{}):null},m=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l,{})})},c=function(){return(0,o.jsx)(a.Z,{children:(0,o.jsx)(m,{})})}},9796:function(e,t,r){r.d(t,{Z:function(){return p}});var o=r(7458),a=r(4435),n=r.n(a),i=r(4680),d=r(7222),s="\n  ".concat("\n  img[class*=no-js],\n  .swiper-lazy.swiper-lazy-loaded {\n    opacity: 1;\n    transition: opacity 0.2s;\n  }\n  img[src^=data],\n  .swiper-lazy {\n    opacity: 0;\n  }\n","\n").replace(/(\n| {2})/g,"").replace(/: /g,":").replace(/ {/g,"{"),l=r(3681),m=["//pics.gmarket.co.kr","//script.gmarket.co.kr","//image.gmarket.co.kr","//gdimg.gmarket.co.kr","//ad-img.gmarket.com",],c=["//script.gmarket.com/fonts/GmarketSansBold.woff2","//script.gmarket.com/fonts/GmarketSansMedium.woff2","//script.gmarket.com/fonts/GmarketSansLight.woff2","//script.gmarket.com/fonts/noto-sans-kr-v11-korean-regular.woff2","//script.gmarket.com/fonts/noto-sans-kr-v11-korean-700.woff2","//script.gmarket.com/fonts/GmarketSansBold.woff2",],p=function(e){var t=e.isSFC,r=e.isItemPage;return(0,o.jsxs)(n(),{children:[(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,o.jsx)("meta",{httpEquiv:"content-type",content:"text/html; charset=utf-8"}),(0,o.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),!(void 0!==r&&r)&&(0,o.jsx)("title",{children:d.R},i.K.title),(0,o.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,o.jsx)("meta",{property:"og:site_name",content:"Gmarket"}),(0,o.jsx)("meta",{property:"og:title",content:d.R}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"".concat(l.Z.hostUrl,"/home")},i.K.ogUrl),(0,o.jsx)("meta",{property:"og:image",content:"//pics.gmarket.co.kr/mobile/single/kr/common/sns/gmarket_sns.png"}),(0,o.jsx)("meta",{httpEquiv:"x-dns-prefetch-control",content:"on"}),(0,o.jsx)("link",{rel:"canonical",href:"".concat(l.Z.hostUrl,"/home")}),m.map(function(e){return(0,o.jsx)("link",{rel:"dns-prefetch",href:e},e)}),c.map(function(e){return(0,o.jsx)("link",{rel:"preload",as:"font",type:"font/woff2",crossOrigin:"anonymous",href:e},e)}),(0,o.jsx)("meta",{property:"fb:admins",content:"100000991027914"}),(0,o.jsx)("link",{rel:"apple-touch-icon-precomposed",sizes:"180x180",href:"//image.gmarket.co.kr/Gmarket_Mobile_v2/icon_01.png"}),(0,o.jsx)("link",{rel:"shortcut icon",href:void 0!==t&&t?"//pics.gmarket.co.kr/favicon/sfcmall/favicon.ico":"//image.gmarket.co.kr/favicon/gmarket.ico"}),(0,o.jsx)("style",{children:s})]})}},3779:function(e,t,r){var o=r(6690),a=r(7458),n=r(2983),i=r(848),d=r(4086),s=function(e){var t=e.isSFC,r=e.user,i=(0,n.useRef)(null),s=(0,n.useState)({minHeight:40}),l=s[0],m=s[1];return(0,n.useEffect)(function(){if(i.current){var e=(null==r?void 0:r.name)?(0,o.Z)({type:"member"},r):{type:"unknown"};d.Z.render([{name:"Header",params:{type:"simple",isSfc:t,user:e,isAdult:r&&r.isAdult},container:i.current},]),m({})}},[]),(0,a.jsx)("header",{role:"banner",id:"header",ref:i,style:l})},l=function(e){return(0,a.jsx)(i.Z,{children:(0,a.jsx)(s,(0,o.Z)({},e))})};t.Z=l},4086:function(e,t){var r=function(){return window.DesktopLayout||{}};t.Z={set:function(e){var t=r();return t.set?t.set(e):function(){}},render:function(e){var t=r();return t.render?t.render(e):function(){}},hydrate:function(){var e=r();return e.hydrate?e.hydrate():function(){}}}},4680:function(e,t,r){r.d(t,{K:function(){return d}});var o=r(7458),a=r(4435),n=r(893),i=r(7222),d={title:"title",description:"description",canonical:"canonical",alternate:"alternate",ogDescription:"og:description",ogUrl:"og:url"},s=function(e){var t=e.subTitle,r=e.description,s=(0,n.useRouter)().asPath,l=[i.R,t].filter(Boolean).join(" - "),m=".gmarket.co.kr".concat(i.Mx).concat(s),c="https://m".concat(m),p="string"==typeof r?r:null==r?void 0:r.filter(Boolean).join(" ");return(0,o.jsxs)(a,{children:[(0,o.jsx)("title",{children:l},d.title),(0,o.jsx)("meta",{name:"description",content:p},d.description),(0,o.jsx)("meta",{property:"og:description",content:p},d.ogDescription),(0,o.jsx)("meta",{property:"og:url",content:c},d.ogUrl)]})};t.Z=s},316:function(e,t,r){r.d(t,{Z:function(){return F}});var o,a,n=r(7222),i=r(7705),d=r(6690),s=r(3089),l={headerLogo:"200001598",headerExpress:"200001599",headerSearch:"200001600",headerNoDelivery:"200001601",headerDelivery:"200001602",headerCart:"200001603",headerCartLP:"200010463",headerCartSRP:"200010464",headerCategoryAll:"200001604",categoryClose:"200001760",category1Depth:"200001761"},m={gaugeBar:"200001758",gaugeBarFreeShipping:"200001759"},c={addressBookCloseButton:"200010477",newAddressButton:"200010478",addressName:"200010479",deleteAddAddressButton:"200010480",addressBookModifyButton:"200010482",defaultAddressButton:"200010481",deliverySlotDayButton:"200010483",deliveryName:"200010484",addAddressButton:"200010485",addressLayerNo:"200010486",addressLayerYes:"200010487"},p=(0,s.Z)((0,d.Z)({},l,m,c),{topBanner:"200001542",deliveryBranchSchedule:"200001548",sloganBanner:"200001549",benefitBanner:"200001550",categoryDisplayLeftArrow:"200001551",categoryDisplayRightArrow:"200001552",categoryDisplayList:"200001553",leafletBanner:"200001554",leafletItemCardImage:"200001555",leafletItemCardStore:"200001556",leafletItemCardName:"200001557",leafletItemCardCount:"200001558",leafletItemCardOption:"200001559",leafletItemCardCart:"200001560",leafletItemCardMoreButton:"200001561",bundleTab:"200001562",bundleItemCardImage:"200001563",bundleItemCardStore:"200001564",bundleItemCardName:"200001565",bundleItemCardCount:"200001566",bundleItemCardOption:"200001567",bundleItemCardCart:"200001568",bundleItemCardMoreButton:"200001569",eventTab:"200001570",eventItemCardImage:"200001571",eventItemCardStore:"200001572",eventItemCardName:"200001573",eventItemCardCount:"200001574",eventItemCardOption:"200001575",eventItemCardCart:"200001576",eventItemCardMoreButton:"200001577",weeklyBanner:"200001586",weeklyBannerStore:"200001587",weeklyBannerText:"200001588",weeklyBannerMoreButton:"200001589",bestTab:"200001590",bestItemCardImage:"200001591",bestItemCardStore:"200001592",bestItemCardName:"200001593",bestItemCardCount:"200001594",bestItemCardOption:"200001595",bestItemCardCart:"200001596",bannerExpress:"200001597"}),u={headerExpress:"200001605",headerLogo:"200001606",headerSearch:"200001607",headerNoDelivery:"200001610",headerDelivery:"200001608",headerNothingDelivery:"200001609",headerCart:"200001611",headerCartLP:"200010465",headerCartSRP:"200010466",headerCategoryAll:"200001612",categoryClose:"200010467",category1Depth:"200010468"},C=(0,s.Z)((0,d.Z)({},u,m,c),{topBanner:"200001661",categoryDisplayLeftArrow:"200001662",categoryDisplayRightArrow:"200001663",categoryDisplayList:"200001664",leafletBanner:"200001665",leafletItemCardImage:"200001666",leafletItemCardName:"200001667",leafletItemCardCount:"200001668",leafletItemCardOption:"200001669",leafletItemCardCart:"200001670",leafletItemCardMoreButton:"200001671",bundleTab:"200001672",bundleItemCardImage:"200001673",bundleItemCardName:"200001674",bundleItemCardCount:"200001675",bundleItemCardOption:"200001676",bundleItemCardCart:"200001677",bundleItemCardMoreButton:"200001678",eventTab:"200001679",eventItemCardImage:"200001680",eventItemCardName:"200001681",eventItemCardCount:"200001682",eventItemCardOption:"200001683",eventItemCardCart:"200001684",eventItemCardMoreButton:"200001685",weeklyBanner:"200001694",weeklyBannerText:"200001695",weeklyBannerMoreButton:"200001696",bestTab:"200001697",bestItemCardImage:"200001698",bestItemCardName:"200001699",bestItemCardCount:"200001700",bestItemCardOption:"200001701",bestItemCardCart:"200001702",bannerExpress:"200001703"}),f=(0,s.Z)((0,d.Z)({},l,m,c),{sortPopularity:"200001630",sortPriceAsc:"200001631",sortPriceDesc:"200001632",itemCardImage:"200001624",itemCardStore:"200001625",itemCardName:"200001626",itemCardCount:"200001627",itemCardOption:"200001628",itemCardCart:"200001629",desktopFilterMartTab:"200001613",desktopFilterMart:"200001614",desktopFilterCategoryTab:"200001615",desktopFilterCategory1Depth:"200001616",desktopFilterCategory2Depth:"200001617",desktopFilterBrandTab:"200001619",desktopFilterBrand:"200001620",desktopFilterBrandMoreButton:"200001621",desktopFilterPriceTab:"200001622",desktopFilterPrice:"200001623",desktopFilterPromotionTab:"200010469",desktopFilterPromotion:"200010470",locationCategory:"200001633",locationFilter:"200001634",locationReset:"200001635",pagination:"200001636",filterBsd:"200011566"}),g=(0,s.Z)((0,d.Z)({},u,m,c),{sortPopularity:"200001718",sortPriceAsc:"200001719",sortPriceDesc:"200001720",itemCardImage:"200001713",itemCardName:"200001714",itemCardCount:"200001715",itemCardOption:"200001716",itemCardCart:"200001717",desktopFilterMartTab:"200001613",desktopFilterMart:"200001614",desktopFilterCategoryTab:"200001704",desktopFilterCategory1Depth:"200001705",desktopFilterCategory2Depth:"200001706",desktopFilterBrandTab:"200001708",desktopFilterBrand:"200001709",desktopFilterBrandMoreButton:"200001710",desktopFilterPriceTab:"200001711",desktopFilterPrice:"200001712",desktopFilterPromotionTab:"200010473",desktopFilterPromotion:"200010474",locationCategory:"200001721",locationFilter:"200001722",locationReset:"200001723",pagination:"200001724",filterBsd:"200011568"}),y=(0,s.Z)((0,d.Z)({},l,m,c),{sortPopularity:"200001655",sortPriceAsc:"200001656",sortPriceDesc:"200001657",itemCardImage:"200001649",itemCardStore:"200001650",itemCardName:"200001651",itemCardCount:"200001652",itemCardOption:"200001653",itemCardCart:"200001654",desktopFilterMartTab:"200001637",desktopFilterMart:"200001638",desktopFilterCategoryTab:"200001639",desktopFilterCategoryAll:"200001640",desktopFilterCategory1Depth:"200001641",desktopFilterCategory2Depth:"200001642",desktopFilterBrandTab:"200001644",desktopFilterBrand:"200001645",desktopFilterBrandMoreButton:"200001646",desktopFilterPriceTab:"200001647",desktopFilterPrice:"200001648",desktopFilterPromotionTab:"200010471",desktopFilterPromotion:"200010472",locationFilter:"200001658",locationReset:"200001659",pagination:"200001660",filterBsd:"200011567"}),h=(0,s.Z)((0,d.Z)({},u,m,c),{sortPopularity:"200001740",sortPriceAsc:"200001741",sortPriceDesc:"200001742",itemCardImage:"200001735",itemCardName:"200001736",itemCardCount:"200001737",itemCardOption:"200001738",itemCardCart:"200001739",desktopFilterMartTab:"200001637",desktopFilterMart:"200001638",desktopFilterCategoryTab:"200001725",desktopFilterCategoryAll:"200001726",desktopFilterCategory1Depth:"200001727",desktopFilterCategory2Depth:"200001728",desktopFilterBrandTab:"200001730",desktopFilterBrand:"200001731",desktopFilterBrandMoreButton:"200001732",desktopFilterPriceTab:"200001733",desktopFilterPrice:"200001734",desktopFilterPromotionTab:"200010475",desktopFilterPromotion:"200010476",locationFilter:"200001743",locationReset:"200001744",pagination:"200001745",filterBsd:"200011569"}),k=(o={},(0,i.Z)(o,"".concat(n.Mx,"/home"),p),(0,i.Z)(o,"".concat(n.Mx,"/home?sellerId=shomeplus"),C),(0,i.Z)(o,"".concat(n.Mx,"/category"),f),(0,i.Z)(o,"".concat(n.Mx,"/category?sellerId=shomeplus"),g),(0,i.Z)(o,"".concat(n.Mx,"/search"),y),(0,i.Z)(o,"".concat(n.Mx,"/search?sellerId=shomeplus"),h),(0,i.Z)(o,"".concat(n.Mx,"/address-book"),c),(0,i.Z)(o,"".concat(n.Mx,"/guide"),{createAddress:"200001748",guideDeliverySchedule:"200001749",call:"200002001"}),o),B={gaugeBar:"200002042",gaugeBarFreeShipping:"200002043"},b=(0,s.Z)((0,d.Z)({},B),{deliveryAddressNone:"200001804",deliveryAddressOther:"20001911",deliveryAddressUser:"200001805",deliveryAddressSchedule:"200001806",deliverySchedule:"200001807",deliveryScheduleNone:"200010140",sloganCheck:"200001809",sloganOther:"200001810",sloganNext:"200001811",sloganClose:"200001812",sloganAvailable:"200001813",topBanner:"200001814",categoryDisplay:"200001816",benefitBanner:"200001817",promotionTab:"200001818",itemCardImage:"200001819",itemCardStore:"200001820",itemCardName:"200001821",itemCardOption:"200001822",itemCardCart:"200001823",promotionBanner:"200001824",promotionMoreButton:"200001825",weeklyBanner:"200001826",weeklyBannerStore:"200001827",weeklyBannerText:"200001828",bestTab:"200001836",bestItemCardImage:"200001837",bestItemCardStore:"200001838",bestItemCardName:"200001839",bestItemCardOption:"200001840",bestItemCardCart:"200001841"}),v=(0,s.Z)((0,d.Z)({},B),{topBanner:"200001909",deliveryAddressNone:"200001910",deliveryAddressOther:"200001911",deliveryAddressUser:"200001912",deliveryAddressSchedule:"200001806",categoryDisplay:"200001913",promotionTab:"200001914",itemCardImage:"200001915",itemCardName:"200001916",itemCardOption:"200001917",itemCardCart:"200001918",promotionBanner:"200001919",promotionMoreButton:"200001920",weeklyBanner:"200001921",weeklyBannerText:"200001922",bestTab:"200001930",bestItemCardImage:"200001931",bestItemCardName:"200001932",bestItemCardOption:"200001933",bestItemCardCart:"200001934"}),I=(0,s.Z)((0,d.Z)({},B),{deliveryAddressNone:"200001804",deliveryAddressOther:"200001911",deliveryAddressUser:"200001805",deliveryAddressSchedule:"200001806",mainCategory:"200001844",subCategory:"200001845",categoryAllButton:"200001846",filter:"200001847",sort:"200001849",sortItem:"200001850",itemCardImage:"200001853",itemCardStore:"200001854",itemCardName:"200001855",itemCardOption:"200001856",itemCardCart:"200001857",moreButton:"200001859",filterMartTab:"200001860",filterMart:"200001861",filterBrandTab:"200001862",filterBrand:"200001863",filterBrandMoreButton:"200001864",filterPriceTab:"200001865",filterPrice:"200001866",filterReset:"200001867",filterPromotionTab:"200010141",filterPromotion:"200010142",filterPromotionMoreButton:"200010143",filterClose:"200010144",filterInputKeyword:"200010145",categoryLayerClose:"200002044",categoryLayerName:"200002045",filterBsd:"200011562"}),x=(0,s.Z)((0,d.Z)({},B),{deliveryAddressNone:"200001910",deliveryAddressOther:"200001911",deliveryAddressUser:"200001912",deliveryAddressSchedule:"200001806",mainCategory:"200001938",subCategory:"200001939",categoryAllButton:"200001940",filter:"200001941",sort:"200001943",sortItem:"200001944",itemCardImage:"200001947",itemCardName:"200001948",itemCardOption:"200001949",itemCardCart:"200001950",moreButton:"200001952",filterBrandTab:"200001953",filterBrand:"200001954",filterBrandMoreButton:"200001955",filterPriceTab:"200001956",filterPrice:"200001957",filterReset:"200001958",filterPromotionTab:"200010165",filterPromotion:"200010166",filterPromotionMoreButton:"200010167",filterClose:"200010168",filterInputKeyword:"200010169",categoryLayerClose:"200002044",categoryLayerName:"200002045",filterBsd:"200011564"}),M=(0,s.Z)((0,d.Z)({},B),{deliveryAddressNone:"200001804",deliveryAddressOther:"20001911",deliveryAddressUser:"200001805",deliveryAddressSchedule:"200001806",filter:"200001872",sort:"200001874",sortItem:"200001875",itemCardImage:"200001878",itemCardStore:"200001879",itemCardName:"200001880",itemCardOption:"200001881",itemCardCart:"200001882",moreButton:"200001884",filterMartTab:"200001885",filterMart:"200001886",filterCategoryTab:"200001887",filterCategory1Depth:"200001888",filterCategory2Depth:"200001889",filterCategoryMoreButton:"200001890",filterBrandTab:"200001891",filterBrand:"200001892",filterBrandMoreButton:"200001893",filterPriceTab:"200001894",filterPrice:"200001895",filterReset:"200001896",filterPromotionTab:"200010146",filterPromotion:"200010147",filterPromotionMoreButton:"200010148",filterClose:"200010149",filterBsd:"200011563"}),w=(0,s.Z)((0,d.Z)({},B),{deliveryAddressNone:"200001910",deliveryAddressOther:"200001911",deliveryAddressUser:"200001912",deliveryAddressSchedule:"200001806",filter:"200001963",sort:"200001966",sortItem:"200001967",itemCardImage:"200001970",itemCardName:"200001971",itemCardOption:"200001972",itemCardCart:"200001973",moreButton:"200001975",filterCategoryTab:"200001976",filterCategory1Depth:"200001977",filterCategory2Depth:"200001978",filterCategoryMoreButton:"200001979",filterBrandTab:"200001980",filterBrand:"200001981",filterBrandMoreButton:"200001982",filterPriceTab:"200001983",filterPrice:"200001984",filterReset:"200001985",filterPromotionTab:"200010170",filterPromotion:"200010171",filterPromotionMoreButton:"200010172",filterClose:"200010173",filterBsd:"200011565"});a={},(0,i.Z)(a,"".concat(n.Mx,"/home"),b),(0,i.Z)(a,"".concat(n.Mx,"/home?sellerId=shomeplus"),v),(0,i.Z)(a,"".concat(n.Mx,"/category"),I),(0,i.Z)(a,"".concat(n.Mx,"/category?sellerId=shomeplus"),x),(0,i.Z)(a,"".concat(n.Mx,"/search"),M),(0,i.Z)(a,"".concat(n.Mx,"/search?sellerId=shomeplus"),w),(0,i.Z)(a,"".concat(n.Mx,"/address-book"),{addressBookCloseButton:"200002017",newAddressButon:"200002018",addressName:"200002021",deleteAddAddressButton:"200002022",addressBookModifyButton:"200002024",defaultAddressButton:"200002025",deliverySlotDayButton:"200002026",deliveryName:"200002029",addAddressButton:"200002032",addressLayerNo:"200002034",addressLayerYes:"200002035"}),(0,i.Z)(a,"".concat(n.Mx,"/guide"),{createAddress:"200001998",guideDeliverySchedule:"200001999",benefitBanner:"200002000",call:"200002001"});var F=new Proxy({},{get:function(e,t){if("undefined"!=typeof window){var r=new URLSearchParams(window.location.search).get("sellerId"),o=(null==r?void 0:r.toLowerCase())==="shomeplus",a=k["".concat(window.location.pathname).concat(o?"?sellerId=shomeplus":"")];return a?a[t]:""}return""}})},8112:function(e,t,r){var o=r(9106),a=function(e){for(var t in e)"string"!=typeof e[t]||e[t].length?void 0===e[t]&&delete e[t]:delete e[t]},n=function(){return"undefined"!=typeof window?window.montelena||{}:{sendEvent:function(){},sendViewManual:function(){}}};t.Z={sendEvent:function(e,t,r,i,d){r=r||("undefined"!=typeof window?window.location.href:r);var s=n(),l=t.acode,m=(0,o.Z)(t,["acode"]);return a(m),s.sendEvent&&s.sendEvent(e,l,m,r,i,d)},sendViewManual:function(e,t){var r=n();return r.sendViewManual&&r.sendViewManual(e,t)}}}}]);