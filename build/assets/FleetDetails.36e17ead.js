import{u as s,a as t,j as i}from"./app.944e8d8e.js";import{A as l}from"./AppLayout.595fb028.js";import{C as m,F as p}from"./FleetCardContent.3343cf95.js";import{P as n}from"./PageTitle.8f2ea7c4.js";import"./FlashMessage.f8f9d883.js";import"./date.helpers.37179c42.js";import"./index.es.bbd55343.js";import"./AircraftCondition.8b13e728.js";const d=({fleet:e})=>{const{auth:o}=s().props,r=e.map(a=>t(m,{content:t(p,{fleet:a})},a.id));return i("div",{className:"p-4",children:[!o.user&&t(n,{title:"Fleet"}),r]})};d.layout=e=>t(l,{children:e,title:"Fleet",heading:"Fleet"});export{d as default};
