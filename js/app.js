$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".header-section").addClass("light-header");
    } else {
        $(".header-section").removeClass("light-header");
    }
});
		$(document).on('ready', function() {
		  $(".center").slick({
			dots: true,
			infinite: true,
			centerMode: true,
			slidesToShow: 5,
			slidesToScroll: 3
		  });
		});
		var popover = new bootstrap.Popover(document.querySelector('.virus-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.invincible-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.banking-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.realtime-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.accelerated-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.network-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.increased-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.undefendable-popover'), {
		container: 'body'
		})
		var popover = new bootstrap.Popover(document.querySelector('.minimalistic-popover'), {
		container: 'body'
		})




        $(document).ready(function() {
        

            //Vertical Tab
            $('#parentVerticalTab').easyResponsiveTabs({
                type: 'vertical', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo2');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        });


        