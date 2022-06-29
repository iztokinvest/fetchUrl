<?php

$post = json_decode(file_get_contents("php://input"));

if ($post->testInput == 'test') {
	$result = ['display' => $post->testInput];
} else {
	$result = ['confirm' => 'Message is not "test". Are you sure?', 'display' => $post->testInput];
}

echo json_encode($result);
