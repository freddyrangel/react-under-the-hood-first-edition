# React Under the Hood: Star Trek Video Game Demo

This is the demo for the book [React Under The Hood: A Beginner's Guide](https://leanpub.com/reactunderthehood)

## About The Book

React is quickly becoming the preferred JavaScript library for building front end web applications but how does it work exactly? How are events registered and triggered? What is the Virtual DOM?

This book goes over React fundamentals as well as its internals. By the time you finish reading the book, you should have a solid understading of React, how it works under the hood, and how to debug React applications. We will go over React patterns and anti-patterns, its overall architectural philosophy, and how to work with third-party libraries.

Best of all, we're not going to do yet another Todo app. Rather, this book walks you through how to build a simple Star Trek video game from scratch using React!

**NOTE:** This is the first edition of "React Under the Hood". The repository for the second edition, with updated ES6 syntax, can be found here: [React Under the Hood: Second Edition](https://github.com/freddyrangel/react-under-the-hood-second-edition)

## Requirements:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
    * NVM is the easiest way to manage Node. [Its setup instructions here](https://github.com/creationix/nvm#installation). Then run `nvm install node && nvm alias default node`, which installs the latest version of Node.js and sets up your terminal so you can run it by typing `node`. With nvm you can install multiple versions of Node.js and easily switch between them.
    * New to [npm](https://docs.npmjs.com/)?

If you have not already done so, clone the [demo repository](https://github.com/freddyrangel/react-under-the-hood) for this tutorial. This book is not about setting up a development environment so it is highly recommended you follow along in the demo repository.

There are two main directories: `finished` and `unfinished`. You will be following along in the `unfinished` directory. `finished` is available if you are stuck or want to skip ahead. Be warned however that copy and pasting from `finished` may not always work since it represents the end state of the game. If you copy code from `finished`, it is possible that code depends on other code that is not going to be added until later in the tutorial.

That said, go ahead and `cd` into `unfinished` and run `npm i`. This will install all the dependencies required for this demo. Once that is finished, you can start the server by running `npm start` and navigating to `localhost:4000` in your browser.
