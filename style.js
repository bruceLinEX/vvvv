$(document).ready(function(){
window.sr = ScrollReveal({ reset: true });
sr.reveal('.poster1-js',{ duration:1500,origin: 'bottom',scale:0.5});
sr.reveal('.poster1-js-text1',{ duration:1000,origin: 'left',delay:500,scale:0.5});
sr.reveal('.poster1-js-text2',{ duration:1000,origin: 'top',delay:1000,scale:0.5});

	$('.hamber').click(function(){
		if($('.navbar_1').css("left") == "-250px"){
			$('.i-span1').css({display:'none'});
			$('.i-span2').css({display:'none'});
			$('.i-span3').css({display:'none'});
			$('.i-span4').css({display:'block',transform:'scale(1,1)',transition:'3s all'});
			$('.navbar_1').animate({
				left:'0px'
			},1000,'easeOutCirc');
			$('.section').animate({
				left:'250px'
			},1000,'easeOutCirc');
			$('.hamber').animate({
				left:'270px'
			},1000,'easeOutCirc');
		}else if($('.navbar_1').css("left") == "0px"){
			$('.i-span1').css({display:'block'});
			$('.i-span2').css({display:'block',});
			$('.i-span3').css({display:'block',});
			$('.i-span4').css({display:'none'});
			$('.navbar_1').animate({
				left:'-250px'
			},1000,'easeOutBounce');
			$('.section').animate({
				left:'0%'
			},1000,'easeOutBounce');
			$('.hamber').animate({
				left:'1%'
			},1000,'easeOutBounce');

		}
	});
$('.HOME').click(function(){
$('.HOME').css({color:'#ffa500'});
$('.ABOUT').css({color:'#fff'});
$('.RESUME').css({color:'#fff'});
$('.SERVICE').css({color:'#fff'});
$('.CONTACT').css({color:'#fff'});

});

$('.ABOUT').click(function(){
$('.HOME').css({color:'#fff'});
$('.ABOUT').css({color:'#ffa500'});
$('.RESUME').css({color:'#fff'});
$('.SERVICE').css({color:'#fff'});
$('.CONTACT').css({color:'#fff'});

});
$('.RESUME').click(function(){
$('.HOME').css({color:'#fff'});
$('.ABOUT').css({color:'#fff'});
$('.RESUME').css({color:'#ffa500'});
$('.SERVICE').css({color:'#fff'});
$('.CONTACT').css({color:'#fff'});

});
$('.SERVICE').click(function(){
$('.HOME').css({color:'#fff'});
$('.ABOUT').css({color:'#fff'});
$('.RESUME').css({color:'#fff'});
$('.SERVICE').css({color:'#ffa500'});
$('.CONTACT').css({color:'#fff'});

});
$('.CONTACT').click(function(){
$('.HOME').css({color:'#fff'});
$('.ABOUT').css({color:'#fff'});
$('.RESUME').css({color:'#fff'});
$('.SERVICE').css({color:'#fff'});
$('.CONTACT').css({color:'#ffa500'});

});

// $('#fullpage').anchors({
// 	firstPage:$('.HOME').css({color:'#ffa500'}),
// 	secondPage:$('.ABOUT').css({color:'#ffa500'}),
// 	thirdPage:$('.RESUME').css({color:'#ffa500'}),


// });


});


function doFirst() {
//alert('welcome');
}
function hamberclick(){


}



window.addEventListener('load', doFirst, false);













// $(document).ready(function() {
// 	$('#board2222').click(function() {
// 		if($('#board111').css("left")=="-200px")
// 		{
// 		$('#board111').animate({
// 			left : '0px'
// 		}, 1000, 'easeOutQuad');
// 	}else{
// 				$('#board111').animate({
// 			left : '-200px'
// 		}, 1000, 'easeOutQuad');
// 	}
// 	});
// 	$('#board2222').click(function() {
// 		if($(this).css("left")=="0px")
// 		{
// 		$(this).animate({
// 			left : '250px'
// 		}, 1000, 'easeOutQuad');
// 	}else{
// 				$(this).animate({
// 					left : '0px'
// 		}, 1000, 'easeOutQuad');
	
	
	 
	 
// 	}
// 	});
	
	
	
// });