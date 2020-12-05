var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function () {
  const led = new five.Led({ pin: 5 });

  const offButton = new five.Button({
    pin: 8,
    isPullup: true, /// VITAL
  });

  const onButton = new five.Button({
    pin: 9,
    isPullup: true, /// VITAL
  });

  offButton.on("press", function () {
    console.log("Off pressed");
    led.off();
  });

  onButton.on("press", function () {
    console.log("On pressed");
    led.on();
  });

  temporal.queue([
    {
      wait: 1000,
      task: function () {
        console.log("initialized pin (5)");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Turning On light for test...");
      },
    },
    {
      wait: 1000,
      task: function () {
        led.on();
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Turning off light for test...");
      },
    },
    {
      wait: 1000,
      task: function () {
        led.off();
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Staring digital inputs...");
      },
    },
  ]);
});
