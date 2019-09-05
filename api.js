const puppeteer = require('puppeteer');
const fs = require('fs');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.work.ua/jobs-kyiv-it/?advs=1');
  await page.waitFor(3000);

    for(let i=1; i<31; i++) {
        let title = document.querySelector(`#pjax-job-list > div:nth-child(${i}) > h2 > a`);
            fs.appendFile(path.join(__dirname,  'data.txt'), title, function(error){
                if(error) throw error; 
                
                console.log(title);
        });
    }

   browser.close();
  return result;
}

getPic();