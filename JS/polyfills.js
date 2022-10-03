//for bind
var obj = {
  name:"aravi",
  phone:123
}

function printProfile(){
  console.log(this.name+" "+this.phone);
}

var objPP = printProfile.bind(obj);
//objPP();

Function.__proto__.myBind = function (...args){
  let context = this, 
      params = args.slice(1);
  return function(...args2){
    context.apply(args[0],[...params,...args2]);
  }
}

var objPPmy = printProfile.myBind(obj);
objPPmy();
