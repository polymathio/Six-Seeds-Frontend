var comments = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},

	reInit: function() {

	},

	cacheDom: function() {
		this.$commentTriggers = $('.js-show-comments')
	},

	bindEvents: function() {
		this.$commentTriggers.on('click', function(e) {
			e.preventDefault();
			var target = $(this).data('target');
			$('#comments-' + target).addClass('is-visible');
			$(this).remove();
		});
	}
}

module.exports = comments;