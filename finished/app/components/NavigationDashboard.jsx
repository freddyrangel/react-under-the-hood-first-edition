var React = require('react');
var nav   = require('../utilities/starshipNavigation.js');

var NavigationDashboard = React.createClass({
  render: function() {
    var ship = this.props.ship
    var destination = ship.destination;
    var posX = Math.round(ship.position[0]);
    var posY = Math.round(ship.position[1]);
    return (
      <div className="navigation-dashboard">
        <h2>Navigation</h2>
        <p>Destination:</p>
        <p>{destination.name.toUpperCase()}</p>
        <p>Current Position:</p>
        <p>{posX}-MARK-{posY}</p>
        <p>Heading:</p>
        <p>{nav.heading(ship)}-MARK-0</p>
      </div>
    );
  }
});

module.exports = NavigationDashboard;
