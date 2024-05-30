// Hide the scroll-to-top button initially
document.getElementById("scrollToTop").style.display = "none";

// Show/hide scroll-to-top button based on scroll position
window.onscroll = function () {
  var scrollToTopBtn = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // If the user has scrolled more than 20px from the top, display the scroll-to-top button
    scrollToTopBtn.style.display = "block";
  } else {
    // Otherwise, hide the scroll-to-top button
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top when the button is clicked
document.getElementById("scrollToTop").onclick = function () {
  // Scroll to the top of the page with smooth animation
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Function to toggle dark mode
function toggleDarkMode() {
  // Elements to be affected by dark mode
  const body = document.body;
  const cards = document.querySelectorAll(".card");
  const cardTitles = document.querySelectorAll(".card-title");
  const h5Tags = document.querySelectorAll("h5");
  const darkModeButton = document.getElementById("darkModeToggle");
  const scrollToTopButton = document.getElementById("scrollToTop").querySelector(".btn");
  const tableHeaders = document.querySelectorAll(".thead-dark th");
  const tableData = document.querySelectorAll(".table tbody tr");
  const navBar = document.querySelector(".navbar");
  const footer = document.querySelector('footer');
  const socialButtons = document.querySelectorAll('.btn-floating');
  const accordionBodies = document.querySelectorAll(".accordion-body");
  const accordionButton = document.querySelectorAll(".accordion-button")
  const modalContent = document.querySelectorAll(".modal-content")

  // Add the "transition" class to all elements you want to have a smooth transition
  body.classList.add("transition");
  cards.forEach(card => card.classList.add("transition"));
  cardTitles.forEach(cardTitle => cardTitle.parentElement.classList.add("transition"));
  h5Tags.forEach(h5Tag => h5Tag.classList.add("transition"));
  tableHeaders.forEach(th => th.classList.add("transition"));
  tableData.forEach(row => {
    const rowCells = row.querySelectorAll("td");
    rowCells.forEach(cell => cell.classList.add("transition"));
  });
  navBar.classList.add("transition");
  footer.classList.add("transition");
  socialButtons.forEach(button => button.classList.add("transition"));
  accordionBodies.forEach(accordionBodies => accordionBodies.classList.add("transition"));
  accordionButton.forEach(accordionButton => accordionButton.classList.add("transition"));
  modalContent.forEach(modalContent => modalContent.classList.add("transition"));

  // Add a small delay before toggling the dark mode classes
  setTimeout(() => {
    // Toggle the dark mode classes for body and other elements
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");

    cards.forEach(card => {
      card.classList.toggle("bg-dark");
      card.classList.toggle("text-white");
      card.classList.toggle("border-light");
      card.classList.toggle("border-dark");
    });

    cardTitles.forEach(cardTitle => {
      cardTitle.classList.toggle("text-white");
      cardTitle.parentElement.classList.toggle("bg-dark");
    });

    h5Tags.forEach(h5Tag => {
      h5Tag.classList.toggle("bg-dark");
      h5Tag.classList.toggle("text-white");
    });

    // Toggle the button color inline style based on dark mode state
    if (body.classList.contains("bg-dark")) {
      darkModeButton.style.backgroundColor = "white";
      darkModeButton.style.color = "black";
      scrollToTopButton.style.backgroundColor = "white";
      scrollToTopButton.style.color = "black";
    } else {
      darkModeButton.style.backgroundColor = "";
      darkModeButton.style.color = "";
      scrollToTopButton.style.backgroundColor = "";
      scrollToTopButton.style.color = "";
    }

    tableHeaders.forEach(th => {
      th.classList.toggle("bg-dark");
      th.classList.toggle("text-white");
    });

    tableData.forEach(row => {
      const rowCells = row.querySelectorAll("td");
      rowCells.forEach(cell => {
        cell.classList.toggle("bg-dark");
        cell.classList.toggle("text-white");
      });
    });

    // Loop through each accordion body and toggle the bg-dark and text-white classes
    accordionBodies.forEach(body => {
      body.classList.toggle("bg-dark");
      body.classList.toggle("text-white");
    });

    accordionButton.forEach(body => {
      body.classList.toggle("bg-dark");
      body.classList.toggle("text-white");
    });

    modalContent.forEach(body => {
      body.classList.toggle("bg-dark");
      body.classList.toggle("text-white");
    });


    // Toggle the navbar and footer classes for dark mode
    navBar.classList.toggle("navbar-dark");
    navBar.classList.toggle("bg-dark");
    footer.classList.toggle('bg-black');
    footer.classList.toggle('text-white');

    // Toggle the social buttons classes for dark mode
    socialButtons.forEach(button => {
      button.classList.toggle('btn-outline-dark');
      button.classList.toggle('btn-outline-light');
    });
  }, 10); // You can adjust the delay time as needed to achieve the desired effect.

  // Toggle the dark mode classes for the submit button
  const submitButton = document.getElementById("subbutton");
  submitButton.classList.toggle("btn-dark");
  submitButton.classList.toggle("btn-light");
  submitButton.classList.toggle("text-white");
  submitButton.classList.toggle("text-black");


}

// Event listener for the dark mode toggle button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
