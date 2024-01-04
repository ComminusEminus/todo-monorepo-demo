# React Todo Monorepo Demo
## Description
React Todo Demo is a simple application for exploring full stack javascript architecture design and implementation. Using npm’s workspaces the project is organized as a monorepo.

Project features include add delete update of multiple todo lists as well as todo list items for each list. Each list can be filtered by completed, uncompleted or all list items. In addition each set of todo lists is associated with a user profile, which is required to gain access to the todo lists.

The data is stored using a NoSQL document database; Although the architecture of the application has a strong focus on decoupling of the domain from implementation to allow for effortless swapping of data persistence as well as server and UI frameworks. 

Ports for the server and UI are located in .env file located in the main directory. The current defaults are 3000 and 9004 respectively. After installation these can be updated if need be. I chose to use a mongo db atlas for persistence and I have included a login I have created for use of the project. Atlas login is also located in .env file. If using default Atlas login you can use the Username: default and Password: password which contain dummy data for quick viewing but can you create your own user profile and play with the functions from there.

## How to Install
1. Fork repository 
2. Clone to local device 
3. Run cli command “npm launchApp” while in the applications main directory to launch the Node.js server and ui.
4. Open browser and navigate to http://localhost: {3000 or self selected port}
