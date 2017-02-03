$(document).ready(function(){
  $(function(){
    $('.slider-actividad > .slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            fade: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.slider-ocean > .slider').slick({
      fade: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            fade: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.slider-opinion > .slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            fade: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  })
});


//MAPA
function initialize() {
  var myLatlng = new google.maps.LatLng(53.2464126916818,-1.7673904121947999);
  var mapOptions = {
    zoom: 13, //zoom de tu mapa
    center: myLatlng, //centrar tu mapa
    scrollwheel: false, //si colocas true en vez de false el usuario podrá hacer scroll dentro del mapa
    draggable: true, //esta opción es la manito que aparece y es usado para desplazarse en el mapa
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var contentString = '<img src="" width="100" style="display:none;margin:auto;">';
  var infowindow = new google.maps.InfoWindow({content: contentString});
  var marker = new google.maps.Marker({
      position: myLatlng,
      animation:google.maps.Animation.DROP,
      icon: 'assets/imagenes/icono-maps.png',
      map: map
    });
/*    infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    }); //si comentamos esta parte desaparece el icono de dialogo */  
  }
google.maps.event.addDomListener(window, 'load', initialize);

