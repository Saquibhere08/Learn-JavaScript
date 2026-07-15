let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let currentTodo = null;

btn.addEventListener("click", () => {
  let todo = input.value.trim();

  if (todo === "") {
    alert("Please enter a todo.");
    return;
  }

  // If editing an existing todo
  if (currentTodo !== null) {
    currentTodo.innerText = todo;

    currentTodo = null;

    btn.innerText = "Add";
  }

  // Otherwise add a new todo
  else {
    ul.innerHTML += `
        <li>
            <span>${todo}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>`;
  }

  input.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
  } else if (e.target.innerText === "Edit") {
    currentTodo = e.target.previousElementSibling;

    input.value = currentTodo.innerText;

    btn.innerText = "Update";
  }
});
