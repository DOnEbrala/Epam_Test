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
        const buttonBtn = await $('button.btn');
    });
    it("check", async () => {
        const myInput = await $(`input//div[@class="de1"]`);
        await expect(myInput).toHaveValueContaining('Hello from WebDriver')
        await browser.refresh();
    });
});
