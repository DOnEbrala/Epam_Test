const Page = require('./page');

class Check extends Page {
    get checkCondition(){
        return $(`//ol[@class = "text"]`)
    }


}

module.exports = new Check
