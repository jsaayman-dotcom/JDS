alert("SCRIPT LOADED");

(function () {
    emailjs.init({
        publicKey: "vJkRPa-otxE7RW78s"
    });

    const form = document.getElementById("bookingForm");

    if (!form) {
        alert("FORM NOT FOUND");
        return;
    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("FORM SUBMITTED");

    });

})();
        });
    });
})();
