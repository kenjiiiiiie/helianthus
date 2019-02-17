var nav = document.querySelector('.nav-desktop');
var navScrim = document.querySelector('.nav-scrim');
var navSvg = document.querySelector('.nav-svg');
var eyelid = document.querySelector('.logo-eyelid');
var shadow = document.querySelector('.logo-shadow');
var pupil = document.querySelector('.logo-pupil');
var navHome = document.getElementById('linkHome');
var navAbout = document.getElementById('linkAbout');
var navContact = document.getElementById('linkContact');
var btnMenu = document.querySelector('.btn-menu');
var iconMenu = document.querySelector('.icon-menu');
var btnTop = document.querySelector('.btn-top-container-hide');
var body = document.getElementById('body');

window.addEventListener('scroll', function() {
	
	if (window.pageYOffset > 56) {
		console.log("nav-shrink");
		nav.classList = 'nav-desktop-shrink';
		navSvg.classList = 'nav-svg-shrink';
		navHome.classList = 'nav-desktop-a-dark';
		navAbout.classList = 'nav-desktop-a-dark';
		navContact.classList = 'nav-desktop-a-dark';
		iconMenu.classList = 'icon-menu-dark';
		btnMenu.classList = 'btn-menu-dark';
		btnTop.classList = 'btn-top-container';
		eyelid.style.stroke = "rgba(0,200,83,1)";
		shadow.style.stroke = "rgba(0,0,0,0.16)";
		pupil.style.fill = "rgba(0,200,83,1)";
	}
	else if (window.pageYOffset < 56) {
		console.log("nav-normal");
		nav.classList = 'nav-desktop';
		navSvg.classList = 'nav-svg';
		navHome.classList = 'nav-desktop-a';
		navAbout.classList = 'nav-desktop-a';
		navContact.classList = 'nav-desktop-a';
		iconMenu.classList = 'icon-menu';
		btnMenu.classList = 'btn-menu';
		btnTop.classList = 'btn-top-container-hide';
		eyelid.style = null;
		shadow.style = null;
		pupil.style = null;
	}
});

// ====================== MOBILE NAV ====================== //

var menuLine1 = document.querySelectorAll('.menu-line')[0];
var menuLine2 = document.querySelectorAll('.menu-line')[1];
var menuLine3 = document.querySelectorAll('.menu-line')[2];
var closeLine1 = document.querySelector('.close-line-1');
var closeLine2 = document.querySelector('.close-line-2');
var navMobLink = document.querySelector('.nav-mobile-links');

function toggleMobileNav() {
	if (window.pageYOffset < 56) {
		eyelid.classList.toggle('logo-eyelid-green');
		shadow.classList.toggle('logo-shadow-green');
		pupil.classList.toggle('logo-pupil-green');
		iconMenu.classList.toggle('icon-menu-dark');
		btnMenu.classList.toggle('btn-menu-dark');
	}
	nav.classList.toggle('nav-desktop-expand');
	navScrim.classList.toggle('nav-scrim-show');
	menuLine1.classList.toggle('menu-line-hide');
	menuLine2.classList.toggle('menu-line-hide');
	menuLine3.classList.toggle('menu-line-hide');
	closeLine1.classList.toggle('close-line-show-1');
	closeLine2.classList.toggle('close-line-show-2');
	navMobLink.classList.toggle('nav-mobile-links-lift');
	body.classList.toggle('prevent-scroll');
}

function scrimCloseNav(e) {
	if (e.target === navScrim) {
		toggleMobileNav();
	}
}

btnMenu.addEventListener("click", toggleMobileNav);
window.addEventListener("click", scrimCloseNav);

document.getElementById('scrollHomeDown').addEventListener("click", function() {
	window.setTimeout(function() {
		location = "#home2";
	}, 150);
});

// ====================== BUTTON TO TOP ====================== //

document.getElementById('btnTop').addEventListener("click", function() {
	location = "#skrollr-body";
});


// ====================== CAROUSEL ====================== //

var btnCarLeft = document.querySelector('.btn-carousel-left');
var btnCarRight = document.querySelector('.btn-carousel-right');

function carouselToLeft() {	
	
	var carousel1 = document.querySelector('.carousel-item-1');
	var carousel2 = document.querySelector('.carousel-item-2');
	var carouselC = document.querySelector('.carousel-item-center');
	var carousel3 = document.querySelector('.carousel-item-3');
	var carousel4 = document.querySelector('.carousel-item-4');

	carousel1.classList = 'carousel-item-2';
	carousel2.classList = 'carousel-item-center';
	carouselC.classList = 'carousel-item-3';
	carousel3.classList = 'carousel-item-4';
	carousel4.classList = 'carousel-item-1';
	
	btnCarLeft.removeEventListener('click', carouselToLeft);
	
	window.setTimeout(function() {
		btnCarLeft.addEventListener('click', carouselToLeft);
	}, 500);

}

function carouselToRight() {
	
	var carousel1 = document.querySelector('.carousel-item-1');
	var carousel2 = document.querySelector('.carousel-item-2');
	var carouselC = document.querySelector('.carousel-item-center');
	var carousel3 = document.querySelector('.carousel-item-3');
	var carousel4 = document.querySelector('.carousel-item-4');

	carousel1.classList = 'carousel-item-4';
	carousel2.classList = 'carousel-item-1';
	carouselC.classList = 'carousel-item-2';
	carousel3.classList = 'carousel-item-center';
	carousel4.classList = 'carousel-item-3';
	
	btnCarRight.removeEventListener('click', carouselToRight);
	
	window.setTimeout(function() {
		btnCarRight.addEventListener('click', carouselToRight);
	}, 500);

}

btnCarLeft.addEventListener('click', carouselToLeft);
btnCarRight.addEventListener('click', carouselToRight);
btnCarRight.addEventListener('click', carouselToRight);

// ====================== DOWNLOAD MODAL ====================== //

var downloadScrim = document.querySelector('.download-scrim-hide');
var downloadModal = document.querySelector('.download-modal-hide');
var btnDownload1 = document.getElementById('btnCta1');
var btnDownload2 = document.getElementById('btnCtaDownload');
var btnDownloadClose = document.querySelector('.btn-close-modal');

function downloadModalToggle() {
	downloadScrim.classList.toggle('download-scrim');
	downloadModal.classList.toggle('download-modal');
	body.classList.toggle('prevent-scroll');
}

btnDownload1.addEventListener("click", downloadModalToggle);
btnDownload2.addEventListener("click", downloadModalToggle);
btnDownloadClose.addEventListener("click", downloadModalToggle);