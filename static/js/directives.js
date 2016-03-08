app.directive('directionsMap', function(){
  return {
    restrict: 'A',
    //template: '<div></div>',
    link: function (scope, element, attrs) {

      //var mapEl = element.children()[0];
      var mapEl = element[0];

      console.log(mapEl);

      var myLatLng = {lat: 47.6418836, lng: -122.377581};
      var ola = {lat: 47.700543, lng:  -122.359262};
      var discovery = {lat: 47.657916, lng: -122.412387};
      var gasworks = {lat: 47.646421, lng: -122.335024};
      var husky_stadium = {lat: 47.650461, lng: -122.302352};
      var qcyc = {lat: 47.643774, lng: -122.316846};
      var safeco = {lat: 47.591102, lng: -122.332917};
      var water_taxi = {lat: 47.601176, lng: -122.338776};
      // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

      // var baseballIcon = "/static/img/baseball.jpg"

      var map = new google.maps.Map(mapEl, {
        zoom: 12,
        center: myLatLng
      });

      var ola_marker = new google.maps.Marker({
        position: ola,
        map: map,
        title: "Ola's House"
      });
      var discovery_marker = new google.maps.Marker({
        position: discovery,
        map: map,
        title: "Discovery Park"
      });
      var gasworks_marker = new google.maps.Marker({
        position: gasworks,
        map: map,
        title: "Gas Works Park/Wedding Location"
      });
      var husky_marker = new google.maps.Marker({
        position: husky_stadium,
        map: map,
        title: "Husky Stadium"
      });
      var qcyc_marker = new google.maps.Marker({
        position: qcyc,
        map: map,
        title: "Queen City Yacht Club/Reception Location"
      });
      var safeco_marker = new google.maps.Marker({
        position: safeco,
        map: map,
        title: "Safeco Field",
        // icon: baseballIcon
      });
      var water_taxi_marker = new google.maps.Marker({
        position: water_taxi,
        map: map,
        title: "Elliot Bay Water Taxi"
      });
    }
  };
});