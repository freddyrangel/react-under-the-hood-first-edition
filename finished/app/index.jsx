require('./main.css');
window.Perf = require('react-addons-perf')

var React    = require('react');
var ReactDOM = require('react-dom');
var Game     = require('./components/Game.jsx');

var appNode = document.createElement('div');
appNode.className = 'react-game';
document.body.appendChild(appNode);
ReactDOM.render(<Game />, appNode);
