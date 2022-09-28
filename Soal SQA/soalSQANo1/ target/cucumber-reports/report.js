$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featuresFiles/features.feature");
formatter.feature({
  "name": "Check string palindrome or not",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Input string \u003cinput\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Check palindrome",
  "keyword": "When "
});
formatter.step({
  "name": "Validasi palindrome\u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input",
        "output"
      ]
    },
    {
      "cells": [
        "\"makan\"",
        "\"false\""
      ]
    },
    {
      "cells": [
        "\"makam\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"taat\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"apple\"",
        "\"false\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Input string \"makan\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Input_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Check_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validasi palindrome\"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Validasi_palindrome(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Input string \"makam\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Input_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Check_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validasi palindrome\"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Validasi_palindrome(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Input string \"taat\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Input_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Check_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validasi palindrome\"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Validasi_palindrome(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Input string \"apple\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Input_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Check_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validasi palindrome\"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.Validasi_palindrome(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});