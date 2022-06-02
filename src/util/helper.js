const endpoint = "https://www.functionup.org"
const batch = "radon"

const printDate = function() {
    const birthday = new Date('June 1, 2022 22:38:30');
    const date1 = birthday.getDate();
    console.log(date1);
}

const printMonth = function() {
    const moonLanding = new Date('June 1, 2022 23:20:18');
    const month = moonLanding.getMonth();
    console.log(month);
}

const getBatchInfo = function() {
    console.log('batch name Roadon, week# W3, Day# D1, the topic for today is Nodejs module system')
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
