import { Given, Then, When } from "cucumber";
import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import { async } from "q";
import chai = require ("chai");


chai.use(require('chai-smoothie'));
const expect = chai.expect;
import { Driver } from "selenium-webdriver/chrome";
let EC = protractor.ExpectedConditions;  

Given(/^I am on the deals page$/, function (){
     browser.get("https://www.sky.com/deals‘");
    browser.sleep(5000);
  });

 
 

  Then(/^I see a list of deals with a price to it$/, function () {
    browser.sleep(2000);

    browser.switchTo().frame(element(by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function(){
        element(by.xpath("//button[contains(text(),'Agree')]")).click });
      browser.sleep(5000);
  var dealslist = element(by.xpath("//strong[contains(text(),'£')]"));
      expect(dealslist).to.contain.text('£');
    
  });

