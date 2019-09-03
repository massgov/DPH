// Massachusetts Resource Search v1.2
// Locate Massachusetts programs by zipcode and program type.
// Institute for Health & Recovery, Inc., 2019
var map;
var markersArray = []; // Array to hold existing markers
var lat = 42.3703; // Default coords are IHR Cambridge
var long = -71.1033;
var data;
var infowindow;

function doNothing() {
	console.log('doNothing Called');
}

function initMap() {

	// Create Map
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: new google.maps.LatLng(lat, long),
		mapTypeId: 'roadmap',
		mapTypeControl: false,
		fullscreenControl: false,
		styles: [
			{ featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
			{ featureType: 'administrative.neighborhood', stylers: [{ visibility: 'off' }] },
			{ featureType: 'poi.attraction', stylers: [{ visibility: 'off' }] },
			{ featureType: 'poi.school', stylers: [{ visibility: 'off' }] },
			// {featureType: 'transit', elementType: 'labels.icon', stylers: [{visibility: 'off'}]}				
		],
	});

	// Create Infowindow
	infowindow = new google.maps.InfoWindow();

	// Get sites and apply to markers
	downloadUrl('https://massgov.github.io/DPH/bsas/resource-search/siteList.xml', function (data) {
		var xml = data.responseXML;
		var markers = xml.documentElement.getElementsByTagName('marker');
		Array.prototype.forEach.call(markers, function (markerElem) {
			var id = markerElem.getAttribute('id');
			var siteID = markerElem.getAttribute('siteID');
			var name = markerElem.getAttribute('name');
			var type = markerElem.getAttribute('type');

			// Assign keyword variables
			var kw1 = markerElem.getAttribute('addicitonServices'); //This is spelled incorrectly in the database and is mirrored here
			var kw2 = markerElem.getAttribute('basicNeeds');
			var kw3 = markerElem.getAttribute('behavioralHealth');
			var kw4 = markerElem.getAttribute('housing');
			var kw5 = markerElem.getAttribute('medicalCare');
			var kw6 = markerElem.getAttribute('parenting');
			var kw7 = markerElem.getAttribute('prenatalAndPostpartumCare');
			var kw8 = markerElem.getAttribute('professionalAdvancement');
			var kw9 = markerElem.getAttribute('urgentAssistance');

			var iconColor = markerElem.getAttribute('icon');

			// Construct Place variable
			var place = markerElem.getAttribute('street');
			place += ', ';
			place += markerElem.getAttribute('city');

			//Generate friendly url
			var url = markerElem.getAttribute('url');
			var urlParts = url.replace('http://', '').replace('https://', '').split(/[/?#]/);
			var website = urlParts[0];

			var type = markerElem.getAttribute('type');
			var phone = markerElem.getAttribute('phone');
			var tty = markerElem.getAttribute('tty');

			// Generate random jitter for longitude to keep identical points slightly separated
			var jitter = (Math.floor(Math.random() * 71) + 30) / 1000000;
			var long = parseFloat(markerElem.getAttribute('long')) - jitter;
			var lat = parseFloat(markerElem.getAttribute('lat')) - jitter;
			var latLng = new google.maps.LatLng(
				lat,
				long);

			//Infowindow creation
			var infowincontent = document.createElement('div');

			//Add Title
			var strong = document.createElement('h4');
			strong.textContent = name
			infowincontent.appendChild(strong);
			infowincontent.appendChild(document.createElement('br'));

			//Add types of services offered
			if (type) {
				var typeElement = document.createElement('h5');
				var typeLabel = 'Services offered: '
				typeElement.textContent = typeLabel + type
				infowincontent.appendChild(typeElement);
			}

			//Add address
			if (place) {
				var placeElement = document.createElement('h5');
				var placeLabel = 'Address: '
				placeElement.textContent = placeLabel + place
				infowincontent.appendChild(placeElement);
			}

			//Add Phone
			if (phone) {
				var phoneElement = document.createElement('h5');
				var phoneLabel = 'Tel: '
				phoneElement.textContent = phoneLabel + phone
				infowincontent.appendChild(phoneElement);
			}

			//Add TTY
			if (tty) {
				var ttyElement = document.createElement('h5');
				var ttyLabel = 'TTY: '
				ttyElement.textContent = ttyLabel + tty
				infowincontent.appendChild(ttyElement);
			}

			//Add website
			if (website && url) {
				var webLinkElement = document.createElement('a');
				webLinkElement.setAttribute('href', url);
				webLinkElement.innerHTML = website;
				infowincontent.appendChild(webLinkElement);
			}

			//Add siteID from SF
			if (siteID) {
				var siteIDElement = document.createElement('h5');
				siteIDElement.setAttribute("class", "siteID")
				var siteIDLabel = 'Site ID: '
				siteIDElement.textContent = siteIDLabel + siteID
				infowincontent.appendChild(siteIDElement);
			}


			//Set default marker color to blue
			var markerIcon = '/DPH/bsas/resource-search/images/spotlight-poi-blue.png';

			var activeMap;

			// This set of conditionals will show markers if site matches ANY checked keywords
			if (($("#kw1").is(":checked")) && (kw1 == "1")) {
				activeMap = map;
			};
			if (($("#kw2").is(":checked")) && (kw2 == "1")) {
				activeMap = map;
			};
			if (($("#kw3").is(":checked")) && (kw3 == "1")) {
				activeMap = map;
			};
			if (($("#kw4").is(":checked")) && (kw4 == "1")) {
				activeMap = map;
			};
			if (($("#kw5").is(":checked")) && (kw5 == "1")) {
				activeMap = map;
			};
			if (($("#kw6").is(":checked")) && (kw6 == "1")) {
				activeMap = map;
			};
			if (($("#kw7").is(":checked")) && (kw7 == "1")) {
				activeMap = map;
			};
			if (($("#kw8").is(":checked")) && (kw8 == "1")) {
				activeMap = map;
			};
			if (($("#kw9").is(":checked")) && (kw9 == "1")) {
				activeMap = map;
			};

			// Add marker to map
			var marker = new google.maps.Marker({
				map: activeMap,
				title: name,
				position: latLng,
				icon: markerIcon,
				markerkw1: kw1,
				markerkw2: kw2,
				markerkw3: kw3,
				markerkw4: kw4,
				markerkw5: kw5,
				markerkw6: kw6,
				markerkw7: kw7,
				markerkw8: kw8,
				markerkw9: kw9,
			});

			// Push marker to array
			markersArray.push(marker);

			// Add click listener to marker
			marker.addListener('click', function () {
				infowindow.setContent(infowincontent);
				infowindow.open(map, marker);
			});
		});

		// Add a marker clusterer to manage the markers.
		var markerCluster = new MarkerClusterer(map, markersArray, {
			maxZoom: 13,
			zoomOnClick: false,
			styles: [{
				height: 53,
				url: '/DPH/bsas/resource-search/images/c1.png',
				textColor: '#FFF',
				width: 52
			}]
		});
	});
}

// FUNCTION downloadURL - Get XML data from URL
function downloadUrl(url, callback) {

	// For IE
	var request = window.ActiveXObject ?
		new ActiveXObject('Microsoft.XMLHTTP') :
		new XMLHttpRequest;

	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			request.onreadystatechange = doNothing;
			callback(request, request.status);
		}
	};

	request.open('GET', url, true);
	request.send(null);
}


// FUNCTION resetMarkers - All markers are removed from map, and markers re-added if they match checkboxes.
function resetMarkers() {
	// Hide all markers from map
	for (var i = 0; i < markersArray.length; i++) {
		markersArray[i].setMap(null);
	}

	// Loop through features and set all matching markers
	for (var i = 0; i < markersArray.length; i++) {
		if (($("#kw1").is(":checked")) && (markersArray[i].markerkw1 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw2").is(":checked")) && (markersArray[i].markerkw2 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw3").is(":checked")) && (markersArray[i].markerkw3 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw4").is(":checked")) && (markersArray[i].markerkw4 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw5").is(":checked")) && (markersArray[i].markerkw5 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw6").is(":checked")) && (markersArray[i].markerkw6 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw7").is(":checked")) && (markersArray[i].markerkw7 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw8").is(":checked")) && (markersArray[i].markerkw8 == "1")) {
			markersArray[i].setMap(map);
		};
		if (($("#kw9").is(":checked")) && (markersArray[i].markerkw9 == "1")) {
			markersArray[i].setMap(map);
		};
	}
}

// FUNCTION: newLocation
function newLocation(newLat, newLng) {
	map.panTo({
		lat: newLat,
		lng: newLng
	});
}

// FUNCTION: validateZipCode
function validateZipCode(elementValue) {
	// var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
	var zipCodePattern = /^[0]{1}[2,1,5]\d{3}$/;
	return zipCodePattern.test(elementValue);
}

// Events
$(document).ready(function () {
	// Listen for search button click
	$("#search").on('click', function (e) {
		e.preventDefault();
		if (validateZipCode($("#zipcode").val())) {
			//Set form class to valid state
			document.getElementById("program-finder").className = "";

			// Close any open Infowindows
			if (infowindow) {
				infowindow.close();
			}

			// Make AJAX call for zipcode's lat/long coords and recenter map
			$.ajax({
				type: "POST",
				data: { "zipcode": $("#zipcode").val() },
				url: "zipCoords.php",
				datatype: "JSON",
				success: function (JSONdata) {
					data = JSON.parse(JSONdata);
					lat = data.lat;
					long = data.long;
					newLocation(lat, long);
					map.setZoom(14)
				}
			});

			// Reset markers
			resetMarkers();

		} else {
			//Set form class to error state
			document.getElementById("program-finder").className = "has-error";
		};
	});
});