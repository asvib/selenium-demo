import { Builder, By, Key } from "selenium-webdriver";
import * as chai from "chai";
chai.should();

//describe block mocha
describe("Add todo tests", function () {
  //it block mocha
  it("successfully adds a todo application", async function () {
    //launch the browser OR build an another instance of firefox
    let driver = await new Builder().forBrowser("firefox").build();

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

//assert using node assertion
//assert.strictEqual(todoText, "Learn java script");
