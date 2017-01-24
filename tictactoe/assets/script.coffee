###
	        TIC TAC TOE
	----------------------------
	Desenvolvido em CoffeeScript
		Código: Fabiane Lima
###
$ ->
	vez = 0
	count = 0
	func =
		tic: (x) ->
			count++
			x.css({ pointerEvents: 'none' })

			if vez is 0
				x.html('&times;')
				vez = 1
			else if vez is 1
				x.html('&cir;')
				vez = 0

			func.verify()

		verify: ->
			comb = 	[
						$('.board div:eq(0)').html() + $('.board div:eq(1)').html() + $('.board div:eq(2)').html(),
						$('.board div:eq(3)').html() + $('.board div:eq(4)').html() + $('.board div:eq(5)').html(),
						$('.board div:eq(6)').html() + $('.board div:eq(7)').html() + $('.board div:eq(8)').html(),
						$('.board div:eq(2)').html() + $('.board div:eq(4)').html() + $('.board div:eq(6)').html(),
						$('.board div:eq(0)').html() + $('.board div:eq(4)').html() + $('.board div:eq(8)').html(),
						$('.board div:eq(4)').html() + $('.board div:eq(3)').html() + $('.board div:eq(6)').html(),
						$('.board div:eq(1)').html() + $('.board div:eq(4)').html() + $('.board div:eq(7)').html(),
						$('.board div:eq(2)').html() + $('.board div:eq(5)').html() + $('.board div:eq(8)').html()
					]

			if comb[0] is '×××' or comb[1] is '×××' or comb[2] is '×××' or comb[3] is '×××' or comb[4] is '×××' or comb[5] is '×××' or comb[6] is '×××' or comb[7] is '×××'
				$('.dimmer').fadeIn()
				$('.modal').html('<h1>Vitória do &times;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>')

			if comb[0] is '○○○' or comb[1] is '○○○' or comb[2] is '○○○' or comb[3] is '○○○' or comb[4] is '○○○' or comb[5] is '○○○' or comb[6] is '○○○' or comb[7] is '○○○'
				$('.dimmer').fadeIn()
				$('.modal').html('<h1>Vitória do &cir;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>')

	$(document).on 'click', '.board div', -> func.tic($(this))
	$(document).on 'click', '.again', -> location.reload()
