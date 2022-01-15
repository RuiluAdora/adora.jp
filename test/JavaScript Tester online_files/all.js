/* (c) 2013 JAPISoft - Alexandre Brillant */

( function() {

	var editor = null;

	String.prototype.trim = function() {
		return this.replace(/^\s+/g,'').replace(/\s+$/g,'');
	}

	$( function() {
				
		var aceMode = ( typeof ace == "object" );
				
		if ( aceMode ) {
			if ( document.getElementById( "editor" ) ) {
				var jsMode = window.location.href.indexOf( "javascript" ) > -1;
				var jsonMode = window.location.href.indexOf( "json" ) > -1;
				var xmlMode = window.location.href.indexOf( "xml" ) > -1;
				var sqlMode = window.location.href.indexOf( "sql" ) > -1;
				var cssMode = window.location.href.indexOf( "css" ) > -1;
				var htmlMode = window.location.href.indexOf( "html-" ) > -1;
				
				editor = ace.edit("editor");
				editor.setTheme("ace/theme/eclipse");
				if ( jsMode ) {
					editor.getSession().setMode("ace/mode/javascript");
				} else
				if ( jsonMode ) {
					editor.getSession().setMode("ace/mode/json");
				} else
				if ( xmlMode ) {
					editor.getSession().setMode("ace/mode/xml" );
				} else
				if ( sqlMode ) {
					editor.getSession().setMode("ace/mode/sql" );
				} else
				if ( cssMode ) {
					editor.getSession().setMode("ace/mode/css" );
				} else
				if ( htmlMode ) {
					editor.getSession().setMode("ace/mode/html" );
				}
					
				window.getValue = function() {
					return editor.getValue();	
				}
				window.setValue = function( pText ) {
					editor.setValue( pText );	
				}
				editor.focus();
			}
		}

		new Clipboard( "#copy",
		{
			text : function( trigger ) {
				return window.getValue();
			}
		} );
		new Clipboard( "#copy-screen",
		{
			text : function( trigger ) {
				return window.getValue();
			}
		} );

		$( "#menuButton" ).click(
			function() {
				if ( $( "#leftMenu" ).is( ":visible" ) ) {
					$( "#leftMenu" ).hide();					 		
				} else
					$( "#leftMenu" ).css( "display", "table-cell" );
					
					
			  $("a.jQueryBookmark").click(function(e){
				e.preventDefault();
				var bookmarkUrl = this.href;
				var bookmarkTitle = this.title;
			
				if (window.sidebar) { // For Mozilla Firefox Bookmark
					window.sidebar.addPanel(bookmarkTitle, bookmarkUrl,"");
				} else if( window.external || document.all) { // For IE Favorite
					window.external.AddFavorite &&
						window.external.AddFavorite( bookmarkUrl, bookmarkTitle);
				} else if(window.opera) { // For Opera Browsers
					$("a.jQueryBookmark").attr("href",bookmarkUrl);
					$("a.jQueryBookmark").attr("title",bookmarkTitle);
					$("a.jQueryBookmark").attr("rel","sidebar");
				} else { // for other browsers which does not support
					 alert('Your browser does not support this bookmark action');
					 return false;
				}
			  });				
					
			}
		);
		
		$(window).bind('scroll', function() {
			 if ($(window).scrollTop() > 50) {
				 $('header').hide( 200 );
			 }
			 else {
				 $('header').show( 200 );
			 }
		});			
		
	} );

	var stringMode = true;
	var numericMode = true;
	var punctuationMode = true;
	
	function setPasswordMode( pStringMode, pNumericMode, pPunctuationMode ) {
		stringMode = pStringMode;
		numericMode = pNumericMode;
		punctuationMode = pPunctuationMode;
	}
	
	function password_generator( len ) {
		var length = (len)?(len):(10);
		var string = stringMode ? "abcdefghijklnopqrstuvwxyz" : "";
		var numeric = numericMode ? '0123456789' : "";
		var punctuation = punctuationMode ? '!@#$%^&*()_+~`|}{[]\:;?><,./-=' : "";
		var password = "";
		var character = "";
		var crunch = true;
	
		if ( !stringMode && !numericMode && !punctuationMode ) {
			return "";
		}
	
		while( password.length<length ) {
			var entity1 = Math.ceil(string.length * Math.random()*Math.random());
			var entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
			var entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
			hold = string.charAt( entity1 );
			hold = (entity1%2==0)?(hold.toUpperCase()):(hold);
			character += hold;
			character += numeric.charAt( entity2 );
			character += punctuation.charAt( entity3 );
			password = character;
		}
		return password;
	}

	window.setPasswordMode = setPasswordMode;
	window.password_generator = password_generator;
	
} )();


