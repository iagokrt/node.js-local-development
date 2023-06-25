
# Node.js Local Development

This repository contains a collection of tools and resources to streamline local development using Node.js. It aims to provide developers with a set of best practices and guidelines for setting up a local development environment for Node.js projects.

## Features

-   **Docker Compose Configuration**: This repository includes a ready-to-use Docker Compose configuration file that sets up a local development environment with commonly used services such as a Node.js runtime, a database server, and a caching layer.
    
-   **Development Scripts**: We provide a set of scripts that automate common development tasks, such as installing project dependencies, running tests, and starting the local development environment.
    
-   **Configuration Management**: Learn how to manage different configuration settings for development, staging, and production environments using environment variables and configuration files.
    
-   **Debugging Tools**: Discover various debugging techniques and tools available for Node.js developers, including debugging with breakpoints, logging, and performance profiling.
    
-   **Testing Frameworks**: Explore popular testing frameworks and libraries for Node.js and learn how to write tests for your applications to ensure code quality and reliability.
    

## Getting Started

To get started with this project, follow these steps:

1.  Clone the repository: `git clone https://github.com/iagokrt/node.js-local-development.git`
2.  Install project dependencies: `npm install`
3.  Create your coding solution using `npm run laut {name-for-the-files}`

The command will create the files on the directory for us to test using the filename for both test file and also the solution.

**In summary, this code automates the creation of a JavaScript file and a corresponding test file, each with a predefined template, based on user input for the desired file name. It uses the `fs` module to interact with the file system and the `path` module to handle file paths.**



## Contribution

Contributions are welcome and encouraged! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for more information.

## Acknowledgments

-   [Node.js](https://nodejs.org/) - The JavaScript runtime used for building scalable and efficient network applications.
-   [CHAI](https://www.chaijs.com/) - _Chai_ is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any _javascript_ testing framework.
-   [MOCHA](https://www.chaijs.com/) - Mocha is a feature-rich JavaScript test framework running on [Node.js](https://nodejs.org/) and in the browser, making asynchronous testing _simple_ and _fun_. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
-   [JSDoc](https://jsdoc.app/) - An API documentation generator for JavaScript.


## Check out the Examples

- In the /dev directory you have the 'fo' folder which have some modules for examples. 
	- The `fn` function is exported and can be used to be tested with mocha and chai support on the project.
	-  The rectangle function is also exported as default on the `rectangle.js` file 
	- The `stdin` file is a file that you can use for custom input when needed
	- The string.js file is just a string 😂


### How to get started

 1. Create your coding solutions using `npm run laut {name-for-the-files}` 

	 
	    
	- After executing this command, you will have a new file and its corresponding test file. 
	- The template for the test file can be found in the `testContent` variable within the `createFilesFromPrompt.js` file.


 2. Now, with the generated test file, you have the flexibility to effortlessly create test cases and assertions either before or after completing the problem.
 3. Finally, run these tests 🧪




### Here's an example of how the initial test execution appears.


    //PS
    C:\git\node.js-local-development> npm run test

> test
> mocha --require @babel/register 'test/_tests_/*.js'



---
  Testing functions using JavaScript syntax
    Test the input based on the arguments
      ✔ Should be a function
    Run test on the main program
      1) Should be a function using three parameters


  1 passing (20ms)
  1 failing

  1) Testing functions using JavaScript syntax
       Run test on the main program
         Should be a function using three parameters:

      AssertionError: expected 2 to equal 3
      + expected - actual

      -2
      +3
      
      at Context.<anonymous> (test\_tests_\/leet_id_name.test.js:21:32)
      at processImmediate (node:internal/timers:466:21)
---


## Support

If you have any questions, issues, or need assistance, feel free to come to your discord server.


