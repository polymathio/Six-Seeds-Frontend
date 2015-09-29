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
