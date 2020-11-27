$(document).ready(function(){

let purple_branch_count = 0;
let green_branch_count = 1;
let blue_branch_count = 2;
let yellow_branch_count = 3;

let side = 0;

let start = 0;

let shkala = 50;

let green_branch_side = 0;
let blue_branch_side = 1;
let yellow_branch_side = 0;
let purple_branch_side = 0;

let counter = 0;

let cloud_1 = 1;
let cloud_2 = 5;

let start_time = 0;

let show = 0;



$('#sound').click(function(){
  var audio = new Audio();
  audio.src = 'sound.mp3';
  audio.autoplay = true;
});

$('#left').click(function(){
	if (start == 1) {
 	 side = 0;

		start_time = 1;
		
		if($(window).width() < 500) {
			console.log("!!!")
			$('#jack').css({
			"left": "-230%",
			"transform": "scale(1, 1)"
		});
		}else{
			$('#jack').css({
			"left": "-160%",
			"transform": "scale(1, 1)"
		});
		}
		$('#how').css({
			"opacity": "0"
		});
		$('#jack-img').addClass("rot");

		Branch();
		setTimeout(Remove, 100);	
		var audio = new Audio();
		audio.volume = 0.3
  		audio.src = 'sound.mp3';
 		audio.autoplay = true;
 	}
});

$('#right').click(function(){
	if (start == 1) {
	side = 1;

		start_time = 1;

		if($(window).width() < 500) {
			console.log("!!!")
			$('#jack').css({
			"left": "230%",
			"transform": "scale(-1, 1)"
			});
		}else{
			$('#jack').css({
			"left": "150%",
			"transform": "scale(-1, 1)"
			});
		}
		$('#how').css({
			"opacity": "0"
		});
		$('#jack-img').addClass("rot");

		Branch();
		setTimeout(Remove, 100);	
		var audio = new Audio();
		audio.volume = 0.3
  		audio.src = 'sound.mp3';
  		audio.autoplay = true;
  	}
});

$('#show-choice').click(function(){
	if (show == 0 && start == 0) {
		$('#all-choice').css({
			"top": "0" + '%'
		});
		show = 1;
		document.getElementById("show-choice").innerHTML = "Закрыть";
	}else{
		$('#all-choice').css({
			"top": "-28" + '%'
		});
		show = 0;
		document.getElementById("show-choice").innerHTML = "Выбрать персонажа";
	}
});

$('#start').click(function(){
	Start();
	$('#all-choice').css({
		"top": "-28" + '%'
	});
	$('#show-choice').css({
		"opacity": 0.3
	});
	show = 0;
	document.getElementById("show-choice").innerHTML = "Выбрать персонажа";
});

$('#choice-button-1').click(function(){
	document.getElementById("jack").innerHTML = "<img src= images/jack-with-topor.png id=\'jack-img\'>";
});

$('#choice-button-2').click(function(){
	document.getElementById("jack").innerHTML = "<img src= images/jack-with-topor-2.png id=\'jack-img\'>";
});

$('#choice-button-3').click(function(){
	document.getElementById("jack").innerHTML = "<img src= images/jack-with-topor-3.png id=\'jack-img\'>";
});

$('#choice-button-4').click(function(){
	document.getElementById("jack").innerHTML = "<img src= images/jack-with-topor-4.png id=\'jack-img\'>";
});

function Start(){
	start = 1;
	//console.log(start);
	$('#start').css({
		"left": "-100%"
	});

	$('#all').css({
		"opacity": "1"
	});

	counter = 0;
	$('#counter').text(counter);
	shkala = 50;
	$('#why-1').css({
		"left": "-100" + '%'
	});
	$('#why-2').css({
		"left": "-100" + '%'
	});
	$('#shkala').css({
		"width": shkala	+ '%'
	});
}


function Cloud(){
	if (start == 1) {
		if (cloud_1 < 105) {
			cloud_1 += 0.025;
			
			$('#cloud-1').css({
				"right": cloud_1 + '%'
			});	
		}else{
			cloud_1 = -10;
		}

		if (cloud_2 < 105) {
			cloud_2 += 0.045;
			
			$('#cloud-2').css({
				"right": cloud_2 + '%'
			});
		}else{
			cloud_2 = -10;
		}
	}
}

function TheEnd(){
	start = 0;
	$('#all').css({
		"opacity": "0.6"
	});		
	$('#start').text("Еще раз");

	$('#start').css({
		"left": "32%",
		"top": "50%"
	});
	$('#how').css({
		"opacity": "1"
		
	});
	$('#show-choice').css({
		"opacity": 1
	});

	start_time = 0;
}

function Remove(){
	$('#jack-img').removeClass("rot");
}

function Minus(){

	if (start == 1 && start_time == 1) {

		if (shkala == 0) {
			$('#why-2').css({
				"left": "22.5" + '%'
			});
			$('#counter-why-2').text("Ваш счёт: " + counter);
			TheEnd();

			
		}
		else if (shkala == 100){
			shkala = 100;
		}
		else{
			shkala -= 1;
			//console.log(shkala);
		}

		$('#shkala').css({
			"width": shkala	+ '%'
		});


	}	
}

setInterval(Minus, 125);
setInterval(Cloud, 45);

document.onkeypress = function(event){

	if (start == 0) {
		if (event.keyCode == 32 || event.keyCode == 13){
			Start();
		}
	}

	

	if (start == 1) {

	if (event.keyCode == 100 || event.keyCode == 1074){

		side = 1;

		start_time = 1;
		if($(window).width() < 500) {
			console.log("!!!")
			$('#jack').css({
			"left": "230%",
			"transform": "scale(-1, 1)"
			});
		}else{
			$('#jack').css({
			"left": "150%",
			"transform": "scale(-1, 1)"
			});
		}
		
		$('#how').css({
			"opacity": "0"
		});
		$('#jack-img').addClass("rot");

		Branch();
		setTimeout(Remove, 100);	
		var audio = new Audio();
		audio.volume = 0.3
  		audio.src = 'sound.mp3';
  		audio.autoplay = true;
	}

	if (event.keyCode == 97 || event.keyCode == 1092){
		
		side = 0;

		start_time = 1;
		if($(window).width() < 500) {
			console.log("!!!")
			$('#jack').css({
			"left": "-230%",
			"transform": "scale(1, 1)"
		});
		}else{
			$('#jack').css({
			"left": "-160%",
			"transform": "scale(1, 1)"
		});
		}
		
		$('#how').css({
			"opacity": "0"
		});
		$('#jack-img').addClass("rot");

		Branch();
		setTimeout(Remove, 100);	
		var audio = new Audio();
		audio.volume = 0.3
  		audio.src = 'sound.mp3';
 		audio.autoplay = true;
	}
}
}
function Branch(){

		if($(window).width() < 500) {
		if (green_branch_side == 1){
			$('#branch-green').css({
				"left": "-340%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-green').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}

		if (blue_branch_side == 1){
			$('#branch-blue').css({
				"left": "-340%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-blue').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}

		if (yellow_branch_side == 1){
			$('#branch-yellow').css({
				"left": "-340%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-yellow').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}
		if (purple_branch_side == 1){
			$('#branch-purple').css({
				"left": "-340%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-purple').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}
	}else{
		if (green_branch_side == 1){
			$('#branch-green').css({
				"left": "-170%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-green').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}

		if (blue_branch_side == 1){
			$('#branch-blue').css({
				"left": "-170%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-blue').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}

		if (yellow_branch_side == 1){
			$('#branch-yellow').css({
				"left": "-170%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-yellow').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}
		if (purple_branch_side == 1){
			$('#branch-purple').css({
				"left": "-170%",
				"transform": "scale(1, 1)"
			});
		} else{
			$('#branch-purple').css({
				"left": "60%",
				"transform": "scale(-1, 1)"
			});
		}
	}

		if (yellow_branch_count == 3) {
			if ( yellow_branch_side != side) {
				$('#why-1').css({
					"left": "22" + '%'
					});
				$('#counter-why-1').text("Ваш счёт: " + counter);
				TheEnd();
			}
			else{
				$('#branch-purple').css({
					"top": "0%",
					"transition-duration": "0.3s"
				});
				$('#branch-green').css({
					"top": "30%",
					"transition-duration": "0.3s"
				});
				$('#branch-blue').css({
					"top": "60%",
					"transition-duration": "0.3s"
				});
				$('#branch-yellow').css({
					"top": "-30%",
					"transition-duration": "0s"
				});

				yellow_branch_side = Math.floor(Math.random() * (2 - 0) ) + 0;

				green_branch_count += 1;
				blue_branch_count += 1;
				purple_branch_count += 1;
				yellow_branch_count = 0;

				counter += 1;
				shkala += 2;
				$('#counter').text(counter);
			}
		} else if (blue_branch_count == 3){

			if ( blue_branch_side != side) {
				$('#why-1').css({
					"left": "22" + '%'
					});
				$('#counter-why-1').text("Ваш счёт: " + counter);
				TheEnd();

			}
			else{
			blue_branch_side = Math.floor(Math.random() * (2 - 0) ) + 0;

			green_branch_count += 1;
			yellow_branch_count += 1;
			purple_branch_count += 1;
			blue_branch_count = 0;
			$('#branch-purple').css({
				"top": "30%",
				"transition-duration": "0.3s"
			});
			$('#branch-green').css({
				"top": "60%",
				"transition-duration": "0.3s"
			});
			$('#branch-blue').css({
				"top": "-30%",
				"transition-duration": "0s"
			});
			$('#branch-yellow').css({
				"top": "0%",
				"transition-duration": "0.3s"
			});

			counter += 1;
			shkala += 2;
			$('#counter').text(counter);
		}
		} else if (green_branch_count == 3){

			if ( green_branch_side != side) {
				$('#why-1').css({
					"left": "22" + '%'
					});
				$('#counter-why-1').text("Ваш счёт: " + counter);
				TheEnd();
			}
			else{
			green_branch_side = Math.floor(Math.random() * (2 - 0) ) + 0;

			blue_branch_count += 1;
			yellow_branch_count += 1;
			purple_branch_count += 1;
			green_branch_count = 0;
			$('#branch-purple').css({
				"top": "60%",
				"transition-duration": "0.3s"
			});
			$('#branch-green').css({
				"top": "-30%",
				"transition-duration": "0s"
			});
			$('#branch-blue').css({
				"top": "0%",
				"transition-duration": "0.3s"
			});
			$('#branch-yellow').css({
				"top": "30%",
				"transition-duration": "0.3s"
			});

			counter += 1;
			shkala += 2;
			$('#counter').text(counter);
		}
		} else if (purple_branch_count == 3){
			if ( purple_branch_side != side) {
				$('#why-1').css({
					"left": "22" + '%'
					});
				$('#counter-why-1').text("Ваш счёт: " + counter);
				TheEnd();
			}
			else{
			//console.log(purple_branch_side);
			//console.log(side);

			purple_branch_side = Math.floor(Math.random() * (2 - 0) ) + 0;

			green_branch_count += 1;
			blue_branch_count += 1;
			yellow_branch_count += 1;
			purple_branch_count = 0;
			$('#branch-purple').css({
				"top": "-30%",
				"transition-duration": "0s"
			});
			$('#branch-green').css({
				"top": "0%",
				"transition-duration": "0.3s"
			});
			$('#branch-blue').css({
				"top": "30%",
				"transition-duration": "0.3s"
			});
			$('#branch-yellow').css({
				"top": "60%",
				"transition-duration": "0.3s"
			});

			counter += 1;
			shkala += 2;
			$('#counter').text(counter);
		}
		}

		//console.log("Purple: " + purple_branch_count);
		//console.log("Green:" + green_branch_count);
		//console.log("Blue: " + blue_branch_count);
		//console.log("Yellow: " + yellow_branch_count);
	}
});