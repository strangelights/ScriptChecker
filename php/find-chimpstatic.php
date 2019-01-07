<?php 

// this file will serve up the contents of the chimpstatic.com script, scraped via cURL and pass it back to the front end via AJAX within the findCSPopup() function.

$dirtyURL = $_POST["url"];
$cleanURL = stripcslashes($dirtyURL); // chimpstatic url may come through with backslashes that can affect the curl request. This prevents that.

$ch = curl_init("$cleanURL");
$timeout = 5;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_FAILONERROR,TRUE);   
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout); // timeout set to 5 seconds
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);  // follow any 301 redirects to their destination
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'); //prevent 403 errors (current version of chrome)

$chimpstaticContent = curl_exec($ch);

if (curl_errno($ch)) {
    echo "Oops! Something went wrong!" . curl_error($ch); // check for execution errors
}

curl_close($ch);

echo $chimpstaticContent; // This should be the full contents of the chimpstatic.js file
 ?>