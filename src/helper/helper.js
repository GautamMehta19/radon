
const chunk = function() {
    const lodash = require("lodash");
    let arr = ["January","february","march","april","may","june","july","august","september","october","november","december"];
    console.log(lodash.chunk(arr, 4))
}

const tail = function() {
    const lodash = require('lodash');
    let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newArray = lodash.tail(x);
    console.log(newArray);
}


module.exports.chunk = chunk
module.exports.tail = tail

