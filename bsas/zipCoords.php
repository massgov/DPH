<?php
	require_once '../includes/clean_data.php';
	require_once('../includes/config.php');
	
	// Get user zipcode
	$z = test_input($_POST['zipcode']);
	
	// Connect and check for failure
	$conn = sqlsrv_connect($server, $options);
	if ($conn === false) die("<pre>".print_r(sqlsrv_errors(), true));
	
	// Form SELECT statement to get latitude and longitude from database for user's supplied zipcode
	$sql = "SELECT latitude, longitude FROM dbo.zipcode$ WHERE zip = '".$z."';";
	
	// Send query and check for failure
	$query = sqlsrv_query($conn, $sql);
	if ($query === false){
		exit("<pre>".print_r(sqlsrv_errors(), true));
	}
	
	// Assign results
	$location = array();
	$row = sqlsrv_fetch_array($query);
	If (!$row) {
		$lat = 42.37035;
		$long = -71.10335;
	} else {
		$lat = $row[latitude];
		$long = $row[longitude];
	};
	
	// INSERT SQL RESULTS INTO ARRAY THEN ENCODE AND ECHO
	$location = array('lat' => $lat, 'long' => $long);
	$locationJSON = json_encode($location);
	echo $locationJSON;
	
	// Close it up
	sqlsrv_free_stmt($query);
	sqlsrv_close($conn);
?>