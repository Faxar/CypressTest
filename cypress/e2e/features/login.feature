@regression
Feature: Login Page

    Scenario: Login using valid credentails
        Given I access Login Portal Page
        When I enter a Admin, admin123 and click login
        Then I should be redirected to Dashboard page

    Scenario Outline: Login using invalid credentails
        Given I access Login Portal Page
        When I enter a <username>, <password> and click login
        Then I should be presented with the following message <message>

        Examples:
            | username   | password      | message             |
            | Admin      | admin155      | Invalid credentials |
            | Magda      | admin123      | Invalid credentials |
            | dummyAdmin | dummyPassword | Invalid credentials |
            | admin      | Admin123      | Invalid credentials |