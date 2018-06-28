function printError(msg) {
    $(".alert").slideUp(300);
    $(".alert-danger").empty().append(msg).slideDown(300);
}

function printSuccess(msg) {
    $(".alert").slideUp(300);
    $(".alert-success").empty().append(msg).slideDown(300);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }