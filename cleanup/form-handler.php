<?php
// Check if the form is submitted 
if ( isset( $GET["POST"] ) ) { 
// retrieve the form data by using the element's name attributes value as key 
$site = $POST["site"]; 
// display the results
echo "You entered: >" . $site;
//echo $_REQUEST['site']; 
exit; 
}
?>