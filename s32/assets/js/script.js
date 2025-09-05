let fruits=["manzana", "pera","mango","sandia", 15, 15.3]

fruits.push("granada");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("uva");
console.log(fruits);

let deleteItem= fruits.shift();
console.log(fruits);

console.log(fruits.includes("manzana"));

console.log(fruits.indexOf("mango"));

console.log(fruits.join("(●'◡'●)\n"));

console.log(fruits.slice(2));

console.log(fruits.slice(1,7));

fruits.splice(2,2, "sandia", "kiwi", "platano", "melon");
console.log(fruits);  

num=[1,2,3,4,5,6,7,8,9,10];
console.log(num);

let numsmap = num.map((x) =>x+1);

console.log(numsmap);

console.log(num.map((x) => x*2));

console.log(num.map((x) => `numero ${x}`));

console.log(num.filter((x) => x%2===0));

console.log(num.filter((x) => 9>x && x>5));

//reduce: sirve para acumular de acuerdo a una funcion
console.log(num.reduce((a,b)=>a+b,0));
console.log(num.reduce((a,b)=> a*b));


