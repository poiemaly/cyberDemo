// Function to open popup
function openPopup() {
  document.querySelector("#originalPopup").style.display = "block";
}

// Function to close the original popup and open the pre-created ones
function closeOriginalPopup() {
  document.querySelector("#originalPopup").style.display = "none";
  showPopups();
}

// Function to show pre-created popups
function showPopups() {
  const popups = ["popup1", "popup2", "popup3", "popup4", "popup5"];
  popups.forEach(popupId => {
      document.getElementById(popupId).style.display = "block";
  });
}

// Function to close individual popups
function closePopup(event) {
  event.target.parentElement.style.display = "none";
}

// Function to open Help popup
function openHelpPopup(event) {
  event.preventDefault();

  const helpPopup = document.createElement("div");
  helpPopup.classList.add("popup");
  helpPopup.innerHTML = `
      <button class="closeButton">X</button>
      <h2>Help is on the Way!!</h2>
      <p>Did you really think we would help you? Try again <33</p>
  `;
  document.body.appendChild(helpPopup);

  // Add event listener to the close button
  helpPopup.querySelector(".closeButton").addEventListener("click", (event) => {
      event.target.parentElement.style.display = "none";
  });

  // Display the help popup
  helpPopup.style.display = "block";
}

// Add event listener to button to open the original popup
document.getElementById("popupButton").addEventListener("click", openPopup);

// Add event listener to close button in the original popup
document.querySelector("#originalPopup .closeButton").addEventListener("click", closeOriginalPopup);

// Add event listeners to close buttons in pre-created popups
document.querySelectorAll(".popup .closeButton").forEach(button => {
  button.addEventListener("click", closePopup);
});

// Add event listener to the Help button in the original popup
document.getElementById("helpButton").addEventListener("click", openHelpPopup);
