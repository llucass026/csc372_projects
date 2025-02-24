$(document).ready(function() {
  // Lightbox functionality
  $('a[data-lightbox="portfolio"]').on('click', function(event) {
    event.preventDefault();
    var imgSrc = $(this).attr('href');
    var lightbox = `
      <div class="lightbox">
        <span class="lightbox-close">&times;</span>
        <div class="lightbox-content">
          <img src="${imgSrc}" alt="portfolio">
        </div>
      </div>
    `;
    $('body').append(lightbox);
    $('.lightbox').fadeIn();

    // Close lightbox
    $('.lightbox-close').on('click', function() {
      $('.lightbox').fadeOut(function() {
        $(this).remove();
      });
    });

    // Close lightbox on click outside of image
    $('.lightbox').on('click', function(event) {
      if ($(event.target).is('.lightbox-content img')) {
        return;
      }
      $('.lightbox').fadeOut(function() {
        $(this).remove();
      });
    });
  });
});