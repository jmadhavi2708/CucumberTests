import { Given, Then, When } from "cucumber";
import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import { async } from "q";
import chai = require ("chai");

chai.use(require('chai-smoothie'));
const expect = chai.expect;

import { Driver } from "selenium-webdriver/chrome";
let EC = protractor.ExpectedConditions;  



 
 

  When(/^I search sky in the search bar$/, function () {
    browser.sleep(2000);

    browser.switchTo().frame(element(by.xpath("//iframe[@id='sp_message_iframe_474555']")).getWebElement()).then(function(){
        element(by.xpath("//button[contains(text(),'Agree')]")).click });
      browser.sleep(5000);
     var search= element(by.css("svg[class='search-toggle__icon']"));
     search.click();
     search.sendKeys('sky');
  
    
  });

  Then(/^I should see an editorial section$/, function () {
    browser.sleep(2000);
    var searchresults=element;

    expect(element(by.css("div[id='search-results-wrapper']")).to.eventually.be.true);
     });
    






