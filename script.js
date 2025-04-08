let timer;
let timeLeft = 0;
let taskId = 0;

document.querySelector('.start-btn').addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('minutes').value);
  if (!isNaN(minutes) && minutes > 0) {
    timeLeft = minutes * 60;
    startTimer();
  }
});

document.querySelector('.reset-btn').addEventListener('click', resetTimer);

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
    } else {
      timeLeft--;
      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  updateDisplay();
}

function updateDisplay() {
  const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
}

// Task List Functions
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Clear input after adding
  }
});

function addTask(taskText) {
  const taskItem = document.createElement('li');
  taskItem.setAttribute('data-id', taskId++);
  
  taskItem.innerHTML = `
    <input type="checkbox" id="task-${taskId}" />
    <label for="task-${taskId}">${taskText}</label>
  `;
  
  taskList.appendChild(taskItem);
}
