var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

function changeColorAnimation(led, color) {
  led.color(color);

  // Fade In
  for (var index = 0; index < 100; index++) {
    temporal.queue([
      {
        wait: 1000,
        task: function () {
          led.intensity(index);
        },
      },
    ]);
  }

  // Fade Out
  for (var index = 0; index < 100; index++) {
    temporal.queue([
      {
        wait: 1000,
        task: function () {
          led.intensity(100 - index);
        },
      },
    ]);
  }
}

board.on("ready", function () {
  var unit = 0;
  var intensity = 1;
  var colors = ["red", "green", "blue"];
  var index = 0;

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
      loop: 25,
      task: function () {
        console.log("Execution # " + unit);
        led.intensity(100 - intensity);
        intensity += 1;
        unit += 1;
        console.log("INTESIDAD: " + intensity);
        if (intensity === 100) {
          intensity = 0;

          index++;

          if (index >= 3) {
            index = 0;
          }

          led.color(colors[index]);
        }
      },
    },
  ]);

  /* changeColorAnimation(led, "red");
  changeColorAnimation(led, "green");
  changeColorAnimation(led, "blue"); */
});
