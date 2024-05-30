// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element and the submit button
  const form = document.querySelector(".requires-validation");
  const submitButton = document.getElementById("subbutton");

  // Handle form submission event
  form.addEventListener("submit", function (event) {
    // Check if the form is valid (all required fields are filled)
    if (!form.checkValidity()) {
      // If the form is invalid, prevent form submission
      event.preventDefault();
      event.stopPropagation();
    } else {
      // If the form is valid, show the success modal
      const successModal = new bootstrap.Modal(document.getElementById("myModal"));
      successModal.show();
    }
    // Add the "was-validated" class to the form to apply validation styles
    form.classList.add("was-validated");
  });

  // Handle modal shown event
  document.getElementById("myModal").addEventListener("shown.bs.modal", function () {
    // Do nothing here as we just want to show the modal
  });

  // Handle modal hidden event
  document.getElementById("myModal").addEventListener("hidden.bs.modal", function () {
    // Refresh the page after the modal is closed
    window.location.reload();
  });

  // Handle modal button click event (in case the user clicks on the button without submitting the form)
  submitButton.addEventListener("click", function () {
    // Trigger the form submission when the modal button is clicked
    form.dispatchEvent(new Event("submit"));
  });

  // Reset validation state when a form field is changed
  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("input", function () {
      // Remove the "is-invalid" class from the field to reset validation state
      formElements[i].classList.remove("is-invalid");
    });
  }
});
