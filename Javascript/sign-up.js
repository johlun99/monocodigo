var username;
var email;
var password;

$(document).ready(() => {
    $("#username").focus();
});

$("#sign-up-form").submit((e) => {
    e.preventDefault();
    
    if (validateForm()) {
        registerUser();
    }
});

function registerUser() {
    $.post("Php/Ajax/sign-up.php",
        {
            username: username,
            email: email,
            password: password
        },
        function(data, status) {
            printError("Status:<br>" + status + "<br>Data:<br>" + data);
        }).done(() => {
            alert("Registration done!");
        });
}

function validateForm() {
    username = $("#username").val();
    email = $("#email").val();
    password = $("#password").val();

    var rePassword = $("#re-password").val();
    var valid = true;

    if (username.length < 5) {
        printError("Username must be at least 5 characters long");
        $("#username").focus();

        $("#pasword").val("");
        $("#re-password").val("");

        valid = false;
    } else if (!isEmail(email)) {
        printError("That doesn't look like a real email address");
        $("#email").focus();

        $("#password").val("");
        $("#re-password").val("");

        valid = false;
    } else if (password.length < 7) {
        printError("Your password must be at least 7 characters long");

        $("#re-password").val("");
        $("#password").val("").focus();

        valid = false;
    } else if (password != rePassword) {
        printError("Your passwors doesn't match");

        $("#password").val("").focus();
        $("#re-password").val("");

        valid = false;
    }

    return valid;
}