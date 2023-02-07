import {
    saveTask,
    getTasks,
    onGetTasks,
    deleteTask,
    getTask,
    updateTask,
  } from "./firebase.js";  

  const taskContainer = document.getElementById("blog-container");
  
  window.addEventListener("DOMContentLoaded", async () => {
    onGetTasks((querySnapshot) => {
      let html = "";
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
            <div class='card_article'>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span>${task.now}</span>           
            </div>
            `;
      });
  
      taskContainer.innerHTML = html;
    });
    });