const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.onclick(function(){

const taskText = input.value;

const li = document.createElement("li");
li.textContent = taskText;

list.appendChild(li);

input.value = "";


})