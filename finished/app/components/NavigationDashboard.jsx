var React = require('react');
var nav   = require('../utilities/starshipNavigation.js');

var NavigationDashboard = React.createClass({
  render: function() {
    var ship = this.props.ship
    var destination = ship.destination;
    var posX = Math.round(ship.position[0]);
    var posY = Math.round(ship.position[0]);
    return (
      <div className="navigation-dashboard">
        <p>On Course to: {destination.name}</p>
        <p>
          Current Position: {posX}-mark-{posY}</p>
        <p>Heading: {nav.heading(ship)}-mark-0</p>
      </div>
    );
  }
});

module.exports = NavigationDashboard;
