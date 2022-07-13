"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const assert = require('assert');
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given(/^I am on the home page$/, function () {
    protractor_1.browser.get("https://www.sky.com/");
    protractor_1.browser.sleep(5000);
});
cucumber_1.When(/^I navigate to Deals$/, function () {
    //browser.waitForAngularEnabled(true);
    //browser.get("");
    // browser.ignoreSynchronization=true;
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function () {
        protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Agree')]")).click;
    });
    protractor_1.browser.sleep(5000);
});
cucumber_1.Then(/^the user should be on the page$/, function () {
    protractor_1.browser.sleep(2000);
    var DEals = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Deals')]"));
    DEals.click();
    var heading = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Sky Deals')]"));
    //assert.equal(heading.getText,'Sky Deals');
});
