
var $about = $("li");

$about.addClass('new');


$about.click(function() {
	setTimeout(function() {
		$about.addClass("delayedEffect");
		alert("I am an alert box!");
	}, 1000);
});

