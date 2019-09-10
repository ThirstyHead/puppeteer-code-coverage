// https://www.philkrie.me/2018/07/04/extracting-coverage.html

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await Promise.all([
        page.coverage.startJSCoverage(),
        page.coverage.startCSSCoverage()
    ]);

    await page.goto('http://localhost:8888');
  
    //Retrive the coverage objects
    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage(),
    ]);

    //Write out coverage to files
    const cssFile = "css-coverage.json";
    fs.writeFile(cssFile, JSON.stringify(cssCoverage,null,2), function(err) {
        if(err) { return console.log(err); }
        console.log(`${cssFile} written`);
    }); 
    
    const jsFile = "js-coverage.json";
    fs.writeFile(jsFile, JSON.stringify(jsCoverage,null,2), function(err) {
        if(err) { return console.log(err); }
        console.log(`${jsFile} written`);
    });

    await browser.close();
})();
