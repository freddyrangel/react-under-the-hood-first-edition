require('jquery-ui/autocomplete');
var React    = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  displayName: "CourseControl",

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
    var starData = this.props.starData;
    var starNames = starData.map(function(star) { return star.name });
    $(ReactDOM.findDOMNode(this.refs.search)).autocomplete({
      source: starNames,
      minLength: 3,
      select: function(event, ui) {
        var starName  = ui.item.value;
        var system    = this.findSystem(starData, starName);
        this.props.updateDestination(system);
      }.bind(this),
      messages: {
        noResults: '',
        results: function() {}
      }
    });
  },

  findSystem: function(starData, starName) {
    return starData.filter(function(star) { return star.name === starName })[0];
  }
});
