import{_ as c,r as i,o as e,c as o,a as s,F as l,b as _,d,w as u,t as h}from"./index-043c9d1d.js";const p={data(){return{jobs:[]}},mounted(){fetch("http://localhost:3000/jobs").then(t=>t.json()).then(t=>this.jobs=t).catch(t=>console.log(t.message))}},m=s("h1",null,"Jobs",-1),b={key:0},f={key:1},k=s("p",null,"Loading jobs...",-1),g=[k];function j(t,v,x,y,a,B){const r=i("router-link");return e(),o(l,null,[m,a.jobs.length?(e(),o("div",b,[s("ul",null,[(e(!0),o(l,null,_(a.jobs,n=>(e(),o("div",{key:n.id,class:"job"},[d(r,{to:{name:"JobDetails",params:{id:n.id}}},{default:u(()=>[s("li",null,h(n.title),1)]),_:2},1032,["to"])]))),128))])])):(e(),o("div",f,g))],64)}const w=c(p,[["render",j]]);export{w as default};
