const endpoint = "https://www.functionup.org"
const batch = "radon"

const trim = function() {
    const greeting = '   Hello world!   ';
    console.log(greeting.trim());
}

const toLowerCase = function() {
    const sentence = 'MY NAME IS gautam mehta';
    console.log(sentence.toLowerCase());
}

const toUpperCase = function() {
    const sentence = 'my name is GAUTAM MEHTA';
    console.log(sentence.toUpperCase());
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.trim = trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase
