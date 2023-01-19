const Page = require('./page');

class condition extends Page {
    get pasteFrame() {
        return $('//textarea[@id ="postform-text"]');
    }
    get clickDrop() {
        return $(`//span[@id = "select2-postform-expiration-container"]`);
     }
    get chooseDrop(){
        return $(`//li[contains(text(), "10 Minutes")]`);
    }
    get titleFrame(){
        return $(`//input[@id = "postform-name"]`);
    }
    get button(){
        return $('button.btn');
    }
    async pasteBinFrame(args , title) {
        await this.pasteFrame.setValue(args)
        await this.clickDrop.click();
        await this.chooseDrop.click();
        await this.titleFrame.setValue(title);
        await this.button.click()
    }



}

module.exports = new condition();
