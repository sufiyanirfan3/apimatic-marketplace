const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

$('.category-items').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 8,
	slidesToScroll: 8,
	responsive: [
	  {
		breakpoint: 1100,
		settings: {
		  slidesToShow: 6,
		  slidesToScroll: 6,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 5,
		  slidesToScroll: 5
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 4
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

  $('.category-apis').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	// variableWidth: true,
	responsive: [
	  {
		breakpoint: 1100,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: false,
		}
	  },
	  {
		breakpoint: 800,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });