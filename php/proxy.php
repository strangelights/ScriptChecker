<<?php 

// this page will serve up HTML scraped via the form handler PHP and pass it back to the front end via AJAX

// retrieve the form data by using the element's name attributes value as key 
$site = $_POST["site"];

echo "You entered:" . "$site";

$ch = curl_init("$site");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

// execute!
$response = curl_exec($ch);


// check for execution errors

if(curl_errno($ch)) {
	echo "Whoops something went wrong! " . curl_error($ch);
	exit;
}

// close the connection, release resources used
curl_close($ch);

// do anything you want with your response
echo "$response";



 ?>