import Sensor from "./models/Sensor.js";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
// const SerialPort = require('serialport')
// const Readline = require('@serialport/parser-readline')

//sendLED, getSensor 겹치는 부분 정리하는 방법 찾기!
//-> port, parser 함수 제거 해도 괜찮은지 확인

const port = new SerialPort("COM5", {
  baudRate: 9600,
});
const parser = port.pipe(new Readline({ delimiter: "\n" }));

port.on("open", () => {
  console.log("serial open");
});

export const handelLed = (light) => {
  if (light == "o") {
    port.write("o");
  } else if (light == "x") {
    port.write("x");
  }
};

// setTimeout(()=>port.write('L50'),5000);
setTimeout(handelLed, 5000);
