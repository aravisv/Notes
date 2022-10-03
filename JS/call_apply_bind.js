var obj1 = {
  fname:"aravi",
  lname:"sv",
  printFullName: function(){
    console.log(this.fname+" "+this.lname);
  }
}

var obj2 = {
  fname:"anupi",
  lname:"ps"
}

obj1.printFullName();
obj1.printFullName.call(obj2);

function printFullNameOuter(){
  console.log(this.fname+" "+this.lname);
}

printFullNameOuter.call(obj1);
printFullNameOuter.call(obj2);

function printFullNameOuterState(state){
  console.log(this.fname+" "+this.lname+" from "+state);
}

//function borrowing
printFullNameOuterState.call(obj1,"Kerala");

//passing arguments as array
printFullNameOuterState.apply(obj1,["Kerala"]);

//returns a new function, specific to the object
let printobj2 = printFullNameOuterState.bind(obj2,"Kerala");
//let printobj2 = printFullNameOuterState.bind(obj2,["Kerala"]);
//second argument can be arguments / array
printobj2();

console.log(obj2);
//the object does not contain the binded function


 
