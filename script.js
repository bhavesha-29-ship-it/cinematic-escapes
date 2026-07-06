document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Basic Form Interaction
    const travelForm = document.getElementById("travelForm");
    
    if (travelForm) {
        travelForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            alert("Your journey has been initiated. Our concierges will contact you shortly.");
            travelForm.reset();
        });
    }

    // Live Chat Widget
    const chatToggle = document.getElementById("chat-toggle");
    const chatClose = document.getElementById("chat-close");
    const chatBox = document.getElementById("chat-box");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    if (chatToggle && chatBox) {
        chatToggle.addEventListener("click", function () {
            chatBox.classList.toggle("hidden");
            if (!chatBox.classList.contains("hidden")) {
                chatInput.focus();
            }
        });
    }

    if (chatClose && chatBox) {
        chatClose.addEventListener("click", function () {
            chatBox.classList.add("hidden");
        });
    }

    const autoReplies = [
        "Thanks for reaching out! One of our travel concierges will respond shortly.",
        "Great question - a member of our team will follow up with details soon.",
        "We've noted your message and will get back to you as soon as possible."
    ];

    if (chatForm) {
        chatForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            const userMsg = document.createElement("div");
            userMsg.className = "chat-msg user";
            userMsg.textContent = text;
            chatMessages.appendChild(userMsg);

            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(function () {
                const botMsg = document.createElement("div");
                botMsg.className = "chat-msg bot";
                botMsg.textContent = autoReplies[Math.floor(Math.random() * autoReplies.length)];
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 600);
        });
    }
});
