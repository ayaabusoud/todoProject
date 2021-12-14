/*
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- *Bonus*: Drag and drop to reorder items on the list
*/

"use strict";
window.addEventListener("load" , init);

function init(){
    const add = document.getElementById("add-item");
    add.addEventListener("click" , addNewTodo);
}

let count = 0 ;

function addNewTodo(){

    let todo = document.getElementById("todo-input");
    let todoList =document.getElementById("todo-items");

    if (todo.value.length > 0){
    count++;
    let itemLeft = document.getElementById("left");
    itemLeft.innerHTML = count;

    let todoli = document.createElement('li');
    todoli.classList.add('todo-item');

    todoli.innerHTML='<div class="check"><div class="check-marks"><img src="../images/icon-check.svg">';
    let todoText = document.createElement('span');
    todoText.classList.add('text');
    todoText.innerHTML = todo.value;
    
    let crossDiv = document.createElement("div");
    crossDiv.classList.add('crossDiv');
    crossDiv.innerHTML = '<img src="../images/icon-cross.svg" class="delete" />';
    
    todoList.appendChild(todoli);
    todoli.appendChild(todoText);
    todoli.appendChild(crossDiv);
    }

    let checklist = document.querySelectorAll(".check-marks");
    for (let i = 0 ; i < checklist.length ; i ++){
        
        checklist[i].addEventListener("click" , checkTodo);
    }

}

function checkTodo(){
     if (this.classList.contains('checked')){
        this.classList.remove('checked');
        count++
    }
    else{
        this.classList.add('checked');
        count--;
    }
    let itemLeft = document.getElementById("left");
        itemLeft.innerHTML = count; 
}


var input = document.getElementById('userInput');
var enterButton = document.getElementById('enter');
var deleteButtons = document.getElementsByClassName("Remove");
  for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteListItem, false);
  }

var completeButtons =
  document.getElementsByClassName("Complete");
    for(var i = 0; i < completeButtons.length; i++){
      completeButtons[i].addEventListener('click', completeListItem, false);
    }
var ul = document.querySelector('ul');

function inputLength(){
 return input.value.length;
};

function listLength(){
  return item.length;
}

function createListElement(){
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  //makes text node 
  
  var clonedButton = 
     document.getElementById("buttons").cloneNode(true);
      clonedButton.childNodes[1].addEventListener('click', deleteListItem, false); 
      clonedButton.childNodes[3].addEventListener('click', completeListItem, false); 
  
  li.appendChild(clonedButton);
  ul.appendChild(li);
  input.value = "";
  
}

function deleteListItem(){
  	alert("Item was deleted");
    // li.classList.add("delete");
}

function completeListItem(){
  alert("Item was completed");
  li.classLi
  
}

function addListAfterClick(){
  if(inputLength() > 0){
    createListElement();
  }
}
// Hit enter key and create list
function addAfterPress(event){
  if(inputLength() > 0 && event.which === 13){
    createListElement();
  }
}



enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addAfterPress);