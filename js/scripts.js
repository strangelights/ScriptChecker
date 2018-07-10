function getURL(){
	$.post("form-handler.php", 
		function (result) {

			// look for the #resource id and replace the HTML content with what's returned
			$('#resource').replaceWith(result);

		}); // close the .post code block
}