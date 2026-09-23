console.log("Hello World");

console.log("I am learning Node.js");

function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument


// function myfun1() { 
//     let i =10;
// while(i>10){
//     console.log(i);
//     i-- ;
// }}



// let myvar=myfun1();
// console.log(myvar);

// for(let i=50;i>20;i=i-5){
//     console.log(i);
// }



// for (let i = 1; i <= 100; i=i + 1) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");

//     } else if (i % 3 === 0) {
//         console.log("Fizz");

//     } else if (i % 5 === 0) {
//         console.log("Buzz");

//     } else {
//         console.log(i);
//     }

// }

for(let a = 1; a <= 100 ; a=a + 1) {
    if(a>=75 && a<=100){
        console.log("First class");
    }
    else if(a>=65 && a<=74){
        console.log("Second class");
    }

    else if(a>=50 && a<=64){
        console.log("second class");
    }

    else if(a>=41&& a<=49){
        console.log("Third class");
}

else {
    console.log("pass");
}
}

