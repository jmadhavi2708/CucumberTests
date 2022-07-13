import * as path from "path";
import { browser, Config, protractor } from "protractor";
import { Reporter } from "../support/reporter"
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    directConnect:false,

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    defaultTimeoutInterval:25000,
    allScriptsTimeout:50000,
    getPageTimeout:60000,


    baseUrl: "https://www.google.com",

    capabilities: {
        browserName: "edge",
        'chromeOptions': {
            'args': [
                'disable-infobars',
                'disable-gpu=true',
            ],
            'prefs': {
                'credentials_enable_service': false,
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                
            }
    }
}
    },


    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
        
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.waitForAngular();       
        let EC = protractor.ExpectedConditions;    
        browser.driver.manage().timeouts().implicitlyWait(30000); 
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
      
        tags: "@TEST",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
}
