
/* Whenever one of the tabs (Home, Projects, Coursework, Personal Corner, Contact)
is pressed, fade in the pressed tab's content. */
function change_tab(tab_name) {
	$('#Home, #Projects, #Coursework, #Personal-Corner, #Contact').hide();
	$('.personal-pic').fadeTo(0.0001, 1.0);
	$('.dropdown-info').hide();
	$('.see-less').hide();
	$(tab_name).fadeIn(800);
}


// Whenever a reveal-button is pressed, toggle the visibility of the corresponding info
function display_info(id) {
	$(id).slideToggle(400);
}

// Projects tab has a special reveal button with "see more" and "see less"
function see_more(more_id, less_id, info_id) {
	$(more_id).hide();
	$(less_id).show();
	display_info(info_id);
}

function see_less(more_id, less_id, info_id) {
	$(more_id).show();
	$(less_id).hide();
	display_info(info_id);
}


/* Whenever a different module is selected, greyscale the other modules and 
show the information pertaining to the current module */
function display_module(module_id, text_id) {
	var is_hidden = $(text_id).is(':hidden');
	if (is_hidden === true) {
		$('.dropdown-info').hide(200);
		$('.personal-pic').fadeTo(200, 0.4);
		$(module_id).fadeTo(200, 1.0);
		$(text_id).fadeIn(500);
	}
}

// Whenever mouse hovers, adjust the opacity accordingly
function hover_opacity(module_id, text_id, status) {
	var is_hidden = $(text_id).is(':hidden');
	
	if (is_hidden === true && status === 'in') {
		$(module_id).fadeTo(200, 0.75);
	}
	if (is_hidden === false && status === 'in') {
		// nothing
	}
	if (is_hidden === true && status === 'out') {
		$(module_id).fadeTo(200, 0.4);
	}
	if (is_hidden === false && status === 'out') {
		$(module_id).fadeTo(200, 1.0);
	}
}

// Initializes everything, displays HOME screen 
function main() {
	$('#Home, #Projects, #Coursework, #Personal-Corner, #Contact').hide();
	$('#Home').show();
	$('.see-less').hide();
	$('.dropdown-info').hide();
	$('#main-content').show();
}

$(document).ready(main);