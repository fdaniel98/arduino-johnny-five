var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function () {
  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: [3, 5, 6],
  });

  // Set to full intensity red
  console.log("100% red");
  led.color("#FF0000");
  temporal.queue([
    {
      // After 3 seconds, dim to 30% intensity
      wait: 3000,
      task: function () {
        console.log("30% red");
        led.intensity(30);
      },
    },
    {
      // 3 secs then turn blue, still 30% intensity
      wait: 3000,
      task: function () {
        console.log("30% green");
        led.color("green");
      },
    },
    {
      // Another 3 seconds, go full intensity blue
      wait: 3000,
      task: function () {
        console.log("100% green");
        led.intensity(100);
      },
    },
    {
      wait: 3000,
      task: function () {
        console.log("30% green");
        led.intensity(30);
      },
    },
    {
      wait: 3000,
      task: function () {
        console.log("30% blue");
        led.color("blue");
      },
    },
    {
      wait: 3000,
      task: function () {
        console.log("100% blue");
        led.intensity(100);
      },
    },
  ]);
});
