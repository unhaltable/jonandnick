$(document).ready(function(){
  // Map
  function init_map() {
    var homeLatLng = new google.maps.LatLng(43.65950128716179,-79.39750556759793);
    var myOptions = {
      zoom:18,
      center: homeLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP};
      map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
      marker = new google.maps.Marker({
        map: map,
        position: homeLatLng
      });
      infowindow = new google.maps.InfoWindow({content:"<span style='height:auto !important; display:block; white-space:nowrap; overflow:hidden !important;'><strong style='font-weight:400;'>CSSU Office (BA 2283)</strong><br>40 St George Street<br> Toronto</span>" });
      google.maps.event.addListener(marker, "click", function(){ infowindow.open(map, marker); });
      google.maps.event.addDomListener(window, "resize", function(){ map.setCenter(homeLatLng); });
      infowindow.open(map,marker);
    }
    google.maps.event.addDomListener(window, "load", init_map);
});