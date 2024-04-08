'use strict';

// preloadr

document.addEventListener("DOMContentLoaded", () => {
 
  setTimeout(() => {
      hideLoader();
      showContent();
  },1000); // 

  function hideLoader() {
      const loader = document.getElementById("preloader");
      loader.style.display = "none";
  }

  function showContent() {
      const content = document.getElementById("content");
      content.style.display = "block";
    }
});


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Skills bar


let number = document.getElementById("number1");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
},100);

let number1 = document.getElementById("number2");
let counter1 = 0;
setInterval(() => {
    if(counter1 == 75){
        clearInterval();
    }else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
},100);

let number2 = document.getElementById("number3");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 60){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
},100);

let number3 = document.getElementById("number4");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 65){
        clearInterval();
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
},100);


//Resume download btn

document.getElementById("downloadBtn").addEventListener("click", function() {
  // var downloadLink = "./RESUME.png"; // URL of the image you want to download
  var startTime = new Date(); // Start timer

  var image = new Image();
  image.src = downloadLink + "?nocache=" + new Date().getTime(); // Prevent caching
  image.onload = function() {
      var endTime = new Date(); // End timer
      var duration = (endTime - startTime) / 1000; // Calculate download time in seconds
      document.getElementById("downloadInfo").innerText = "Download completed in " + duration + " seconds.";

      // Create a download link for the image
      var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'DownloadedImage.jpg'; // Suggest a filename for download
      document.body.appendChild(link);
      link.click(); // Automatically click the link to trigger the download
      document.body.removeChild(link); // Clean up
  };

  image.onerror = function() {
      document.getElementById("downloadInfo").innerText = "Error downloading image.";
  };
});


// project-list



  document.addEventListener('DOMContentLoaded', function() {
    var icon = document.getElementById('drawing-simulator');

    // Check if the icon element exists to avoid null reference errors
    if(icon) {
        icon.style.cursor = 'pointer'; // Optional: Change cursor on hover to indicate clickable
        icon.addEventListener('click', function() {
            // Specify the URL you want to navigate to
            window.location.href = 'https://drawing-simulator.000webhostapp.com/';
        });
    }
});


// home
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// NOTES
function openUrl(url) {
  window.open(url, '_blank');
}

// Event listeners
document.getElementById('googleBtn').addEventListener('click', function() {
  openUrl('https://www.google.com');
});


// Preview img

function previewImage() {
  Swal.fire({
    imageUrl: "./resume.png",
    imagewidth: 1000,
    imageAlt: "A tall image"
  });
  
}



// 
// DARK MODE
// 

// document.addEventListener('DOMContentLoaded', () => {
//   let touchStartX = 0;
//   let touchEndX = 0;
//   let lastSwipeTime = 0;
//   const swipeThreshold = 300; // Time threshold in milliseconds for double swipe
//   const minSwipeDistance = 30; // Minimum distance in pixels for a valid swipe

//   function checkSwipeDirection() {
//       const currentTime = new Date().getTime();
//       const timeSinceLastSwipe = currentTime - lastSwipeTime;

//       if (timeSinceLastSwipe < swipeThreshold && Math.abs(touchEndX - touchStartX) > minSwipeDistance) {
//           toggleDarkMode();
//       }
//       lastSwipeTime = currentTime;
//   }

//   function toggleDarkMode() {
//       document.body.classList.toggle('dark-mode');
//       console.log('Dark mode toggled');
//   }

//   document.addEventListener('touchstart', e => {
//       touchStartX = e.changedTouches[0].screenX;
//   }, false);

//   document.addEventListener('touchend', e => {
//       touchEndX = e.changedTouches[0].screenX;
//       checkSwipeDirection();
//   }, false);
// });




document.addEventListener('DOMContentLoaded', () => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    function checkSwipeDirection() {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Detect horizontal swipe and ignore vertical swipes
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
                console.log('Swiped Left');
            } else if (diffX > 0) {
                toggleDarkMode();
            }
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        checkSwipeDirection();
    }, false);
});
