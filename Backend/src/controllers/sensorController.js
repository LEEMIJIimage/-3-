import Sensor from "../models/Sensor.js"

export const home  = async(req, res)=>{
    const sensors = await Sensor.find({})

    return res.send(sensors)

}