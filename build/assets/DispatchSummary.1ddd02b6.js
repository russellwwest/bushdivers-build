import{j as t,F as i,a}from"./app.944e8d8e.js";import{F as c,i as l}from"./index.es.bbd55343.js";const r=e=>t(i,{children:[a("div",{className:"text-xl",children:"Dispatch Summary"}),t("p",{className:"mt-2",children:["Planned Destination: ",e.pirep?a("span",{children:e.pirep.destination_airport_id}):a("span",{children:e.destination})]}),a("div",{className:"mt-2",children:a("div",{children:e.selectedAircraft&&t("div",{className:"flex justify-start items-center",children:[a(c,{icon:l,className:"mr-2"}),t("span",{children:[e.selectedAircraft.registration," - ",e.selectedAircraft.fleet.manufacturer," ",e.selectedAircraft.fleet.name," (",e.selectedAircraft.fleet.type,") ",e.pirep&&e.pirep.is_rental?a("span",{className:"bg-orange-500 text-white rounded px-2",children:"Rental"}):a(i,{})]})]})})}),t("div",{className:"mt-2",children:[a("div",{className:"text-lg mb-1",children:"Payload:"}),e.deadHead?a("span",{className:"italic",children:"Deadhead flight - no cargo"}):a("span",{}),t("div",{children:["Pilot & payload weight (inc. fuel): ",e.selectedAircraft&&t("span",{className:e.selectedAircraft&&e.personWeight+e.fuelWeight+e.cargoWeight>e.selectedAircraft.fleet.mtow-e.selectedAircraft.fleet.zfw?"text-red-500":"",children:[(e.personWeight+e.fuelWeight+e.cargoWeight).toFixed(2)," lbs / ",e.selectedAircraft.fleet.mtow-e.selectedAircraft.fleet.zfw," lbs"]})]}),t("div",{children:["Cargo payload: ",e.selectedAircraft&&t("span",{className:e.selectedAircraft&&e.cargoWeight>e.selectedAircraft.fleet.cargo_capacity?"text-red-500":"",children:[e.cargoWeight," lbs / ",e.selectedAircraft.fleet.cargo_capacity," lbs"]})]}),t("div",{children:["Passenger count: ",e.selectedAircraft&&t("span",{className:e.selectedAircraft&&e.passengerCount>e.selectedAircraft.fleet.pax_capacity?"text-red-500":"",children:[e.passengerCount," / ",e.selectedAircraft.fleet.pax_capacity]})]}),t("div",{className:"mt-1",children:["Fuel: ",e.pirep?t("span",{children:[e.pirep.planned_fuel," gal | ",e.fuelWeight.toFixed(2)," lbs"]}):t("span",{children:[e.fuel," gal | ",e.fuelWeight.toFixed(2)," lbs"]})]})]})]});export{r as D};
