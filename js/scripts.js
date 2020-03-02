lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
  imageFadeDuration: 250,
  showImageNumberLabel: false,
  fitImagesInViewport: true
});

const $searchQuery = $('.photo-grid a');

$('#search').on('keyup', function(event) {

    let $search = $(event.target).val().toLowerCase();

    for (i = 0; i < $searchQuery.length; i += 1) {

        let $SearchImage = $searchQuery.eq(i);

        if
        ($SearchImage.attr('data-title').toLowerCase().indexOf($search) === -1) {
            $SearchImage.hide();
        }
        else if ($SearchImage.attr('data-title').toLowerCase().indexOf($search) !== -1) {
            $SearchImage.show();
        }
    }
});
