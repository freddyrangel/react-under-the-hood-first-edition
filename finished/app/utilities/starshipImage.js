var nav = require('./starshipNavigation.js');

module.exports = {
  renderImageElementAsString: function(ship) {
    var navData       = nav.data(ship);
    var shipPosition  = ship.position
    var imagePosition = navData.imagePosition;
    var heading       = navData.heading;
    var imageInText   = '<image xlink:href="app/images/starship.png"' +
      // Image Position
      'x="' + imagePosition[0] + '" y="' + imagePosition[1] +
      // Rotation Angle
      '" transform="rotate(' + heading + ' ' +
      // Rotation Center
      imagePosition[0]+ ' ' + imagePosition[1] + ')"' +
      // Size of Image
      ' height="20px" width="20px" />'
    return imageInText;
  }
};
