"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const assert = require('assert');
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.When(/^I try to sign in with invalid credentials$/, function () {
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function () {
        protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Agree')]")).click;
    });
    protractor_1.browser.sleep(5000);
    protractor_1.browser.switchTo().defaultContent;
    protractor_1.browser.sleep(2000);
    var Signin = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Sign in')]"));
    Signin.click();
    protractor_1.browser.sleep(5000);
    protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iFrame[@title='iFrame containing Sky Sign-In application']")).getWebElement()).then(function () {
        var username = protractor_1.element(protractor_1.by.css("input[name='username']"));
        username.click().then(function () {
            protractor_1.browser.sleep(3000);
            username.sendKeys('test#@gmail.com').then(function () {
                protractor_1.browser.sleep(3000);
                var Continue = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Continue')]"));
                Continue.click();
                protractor_1.browser.sleep(3000);
            });
        });
    });
});
cucumber_1.Then(/^I should see a box with the text ‘Create your My Sky password’$/, function () {
});
