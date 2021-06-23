  var map;
  var mapCenter = {
    lat: 47.857940, 
    lng: 35.156728
  };

  function initMap() {
    map = new google.maps.Map(document.getElementById('nine'), {
    center: mapCenter,
    zoom: 10
    });
  }
  // var marker = new google.maps.Marker({
  //   position: mapCenter,
  //   map: map,
  //   title: 'here i am'
  // });



// 47.857940, 35.156728