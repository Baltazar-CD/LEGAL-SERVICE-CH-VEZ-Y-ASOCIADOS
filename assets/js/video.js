$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="assets/images/274090711_2988608204785293_6954760201129220111_n.mp4" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};









$(document).ready(function(){
  initializeVideoCarousel();
  initializeCommunityCarousel();
  initializeContributorsCarousel();
  initializeGamesCarousel();
});

function initializeGamesCarousel () {
  var games_carousel = $('#games_carousel');  
  var games_carousel_params = {
    items: 7,
    margin: 18,
    dragEndSpeed: 650, // Speed at which a slide snaps to center when dragging
    autoplaySpeed: 650, // Speed at which the slides change when autoplaying
    autoWidth: true,
    lazyLoad: true,
    loop: true, // creat a loop of slides when sliding through
    nav: true,
    navText: [
      "<div class='nav-button prev'><i class='fa fa-caret-left'></i></div>",
      "<div class='nav-button next'><i class='fa fa-caret-right'></i></div>"
    ],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {      
      0: {
        items: 4,
        center: true
      },
      640: {
        items: 7
      }
    }
  };
 
  games_carousel.owlCarousel(games_carousel_params);
}

function initializeContributorsCarousel () {
  var contributors_carousel = $('#contributors_carousel');  
  var contributors_carousel_params = {
    items: 2,
    margin: 34,
    dragEndSpeed: 650, // Speed at which a slide snaps to center when dragging
    autoplaySpeed: 650, // Speed at which the slides change when autoplaying
    autoWidth: true,
    lazyLoad: true,
    loop: true, // creat a loop of slides when sliding through
    nav: true,
    navText: [
      "<div class='nav-button prev'><i class='fa fa-caret-left'></i></div>",
      "<div class='nav-button next'><i class='fa fa-caret-right'></i></div>"
    ],
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    startPosition: 'zero',
    responsive: {
      0: {
        items: 1,
        autoWidth: true,
        center: true,
      },
      640: {
        items: 3,
        autoWidth: true,
        center: true,
      },
      1040: {
        items: 2,
        autoWidth: false,
        center: false
      }
    }
  };
 
  contributors_carousel.owlCarousel(contributors_carousel_params);
}

function initializeCommunityCarousel () {
  var community_carousel = $('#community_carousel');  
  var community_carousel_params = {
    items: 3,
    margin: 21,
    dragEndSpeed: 650, // Speed at which a slide snaps to center when dragging
    autoplaySpeed: 650, // Speed at which the slides change when autoplaying
    autoWidth: true,
    loop: true, // creat a loop of slides when sliding through
    nav: true,
    center: true, // center the "active" slide
    navText: [
      "<div class='nav-button prev'><i class='fa fa-caret-left'></i></div>",
      "<div class='nav-button next'><i class='fa fa-caret-right'></i></div>"
    ],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    startPosition: 'zero',
    responsive: {
      0: {
        items: 3
      }
    }
  };
 
  community_carousel.owlCarousel(community_carousel_params);
}

function initializeVideoCarousel () {
  var video_carousel = $('#video_carousel');
  
  video_carousel.owlCarousel({
    loop: true, // creat a loop of slides when sliding through
    center: true, // center the "active" slide
    lazyLoad: true,
    video:true,
    items: 3, // total items you want to be seen on the screen
    dragEndSpeed: 650, // Speed at which a slide snaps to center when dragging
    autoplaySpeed: 650, // Speed at which the slides change when autoplaying
    margin: 19, // Spacing between slide items
    autoWidth: true, // Let owl carousel handle with based on the container
    autoplay: true, // Autoslide
    autoplayTimeout: 7000, // changes slides every 7 seconds
    autoplayHoverPause: true, // When hovering on a video pause the transition of slides
    startPosition: 'video_two', // Which video based of it's data-hash do you want the slid to start on
    responsive: {
      0: {
        items: 3 // Change the number of items it tried to auto fit at different screen width
      }
    }
  });
}
