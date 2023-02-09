const Page = require('./page');

class ConditionPage extends Page {
    get pasteMainTextArea() {
        return $('//textarea[@id ="postform-text"]');
    }
    get syntaxHighlightingDropMenu(){
        return $(`//span[@id = "select2-postform-format-container"]`)
    }
    get syntaxHighlightingDropMenuChooseOption(){
        return $(`//li[contains(text(), "Bash")]`)
    }
    get clickExpirationDropMenu() {
        return $(`//span[@id = "select2-postform-expiration-container"]`);
     }
    get chooseExpirationDropMenuOption(){
        return $(`//li[contains(text(), "10 Minutes")]`);
    }
    get titleNamingInput(){
        return $(`//input[@id = "postform-name"]`);
    }
    get pasteSubmitButton(){
        return $('button.btn');
    }
    async pasteBinConditions(args , title) {
        await this.pasteMainTextArea.setValue(args);
        await this.syntaxHighlightingDropMenu.click();
        await this.syntaxHighlightingDropMenuChooseOption.click();
        await this.clickExpirationDropMenu.click();
        await this.chooseExpirationDropMenuOption.click();
        await this.titleNamingInput.setValue(title);
        await this.pasteSubmitButton.click();
    }



}

module.exports = new ConditionPage();
