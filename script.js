alert("SCRIPT LOADED");

window.onload = function () {

    const form = document.getElementById("bookingForm");

    if (!form) {
        alert("FORM NOT FOUND");
        return;
    }

    alert("FORM FOUND");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("FORM SUBMITTED");
    });

};
