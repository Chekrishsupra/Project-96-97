
function login() {
    Name = document.getElementById("Name").value;
    Password = document.getElementById("password").value;
    localStorage.setItem("Name" , Name);
    localStorage.setItem("Password" , Password);
    window.location = "chat.html";
}