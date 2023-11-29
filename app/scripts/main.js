var TaskManager = {
    tasks: [],
  
    Task: function (description, isCompleted, dueDate) {
      this.description = description;
      this.isCompleted = isCompleted;
      this.dueDate = dueDate;
    },
  
    addTask: function (description, isCompleted = false, dueDate = null) {
      var newTasks = [...this.tasks, { description, isCompleted, dueDate }];
      this.tasks = newTasks;
      return newTasks;
    },
  
    markTaskAsCompleted: function (task) {
      task.isCompleted = true;
    },
  
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
  };
  
  function createNode(type, child, attrs) {
    var node = document.createElement(type);
  
    if (attrs) {
      Object.keys(attrs).forEach(function (attr) {
        node[attr] = attrs[attr];
      });
    }
  
    if (typeof child === 'string') {
      node.appendChild(document.createTextNode(child));
    } else {
      node.appendChild(child);
    }
  
    return node;
  }
  
  function appendChildren(node, children) {
    var documentFragment = document.createDocumentFragment();
  
    children.forEach(function (child) {
      documentFragment.appendChild(child);
    });
  
    node.appendChild(documentFragment);
  }
  
  function renderList(container, tasks) {
    container.innerHTML = '';
  
    tasks.forEach(function (task, index) {
      var taskElement = createNode('div', task.description);
  
      var statusSpan = createNode(
        'span',
        task.isCompleted ? ' (Completada)' : ' (Pendiente)',
        { className: 'status' }
      );
  
      // Mostrar la fecha y hora si está presente
      if (task.dueDate) {
        var dueDateSpan = createNode('span', ' - Due: ' + task.dueDate, { className: 'due-date' });
        appendChildren(taskElement, [statusSpan, dueDateSpan]);
      } else {
        appendChildren(taskElement, [statusSpan]);
      }
  
      var deleteButton = createDeleteButton(index);
      var modifyButton = createModifyButton(index);
  
      appendChildren(taskElement, [statusSpan, deleteButton, modifyButton]);
      container.appendChild(taskElement);
    });
  }
  
  function handleClick() {
    if (input.value !== '' && dateInput.value !== '') {
      var currentDate = new Date();
      var formattedDate = new Date(dateInput.value);
  
      // Formatear la fecha y hora como una cadena
      var formattedDateString = formattedDate.toLocaleString();
  
      TaskManager.addTask(input.value, false, formattedDateString);
  
      input.value = '';
      dateInput.value = '';
      console.log('Tareas después de agregar:', TaskManager.tasks);
      renderList(listContainer, TaskManager.tasks);
    }
  }
  
  function createDeleteButton(index) {
    var deleteButton = createNode('button', 'Delete', {
      type: 'button',
      className: 'delete-button',
    });
  
    deleteButton.addEventListener('click', function () {
      TaskManager.deleteTask(index);
      renderList(listContainer, TaskManager.tasks);
    });
  
    return deleteButton;
  }
  
  function createModifyButton(index) {
    var modifyButton = createNode('button', 'Modify', {
      type: 'button',
      className: 'modify-button',
    });
  
    modifyButton.addEventListener('click', function () {
      toggleTaskStatus(index);
      renderList(listContainer, TaskManager.tasks);
    });
  
    return modifyButton;
  }
  
  function toggleTaskStatus(index) {
    var task = TaskManager.tasks[index];
    task.isCompleted = !task.isCompleted;
  }
  
  var container = document.getElementById('app');
  container.className = 'container';
  
  var title = createNode('h1', 'Todo App', { className: 'title' });
  var addButton = createNode('button', 'Add', {
    type: 'button',
    className: 'add-button',
  });
  
  addButton.addEventListener('click', handleClick);
  
  var input = createNode('input', '', {
    type: 'text',
    placeholder: 'New task...',
    className: 'todo-input',
  });
  
  var dateInput = createNode('input', '', {
    type: 'datetime-local',
    placeholder: 'Due date and time...',
    className: 'due-date-input',
  });
  
  var listContainer = createNode('div', '', { className: 'task-list' });
  
  appendChildren(container, [title, input, dateInput, addButton, listContainer]);
  renderList(listContainer, TaskManager.tasks);
  