const log = document.getElementById("login-button");
//console.log(log);
log.addEventListener("click", function () {
    event.preventDefault()
    const email = document.getElementById("email").value
    console.log(email);
    const pass = document.getElementById("pass").value
    console.log(pass);
    if (email === "" || pass === "") {
        alert("please fill the fields")
    }
const users=JSON.parse(localStorage.getItem("users"))
 const matchedUser=users.find(function(user){
    return user.email===email&&user.pass===pass
})
if(matchedUser){
    alert("Login successfully")
    window.location.href="index.html"
}else{
    alert("Invalid username or password")
}
})