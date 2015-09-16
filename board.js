var WHACK = WHACK || {};

WHACK.Board = (function() {

  var $board;

  function init() {
    $board = $('.container');
    var numberOfMoles = WHACK.MainModule.getNumberOfMoles();
    for (var i = 0; i < numberOfMoles; i++) {
      _drawMole(i);
    };
  };

  function _drawMole(i) {
    var $mole = $("<div class='mole'></div>");
    $mole.appendTo($board);
  };

  function activate(moleID) {
    $board.children().eq(moleID).addClass('active');
  };

  function deactivate() {
    $board.children().removeClass('active');
  };

  return {
    init: init,
    activate: activate,
    deactivate: deactivate
  };

})();