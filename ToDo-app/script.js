const todoList = [
  {
    item: "buy milk",
    duedate: "2025-04-14",
  },

  {
    item: " go to college",
    duedate: "2025-04-14",
  },
];
displayItem();

function addTodo() {
  const inputbox = document.querySelector(".inputbox");
  const inputdate = document.querySelector("#inputdate");

  let todoitem = inputbox.value;
  let tododate = inputdate.value;

  todoList.push({ item: todoitem, duedate: tododate });

  inputbox.value = "";
  inputdate.value = "";
  displayItem();
}

function displayItem() {
  const allListContainer = document.querySelector(".todoContainer");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item: todoitems, duedate: tododates } = todoList[i];
    // or
    //         let  item2= todoList[i].item
    //  let duedate2=todoList[i].duedate

    newHtml += `
            
          <span  id="createitem" > ${todoitems}  </span>
          <span  id="createdate" >${tododates}</span>
          <button class="createbtn"  onclick="todoList.splice(${i} ,1);displayItem()"> delete</button>
     
         
    
          `;
  }

  allListContainer.innerHTML = newHtml;
}
