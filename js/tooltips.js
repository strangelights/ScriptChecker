
    tippy.setDefaults({
      a11y: false,
      allowHTML: true,
      animation: 'shift-toward',
      arrow: true,
      arrowType: 'sharp',
      duration: 0,
      distance: 20,
      inertia: true,
      interactive: true,
      interactiveBorder: 0,
      maxwidth: '700px',
      offset: 50,
      placement: 'top-start',
      size: 'large',
      theme: 'light',
      trigger: 'click'  
    })

	// Hashed User ID Tooltip:

    tippy('#tooltip-hashed-user-id', { 
	  content: 
	  
	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>The hashed User ID can be found within the Connected Sites script as the first of two 25-digit hexdecimal strings that make up part of the chimpstatic.com url.</div>' +
	
	  '<div class="tooltip-snippet">&lt;script id=&quot;mcjs&quot;&gt;!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,&quot;script&quot;,&quot;https://chimpstatic.com/mcjs-connected/js/users/<span class="tooltip-note">219ec3282ae742b42f62a07e8</span>/f660b56ff295be3ad55969481.js&quot;);&lt;/script&gt;</div>' +
	  '</div>' 
	})
	
	// Connected Sites Tooltip:

    tippy('#tooltip-connected-site', { 
	  content: 
	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>The Connected Sites script can usually be found just before the closing &lt;\/head&gt; tag but some integrations may place it inside the &lt;body&gt tags of the page.</div>' +
	  
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Its syntax can vary slightly based on how it was added - manually or via an integration, but typically looks like the code snippet below.</div>' +
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>When viewing the Page Source, cmd+f and try searching for <span class="tooltip-keyword">\"chimpstatic\"</span> or <span class="tooltip-keyword">\"mcjs\"</span> to locate script.</div>' + 
	
	
	  '<div class="tooltip-snippet">&lt;script id=&quot;mcjs&quot;&gt;!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,&quot;script&quot;,&quot;https://chimpstatic.com/mcjs-connected/js/users/219ec3282ae742b42f62a07e8/f660b56ff295be3ad55969481.js&quot;);&lt;/script&gt;</div>' +
	  '</div>' 
	})

	// Popup Form (Connected Sites) Tooltip:

    tippy('#tooltip-popup-form-connected-sites', { 
	  content: 
	  '<div class="tooltip">' +
	  
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>In addition to the standalone code, popup forms can be added through the Connected Sites script. To confirm if a form is being added through this method, use the <a href="https://developers.google.com/web/tools/chrome-devtools/sources" target="_blank">Sources</a> tab in a browser\'s dev tools to view the chimpstatic.com script.</div>' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>The content of this file can vary widely based on what feature are enabled via Connected Sites, but the value of "true" in the line <span class="tooltip-keyword">window.$mcSite.popup_form.installed = true;</span> should be the only relevant code to confirm the presence of a popup form.</div>' +
	  
	  '</div>'
	})

	// Popup Form (Standalone) Tooltip:

    tippy('#tooltip-popup-form-standalone', { 
	  content: 
	  
	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Popup form code can be placed anywhere within the &lt;head&gt; or &lt;body&gt tags of the page and typically looks like the code snippet below.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>When viewing the Page Source, cmd+f and try searching for <span class="tooltip-keyword">\"mailchimp\"</span> or <span class="tooltip-keyword">\"embed\"</span> to locate form.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Note that the hashed User ID ("uuid") and List ID ("lid") are referenced within the script.</div>' +
	
	  '<div class="tooltip-snippet">&lt;script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"&gt;&lt;/script&gt;&lt;script type="text/javascript"&gt;window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us13.list-manage.com",<span class="tooltip-note">uuid":"219ec3282ae742b42f62a07e8"</span>,<span class="tooltip-note">"lid":"314b2fff57"</span>,"uniqueMethods":true}) })&lt;/script&gt;</div>' +
	  '</div>'
	  
	})
	
	// Embedded Form Tooltip:

    tippy('#tooltip-embedded-form', { 
	  content: 
	  
	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Embedded form code can be placed anywhere within the &lt;body&gt tags of the page and can vary in code style and appearance but with several identifying characteristics outlined below.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>When viewing the Page Source, cmd+f and try searching for <span class="tooltip-keyword">\"mc_embed\"</span> or <span class="tooltip-keyword">\"mc-embedded\"</span> to locate form.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Note the Shard, hashed User ID (u=) and List ID (id=) referenced within the <a href="https://mailchimp.com/help/host-your-own-signup-forms/" target="_blank">form action url</a>.</div>' +
	
	  `<div class="tooltip-snippet">&lt;!-- Begin Mailchimp Signup Form --&gt;
	  &lt;link href=&quot;//cdn-images.mailchimp.com/embedcode/slim-10_7.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;
	  &lt;style type=&quot;text/css&quot;&gt;
	  &#x9;#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	  &#x9;/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	  &#x9;   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
	  &lt;/style&gt;
	  &lt;div id=&quot;mc_embed_signup&quot;&gt;
	  <span class="tooltip-note">&lt;form action=&quot;https://catparty.us13.list-manage.com/subscribe/post?u=219ec3282ae742b42f62a07e8&amp;amp;id=616b172d1c&quot; method=&quot;post&quot; id=&quot;mc-embedded-subscribe-form&quot; name=&quot;mc-embedded-subscribe-form&quot; class=&quot;validate&quot; target=&quot;_blank&quot; novalidate&gt;</span>
		  &lt;div id=&quot;mc_embed_signup_scroll&quot;&gt;
	  &#x9;&lt;label for=&quot;mce-EMAIL&quot;&gt;Subscribe to our mailing list&lt;/label&gt;
	  &#x9;&lt;input type=&quot;email&quot; value=&quot;&quot; name=&quot;EMAIL&quot; class=&quot;email&quot; id=&quot;mce-EMAIL&quot; placeholder=&quot;email address&quot; required&gt;
		  &lt;!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--&gt;
		  &lt;div style=&quot;position: absolute; left: -5000px;&quot; aria-hidden=&quot;true&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;b_219ec3282ae742b42f62a07e8_616b172d1c&quot; tabindex=&quot;-1&quot; value=&quot;&quot;&gt;&lt;/div&gt;
		  &lt;div class=&quot;clear&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;Subscribe&quot; name=&quot;subscribe&quot; id=&quot;mc-embedded-subscribe&quot; class=&quot;button&quot;&gt;&lt;/div&gt;
		  &lt;/div&gt;
	  &lt;/form&gt;
	  &lt;/div&gt;
	  
	  &lt;!--End mc_embed_signup--&gt;</div>` +
	  '</div>'

	})
	
	// E-commerce Plaftorm Tooltip:

    tippy('#tooltip-ecommerce-platform', { 
	  content: 

	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>E-commerce plaftorms can be identified simply by viewing the Page Source and cmd+f searching for the appropriate platform name.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>ScriptChecker can detect ' + 
	  '<span class="tooltip-keyword">Shopify</span>' + ', '+
	  '<span class="tooltip-keyword">BigCommerce</span>' + ', '+
	  '<span class="tooltip-keyword">WooCommerce</span>' + ', '+
	  '<span class="tooltip-keyword">Magento</span>' + ', '+
	  '<span class="tooltip-keyword">Prestashop</span>' + ', '+
	  '<span class="tooltip-keyword">Miva</span>' + ', '+
	  '<span class="tooltip-keyword">Squarespace</span>' + ', '+
	  '<span class="tooltip-keyword">Bigcartel</span>' + ', '+
	  '<span class="tooltip-keyword">Volusion</span>' + ', '+
	  '<span class="tooltip-keyword">Lemonstand</span>' + ', '+
	  '<span class="tooltip-keyword">Drupal</span>' + ', '+
	  'and ' +
	  '<span class="tooltip-keyword">Square</span>' + '.'+
	  '</div>' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Not detecting a known platform? Submit feedback!</div>' +

	  '</div>'

	})
	
	// Google Analytics Tooltip:

    tippy('#tooltip-google-analytics', { 
	  content: 

	  '<div class="tooltip">' +

	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>Google Analytics code can vary widely depending on how it\'s injected into the page. Though, the tracking ID should follow a 5-13 digit <span class="tooltip-keyword">UA-XXXXXX-XX</span> naming convention as shown in the example below.</div>' + 
	
	  '<div class="tooltip-tip"><i class="far fa-lightbulb"></i>In addition to confirming a detected ID matches what is shown within the Integrations page for an account, it\'s also possible to trace an ID using a <a href="http://moonsearch.com/analytics/" target="_blank">reverse lookup tool</a>.</div>' +

	  `<div class="tooltip-snippet">
	  &lt;script async src=&quot;https://www.googletagmanager.com/gtag/js?id=UA-81785500-2&quot;&gt;&lt;/script&gt;

	  &lt;script&gt;
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag(&apos;js&apos;, new Date());
	
		gtag(&apos;config&apos;, &apos;<span class="tooltip-note">UA-81785500-2</span>&apos;);
	  &lt;/script&gt;
	  </div>`	 +
	  
	  '</div>'
	
    })
