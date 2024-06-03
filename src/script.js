// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: Infinity,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const newNav = () => {
  let navigation = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navigation.classList.remove('opacity-0', 'visibility-hidden');
      navigation.classList.add('opacity-100', 'visibility-visible');
    } else {
      navigation.classList.remove('opacity-100', 'visibility-visible');
      navigation.classList.add('opacity-0', 'visibility-hidden');
    }
  });
}

newNav();


// image
document
.querySelector(".parallax-container")
.addEventListener("mousemove", function (e) {
  const image = document.querySelector(".parallax-image");
  const container = e.currentTarget.getBoundingClientRect(); // container er diamention and position nilam
  const x = (e.clientX - container.left) / container.width; // calculation of mouse movement
  const y = (e.clientY - container.top) / container.height;
  const moveX = ( 0.1 - x) * 30; // Adjust the intensity of the effect
  const moveY = ( 0.1 - y) * 40;
 
  image.style.transform = `translate(${moveX}px, ${moveY}px)`; // Adjust the scale if needed
});

document
.querySelector(".parallax-container")
.addEventListener("mouseleave", function () {
  const image = document.querySelector(".parallax-image");
  const moveX = (x - 0.1) * 10; // Adjust the intensity of the effect
  const moveY = (y - 0.1) * 10;
  image.style.transform = "translate(0px, 0px)";
});


//imageOne
document
.querySelector(".parallax-container")
.addEventListener("mousemove", function (e) {
  const image = document.querySelector(".parallax-imageOne");
  const container = e.currentTarget.getBoundingClientRect(); // container er diamention and position nilam
  const x = (e.clientX - container.left) / container.width; // calculation of mouse movement
  const y = (e.clientY - container.top) / container.height;
  const moveX = ( 0.1 - x) * 30; // Adjust the intensity of the effect
  const moveY = ( 0.1 - y) * 40;
 
  image.style.transform = `translate(${moveX}px, ${moveY}px)`; // Adjust the scale if needed
});

document
.querySelector(".parallax-container")
.addEventListener("mouseleave", function () {
  const image = document.querySelector(".parallax-imageOne");
  const moveX = (x - 0.1) * 10; // Adjust the intensity of the effect
  const moveY = (y - 0.1) * 10;
  image.style.transform = "translate(0px, 0px)";
});




//imageTwo
document
.querySelector(".parallax-container")
.addEventListener("mousemove", function (e) {
  const image = document.querySelector(".parallax-imageTwo");
  const container = e.currentTarget.getBoundingClientRect(); // container er diamention and position nilam
  const x = (e.clientX - container.left) / container.width; // calculation of mouse movement
  const y = (e.clientY - container.top) / container.height;
  const moveX = ( 0.5 - x) * 10; // Adjust the intensity of the effect
  const moveY = ( 0.5 - y) * 20;
 
  image.style.transform = `translate(${moveX}px, ${moveY}px)`; // Adjust the scale if needed
});

document
.querySelector(".parallax-container")
.addEventListener("mouseleave", function () {
  const image = document.querySelector(".parallax-imageTwo");
  const moveX = (x - 0.1) * 10; // Adjust the intensity of the effect
  const moveY = (y - 0.1) * 10;
  image.style.transform = "translate(0px, 0px)";
});



//imageThree
document
.querySelector(".parallax-container")
.addEventListener("mousemove", function (e) {
  const image = document.querySelector(".parallax-imageThree");
  const container = e.currentTarget.getBoundingClientRect(); // container er diamention and position nilam
  const x = (e.clientX - container.left) / container.width; // calculation of mouse movement
  const y = (e.clientY - container.top) / container.height;
  const moveX = ( 0.5 - x) * 10; // Adjust the intensity of the effect
  const moveY = ( 0.5 - y) * 20;
 
  image.style.transform = `translate(${moveX}px, ${moveY}px)`; // Adjust the scale if needed
});

document
.querySelector(".parallax-container")
.addEventListener("mouseleave", function () {
  const image = document.querySelector(".parallax-imageThree");
  const moveX = (x - 0.1) * 10; // Adjust the intensity of the effect
  const moveY = (y - 0.1) * 10;
  image.style.transform = "translate(0px, 0px)";
});


//counter js

$(document).ready(function() {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];
  var maxCount = 0;

  // Get the count values and determine the maximum count value
  for (var i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
    if (counter[i] > maxCount) {
      maxCount = counter[i];
    }
  }

  var duration = 5000; // Duration in milliseconds to reach the maximum count value
  var intervalTime = 50; // Interval time in milliseconds for smoother updates
  var steps = duration / intervalTime; // Number of steps to complete the count

  var count = function(start, end, id) {
    var increment = end / steps; // Increment value for each step
    var localStart = start;

    var interval = setInterval(function() {
      if (localStart < end) {
        localStart += increment;
        if (localStart > end) localStart = end; // Ensure it does not exceed the end value
        counters[id].innerHTML = Math.ceil(localStart);
      } else {
        clearInterval(interval); // Clear interval when the count reaches the end value
        counters[id].innerHTML = end; // Ensure it ends exactly at the end value
      }
    }, intervalTime);
  }

  for (var j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

