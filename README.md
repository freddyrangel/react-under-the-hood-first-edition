# React Under the Hood: Star Trek Video Game Demo

This is the demo for the book [React Under The Hood: A Beginner's Guide](http://bit.ly/react-under-the-hood)

## About The Book

React is quickly becoming the preferred JavaScript library for building front end web applications but how does it work exactly? How are events registered and triggered? What is the virtual DOM?

This book goes over the fundamentals of React as well some of the internals of React. You will learn to understand and debug applications built with React. You will learn React patterns and anti-patterns, it's architectural philosophy, and how to work with third-party libraries.

Rather than using a typical Todo app as a demo, this book walks you through how to build a Star Trek video game from scratch using React.

## Requirements:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
    * NVM is the easiest way to manage Node. [Its setup instructions here](https://github.com/creationix/nvm#installation). Then run `nvm install node && nvm alias default node`, which installs the latest version of Node.js and sets up your terminal so you can run it by typing `node`. With nvm you can install multiple versions of Node.js and easily switch between them.
    * New to [npm](https://docs.npmjs.com/)?

If you have not already done so, clone the [demo repository](https://github.com/freddyrangel/react-under-the-hood) for this tutorial. This book is not about setting up a development environment so it is highly recommended you follow along in the demo repository.

There are two main directories: `finished` and `unfinished`. You will be following along in the `unfinished` directory. `finished` is available if you are stuck or want to skip ahead. Be warned however that copy and pasting from `finished` may not always work since it represents the end state of the game. If you copy code from `finished`, it is possible that code depends on other code that is not going to be added until later in the tutorial.

That said, go ahead and `cd` into `unfinished` and run `npm i`. This will install all the dependencies required for this demo. Once that is finished, you can start the server by running `npm start` and navigating to `localhost:4000` in your browser.
