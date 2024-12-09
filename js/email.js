function sendMail(e) {
  e.preventDefault(); 

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs
    .send("service_t7o8sys", "template_smqowtc", params)
    .then((response) => {
      // Notify the user on success
      toastr.success("Email Sent!");

      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      // Notify the user on error
      toastr.error("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    });
}
