alert("SCRIPT LOADED");

const form = document.getElementById("bookingForm");

console.log(form);

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("FORM WORKS");
    });
}
