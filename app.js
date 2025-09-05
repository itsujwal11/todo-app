const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.onclick= function(){

const taskText = input.value;
if(taskText ==="") return;

const li = document.createElement("li");
li.textContent = taskText;


const del = document.createElement("button");
del.textContent = "Delete"
del.style.marginLeft = "8px";

li.appendChild(del);
list.appendChild(li);

input.value = "";


}

list.addEventListener("click", function(e){
if(e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
}else if(e.target.tagName === "LI"){
    e.target.classList.toggle("done")
}

});

input.addEventListener("keydown" ,function(e){
if(e.key === "Enter"){
    button.click();
}

});