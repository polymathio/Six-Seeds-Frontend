$(document).ready(function(){
	modal.init();
	comments.init();
});


var modal = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},

	reInit: function() {

	},

	cacheDom: function() {
		this.$openTriggers = $('.js-open-modal');
		this.$closeTriggers = $('.js-close-modal');
		this.$copyTriggers = $('.js-copy-url');
	},

	bindEvents: function() {
		this.$openTriggers.on('click', function(e) {
			e.preventDefault();
			var target = $(this).data('target'), type = $(this).data('type');

			var $targetModal = $('#modal-' + type);
			$targetModal.addClass('is-visible');
		});

		this.$closeTriggers.on('click', function(e) {
			e.preventDefault();
			$(this).closest('.m-modal').removeClass('is-visible');
		});

		this.$copyTriggers.on('click', function(e) {
			e.preventDefault();
			$(this).siblings('.js-page-url').focus().select();
			document.execCommand("copy");
			
			var $copied = $(this).find('.m-modal__copied');
			$copied.addClass('is-visible');

			window.setTimeout(function(){
				$copied.removeClass('is-visible');
			}, 5000);
		});
	}
}

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