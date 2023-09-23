const puppeteer = require("puppeteer");

(async () => {
    const browser =await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://portfolio-react-bizhead.vercel.app/about");

    const grabText = await page.evaluate(() =>{
        const typeWriter = document.querySelectorAll(".row li");
        let skills = [];
        typeWriter.forEach((tag)=> {
            skills.push(tag.innerText);
        });
        return skills;
    });
    console.log(grabText);
    await browser.close();
})();