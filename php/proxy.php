<?php 

// this page will serve up HTML scraped via the form handler PHP and pass it back to the front end via AJAX

// retrieve the form data by using the element's name attributes value as key 
$site = $_POST["siteX"];

$ch = curl_init("$site");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch,CURLOPT_FAILONERROR,TRUE);

// execute!
$response = curl_exec($ch);

if(curl_errno($ch)) {
	echo "<html><body><p>you fucked up</p></body></html>" . curl_error($ch); // check for execution errors
} 

// close the connection, release resources used
curl_close($ch);

// do anything you want with your response

echo "$response";




 ?>

