import{r as n,a as o,F as c,u,j as m}from"./app.944e8d8e.js";import{L as p}from"./Layout.3197969f.js";import{P as f}from"./PageTitle.8f2ea7c4.js";import{m as a}from"./maplibre-gl.11b67a0a.js";import{p as b}from"./general.helpers.0a3fe5e5.js";import"./Footer.9e9d320d.js";import"./index.es.bbd55343.js";import"./FlashMessage.f8f9d883.js";const d="pk.eyJ1IjoicnVzc2VsbHd3ZXN0IiwiYSI6ImNrc29vZm5paDEweGIzMnA3MXAzYTFuMDQifQ.7veU-ARmzYClHDFsVQvT5g",g=e=>{const r=n.exports.useRef(null),s=n.exports.useRef(null);return n.exports.useEffect(()=>{s.current||(s.current=new a.Map({container:r.current,style:b(e.mapStyle),center:[165.272614,29.5309],zoom:2,accessToken:d}))}),n.exports.useEffect(()=>{console.log(e.hubs),e.hubs&&s.current.on("load",function(){e.hubs.forEach(t=>{const i=[t.lon,t.lat];console.log(i);const l=new a.Popup({offset:25}).setHTML(`
            <b>ICAO:</b> ${t.identifier}<br/>
            <b>Name:</b> ${t.name}<br/>
            <b>Alitude:</b> ${t.altitude}ft<br/>
            <b>Longest Runway Length:</b> ${t.longest_runway_length}ft
         `);new a.Marker({color:"#F97316"}).setLngLat(i).setPopup(l).addTo(s.current)})})},[]),o(c,{children:o("div",{ref:r,className:"map-container-"+e.size})})},y=({hubs:e})=>{const{auth:r}=u().props;return m(c,{children:[o(f,{title:"Hubs"}),o("div",{className:"mt-4 rounded shadow bg-white p-4",children:o(g,{hubs:e,size:"xl",mapStyle:r.user.map_style})})]})};y.layout=e=>o(p,{children:e,title:"Hubs"});export{y as default};
