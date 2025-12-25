console.log("Loops in JS");

let a=1;

for(let i=0;i<5;i++){
    console.log(a+i);
}

let obj = {
    name: "Radha",
    role: "SDE",
    company: "xyz"
}

for(const key in obj){
    console.log(key, obj[key]);
}

for(const c of "Radha"){
    console.log(c);
}
let i=5;
while(i<8){
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<10);


let arr=[1,2,3,4,5];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);    
}

// arr.forEach(value, index,arr => {
//     console.log(value,index,arr);
// });

for(const iter of arr){
    console.log(iter);
}

let array=[1,2,3];
// let newArr=[];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newArr.push(element**2);
// }
// console.log(newArr);

let newArr = array.map(e=>{
    return e**2;
});
console.log(newArr);

const greaterThanSeven= e=>{
    return e>7?true:false;
}

let arr2 = [1,2,3,4,5,6];
console.log(newArr.filter(greaterThanSeven));
const red = (a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));
console.log(Array.from("Radha"));