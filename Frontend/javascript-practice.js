console.log("welcome students")
var a=10
var b="25"
console.log(a+b)
let name="xyz"
let name="abc"
//name="vamshi"
console.log(name)
const name="nandini"
console.log(name)
name="abc"
console.log(name)
function greet(){
    let a="welcome"
    console.log(a)
}
console.log(a)
if(true){ //  not block scope
   let c=100
   console.log(c)
}
console.log(c)
console.log(typeof null)//bug in javascript


take 3 numbers and print which num is greater among 3
 const a=10
 const b=20
 const c=30
 if(a>b&&a>c){
    console.log(a)
 }
 else if(b>c&&b>a){
    console.log(b)
 }
 else{
    console.log(c)
 }
 //person having driving license or not
 const age=18
 const hasLicence=true;
 if(age>=18){
    if(hasLicence){
        console.log("can drive")
    }
    else{
        console.log("Take licence")
    }
 }else{
    console.log("cannot drive")
 }
 let arr=["apple","mango","banana","grapes"]
 for(let name of arr){
    console.log(name)
 }
 const obj={
    name:"samsung",
    desc:"stylish phone",
    price:25000
 }
 for(let mobile in obj){
    console.log(obj[mobile])
 }
const arr2=[{
    name:"vivo",
    desc:"stylish phone",
    price:28000
 },{
    name:"oppo",
    desc:"stylish phone",
    price:27000
 },{
    name:"realeme",
    desc:"phonr",
    price:35000
 }]
 for(let mobile of arr2){
    for(let details in mobile){
        console.log( mobile[details])
    }
 } 
function declaration
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


const arr=[10,20,30,40,50,[1,2,3]]
console.log(arr.push(6))
console.log(arr)
arr.pop() //removes last element and returns removed element
console.log(arr)

arr.unshift("abc")
console.log(arr)

console.log(arr.shift()) //remove first element and it returns first element
console.log(arr)

arr.splice(0,2,"xyz")
console.log(arr)
arr.splice(1,1,"lkj")
console.log(arr)

const arr3=["xyz","abc","ghi"]
console.log(arr3.includes("xyz")) //it gives true or false

console.log(arr3.indexOf("ghu")) //if element not found it returns -1

find()
const arr = [
   {
      rollno: "24AG1A6601",
      name: "xyz",
      department: "CSM"
   },
   {
      rollno: "24AG1A6602",
      name: "xyo",
      department: "CSE"
   },
   {
      rollno: "24AG1A6603",
      name: "xyi",
      department: "CSE"
   }, {
      rollno: "24AG1A6604",
      name: "xyi",
      department: "CSM"
   },
   {
      rollno: "24AG1A6605",
      name: "xyi",
      department: "IT"
   },

]
console.log(arr)
const student = arr.find(
   s => s.name == "xyi"
)
console.log(student)

//findindex
const report = arr.findIndex(
   s => s.name == "xyi"
)
console.log(report)

//foreach()
arr.forEach(student => {
   console.log(student)
}) //used to iterate each element in the array

//map

const modarr = arr.map(student => student.name)
console.log(modarr)
const arrx = [2, 50, 18]
const modarrx = arrx.map(element => element + 5)
console.log(modarrx)

//filter

const filter_arr=arr.filter(i=>i.department==="CSM")
console.log(filter_arr)
console.log(filter_arr.length)

reduce

const marks=[25,75,60,40,50,78]
const j=marks.reduce(
   (sum,sub)=>sum+sub,0
)
console.log(j)

//sort
const arr=[10,20,60,40,50]
arr.sort(
   (a,b)=>a-b //low to high b-a is high to low
)
console.log(arr)



const students = [
  { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
  { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
  { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
  { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
  { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

  { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
  { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
  { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
  { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
  { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

  { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
  { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
  { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
  { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
  { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

  { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
  { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
  { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
  { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
  { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

  { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
  { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
  { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
  { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
  { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

  { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
  { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
  { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
  { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
  { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
];
 //all passed students
 const filter_students=students.filter(i=>i.marks>=35)
 console.log(filter_students)
 //passed students from cse
 const filter_arr=students.filter(i=>i.marks>=35&&i.department==="CSE")
 console.log(filter_arr)
 //passed students from csm
 const filter_arrx=students.filter(i=>i.marks>=35&&i.department==="CSM")
 console.log(filter_arrx)



const students = [
  { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
  { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
  { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
  { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
  { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
  { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
  { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
  { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
  { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
  { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
];
//all placed students
 const placed_students=students.filter(i=>i.package>0)
 console.log(placed_students)
 //find name and packages of placed students
  const names=placed_students.map(student=>({
   name:student.name,
   package:student.package
 } ))
  console.log(names)
  //avg package of placed students
  const placed=placed_students.reduce(
   (sum,student)=>sum+student.package,0
  )
  console.log(placed/placed_students.length)
  //highest package
  const high=placed_students.reduce((max,student)=>max>student.package?max:student.package,0)
  console.log(high)
  //placed more than 10
  const morethan=names.filter(j=>j.package>10)
  console.log(morethan)
