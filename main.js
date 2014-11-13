//Main js file
//Let's break some functions out to reuse
var isNaughtyOrNice = function () {
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
};

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
$('#children').find('a').bind('click', isNaughtyOrNice);

//Let's make it so Santa can add new children to the naughty or nice list
$('#addChildrenBtn').bind('click', function(event) {
	event.preventDefault(); //As always we have to prevent the button from doing it's normal behaviour

	//Now let's get some data, we need the kid's name that was in the form, the list of kids and the template for the list
	//Notice how we could've used one var keyword, this improves performance (but not by much), readability is more important
	var kidName = $( "form[name='children-form']" ).find('input').val();
	var	unorderedList = $('#children').find('.list-group');
	var	newDomNode = "<li class='list-group-item' id='recently-added'>" + 
					kidName + 
					'<a href><i class="fa fa-thumbs-o-down pull-right"></i></a>' +
					'<a href><i class="fa fa-thumbs-o-up pull-right"></i></a> </li>';
	//now let's append the concatenated template to the unordered list
	$(newDomNode).appendTo(unorderedList);
	//Next we have to reuse the function callback we created and used above so that the new element has the same behaviour
	$('#recently-added').find('a').bind('click', isNaughtyOrNice);
	//Finally we can remove the unique ID we added to identify a new kid added
	$('#recently-added').removeAttr('id');
});


