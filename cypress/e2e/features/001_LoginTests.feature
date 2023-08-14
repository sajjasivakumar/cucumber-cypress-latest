############################################################################################################
# File Name          : 001_NF_LoginTests.feature                                                           #
# Author             : Siva Kumar Sajja                                                                    #
# Description        :  Login test cases                                                                   #
############################################################################################################

@LoginFeature
Feature:Login tests

  @validLogin @login @p1 @smoke
  Scenario Outline: Login into nf console using valid details.
    Given user navigates to fb console
    And user enters email as "<email>"
    And user enters password as "<pass>"
    Examples:
      | email | pass |
      |       |      |
