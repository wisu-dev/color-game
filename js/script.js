const square = document.getElementsByClassName("item");
const timer = document.getElementsByClassName("timer")[0];

let preClick = [
	"#fcdbea",
	"#ff745e",
	"#ffbb59",
	"#7386fc",
	"#ffbfb5",
	"#bb8ec3",
	"#cbd9eb",
	"#245643",
	"#f2f864",
];

for (let i = 0; i < preClick.length; i++) {
	square[i].style.backgroundColor = preClick[i];
}

const getRandomColor = () => {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		colorDisplay.textContent = color;
	}
	return color;
};

for (let i = 0; i < square.length; i++) {
	square[i].addEventListener("click", (event) => {
		let clickedColor;
		event.target.style.backgroundColor = color;
	});
}

let seconds = 60;
let countdown = setInterval(function () {
	timer.textContent = seconds--;
	if (seconds < 0) {
		clearInterval(countdown);
		timer.textContent = "Time's up!";
	}
}, 1000);

