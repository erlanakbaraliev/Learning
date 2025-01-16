if(!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0)
}

function count() {
    let counter = localStorage.getItem('counter')
    localStorage.setItem("counter", ++counter)
    document.querySelector('p').textContent = counter
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('p').textContent = localStorage.getItem("counter")

    document.querySelector('input').onclick = ()=>{
        event.preventDefault()
        count()
    }
})