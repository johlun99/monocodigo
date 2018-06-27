<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$data = array();

$data[] = array("Username", $username);
$data[] = array("Email", $email);
$data[] = array("Password", $password);

echo json_encode($data);