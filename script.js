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
    .then(function () {

        alert(
            "Thank you. Your booking request has been received. We will contact you shortly to confirm your appointment."
        );

        form.reset();

    })
    .catch(function (error) {

        console.error(error);

        alert(
            "There was a problem sending your booking request. Please try again."
        );

    });

});
