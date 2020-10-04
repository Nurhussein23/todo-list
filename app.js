 const toDoInputEl = document.querySelector(".todo__input")
 const todoListEl = document.querySelector(".todo__list")
 const todoItemEl = document.querySelector (".todo__item")


 
 function EnterInput() {

  toDoInputEl.addEventListener("keypress", function(event){
   
    if(event.keyCode === 13){
            let newListItem = createListItem(toDoInputEl.value)
          
          todoListEl.appendChild(newListItem)
          toDoInputEl.value = "";
    }
  })
 }


function toggleDone(){

  for (let elem of todoItemEl){

    elem.addEventListener("click", function(){
     elem.classList.toggle("done");

    })
  }
}



 function createListItem(text){

   const newListEL = document.createElement("li")
   newListEL.textContent = text;
   newListEL.setAttribute("class", "todo__item")
   return newListEL;

 }

 console.log(createListItem("do the laundry"))
EnterInput()
toggleDone();