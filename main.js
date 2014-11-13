//Main js file

//Set up the tabulation
$('footer').find('a').bind('click', function(event) {
	event.preventDefault(); //let's prevent the default action of anchor tags so they don't refresh the page
	//Set up a variable to get the name of the tab we need to activate
	var tabName = $(this).attr('href');

	//turn off all of the tabs by adding the class hidden (which hides them)
	$('#app-frame').find('#children').addClass('hidden');
	$('#app-frame').find('#workbench').addClass('hidden');
	$('#app-frame').find('#reminders').addClass('hidden');
	//Remove the class hidden from the tab we need to show
	$(tabName).removeClass('hidden');
	//Remove active from all the icons
	$('footer').find('i').removeClass('active');
	//Add active only to the icon that we are click on
	$(this).children('i').addClass('active');
});

//Set up the interaction for choosing naughty or nice
$('#children').find('a').bind('click', function() {
	event.preventDefault(); //Just like we did above we have to stop the anchor tag from navigating away
	//Store the icon that's been clicked.
	var clickedIcon = $(this).children('i');
	//Now we can check to see if it is a naughty or nice decision
	if(clickedIcon.hasClass('fa-thumbs-o-up')) {
		//then we can remove the font awesome class that makes it transparent and add the solid font class
		clickedIcon.removeClass('fa-thumbs-o-up');
		clickedIcon.addClass('fa-thumbs-up');
		//Now we can completely remove the other decision, santa won't need that
		$(this).parent().find('.fa-thumbs-o-down').remove();
	}
	//same as above but reverse
	else {
		clickedIcon.removeClass('fa-thumbs-o-down');
		clickedIcon.addClass('fa-thumbs-down');
		$(this).parent().find('.fa-thumbs-o-up').remove();
	}
	$(this).find('i').addClass('active');
});