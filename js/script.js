// ====== MOBILE MENU ======
let menuIcon = document.querySelector('#menu-icon'); // Menu icon for mobile view
let navbar = document.querySelector('.navbar'); // Navigation bar

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle menu icon appearance
    navbar.classList.toggle('active'); // Toggle navigation bar visibility
}

// ====== HIRE BUTTON → WHATSAPP WITH AUTO MESSAGE ======
document.getElementById("hireBtn").addEventListener("click", function () {
    const phoneNumber = "+601170188266"; 
    const message = "Hi, I saw your portfolio and would like to hire you.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});

// ====== INIT EMAILJS ======
emailjs.init("3Kn6pK4-WOBAl0VH_"); // Your Public Key

// ====== CONTACT FORM EMAILJS ======
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.send("service_21ewsix", "template_4xw510c", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        })
        .then(() => {
            alert("✅ Your message has been sent successfully!");
            contactForm.reset(); // Clear form after success
        })
        .catch((error) => {
            alert("❌ Failed to send message. Please try again.");
            console.log(error);
        });
    });
}
