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