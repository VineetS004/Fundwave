// Function to handle donation via the donate button
function donate(amount) {
    const donationMessage = document.getElementById('donation-message');
    donationMessage.textContent = `Thank you for donating ₹${amount}! Your contribution will make a real difference.`;
    donationMessage.style.color = 'green';
}

// Form submission handling
document.getElementById('donate-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const donationAmount = document.getElementById('donation-amount').value;
    if (donationAmount && donationAmount > 0) {
        document.getElementById('donation-message').textContent = `Thank you for donating ₹${donationAmount}!`;
        document.getElementById('donate-form').reset();
    } else {
        document.getElementById('donation-message').textContent = 'Please enter a valid amount.';
        document.getElementById('donation-message').style.color = 'red';
    }
});

