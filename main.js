
const answer=pickNumber(1,100);
const remaining= document.getElementById("remaining");
const alert = document.getElementById("alert");
const form = document.querySelector(".form");
const guess = document.getElementById("guess");
const check = document.getElementById("check-btn");

console.log(answer);
console.log(answer);

function pickNumber(min, max) {
    return Math.floor(Math.random() * (100));
  }