<?php

$recepient = "wrosoha@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["comment"]);
$message = "Имя: $name \nEmail: $email \nТекст: $comment";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");