let a = [1,2,3,4,7];
console.log(a);
console.log(a.length);
console.log(a[0]);
a[0]=9;
console.log(a[0]);
a[1]="r";
console.log(a[1]);
console.log(a.toString());    //comma separated strings
console.log(a.join(" and "));

console.log(a);
a.unshift("jack");
// a.shift();
console.log(a);
// concat -> doesn't modifies array
// sort-> modifies array 
