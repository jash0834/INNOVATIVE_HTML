// Toggle "Read More" section
document.getElementById("readMoreBtn").addEventListener("click", function () {
    const moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        moreInfo.classList.add("hidden");
        this.textContent = "Read More";
    }
});

// Contact Form Submission Simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from actually submitting
    const formMessage = document.getElementById("formMessage");
    formMessage.classList.remove("hidden");
    setTimeout(() => {
        formMessage.classList.add("hidden");
    }, 3000); // Hide message after 3 seconds
});
