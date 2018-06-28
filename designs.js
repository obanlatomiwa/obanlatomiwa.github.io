// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()



// Your code goes here!


var myChosenWeight, myChosenHeight;
$('#sizePicker').submit(function (event){

	event.preventDefault();
	

	
	myChosenHeight= $('#inputHeight').val();								// setting an input for the Grid Height
	myChosenWeight= $('#inputWeight').val();								// setting an input for the Grid Weight

	

	makeGrid(myChosenHeight,myChosenWeight);								// Calling the function makeGrid and passing in input parameters
	
	
});



// To create a function that generates the grid for the Pixel Art Marker
function makeGrid(i,j){
	$('tr').remove();
	

	for(var a=1; a<=i; a++){
		$('#pixelCanvas') .append('<tr>tom</tr>');

		for(var b=1; b<=j; b++){
			$('tr:last' ).append('<td></td>');
			$('td').attr('class', 'eachBox');
		}	
	}

// To Create A Specific Color For Each Box  
	
	$('.eachBox').click(function(event){
		var paintANewBox= $('#colorPicker').val();
		$(event.target).css('background-color', paintANewBox);
	});
}
