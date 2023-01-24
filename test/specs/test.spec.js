const condition = require('../../page_objects/PageCondition');
const check = require('../../page_objects/check');

describe("Test suite", () => {

    it("First Task", async () => {
        await browser.url("https://pastebin.com")
        await condition.PasteBinConditions("Hello From Webdriver" , "helloweb");
    });
    it("Second Task", async () => {
        await browser.url("https://pastebin.com")
        await condition.PasteBinConditions('git config --global user.name "New Sheriff in Town"'+ "\uE007" + 'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")'+ "\uE007" +'git push origin master --force' , `how to gain dominance among developers` );
    });
    it("Check", async ()=>{
        await expect(browser).toHaveTitleContaining("how to gain dominance among developers");
        await check.BashOptionCheck({ timeout: 3000});
        await expect(check.CheckTextAreaByClassName).toHaveTextContaining('git config --global user.name "New Sheriff in Town"','git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")','git push origin master --force');
    })
});
