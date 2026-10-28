/*Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript  */

function getBrowserName(browser){
    if(browser=='Chrome'){
        console.log("Entered browser name is"+browser)
    }
    else{
      console.log("Entered browser name is not chrome,its" ,browser)
    }
}
getBrowserName("Chrome")
getBrowserName("Edge")

function testType(testName){
  switch (testName) {
    case "Smoke":
      console.log("Test type entered is",testName) 
      break;
    case "Sanity":
      console.log("Test type entered is",testName)
      break;
    case "Regression":
      console.log("Test type entered is",testName)
      break;
    default:
      console.log("Enter valid test type")
      break;
  }
}
testType("Sanity")
testType("Regression")

