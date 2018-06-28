<?php
class DbHandler {
    private $host;
    private $user;
    private $pass;
    private $dsn;

    protected $db;
    protected $connection;

    function __construct() {
        $this->dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";";
    }

    function __destruct() {

    }
}