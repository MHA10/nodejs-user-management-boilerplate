# nodejs-user-management-boilerplate
> NodeJS Boilerplate for  User management, Login, Signup etc


# NodeJS project setup with TypeScript
> `yarn init -y`
 >> The command yarn init -y is used to initialize a new Node.js project by creating a package.json file with default values without requiring user input. This is especially useful for automation scripts, continuous integration setups, or any situation where you want to quickly set up a new project without having to manually answer questions about the project configuration.

> `yarn add typescript @types/node ts-node typeorm reflect-metadata nodemon --dev`
>> The command yarn add typescript @types/node ts-node --dev is used to add several packages as development dependencies to a Node.js project using Yarn, a package manager.

> `yarn tsc --init or tsc --init`
>> The command yarn tsc --init is used to initialize a TypeScript project by generating a tsconfig.json file. This configuration file provides various settings and options that influence how the TypeScript compiler (tsc) behaves when compiling TypeScript code to JavaScript.

> `yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/express prettier eslint-config-prettier mysql2 pg --dev`
>> Install the necessary packages for linting and development

> `Configure ESLint:`
>> Create an .eslintrc.js file in your project directory and configure ESLint

> `Configure Prettier:`
>> Create a .prettierrc.js file in your project directory

> `Lint and Run:`
>> You can now lint and run your server using the following command
>> npx eslint src --fix && npx ts-node src/index.ts

> `Add npm Scripts:`
>> Update your package.json to include npm scripts for linting and running the server:

# Postgres Database Connection
> `psql -U postgres`
>> `CREATE DATABASE your_database_name;`
