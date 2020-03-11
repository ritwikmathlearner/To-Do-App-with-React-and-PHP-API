<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../models/Task.model.php';

$task = new Task();

$result = $task->read();

$count = $result->rowCount();

if($count > 1){
    $task_arr = array();
    foreach($result->fetchAll(PDO::FETCH_ASSOC) as $row){
        extract($row);
        $task_item = [
            'name' => $name
        ];
        array_push($task_arr, $task_item);
    }
    echo json_encode($task_arr);
} else {
    echo json_encode(
        array('message'=>'no tasks found')
    );
}