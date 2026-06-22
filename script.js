emailjs.init({
    publicKey: "vJkRPa-otxE7RW78s"
});

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        idnumber: document.getElementById("idnumber").value,
        service: document.getElementById("service").value,
        date: document.getElementById("date").value,
        notes: document.getElementById("notes").value
    };

    emailjs.send(
        "service_pyadlgy",
        "template_vmkkrjg",
        templateParams
    )
    .then(function(response) {
        console.log("SUCCESS", response);
        alert("Booking sent successfully!");
    })
    .catch(function(error) {
        console.error("FAILED", error);
        alert("Error: " + JSON.stringify(error));
    });

});
