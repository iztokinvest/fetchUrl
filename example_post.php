<?php

$post = json_decode(file_get_contents("php://input"));

echo json_encode(['function' => ['test', [1, 2]]]);