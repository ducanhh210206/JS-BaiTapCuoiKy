document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    const savedData = JSON.parse(localStorage.getItem("charlotteBooking"));
    if (savedData) {
        document.getElementById("day").value = savedData.day;
        document.getElementById("month").value = savedData.month;
        document.getElementById("year").value = savedData.year;
        document.getElementById("time").value = savedData.time;
        document.getElementById("session").value = savedData.session;
        document.getElementById("guests").value = savedData.guests;
        document.getElementById("first_name").value = savedData.first_name;
        document.getElementById("last_name").value = savedData.last_name;
        document.getElementById("email").value = savedData.email;
        document.getElementById("phone").value = savedData.phone;
        document.getElementById("requests").value = savedData.requests;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const booking = {
            day: document.getElementById("day").value,
            month: document.getElementById("month").value,
            year: document.getElementById("year").value,
            time: document.getElementById("time").value,
            session: document.getElementById("session").value,
            guests: document.getElementById("guests").value,
            firstName: document.getElementById("first_name").value,
            lastName: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            requests: document.getElementById("requests").value,
        };

        localStorage.setItem("charlotteBooking", JSON.stringify(booking));
        alert("Thông tin đặt bàn đã được lưu!");
        console.log("Dữ liệu đã lưu:", booking);
    });
});




