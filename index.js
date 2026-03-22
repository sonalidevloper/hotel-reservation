
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') return
    else {
        if (window.location.pathname === '/login.html' || window.location.pathname === '/register.html') return
        window.location.href = 'login.html';        
    }
    
}

const loginForm = document.getElementById('loginForm');

if(loginForm) {

    const validMobileNumbers = ['8917434138', '6372568644'];
    const validPassword = '12345678';

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;

        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const registeredUser = registeredUsers.find(function(user) {
            return user.mobile === mobile && user.password === password;
        });

        if (registeredUser || (validMobileNumbers.includes(mobile) && password === validPassword)) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'home.html';
        } else {
            alert('Invalid login credentials');
        }
    });
    
}

const registrationForm = document.getElementById('registrationForm');
    
if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (fullName && email && mobile && password && confirmPassword) {
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const existingUser = registeredUsers.find(function(user) { return user.mobile === mobile; });
            if (existingUser) {
                alert('An account with this mobile number already exists. Please login.');
                return;
            }
            registeredUsers.push({ fullName: fullName, email: email, mobile: mobile, password: password });
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            alert('Registration Successful! Please login to continue.');
            registrationForm.reset();
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields.');
        }
    });
}

const logoutButton = document.getElementById('logoutBtn');
if(logoutButton) {
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
}

const bookingForm = document.getElementById('bookingForm');
const paymentDetails = document.getElementById('paymentDetails');
const roomType = document.getElementById('roomType');
const numNights = document.getElementById('numNights');
const totalCost = document.getElementById('totalCost');
if(bookingForm) {
    bookingForm.addEventListener('change', () => {
        const roomSelect = document.getElementById('room');
        const checkinDate = new Date(document.getElementById('checkin').value);
        const checkoutDate = new Date(document.getElementById('checkout').value);
    
        if (roomSelect.value && checkinDate && checkoutDate && checkinDate < checkoutDate) {
            const nights = Math.ceil(
                (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24)
            );
            const roomPrice = parseFloat(roomSelect.selectedOptions[0].dataset.price);
            const total = (nights * roomPrice)*10;
    
            roomType.textContent = `Room Type: ${roomSelect.selectedOptions[0].text}`;
            numNights.textContent = `Number of Nights: ${nights}`;
            totalCost.textContent = `Total Cost: ${total}`;
    
            paymentDetails.style.display = 'block';
        } else {
            paymentDetails.style.display = 'none';
        }
    });
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Booking confirmed!');
        bookingForm.reset();
        paymentDetails.style.display = 'none';
    });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            alert('Your message has been sent. Thank you!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}