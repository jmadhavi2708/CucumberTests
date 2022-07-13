"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const assert = require('assert');
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given(/^I am on the deals page$/, function () {
    protractor_1.browser.get("https://www.sky.com/deals‘");
    protractor_1.browser.sleep(5000);
});
cucumber_1.Then(/^I see a list of deals with a price to it$/, function () {
    protractor_1.browser.sleep(2000);
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function () {
        protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Agree')]")).click;
    });
    protractor_1.browser.sleep(5000);
});
