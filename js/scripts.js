var formURL, curlResponse, tempDiv, checkMCJS;

//-----------Returning UID--------------

function findUID() {
  var mcjsElement = $doc.getElementById("mcjs"); // checks for standard Connected Sites script (not Shopify version)
  if (mcjsElement == null) {
    var head = $doc.head.innerHTML;
    var regex = /\/(\w{25})(?:\\|\/)/g; // matches 25 character hexadecimal string beginning with a forward slash and ending with either a forward slash or backslash
    var mcjsDirty = head.match(regex);
    if (mcjsDirty != null) {
      var mcjsClean = mcjsDirty[0].replace(/\/|\\/g, ""); // cleans up the string to remove the forward and/or backslashes; this method helps prevent false positives for other 25 digit hexadecimal srings
      var uid = document.getElementById("myTable").rows[1].cells; // display MCAdmin hyperlinked UUID
      uid[1].innerHTML =
        '<a href="https://us1.admin.mailchimp.com/peaches2/tools/user-search/results?q=' +
        mcjsClean +
        '" ' +
        'target="_blank">' +
        "<b>" +
        mcjsClean +
        "</b>" +
        "</a>";
    } else {
      var uid = document.getElementById("myTable").rows[1].cells;
      uid[1].innerHTML = "Not Found";
    }
  } else if (mcjsElement != null) {
    var mcjsTextContent = mcjsElement.textContent;
    var mcjsSplit = mcjsTextContent.split("/");
    var mcjsUID = mcjsSplit[6];
    var length = mcjsUID.length;
    if (length == 25) {
      var uid = document.getElementById("myTable").rows[1].cells; // display MCAdmin hyperlinked UUID
      uid[1].innerHTML =
        '<a href="https://us1.admin.mailchimp.com/peaches2/tools/user-search/results?q=' +
        mcjsUID +
        '" ' +
        'target="_blank">' +
        "<b>" +
        mcjsUID +
        "</b>" +
        "</a>";
    }
  }
}

//-----------Connected Sites Script-----------

function findMCJS() {
  var head = $doc.head.innerHTML;
  var mcjs = head.match(/mcjs/);
  if (mcjs == "mcjs") {
    var mcjsFound = document.getElementById("myTable").rows[2].cells;
    mcjsFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank"><b>YES</b></a>';
  } else if (mcjs == null) {
    var mcjsNotFound = document.getElementById("myTable").rows[2].cells;
    mcjsNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank">Not Found</a>';
  }
}

//-----------Popup Script (Connected Sites)-----------
// coming soon


//----------Popup Script (Standalone) ------------

function findPopup() {
  var body = $doc.body.innerHTML;
  var popupForm = body.match(/signup-forms\/popup\/embed.js/); // MC Pop Up Form code
  if (popupForm == "signup-forms/popup/embed.js") {
    var popupFound = document.getElementById("myTable").rows[4].cells;
    popupFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank"><b>YES</b></a>';
  } else if (popupForm == null) {
    var popupNotFound = document.getElementById("myTable").rows[4].cells;
    popupNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank">Not Found</a>';
  }
} // TO DO: CONFIRM IF POPUP FORM CAN BE IN HEAD AS WELL AND ADD IF STATEMENT FOR SCENARIO

//-----------Embedded Script-----------

function findEmbedded() {
  var body = $doc.body.innerHTML;
  var embeddedForm = body.match(/mc-embed/); // MC Embedded Form script
  if (embeddedForm == "mc-embed") {
    var embeddedFound = document.getElementById("myTable").rows[5].cells;
    embeddedFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank"><b>YES</b></a>';
  } else if (embeddedForm == null) {
    var embeddedNotFound = document.getElementById("myTable").rows[5].cells;
    embeddedNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank">Not Found</a>';
  }
}

//-----------E-commerce Platform------------

function findPlatform() {
  var body = $doc.body.innerHTML;
  var platform = /shopify|bigcommerce|woocommerce|magento|prestashop|miva|squarespace|bigcartel|volusion|lemonstand|drupal|square/gi; //add new platforms here
  var findPlatform = body.match(platform);
  if (findPlatform == null) {
    var platformNotFound = document.getElementById("myTable").rows[6].cells;
    platformNotFound[1].innerHTML =
      '<a href="https://mailchimp.com/help/about-connected-sites/#connect+your+custom+website" target="_blank">Custom/Other</a>';
  } else {
    var platformName = findPlatform[0];
    var platformNameUppercase = platformName.toUpperCase();
    var platformFound = document.getElementById("myTable").rows[6].cells;
    platformFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=' +
      platformName +
      '" ' +
      'target="_blank">' +
      '<b>' +
      platformNameUppercase +
      '</b></a>';
  }
}

//-----------Google Analytics-----------
// add check for both head and body (some users may place in footer)
function findAnalytics() {
  var head = $doc.head.innerHTML;
  var body = $doc.body.innerHTML;
  var idSearch = /ua-\d{4,9}-\d{1,4}/ig
  var findIDHead = head.match(idSearch);
  var findIDBody = body.match(idSearch);
  if (findIDHead !== null){
    var trackingID = findIDHead[0];
    var analyticsFound = document.getElementById("myTable").rows[7].cells;
    analyticsFound[1].innerHTML =
    '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics' +
    '" ' +
    'target="_blank">' +
    '<b>' +
    trackingID +
    '</b></a>';        
  } else if (findIDBody !== null) {
    var trackingID = findIDBody[0];
    var analyticsFound = document.getElementById("myTable").rows[7].cells;
    analyticsFound[1].innerHTML =
    '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics' +
    '" ' +
    'target="_blank">' +
    '<b>' +
    trackingID +
    '</b></a>';
  } else {
      var analyticsNotFound = document.getElementById("myTable").rows[7].cells;
      analyticsNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics" target="_blank">Not Found</a>'; 
    }   
  }

//-----------Facebook Pixel-----------
// coming soon
