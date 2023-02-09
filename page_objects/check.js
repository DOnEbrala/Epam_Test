const Page = require('./page');

class CheckPage extends Page {
    get checkBashIfExist(){
        return $(`//a[contains(text(), "Bash")]`);
    }
    get checkTextAreaByClassName(){
        return $(`//ol[@class = "bash"]`)
    }
    async bashOptionCheck(){
        this.checkBashIfExist.waitForDisplayed();
    }


}

module.exports = new CheckPage();
