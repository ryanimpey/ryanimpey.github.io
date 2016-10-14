$(document).ready(function(){

	$('.btn-primary-submit-canvas').click(function(){

		var canvasWidthVar = document.getElementById("canvasWidth").value;
		var canvasHeightVar = document.getElementById("canvasHeight").value;

		console.log("width:" + canvasWidthVar + " height:" + canvasHeightVar);

		//$('#paintboard').width()
		if (canvasWidthVar > 4999 || canvasHeightVar > 4999) {
			if (confirm("You are creating a large canvas, are you sure you want to do this?") == true) {
				changeCanvas(canvasWidthVar, canvasHeightVar);
			}
		} else {
			changeCanvas(canvasWidthVar, canvasHeightVar);
		}
		$('#canvasCreatedModal').modal('hide')
	});

	function changeCanvas(canvasWidthVar, canvasHeightVar) {
		$('#paint-board').width(canvasWidthVar).height(canvasHeightVar);
	}
});