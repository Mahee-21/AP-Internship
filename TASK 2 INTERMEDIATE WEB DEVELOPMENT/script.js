document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      li.classList.toggle("completed", this.checked);
    });

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.className = "remove-task";
    removeBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
