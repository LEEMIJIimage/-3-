import Sensor from "./models/Sensor.js";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";
// const SerialPort = require('serialport')
// const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM5',{
    baudRate:9600
});
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on("open",()=>{
    console.log('serial open');
});

parser.on('data', function(data){

    console.log('send data: '+data);

});

setInterval(sendDataFunc, 5000);


function sendDataFunc(){
    const a=50;
    port.write("a");
    console.log('Data Send...');

};
