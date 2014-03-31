$(document).ready(function(){
  // Map
  function init_map() {
    var homeLatLng = new google.maps.LatLng(43.65950128716179,-79.39750556759793);
    var myOptions = {
      zoom:17,
      center: homeLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP};
      map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
      marker = new google.maps.Marker({
        map: map,
        position: homeLatLng
      });
      google.maps.event.addListener(marker, "click", function(){ infowindow.open(map, marker); });
      google.maps.event.addDomListener(window, "resize", function(){ map.setCenter(homeLatLng); });
      infowindow.open(map,marker);
    }
    google.maps.event.addDomListener(window, "load", init_map);
});