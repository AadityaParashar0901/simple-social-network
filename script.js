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

  /* contact Us button */
  // Get the modal element
  const modal = document.getElementById("contactModal");

  // Get the button that opens the modal
  const btn = document.getElementById("contactBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementById("contactclose-btn");

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
}
};

});
