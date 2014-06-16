
$(document).ready(function() {

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').mousedown(function(){
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'margin-left': '500px'},
				800,
				function() {
					$.alert(1)
					$(this).hide();
					$(this).css('margin-left', '-10px');
							} 
						)
						playHadouken();
						function playHadouken () {
							$('#hadouken-sound')[0].volume = .3;
							$('#hadouken-sound')[0].load();
							$('#hadouken-sound')[0].play();}
							});
	$(document).keydown(function(event){
		if(event.which ==88){
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();

				playCool()
				function playCool(){
				$('#smoothJams')[0].volume=.3;
				$('#smoothJams')[0].load();
				$('#smoothJams')[0].play();}
							}});
	$(document).keyup(function(event){
		if(event.which==88){
		$('ryu-cool').hide();
		$('.ryu-still').show();
		}});



	});


