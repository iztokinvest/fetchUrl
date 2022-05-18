<?php

$post = json_decode(file_get_contents("php://input"));

echo json_encode(['msg' => 'Message text']);

// ['msg' => 'Message text'] - Success message
// ['error' => 'Error text'] - Error message
// If function exists showAlert(alertType, Message) then alert(Message)