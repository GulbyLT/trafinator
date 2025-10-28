var dropdown = document.getElementById("vendor");



var button = document.getElementById("emailButton");

//temp filling for entry field





button.addEventListener("click", function() {
    var carNumber = document.getElementById("car-number").value.toString().toUpperCase();
    openEmailWithRecipient(dropdown.value, carNumber);
    
});

function openEmailWithRecipient(recipient, carNumber) {
    var subject = encodeURIComponent("Puuttuva rekisteröinti autolle " + carNumber);
    //var bodyText = encodeURIComponent("Hei, %0A%0A Huomasimme että auton " + carNumber + " rekisteröinti meille puuttuu. Voitteko rekisteröidä auton mahdollisimman pian meille, jotta voimme viedä rahoituksen loppuun. Kiitos jo etukäteen.");
    

    //var mailtoLink = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
    window.location.href = `mailto:${recipient}?subject=${subject}&body=Hei,%0D%0A%0D%0AHuomasimme että auton ${carNumber} rekisteröinti meille puuttuu. Voitteko rekisteröidä auton mahdollisimman pian meille, jotta voimme viedä rahoituksen loppuun.%0D%0A%0D%0AKiitos jo etukäteen. %0D%0A%0D%0AYstävällisin terveisin %0D%0ADanske Finance %0D%0AAsiakaspalvelu`;
}