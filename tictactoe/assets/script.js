
/*
	        TIC TAC TOE
	----------------------------
	Desenvolvido em CoffeeScript
		Código: Fabiane Lima
 */

(function() {
  $(function() {
    var count, func, vez;
    vez = 0;
    count = 0;
    func = {
      tic: function(x) {
        count++;
        x.css({
          pointerEvents: 'none'
        });
        if (vez === 0) {
          x.html('&times;');
          vez = 1;
        } else if (vez === 1) {
          x.html('&cir;');
          vez = 0;
        }
        return func.verify();
      },
      verify: function() {
        var comb;
        comb = [$('.board div:eq(0)').html() + $('.board div:eq(1)').html() + $('.board div:eq(2)').html(), $('.board div:eq(3)').html() + $('.board div:eq(4)').html() + $('.board div:eq(5)').html(), $('.board div:eq(6)').html() + $('.board div:eq(7)').html() + $('.board div:eq(8)').html(), $('.board div:eq(2)').html() + $('.board div:eq(4)').html() + $('.board div:eq(6)').html(), $('.board div:eq(0)').html() + $('.board div:eq(4)').html() + $('.board div:eq(8)').html(), $('.board div:eq(4)').html() + $('.board div:eq(3)').html() + $('.board div:eq(6)').html(), $('.board div:eq(1)').html() + $('.board div:eq(4)').html() + $('.board div:eq(7)').html(), $('.board div:eq(2)').html() + $('.board div:eq(5)').html() + $('.board div:eq(8)').html()];
        if (comb[0] === '×××' || comb[1] === '×××' || comb[2] === '×××' || comb[3] === '×××' || comb[4] === '×××' || comb[5] === '×××' || comb[6] === '×××' || comb[7] === '×××') {
          $('section').css('filter', 'blur(15px)');
          $('.modal').fadeIn();
          return $('.modal').html('<h1>Vitória do &times;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>');
        } else if (comb[0] === '○○○' || comb[1] === '○○○' || comb[2] === '○○○' || comb[3] === '○○○' || comb[4] === '○○○' || comb[5] === '○○○' || comb[6] === '○○○' || comb[7] === '○○○') {
          $('section').css('filter', 'blur(15px)');
          $('.modal').fadeIn();
          return $('.modal').html('<h1>Vitória do &cir;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>');
        } else if (count === 9) {
          $('section').css('filter', 'blur(15px)');
          $('.modal').fadeIn();
          return $('.modal').html('<h1>Empate!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>');
        }
      }
    };
    $(document).on('click', '.board div', function() {
      return func.tic($(this));
    });
    return $(document).on('click', '.again', function() {
      return location.reload();
    });
  });

}).call(this);
