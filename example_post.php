<?php

$post = json_decode(file_get_contents("php://input"));

echo json_encode(['alert' => 'Message text', 'display' => $post->testInput]);
