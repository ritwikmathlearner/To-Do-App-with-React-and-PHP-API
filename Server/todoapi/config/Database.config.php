<?php
class Database{
    private $server = "127.0.0.1";
    private $dbname = "todo";
    private $user = "root";
    private $password = "";
    private $conn;

    public function connect(){
        try{
            $this->conn = new PDO('mysql:host='. $this->server .';dbname='. $this->dbname, $this->user, $this->password);
        }
        catch(PDOException $e) {
            echo 'Connection Error: '. $e->getMessage();
        }
        // print_r($this->conn);
        return $this->conn;
    }
}