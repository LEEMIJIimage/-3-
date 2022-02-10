import Sensor from "./models/Sensor.js";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
// const SerialPort = require('serialport')
// const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM5',{
    baudRate:9600
});

const parser = port.pipe(new Readline({ delimiter: '\n' }));
let array = [];

port.on("open",()=>{
    console.log('serial open');
});
console.log("~~~~");

parser.on("data", async(data)=>{
    console.log('got word from arduino: ', data);
    data.split(",").map((word)=>parseInt(word)).map((word)=>array.push(word));
    await Sensor.create({
        temp: array[0],
        humidity : array[1],
        cdc: array[2],
        water: array[3],
    })
    console.log(array);
    array = [];
    port.write(data);
});

export const handelLed = (light) => {
    switch(light){
        case 'a':
            port.write('a');
            break;
        case 'b':
            port.write('b');
            break;
        case 'c':
            port.write('c');
            break;
        case 'd':
            port.write('d');
            break;
        case 'e':
            port.write('e');
            break;        
    }
  };

setTimeout(handelLed, 5000);