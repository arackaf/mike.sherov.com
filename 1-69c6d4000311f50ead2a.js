(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{185:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(193),i=a.n(r),n=a(194),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,d=o.scale},186:function(e,t,a){var r;e.exports=(r=a(190))&&r.default||r},187:function(e,t,a){"use strict";a(17);var r=a(0),i=a.n(r),n=a(188),s=a(185);var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.children,a=e.title,r={boxShadow:"none",textDecoration:"none",color:"inherit"},o={display:"flex",justifyContent:"space-between",alignItems:"center"},l=Object.assign({},o,{marginBottom:Object(s.a)(2)}),d=Object.assign({},r,{paddingLeft:Object(s.a)(.5)}),c=i.a.createElement("header",{style:l},i.a.createElement("strong",null,i.a.createElement(n.a,{style:r,to:"/"},a)),i.a.createElement("nav",{style:o},i.a.createElement(n.a,{style:d,to:"/about"},"About"),i.a.createElement(n.a,{style:d,to:"/blog"},"Posts")));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},c,i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Mike Sherov"))},r}(i.a.Component);t.a=o},188:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(11),s=a.n(n),o=a(58),l=a.n(o);a.d(t,"a",function(){return l.a});a(186),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},189:function(e,t,a){"use strict";var r=a(191),i=a(0),n=a.n(i),s=a(11),o=a.n(s),l=a(195),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},190:function(e,t,a){"use strict";a.r(t);a(17);var r=a(0),i=a.n(r),n=a(11),s=a.n(n),o=a(83),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},191:function(e){e.exports={data:{site:{siteMetadata:{title:"Mike Sherov",description:"Mike Sherov's personal website and blog",author:"Mike Sherov"}}}}},192:function(e,t,a){"use strict";a(196);var r=a(200),i=a(0),n=a.n(i),s=a(201),o=a.n(s),l=a(185);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(.25)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",{style:{textAlign:"justify"}},n.a.createElement("strong",null,a)," is a software engineer and instructor, focused on frontend performance and the craft of software since 2003. Mike makes it easier to Get Things Done on the web. He's contributed to many popular open source projects including npm, webpack, jQuery, ESLint, and JSCS. He lives in New York with his wife and 2 children."," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter,target:"_blank",rel:"noopener noreferrer"},"Twitter")," ",n.a.createElement("a",{href:"https://github.com/"+i.github,target:"_blank",rel:"noopener noreferrer"},"Github")," ",n.a.createElement("a",{href:"https://slides.com/"+i.slides,target:"_blank",rel:"noopener noreferrer"},"Slides.com")))}},196:function(e,t,a){"use strict";a(199)("fixed",function(e){return function(){return e(this,"tt","","")}})},199:function(e,t,a){var r=a(6),i=a(8),n=a(36),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},200:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQMG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMA/9oADAMBAAIQAxAAAAGpsItmHDYIROlMtYpP/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEgAhBCIz/9oACAEBAAEFAgbGPj2xNiNKmOMXdC7R+kK9JNP/AP/EABcRAQEBAQAAAAAAAAAAAAAAAAEQITL/2gAIAQMBAT8BDIcz/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQMf/aAAgBAgEBPwFcewX/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhAjEQEnH/2gAIAQEABj8ChFZWbIyWx3SR2wTjwXEKkj//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhMUFR/9oACAEBAAE/IVD1dO31FYM4xeh3SRY9mb1359ZrRW87iUPRS3KnzIG//9oADAMBAAIAAwAAABDv+AL/xAAYEQEBAQEBAAAAAAAAAAAAAAABABEhMf/aAAgBAwEBPxAlPts+pXb/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhEP/aAAgBAgEBPxDSLi5EQ//EAB4QAQADAAICAwAAAAAAAAAAAAEAESFBUTFhcYHB/9oACAEBAAE/ENDnrx49w1OHCiL09SwEXSLDx/KqrafuHfmTCzd7hoIFqt01zDjIyujSvKjTIAAbF0fTHPBjNAof2f/Z",width:100,height:100,src:"/static/11772d93efe3160fa1678421028cd965/f1b5a/profile-pic.jpg",srcSet:"/static/11772d93efe3160fa1678421028cd965/f1b5a/profile-pic.jpg 1x,\n/static/11772d93efe3160fa1678421028cd965/44086/profile-pic.jpg 1.5x,\n/static/11772d93efe3160fa1678421028cd965/9067c/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Mike Sherov",social:{twitter:"mikesherov",github:"mikesherov",slides:"mikesherov"}}}}}},201:function(e,t,a){"use strict";a(29),a(21),a(12),a(62),a(123),a(196);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(59)),s=r(a(64)),o=r(a(124)),l=r(a(125)),d=r(a(0)),c=r(a(11)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(B,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},B=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});B.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:x?1:0,transition:L?"opacity "+m+"ms":"none"},o),k="boolean"==typeof h?"lightgray":h,N={transitionDelay:m+"ms"},Q=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&N,o,f),C={title:t,alt:this.state.isVisible?"":a,style:Q,className:A};if(p){var M=p,P=M[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),P.base64&&d.default.createElement(R,{src:P.base64,spreadProps:C,imageVariants:M,generateSources:v}),P.tracedSVG&&d.default.createElement(R,{src:P.tracedSVG,spreadProps:C,imageVariants:M,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(M),d.default.createElement(B,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},P,{imageVariants:M}))}}))}if(g){var T=g,D=T[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete z.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},k&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:k,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},L&&N)}),D.base64&&d.default.createElement(R,{src:D.base64,spreadProps:C,imageVariants:T,generateSources:v}),D.tracedSVG&&d.default.createElement(R,{src:D.tracedSVG,spreadProps:C,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(B,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:w},D,{imageVariants:T}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:L,sizes:O,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=x;t.default=k}}]);
//# sourceMappingURL=1-69c6d4000311f50ead2a.js.map