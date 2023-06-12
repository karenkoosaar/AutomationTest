<!-- ABOUT -->
This repository holds some automated tests written against the site saucedemo.com.
The automated tests have been written in Cypress.io with JavaScript.


<!-- THE STRUCTURE OF THE AUTOMATED TESTS -->

## Structure 
The automation framework is built with object files, utilities files, fixture files and test spec files. 

**Objects**
Under the objects folder are grouped JS files that contain elements per page and their selectors. 
For example, all login related elements and selectors are grouped together in the loginPage.js objects file.

**Utilities**
Under utilities folder are grouped JS files that contain functions in the form of Cypress commands. 
For example, all login commands are grouped together in the login.js utilities file.
The utilities files make use of the objects files to simplify the writing of commands.

**Fixtures**
Under the fixtures folder is the test input file that holds test data.

**Test scripts**
Under testSuite folder are grouped all automated test scripts.

**Support: commands and index**
- The commands.js file under Support folder holds all commands that are used across all tests.
- The e2e.js file under Support folder includes configurations to import all of the utilities files.

**Configuration**
cypress.config.js file holds configuration data important for the automated tests, i.e the baseUrl.


<!-- OVERVIEW OF TEST SCRIPTS -->

## Loginflow tests
The loginflow tests (cypress/e2e/testSuite/loginTest.cy.js)

- Successful loginflow of standard_user
This test covers the successful loginflow of the standard_user

- Failed loginflow of standard_user
This test covers the failed login of the standard_user due to incorrect password

- Failed loginflow of locked_out_user
This test covers the failed login of the locked_out_user due to user being locked out


## End-to-end test for product purchase
The end-to-end test for product purchase (cypress/e2e/testSuite/purchaseProductTest.cy.js)
- Navigation to login page
- Login as standard_user
- Sorting on Price (low to high)
- Adding last item to cart 
- Sorting on Name (A to Z)
- Adding top right item to cart
- Going to the Cart page
- Verifying items in Cart
- Going to the Checkout step 1 page
- Filling in customer data
- Going to the Checkout step 2 page
- Verifying items in Checkout
- Finishing the purchase

## Additional smoke tests
Most scenarios for a smoketest are already covered with the login tests and the end-to-end product purchase test, but a few additional ones are described under additional smoketest (cypress/e2e/testSuite/additionalSmokeTest.cy.js).
- Resetting the application
- Removing items from Cart
- Logout

<!-- HOW TO RUN TESTS -->

## Required for running tests:
- Cypress (v 12.14.0)
- Node.js (v 17.4.0)
- Node Package Manager/npm (v 6.14.6)

## Steps to run tests:
- Verify that Node.js is installed on your machine, if not then install Node.js
- Clone repository code from GitHub
- In your machine go to the location you want to clone the project, open it in command prompt and write in command prompt: git clone <cloned_repository_link>
- In command prompt go to the root of the project (folder AutomationTest)
- In command prmopt write: npm install (installs npm)
- In command prompt write: npm install cypress (installs cypress)
- To run the tests in the Cypress runner write in command prompt: npm run cypress
- To run the tests in command prompt: npx cypress run
