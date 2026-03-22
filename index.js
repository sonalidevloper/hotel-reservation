// ─── Auth Guard (runs on every page that loads index.js) ─────────────────────
window.onload = function () {
    var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) return; // already logged in — let the page load

    var path = window.location.pathname;

    // Pages allowed WITHOUT login
    var publicPages = ['/index.html', '/login.html', '/register.html', '/'];
    var isPublic = publicPages.some(function (p) {
        return path === p || path.endsWith(p);
    });

    if (isPublic) return; // public page — let it load normally

    // Protected page + not logged in → send to login
    window.location.href = 'login.html';
};

// ─── Login Form ───────────────────────────────────────────────────────────────
var loginForm = document.getElementById('loginForm');
if (loginForm) {

    // Hardcoded demo credentials (bypass for testing)
    var validMobileNumbers = ['8917434138', '6372568644'];
    var validPassword = '12345678';

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var mobile   = document.getElementById('mobile').value.trim();
        var password = document.getElementById('password').value;

        // Check registered users saved during sign-up
        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        var matchedUser = registeredUsers.find(function (user) {
            return user.mobile === mobile && user.password === password;
        });

        if (matchedUser || (validMobileNumbers.includes(mobile) && password === validPassword)) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'home.html';
        } else {
            alert('Invalid login credentials. Please check your mobile number and password.');
        }
    });
}

// ─── Registration Form ────────────────────────────────────────────────────────
var registrationForm = document.getElementById('registrationForm');
if (registrationForm) {

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var fullName        = document.getElementById('fullName').value.trim();
        var email           = document.getElementById('email').value.trim();
        var mobile          = document.getElementById('mobile').value.trim();
        var password        = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        // Validation
        if (!fullName || !email || !mobile || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        if (mobile.length < 10) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Prevent duplicate registration
        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        var alreadyExists = registeredUsers.find(function (user) {
            return user.mobile === mobile;
        });
        if (alreadyExists) {
            alert('This mobile number is already registered. Please login.');
            window.location.href = 'login.html';
            return;
        }

        // ✅ THE CRITICAL FIX — save new user to localStorage
        registeredUsers.push({
            fullName: fullName,
            email:    email,
            mobile:   mobile,
            password: password
        });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert('Registration Successful! Please login to continue.');
        registrationForm.reset();
        window.location.href = 'login.html';
    });
}

// ─── Logout Button ────────────────────────────────────────────────────────────
var logoutButton = document.getElementById('logoutBtn');
if (logoutButton) {
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
}

// ─── Booking Form ─────────────────────────────────────────────────────────────
var bookingForm    = document.getElementById('bookingForm');
var paymentDetails = document.getElementById('paymentDetails');
var roomTypeEl     = document.getElementById('roomType');
var numNightsEl    = document.getElementById('numNights');
var totalCostEl    = document.getElementById('totalCost');

if (bookingForm) {

    bookingForm.addEventListener('change', function () {
        var roomSelect   = document.getElementById('room');
        var checkinDate  = new Date(document.getElementById('checkin').value);
        var checkoutDate = new Date(document.getElementById('checkout').value);

        if (
            roomSelect.value &&
            !isNaN(checkinDate) &&
            !isNaN(checkoutDate) &&
            checkinDate < checkoutDate
        ) {
            var nights    = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
            var roomPrice = parseFloat(roomSelect.selectedOptions[0].dataset.price);
            var total     = nights * roomPrice;

            roomTypeEl.textContent  = 'Room Type: '        + roomSelect.selectedOptions[0].text;
            numNightsEl.textContent = 'Number of Nights: ' + nights;
            totalCostEl.textContent = 'Total Cost: \u20B9'  + total.toLocaleString('en-IN') + ' /-';

            paymentDetails.style.display = 'block';
        } else {
            paymentDetails.style.display = 'none';
        }
    });

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Booking confirmed! Thank you for choosing HBS Hotel & Suites.');
        bookingForm.reset();
        paymentDetails.style.display = 'none';
    });
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
var contactForm = document.getElementById('contactForm');
if (contactForm) {

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var name    = document.getElementById('name').value.trim();
        var email   = document.getElementById('email').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            alert('Your message has been sent. Thank you!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}