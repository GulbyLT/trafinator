var dropdown = document.getElementById("vendor");

var button = document.getElementById("emailButton");

var recipient = dropdown.value

button.addEventListener("click", function() {
    console.log("Email button clicked");
    console.log("vendor selected: " + dropdown.value);
    openEmailWithRecipient(dropdown.value);
});

function openEmailWithRecipient(recipient) {
    var subject = encodeURIComponent("Test Email");
    var body = encodeURIComponent("TEST EMAIL BODY");
    var mailtoLink = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
}