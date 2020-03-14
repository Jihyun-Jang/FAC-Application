// IMAGE CAROUSEL

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");



// next and prev buttons
let counter = 1;
const size = carouselImages[0].clientWidth;


function sliding() {
	carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function nextSlide() {
	if(counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter++;
	sliding();
}

function prevSlide() {
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0.6s ease-in-out";
	counter--;
	sliding();
}

carouselSlide.addEventListener("transitionend", function() {
	if(carouselImages[counter].id === "lastClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		sliding();
	}

	if(carouselImages[counter].id === "firstClone") {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		sliding();
	}
});

sliding();
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


// looping through with a play/pause button
let autoPlay;

function play() {
	pauseBtn.style.display = "block";
	playBtn.style.display = "none";
	autoPlay = setInterval(nextSlide, 3000);
}

function pause() {
	playBtn.style.display = "block";
	pauseBtn.style.display = "none";
	clearInterval(autoPlay);
}

playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);


// keyboard navigation
window.addEventListener("keydown", function(key) {
	if(key.keyCode === 39) {
		nextSlide();
	}

	if(key.keyCode === 37) {
		prevSlide();
	}
});