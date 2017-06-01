$(document).ready(() => {
  $(function () {
    $('.weapon-pop').popover({
      container: 'body'
    })
  })
});

$('.popover-dismiss').popover({
  trigger: 'focus'
})

// Select all links with hashes
$('#navbarNav ul li a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  function autoPlayYouTubeModal(){
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data( "target" ),
      videoSRC = $(this).attr( "data-theVideo" ),
      videoSRCauto = videoSRC+"?autoplay=1" ;
      $(theModal+' iframe').attr('src', videoSRCauto);
      $(theModal+' button.close').click(function () {
          $(theModal+' iframe').attr('src', videoSRC);
      });
    });
  }

  $('#videoModal').on('hide.bs.modal', function(e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", "");
  });


  $(document).ready(function(){
  autoPlayYouTubeModal();
});
