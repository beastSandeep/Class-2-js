// Selections
const input = document.getElementById("message");
const tasksTabel = document.getElementsByClassName("tasks")[0];
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const message = input.value;
  input.value = "";
  const p = document.createElement("p");
  p.innerText = message;

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>`;

  trashButton.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
    task.style.backgroundColor = "#888";
    task.style.opacity = "0.5";
    trashButton.remove();
  });

  const task = document.createElement("div");
  task.classList.add("task");

  task.append(p);
  task.append(trashButton);

  tasksTabel.append(task);
});

resetButton.addEventListener("click", function () {
  tasksTabel.innerHTML = "";
});
