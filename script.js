// const sum = (a, b) => {
//   console.log(a + b);
// };

// console.log("Hello");

// setTimeout(()=>{
//         console.log("Internet Duniya");
// }, 4000);

// console.log("Welcome To");

// setInterval( ()=>{
//         console.log("Node Js World!");
// }, 3000);

// let arr = [2, 3, 6, 7, 4, 9, 8];

// let even = arr.filter((el)=>{
//         return el % 2 !== 0;
// });
// console.log(even);


// let h3 = document.createElement( "h3" );
// h3.innerHTML = "Hey I'm H3";
// document.body.appendChild( h3 );

// let btns = document.querySelectorAll("button");

// for (btn of btns){
    
//     btn.addEventListener ("click", sayHello);
//     btn.addEventListener ("click", sayName);
// }


// function sayHello(){
//     alert("Hello, This is Button");
// }

// function sayName(){
//     alert("Internet Duniya");
// }



let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", ()=>{
    let h2 = document.querySelector( "h2" );
    let randomColor = getRandomColor();

    h2.innerText = randomColor;
    // console.log("Color Updated");

    div.style.backgroundColor=randomColor;
})

function getRandomColor(){
    let red =  Math.floor(Math.random()*255);
    let green =  Math.floor(Math.random()*255);
    let blue =  Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    
}