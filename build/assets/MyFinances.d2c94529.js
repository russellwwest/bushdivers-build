import{a as e,j as t}from"./app.944e8d8e.js";import{P as i}from"./Pagination.41d058ef.js";import{A as c}from"./AppLayout.595fb028.js";import"./index.es.bbd55343.js";import"./FlashMessage.f8f9d883.js";import"./date.helpers.37179c42.js";const d=({accounts:r,balance:n})=>{const s=a=>{switch(a){case 1:return"Contract Pay";case 2:return"Jumpseat";case 3:return"Contract Cancellation";case 4:return"Refuel Penalty";case 5:return"Bonus Pay (i.e returning aircraft to hub)";case 6:return"Aircraft Rental Fees";case 7:return"Fuel Fees";case 8:return"Ground Handling Fees";case 9:return"Landing Fees";case 10:return"Aircraft Maintenance Fees";case 11:return"Monthly Aircraft Ownership cost";case 12:return"Aircraft Purchase";case 13:return"Aircraft Sale";default:return"Other"}};return e("div",{className:"p-4",children:t("div",{className:"md:w-1/2",children:[t("div",{className:"bg-white shadow rounded p-4 mt-2",children:[e("div",{className:"text-lg",children:"Current Balance"}),t("div",{className:"text-xl",children:["$",n.toFixed(2)]})]}),r&&r.data.map(a=>t("div",{className:"bg-white shadow rounded p-4 mt-2 flex justify-between",children:[t("div",{children:["$",a.total," ",e("br",{}),e("span",{className:"text-sm",children:s(a.type)})]}),e("div",{children:a.created_at})]},a.id)),e("div",{className:"mt-2",children:e(i,{pages:r})})]})})};d.layout=r=>e(c,{children:r,title:"My Finances",heading:"My Finances"});export{d as default};