$(document).ready(() => {
	
	$("#toggleClick").click(()=>{
		$(".navBar").toggleClass("toggledNavbar");

	})

	$("#card1click").click(()=>{
		$("#content1").slideToggle("max-height");
	})

	$("#card2click").click(()=>{
		$("#content2").slideToggle("max-height");
	})

	$("#card3click").click(()=>{
		$("#content3").slideToggle("max-height");
	})

}) //end document ready function
