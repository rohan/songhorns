Template.repertoireList.rendered = function () {
  var $container = $('#masonry-grid').imagesLoaded( function() {
    $container.masonry({
      //columnWidth: '.col',
      itemSelector: '.col',
    });
  });
}