"use strict";(self.webpackChunkjobly=self.webpackChunkjobly||[]).push([[154,653],{428:function(e,t,n){n(791);t.Z=n.p+"static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg"},154:function(e,t,n){n.r(t);var a=n(439),c=n(791),s=n(689),r=n(687),o=n(508),l=n(428),i=n(653),u=n(590),d=n(184);t.default=function(e){var t=(0,s.UO)().company,n=(0,c.useState)([]),m=(0,a.Z)(n,2),h=m[0],p=m[1],f=(0,c.useState)(!0),b=(0,a.Z)(f,2),x=b[0],y=b[1],g="https://huguesbert17.github.io/jobly",j=(0,c.useContext)(u.Z).user;return null!==j&&void 0!==j&&j.isLogged||(window.location.href=g),(0,c.useEffect)((function(){r.Z.getCompany(t).then((function(e){y(!1),p(e)}))}),[]),x?(0,d.jsx)(o.Z,{style:"skype"}):h.length||x?(0,d.jsxs)(c.Fragment,{children:[(0,d.jsx)("div",{className:"col-11 col-md-5 col-sm-6 mx-auto pt-4 align-items-center",children:(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("img",{className:"mb-4",src:h[0].logoUrl?"".concat(g,"/").concat(h[0].logoUrl.replace("png","svg")):l.Z,alt:"",width:120}),(0,d.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:h[0].name}),(0,d.jsx)("blockquote",{children:h[0].description})]})}),(0,d.jsx)(c.Fragment,{children:(0,d.jsx)(i.default,{company:t})})]}):(0,d.jsx)("h1",{children:"This company wass not found"})}},653:function(e,t,n){n.r(t);var a=n(439),c=n(791),s=n(687),r=n(590),o=n(91),l=n(184);t.default=function(e){var t,n=(0,c.useState)(),i=(0,a.Z)(n,2),u=i[0],d=i[1],m=(0,c.useRef)(),h=(0,o.Z)().applyToJob,p=(0,c.useContext)(r.Z).user;null!==p&&void 0!==p&&p.isLogged||(window.location.href="https://huguesbert17.github.io/jobly");var f=function(){e.company||s.Z.getJobs().then((function(e){return d(e)})),e.company&&s.Z.getCompanyJobs(e.company).then((function(e){return d(e)}))};(0,c.useEffect)((function(){f()}),[]);return u?(0,l.jsxs)("div",{className:"row flex-column",style:{gap:"1rem"},children:[(0,l.jsx)("div",{className:"col-11 col-md-5 mx-auto mb-3 sticky-top p-0",style:{top:"5em"},children:(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("input",{onChange:function(t){s.Z.getJobs(t.target.value).then((function(e){return d(e)})),e.company&&s.Z.getCompanyJobs(e.company,t.target.value).then((function(e){return d(e)}))},type:"text",ref:m,className:"form-control",placeholder:"Search job","aria-label":"Search job","aria-describedby":"sercch"}),(0,l.jsx)("div",{className:"input-group-append",children:(0,l.jsx)("button",{onClick:function(){""!==m.current.value&&(s.Z.getJobs(m.current.value).then((function(e){return d(e)})),e.company&&s.Z.getCompanyJobs(e.company,m.current.value).then((function(e){return d(e)})))},className:"btn btn-primary",id:"search",style:{borderRadius:"0 0.375rem 0.375rem 0"},children:"Search"})})]})}),!(u||!u.length)&&(null===(t=m.current)||void 0===t?void 0:t.value)&&(0,l.jsxs)("div",{className:"text-center mt-3",children:[(0,l.jsx)("h1",{children:"No jobs for this search term"}),(0,l.jsx)("button",{className:"btn btn-inverse-primary",onClick:function(){m.current.value="",f()},children:"Clear search"})]}),u.map((function(e,t){var n=p.myJobs.filter((function(t){return t.toString()===e.id.toString()}));return(0,l.jsxs)("div",{className:"col-11 col-md-5 mx-auto card",children:[(0,l.jsx)("h5",{className:"card-header",children:e.title}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsxs)("h5",{className:"card-title",children:["Company: ",e.companyName]}),(0,l.jsxs)("p",{className:"card-text",children:["Salary: $",e.salary]}),(0,l.jsxs)("p",{className:"card-text",children:["Equity: ",e.equity?e.equity:0]}),(0,l.jsx)("div",{className:"text-end",children:(0,l.jsx)("button",{className:"btn btn-primary",disabled:n.length,onClick:function(){return t=e.id,void h(t);var t},children:n.length?"Applied":"Apply to job"})})]})]},t)}))]}):(0,l.jsx)(l.Fragment,{})}}}]);
//# sourceMappingURL=154.8fecb24e.chunk.js.map