const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const rgb = new Led.RGB([3, 5, 6]);
  let index = 0;
  const rainbow = [
    "FF0000",
    "FF7F00",
    "FFFF00",
    "00FF00",
    "0000FF",
    "4B0082",
    "8F00FF",
  ];

  board.loop(1000, () => {
    rgb.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });
});
