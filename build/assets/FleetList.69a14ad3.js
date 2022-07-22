import{a as e,F as c,j as r,L as a,r as o}from"./app.944e8d8e.js";import{F as l,f as d,v as m}from"./index.es.bbd55343.js";import{P as f}from"./PageTitle.8f2ea7c4.js";import{N as b}from"./NoContent.cc240530.js";import"./date.helpers.37179c42.js";import{A as p}from"./AppLayout.595fb028.js";import"./FlashMessage.f8f9d883.js";const N=t=>e(c,{children:t.fleet.aircraft.map(i=>r("tr",{className:"bg-gray-50",children:[e("td",{children:i.registration}),r("td",{children:["Current Location: ",i.current_airport_id]}),e("td",{children:e("div",{className:"flex items-center",children:e(a,{href:`/admin/aircraft/delete/${i.id}`,className:"btn btn-light flex items-center",children:e(l,{icon:d})})})})]},i.id))}),u=t=>r(c,{children:[e("i",{className:"material-icons md-48",children:"airplane_ticket"}),e("div",{children:"There are no fleet"})]}),g=({fleet:t})=>{const[i,s]=o.exports.useState(!1),h=()=>{s(!i)};return r("div",{className:"p-4",children:[e(f,{title:"Fleet"}),e("div",{className:"flex flex-col lg:flex-row justify-between mt-4",children:e("div",{className:"w-full",children:r("div",{className:"rounded shadow bg-white overflow-x-auto mt-4",children:[r("div",{className:"flex justify-between",children:[t&&t.length>0&&e("button",{onClick:h,className:"btn btn-secondary m-2",children:"Toggle fleet aircraft details"}),r("div",{className:"inline m-2",children:[e(a,{href:"/admin/fleet/create",className:"btn btn-secondary mr-2",children:"Add new fleet"}),e(a,{href:"/admin/aircraft/create",className:"btn btn-secondary",children:"Add new aircraft"})]})]}),!t&&e(b,{content:e(u,{})}),t&&t.length>0&&e("div",{children:r("table",{className:"table-condensed table-auto",children:[e("thead",{children:r("tr",{className:"",children:[e("th",{children:"Id"}),e("th",{children:"Type"}),e("th",{children:"Manufacturer"}),e("th",{children:"Name"}),e("th",{children:"Qty"}),e("td",{children:"Actions"})]})}),e("tbody",{children:t&&t.map(n=>r(c,{children:[r("tr",{children:[e("td",{children:n.id}),e("td",{children:n.type}),e("td",{children:n.manufacturer}),e("td",{children:n.name}),e("td",{children:n.aircraft.length}),e("td",{children:r("div",{className:"flex items-center",children:[e(a,{href:`/admin/fleet/edit/${n.id}`,className:"btn btn-secondary flex items-center mr-2",children:e(l,{icon:m})}),e(a,{href:`/admin/fleet/delete/${n.id}`,className:"btn btn-light flex items-center mr-2",children:e(l,{icon:d})})]})})]},n.id),i&&e(N,{fleet:n})]}))})]})})]})})})]})};g.layout=t=>e(p,{children:t,title:"Admin - Fleet",heading:"Fleet List"});export{g as default};
