(function() {

var k = function() {
	this.version = '0.1';
	this.jqxhr;
};

var jqxhr;
k.prototype.ajax = function(url, handle, data) {
data = typeof data !== 'undefined' ? data : '';
captau.loading = 1;
$('#menu, #menuLink, #search').removeClass('active');
	if (typeof k.jqxhr === 'object') k.jqxhr.abort();
	jqxhr = $.ajax({ url: url, type: 'POST', data: data, dataType: 'jsonp', crossDomain: true, jsonp: false, jsonpCallback: handle, timeout: 10000 })
	//.done(function(r) { handle(r); })
	.done(function(r) { urlmanager.update(captau.section, captau.keyword, captau.page); })
	.fail(function( jqXHR, textStatus ) { showmessage( "Request failed: " + textStatus );jqxhr.abort(); })
	.always(function(a,b,c) { captau.loading = 0; $('#loading').remove(); });
}

})();
