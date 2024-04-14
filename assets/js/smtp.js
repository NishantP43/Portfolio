const form = document.querySelector("form");
function sendEmail() {
        Email.send({
        Host: "smtp.elasticmail.com",
        Username: "nishantp920@gmail.com",
        Password: "4ED7A5A9BB2FE84FE8C616395B4A9EDF59BE2",
        To: 'nishantp920@gmail.com',
        From: 'nishantp920@gmail.com',
        Subject: "This is Something",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
    
}

function resetForm() {
    document.querySelector(".contact__form").reset();
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
    sendEmail();
})