import { Given, Then, When } from "cucumber";
import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import { async } from "q";
import chai = require ("chai");

chai.use(require('chai-smoothie'));
const expect = chai.expect;
import { Driver } from "selenium-webdriver/chrome";
let EC = protractor.ExpectedConditions;  



 
  When(/^I try to sign in with invalid credentials$/,  function () {
    
    browser.switchTo().frame(element(by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function(){
        element(by.xpath("//button[contains(text(),'Agree')]")).click });
      browser.sleep(5000);
browser.switchTo().defaultContent;
browser.sleep(2000);
var Signin  =element(by.xpath("//a[contains(text(),'Sign in')]"));
Signin.click();
browser.sleep(5000);

browser.switchTo().frame(element(by.xpath("//iFrame[@title='iFrame containing Sky Sign-In application']")).getWebElement()).then(function(){
    
var username=element(by.css("input[name='username']"));
username.click().then(function(){
browser.sleep(3000);
username.sendKeys('test#@gmail.com').then(function(){
browser.sleep(3000);
var Continue = element(by.xpath("//button[contains(text(),'Continue')]"));
Continue.click();
browser.sleep(3000);
})

})
  
})
  });

  Then(/^I should see a box with the text ‘Create your My Sky password’$/, function () {
    
    var createPwd=element(by.css("div[class='subtitle center']"));
    expect(createPwd).to.contain.text('£');


  });

