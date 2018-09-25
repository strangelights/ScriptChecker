<?php // Notice me, Apache?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic Page Needs
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>ScriptChecker - Get Scripty</title>
  <meta name="description" content="ScriptChecker is a utility that exposes any MailChimp-specific technologies used on websites">
  <meta name="author" content="Josh Brookshire">

  <!-- Mobile Specific Metas
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONTS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  <!-- CSS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css?q=y">
  <!--<link rel="stylesheet" href="css/rolodex.css?q=d">-->


  <!-- Favicon
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/script-favicon.png">

  <!-- Load Jquery
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
  <div id="container">
    <main>
      <!-- Heading
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <div class="main-section">
        <h1 class="main-heading">ScriptChecker</h1>
        <h5>A utility that exposes MailChimp-specific technologies used on websites.</h5>
        <h6>Detect Connected Sites "mcjs" code, popup forms, embedded forms, account identification, e-commerce platforms, and
          Google Analytics.</h6>
        <br>

        <!-- Form
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="form-section">
          <form id="siteForm" action="" method="POST">
            <span>Enter URL:&nbsp;</span>
            <input id="siteURL" type="url" name="siteURL" placeholder="https://example.com" maxlength="128" required="required">
            <span>&nbsp;</span>
            <input class="button-primary" type="submit" name="submit" onclick="" value="Fetch!">
          </form>
        </div>

        <script src="js/scripts.js"></script>


        <!-- AJAX CALL AND RETURN
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <script>
          
          $("#siteForm").on("submit", function (e) {  // on form submission call the function
            e.preventDefault();                 // prevent the html form's submit action from occurring (see p.395 of Duckett)
            $formURL = $("#siteForm").serialize();
            $.ajax({
              url: 'php/proxy.php',
              type: 'POST',
              data: $formURL,
              beforeSend: function () {   // controls ajax loader 
                $("#loader").show();
              },
              success: function (data) {
                $curlResponse = data;           // pass server data back into variable
                $parser = new DOMParser();
                $doc = $parser.parseFromString($curlResponse, "text/html");
                console.log($doc);
                findUID();
                findMCJS();
                findPopup();
                findEmbedded();
                findAnalytics();
                findPlatform();
                $("#loader").hide();
                $('.hidden_row td').slideDown();

              },
              error: function () {
                alert("There was an error. Please try again."); // In case of server error
              }
            });
          });
          
        </script>

        <div id="loader"></div>

        <!-- Table
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="table-section">
          <table id="myTable" class="table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="hidden_row">
                <td>Hashed User ID</td>
                <td headers="UID"></td>
              </tr>
              <tr class="hidden_row">
                <td>Connected Site</td>
                <td headers="MCJS"></td>
              </tr>
              <tr class="hidden_row">
                <td>Popup Form</td>
                <td headers="popup"></td>
              </tr>
              <tr class="hidden_row">
                <td>Embedded Form</td>
                <td headers="embedded"></td>
              </tr>
              <tr class="hidden_row">
                <td>Ecommerce Platform</td>
                <td headers="ecomm"></td>
              </tr>
              <tr class="hidden_row">
                <td>Google Analytics</td>
                <td headers="GA"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <footer>
      <div id="footer">
        <a href="https://github.com/strangelights/ScriptChecker">
          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub Logo" title="Git in the car nerd!" style="height:25px;">
          <p>
            <a href="mailto:jbrookshire@rsglab.com?subject=ScriptChecker%20Bug%20Report">Report an issue</a>
          </p>
      </div>
    </footer>
  </div>
</body>

</html>
