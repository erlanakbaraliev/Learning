document.addEventListener("DOMContentLoaded", ()=>{
    const newTask = document.querySelector("#task")
    const tasks = document.querySelector("#tasks")
    const submitBtn = document.querySelector("#submit")

    submitBtn.disabled = true
    
    newTask.onkeyup = ()=>{
        if(newTask.value.length > 0) {
            submitBtn.disabled = false
        }
        else {
            submitBtn.disabled = true
        }
    }
    
    document.querySelector("form").onsubmit = () => {
        event.preventDefault();
        const newTaskVal = newTask.value.trim()
        
        if(newTaskVal !== "") {
            const li = document.createElement('li')
            li.innerHTML = newTaskVal
            tasks.appendChild(li)

            newTask.value = ""

            submitBtn.disabled = true
        }
        else {
            alert("Please enter a valid task")
        }
    }
})