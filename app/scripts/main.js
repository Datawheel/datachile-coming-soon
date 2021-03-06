var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

$(document).ready(function() {
	/*Counter*/
	$('#counter')
		.countdown('2018/01/08 19:30:00', function(event) {
			$(this).html(
				event.strftime(
					'<div><span class=\'value\'>%-D</span><span class=\'unit\'>días</div>' +
						'<div><span class=\'value\'>%-H</span><span class=\'unit\'>horas</div>' +
						'<div><span class=\'value\'>%-M</span><span class=\'unit\'>minutos</div>' +
						'<div><span class=\'value\'>%-S</span><span class=\'unit\'>segundos</div>'
				)
			);
		})
		.on('update.countdown', function(event) {})
		.on('finish.countdown', function(event) {});

	/*SHARE*/
	var popupSize = {
		width: 780,
		height: 550
	};

	$(document).on('click', '.social-button', function(e) {
		var verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
			horisontalPos = Math.floor(
				($(window).height() - popupSize.height) / 2
			);

		var popup = window.open(
			$(this).prop('href'),
			'social',
			'width=' +
				popupSize.width +
				',height=' +
				popupSize.height +
				',left=' +
				verticalPos +
				',top=' +
				horisontalPos +
				',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1'
		);

		if (popup) {
			popup.focus();
			e.preventDefault();
		}
	});

	if (isMobile.any()) {
		$('.wa_btn').show();
	}
});
