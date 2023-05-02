"use-strict";

const todoInput = document.getElementById("todo-input");
const btnInput = document.querySelector('.btn');
const todoList = document.querySelector(".todo-list");

btnInput.addEventListener("click", (e) => {
    e.preventDefault();
    let newLi = document.createElement("li"); //create a new li//
    let input = document.createElement("input"); //create a checkbox input//
    input.type = "checkbox";
    input.style.width = "10vw";
    input.style.height = "3vh";
    input.style.backgroundColor = "#146C94";
    newLi.appendChild(input);
    newLi.appendChild(document.createTextNode(`${todoInput.value}`));
    todoList.appendChild(newLi);
    input.addEventListener("click", () => {
        newLi.remove(newLi)
    })  //remove checkbox when the task is clicked//
})