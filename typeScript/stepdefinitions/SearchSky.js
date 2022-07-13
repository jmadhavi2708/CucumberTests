"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const assert = require('assert');
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.When(/^I search sky in the search bar$/, function () {
    protractor_1.browser.sleep(2000);
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function () {
        protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Agree')]")).click;
    });
    protractor_1.browser.sleep(5000);
    var search = protractor_1.element(protractor_1.by.css("svg[class='search-toggle__icon']"));
    search.click();
    search.sendKeys('sky');
    var searchresults = protractor_1.element(protractor_1.by.css("div[id='search-results-wrapper']"));
});
cucumber_1.Then(/^I should see an editorial section$/, function () {
    protractor_1.browser.sleep(2000);
});
