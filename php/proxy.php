<?php 

// this page will serve up HTML scraped via cURL and pass it back to the front end via AJAX

$site = $_POST["siteURL"];

$ch = curl_init("$site");
$timeout = 5;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FAILONERROR,TRUE);   
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout); // timeout set to 5 seconds
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);  // follow any 301 redirects to their destination
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'); //prevent 403 errors (current version of chrome)

$response = curl_exec($ch);

if(curl_errno($ch)) {
	echo "Oops! Something went wrong!" . curl_error($ch); // check for execution errors
}

curl_close($ch);

echo $response;

 ?>


