$(document).ready(function() {
	console.log('Document ready!');

	$('.github').on('click', (event) => {
		$(event.currentTarget).hide();
	});

	$('.tile').hover((event) => {
		$(event.currentTarget).css('background-color', '#eeeeee');
	}, (event) => {
		$(event.currentTarget).css('background-color', '#ffffff');
	});
});
