require('./main.css');
var React    = require('react');
var ReactDOM = require('react-dom');
var App      = require('./components/App.jsx');

var appNode = document.createElement('div');
appNode.className = 'star-trek-app';
document.body.appendChild(appNode);
ReactDOM.render(<App />, appNode);
