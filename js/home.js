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
    let icon = document.getElementById("icon");
    icon.addEventListener("click" , changeTheme);

    let activeSpan = document.getElementById('active');
    activeSpan.addEventListener("click" , activeFilter);
    
    let allSpan = document.getElementById('all');
    allSpan.addEventListener("click" , allFilter);

    let completeSpan = document.getElementById('complete');
    completeSpan.addEventListener("click" , completeFilter);
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
    
    let deleteTodo = document.querySelectorAll(".crossDiv");
    for(let i = 0 ; i < deleteTodo.length ; i ++){
        deleteTodo[i].addEventListener("click",deleteTodoItem);
    }

    let deleteCompleted = document.getElementById("clear-completed");
    deleteCompleted.addEventListener("click" , deleteCompletedTodo);

}

function checkTodo(){
    let li = this.parentElement.parentElement ;

     if (this.classList.contains('checked')){
        this.classList.remove('checked');
        li.classList.remove('completed');
        count++
    }
    else{
        this.classList.add('checked');
        li.classList.add('completed');
        count--;
    }
    let itemLeft = document.getElementById("left");
        itemLeft.innerHTML = count; 
   itemLeft.innerHTML = count; 
}


function deleteTodoItem(){
    let deletetodo = this.parentElement
    let check = deletetodo.firstChild ;
    
    if (check.firstChild.classList.contains("checked")){
      deletetodo.remove();
      return;
    }
    else {
      count--;
      let itemLeft = document.getElementById("left");
      itemLeft.innerHTML = count; 
      deletetodo.remove();
    }
     
  }
  function deleteCompletedTodo(){
    let completed = document.querySelectorAll(".completed");
    for ( let i = 0 ; i < completed.length ; i++){
        completed[i].remove();
    }
    }

   
    
    function changeTheme(){
        let body = document.querySelector("body") ;
        if (body.id === 'theme-light'){
          body.removeAttribute('id');
          body.id = 'theme-dark';
        }
        else{
          body.removeAttribute('id');
          body.id = 'theme-light';
        }
      }

      function filter(){
        let click = document.querySelectorAll(".click");
        for (let i = 0 ; i < click.length ; i++){
          click[i].classList.remove("click");
        }
      }
      
      function activeFilter(){
        filter();
        this.classList.add("click");
        let todoList = document.querySelectorAll(".todo-item");
        for(let i = 0 ; i < todoList.length ; i++){
          if (todoList[i].classList.contains("completed")){
            todoList[i].style.display = "none";
          }
         else{
          todoList[i].style.display = "flex";
         }
        }
      }
      
      
      function completeFilter(){
        filter();
        this.classList.add("click");
        let todoList = document.querySelectorAll(".todo-item");
        for(let i = 0 ; i < todoList.length ; i++){
          if (!todoList[i].classList.contains("completed")){
            todoList[i].style.display = "none";
          }
          else{
            todoList[i].style.display = "flex";
          }
        }
      }
      
      function allFilter(){
        filter();
        this.classList.add("click");
        let todoList = document.querySelectorAll(".todo-item");
        for(let i = 0 ; i < todoList.length ; i++){
            todoList[i].style.display = "flex";
        }
      }
