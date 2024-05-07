// Function to open popup
function openPopup() {
    document.querySelector(".popup").style.display = "block";
  }
  
  // Function to close popup
  function closePopup() {
    document.querySelector(".popup").style.display = "none";
  }
  
  // Add event listener to button to open popup
  document.getElementById("popupButton").addEventListener("click", openPopup);
  
  // Add event listener to button to close popup
  document.getElementById("closeButton").addEventListener("click", closePopup);
  