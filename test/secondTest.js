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

  //launch the browser OR build an another instance of firefox - before each "it""
  beforeEach(function () {
    capabilities["LT:Options"].name = this.currentTest.title;
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();
  });

  //close the browser
  afterEach(async function () {
    await driver.quit();
  });

  //it block mocha
  it("successfully adds another todo application", async function () {
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
  });
  it("Adding a new test for reporting", async function () {
    //navigate our app location
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Java Script", Key.RETURN);

    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using chai should
    todoText.should.equal("Learn Java Script");
  });
});
