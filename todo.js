
let title = document.getElementById('todo_title')
let user = document.getElementById('todo_user')
const detailId = document.getElementById('todoId')
const todo_list = document.getElementById('todo-list')
const todo_detail = document.getElementById('todo-detail-container')
const return_btn = document.getElementById('return-btn')

return_btn.addEventListener('click', (e)=>{
    todo_list.style.display = ""
    todo_detail.style.display = "none"
})

function text(todo)               {

    title.innerText= todo.title
    user.innerText= todo.userId
    detailId.innerText = todo.id
}


function drawTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => res.json())
    .then(res => {
        let html = ``;

        
        res.forEach( item =>{
            let element =  document.createElement('li');
             element.innerText = item.title
             todo_list.appendChild(element)
             element.addEventListener('click', ()=>{
                getOneTodo(item.id)
             })
         //   html += `<li onclick="getOneTodo(${todo.id})">${todo.title}<li>`
        })
        todo_list.style.display = ""
        todo_detail.style.display = "none"

       // console.log('html:', html)
       // todo_list.innerHTML = html
    })
    .catch(err => console.log('error:', err.message))
}

function getOneTodo (Id) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + Id)
.then(res=>res.json())
.then(res => {
    console.log(res)
    todo_detail.style.display = ""
    todo_list.style.display = "none"
    text(res)
    
})
}

//getOneTodo(5)
drawTodos()




