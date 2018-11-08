<?php // Notice me, Apache?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic Page Needs
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>ScriptChecker - Get Scripty</title>
  <meta name="description" content="ScriptChecker is a utility that exposes any Mailchimp-specific technologies used on websites">
  <meta name="author" content="Josh Brookshire">

  <!-- Mobile Specific Metas
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONTS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">

  <!-- CSS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/skeleton.css?q=ad" title="default">
  <link rel="alternate stylesheet" type="text/css" href="css/darkmode.css?q=1" title="darkmode">
  <link rel="alternate stylesheet" type="text/css" href="css/cavendish.css?q=1" title="cavendish"> 
 

  <!-- Favicon
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/script-favicon.png">

<!-- CSS Styleswitcher and cookie set
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="/js/styleswitcher.js"></script>

  <!-- Load Jquery
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-81785500-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-81785500-2');
  </script>
</head>

<body onload="searchParam()">

<!-- BEGIN NAVBAR EXPERIMENTAL
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<style>
  ul.topnav {
      list-style-type: none;
      padding: 0;
      overflow: hidden;
      background-color: #333;
      margin: -8px;
     
  }

  ul.topnav li {
      float: left;
  }

   ul.topnav li.right {
      float: right;
  }

  ul.topnav li a, .dropbtn {
      display: flex;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      
  }

  ul.topnav li a:hover, .dropdown:hover .dropbtn {
      background-color: grey;
  }

  ul.topnav li.dropdown {
      display: inline-block;
  }

  ul.topnav .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      
  }

  ul.topnav .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
  }

  ul.topnav .dropdown-content a:hover {background-color: #f1f1f1}

  ul.topnav .dropdown:hover .dropdown-content {
      display: block;
  }
</style>

  <ul class="topnav">
    <li><a class="active" href="https://asta.rsglab.com/projects/ScriptChecker/">ScriptChecker</a></li>
    <li><a href="https://asta.rsglab.com/projects/biff/check.php">DNSChecker</a></li>
    <li><a href="https://asta.rsglab.com/projects/stuu/">EchoComm</a></li>
    <li><a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/">S.T.A.R. Search</a></li>
    <li><a href="https://us1.admin.mailchimp.com/peaches2/support/">MCAdmin</a></li>
    <li class="dropdown right">
      <a href="javascript:void(0)" class="dropbtn">Feedback</a>
      <div class="dropdown-content">
        <a href="mailto:jbrookshire@rsglab.com?subject=ScriptChecker%20Feedback" target="_blank">Email</a>
        <a href="https://github.com/strangelights/ScriptChecker/issues" target="_blank">GitHub</a>
      </div>
    </li>
  </ul>

<!-- End NAVBAR EXPERIMENTAL
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->


  <div id="container">
    <main>
    <br>
    <!-- Button TESTING
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <div class="btn-group">
        <button href="#" onclick="setActiveStyleSheet('cavendish'); return false;">Cavendish</button>
        <button href="#" onclick="setActiveStyleSheet('default'); return false;">Light</button>
        <button href="#" onclick="setActiveStyleSheet('darkmode'); return false;">Dark</button>
      </div>

     <a href="/ms/minesweeper.html" onclick="">Sweep</a>




      
      <div class="main-section">
        <h1 class="main-heading">ScriptChecker</h1>
        <h5>A utility that exposes Mailchimp-specific technologies used on websites.</h5>
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
            e.preventDefault();                 // prevent the html form's submit action from occurring
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

  <!-- Allow form submission via url variable
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <script>
          function searchParam() { 
            let queryURL = window.location.href;

            if (queryURL.match(/[?]/)){ // suppresses console alert if query isn't given directly in url
                let queryString = window.location.href.split('?'); // isolate string to the right of the '?'
                queryString = queryString[1].split('='); // isolate string to the right of the '=' 
                // The above could be reduced down to a single line but splitting at both the '?' and '=' helps confirm that proper key/value syntax is used for query.
                let decodedString = decodeURIComponent(queryString[1]); // Removes url encoding caused by Google Omnibox
                // if (!/^https?:\/\//i.decodeString(url)) {
                //   var url = 'http://' + url;  FIX THIS TO PREPEND HTTP IF NECESSARY
                  // }
                document.getElementById('siteURL').value = decodedString;
            }
          }
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
  </div>
</body>

</html>
