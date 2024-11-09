$(document).ready(function () {
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        const fullName = $('#exampleInputFname1').val();
        const email = $('#exampleInputEmail1').val();

        if (fullName && email) {
            alert(`Registration Successful! Name: ${fullName}, Email: ${email}`);
        } else {
            alert('Please fill in all required fields.');
        }
    });
});