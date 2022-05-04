# Introduction

This is a bare minimum framework setup of API Testing for TAE Assessment project

## Tests Covered:

* API

## Framework/Languages used:

* JS
* Cucumber
* SuperTest
* Chai

## Design Pattern used:
* BDD

## Prerequisite:
* npm - 8.6.0
* node - 18.10.0

## Steps to Run:

1. Clone GIT repository in named directory.

   **_Run:_**
    ```
     > cd ~/workspace/
     > mkdir <api-js_directory_name>
     > cd <api-js_directory_name>
     > git clone https://github.com/sanjoymun/TAE-InsoDDTB-Assessment-API.git
    ```     
2. Install all dependencies -

   **_Run:_**
    ```
        > cd ~/workspace/<api-js_directory_name>
        > npm install
     ```       
   **Note**:This will install all dependencies project will be using for executing.


3. To run test -

   **_Run:_**
    ```
    > cd ~/workspace/<api-js_directory_name>
    > npm run test [This will run all tests under feature file]
    > to execute tests individually => npx cucumber-js --tags="@scenario1" can be executed
    > to execute tests in groups => npx cucumber-js --tags="@scenario1 or @scenario2 or @scenario3" can be executed
    ```
    
 4. To generate report - 
    
    **_Run:_**
    ```
    > npm run generate-report
    ```
    - HTML Reports will get generated after every run under ./reporter/cucumber-report.html path

**Note: This framework can be integrated with CI/CD pipeline using Jenkins (for e.g.)
 
## Author

* Sanjoy Roy
