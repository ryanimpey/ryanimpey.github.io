$(document).ready(function(){
	/*$('h1').hover(function(){
		alert('hello');		
	})*/

	// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})
});