//   window.onload = function() {
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contact_form', this)
//             .then(function() {
//                 console.log('SUCCESS!');
//             }, function(error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }

// Toogle Menu
const menuButton = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

let menuOpen = false;

menuButton.addEventListener("click", () => {
	if (!menuOpen) {
		navMenu.classList.add("open");
		menuButton.classList.add("open");
		menuOpen = true;
	} else {
		navMenu.classList.remove("open");
		menuButton.classList.remove("open");
		menuOpen = false;
	}
});


// Get copiright automatic year
const newYear = document.getElementById("date");
const updateYear = () => {
    newYear.textContent = new Date().getFullYear();
};
document.addEventListener("DOMContentLoaded", updateYear);

function showStuff(id, text, btn) {
  document.getElementById(id).style.display = 'block';
  // hide the lorem ipsum text
  document.getElementById(text).style.display = 'none';
  // hide the link
  btn.style.display = 'none';
}


