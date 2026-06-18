const reg=document.getElementById("reg-button");
//console.log(reg);
reg.addEventListener("click",function(){
 event.preventDefault()
 const name=document.getElementById("name").value
 console.log(name);
 const email=document.getElementById("email").value
 console.log(email);
 const pass=document.getElementById("pass").value
 console.log(pass);
 const repass=document.getElementById("repass").value
 console.log(repass);
 if(name===""||email===""||pass===""||repass===""){
    alert("Please fill the fields")
    return
 }
 if(pass!==repass){
    alert("password missmatch")
    return
 }
 const user={
    name:name,
    email:email,
    pass:pass
 }
 let users=JSON.parse(localStorage.getItem("user")) || []
 users.push(user);
 console.log(users);
 //JSON.stringify(users)
 localStorage.setItem("users",JSON.stringify(users))
 alert("registration successful")
 window.location.href="login.html"
}) 