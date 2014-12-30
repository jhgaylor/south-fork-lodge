jQuery.noConflict();
jQuery(document).ready(function($) {
  
	"use strict";

	//Reviews CarouFred...
	if($('.caroufred_reviews').length > 0) {
		$('.caroufred_reviews').carouFredSel({
			responsive: true,
			width: '100%',
			scroll: {
				fx: "crossfade"
			},
			auto: true,
			items: {
				height: 'auto',
				visible: {
					min: 1,
					max: 1
				}
			}
		});
	}
	
	//Contact Map...
	var $map = $('#footer_map, #contact_map');
	var motel_address = '904 Hwy 9 North Salem, AR 72576';
	if( $map.length ) {
		$map.gMap({
			address: motel_address,
			zoom: 12,
			markers: [
				{ 'address' : motel_address }
			]
		});
	}

	//Scroll toTop...
	$("a.scrollTop").each(function(){
		$(this).click(function(e){
			$("html, body").animate({ scrollTop: 0 }, 600);
			e.preventDefault();
		});
	});
});
