function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nishant.patil0403@gmail.com",
        Password: "Kim@ya2912",
        To: 'nishantp920@gmail.com',
        From: document.getElementById("mail").value,
        Subject: "This is Something",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

function resetForm() {
    document.querySelector(".contact__form").reset();
}