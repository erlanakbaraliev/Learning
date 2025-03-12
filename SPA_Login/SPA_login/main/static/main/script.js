document.addEventListener("DOMContentLoaded", (event)=>{
    setupNavbar();
    handleActiveNavsWhenClicked()

    setupLoginForm()
})

function displayView(viewInput) {
    ["#main", "#login_view"].forEach(view=>{
        const div = document.querySelector(view);
        if (div) {
            div.style.display = view == viewInput ? "block": "none";
        }
    });
}

function setupNavbar() {
    const navbars = ['#mainNavbar', '#loginNavbar']

    navbars.forEach(navbar => {
        const div = document.querySelector(navbar)
        if (div) {
            div.addEventListener('click', (event)=>{
                event.preventDefault()
                if (navbar == '#mainNavbar') {
                    displayView("#main")
                }
                else if (navbar == '#loginNavbar') {
                    displayView("#login_view")
                }
            })
        }
    })
}

function setupLoginForm() {
    document.querySelector("#loginForm").addEventListener('submit', (event)=>{
        loginUser(event)
    })
}

function loginUser(event) {
    event.preventDefault();
    
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const errorDiv = document.querySelector("#login_error");

    fetch("/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-CSRFToken": getCSRFToken()
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector("#username_display").innerHTML = data.username;
            displayView("#main");
        } else {
            errorDiv.innerText = data.message;  // Show error message
            errorDiv.style.display = "block";  // Make it visible
        }
    })
    .catch(error => console.error("Error:", error));
}

// Hide error message when user starts typing again
// document.querySelector("#username").addEventListener("input", () => {
//     document.querySelector("#login_error").style.display = "none";
// });
// document.querySelector("#password").addEventListener("input", () => {
//     document.querySelector("#login_error").style.display = "none";
// });


function getCSRFToken() {
    return document.querySelector('input[name="csrfmiddlewaretoken"]').value;
}

function handleActiveNavsWhenClicked() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
}