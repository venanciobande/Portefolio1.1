(function($) {

	var $window = $(window),
		$body = $('body'),
		$navegacao = $('#navegacao'),
		$header = $('#cabecalho');

	// Breakpoints (não utilizados directamente, pode ser removido ou implementado com CSS media queries)

	// Remover classe de pré-carregamento ao carregar a página
	$window.on('load', function() {
		setTimeout(function() {
			$body.removeClass('pre-carregamento');
		}, 100);
	});

	// Menu de navegação
	var $navegacao_a = $navegacao.find('a');

	$navegacao_a
		.addClass('scrolly') // Para activar a rolagem suave
		.on('click', function(e) {
			var $link = $(this);
			if ($link.attr('href').charAt(0) !== '#') return;
			e.preventDefault();
			$navegacao_a.removeClass('active');
			$link.addClass('active active-locked');
		})
		.each(function() {
			var $link = $(this),
				id = $link.attr('href'),
				$section = $(id);

			if ($section.length < 1) return;

			$section.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {
					$section.addClass('inactive');
				},
				enter: function() {
					$section.removeClass('inactive');

					if ($navegacao_a.filter('.active-locked').length === 0) {
						$navegacao_a.removeClass('active');
						$link.addClass('active');
					} else if ($link.hasClass('active-locked')) {
						$link.removeClass('active-locked');
					}
				}
			});
		});

	// Rolar suave para elementos com classe .scrolly="(rolar)"
	$('.scrolly').scrolly();

	// ===== MENU HAMBURGUER EM TELAS PEQUENAS =====

	// Cria o botão do menu hamburguer
	$('<div id="headerToggle">' +
		'<a href="#cabecalho" class="toggle"></a>' +
	'</div>').appendTo($body); 

	// Define o painel lateral
	$header.panel({
		delay: 300,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $body,
		visibleClass: 'header-visible'
	});

})(jQuery);
