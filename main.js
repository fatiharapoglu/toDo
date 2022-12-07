(()=>{"use strict";class t{constructor(t,e="No details",s="Normal",a="No date"){this.name=t,this.details=e,this.priority=s,this.date=a}getName(){return this.name}setName(t){this.name=t}getDetails(){return this.details}setDetails(t){this.details=t}getDate(){return this.date}setDate(t){this.date=t}getPriority(){return this.priority}setPriority(t){this.priority=t}}class e{constructor(t,e="No details"){this.name=t,this.details=e,this.taskList=[]}getName(){return this.name}setName(t){this.name=t}getDetails(){return this.details}setDetails(t){this.details=t}getTaskList(){return this.taskList}setTaskList(t){this.taskList=t}getTask(t){return this.taskList.find((e=>e.getName()==t))}addTask(t){this.taskList.push(t)}removeTask(t){this.taskList=this.taskList.filter((e=>e.getName()!==t))}}class s{constructor(){this.projectList=[]}getProjectList(){return this.projectList}setProjectList(t){this.projectList=t}getProject(t){return this.projectList.find((e=>e.getName()==t))}addProject(t){this.projectList.push(t)}removeProject(t){this.projectList=this.projectList.filter((e=>e.getName()!==t))}}class a{static wrapper=new s;static defaultProject=new e(" myTask","This is the default project");static pushDefault(){this.wrapper.projectList.push(this.defaultProject)}static getDefaultHome(){this.buttonHandlers(),this.pushDefault()}static buttonHandlers(){const t=document.querySelector("#new-task-btn"),e=document.querySelector("#new-project-btn"),s=document.querySelector("#task-form"),a=document.querySelector("#project-form"),i=document.querySelector("#close-task-modal-btn"),r=document.querySelector("#close-project-modal-btn");t.addEventListener("click",this.openNewTaskModal),e.addEventListener("click",this.openNewProjectModal),i.addEventListener("click",this.closeNewTaskModal),r.addEventListener("click",this.closeNewProjectModal),s.addEventListener("submit",(t=>{t.preventDefault(),this.addNewTask()})),a.addEventListener("submit",(t=>{t.preventDefault(),this.addNewProject()}))}static openNewTaskModal(){document.querySelector("#new-task-modal").classList.remove("hidden")}static openNewProjectModal(){document.querySelector("#new-project-modal").classList.remove("hidden")}static closeNewTaskModal(){document.querySelector("#new-task-modal").classList.add("hidden")}static closeNewProjectModal(){document.querySelector("#new-project-modal").classList.add("hidden")}static addNewTask(){const e=document.getElementById("task"),s=document.getElementById("task-details"),a=document.getElementById("date"),i=document.getElementById("priority");let r=e.value,o=s.value,c=a.value,n=i.value;""===c&&(c=void 0);let d=new t(r,o,n,c),l=this.getActiveProject();l.addTask(d),this.closeNewTaskModal(),this.renderTasks(),this.clearForm(),console.log(l.getTaskList())}static addNewProject(){const t=document.getElementById("project"),s=document.getElementById("project-details");let a=t.value,i=s.value,r=new e(a,i);this.wrapper.addProject(r),this.closeNewProjectModal(),this.renderProjects(),this.clearForm(),console.log(this.wrapper.getProjectList())}static getActiveProject(){return this.defaultProject}static renderTasks(){const t=document.querySelector("#content");t.innerHTML="";let e=this.getActiveProject().getTaskList();for(let s of e)t.innerHTML+=`\n            <div class="task-item"> Name : ${s.getName()} </div>\n            `}static renderProjects(){const t=document.querySelector("#project-list");t.innerHTML="";let e=this.wrapper.getProjectList();for(let s of e)t.innerHTML+=`\n            <li>\n                <a href="#">\n                    ${s.getName().charAt(0).toUpperCase()+s.getName().slice(1)}\n                </a>\n            </li>\n            `}static clearForm(){const t=document.getElementById("task"),e=document.getElementById("task-details"),s=document.getElementById("project"),a=document.getElementById("project-details");t.value="",e.value="",s.value="",a.value=""}}a.getDefaultHome()})();