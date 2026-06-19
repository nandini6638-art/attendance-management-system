// console.log("welcome students")
// var a=10
// var b="25"
// console.log(a+b)
// let name="xyz"
// let name="abc"
// //name="vamshi"
// console.log(name)
// const name="nandini"
// console.log(name)
// name="abc"
//console.log(name)
// function greet(){
//     let a="welcome"
//     console.log(a)
// }
// console.log(a)
// if(true){ //  not block scope
//    let c=100
//    console.log(c)
// }
// console.log(c)
//console.log(typeof null)//bug in javascript


//take 3 numbers and print which num is greater among 3
//  const a=10
//  const b=20
//  const c=30
//  if(a>b&&a>c){
//     console.log(a)
//  }
//  else if(b>c&&b>a){
//     console.log(b)
//  }
//  else{
//     console.log(c)
//  }
//  //person having driving license or not
//  const age=18
//  const hasLicence=true;
//  if(age>=18){
//     if(hasLicence){
//         console.log("can drive")
//     }
//     else{
//         console.log("Take licence")
//     }
//  }else{
//     console.log("cannot drive")
//  }
//  let arr=["apple","mango","banana","grapes"]
//  for(let name of arr){
//     console.log(name)
//  }
//  const obj={
//     name:"samsung",
//     desc:"stylish phone",
//     price:25000
//  }
//  for(let mobile in obj){
//     console.log(obj[mobile])
//  }
// const arr2=[{
//     name:"vivo",
//     desc:"stylish phone",
//     price:28000
//  },{
//     name:"oppo",
//     desc:"stylish phone",
//     price:27000
//  },{
//     name:"realeme",
//     desc:"phonr",
//     price:35000
//  }]
//  for(let mobile of arr2){
//     for(let details in mobile){
//         console.log( mobile[details])
//     }
//  } 
   //function declaration
 function mern(){
    console.log("welcome to mern stack") 
 }
 mern()
 //function expression
 const frontend=function(){
    console.log("Lets start frontend")
 }
  frontend()
//Arrow function
const backend=()=> {
   console.log("lets start backedn")
   return "backend completed"
}
const b=backend()
console.log(b)

//call back funtion
const x=(a) =>{
    console.log("you are in higher order function")
    a()
}

const y=() =>{
    console.log("im in callback function")
}
x(y)


const arr=[10,20,30,40]
// // const arr2=arr.map(function(num){
// // return num+2
// })
const arr2=arr.map(num=>num+2)
console.log(arr2)
 



 
