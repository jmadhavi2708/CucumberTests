Feature: To Validate Sky shop page Login Page


Scenario: User navigates to shop page
Given I am on the home page
When I try to sign in with invalid credentials 
Then I should see a box with the text ‘Create your My Sky password’


