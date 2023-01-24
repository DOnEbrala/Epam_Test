const Page = require('./page');

class Check extends Page {
    get CheckBashIfExist(){
        return $(`//a[contains(text(), "Bash")]`);
    }
    get CheckTextAreaByClassName(){
        return $(`//ol[@class = "bash"]`)
    }
    async BashOptionCheck(){
        this.CheckBashIfExist.waitForDisplayed();
    }


}

module.exports = new Check();
