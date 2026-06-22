(function () {
    emailjs.init({
        publicKey: "vJkRPa-otxE7RW78s"
    });

    const form = document.getElementById("bookingForm");

    if (!form) {
        console.error("Booking form not found.");
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
            alert(
                "Thank you. Your booking request has been received. We will contact you shortly to confirm your appointment."
            );
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);
            alert(
                "Booking could not be sent. Check the browser console (F12) for details."
            );
        });
    });
})();
