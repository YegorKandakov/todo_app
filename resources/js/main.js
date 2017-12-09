document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {
    addTodoItem(value);
  }
  document.getElementById('item').value = '';
});

document.getElementById('addImg').addEventListener('mouseover', function () {
  this.src='resources/images/addHover.png';
});

document.getElementById('addImg').addEventListener('mouseout', function () {
  this.src='resources/images/add.png';
});

function addTodoItem(text) {

  var list = document.getElementById('todo');
  var item = document.createElement('li');
  item.innerText = text;
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = '<img id="deleteImg" src="resources/images/delete.png" />';
  remove.addEventListener('click', removeItem);

  var done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = '<img id="doneImg" src="resources/images/notDone.png" />';
  done.addEventListener('click', clickDoneButton);

  buttons.appendChild(remove);
  buttons.appendChild(done);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);

  addOnHoverListeners();
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var todoList = item.parentNode;
  todoList.removeChild(item);
}

function clickDoneButton() {
  var item = this.parentNode.parentNode;
  var currentList = item.parentNode;
  var id = currentList.id;
  var targetList;

  // check if item should be added to done list or moved back to todo list
  if (id === 'todo') {
    targetList = document.getElementById('done');
  } else {
    targetList = document.getElementById('todo');
  }

  currentList.removeChild(item);
  targetList.insertBefore(item, targetList.childNodes[0]);

}

function addOnHoverListeners() {

  document.getElementById('deleteImg').addEventListener('mouseover', function () {
    this.src='resources/images/deleted.png';
  });

  document.getElementById('deleteImg').addEventListener('mouseout', function () {
    this.src='resources/images/delete.png';
  });

  document.getElementById('doneImg').addEventListener('mouseover', function () {
    this.src='resources/images/done.png';
  });

  document.getElementById('doneImg').addEventListener('mouseout', function () {
    this.src='resources/images/notDone.png';
  });

}
