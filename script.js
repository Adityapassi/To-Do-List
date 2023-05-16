const input = document.querySelector("#task")
const form = document.getElementById("form")
const list = document.querySelector(".list")
const listItem = document.querySelectorAll(".list-item")
const checkBox = document.querySelectorAll(".checkbox")
const deleteBtn=document.querySelectorAll(".delete")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (input.value === "") {
        alert("Please enter your task/work")
    }
    else {
        let li = document.createElement("li")
        li.classList.add("list-item")
        li.innerHTML = `<input type="checkbox" class="checkbox"> <div class="work">${input.value}</div> <i class="delete fa-sharp fa-solid fa-trash"></i>`
        list.appendChild(li)
    }

    input.value=""

})





list.addEventListener("click", function (e) {
    if (e.target.classList.contains("checkbox")) {
        e.target.addEventListener("change", function (e) {
            if (this.checked) {
                this.parentElement.classList.add("checked")
            }
            else {
                this.parentElement.classList.remove("checked")
            }
        })
    }

    if(e.target.classList.contains("delete")){
      if(  confirm("Are You Sure ?")){
          e.target.parentElement.remove()

      }
        
    }
})




