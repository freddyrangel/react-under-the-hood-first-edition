var React     = require('react');
var Stars     = require('../data/Stars.js');
var StarChart = require('./StarChart.jsx');

var App = React.createClass({
  render: function() {
    return <StarChart starData={Stars.getStarData()} />
  }
});

module.exports = App;
