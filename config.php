<?php

// $pageurl = "http://".$_SERVER["SERVER_NAME"]."/dev"; // Production
$pageurl = "../b3-marketing"; // Development

$url = explode('/', $_GET['cod']);
$page = $url["0"];
$subpage = $url["1"];

if($page == NULL){
	$page = "home";
}

if (!is_file("pages/".$page.".php")) { $page = "404"; }

switch($page){
	case "404":
		$title = "Página não encontrada";
		$description = "Infelizmente essa página não foi encontrada.";
		break;

	case "home":
		$title = "b3 marketing";
		$description = "Agência de marketing para indústrias";
		break;

	default:
		$title = "b3 marketing";
		$description = "";
		break;
}

?>