var React = require('react');

module.exports = React.createClass({

  displayName: "Stars",

  render: function() {
    return (
      <g>
        {this.props.starData.map(this.renderStars)}
      </g>
    );
  },

  renderStars: function(star, index) {
    var circleAttr = {
      cx: star.position[0],
      cy: star.position[1],
      r: 2,
      className: 'star-circle'
    };
    var textAttr = {
      x: star.position[0] + 5,
      y: star.position[1] + 5,
      className: 'star-name' + ' ' + star.jurisdiction
    };
    return (
      <g key={index}>
        <text {...textAttr} onClick={this.props.updateDestination.bind(null, star)}>
          {star.name}
        </text>
        <circle {...circleAttr}></circle>
      </g>
    );
  }
});
