var formURL, curlResponse, tempDiv, checkMCJS;

//-----------Returning UID--------------

function findUID() {
  console.log("Full html of target site: ", $doc);
  var mcjsElement = $doc.getElementById("mcjs"); // checks for standard Connected Sites script (not Shopify version)
  if (mcjsElement == null) {
    var head = $doc.head.innerHTML;
    var body = $doc.body.innerHTML;
    var regex = /\/(\w{25})(?:\\|\/)/g; // matches 25 character hexadecimal string beginning with a forward slash and ending with either a forward slash or backslash
    var mcjsDirtyHead = head.match(regex);
    var mcjsDirtyBody = body.match(regex);
    if (mcjsDirtyHead != null) {
      var mcjsClean = mcjsDirtyHead[0].replace(/\/|\\/g, ""); // cleans up the string to remove the forward and/or backslashes; this method helps prevent false positives for other 25 digit hexadecimal srings
      var uid = document.getElementById("myTable").rows[1].cells; // display MCAdmin hyperlinked UUID
      uid[1].innerHTML =
        '<a href="https://us1.admin.mailchimp.com/peaches2/tools/user-search/results?q=' +
        mcjsClean +
        '" ' +
        'target="_blank">' +
        '<b>' +
        mcjsClean +
        '</b></a>' +
        '<span class="success-icon">👍</span>';
    } else if (mcjsDirtyBody != null) {
      var mcjsClean = mcjsDirtyBody[0].replace(/\/|\\/g, ""); // cleans up the string to remove the forward and/or backslashes; this method helps prevent false positives for other 25 digit hexadecimal srings
      var uid = document.getElementById("myTable").rows[1].cells; // display MCAdmin hyperlinked UUID
      uid[1].innerHTML =
        '<a href="https://us1.admin.mailchimp.com/peaches2/tools/user-search/results?q=' +
        mcjsClean +
        '" ' +
        'target="_blank">' +
        '<b>' +
        mcjsClean +
        '</b></a>' +
        '<span class="success-icon">👍</span>';
    } else {
      var uid = document.getElementById("myTable").rows[1].cells;
      uid[1].innerHTML = 'Not Found <span class="failure-icon">👎</span>';
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
        '<b>' +
        mcjsUID +
        '</b></a>' +
        '<span class="success-icon">👍</span>';
    }
  }
}

//-----------Connected Sites Script-----------

function findMCJS() {
  var head = $doc.head.innerHTML;
  var body = $doc.body.innerHTML;
  var mcjsHead = head.match(/mcjs/);
  var mcjsBody = body.match(/mcjs/);
  if (mcjsHead == "mcjs") {
    var mcjsFound = document.getElementById("myTable").rows[2].cells;
    mcjsFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank"><b>Found in &lt;head&gt;</b></a><span class="success-icon">👍</span>';
  } else if (mcjsBody == "mcjs") {
    var mcjsFound = document.getElementById("myTable").rows[2].cells;
    mcjsFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank"><b>Found in &lt;body&gt;</b></a><span class="success-icon">👍</span>';
  } else {
    var mcjsNotFound = document.getElementById("myTable").rows[2].cells;
    mcjsNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=connected+sites" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
  }
}

//-----------Popup Script (Connected Sites)-----------

function findCSPopup(){
  var head = $doc.head.innerHTML;
  var body = $doc.body.innerHTML;
  var grabChimpstatic = /(?:https:(?:\\|\/)(?:\\|\/)chimpstatic.com(?:\\|\/)mcjs-connected(?:\\|\/)js(?:\\|\/)users(?:\\|\/)(\w{25})(?:\\|\/)(\w{25}).js)|(https:(?:\\|\/)(?:\\|\/)(?:\\|\/)(?:\\|\/)chimpstatic.com(?:\\|\/)(?:\\|\/)mcjs-connected(?:\\|\/)(?:\\|\/)js(?:\\|\/)(?:\\|\/)users(?:\\|\/)(?:\\|\/)(\w{25})(?:\\|\/)(?:\\|\/)(\w{25}).js)/gi;
  var csPopupFormHead = head.match(grabChimpstatic);
  var csPopupFormBody = body.match(grabChimpstatic);
  if (csPopupFormHead != null){
    var chimpstaticURL = csPopupFormHead[0];
  } else if (csPopupFormBody != null) {
    var chimpstaticURL = csPopupFormBody[0];
  } else {
    var csPopupNotFound = document.getElementById("myTable").rows[3].cells;
    csPopupNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
  }

  $.ajax({
    url: 'php/find-chimpstatic.php',
    type: 'POST',
    dataType: 'text',
    data:{url: chimpstaticURL},
    success: function (data) {
      $curlResponse = data;           // pass server data back into variable
      $parser = new DOMParser();
      $doc = $parser.parseFromString($curlResponse, "text/html");
      console.log("Content of Chimpstatic file: ", $doc);
      var chimpstaticRegex = /popup_form.installed = true/gi;
      var csPopupFound = $doc.body.innerText.match(chimpstaticRegex);
      if (csPopupFound == "popup_form.installed = true"){
        var csPopupNotFound = document.getElementById("myTable").rows[3].cells;
        csPopupNotFound[1].innerHTML =
          '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank"><b>Found in script</b></a><span class="success-icon">👍</span>';
      } else {
        var csPopupNotFound = document.getElementById("myTable").rows[3].cells;
        csPopupNotFound[1].innerHTML =
          '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
      }
    },
    error: function () {
      alert("There was an error. Please try again."); // In case of server error
    }
  });

}




//----------Popup Script (Standalone) ------------

function findPopup() {
  var head = $doc.head.innerHTML;
  var body = $doc.body.innerHTML;
  var formPath = /signup-forms\/popup\/embed.js|signup-forms\/popup\/unique-methods\/embed.js/g
  // 'unique-methods' directory was added to file path in late 2018 but old forms may still reference the old path. Leaving both for good measure.
  var popupFormHead = head.match(formPath);
  var popupFormBody = body.match(formPath);
  if (popupFormHead !== null) {
    var popupFound = document.getElementById("myTable").rows[4].cells;
    popupFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank"><b>Found in &lt;head&gt;</b></a><span class="success-icon">👍</span>';
  } else if (popupFormBody !== null) {
    var popupFound = document.getElementById("myTable").rows[4].cells;
    popupFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank"><b>Found in &lt;body&gt;</b></a><span class="success-icon">👍</span>';
  } else {
    var popupNotFound = document.getElementById("myTable").rows[4].cells;
    popupNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=popup+form" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
  }
} 

//-----------Embedded Script-----------

function findEmbedded() {
  var body = $doc.body.innerHTML;
  var embeddedForm = body.match(/mc-embed/); // MC Embedded Form script
  if (embeddedForm == "mc-embed") {
    var embeddedFound = document.getElementById("myTable").rows[5].cells;
    embeddedFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank"><b>YES</b></a><span class="success-icon">👍</span>';
  } else if (embeddedForm == null) {
    var embeddedNotFound = document.getElementById("myTable").rows[5].cells;
    embeddedNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=embedded+form" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
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
      '<a href="https://mailchimp.com/help/about-connected-sites/#connect+your+custom+website" target="_blank">Custom/Other</a><span class="question-icon">🤙</span>';
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
      '</b></a>' +
      '<span class="success-icon">👍</span>';
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
  if (findIDHead !== null) {
    var trackingID = findIDHead[0];
    var analyticsFound = document.getElementById("myTable").rows[7].cells;
    analyticsFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics' +
      '" ' +
      'target="_blank">' +
      '<b>' +
      trackingID +
      '</b></a>' +
      '<span class="success-icon">👍</span>';
  } else if (findIDBody !== null) {
    var trackingID = findIDBody[0];
    var analyticsFound = document.getElementById("myTable").rows[7].cells;
    analyticsFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics' +
      '" ' +
      'target="_blank">' +
      '<b>' +
      trackingID +
      '</b></a>' +
      '<span class="success-icon">👍</span>';
  } else {
    var analyticsNotFound = document.getElementById("myTable").rows[7].cells;
    analyticsNotFound[1].innerHTML =
      '<a href="https://asta.rsglab.com/projects/SpeedRacer/12monkeys/?q=Google+Analytics" target="_blank">Not Found</a><span class="failure-icon">👎</span>';
  }
}

//-----------Facebook Pixel-----------
// coming soon
