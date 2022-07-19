import{T as c}from"./TutorialDataService.22fa1299.js";import{_ as g,J as d,K as v,L as s,i as t,Q as i,as as h,S as u,I as C,at as p,al as f,au as D,W as x}from"./index.ab6c987a.js";import{V as l,a as _}from"./http-common.ff210ea6.js";import{V as w}from"./VTextField.a94c18e8.js";const y={props:{tutorial:Object},data(){return{}},methods:{deleteTutorial(){this.$emit("deleteTutorial")},updateTutorial(){this.$emit("updateTutorial")},viewTutorial(){this.$emit("viewTutorial")}}};function A(e,o,m,V,n,a){return d(),v(_,null,{default:s(()=>[t(l,{cols:"9",sm:"2"},{default:s(()=>[i("span",null,h(m.tutorial.title),1)]),_:1}),t(l,{cols:"9",sm:"4"},{default:s(()=>[i("span",null,h(m.tutorial.description),1)]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[t(u,{size:"x-small",icon:"mdi-pencil",onClick:a.updateTutorial},null,8,["onClick"])]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[t(u,{size:"x-small",icon:"mdi-format-list-bulleted-type",onClick:a.viewTutorial},null,8,["onClick"])]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[t(u,{size:"x-small",icon:"mdi-trash-can",onClick:a.deleteTutorial},null,8,["onClick"])]),_:1})]),_:1})}var B=g(y,[["render",A]]);const L={name:"tutorials-list",data(){return{tutorials:[],currentTutorial:null,currentIndex:-1,title:"",message:"Search, Edit or Delete Tutorials"}},components:{TutorialDisplay:B},methods:{goEdit(e){this.$router.push({name:"edit",params:{id:e.id}})},goView(e){this.$router.push({name:"view",params:{id:e.id}})},goDelete(e){c.delete(e.id).then(()=>{this.retrieveTutorials()}).catch(o=>{this.message=o.response.data.message})},retrieveTutorials(){c.getAll().then(e=>{this.tutorials=e.data}).catch(e=>{this.message=e.response.data.message})},refreshList(){this.retrieveTutorials(),this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial(e,o){this.currentTutorial=e,this.currentIndex=e?o:-1},removeAllTutorials(){c.deleteAll().then(e=>{console.log(e.data),this.refreshList()}).catch(e=>{this.message=e.response.data.message})},searchTitle(){c.findByTitle(this.title).then(e=>{this.tutorials=e.data,this.setActiveTutorial(null)}).catch(e=>{this.message=e.response.data.message})}},mounted(){this.retrieveTutorials()}},E=i("h1",null,"Tutorial List",-1),S=x(" Search "),I=i("span",{class:"text-h6"},"Title",-1),$=i("span",{class:"text-h6"},"Description",-1),b=i("span",{class:"text-h6"},"Edit",-1),z=i("span",{class:"text-h6"},"View",-1),N=i("span",{class:"text-h6"},"Delete",-1),U=x(" Remove All ");function F(e,o,m,V,n,a){const k=C("TutorialDisplay");return d(),p(f,null,[E,i("h4",null,h(n.message),1),t(_,null,{default:s(()=>[t(l,{cols:"12",sm:"2"},{default:s(()=>[t(u,{color:"success",onClick:a.searchTitle},{default:s(()=>[S]),_:1},8,["onClick"])]),_:1}),t(l,{col:"12",sm:"10"},{default:s(()=>[t(w,{density:"compact",clearable:"",modelValue:n.title,"onUpdate:modelValue":o[0]||(o[0]=r=>n.title=r)},null,8,["modelValue"])]),_:1})]),_:1}),t(_,null,{default:s(()=>[t(l,{cols:"9",sm:"2"},{default:s(()=>[I]),_:1}),t(l,{cols:"9",sm:"4"},{default:s(()=>[$]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[b]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[z]),_:1}),t(l,{cols:"9",sm:"1"},{default:s(()=>[N]),_:1})]),_:1}),(d(!0),p(f,null,D(n.tutorials,r=>(d(),v(k,{key:r.id,tutorial:r,onDeleteTutorial:T=>a.goDelete(r),onUpdateTutorial:T=>a.goEdit(r),onViewTutorial:T=>a.goView(r)},null,8,["tutorial","onDeleteTutorial","onUpdateTutorial","onViewTutorial"]))),128)),t(u,{onClick:a.removeAllTutorials},{default:s(()=>[U]),_:1},8,["onClick"])],64)}var O=g(L,[["render",F]]);export{O as default};
