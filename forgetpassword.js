const forgotPasswordForm = document.getElementById("forgot-password-form");

forgotPasswordForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// Code to send email goes here
	alert("An email has been sent to your email address with instructions to reset your password.");
});
