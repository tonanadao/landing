"use strict";(self.webpackChunktonana_landing=self.webpackChunktonana_landing||[]).push([[329],{3950:function(e,s,t){var a=t(5671),i=t(3144),l=t(136),n=t(8347),c=t(2791),r=t(1523),o=t(2092),d=t(184),m=function(e){(0,l.Z)(t,e);var s=(0,n.Z)(t);function t(){return(0,a.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){var e=this.props.pathItems.length;return(0,d.jsx)(c.Fragment,{children:(0,d.jsx)("section",{className:"bg-half bg-light d-table w-100",children:(0,d.jsx)(o.W2,{children:(0,d.jsx)(o.X2,{className:"justify-content-center",children:(0,d.jsx)(o.JX,{lg:"12",className:"text-center",children:(0,d.jsxs)("div",{className:"page-next-level",children:[this.props.title?(0,d.jsxs)("h4",{className:"title",children:[" ",this.props.title]}):null,this.props.children?this.props.children:null,(0,d.jsx)("div",{className:"page-next",children:(0,d.jsx)("nav",{className:"d-inline-block",children:(0,d.jsx)(o.aG,{"aria-label":"breadcrumb",listClassName:"bg-white rounded shadow mb-0",children:this.props.pathItems.map((function(s,t){return s.id!==e?(0,d.jsx)(o.gN,{children:(0,d.jsx)(r.rU,{to:s.link,className:"text-uppercase fw-bold text-dark me-1",children:s.name})},t):(0,d.jsx)(o.gN,{active:!0,"aria-current":"page",children:s.name},t)}))})})})]})})})})})})}}]),t}(c.Component);s.Z=m},3329:function(e,s,t){t.r(s);var a=t(5671),i=t(3144),l=t(7326),n=t(136),c=t(8347),r=t(2791),o=t(1523),d=t(2092),m=t(3950),h=t(184),x=function(e){(0,n.Z)(t,e);var s=(0,c.Z)(t);function t(e){var i;return(0,a.Z)(this,t),(i=s.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},i.state={pathItems:[{id:1,name:"Landrick",link:"/index"},{id:2,name:"Help Center",link:"#"},{id:3,name:"Overview"}],features:[{icon:"uil uil-question-circle",link:"/helpcenter-faqs",title:"FAQs",desc:"Due to its widespread use as filler text for layouts, non-readability is of great importance."},{icon:"uil uil-file-bookmark-alt",link:"/helpcenter-guides",title:"Guides / Support",desc:"Due to its widespread use as filler text for layouts, non-readability is of great importance."},{icon:"uil uil-cog",link:"/helpcenter-support-request",title:"Support Request",desc:"Due to its widespread use as filler text for layouts, non-readability is of great importance."}],col1:!0,col2:!1,col3:!1,col4:!1},i.t_col1=i.t_col1.bind((0,l.Z)(i)),i.t_col2=i.t_col2.bind((0,l.Z)(i)),i.t_col3=i.t_col3.bind((0,l.Z)(i)),i.t_col4=i.t_col4.bind((0,l.Z)(i)),i}return(0,i.Z)(t,[{key:"t_col1",value:function(){this.setState({col1:!this.state.col1,col2:!1,col3:!1,col4:!1})}},{key:"t_col2",value:function(){this.setState({col2:!this.state.col2,col1:!1,col3:!1,col4:!1})}},{key:"t_col3",value:function(){this.setState({col3:!this.state.col3,col2:!1,col1:!1,col4:!1})}},{key:"t_col4",value:function(){this.setState({col4:!this.state.col4,col2:!1,col3:!1,col1:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)(m.Z,{pathItems:this.state.pathItems,children:[(0,h.jsxs)("h4",{className:"title",children:[" ","Hello! ",(0,h.jsx)("br",{})," How can we help you?"," "]}),(0,h.jsx)("div",{className:"subcribe-form mt-4 pt-2",children:(0,h.jsx)(d.l0,{children:(0,h.jsxs)(d.cw,{className:"mb-0",children:[(0,h.jsx)("input",{type:"text",id:"help",name:"name",className:"border bg-white rounded-pill shadow",required:!0,placeholder:"Search your questions or topic..."}),(0,h.jsx)(d.zx,{type:"submit",color:"primary",className:"btn-pills",children:"Search"})]})})})]}),(0,h.jsxs)("section",{className:"section",children:[(0,h.jsxs)(d.W2,{children:[(0,h.jsx)(d.X2,{className:"justify-content-center",children:(0,h.jsx)(d.JX,{xs:12,children:(0,h.jsxs)("div",{className:"section-title text-center mb-4 pb-2",children:[(0,h.jsx)("h4",{className:"mb-4",children:"Find the help you need"}),(0,h.jsx)("p",{className:"para-desc mx-auto text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."})]})})}),(0,h.jsx)(d.X2,{className:"justify-content-center",children:this.state.features.map((function(e,s){return(0,h.jsx)(d.JX,{lg:4,md:6,xs:12,className:"mt-4 pt-2",children:(0,h.jsx)(d.Zb,{className:"explore-feature border-0 rounded text-center bg-white",children:(0,h.jsxs)(d.eW,{children:[(0,h.jsx)("div",{className:"icon rounded-circle shadow-lg d-inline-block mb-2 h2",children:(0,h.jsx)("i",{className:e.icon})}),(0,h.jsxs)("div",{className:"content mt-3",children:[(0,h.jsx)(o.rU,{to:e.link,className:"title h5 text-dark",children:e.title}),(0,h.jsx)("p",{className:"text-muted mt-3 mb-0",children:e.desc})]})]})})},s)}))})]}),(0,h.jsxs)(d.W2,{className:"mt-100 mt-60",children:[(0,h.jsx)(d.X2,{className:"justify-content-center",children:(0,h.jsx)(d.JX,{xs:12,children:(0,h.jsxs)("div",{className:"section-title text-center mb-4 pb-2",children:[(0,h.jsx)("h4",{className:"mb-4",children:"Get Started"}),(0,h.jsx)("p",{className:"para-desc mx-auto text-muted",children:"Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page."})]})})}),(0,h.jsx)(d.X2,{className:"justify-content-center",children:(0,h.jsx)(d.JX,{lg:9,className:"mt-4 pt-2",children:(0,h.jsx)("div",{className:"faq-content",children:(0,h.jsxs)("div",{className:"accordion",id:"accordionExample",children:[(0,h.jsxs)(d.Zb,{className:"border-0 rounded mb-2",children:[(0,h.jsx)(o.rU,{to:"#",onClick:this.t_col1,className:this.state.col1?"faq position-relative text-primary":"faq position-relative text-dark",children:(0,h.jsx)(d.Ol,{className:"border-0 shadow bg-light p-3",id:"headingOne",children:(0,h.jsxs)("h6",{className:"title mb-0",children:[" ","How does it work ?",(0,h.jsx)("i",{className:this.state.col1?"mdi mdi-chevron-up float-end":"mdi mdi-chevron-down float-end"})]})})}),(0,h.jsx)(d.UO,{isOpen:this.state.col1,children:(0,h.jsx)(d.eW,{children:(0,h.jsx)("p",{className:"text-muted mb-0 faq-ans",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."})})})]}),(0,h.jsxs)(d.Zb,{className:"border-0 rounded mb-2",children:[(0,h.jsx)(o.rU,{to:"#",onClick:this.t_col2,className:this.state.col2?"faq position-relative text-primary":"faq position-relative text-dark",children:(0,h.jsx)(d.Ol,{className:"border-0 shadow bg-light p-3",id:"headingTwo",children:(0,h.jsxs)("h6",{className:"title mb-0",children:[" ","Do I need a designer to use Landrick ?",(0,h.jsx)("i",{className:this.state.col2?"mdi mdi-chevron-up float-end":"mdi mdi-chevron-down float-end"})]})})}),(0,h.jsx)(d.UO,{isOpen:this.state.col2,children:(0,h.jsx)(d.eW,{children:(0,h.jsx)("p",{className:"text-muted mb-0 faq-ans",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."})})})]}),(0,h.jsxs)(d.Zb,{className:"border-0 rounded mb-2",children:[(0,h.jsx)(o.rU,{to:"#",onClick:this.t_col3,className:this.state.col3?"faq position-relative text-primary":"faq position-relative text-dark",children:(0,h.jsx)(d.Ol,{className:"border-0 shadow bg-light p-3",id:"headingfive",children:(0,h.jsxs)("h6",{className:"title mb-0",children:[" ","What do I need to do to start selling ?",(0,h.jsx)("i",{className:this.state.col3?"mdi mdi-chevron-up float-end":"mdi mdi-chevron-down float-end"})]})})}),(0,h.jsx)(d.UO,{isOpen:this.state.col3,children:(0,h.jsx)(d.eW,{children:(0,h.jsx)("p",{className:"text-muted mb-0 faq-ans",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."})})})]}),(0,h.jsxs)(d.Zb,{className:"border-0 rounded mb-0",children:[(0,h.jsx)(o.rU,{to:"#",onClick:this.t_col4,className:this.state.col4?"faq position-relative text-primary":"faq position-relative text-dark",children:(0,h.jsx)(d.Ol,{className:"border-0 shadow bg-light p-3",id:"headingfive",children:(0,h.jsxs)("h6",{className:"title mb-0",children:[" ","What happens when I receive an order ?",(0,h.jsx)("i",{className:this.state.col4?"mdi mdi-chevron-up float-end":"mdi mdi-chevron-down float-end"})]})})}),(0,h.jsx)(d.UO,{isOpen:this.state.col4,children:(0,h.jsx)(d.eW,{children:(0,h.jsx)("p",{className:"text-muted mb-0 faq-ans",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."})})})]})]})})})})]}),(0,h.jsx)(d.W2,{className:"mt-100 mt-60",children:(0,h.jsxs)(d.X2,{children:[(0,h.jsx)(d.JX,{lg:6,md:6,xs:12,children:(0,h.jsxs)("div",{className:"d-flex align-items-center features feature-clean shadow rounded p-4",children:[(0,h.jsx)("div",{className:"icons text-primary text-center",children:(0,h.jsx)("i",{className:"uil uil-envelope-check d-block rounded h3 mb-0"})}),(0,h.jsxs)("div",{className:"flex-1 content ms-4",children:[(0,h.jsx)("h5",{className:"mb-1",children:(0,h.jsx)(o.rU,{to:"#",className:"text-dark",children:"Get in Touch !"})}),(0,h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."}),(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)(o.rU,{to:"#",className:"btn btn-sm btn-soft-primary",children:"Submit a Request"})})]})]})}),(0,h.jsx)(d.JX,{lg:6,md:6,xs:12,className:"mt-4 mt-sm-0 pt-2 pt-sm-0",children:(0,h.jsxs)("div",{className:"d-flex align-items-center features feature-clean shadow rounded p-4",children:[(0,h.jsx)("div",{className:"icons text-primary text-center",children:(0,h.jsx)("i",{className:"uil uil-webcam d-block rounded h3 mb-0"})}),(0,h.jsxs)("div",{className:"flex-1 content ms-4",children:[(0,h.jsx)("h5",{className:"mb-1",children:(0,h.jsx)(o.rU,{to:"#",className:"text-dark",children:"Start a Meeting"})}),(0,h.jsx)("p",{className:"text-muted mb-0",children:"This is required when, for text is not yet available."}),(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)(o.rU,{to:"#",className:"btn btn-sm btn-soft-primary",children:"Start Video Chat"})})]})]})})]})})]})]})}}]),t}(r.Component);s.default=x}}]);
//# sourceMappingURL=329.8dd4c93c.chunk.js.map