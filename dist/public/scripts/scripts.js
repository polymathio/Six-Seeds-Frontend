(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var modal = require('./modules/modal.js');
var comments = require('./modules/comments.js');

$(document).ready(function(){
	modal.init();
	comments.init();
});

},{"./modules/comments.js":2,"./modules/modal.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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

module.exports = modal;
},{}]},{},[1])