var modal = require('./modules/modal.js');
var comments = require('./modules/comments.js');
var ads = require('./modules/ads.js');

$(document).ready(function(){
  modal.init();
  comments.init();
  ads.init();
});
