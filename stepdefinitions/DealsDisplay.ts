import { Given, Then, When } from "cucumber";
import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import { async } from "q";
import chai = require ("chai");
chai.use(require('chai-smoothie'));
const expect = chai.expect;
import { Driver } from "selenium-webdriver/chrome";
let EC = protractor.ExpectedConditions;  

Given(/^I am on the home page$/, function (){
     browser.get("https://www.sky.com/");
    browser.sleep(5000);
  });

 
  When(/^I navigate to Deals$/,  function () {
    
    browser.switchTo().frame(element(by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function(){
      element(by.xpath("//button[contains(text(),'Agree')]")).click });
    browser.sleep(5000);


   

    
  
  });

  Then(/^the user should be on the page$/, function () {
    browser.sleep(2000);

    var DEals  =element(by.xpath("//a[contains(text(),'Deals')]"))
    DEals.click();
    var heading=element(by.xpath("//h1[contains(text(),'Sky Deals')]"));
    
    expect(heading).to.contain.text('Sky Deals');
    
  });

