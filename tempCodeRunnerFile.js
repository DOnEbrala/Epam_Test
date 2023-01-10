describe("Test suite", () =>{
    it("Browse", async () => {
        await browser.url("https://pastebin.com");
    })
});

it("First text", async () => {
    await $("postform-text").setValue("Hello from WebDriver")
});
 