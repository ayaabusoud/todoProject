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
    let todoUl =document.getElementById("todo-items");

    if (todo.value.length != 0){
    count++;
    let itemLeft = document.getElementById("left");
    itemLeft.innerHTML = count;

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
   

    let check = document.createElement('div');
    check.classList.add('check');

    let checkMark = document.createElement('div');
    checkMark.classList.add('check-marks');

    let checkImg = document.createElement('img');
    checkImg.src="../images/icon-check.svg";
    checkImg.alt = "check icon";

    let todoli = document.createElement('li');
    todoli.innerHTML = todo.value;
    
    let crossDiv = document.createElement("div");
    crossDiv.classList.add('crossDiv');
    let cross =  document.createElement("img");
    cross.src = "../images/icon-cross.svg";
    cross.alt = "cross icon";
    cross.classList.add('delete');

    todoUl.appendChild(todoDiv);
    todoDiv.appendChild(check);
    check.appendChild(checkMark);
    checkMark.appendChild(checkImg);
    todoDiv.appendChild(todoli);
    todoDiv.appendChild(crossDiv);
    crossDiv.appendChild(cross);
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