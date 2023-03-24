document.addEventListener("DOMContentLoaded", () => {
   let form = document.querySelector('form')
  form.addEventListener('submit',(e) =>{
   e.preventDefault()
     BuildToDo(e.target.new_task_description.value)
     form.reset()
  })
})
function BuildToDo(todo) {
  let p= document.createElement('p')
  let btn= document .querySelector('button')
  btn.addEventListener('click',handleDelete)
  btn.textcontent='x'
   p.textContent=`${todo}`
   p.appendChild(btn)
   console.log(p)
     document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
