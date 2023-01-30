$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

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