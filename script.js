let input = document.getElementById("Input");
let task2 = document.getElementById("Div2");


function PopBox() {


  if (input.value === "") {
    alert("Please enter some task")
  }
  else {
    document.getElementById("audio234").play();
    task2.innerHTML +=
      `<div class="task"><input type="checkbox" name="checkbox" class="checkbox"><span class="input">${input.value}</span><button class="delete"><img src="trash.png" alt="X" id="trash"></button></div>`;
      input.value="";
    
    let current_task = document.querySelectorAll(".delete");
    let checkbox = document.querySelectorAll(".checkbox");
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].onclick = function () {
        if (this.parentNode.style.backgroundColor === "black") {
          this.parentNode.style.removeProperty("background-color");
          document.getElementById("audio23").play();
        }
        else {
          this.parentNode.style.backgroundColor = "black";
          document.getElementById("audio").play();
        }
      }
    }

    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
        document.getElementById("audio2").play();
        
      }
    }

    


  }
}

