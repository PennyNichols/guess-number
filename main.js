let answer = pickNumber(1, 100);
const remaining = document.getElementById("remaining");
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const checkBtn = document.getElementById("check-btn");
let count = 3;

let vid = document.getElementById("myVideo");
vid.playbackRate = 0.5;

function pickNumber(min, max) {
	return Math.floor(Math.random() * 10 + 1);
}

console.log(answer);

function displayAlert(text) {
	alert.textContent = text;
}

function lowerCount(text) {
	remaining.textContent = text;
}

const checkGuess = (e) => {
	e.preventDefault();
	let guess = document.getElementById("guess").value;
	if (guess <= 0 || guess > 10) {
		window.alert("Please choose from 1 to 10, inclusively.");
	} else if (guess == answer) {
		displayAlert("YOU WIN!!!!");
		document.getElementById("image").src = "hat.png";
	} else if (guess < answer) {
		displayAlert("Nope! Guess Higher!");
		count -= 1;
		lowerCount(count);
		if (count == 2) {
			remaining.classList.add("two");
		} else if (count == 1) {
			remaining.classList.add("one");
		}
	} else if (guess > answer) {
		displayAlert("Nope! Guess Lower!");
		count -= 1;
		lowerCount(count);
		if (count == 2) {
			remaining.classList.add("two");
		} else if (count == 1) {
			remaining.classList.add("one");
		}
	}
	if (remaining.innerText == 0) {
		lowerCount("Too Many Chances, You Lose!");
		displayAlert("YOU LOSE!!");
	}
	console.log("working");
};

checkBtn.addEventListener("click", checkGuess);
