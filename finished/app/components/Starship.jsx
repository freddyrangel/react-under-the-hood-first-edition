var React = require('react');
var nav   = require('../utilities/starshipNavigation.js');

var Starship = React.createClass({
  render: function() {
    return (
      // React does not support SVG Image elements. We need to do this ourselves
      <g dangerouslySetInnerHTML={this.renderImage()}></g>
    );
  },

  renderImage: function() {
    var navData       = nav.data(this.props.ship);
    var shipPosition  = this.props.ship.position
    var imagePosition = navData.imagePosition;
    var rotationAngle = navData.rotationAngle;
    var imageInText = '<image xlink:href="app/images/starship.png"' +
      // Image Position
      'x="' + imagePosition[0] + '" y="' + imagePosition[1] +
      // Rotation Angle
      '" transform="rotate(' + rotationAngle + ' ' +
      // Rotation Center
      imagePosition[0]+ ' ' + imagePosition[1] + ')"' +
      // Size of Image
      ' height="20px" width="20px" />'
    return {__html: imageInText};
  }
});

module.exports = Starship;
