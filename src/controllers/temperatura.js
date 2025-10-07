import ServiceTemperatura from '../services/temperatura.js'

class ControllerTemperatura {

    ConvertCelToFah(req, res) {
        try {
            const cel = req.body.cel

            //chama o service
            const fah = ServiceTemperatura.ConvertCelToFah(cel)
            

            res.status(200).send({ data: { cel, fah} })
            
        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }
    }

    ConvertFahToCel(req, res) {

        try {
            
        } catch (error) {
            res.status(400).send({ msg: error.massage })
        }

    }
}

export default new ControllerTemperatura()