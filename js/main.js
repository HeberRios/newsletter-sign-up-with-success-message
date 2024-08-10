// SELECTING ELEMENTS
const newsletterWindow = document.getElementById("newsletter-info-window");
const newsletterForm = document.getElementById("newsletter-form");
const errorMsg = document.getElementById("email-error-msg");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const successWindow = document.getElementById("success-window");
const acceptedEmail = document.getElementById("accepted-email");
const dismissBtn = document.getElementById("dismiss-btn");

// REGULAR EXPRESSION FOR THE EMAIL VALIDATION
const emailRegEx =
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)+|\[[\t -Z^-~]*])$/;

// FUNCTIONS
function emailValidation() {
    if (emailInput.value === "") {
        errorMsg.style.opacity = "1";
        errorMsg.textContent = "Email input must not be empty";
        emailInput.classList.add("invalid");
        return false;
    } else if (!emailRegEx.test(emailInput.value)) {
        errorMsg.style.opacity = 1;
        errorMsg.textContent = "Valid email required";
        emailInput.classList.add("invalid");
        return false;
    } else {
        errorMsg.style.opacity = 0;
        errorMsg.textContent = "Nice email!";
        emailInput.classList.remove("invalid");
        return true;
    }
}

function changeToNewsletterWindow() {
    successWindow.classList.toggle("hidden");
    newsletterWindow.classList.toggle("hidden");
}

function changeToSuccessWindow() {
    newsletterWindow.classList.toggle("hidden");
    successWindow.classList.toggle("hidden");
}

function setAcceptedEmailValue() {
    acceptedEmail.textContent = emailInput.value;
}

// ADDING EVENT LISTENERS
emailInput.addEventListener("input", emailValidation);

newsletterForm.addEventListener("submit", function (e) {
    if (emailValidation()) {
        e.preventDefault();
        setAcceptedEmailValue();
        changeToSuccessWindow();
    }
});

dismissBtn.addEventListener("click", function () {
    changeToNewsletterWindow();
});
