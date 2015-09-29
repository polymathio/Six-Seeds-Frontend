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

  bindEvents: function() {

    $(window).on('scroll', function() {
      var viewBottom = $(this).scrollTop() + $(this).height();
      
      console.log(postLoader.currentHeight + ' ' + viewBottom);

      if (viewBottom - postLoader.currentHeight < 300) {
        postLoader.handleScroll();
      }
    });
  },

  handleScroll: function() {
    this.$nextPost.load('post-load.html', function() {
      console.log('post loaded');
    });
  },

  handleResize: function() {

  }
}

module.exports = postLoader;