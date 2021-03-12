alert("Let's do some math!");
let num1 = prompt("Please enter a number");
num1 = parseFloat(num1);
let num2 = prompt("Please enter another number");
num2 = parseFloat(num2);

const main = document.querySelector('main');
let message = `
   <h1>Math with the numbers <span class="highlight">${num1}</span> and <span class="highlight">${num2}</span>:</h1>
   <p>${num1} + ${num2} = <span class="highlight">${num1 + num2}</span></p>
   <p>${num1} - ${num2} = <span class="highlight">${num1 - num2}</span></p>
   <p>${num1} * ${num2} = <span class="highlight">${num1 * num2}</span></p>
   <p>${num1} / ${num2} = <span class="highlight">${(num1 / num2).toFixed(2)}</span></p>
   <img class="main-img" src="img/einstine.png" alt="Cartoon image of Einstine" />
   `;

main.innerHTML = message;