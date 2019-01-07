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
  <link rel="stylesheet" type="text/css" href="css/navbar.css?q=1.2">
  <link rel="stylesheet" type="text/css" href="css/normalize.css">
  <link rel="stylesheet" type="text/css" href="css/skeleton.css?q=1.30" title="default">
  <link rel="alternate stylesheet" type="text/css" href="css/darkmode.css?q=1.1" title="darkmode">
  <link rel="alternate stylesheet" type="text/css" href="css/cavendish.css?q=1" title="cavendish">
  <!--link rel="stylesheet" type="text/css" href="https://unpkg.com/tippy.js@3.3.0/dist/themes/light.css" id="default"-->
  <link rel="alternate stylesheet" type="text/css" href="https://unpkg.com/tippy.js@3.3.0/dist/themes/google.css" id="darkmode">
 

  

  <!-- Navbar & info icons
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

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

  
<!-- Navbar 
  ––––––––––––––––––––––––––––––––––––––––––––––– -->
  <?php include 'php/navbar.php'?>  

  <script>
      // Responsive goodness 
      function burgerMenu() {
        var x = document.getElementById("topnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    // Darkmode toggle
    var checkbox = document.querySelector("input[name=onoffswitch]");
    checkbox.addEventListener( 'change', themeToggle )
    function themeToggle() {
        if(this.checked) {
          setActiveStyleSheet('darkmode');
          //tippyThemeSetDark();
        } else {
          setActiveStyleSheet('default');
          //tippyThemeSetLight();
        }
      }
     // checks for darkmode cookie and toggles toggle switch on for consistent toggle state across a user's browser sessions 
    if (document.cookie.split(';').filter(function(item) {return item.indexOf('style=darkmode') >= 0}).length) {
      document.getElementById("onoffswitch").checked = true;
    }
  </script>
  <script>
    /*
    function tippyThemeSetDark(){
      var light = document.getElementById("tippy-light");
      light.disabled = true;
      var dark = document.getElementById("tippy-dark");
      dark.disabled = false;
      //sheet.parentNode.removeChild(sheet); 
    }

    function tippyThemeSetLight(){
      var lighter = document.getElementById("tippy-dark");
      lighter.disabled = true;
      var darker = document.getElementById("tippy-dark");
      darker.disabled = false;
      //sheet.parentNode.removeChild(sheet); 
    }

    */
  </script>


  <div id="container">
    <main>
    <br>

    <!-- TESTING
        –––––––––––––––––––––––––––––––––––––––––––––––––– 
    
     <a href="/ms/minesweeper.html" onclick="">Sweep</a>
     –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    
      
      <div class="main-section">
        <h1 class="main-heading">ScriptChecker</h1>
        <h5>A utility that exposes Mailchimp-specific technologies used on websites.</h5>
        <br>
        <br>
        <!-- Form
        –––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="form-section">
          <form id="siteForm" action="" method="POST">
            <span id="enterURL">Enter URL:&nbsp;</span>
            <input id="siteURL" type="url" name="siteURL" placeholder="https://example.com" maxlength="128" required="required">
            <span>&nbsp;</span>
            <input class="button-primary" type="submit" name="submit" onclick="" value="Fetch!">
          </form>
        </div>
        
        <script src="js/scripts.js"></script>

        <noscript>
          <span style="color:red; font-size:50px;"> &#9888; </span>
          <h5>Yeah, you're going to want to enable JavaScript if you want to use this utility.</h5>
        </noscript>

        <!-- AJAX CALL AND RETURN
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <script>
          
          $("#siteForm").on("submit", function (e) {  // on form submission call the function
            e.preventDefault();                 // prevent the html form's submit action from occurring
            $formURL = $("#siteForm").serialize();
            $.ajax({
              url: 'php/proxy.php',
              type: 'POST',
              dataType: 'text',
              data: $formURL,
              beforeSend: function () {   // controls ajax loader 
                $("#loader").show();
              },
              success: function (data) {
                $curlResponse = data;           // pass server data back into variable
                $parser = new DOMParser();
                $doc = $parser.parseFromString($curlResponse, "text/html");
                findUID();
                findMCJS();
                findCSPopup();
                findPopup();
                findEmbedded();
                findAnalytics();
                findPlatform();
                $(".description").hide();
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


        <script>
          // When the user clicks on info icon, open the popup
          function myFunction() {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
          }
        </script>


        
        <h6 class="description">Detect Connected Sites "mcjs" code, popup forms, embedded forms, account identification, e-commerce platforms, and
          Google Analytics.</h6>

        <!-- Table
      –––––––––––––––––––––––––––––––––––––––––––––––––– -->
      <div id="loader"></div>
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
                <td>Hashed User ID 
                  <span class="popup fas fa-info-circle" id="tooltip-hashed-user-id"></span>
                </td>
                <td headers="UID"></td>
              </tr>
              <tr class="hidden_row">
                <td>Connected Site 
                  <span class="fas fa-info-circle" id="tooltip-connected-site"></span>
                </td>
                <td headers="MCJS"></td>
              </tr>
              <tr class="hidden_row">
                <td>Popup Form (Connected Sites) 
                  <span class="fas fa-info-circle" id="tooltip-popup-form-connected-sites"></span>
                </td>
                <td headers="popup"></td>
              </tr>
              <tr class="hidden_row">
                <td>Popup Form (Standalone) 
                  <span class="fas fa-info-circle" id="tooltip-popup-form-standalone"></span>
                </td>
                <td headers="popup"></td>
              </tr>
              <tr class="hidden_row">
                <td>Embedded Form 
                  <span class="fas fa-info-circle" id="tooltip-embedded-form"></span>
                </td>
                <td headers="embedded"></td>
              </tr>
              <tr class="hidden_row">
                <td>Ecommerce Platform 
                  <span class="fas fa-info-circle" id="tooltip-ecommerce-platform"></span>
                </td>
                <td headers="ecomm"></td>
              </tr>
              <tr class="hidden_row">
                <td>Google Analytics 
                  <span class="fas fa-info-circle" id="tooltip-google-analytics"></span>
                </td>
                <td headers="GA"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
    
  <!-- Tooltip Library 
    ––––––––––––––––––––––––––––––––––––––––––––––– -->

  <script src="https://unpkg.com/tippy.js@3/dist/tippy.all.min.js"></script>
  <script src="/js/tooltips.js"></script>

</body>
</html>
