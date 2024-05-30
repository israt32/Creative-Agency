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






// navbar


// const newNav = () =>{
//   let navigation = document.querySelector('.navbar');
//   window.addEventListener('scroll',() => {
//     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
//       navigation.style.position = "fixed";
//       navigation.style.backgroundColor = "black";
//       navigation.style.transform = "translateY(-2%)";
//       navigation.style.transition = "1s";
//       navigation.style.visibility = "visible";
//       // navigation.style.animation = "headerSticky 1s forwards"; // Adding animation
//     } else {
//       navigation.style.position = "absolute";
//       navigation.style.top = "0";
//       navigation.style.backgroundColor = "transparent";
//       navigation.style.transition = "1s";
//       navigation.style.transform = "translateY(0%)";
//       // navigation.style.animation = "none"; // Removing animation
//     }
//   });
// }

// newNav();


// const newNav = () => {
//   let navigation = document.querySelector('.navbar');
//   window.addEventListener('scroll', () => {
//       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//           navigation.classList.remove('hidden-nav');
//           navigation.classList.add('visible-nav');
//       } else {    
//           navigation.classList.remove('visible-nav');
//           navigation.classList.add('hidden-nav');
//       }
//   });
// }

// newNav();


// //////////////////////////////////////////////////////////////////////////////////////////////////


// const newNav = () => {
//   let navigation = document.querySelector('.navbar');
//   window.addEventListener('scroll', () => {
//       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navigation.style.opacity = "1";
//         navigation.style.visibility = "visible";
//       } else {
//         navigation.style.opacity = "0";
//         navigation.style.visibility = "hidden";

//       }
//   });
// }

// newNav();

/////////////////////////////////////////////////////////////////////////////////////////////////////////






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












// const container = document.querySelector(".parallax-container");
// const images = document.querySelectorAll(".parallax-image");

// container.addEventListener("mousemove", function (e) {
//   const rect = container.getBoundingClientRect();
//   const x = (e.clientX - rect.left) / rect.width;
//   const y = (e.clientY - rect.top) / rect.height;
//   const moveX = ( 0.1 - x) * 30; // Adjust the intensity of the effect
//   const moveY = ( 0.1 - y) * 30;

//   images.forEach((image) => {
//     image.style.transform = `translate(${moveX}px, ${moveY}px)`; // Adjust the scale if needed
//   });
// });

// container.addEventListener("mouseleave", function () {
//   images.forEach((image) => {
//     const moveX = (x - 0.1) * 10; // Adjust the intensity of the effect
//     const moveY = (y - 0.1) * 10;
//     image.style.transform = "translate(0px, 0px)";
//   });
// });










//counter js
// $(document).ready(function() {

//   var counters = $(".count");
//   var countersQuantity = counters.length;
//   var counter = [];

//   for (i = 0; i < countersQuantity; i++) {
//     counter[i] = parseInt(counters[i].innerHTML);
//   }

//   var count = function(start, value, id) {
//     var localStart = start;
//     setInterval(function() {
//       if (localStart < value) {
//         localStart++;
//         counters[id].innerHTML = localStart;
//       }
//     }, 100);
//   }

//   for (j = 0; j < countersQuantity; j++) {
//     count(0, counter[j], j);
//   }
// });



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

// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});