"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3812:function(e,t,a){a.d(t,{qE:function(){return b}});var r=a(7294),n=a(9276),l=a(4520),o=a(8387),i=a(3887),c=a(4031),s=(...e)=>e.filter(Boolean).join(" ");function m(...e){return function(t){e.some((e=>(null==e||e(t),null==t?void 0:t.defaultPrevented)))}}var[u,d]=(0,o.k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function p(e){const[t,a]=e.split(" ");return t&&a?`${t.charAt(0)}${a.charAt(0)}`:t.charAt(0)}function g(e){const{name:t,getInitials:a,...l}=e,o=d();return r.createElement(n.m$.div,{role:"img","aria-label":t,...l,__css:o.label},t?null==a?void 0:a(t):null)}g.displayName="AvatarName";var x=e=>r.createElement(n.m$.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e},r.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),r.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}));function f(e){const{src:t,srcSet:a,onError:l,onLoad:o,getInitials:c,name:s,borderRadius:m,loading:u,iconLabel:d,icon:p=r.createElement(x,null),ignoreFallback:f,referrerPolicy:E}=e,b=(0,i.d9)({src:t,onError:l,ignoreFallback:f});return!t||!("loaded"===b)?s?r.createElement(g,{className:"chakra-avatar__initials",getInitials:c,name:s}):(0,r.cloneElement)(p,{role:"img","aria-label":d}):r.createElement(n.m$.img,{src:t,srcSet:a,alt:s,onLoad:o,referrerPolicy:E,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:m}})}f.displayName="AvatarImage";var E={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},b=(0,n.Gp)(((e,t)=>{const a=(0,n.jC)("Avatar",e),[o,i]=(0,r.useState)(!1),{src:c,srcSet:d,name:g,showBorder:b,borderRadius:v="full",onError:h,onLoad:y,getInitials:w=p,icon:k=r.createElement(x,null),iconLabel:C=" avatar",loading:_,children:S,borderColor:F,ignoreFallback:N,...I}=(0,l.Lr)(e),L={borderRadius:v,borderWidth:b?"2px":void 0,...E,...a.container};return F&&(L.borderColor=F),r.createElement(n.m$.span,{ref:t,...I,className:s("chakra-avatar",e.className),"data-loaded":(j=o,j?"":void 0),__css:L},r.createElement(u,{value:a},r.createElement(f,{src:c,srcSet:d,loading:_,onLoad:m(y,(()=>{i(!0)})),onError:h,getInitials:w,name:g,borderRadius:v,icon:k,iconLabel:C,ignoreFallback:N}),S));var j}));b.displayName="Avatar",(0,n.Gp)((function(e,t){const a=(0,n.jC)("Avatar",e),{children:o,borderColor:i,max:m,spacing:u="-0.75rem",borderRadius:d="full",...p}=(0,l.Lr)(e),g=(0,c.W)(o),x=m?g.slice(0,m):g,f=null!=m&&g.length-m,b=x.reverse().map(((t,a)=>{const n={marginEnd:0===a?0:u,size:e.size,borderColor:t.props.borderColor??i,showBorder:!0};return(0,r.cloneElement)(t,function(e){const t=Object.assign({},e);for(let a in t)void 0===t[a]&&delete t[a];return t}(n))})),v={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...a.group},h={borderRadius:d,marginStart:u,...E,...a.excessLabel};return r.createElement(n.m$.div,{ref:t,role:"group",__css:v,...p,className:s("chakra-avatar__group",e.className)},f>0&&r.createElement(n.m$.span,{className:"chakra-avatar__excess",__css:h},`+${f}`),b)})).displayName="AvatarGroup";var v={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}};(0,n.Gp)((function(e,t){const{placement:a="bottom-end",className:l,...o}=e,i=d(),c={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...v[a],...i.badge};return r.createElement(n.m$.div,{ref:t,...o,className:s("chakra-avatar__badge",l),__css:c})})).displayName="AvatarBadge"},2663:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(7294),n=a(1883),l=a(1317),o=a(9357),i=a(1162),c=a(3887),s=a(8483);var m=()=>r.createElement(i.kC,{direction:["column-reverse","column-reverse","column-reverse","row"],align:"space-between",justify:"space-around",pt:["5","5","10"]},r.createElement(i.gC,{justify:["center","flex-start"],align:["center","center","center","flex-start"],mt:"5"},r.createElement(i.xu,{bg:"pink",px:"2",py:"1.5",alignItem:"flex-start",display:["none","none","none","block"]},r.createElement(i.xv,{color:"white"},"Analytics")),r.createElement(i.W2,{p:"0",maxW:"510px"},r.createElement(i.X6,{fontSize:["3xl","6xl"]},"Many desktop publishing packages and web page ")),r.createElement(i.W2,{p:"0",maxW:"500px"},r.createElement(i.xv,{fontSize:"xl",fontFamily:"paragraph",color:"gray.600"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus."))),r.createElement(i.kC,{align:["center","center","center","flex-start"],justify:["center","center","center","flex-start"],mt:"5"},r.createElement(i.xu,{w:["md","md","xl","xl","3xl"]},r.createElement(c.Ee,{src:s.Z,css:"box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);\r // -webkit-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);\r // -moz-box-shadow: -27px -27px 0px 0px rgba(0,230,202,1);"})))),u=a(9352);const d={icon:r.createElement(u.l5b,null)},p=e=>{let{icon:t,title:a,desc:n,href:l}=e;return r.createElement(i.gC,{spacing:3},r.createElement(i.Cd,{size:"90",bg:"pink",color:"white"},r.createElement(i.xv,{fontSize:"4xl"},t)),r.createElement(i.X6,null,a),r.createElement(i.xv,{textAlign:"center",maxW:"380px"},n),r.createElement(i.xu,{as:"button",bg:"blue",color:"white",px:"5",py:""},"Read Articles"))};var g=()=>r.createElement(i.kC,{mt:"20",direction:["column","column","column","row"],gap:"20",align:"center",justify:"center"},r.createElement(p,{icon:d.icon,title:"Fully Responsive",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus."}),r.createElement(p,{icon:d.icon,title:"Fully Responsive",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus."}),r.createElement(p,{icon:d.icon,title:"Fully Responsive",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus."})),x=a(3812),f=a(2440);const E=e=>{let{img:t,title:a,date:n,desc:l,author:o,avatar:s,to:m}=e;return r.createElement(i.kC,{gap:"5",align:"flex-start",justify:"flex-start",direction:["column","column","row"],h:["none","none","auto"]},r.createElement(i.xu,null,r.createElement(c.Ee,{src:t,boxSize:"280px",objectFit:"cover",css:"box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);\r -webkit-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);\r -moz-box-shadow: -17px -21px 0px 0px rgba(0,230,202,1);"})),r.createElement(i.gC,{w:"280px",align:"flex-start"},r.createElement(i.xu,{bg:"pink",px:"2",py:"1.5",alignItem:"flex-start"},r.createElement(i.xv,{fontSize:"xs",color:"white",fontFamily:"paragraph"},"SEO")),r.createElement(i.X6,{fontSize:"xl",fontFamily:"head"},r.createElement(f.Z,{fade:!0,to:"/blog"+m},a)),r.createElement(i.xv,{align:"left",color:"#7B7485",fontFamily:"paragraph"},"Dodany: ",n),r.createElement(i.xv,{fontFamily:"paragraph"},r.createElement("div",{dangerouslySetInnerHTML:{__html:l}})),r.createElement(i.Ug,null,r.createElement(x.qE,{size:"sm",src:s}),r.createElement(i.xv,{color:"#7B7485"},o))))};var b=()=>{const e=(0,n.useStaticQuery)("1102490013").allWpPost.nodes;return console.log(e),r.createElement(i.kC,{direction:"column",mt:"150"},r.createElement(i.X6,{fontSize:["3xl","5xl","6xl"],align:"center"},"Najnowsze artykuły"),r.createElement(i.kC,{wrap:"wrap",justify:"center",gap:"20",mt:"100"},e.map((e=>r.createElement(E,{to:e.uri,img:e.featuredImage||s.Z,title:e.title,date:e.date,desc:e.excerpt,avatar:e.author.node.avatar.url,author:e.author.node.name})))))};var v=()=>{var e;const t=(0,n.useStaticQuery)("2683865739");return console.log(t.wpPage.featuredImage.node.localFile.childImageSharp.original.src),r.createElement(i.kC,{align:"center",justify:"center",mt:"100",mr:["0","0","400"]},r.createElement(i.xu,{display:["none","none","block"]},r.createElement(c.Ee,{src:null===(e=t.wpPage.featuredImage.node.localFile.childImageSharp.original)||void 0===e?void 0:e.src,w:"lg",h:"xl",objectFit:"cover"})),r.createElement(i.xu,{pos:"relative"},r.createElement(i.xu,{pos:["block","block","absolute"],top:"-120",left:"-20",w:["100%","100%","400px","500px","600px","760px"]},r.createElement(i.gC,{align:"flex-start",spacing:"5",p:"8",bg:"#F7F7F7"},r.createElement(i.xv,{fontFamily:"paragraph"},"O nas"),r.createElement(i.X6,{fontFamily:"head",fontSize:["3xl","5xl"]},"Nasz zespół"),r.createElement(i.xv,{fontFamily:"paragraph",fontSize:"md",color:"gray.600"},r.createElement("div",{dangerouslySetInnerHTML:{__html:t.wpPage.content.slice(0,300)}})),r.createElement(i.xu,{as:"button",px:"5",py:"1",bg:"ocean",color:"white",fontFamily:"paragraph"},r.createElement(f.Z,{fade:!0,duration:"0.3",to:"/about"},"Dowiedz się więcej"))))))},h=a(979);var y=()=>r.createElement(i.gC,{w:"100%",py:"40",px:"3",bg:"blue",color:"white",spacing:"5",mt:"100px"},r.createElement(i.X6,{fontFamily:"head"},"Newsletter"),r.createElement(i.xv,{fontFamily:"paragraph",textAlign:"center"},"Subscribe my Newsletter for new blog posts, tips & new photos. Let's stay updated!"),r.createElement(i.kC,{fontFamily:"paragraph",direction:["column","column","row"],gap:["2","2","0"]},r.createElement(h.II,{placeholder:"Your e-mail*",borderRight:["1","1","0"],borderRightRadius:["5","5","0"]}),r.createElement(i.xu,{as:"button",px:"7",py:"2",bg:"ocean"},"Subscribe")));function w(e){let{data:t}=e;return r.createElement(l.Z,null,r.createElement(o.Z,{title:"home"}),r.createElement(m,null),r.createElement(g,null),r.createElement(b,null),r.createElement(v,null),r.createElement(y,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-852d2d0f5a339ff95c29.js.map