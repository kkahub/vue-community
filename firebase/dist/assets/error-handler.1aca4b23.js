import{b as n,N as l}from"./index.8c00725b.js";import{g as s}from"./error-message.8e28215f.js";var t=n(async({app:r})=>{r.config.errorHandler=(o,e,a)=>{console.log("### app.config.errorHandler ###"),console.log("err: ",o),console.log("instance: ",e),console.log("info: ",a),l.create(s(o.code))}});export{t as default};