let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistrictById = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let onlyTemp = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ temp: result.data.main.temp})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getSortedCities = async function (req, res) {
    try {
        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objId= [ ]
        for(i=0; i<cities.length; i++){
            let obj={city:cities[i]}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a8acbf564c0e665dbdd48c74e1c8589c`)
            console.log(resp.data.main.temp)

            obj.temp= resp.data.main.temp
            objId.push(obj)
        }
        let sorted = objId.sort(function(a,b){return a.temp - b.temp} )
        console.log(sorted)
        res.status(200).send({status: true, data: sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
        

let myMemes = async function (req, res) {

    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ data: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictById = getDistrictById


module.exports.getWeather = getWeather
module.exports.onlyTemp = onlyTemp
module.exports.getSortedCities = getSortedCities

module.exports.myMemes = myMemes