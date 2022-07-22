import{u as d,r as h,j as s,a as e,L as g,d as u}from"./app.944e8d8e.js";import{L as p}from"./LayoutAuth.cd97506e.js";const f=()=>{const{errors:a}=d().props,[r,n]=h.exports.useState({name:"",email:"",password:"",agree:!1,optin:!1});function l(t){const c=t.target.id,o=t.target.type==="checkbox"?t.target.checked:t.target.value;n(m=>({...m,[c]:o}))}function i(t){t.preventDefault(),u.Inertia.post("/register",r)}return s("div",{className:"flex flex-col justify-center items-center",children:[e("div",{className:"mb-2 mt-8",children:e("img",{src:"https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png",height:"150",width:"150"})}),s("div",{className:"rounded-md shadow-sm bg-white p-4 w-96 m-2",children:[e("p",{className:"text-center text-2xl mb-2",children:"Register"}),s("form",{onSubmit:i,children:[s("div",{className:"my-2",children:[e("label",{htmlFor:"name",className:"block",children:e("span",{className:"text-gray-700",children:"Full name"})}),e("input",{id:"name",value:r.name,onChange:l,type:"text",className:"form-input form"}),a.name&&e("div",{className:"text-sm text-red-500",children:a.name})]}),s("div",{className:"my-2",children:[e("label",{htmlFor:"email",className:"block",children:e("span",{className:"text-gray-700",children:"Email"})}),e("input",{id:"email",value:r.email,onChange:l,type:"email",className:"form-input form"}),a.email&&e("div",{className:"text-sm text-red-500",children:a.email})]}),s("div",{className:"my-2",children:[e("label",{htmlFor:"password",className:"block",children:e("span",{className:"text-gray-700",children:"Password"})}),e("input",{id:"password",value:r.password,onChange:l,type:"password",className:"form-input form"}),a.password&&e("div",{className:"text-sm text-red-500",children:a.password})]}),s("div",{className:"my-2",children:[s("label",{htmlFor:"agree",className:"inline-flex items-center",children:[e("input",{id:"agree",checked:r.agree,onChange:l,type:"checkbox",className:"form-checkbox rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"}),e("span",{className:"text-gray-700 ml-2",children:"I agree to the terms and conditions"})]}),a.agree&&e("div",{className:"text-sm text-red-500",children:a.agree})]}),e("div",{className:"my-2",children:s("label",{htmlFor:"optin",className:"inline-flex items-center",children:[e("input",{id:"optin",checked:r.optin,onChange:l,type:"checkbox",className:"form-checkbox rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50"}),e("span",{className:"text-gray-700 ml-2",children:"Opt in to emails from Bush Divers VA"})]})}),e("button",{className:"btn btn-primary w-full",children:"Register"}),e("div",{className:"mt-2",children:e(g,{href:"/login",children:"Already have an account?"})})]})]})]})};f.layout=a=>e(p,{children:a,title:"Register"});export{f as default};
