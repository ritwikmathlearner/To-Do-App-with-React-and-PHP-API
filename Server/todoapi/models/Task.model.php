<?php
require_once '../config/Database.config.php';
class Task {
    //Task elements
    public $id;
    public $name;
    //Database elements
    private $conn;
    private $table = 'Tasks';
    //Constructor
    public function __construct(){
        $db = new Database();
        $this->conn = $db->connect();
        // print_r($this->conn);
    }

    public function read(){
        $sql = 'select * from '. $this->table;
        $statement = $this->conn->prepare($sql);
        $statement->execute();
        return $statement;
    }

    public function create(){
        $sql = 'insert into '. $this->table .' set name= :name';
        $statement = $this->conn->prepare($sql);
        $this->name = htmlspecialchars(strip_tags($this->name));
        $statement->bindparam(':name', $this->name);
        if($statement->execute()){
            return true;
        } else {
            printf("Error: %s.\n", $statement->error);
            return false;
        }
    }

    public function delete(){
        $sql = 'DELETE FROM '. $this->table .' WHERE name= :name';
        $statement = $this->conn->prepare($sql);
        $this->id = htmlspecialchars(strip_tags($this->name));
        $statement->bindParam(':name', $this->name);
        if($statement->execute()) {
            return true;
        } else {
            printf("Error: %s.\n", $statement->error);
            return false;
        }
    }
}