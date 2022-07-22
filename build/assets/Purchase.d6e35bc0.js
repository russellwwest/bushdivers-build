import{u as oe,r as s,j as t,a as e,F as w,b as H,d as O}from"./app.944e8d8e.js";import{A as de}from"./AppLayout.595fb028.js";import"./FlashMessage.f8f9d883.js";import"./date.helpers.37179c42.js";import"./index.es.bbd55343.js";const me=({aircraft:n,purchaseType:r})=>{const{auth:q,errors:L}=oe().props,[h,Y]=s.exports.useState(!1),[o,F]=s.exports.useState(0),[C,d]=s.exports.useState(null),[p,v]=s.exports.useState(null),[B,S]=s.exports.useState(""),[P,k]=s.exports.useState(n.hq),[ue,U]=s.exports.useState(null),[g,z]=s.exports.useState(null),[j,D]=s.exports.useState(null),[u,G]=s.exports.useState(r==="new"?null:n.registration),[I,f]=s.exports.useState(null),[c,b]=s.exports.useState(r==="new"?.2*n.new_price:.2*n.sale_price),[m,N]=s.exports.useState(3),[$,J]=s.exports.useState(0),[_,K]=s.exports.useState(0),[he,Q]=s.exports.useState(!1),[T,V]=s.exports.useState(0),[x,W]=s.exports.useState("buy"),[X,Z]=s.exports.useState(!1),[A,pe]=s.exports.useState(r==="new"?n.new_price:n.sale_price),ee=a=>{Y(a.target.checked),d(null),v(null),k(null),S(""),a.target.checked||F(0)},te=async a=>{if(d(null),v(null),S(a.target.value),a.target.value.length>=3){const l=await H.get(`/api/airport/search/${a.target.value}`);if(l.data.airport){v(`${l.data.airport.identifier} - ${l.data.airport.name}`),k(l.data.airport.identifier),d(null);const i=await H.get(`/api/jumpseat/cost/${n.hq}/${l.data.airport.identifier}`);if(i.status===200){const y=i.data.cost*10;F(parseFloat(y)),U(i.data.distance)}else d("Cannot calculate price")}else d("No airport found")}},ae=a=>{z(a.target.value)},ne=a=>{if(f(null),a.target.value.length>8){f("Registration cannot be more than 8 characters");return}G(a.target.value)},se=a=>{const l=a.target.checked?"finance":"buy";W(l)},le=a=>{typeof a.target.value=="string"?b(a.target.value===""?0:parseFloat(a.target.value)):b(a.target.value)},re=a=>{typeof a.target.value=="string"?N(parseFloat(a.target.value)):N(a.target.value)},ie=()=>{if(typeof c!="number"&&b(0),parseInt(m)<3||parseInt(m)>24){N(3),window.alert("Term must be between 3 and 24 months, please calculate again");return}const l=(r==="new"?parseFloat(n.new_price)+parseFloat(o):parseFloat(n.sale_price)+parseFloat(o))-c,i=m/12,y=8/100,M=l*y*i,E=(l+M).toFixed(2),ce=(E/m).toFixed(2);Z(!0),V(M),J(E),K(ce),Q(!0)},R=a=>{if(d(null),D(null),f(null),u==null||u.length>7){f("Registration must be at least 1 character and no more than 7");return}if(g==null){D("Please enter home hub ICAO");return}const l=a==="buy"?r==="new"?parseFloat(n.new_price)+parseFloat(o):parseFloat(n.sale_price)+parseFloat(o):c;if(l>q.user.balance){window.alert("You do not have sufficient funds");return}if(a==="buy"){const i={total:l,id:n.id,deliveryIcao:r==="new"?P:null,hub:g,reg:u,purchaseType:r};O.Inertia.post("/marketplace/purchase",i)}else if(a==="finance"){if(!X){window.alert("You need to calculate a finance agreement");return}const i={id:n.id,deliveryIcao:r==="new"?P:null,hub:g,reg:u,deposit:c,financeAmount:$,term:m,monthlyPayments:_,purchaseType:r};O.Inertia.post("/marketplace/finance",i)}};return t("div",{className:"p-4",children:[r==="new"?t("div",{className:"text-lg",children:["Purchase New - ",n.manufacturer," ",n.name," ",x==="finance"?e("span",{children:"- On Finance"}):e(w,{})]}):t("div",{className:"text-lg",children:["Purchase Used - ",n.registration," - ",n.fleet.manufacturer," ",n.fleet.name," (",n.current_airport_id,") ",x==="finance"?e("span",{children:"- On Finance"}):e(w,{})]}),t("div",{className:"mt-2 bg-white rounded shadow p-4",children:[e("div",{className:"text-lg mb-2",children:"Invoice"}),r==="new"&&t(w,{children:[t("div",{className:"flex justify-start items-center space-x-2",children:[t("label",{htmlFor:"delivery",className:"inline-flex items-center",children:[e("input",{id:"delivery",checked:h,onChange:ee,type:"checkbox",className:"form-checkbox rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"}),e("span",{className:"text-gray-700 ml-2",children:"Deliver?"})]}),h&&e("div",{className:"flex justify-start items-center",children:e("input",{id:"dep",placeholder:"Deliver to ICAO",type:"text",className:"form-input form",value:B,onChange:te})}),p&&e("div",{className:"text-sm mt-1",children:p}),C&&e("div",{className:"text-sm text-red-500 mt-1",children:C})]}),!h&&t("div",{className:"mt-2",children:["Deliver to ",n.hq]}),h&&p&&t("div",{className:"mt-2",children:["Deliver from: ",n.hq," to: ",p]})]}),t("div",{className:"w-1/4",children:[t("div",{className:"mt-2",children:[e("label",{htmlFor:"hub",children:e("span",{className:"text-gray-700",children:"Home Hub (ICAO)"})}),e("input",{id:"hub",type:"text",className:"form-input form",value:g,onChange:ae}),j&&e("span",{className:"text-sm text-red-500",children:j})]}),t("div",{className:"mt-2",children:[e("label",{htmlFor:"reg",children:e("span",{className:"text-gray-700",children:"Registration"})}),e("input",{id:"reg",type:"text",className:"form-input form",value:u,onChange:ne}),I&&e("span",{className:"text-sm text-red-500",children:I})]})]}),t("div",{className:"my-4",children:[t("div",{className:"flex justify-between",children:[e("span",{children:"Base Price"}),t("span",{children:["$",A]})]}),t("div",{className:"flex justify-between",children:[e("span",{children:"Delivery"}),t("span",{children:["$",o.toFixed(2)]})]}),t("div",{className:"flex justify-between",children:[e("span",{children:"Total"}),t("span",{children:["$",(parseFloat(A)+parseFloat(o)).toFixed(2)]})]})]}),t("label",{htmlFor:"method",className:"inline-flex items-center",children:[e("input",{id:"method",checked:x==="finance",onChange:se,type:"checkbox",className:"form-checkbox rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"}),e("span",{className:"text-gray-700 ml-2",children:"Finance purchase?"})]}),x==="finance"?t("div",{className:"mt-4",children:[e("div",{className:"text-lg",children:"Finance Details"}),t("div",{className:"w-1/4",children:[t("div",{className:"mt-2",children:[e("label",{htmlFor:"deposit",children:e("span",{className:"text-gray-700",children:"Deposit amount"})}),e("input",{id:"deposit",type:"text",className:"form-input form",value:c,onChange:le})]}),t("div",{className:"mt-2",children:[e("label",{htmlFor:"term",children:e("span",{className:"text-gray-700",children:"Term (months) - min: 3; max: 24"})}),e("input",{id:"term",type:"text",className:"form-input form",value:m,onChange:re})]}),e("button",{onClick:ie,className:"btn btn-primary mt-2",children:"Calculate"})]}),t("div",{className:"mt-2",children:[t("div",{className:"flex justify-between",children:[e("span",{children:"Deposit (due now)"}),e("span",{children:c>0?`$${c}`:"-"})]}),t("div",{className:"flex justify-between",children:[e("span",{children:"Monthly Payments"}),t("span",{children:["$",_]})]}),t("div",{className:"flex justify-between",children:[e("span",{children:"Total Amount Payable"}),t("span",{children:["$",$]})]}),t("div",{className:"flex justify-between",children:[e("span",{children:"Cost of Finance (interest @ 8%)"}),t("span",{children:["$",T.toFixed(2)]})]})]}),t("div",{className:"mt-4 flex justify-between",children:[e("div",{className:"text-sm italic",children:"Terms: Payments made on 1st of each month; More than two missed payments will result on aircraft being reclaimed."}),e("button",{onClick:()=>R("finance"),className:"btn btn-secondary",children:"Confirm Finance"})]})]}):e("div",{className:"mt-4 flex justify-end",children:e("button",{onClick:()=>R("buy"),className:"btn btn-secondary",children:"Purchase"})}),L.reg&&e("span",{className:"text-sm text-red-500 my-2",children:"The aircraft registration has already exists"})]})]})};me.layout=n=>e(de,{children:n,title:"Marketplace - Invoice",heading:"Marketplace - Invoice"});export{me as default};