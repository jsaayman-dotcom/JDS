emailjs.init({
    publicKey: "vJkRPa-otxE7RW78s"
});

window.onload = function () {

    const form = document.getElementById("bookingForm");

    if (!form) {
        alert("FORM NOT FOUND");
        return;
    }

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

            alert("Booking sent successfully!");

            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("Booking failed. Press F12 and check Console.");

        });

    });

};
