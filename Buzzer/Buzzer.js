var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function () {
  const buzzer = new five.Piezo(12);

  board.repl.inject({
    buzzer: buzzer,
  });

  board.loop(3000, function () {
    buzzer.play({
      song: [
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["A4", 1 / 4],
        [null, 1 / 4],
        ["A4", 1],
        ["G4", 1],
        [null, 1 / 2],
        ["C4", 1 / 4],
        ["D4", 1 / 4],
        ["F4", 1 / 4],
        ["D4", 1 / 4],
        ["G4", 1 / 4],
        [null, 1 / 4],
        ["G4", 1],
        ["F4", 1],
        [null, 1 / 2],
      ],
      tempo: 100,
    });
  });
});
