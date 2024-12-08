function sendMail(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
    }
  
    emailjs.send("service_t7o8sys","template_smqowtc",parms).then(alert("Email Sent!"))
}