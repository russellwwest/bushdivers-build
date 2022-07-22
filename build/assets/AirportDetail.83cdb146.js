import{r as n,a as e,F as u,u as g,j as a,L as o}from"./app.944e8d8e.js";import{m}from"./maplibre-gl.11b67a0a.js";import{p as N}from"./general.helpers.0a3fe5e5.js";import{A as p}from"./AppLayout.595fb028.js";import{F as h,E as w,G as y}from"./index.es.bbd55343.js";import"./FlashMessage.f8f9d883.js";import"./date.helpers.37179c42.js";const A="pk.eyJ1IjoicnVzc2VsbHd3ZXN0IiwiYSI6ImNrc29vZm5paDEweGIzMnA3MXAzYTFuMDQifQ.7veU-ARmzYClHDFsVQvT5g",b=t=>{const s=n.exports.useRef(null),l=n.exports.useRef(null),[d,i]=n.exports.useState({});return n.exports.useEffect(()=>{l.current||(l.current=new m.Map({container:s.current,style:N(t.mapStyle),center:[t.airport.lon,t.airport.lat],zoom:14,accessToken:A}))}),n.exports.useEffect(()=>{if(t.airport){i(t.airport);const c=[t.airport.lon,t.airport.lat];l.current.on("load",function(){new m.Marker({color:"#F97316"}).setLngLat(c).addTo(l.current)})}},[t.airport]),e(u,{children:e("div",{ref:s,className:"map-container-"+t.size})})},S=({airport:t,metar:s,aircraft:l})=>{const{auth:d}=g().props,[i,c]=n.exports.useState(),x=r=>{c(r.target.value)},f=r=>{switch(r){case 1:return"Available";case 2:return"Reserved";case 3:return"In Use"}},v=r=>{switch(r){case"A":return"Asphalt";case"B":return"Bituminous";case"C":return"Concrete";case"CE":return"Cement";case"CR":return"Water";case"G":return"Grass";case"GR":return"Gravel";case"M":return"Macadam";case"S":return"Sand";case"T":return"Tarmac";case"W":return"Water";default:return"Unknown"}};return a("div",{className:"p-4",children:[a("div",{className:"w-1/6 mb-2 flex items-center",children:[e("input",{id:"airport",type:"text",placeholder:"ICAO",className:"form-input form inline-block",value:i,onChange:x}),e(o,{href:`/airports/${i}`,className:"ml-2 btn btn-secondary",children:"Go"})]}),t?a("h1",{children:[t.name," - ",t.identifier]}):e("h1",{children:"Airport Search"}),t&&a("div",{className:"flex flex-col lg:flex-row justify-between",children:[a("div",{className:"lg:w-1/2",children:[e("div",{className:"rounded shadow p-1 lg:p-4 mt-2 bg-white mx-2",children:a("div",{className:"flex justify-between overflow-x-auto",children:[a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"ICAO"}),a("div",{className:"text-xl",children:[t.identifier," ",t.longest_runway_surface==="W"&&e(h,{icon:w})]})]}),a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"Size"}),e("div",{className:"text-xl",children:t.size})]}),a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"Country"}),e("div",{className:"text-xl",children:t.country})]}),a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"Latitude"}),e("div",{className:"text-xl",children:(t.lat*1).toFixed(4)})]}),a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"Longitude"}),e("div",{className:"text-xl",children:(t.lon*1).toFixed(4)})]}),a("div",{className:"flex flex-col items-center my-2 mx-4",children:[e("div",{className:"text-sm",children:"Altitude"}),a("div",{className:"text-xl",children:[t.altitude.toLocaleString(navigator.language),"ft"]})]})]})}),t.longest_runway_length&&e("div",{className:"rounded shadow p-4 mt-2 bg-white mx-2",children:a("div",{className:"flex items-center",children:["RWY",a("span",{className:"ml-2",children:[v(t.longest_runway_surface)," ",t.longest_runway_length.toLocaleString(navigator.language),"ft x ",t.longest_runway_width,"ft"]})]})}),e("div",{className:"rounded shadow p-4 mt-2 bg-white mx-2",children:e("div",{className:"flex items-center",children:s?a(u,{children:[e(h,{icon:y}),e("span",{className:"ml-2",children:s})]}):e("div",{children:"No METAR available"})})}),a("div",{className:"rounded shadow p-4 mt-2 bg-white mx-2 overflow-x-auto",children:[e("div",{className:"text-lg",children:"Available Aircraft"}),a("table",{className:"mt-2 table table-auto table-condensed",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Registration"}),e("th",{children:"Aircraft"}),e("th",{children:"Hub"}),e("th",{children:"Fuel"}),e("th",{children:"Status"})]})}),e("tbody",{children:l&&l.map(r=>a("tr",{children:[e("td",{children:e(o,{href:`/aircraft/${r.id}`,children:r.registration})}),a("td",{children:[r.fleet.manufacturer," ",r.fleet.name," (",r.fleet.type,")"]}),e("td",{children:r.hub_id}),e("td",{children:r.fuel_onboard.toLocaleString(navigator.language)}),e("td",{children:f(r.state)})]},r.id))})]})]})]}),e("div",{className:"lg:w-1/2 rounded shadow p-4 mt-2 bg-white mx-2",children:e(b,{airport:t,size:"large",mapStyle:d.user.map_style})})]})]})};S.layout=t=>e(p,{children:t,title:"Airport Details",heading:"Airport Details"});export{S as default};