<?php
$title = 'Resource Search'; // Page title
$description = 'The Institute for Health and Recovery (IHR) is a statewide service, research, policy and program development agency. IHR designs its services based on an understanding of the impact of trauma.'; // Description
require $_SERVER['DOCUMENT_ROOT'] . '/includes/header.php';
// require_once '../includes/clean_data.php';
?>
<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h4 class="supertitle hidden-sm hidden-xs">Pregnant Women &amp; Families</h4>
				<h3 class="hidden-sm hidden-xs">Resource Search</h3>
			</div><!-- /.col-md-12 -->
        </div><!-- /.row -->
        <div class="row">
			<div class="col-md-12">
				<form role="form" method="POST" name="program-finder" id="program-finder">
                	<div class="form-group">
						<label for="zipcode" class="control-label">Enter a 5-digit Massachusetts zipcode</label>
						<div id="zipInput" class="input-group col-md-4" style="margin-bottom:10px;">
							<input type="text" pattern="[0-9]*" maxlength="5" class="form-control" id="zipcode" name="zipcode" />
                            <div class="input-group-btn">
								<button type="submit" class="btn btn-default" id="search">Search</button>
							</div><!-- /.input-group-btn -->
						</div><!-- /.input-group -->
                    </div><!-- /.form-group -->
						<label class="checkbox-inline">
							<input id="kw1" type="checkbox" checked="checked"> Addiction Services
						</label>
						<label class="checkbox-inline">
							<input id="kw2" type="checkbox" checked="checked"> Basic Needs
						</label>
                        <label class="checkbox-inline">
							<input id="kw3" type="checkbox" checked="checked"> Behavioral Health
						</label>
                        <label class="checkbox-inline">
							<input id="kw4" type="checkbox" checked="checked"> Housing
						</label>
                        <label class="checkbox-inline">
							<input id="kw5" type="checkbox" checked="checked"> Medical Care
						</label>
                        <label class="checkbox-inline">
							<input id="kw6" type="checkbox" checked="checked"> Parenting
						</label>
                        <label class="checkbox-inline">
							<input id="kw7" type="checkbox" checked="checked"> Prenatal and postpartum Care
						</label>
                        <label class="checkbox-inline">
							<input id="kw8" type="checkbox" checked="checked"> Professional Advancement
						</label>
                        <label class="checkbox-inline">
							<input id="kw9" type="checkbox" checked="checked"> Urgent Assistance
						</label>

				</form><!-- form -->
                <div id="search_results"></div> 
			</div><!-- /.col-md-12 -->
		</div><!-- /.row -->
		<div class="row">
			<div class="col-md-12">
				<div id="map" class="gmap gmap-sm gmap-xs"></div>
            </div><!-- /.col-md-12 -->
		</div><!-- /.row -->
	</div><!-- /.container -->
	<script defer src="https://healthrecovery.org/resource-search/markerclusterer.js"></script>
	<script defer src="https://healthrecovery.org/resource-search/map_scripts-2019q4.js"></script>
	
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=yourkey&callback=initMap">
    </script>
    
<!-- For better map viewing, disable push and doc footer: -->
	<div id="push"></div><!-- sticky footer -->
	<script>
	(function(w, d, s, u, g, a, b) {
		w['GetFeedbackObject'] = g;
		w[g] = w[g] || function() {
			(w[g].q = w[g].q || []).push(arguments)
		};
		a = d.createElement(s), b = d.getElementsByTagName(s)[0];
		a.async = 1;
		a.src = u;
		b.parentNode.insertBefore(a, b)
	})(window, document, 'script', '//websites.cdn.getfeedback.com/embed/c0XA8TzpZb/gf.js', 'gf')
</script>
<?php
// require $_SERVER['DOCUMENT_ROOT'] . '/includes/footer.php';
?>