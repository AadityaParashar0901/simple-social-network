document.addEventListener("DOMContentLoaded", function () {

  const signUpButton = document.getElementById('signUpButton');
  const signInButton = document.getElementById('signInButton');
  const signInForm = document.getElementById('signIn');
  const signUpForm = document.getElementById('signup');

  signUpButton.addEventListener('click', function () {
    signInForm.classList.remove('visible');
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
    signUpForm.classList.add('visible');
  });
  signInButton.addEventListener('click', function () {
    signInForm.classList.remove('hidden');
    signInForm.classList.add('visible');
    signUpForm.classList.remove('visible');
    signUpForm.classList.add('hidden');
  });

  /* help model java script by Gourav */

  const helpBtn = document.getElementById("helpBtn");
  const helpModal = document.getElementById("helpModal");
  const closeHelp = document.getElementById("closeHelp");
  const submitQueryButton = document.getElementById("submitQueryButton"); // New: Get the submit button in help modal
  const submissionSuccessModal = document.getElementById("submissionSuccessModal"); // New: Get the success modal
  const okButton = document.getElementById("okButton"); // New: Get the OK button in success modal

  helpBtn.addEventListener("click", function () {
    helpModal.style.display = "block";
  });

  closeHelp.addEventListener("click", function () {
    helpModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === helpModal) {
      helpModal.style.display = "none";
    }
  });

  // New: Event listener for the submit button in the help modal
  submitQueryButton.addEventListener("click", function () {
    // In a real application, you would send the query and email to a server here.
    // For now, we'll just simulate success.

    // Hide the help modal
    helpModal.style.display = "none";

    // Show the submission success modal
    submissionSuccessModal.style.display = "block";
  });

  // New: Event listener for the OK button in the submission success modal
  okButton.addEventListener("click", function () {
    submissionSuccessModal.style.display = "none";
  });

  // New: Close success modal if clicked outside
  window.addEventListener("click", function (event) {
    if (event.target === submissionSuccessModal) {
      submissionSuccessModal.style.display = "none";
    }
  });


  /* contact Us button */
  // Get the modal element
  const contactModal = document.getElementById("contactModal"); // Renamed 'modal' to 'contactModal' for clarity

  // Get the button that opens the modal
  const btn = document.getElementById("contactBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementById("contactclose-btn");

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    contactModal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    contactModal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  };

});
