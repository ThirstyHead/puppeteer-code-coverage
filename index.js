// https://www.philkrie.me/2018/07/04/extracting-coverage.html

const pti = require('puppeteer-to-istanbul');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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
    //const coverageDir = 'coverage';
    //fs.mkdir(`./${coverageDir}`, { recursive: true }, (err) => {
    //  if (err) throw err;
    //});

    // raw Puppeteer / Chrome coverage files
    //const cssFile = "css-coverage.json";
    //fs.writeFile(`${coverageDir}${path.sep}${cssFile}`, JSON.stringify(cssCoverage,null,2), function(err) {
    //    if(err) { return console.log(err); }
    //    console.log(`${cssFile} written`);
    //}); 
    
    //const jsFile = "js-coverage.json";
    //fs.writeFile(`${coverageDir}${path.sep}${jsFile}`, JSON.stringify(jsCoverage,null,2), function(err) {
    //    if(err) { return console.log(err); }
    //    console.log(`${jsFile} written`);
    //});

    // istanbul formatted coverage files
    pti.write([...jsCoverage, ...cssCoverage]);

    await browser.close();
})();
