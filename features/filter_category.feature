
Feature: Filter products by category

Scenario: A shopper chooses what type of products they want based on specific filter conditions
Given the shopper is on the ToolShop home page and want specific types of products
When the shopper selects what filters they want to apply on the filter sections
Then only products that satisfy the filter conditions should be displayed on the screen