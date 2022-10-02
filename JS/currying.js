let multiply = function (a,b){
  console.log(a,b, a*b);
}

let multiply_copy = multiply.bind(this);
multiply_copy(2,3);
//6

let multiply2 = multiply.bind(this,2);
multiply2(10);
//20
//here 2 becomes the "a" parameter 

let multiply_default = multiply.bind(this,10,20);
multiply_default(1,1);
//200
//here 10 becomes "a", 20 becomes "b"

let sum = function(x){
  console.log(100,x);
  return function(y){
    console.log(200,x,y);
    console.log(300,x+y);
  }
}

let add1 = sum(1);
add1(999);
