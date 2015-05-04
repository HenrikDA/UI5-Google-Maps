var map;

sap.ui.controller("maps.Maps", {
	
	findLocation: function(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
		var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
		map.setCenter(pos);
		var infowindow = new google.maps.InfoWindow({
	        map: map,
	        position: pos,
	        content: 'This is you Location\n'+pos 
	      });
			});
		}
		
	},
	
	initMap: function(){
		
		var mapOptions = {
			    			zoom: 11
						};
		map = new google.maps.Map(document.getElementById('idMaps1--map_canvas'),mapOptions);
		
	},


	onAfterRendering: function() {		
		
		document.getElementById('idMaps1--map_canvas').setAttribute("style","height:100vh");				
		google.maps.event.addDomListener(window, 'load', this.initMap());
		this.findLocation();

	},

});