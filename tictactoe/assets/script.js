
/*
	        TIC TAC TOE
	----------------------------
	Desenvolvido em CoffeeScript
		Código: Fabiane Lima
 */
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

$(function() {
  var count, func, indexes, vez;
  vez = 0;
  count = 0;
  indexes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  func = {
    tic: function($el) {
      count++;
      $el.css({
        pointerEvents: 'none'
      });
      if (vez === 0) {
        $el.html('&times;');
        vez = 1;
      } else if (vez === 1) {
        $el.html('&cir;');
        vez = 0;
      }
      return func.verify();
    },
    verify: function() {
      var comb;
      comb = indexes.map(function(list) {
        return list.map(function(i) {
          return $(".board div:eq(" + i + ")").html();
        }).join('');
      });
      if (indexOf.call(comb, '×××') >= 0) {
        $('section').css('filter', 'blur(15px)');
        $('.modal').fadeIn();
        return $('.modal').html('<h1>Vitória do &times;!</h1><p>Clique no botão abaixo para jogar novamente.</p><button class="again">De novo!</button>');
      } else if (indexOf.call(comb, '○○○') >= 0) {
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
