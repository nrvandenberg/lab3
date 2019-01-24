'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
initializePage();
})
function initializePage() {
$("#testjs").click(function(e) {
$('.jumbotron h1').text("Javascript is connected");
$("#testjs").text("Please wait...");
$(".jumbotron p").toggleClass("active");
});

$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    e.preventDefault();
	var containingProject = $(this).closest(".project");
     var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeToggle();//"<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}
