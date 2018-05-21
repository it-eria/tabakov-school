// Burger script
$(function() {
  $("#hamburger").on("click", function() {
    $(this).toggleClass("is-open");
    $(this).toggleClass("is-closed");
    if ($(window).width() < 993 && $(this).hasClass("is-open")) {
      $(".header__main-nav").show(300);
    } else {
      $(".header__main-nav").hide(300);
    }
  });

  $('.burger-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.header__main-nav').fadeToggle(300);
  });

  $(window).on("resize", function() {
    if ($(window).width() > 991) {
      $(".header__main-nav").removeAttr('style');
    }
  });

  $(".info-table").tablesorter();   
});
// Google Maps
function initMap() {
  var markerPos = {lat: 49.796177, lng: 24.055697};
  var centerPos = {lat: markerPos.lat, lng: markerPos.lng - 0.001};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: centerPos,
    disableDefaultUI: true
  });
  
  var marker = new google.maps.Marker({
    position: markerPos,
    map: map,
    icon: 'assets/img/mapID.png',
    title: 'Total art school'
  });
}