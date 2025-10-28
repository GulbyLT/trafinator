var dropdown = document.getElementById("vendor");

var button = document.getElementById("emailButton");


button.addEventListener("click", function() {
    console.log("Email button clicked");
    console.log("vendor selected: " + dropdown.value);
});