import{u as N,r as u,a as e,j as n,d as b,F as g,b as w}from"./app.944e8d8e.js";import{F as f,w as C,z as v,A as x}from"./index.es.bbd55343.js";import{A as k}from"./AppLayout.595fb028.js";import"./FlashMessage.f8f9d883.js";import"./date.helpers.37179c42.js";const S=({showNewCat:c,updateShowCat:r})=>{const{errors:s}=N().props,[a,o]=u.exports.useState({category:""});function h(i){const t=i.target.id,d=i.target.value;o(p=>({...p,[t]:d}))}return e("div",{className:`${c?"block":"hidden"} my-2 p-2 bg-white rounded shadow`,children:n("div",{className:"w-1/2",children:[n("div",{className:"flex",children:[e("h2",{className:"text-lg",children:"Add New Category"}),e("span",{children:e("button",{onClick:()=>r(!1),className:"btn btn-light ml-2",children:"Hide"})})]}),n("form",{onSubmit:i=>{i.preventDefault(),b.Inertia.post("/admin/categories",a),r(!1)},children:[n("div",{className:"my-2",children:[e("label",{htmlFor:"category",className:"block",children:e("span",{className:"text-gray-700",children:"Category"})}),e("input",{id:"category",value:a.category,onChange:h,type:"text",className:"form-input form"}),s.category&&e("div",{className:"text-sm text-red-500",children:s.category})]}),e("button",{className:"btn btn-secondary",children:"Add"})]})]})})},A=({resources:c})=>{const[r,s]=u.exports.useState(!1),[a,o]=u.exports.useState(null);function h(t){a!==null&&t.id===a.id?(o(null),s(!1)):(o(t),s(!0))}function m(t){b.Inertia.post(`/admin/resources/reject/${t}`,null,{only:["resources"]})}function i(t){b.Inertia.post(`/admin/resources/approve/${t}`,null,{only:["resources"]})}return n("div",{children:[e("h2",{children:"Resource Approvals"}),e("div",{children:n("table",{className:"table-condensed table-auto",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Category"}),e("th",{children:"Title"}),e("th",{children:"Package"}),e("th",{children:"Version"}),e("th",{children:"Uploaded By"}),e("th",{children:"Author"}),e("th",{children:"Dependencies"}),e("th",{children:"Actions"})]})}),e("tbody",{children:c&&c.map(t=>n("tr",{children:[e("td",{children:t.category.category}),e("td",{children:e("a",{className:"link",href:t.url,children:t.title})}),e("td",{children:t.filename}),e("td",{children:t.version}),e("td",{children:t.user.name}),e("td",{children:t.author}),n("td",{children:[t.dependencies&&t.dependencies.length>0?e(g,{children:t.dependencies.length}):0,t.dependencies&&n(g,{children:[e("button",{onClick:()=>h(t),className:"btn btn-light ml-2",children:a&&a.id===t.id?"Hide":"Show"}),r&&a&&a.id===t.id?e("div",{className:"absolute bg-white shadow-2xl border-orange-200 border-2 rounded-lg",children:n("table",{className:"table-condensed table-auto",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Title"}),e("th",{children:"Package Name"}),e("th",{children:"Type"})]})}),e("tbody",{children:t.dependencies.map((d,p)=>n("tr",{children:[e("td",{children:d.url===null?e(g,{children:d.title}):e("a",{className:"link",href:d.url,children:d.title})}),e("td",{children:d.filename}),e("td",{children:d.mandatory?"Mandatory":"Optional"})]},p))})]})}):e(g,{})]})]}),n("td",{children:[e("button",{onClick:()=>i(t.id),className:"btn btn-secondary mr-4",children:e(f,{icon:C})}),e("button",{onClick:()=>m(t.id),className:"btn btn-light ml-4",children:e(f,{icon:v})})]})]},t.id))})]})})]})},D=({resources:c,categories:r})=>{const[s,a]=u.exports.useState(!1),[o,h]=u.exports.useState(null),[m,i]=u.exports.useState("");function t(l){h(l.id),i(l.category)}function d(l){i(l.target.value)}async function p(l,y){l.key==="Enter"&&(await w.put("/api/admin/categories",{id:y,category:m})).status===200&&(b.Inertia.reload({only:["categories"]}),h(null))}return n("div",{className:"p-4",children:[e("div",{children:e("button",{onClick:()=>a(!0),className:"btn btn-secondary mr-2",children:"Add Category"})}),e(S,{showNewCat:s,updateShowCat:a}),n("div",{className:"flex justify-between mt-4",children:[e("div",{className:"w-2/3 bg-white p-4 mr-2 shadow rounded",children:e(A,{resources:c})}),n("div",{className:"w-1/3 bg-white p-4 ml-2 shadow rounded",children:[e("h2",{children:"Categories"}),n("table",{className:"table-condensed table-auto",children:[e("thead",{children:n("tr",{children:[e("th",{children:"Category"}),e("th",{children:"Action"})]})}),e("tbody",{children:r&&r.map(l=>n("tr",{children:[e("td",{children:o===l.id?e("input",{onKeyDown:y=>p(y,l.id),className:"form form-input",value:m,onChange:d}):e(g,{children:l.category})}),e("td",{children:e("button",{onClick:()=>t(l),className:"btn btn-light",children:e(f,{icon:x})})})]},l.id))})]})]})]})]})};D.layout=c=>e(k,{children:c,title:"Manage Resources",heading:"Manage Resources"});export{D as default};