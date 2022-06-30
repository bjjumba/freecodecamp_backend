//arrow function

/*
//normal functions
function sayHi(){
    console.log("hi")
}
app("hello",sayHi())
function add(a=2,b=10){
    let x =a+b
   console.log(x)
}
add(3,7)
const sayHi =()=>{console.log("hey")} 



const plus=(a,b=5)=>{
    console.log(a+b)
}
setTimeout(plus(),2000)

const odd = array.map(function(i){
   if(i%2 !=0){
 console.log(i)
   } 
})
console.log(odd)
const array =[1,4,5,6,9]
const hey =array.filter(function(i){
    return i%2==0
})
console.log(hey)
const names =["john","hey","tyu"]
const with_a=names.map(function(i){
for (vowel in i){
    return i
}
})
try{
    const names =["akullu","Edith"]
names.forEach((i)=>{
    console.log(`hey ${i}`)
})
}catch(e){
    console.error(e)
}finally{
    console.log("Did you experience any errors")
}
*/
'use strict';

var partnumber = 42055,
    description = 'Bucket Wheel Excavator';

var legoset = {
    partnumber,
    description,
    buildset: function buildset() {
        return 'Building set number ' + this.partnumber + ', ' + this.description;
    }
};
console.log(legoset.buildset());

// Building set number 42055, Bucket Wheel Excavator

