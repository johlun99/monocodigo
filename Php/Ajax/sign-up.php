<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$data;

if (!isset($username) ||
    !isset($email) ||
    !isset($password)) {
    $data = array("Failure", "Couldn't receive all information");
} else if (strlen($username) < 3) {
    $data = array("Failure", "Username is too short");
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $data = array("Failure", "Invalid email format");
} else if (strlen($password) < 7) {
    $data = array("Failure", "Password is to short");
} else {
    $data = array("Success", "Creating user");
}

echo json_encode($data);