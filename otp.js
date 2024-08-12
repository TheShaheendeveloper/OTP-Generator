let generatedOtp = '';

function sendOtp() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (!phoneNumber) {
        document.getElementById('message').textContent = 'Please enter a phone number';
        document.getElementById('message').style.color = 'red';
        return;
    }
    
    // Simulate OTP generation and sending
    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 4-digit OTP
    console.log(`OTP for ${phoneNumber} is ${generatedOtp}`); // Log the OTP (in real case, send it via SMS)
    
    document.getElementById('message').textContent = `OTP sent to ${phoneNumber}`;
    document.getElementById('message').style.color = 'green';
}

function verifyOtp() {
    const userOtp = document.getElementById('otp-input').value;
    
    if (userOtp === generatedOtp) {
        document.getElementById('message').textContent = 'OTP Verified Successfully!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid OTP. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
}
