
// Example Album 1
var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',

  songs: [
      { name: 'Blue', length: '4:26' },
      { name: 'Green', length: '3:14' },
      { name: 'Red', length: '5:01' },
      { name: 'Pink', length: '3:21'},
      { name: 'Magenta', length: '2:15'}
    ]
};

// Example Album 2
var albumMarconi = {
  name: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: '/images/album-placeholder2.png',

  songs: [
      { name: 'Hello, Operator?', length: '1:01' },
      { name: 'Ring, ring, ring', length: '5:01' },
      { name: 'Fits in your pocket', length: '3:21'},
      { name: 'Can you hear me now?', length: '3:14' },
      { name: 'Wrong phone number', length: '2:15'}
    ]
};

/* var onHover = function (event) {
  if (lastSongClicked != this) {
   $(this).find("td").first().html("<i class='fa fa-play'></i>");
  }
};

var offHover = function (event) {
  if (lastSongClicked != this) {
    var $this = $(this);
    var songNumber = $this.attr("data-song-number");
    $this.find("td").first().html(songNumber);
  }
};

var onClick = function (event) {
  if (lastSongClicked != this) {
    $(this).find("td").first().html("<i class='fa fa-pause'></i>");
    var songNumber = $(lastSongClicked).attr("data-song-number");
      $(lastSongClicked).find("td").first().html(songNumber);
    lastSongClicked = this;
  }

  else {
    lastSongClicked = this;
    $(this).find("td").first().html("<i class='fa fa-play'></i>");
    lastSongClicked = null;
  }
};

var lastSongClicked = null;

var newClick = function (event) {
  var songNumber = $(this).attr("data-song-number");
  $(this).find("td").first().html(songNumber);
};

var createSongRow = function(songNumber, songName, songLength) {

  var $newSongRow = $('<tr data-song-number = "'+ songNumber +'">');
  $newSongRow.append('<td class="col-md-1">' + songNumber + '</td>');
  $newSongRow.append('<td class="col-md-9">' + songName + '</td>');
  $newSongRow.append('<td class="col-md-2">' + songLength + '</td>');

  $newSongRow.hover(onHover, offHover);
  $newSongRow.click(onClick);

  return $newSongRow;
};

var changeAlbumView = function(album) {

  var $albumTitle = $('.album-title');
  $albumTitle.text(album.name);

  var $albumArtist = $('.album-artist');
  $albumArtist.text(album.artist);

  var $albumMeta = $('.album-meta-info');
  $albumMeta.text(album.year + " on " + album.label);

  var $albumImage = $('.album-image img');
  $albumImage.attr('src', album.albumArtUrl);

  var $songList = $(".album-song-list-table");
  $songList.empty();
  var songs = album.songs;

  for(i=0; i < songs.length; i++) {
    var songData = songs[i];
    var $newRow = createSongRow(i, songData.name, songData.length);
    $songList.append($newRow);
  }

};

// This 'if' condition is used to preven the jQuery modifications
// from happening on non-Album view pages.
//  - This line checks if the current url has "/album" in its path using a regex.
if (document.URL.match(/\/album/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
    // Code to switch views goes here.
    var albums = [albumPicasso, albumMarconi];
    changeAlbumView(albumPicasso);

    var albumIndex = 0;
    var $albumImage = $('.album-image img');
    console.log($albumImage);
    $albumImage.click(function(Event) {
      albumIndex = (albumIndex + 1) % albums.length;

      changeAlbumView(albums[albumIndex]);
    });
  });
}
*/
