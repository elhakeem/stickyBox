$.fn.stickyBox = function(config) {
	
	if (config == undefined) {
		var config = {};
	}
	
	//dimentions values
	let windowH = $(window).innerHeight(),
		boxH = $(this).innerHeight(),
		boxW = $(this).innerWidth();
	//box offset value
	let boxLeft = $(this).offset().left;
	let boxTop = $(this).offset().top;
	
	
	//change position
	function position() {
		let scrollTop = window.scrollY;
		
		//case 1 -> box height >= window height
		if(	boxH >= windowH){
			var minusToTop = boxH - windowH,
				fixedStartAt = minusToTop + boxTop + (config.bottomSpace || 0);
			//make it fixed if toutched top of screen
			if(scrollTop >= fixedStartAt) {
				$(this).css({
					position: "fixed",
					left: boxLeft,
					top: -(minusToTop + (config.bottomSpace || 0))
				});
			} else {
				$(this).css("position", "");
			}
		} else {//case 2 -> box height < window height
			//make it fixed if toutched top of screen
			var fixedStartAt = boxTop - (config.topSpace || 0)
			if(scrollTop >= fixedStartAt) {
				$(this).css({
					position: "fixed",
					left: boxLeft,
					top: config.topSpace || 0
				});
			} else {
				$(this).css("position", "");
			}
		}
		
		
	}
	
	
	//renewed scroll value
	//never remove .bind($(this))
	$(window).scroll(position.bind($(this)))
}
