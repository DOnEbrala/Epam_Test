const Page = require('./page');

class Condition extends Page {
    get PasteMainTextArea() {
        return $('//textarea[@id ="postform-text"]');
    }
    get SyntaxHighlightingDropMenu(){
        return $(`//span[@id = "select2-postform-format-container"]`)
    }
    get SyntaxHighlightingDropMenuChooseOption(){
        return $(`//li[contains(text(), "Bash")]`)
    }
    get ClickExpirationDropMenu() {
        return $(`//span[@id = "select2-postform-expiration-container"]`);
     }
    get ChooseExpirationDropMenuOption(){
        return $(`//li[contains(text(), "10 Minutes")]`);
    }
    get TitleNamingInput(){
        return $(`//input[@id = "postform-name"]`);
    }
    get PasteSubmitButton(){
        return $('button.btn');
    }
    async PasteBinConditions(args , title) {
        await this.PasteMainTextArea.setValue(args);
        await this.SyntaxHighlightingDropMenu.click();
        await this.SyntaxHighlightingDropMenuChooseOption.click();
        await this.ClickExpirationDropMenu.click();
        await this.ChooseExpirationDropMenuOption.click();
        await this.TitleNamingInput.setValue(title);
        await this.PasteSubmitButton.click();
    }



}

module.exports = new Condition();
