describe("Test suite", () => {

    it("Browse", async () => {
        await browser.url("https://pastebin.com");
    });

    it("First Task", async () => {
        const write = await $('//textarea[@id ="postform-text"]');
        const input = await write.setValue("Hello from WebDriver");
        const setDropDown = await $(`//span[@id = "select2-postform-expiration-container"]`).click();
        const choose = await $(`//li[contains(text(), "10 Minutes")]`).click();
        const setTitle = await $(`//input[@id = "postform-name"]`).setValue("helloweb");
        const buttonBtn = await $('button.btn').click()
    });

    it("Check First", async () => {
        const myValue = await $(`//div[contains(text(), "Hello from WebDriver")]`)
        myValue.waitForDisplayed(2000);
    });
    
    it("Second Task", async () => {
        await browser.url("https://pastebin.com");
        const write = await $('//textarea[@id ="postform-text"]');
        const inputOne = await write.addValue(`git config --global user.name "New Sheriff in Town"`)
        await browser.keys(["\uE007"]);
        const inputTwo = await write.addValue(`git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")`);
        await browser.keys(["\uE007"]);
        const inputThree = await write.addValue(`git push origin master --force`);
        const setDropDown = await $(`//span[@id = "select2-postform-expiration-container"]`).click();
        const choose = await $(`//li[contains(text(), "10 Minutes")]`).click();
        const setTitle = await $(`//input[@id = "postform-name"]`).setValue("how to gain dominance among developers");
        const buttonBtn = await $('button.btn').click()

        //checkSecond

        await expect(browser).toHaveTitleContaining("how to gain dominance among developers");
        const codeCheck = await $('//ol[@class = "text"]')
        await expect(codeCheck).toHaveTextContaining('git config --global user.name "New Sheriff in Town"','git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")','git push origin master --force');

    })

});
