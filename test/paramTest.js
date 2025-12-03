import { Builder, By, Key } from "selenium-webdriver";
import { capabilities } from "../capabilities.js";
import * as chai from "chai";
chai.should();

//describe block mocha
describe("Add another todo tests", function () {
  let driver;

  const USERNAME = capabilities["LT:Options"].username;
  const KEY = capabilities["LT:Options"].accessKey;
  const GRID_HOST = "hub.lambdatest.com/wd/hub";
  const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;
    
  const browsers = [
    {browser: "Chrome", bVersion: "142.0", os: "Windows 11" },
    {browser: "Firefox", bVersion: "145.0", os: "Windows 11" },
    {browser: "MicrosoftEdge", bVersion: "142.0", os: "Windows 11" }
  ];

  //parametrezation
  browsers.forEach(({browser, bVersion, os}) => {

  //it block mocha
  it(`Successfully adds a todo for browser ${browser} - ${bVersion}, ${os} `, async function () {

    capabilities["LT:Options"].platformName = os;
    capabilities["browserName"] = browser;
    capabilities["browserVersion"] = bVersion;

    capabilities["LT:Options"].name = this.test.title;


    //launch the browser OR build an another instance of firefox - before each "it""
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();

    //navigate our app location
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn selenium", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Learn selenium");

     //close the browser
    await driver.quit();
  });
   });

});
