Feature: To Validate Sky shop page is navigable and usable.

@TEST
Scenario: User navigates to shop page
Given I am on the home page
When I search sky in the search bar
Then I should see an editorial section


