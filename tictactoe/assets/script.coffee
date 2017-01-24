###
	        TIC TAC TOE
	----------------------------
	Desenvolvido em CoffeeScript
		Código: Fabiane Lima
###
$ ->
	vez = 0
	count = 0

	indexes = [
		#rows
		[0, 1, 2]
		[3, 4, 5]
		[6, 7, 8]
		#cols
		[0, 3, 6]
		[1, 4, 7]
		[2, 5, 8]
		#diag
		[0, 4, 8]
		[2, 4, 6]
	]

	func =
		tic: ($el) ->
			count++
			$el.css({ pointerEvents: 'none' })

			if vez is 0
				$el.html('&times;')
				vez = 1
			else if vez is 1
				$el.html('&cir;')
				vez = 0

			func.verify()

		verify: ->
			comb = indexes.map (list) ->
				list.map (i) -> $(".board div:eq(#{i})").html()
				.join ''

			if '×××' in comb
				$('section').css('filter','blur(15px)')
				$('.modal').fadeIn()
				$('.modal').html('<h1>Vitória do &times;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>')

			else if '○○○' in comb
				$('section').css('filter','blur(15px)')
				$('.modal').fadeIn()
				$('.modal').html('<h1>Vitória do &cir;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>')

			else if count is 9
				$('section').css('filter','blur(15px)')
				$('.modal').fadeIn()
				$('.modal').html('<h1>Empate!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>')

	$(document).on 'click', '.board div', -> func.tic($(this))
	$(document).on 'click', '.again', -> location.reload()
