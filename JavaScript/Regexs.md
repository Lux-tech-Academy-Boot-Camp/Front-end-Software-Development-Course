## **Introduction to regular expressions in JavaScript.** 

A regular expression is a string that describes a pattern e.g., **email addresses** and **phone numbers.**

In JavaScript, regular expressions are objects. JavaScript provides the built-in RegExp type that allows you to work with regular expressions effectively.

Regular expressions are useful for searching and replacing strings that match a pattern. They have many useful applications.

For example, you can use regular expressions to extract useful information in web scraping like product prices. Or you can use regular expressions to validate form fields like email addresses and phone numbers. 

**Creating a regular expression.**
To create a regular expression in JavaScript, you enclose its pattern in forward-slash (/) characters like this:

```javacript
let re = /hi/;
``` 

> Note that a regular expression doesn’t have single quotes or double quotes like a regular string.