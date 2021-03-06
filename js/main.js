function openNav() {
  document.getElementById("Sidenav").style.width = "50%";
  document.getElementById("mask").style.width = "50%";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("mask").style.width = "0";
}

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {

  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }

  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});

/*
function checkPswd() {
    var confirmPassword = "2021";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.location="AmbientPC.html";
    }
    else{
        alert("Passwords do not match.");
    }
}
*/
