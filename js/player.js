// If the player is in section 3 or 1, draw them white against the black background
// Otherwise (in section 2) draw them black against the white background.
function draw_player(){
	if (section == 3 || section == 1){
		fill(255);
	} else if (section == 2){
		fill(0);
	}
	rect(x, y, player_width, player_height);
}

function change_section(new_section){

	if (new_section == 2){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x -= player_width;
		section = 2;
	}
	if (new_section == 1){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x = 0;
		section = 1;
	}
}

function transition_sections(){
	difference = 0;
	// Transition between section 3 to 2
	if (x+player_width>windowWidth && section == 3){
		difference = (x+player_width) - windowWidth;
		fill(0);
		rect(windowWidth - difference + speed, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference >= player_width){
			change_section(2);
		}
	// Transition between section 2 to 1
	} else if (x<0 && section == 2){
		difference = (x+player_width) ;
		fill(255);
		rect(-difference, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference <= 0){
			change_section(1);
		}
	}
}

function player_jump(){
	if (jump == false){
		jump = true;
		y -= current_acceleration;
	}
	if (jump == true){
		current_acceleration -= gravity;
		y -= current_acceleration;
		if (section == 3){
			base = windowHeight-player_height-bottombar 
			if (y > base){
				y = base;
				jump = false;
				current_acceleration = jump_acceleration;
			}
		} else if (section == 2){
			base = windowHeight-player_height-bottombar - (((windowHeight-bottombar-topbar)/3)-1);
			if (y > base){
				y = base;
				jump = false;
				current_acceleration = jump_acceleration;
			}
		} else if (section == 1){
			base = windowHeight-player_height-bottombar - (2*(((windowHeight-bottombar-topbar)/3))-1);
			if (y > base){
				y = base;
				jump = false;
				current_acceleration = jump_acceleration;
			}
		}
	}
}

function move(){
	if(section == 3 || section == 1){
		x += speed;
	} else if (section == 2){
		x -= speed;
	}
	if (jump == true) player_jump();
	transition_sections();
}

function run(){
	draw_player();
	move();
}

function hit(){
	
}