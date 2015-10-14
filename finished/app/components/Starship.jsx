var React         = require('react');
var starshipImage = require('../utilities/starshipImage.js');

var Starship = React.createClass({

  render: function() {
    return (
      // React does not support SVG Image elements. We need to do this ourselves
      <g dangerouslySetInnerHTML={this.renderImage()}></g>
    );
  },

  renderImage: function() {
    var imageInText = starshipImage.renderImageElementAsString(this.props.ship);
    return {__html: imageInText};
  }
});

module.exports = Starship;
