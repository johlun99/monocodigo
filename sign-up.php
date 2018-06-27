<?php
require_once("Config/page-config.php");
echo START;

echo INCLUDES;

echo BODY;

require_once("Content/navbar-signed-out.html");
require_once("Content/sign-up.html");

echo JS;
echo "<script src='Javascript/sign-up.js'></script>";

echo END;