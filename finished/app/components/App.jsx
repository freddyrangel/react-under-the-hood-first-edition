var React             = require('react');
var Stars             = require('../data/Stars.js');
var StarChart         = require('./StarChart.jsx');
var ShipInfo          = require('./ShipInfo.jsx');
var Navigation        = require('./Navigation.jsx');
var SetIntervalMixin  = require('../mixins/SetIntervalMixin.jsx');
var nav               = require('../utilities/starshipNavigation.js');

var App = React.createClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return {
      ship: {
        name: null,
        crew: {
          captain: null,
          firstOfficer: null,
          chiefEngineer: null,
          tacticalOfficer: null,
          helmsman: null
        },
        position: [500, 300],
        destination: {
          name: 'Sol',
          position: [500, 300],
          jurisdiction: 'Federation'
        },
        speed: 0
      }
    };
  },

  render: function() {
    var ship = this.state.ship;
    return (
      <div>
        <StarChart
          starData={Stars.getStarData()}
          ship={ship}
          updateDestination={this.updateDestination}
          updateShipPosition={this.updateShipPosition}/>
        <div className="dashboard">
          <ShipInfo
            ship={ship}
            updateShip={this.updateShip} />
          <Navigation
            ship={ship}
            updateSpeed={this.updateSpeed}
            engageWarpDrive={this.engageWarpDrive}/>
        </div>
      </div>
    );
  },

  updateShip: function(ship) {
    this.setState({ship: ship});
  },

  updateDestination: function(destination) {
    var ship = this.state.ship;
    ship.destination = destination;
    this.setState({ship: ship});
  },

  updateSpeed: function(newSpeed) {
    var ship = this.state.ship;
    ship.speed = newSpeed;
    this.setState({ship: ship});
  },

  engageWarpDrive: function() {
    this.setInterval(this.updateShipPosition, 10);
  },

  updateShipPosition: function() {
    var ship = this.state.ship;
    var nextPos = nav.nextPositionToDestination(ship);
    if (nav.destinationReached(ship)) {
      this.clearIntervals();
    } else {
      ship.position = nextPos;
      this.setState({ship: ship});
    }
  }
});

module.exports = App;
