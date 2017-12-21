/*Shows and hide form div when button is clicked. Currently not in use.*/

function showDiv() {
   document.getElementById('email-form-div').style.display = "block";
}


function hideDiv() {
   document.getElementById('email-form-div').style.display = "none";
}


$(function() {
	$( ".draggable" ).draggable();
});

/*Function to validate zipcode. Currently not in use.*/
function checkZip() {
			var zip = (document.getElementById('zip').value)
            var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zip);
			if (zip != ""){
				 if (!isValid) {
                alert('Please enter a correct zipcode');
				}
			}
        }

/*shows and hides menu on small devices*/
$(function() {
    var pull = $('#pull');
        menu = $('nav ul ');
        menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
