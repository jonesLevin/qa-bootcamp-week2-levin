
Feature: Run the complete Playwright test suite

  Scenario: Run all API tests together
    Given the project contains three UI tests, one page object test and two API tests
    When the tester has set up the environment correctly by following steps in the README.md runs npm test
    Then all six tests should be discovered and executed

  Scenario: Set up and run the test suite from a fresh clone
    Given the tester has cloned the repository into a new folder
    When the tester installs dependencies and configures the environment variables
    Then the test suite should run successfully using npm test