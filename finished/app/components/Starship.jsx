var React = require('react');

var Starship = React.createClass({
  render: function() {
    return (
      <g dangerouslySetInnerHTML={this.renderImage()}></g>
    );
  },

  renderImage: function() {
    var position      = this.props.ship.position;
    var xPosition     = position[0] - 10;
    var yPosition     = position[1] - 10;
    var rotationAngle = 0;
    var imageInText = '<image xlink:href="app/images/starship.png" x="' +
      xPosition + '" y="' + yPosition + '" transform="rotate(' +
      rotationAngle + ' ' + xPosition + ' ' + yPosition + ')"' +
      ' height="20px" width="20px" />'
    return {__html: imageInText};
  }
});

module.exports = Starship;
