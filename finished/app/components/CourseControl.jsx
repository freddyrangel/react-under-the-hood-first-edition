require('jquery-ui/autocomplete');
var React = require('react');
var utils = require('../utilities/starUtilities.js');

var CourseControl = React.createClass({
  render: function() {
    return (
    <div className="course-control">
      <h2>Course Control</h2>
      <input type="text"
        className="search"
        placeholder="Star System"
        ref="search"/>
    </div>
    );
  },

  componentDidMount: function() {
    this.autocomplete();
  },

  componentDidUpdate: function() {
    this.autocomplete();
  },

  autocomplete: function() {
    var stars = this.props.stars
    var starNames = utils.getStarNames(stars);
    $(React.findDOMNode(this.refs.search)).autocomplete({
      source: starNames,
      minLength: 3,
      select: function(event, ui) {
        var starName  = ui.item.value;
        var system    = utils.findSystem(stars, starName);
        this.props.updateDestination(system);
      }.bind(this),
      messages: {
        noResults: '',
        results: function() {}
      }
    });
  }
});

module.exports = CourseControl;
