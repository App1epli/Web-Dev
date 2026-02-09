const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Delete";


  label.appendChild(checkbox);
  label.appendChild(span);

  li.appendChild(label);
  li.appendChild(deleteBtn);

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  return li;
}

function addTodo() {
  const value = input.value.trim();
  if (value === "") return;

  const item = createTodoItem(value);
  list.appendChild(item);

  input.value = "";
  input.focus();
}


addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
