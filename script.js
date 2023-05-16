const input = document.querySelector("#task")
const form = document.getElementById("form")
const list = document.querySelector(".list")
const listItem = document.querySelectorAll(".list-item")
const checkBox = document.querySelectorAll(".checkbox")
const deleteBtn=document.querySelectorAll(".delete")


listItem.forEach(function(val){
    console.log(val.classList.contains("checked"))
})



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
    saveData()
})





list.addEventListener("click", function (e) {
    if (e.target.classList.contains("checkbox")) {
        e.target.addEventListener("change", function (e) {
            if (this.checked) {
                this.parentElement.classList.add("checked")
                this.setAttribute("checked","checked")
                saveData()
            }
            else {
                this.parentElement.classList.remove("checked")
                this.removeAttribute("checked")
                saveData()
            }
            saveData()
            
        })
    }

    if(e.target.classList.contains("delete")){
      if(  confirm("Are You Sure ?")){
          e.target.parentElement.remove()
        }
        saveData()
        
    }
})

// function saveData(){
//     localStorage.setItem("data",list.innerHTML)
// }

function showData(){
    list.innerHTML=localStorage.getItem("data")
}

showData()




