// JavaScript Document

// slide toggles
$(function() {
	// as soon as the page loads, hide all the dl.toggle dd
	$('.toggle dd').hide();
	$('.toggle tbody').hide();
	
	// on click of the dl.toggle dt, slideToggle the dd
	$('.toggle dt').click(function() {
		$(this).next('dd').slideToggle(300);
	});
	
	$('.toggle caption').click(function() {
		$(this).nextAll().eq(1).slideToggle(300);
	 });
	
	// if a link has #anchor slideToggle open	
	var url_hash = window.location.hash;
	if (url_hash !== '') {
	  $('.toggle' + url_hash + ' dt').trigger('click');
	  //$('p' + url_hash).parents('.toggle').next('dt').trigger('click');
	  $('p:target').parents('.toggle').next('dt').trigger('click');
	};
	
});