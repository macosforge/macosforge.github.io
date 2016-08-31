/**
 * Igneous Code Plugin for TinyMCE
 */
(function() {
	tinymce.create('tinymce.plugins.IgneousCode', {
		getInfo : function() {
			return {
				longname  : 'Igneous Code',
				author    : 'William Siegrist',
				authorurl : 'http://macosforge.org',
				infourl   : 'http://macosforge.org',
				version   : '1.0'
			};
		},

		init : function(ed, url) {
			ed.addCommand('mceIgneousCode', function() {
					var se = ed.selection;
					content = se.getContent()
					se.setContent('<div class="post-code">'+content+'</div>');
					se.collapse();
			});

			ed.addButton('igneouscode', {
				title : 'Format the selection as code',
				cmd : 'mceIgneousCode',
				image : url + '/img/button.gif'
			});

		},
	});
	
	tinymce.PluginManager.add('igneouscode', tinymce.plugins.IgneousCode);
})();


