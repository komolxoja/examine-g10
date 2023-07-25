document.addEventListener("DOMContentLoaded", function () {
    const todoTexts = document.querySelectorAll(".todo-text");
    const progressTexts = document.querySelectorAll(".progres-text");
    const doneTexts = document.querySelectorAll(".done-text");
  
    let draggedElement = null;
  
    function addDragEvents(elements) {
      elements.forEach((element) => {
        element.addEventListener("dragstart", handleDragStart);
        element.addEventListener("dragover", handleDragOver);
        element.addEventListener("drop", handleDrop);
      });
    }
  
    function handleDragStart(event) {
      draggedElement = event.target;
      event.dataTransfer.effectAllowed = "move";
    }
  
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }
  
    function handleDrop(event) {
      event.preventDefault();
      const parent = event.target.closest(".todo-texts, .progress, .donee");
      parent.appendChild(draggedElement);
    }
  
    addDragEvents(todoTexts);
    addDragEvents(progressTexts);
    addDragEvents(doneTexts);
  });
  