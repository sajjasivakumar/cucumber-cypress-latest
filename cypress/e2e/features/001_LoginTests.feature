###########################################################################################################
# File Name          : 001LoginTests.feature                                                              #
# Author             : Siva Kumar Sajja                                                                   #
# Description        : UI Login Tests                                                                     #
###########################################################################################################

@LoginFeature
Feature:Login tests

  @validLogin
  Scenario Outline: Login into nf console using valid details.
    Given user navigates to console
    And user enters email as "<email>"
    And user enters password as "<pass>"
    Then user clicks on Sign In button
    And user validates "Dashboard"

    Examples:
      | email | pass |
      |       |      |

  