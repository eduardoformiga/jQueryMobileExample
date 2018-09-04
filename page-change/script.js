var scrollTopLast = 0;

var layoutInicial = true;

$(window).on('scroll', checarScroll);

function checarScroll(){
	var scrollTop = $(window).scrollTop();
	console.log('scrollTop: ' + scrollTop + ' scrollTopLast: ' + scrollTopLast + ' layoutInicial: '+layoutInicial);

	if (scrollTop == 0 && !layoutInicial) {
		console.log('bottom-top SHOW COMPLETE: ' + $(window).scrollTop());
	} else if (scrollTop > scrollTopLast && layoutInicial && scrollTop > 220) {
		// primeiro caso, scroll do menu grande ate que ele saia da tela
		hideBigHeader();
		layoutInicial = false;
		scrollTop = 0;
		scrollTopLast = 0;
	}else if (scrollTop > scrollTopLast && !layoutInicial) {
		// esconder menu pequeno fixo
		hideSmallHeader();
	}else if (scrollTop < scrollTopLast && !layoutInicial) {
		console.log('MOSTRAR HEADER BRANCO: ' + $(window).scrollTop());
		showSmallHeader();
		addMarginTopContent();
	}
	scrollTopLast = scrollTop;
}

function hideBigHeader(){
	$('.header').css("display", "none");
}

function showBigHeader(){
	$('.header').css("display", "block");
}


function hideSmallHeader(){
	$('.header-os-small').css("display", "none");
}

function showSmallHeader(){
	$('.header-os-small').css("display", "block");
}

function addMarginTopContent(){
	$('.os-content').css('margin-top', '44px');
}