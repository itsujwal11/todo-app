
const input     = document.getElementById("taskInput");
const addBtn    = document.getElementById("addBtn");
const activeList = document.getElementById("taskList");
const doneList  = document.getElementById("doneList");
const counter   = document.getElementById("taskCounter");
const clearAll  = document.getElementById("clearAll");
const emptyLeft = document.getElementById("emptyState");
const emptyDone = document.getElementById("emptyDone");
addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});
clearAll.addEventListener("click", () => {
  activeList.innerHTML = "";
  doneList.innerHTML   = "";
  updateCounts();
  input.focus();
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li   = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const doneBtn = createButton("Done", "doneBtn");
  const editBtn = createButton("Edit", "edit");
  const delBtn  = createButton("Delete", "delete");

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(doneBtn, editBtn, delBtn);

  li.append(span, actions);
  activeList.appendChild(li);
  doneBtn.addEventListener("click", () => toggleDone(li, doneBtn));
  editBtn.addEventListener("click", () => editTask(span));
  delBtn.addEventListener("click", () => {
    li.remove();
    updateCounts();
  });

  updateCounts();
  input.value = "";
  input.focus();
}

function toggleDone(li, btn) {
  li.classList.toggle("done");
  const isDone = li.classList.contains("done");

  btn.textContent = isDone ? "Undone" : "Done";
  (isDone ? doneList : activeList).appendChild(li);

  updateCounts();
}

function editTask(span) {
  const updated = prompt("Edit Task:", span.textContent);
  if (updated && updated.trim() !== "") {
    span.textContent = updated.trim();
  }
}

function updateCounts() {
  const active    = activeList.children.length;
  const completed = doneList.children.length;
  const total     = active + completed;

  counter.textContent = `Total: ${total} | Done: ${completed} | Left: ${active}`;

  if (emptyLeft) emptyLeft.style.display = active === 0 ? "block" : "none";
  if (emptyDone) emptyDone.style.display = completed === 0 ? "block" : "none";
}

// Utility to create a button with text + class
function createButton(label, className) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className   = className;
  return btn;
}
