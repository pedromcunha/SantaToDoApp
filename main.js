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