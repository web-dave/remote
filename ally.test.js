var AxeBuilder = require("axe-webdriverjs"),
  WebDriver = require("selenium-webdriver");

var driver = new WebDriver.Builder().forBrowser("firefox").build();

driver.get("https://webdave.de").then(function (done) {
  AxeBuilder(driver).analyze(function (results) {
    expect(results.violations.length).toBe(0);
    done();
  });
});
