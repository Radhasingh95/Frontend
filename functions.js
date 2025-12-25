function nice(name){
    console.log("Hey "+name+" you are nice!");
}

nice("Radha");
nice("varun");

function sum(a,b,c=3){
    // console.log(a+b);
    return a+b+c;
}

result = sum(3,5);
result1=sum(5,7);
result2=sum(1,2,5);

console.log("sum of numbers is ",result);
console.log("sum of numbers is ",result1);
console.log("sum of numbers is ",result2);

const func1 =(x)=> {
    console.log("I am an arrow funcion, ",x);
}

func1(45);