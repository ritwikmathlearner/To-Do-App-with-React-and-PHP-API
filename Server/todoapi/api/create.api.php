<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../models/Task.model.php';

$task = new Task();

$data = json_decode(file_get_contents("php://input"));

$task->name = $data->name;

if($task->create()) {
    echo json_encode(
        array(
            'message' => 'Task created'
        )
    );
} else {
    echo json_encode(
        array(
            'error' => 'Task not created'
        )
    );
}