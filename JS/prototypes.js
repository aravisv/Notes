/*var arr = [1,3];
console.log(1,arr.__proto__);
console.log(2,Array.prototype);
console.log(3,arr.__proto__.__proto__);

var str = "abc";
console.log(4,str.__proto__);
console.log(5,String.prototype);
console.log(6,arr.__proto__.__proto__);

var obj = {a:"1"};
console.log(7,obj.__proto__);
console.log(8,Object.prototype);
console.log(9,obj.__proto__.__proto__);

var fun = function(){
return 1+1;
}

console.log(10,fun.__proto__);
console.log(11,Function.prototype);
console.log(12,fun.__proto__.__proto__);
*/

let objA = {
  name:"aravi",
  city:"ksd",
  getIntro:function(){
    console.log(this.name + "from " + this.city);
  }
}

let objB = {
  name:"anupi"
}

//here the memebers of objA is accessible to objB
objB.__proto__ = objA;

console.log(objB.city);
objB.getIntro();

Function.__proto__.myPrint = function(){
console.log("my print function");
}
function fun(){  
}

fun.myPrint();

function reverseString(s){
    return s.split("").reverse().join("");
}

String.prototype.reverse=function(){    
    return reverseString(this);
}m

var str = "abc";
console.log(str.reverse());
