Frontend Developer Demonstration
=======

### Introduction

_"The purpose of this demo is to demonstrate my familiarity with the AngularJS frontend technology, programming patterns and to provide with a sample of what clean and reusable code means to me as a developer."_

I have included a global build setup, in order to not only demonstrate my code, but also to give a glimpse of my development process and tools. The optimized output of the files is located in the ./build/ folder, the source originates from the ./source/

### Installation

[NodeJS](https://nodejs.org/) and [GulpJS](http://gulpjs.com/) ([installation](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)) are required to develop and/or build this project. (Tested on node v4.4.7 ang Gulp v3.9.0)

After installing both packages, install the required components by running the following command in the Command Line Interface (CLI) from the project folder:

  install yarn & bower: npm install yarn -g

    yarn install && bower install

After installation, run the following command to ensure correct setup:

    gulp

This should display a list of available commands. The primary commands are:

    gulp dev

and

    gulp build

The dev-task is used during development and does not optimize the assets/code. It has browser-sync enabled and runs unit tests in the background. The build starts with running unit tests and fails on error. It then optimizes the code and runs a code analysis tool ([plato](https://github.com/es-analysis/plato)) on each build in order to give a basic report (./reports/plato/) on the state and complexity of the source code.

For test driven development, simply run the following command:

    gulp test --tdd

This task will start a Karma instance with watchers enabled on de code.

---

### Structure & Style

Comments are used liberaly throughout the code. Feel free to inspect the source files. This app is very limited on views, but I have tried to construct is in such a way that adding new views and features is quite managable.

I have adhered the [Angular 1 styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) as documented by John Papa. In my opinion a great, clear guide in which it is encouraged to break up an SPA into multiple modules. Following that styleguide results in very readable code, especially on larger codebases.

### Third party components

I have added several third party components to the code. In this use case, the following goes for nearly all of the components, especially the frameworks: loading up the entire library when you would need only a few components is not optimized for a finished product. As a proof of concept however, I am satisfied with current setup.
I find that using a framework gives you varied mileage. These opiniated tools help you get started, but can get in the way for specific use cases. I would analyse the requirements further down the road (if available) to determine wether to start out with frameworks or decide to build a component or framework from scratch.

#### Generic components

**Fontawesome**

Fontawesome is my favorite icon set to use in web applications. I realise in this instance, I only use the assets to render the cup-symbol to indicate winners. If that would remain the case, I would probably try and optimize this in only importing the icons necessary.

**Bootstrap**

I use Bootstrap to be able to quickly scaffold an app with predefined, responsive and robust UI elements. It enables me to quickly mock an interface.

#### AngularJS components

**Angular UI Router**

I have included Angular UI Router for it's extended capabilities over angular router.

**Angular Bootstrap**

Angular Bootstrap provides easy integration between the bootstrap theme and angular directives. I have included the modal in this particular instance.

**Angular Loading bar**

This component attaches itself to any http requests (via the $http service) the SPA makes and displays a generic loading bar. This removes the necessity of adding multiple loading icons or spinners for several components. Keep in mind that in some cases a more contextual loading animation would be of significance for the user. That is the reason I have added an additional notifcation when loading the seasons. I found it took about 2s loading om GPRS network, to about 800ms unthrottled, which still is a significant amount of time to wait for the content.

---

### About

Author: [Joran Quinten](mailto:joran@joranquinten.nl), July 2017
