<?php
if(isset($_POST['name'])) {
	$name = $_POST['name'];
	$mail= $_POST['mail'];
	$text= $_POST['text'];

	echo $name.$mail.$text;
}
?>