//predefine emails for selections

var emailRecipients = {
    "test": "rogul@danskebank.lt",
    //"SAKA": "toimisto@saka.fi",
    //"Joupin": "emilia.myntti@rinta-jouppi.com, Paula.tornstrom@rinta-joupi.com",
    //"Jarmo": "sihteerit@rinta-jouppi.com",
};



//open an email with a prefiled subject based on the dropdown selection

function openEmailWithSubject() {
    // Get the vendor dropdown element
    var dropdown = document.getElementById("vendor-form");
    
    // Get the selected value
    var selectedValue = dropdown.value;
    
    // Define the email recipient based on the selected value
    var emailRecipient = emailRecipients[selectedValue] || "<default_email@example.com>";

    // Define the email subject
    var emailSubject = "test subject for " + selectedValue;

    // Create the mailto link
    var mailtoLink = "mailto:" + encodeURIComponent(emailRecipient) +
                     "?subject=" + encodeURIComponent(emailSubject);
    
    // Open the email client with the prefilled subject
    window.location.href = mailtoLink;
}

//add event listener to the button
document.getElementById("openEmailButton").addEventListener("click", openEmailWithSubject);


