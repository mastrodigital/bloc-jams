/* var fillInAlbumCollection = function() {


  var createThumbnail = function () {
    var template =
      '<div class="col-md-2">'
    + '  <div class="thumbnail">'
    + '    <div class="collection-album-image-container">'
    + '      <a href ="/album"><img src="/images/album-placeholder.png"/></a>'
    + '    </div>'
    + '    <div class="caption">'
    + '      <h3> Album Name </h3>'
    + '      <h4> Artist Name </h4>'
    + '      <h4> X Songs </h4>'
    + '    </div>'
    + '  </div>'
    + '</div>'
    ;
    return $(template);
  };
  var $albumRow = $('.album-row-container');
  $albumRow.empty();
  for (var i =0; i < 33; i++) {
    $albumRow.append(createThumbnail());
  }

};



var updateCollectionView = function (){
  var buildAlbumOverlay = function(albumURL) {
    var template =
        '<div class="collection-album-image-overlay">'
      + '  <div class="collection-overlay-content">'
      + '    <a class="collection-overlay-button" href="' + albumURL + '">'
      + '      <i class="fa fa-play"></i>'
      + '    </a>'
      + '    &nbsp;'
      + '    <a class="collection-overlay-button">'
      + '      <i class="fa fa-plus"></i>'
      + '    </a>'
      + '  </div>'
      + '</div>'
      ;
      return $(template);
      };

  var onHover = function (Event) {
   $(this).append(buildAlbumOverlay("/album"));
  } ;

  var offHover = function (Event) {
    $(this).find('.collection-album-image-overlay').remove();
  };


  $('.collection-album-image-container').hover(onHover, offHover);


};

if (document.URL.match(/\/collection/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
    fillInAlbumCollection();
    updateCollectionView();
  });
} */
