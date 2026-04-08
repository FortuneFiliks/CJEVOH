function view_Menu(){
	$(":root").css({"overflow-y":"hidden"});
	$(".mobile_menu_section").css({"transform" : "translateY(0%)"});
}

function hide_Menu(){
	$(":root").css({"overflow-y":"visible"});
	$(".mobile_menu_section").css({"transform" : "translateY(-100vh)"});
}

let menuOpen = false;

$(document).on("click", "#menu_bars", function () {
	if (!menuOpen) {
		view_Menu();
	} else {
		hide_Menu();
	}
	menuOpen = !menuOpen;
});


