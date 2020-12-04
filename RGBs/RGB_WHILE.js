var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function () {
  var unit = 0;
  var intensity = 1;
  var colors = ["red", "green", "blue", "yellow", "purple"];
  var index = 0;
  var mainIntensity = 100;

  var led = new five.Led.RGB({
    pins: [3, 5, 6],
  });

  console.log("Initialized Uno Board");

  temporal.queue([
    {
      wait: 1000,
      task: function () {
        console.log("Pin (3, 5, 6) Initialized");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("###### -- Turn Lights for test ---- ######");
      },
    },
    {
      wait: 2000,
      task: function () {
        console.log("Turning on light : red");
        led.color("red");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Turning off light : red");
        led.off();
      },
    },
    {
      wait: 2000,
      task: function () {
        console.log("Turning on light : green");
        led.color("green");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Turning off light : green");
        led.off();
      },
    },
    {
      wait: 3000,
      task: function () {
        console.log("Turning on light : blue");
        led.color("blue");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Turning off light : blue");
        led.off();
        console.log("Finish test...");
      },
    },
    {
      wait: 1000,
      task: function () {
        console.log("Start Loop...");
        led.color("red");
      },
    },
    {
      loop: 20,
      task: function () {
        console.log("Execution # " + unit);
        var current =
          mainIntensity === 100
            ? mainIntensity - intensity
            : mainIntensity + intensity;
        led.intensity(current);

        intensity += 1;
        unit += 1;
        console.log("INTESITY : " + intensity);

        if (intensity > 100) {
          intensity = 0;

          index++;

          if (index >= 5) {
            index = 0;
          }

          if (mainIntensity === 100) {
            mainIntensity = 0;
          } else {
            mainIntensity = 100;
          }

          if (mainIntensity === 0) {
            led.color(colors[index]);
          } else {
            mainIntensity === 0;
          }
        }
      },
    },
  ]);
});
