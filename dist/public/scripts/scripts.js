(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var modal = require('./modules/modal.js');
var comments = require('./modules/comments.js');
var ads = require('./modules/ads.js');
var postLoader = require('./modules/postLoader.js');

$(document).ready(function(){
  modal.init();
  comments.init();
  ads.init();
  postLoader.init();
});

},{"./modules/ads.js":2,"./modules/comments.js":3,"./modules/modal.js":4,"./modules/postLoader.js":5}],2:[function(require,module,exports){
var ads = {

  // formatId: 31221, fixed sidebar
  // formatId: 31210, wide banner
  // formatId: 31212, sidebar square

  init: function() {
    //console.log('ads init');

    /*var sas = sas || {}; 
    sas.cmd = sas.cmd || []; */
    
    sas.cmd.push(function() { 
      /*sas.call("std", { 
        siteId: 71012, 
        pageId: 537314, 
        formatId: 31210,
        target: 'path=AdditionalResources;path=Portals;path=Atheist;path=MinorPathIndex;path=NonReligiousPaths;path=Agnosticism;path=Atheism;path=SecularHumanism;Channel=CFT_Atheist;pathNumbers=2465;pathNumbers=142;pathNumbers=143;pathNumbers=144;urlhash=1286045419;',
        tagId: '31210'
      });*/

      /*sas.call("std", { 
        siteId: 71012, 
        pageId: 537314, 
        formatId: 31221,
        target: 'path=AdditionalResources;path=Portals;path=Atheist;path=MinorPathIndex;path=NonReligiousPaths;path=Agnosticism;path=Atheism;path=SecularHumanism;Channel=CFT_Atheist;pathNumbers=2465;pathNumbers=142;pathNumbers=143;pathNumbers=144;urlhash=1286045419;',
        tagId: '1234'
      }); */

    });

  }
}

module.exports = ads;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
var postLoader = {
  init: function() {
    console.log('postLoader init');
    this.cacheDom();
    this.bindEvents();

    this.currentHeight = this.$currentPost.height();
  },

  reInit: function() {

  },

  cacheDom: function() {
    this.$body = $('body');
    this.$nextPost = $('.js-next-post');
    this.$currentPost = $('.js-current-post');
  },

  getNewContainer: function() {
    this.$nextPost = $('.js-next-post');
    this.$currentPost = $('.js-current-post');
    this.currentHeight += this.$currentPost.height();
  },

  bindEvents: function() {
    $(window).on('scroll', $.debounce(300, postLoader.handleScroll));
  },

  handleScroll: function() {

    // this = window

    var viewBottom = $(this).scrollTop() + $(this).height();    
    console.log(postLoader.currentHeight + ' ' + viewBottom);

    if (postLoader.currentHeight - viewBottom < 300) {
      postLoader.$nextPost.load('post-load.html', function() {
        //alert('post loaded');

        postLoader.$currentPost.removeClass('js-current-post');
        postLoader.$nextPost.removeClass('js-next-post').addClass('js-current-post');
        postLoader.$body.append('<div class="js-next-post"></div>');
        postLoader.getNewContainer();
      });  
    }    
  },

  handleResize: function() {

  }
}

module.exports = postLoader;
},{}]},{},[1])