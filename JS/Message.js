function sendMessage() {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    const whatsappNumber = '+923078141297'; // Replace with your WhatsApp number
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/${923078141297}?text=${encodedMessage}`, '_blank');
}