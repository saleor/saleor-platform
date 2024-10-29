Feature: User Management
  As an admin
  I want to manage user accounts
  So that I can control who has access to the system

  Scenario: Admin login
    Given I am on the login page
    When I enter my admin credentials
    Then I should be redirected to the admin dashboard
