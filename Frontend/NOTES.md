  # javascript
  **HTML**
    
**JAVASCRIPT**
 # javascrip is a high level ,dynamically typed,loosely typed,single threaded asyc object oriented,event driven programmming language
 # it is used to make web pages interactive
 # it runs in browser using nodejs
 # it is a scripting language
 **declaring variable**
 # var
     *funtional scope not block scope
     *var a=10
     *var a==>declation
     *a=10 ==>initialization
     *re declaration and re initialization is possible(disadv)
     *hoisting is possible in var(disadv)
     *var is not a block scope because it is accessing out of scope statement,in functional scope it is showing error but in block scope we getting output
 # let
    *it is a block scope
    *it is a functional scope,but basically it is block scope(because it gives the output which is in the scope it doesnot give out of scope,but in functional scope it doesnot give any output it just throws error)
    *re declaration not possible
    *re initialization possible
 # const(by default)
    *both re initialization and re declaration is not possible
    *because of this we mostly use const variable
    *it is a block scope and functional scope but basically it is a block scope
**DATATYPES**
 # primitive
 # non primitive
**PRIMITIVE**
  *srting
  *number
  *boolean
  *undefined
  *null
**NON PRIMITIVE**
  *object
  *array    
**OPERATORS**
 *Arithmetic(+,-,*,%,/)
 *Assignment(=)
 *Equality
    ** # == loosely compare
    ** # === strictly compare datatype and value
 *Conditional 
   ** cosnst checking=c>50?"yes":"no"  
**Types of Functions**
 # Function Declarion
 # Function Expression
 # Arrow Function(ES6)
 # Anonymous Function

 **Function declaration**
 <!-- function mern(){
    console.log("welcome to mern stack") 
 }
 mern() -->
 *we can call funtion before or after the function block
 **Function expression**
 <!-- const frontend=function(){
    console.log("Lets start frontend")
 }
  frontend() -->
*we cannot call funtion before the function block
**Arrow function**
<!-- const backend=()=> "backend completed"
const b=backend()
console.log(b) -->
  *if we use curly braces we have to write return statement
  <!-- const backend=()=> {
   console.log("lets start backedn")
   return "backend completed"
}
const b=backend()
console.log(b) -->
**Callback Function**
 *a function is acting like a parameter to the other function
 <!-- const x=(a) =>{
    console.log("you are in higher order function")
    a()
}

const y=() =>{
    console.log("im in callback function")
}
x(y) -->
*function x allowing another funtion y as a parameter,x is higher order function
*the function which is acting like paramer ie y is callback function

# Array Methos
 **Add/remove methods**
  *push()-automatically it add an element in last and return the size of the array
  *pop()
  *shift()
  *unshift()
  *splice()-array.splice(start,deleteCount,item1,item2..)
           -it is used for add elements ,remove elements,replace elements
**Searching methods**
  *includes()
  *indexOf()
  *find()
  *findIndex()  
**Iteration methods**
  *forEach()
  *map() (imp)
  *filter() (imp)
**Transformation methods**
  *reduce() //imp
  *sort()  //imp
  *reverse()
# DOM(Document object model)
  











