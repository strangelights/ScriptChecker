
    var $formURL,
        $curlResponse,
        $tempDiv,
        $checkMCJS;

   //-----------Returning UID------------

    function findUID(){
      var $mcjsElement = $doc.getElementById('mcjs'); // checks for standard Connected Sites script (not Shopify version)
      if ($mcjsElement == null){
        var $head = $doc.head.innerHTML;
        var $mcjs = $head.match(/mcjs/);
        var test = $mcjs.index;
        // console.log($mcjs);
        // console.log(test);
          var $head = $doc.head.innerHTML;
          var $mcjs = $head.match(/mcjs/);
      } else{
      var $mcjsTextContent = $mcjsElement.textContent;
      var $mcjsSplit = $mcjsTextContent.split("/");
      var $mcjsUID = $mcjsSplit[6]
      var $length = $mcjsUID.length;
      if ($length == 25){
        var $uid = document.getElementById("myTable").rows[1].cells;
        $uid[1].innerHTML = '<a href="https://us1.admin.mailchimp.com/peaches2/tools/user-search/results?q=' + $mcjsUID + '" ' + 'target="_blank">' + '<b>' + $mcjsUID + '</b>' + '</a>';
              } 
            }  
    }

   //-----------Connect Sites Script-----------

      function findMCJS(){
        var $head = $doc.head.innerHTML;
        var $mcjs = $head.match(/mcjs/);
        if ($mcjs == "mcjs"){
          var $mcjsFound = document.getElementById("myTable").rows[2].cells;
          $mcjsFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank"><b>YES</b></a>';
        } else if ($mcjs == null){
          var $mcjsNotFound = document.getElementById("myTable").rows[2].cells;
          $mcjsNotFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank">Not Found</a>';
        }

      }

    //----------Popup Script------------
    
    function findPopup(){
      var $body = $doc.body.innerHTML;
      var $popupForm = $body.match(/signup-forms\/popup\/embed.js/); // MC Pop Up Form code
      if ($popupForm == "signup-forms/popup/embed.js"){
        var $popupFound = document.getElementById("myTable").rows[3].cells;
        $popupFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank"><b>YES</b></a>';
      } else if ($popupForm == null){
          var $popupNotFound = document.getElementById("myTable").rows[3].cells;
        $popupNotFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank">Not Found</a>';
      }
    } // TO DO: CONFIRM IF POPUP FORM CAN BE IN HEAD AS WELL AND ADD IF STATEMENT FOR SCENARIO


    //-----------Embedded Script-----------

    function findEmbedded(){
      var $body = $doc.body.innerHTML;
      var $embeddedForm = $body.match(/mc-embed/); // MC Embedded Form script
      if ($embeddedForm == 'mc-embed') {
        var $embeddedFound = document.getElementById("myTable").rows[4].cells;
        $embeddedFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank"><b>YES</b></a>';
      }else if ($embeddedForm == null) {
        var $embeddedNotFound = document.getElementById("myTable").rows[4].cells;
        $embeddedNotFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank">Not Found</a>';
      }
    }

     //-----------E-commerce Platform-----------

      function findPlatform(){
        var $body = $doc.body.innerHTML;
        var platform = "Shopify";
        function eachPlatform(){
            var $findPlatform = $body.match(platform, "i"); // Find Shopify
            console.log($findPlatform);
            if ($findPlatform == platform) {
              var $platformFound = document.getElementById("myTable").rows[5].cells;                      
              $platformFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=' + platform + '" ' + 'target="_blank">' + '<b>' + platform + '</b></a>';
            }else if ($findPlatform == null) {
              var $platformNotFound = document.getElementById("myTable").rows[5].cells;
              $platformNotFound[1].innerHTML = '<a href="https://mailchimp.com/help/about-connected-sites/#connect+your+custom+website" target="_blank">Custom/Other</a>';
            }
        }
        eachPlatform();
        //platform = "Magento";
        //eachPlatform();
      
      }  // turn this into for loop and new function for fidinding platform instead of finding each platform separately

        /*
        if () {

        }else if () {

        }else if () {

        }else if () {

        }else {

        }
     

     */


      //-----------Google Analytics-----------

      function findAnalytics(){
        var $head = $doc.head.innerHTML;
        var $findUA = $head.match(/UA-/);
        if ($findUA == "UA-"){
          var $analyticsFound = document.getElementById("myTable").rows[6].cells;
          $analyticsFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics" target="_blank"><b>YES</b></a>';

        }else if ($findUA == null){
          var $analyticsNotFound = document.getElementById("myTable").rows[6].cells;
          $analyticsNotFound[1].innerHTML = '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics" target="_blank">Not Found</a>';

        }
      }
   