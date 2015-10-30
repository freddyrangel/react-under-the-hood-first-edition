var React            = require('react');
var nav              = require('../utilities/starshipNavigation.js');
var starData         = require('../data/starData.js');
var Ship             = require('../data/Ship.js');
var StarChart        = require('./StarChart.jsx');
var HelmControl      = require('./HelmControl.jsx');
var SetIntervalMixin = require('../mixins/SetIntervalMixin.jsx');

module.exports = React.createClass({
  mixins: [SetIntervalMixin],

  displayName: "Game",

  getInitialState: function() {
    return { ship: new Ship() };
  },

  render: function() {
    var ship = this.state.ship;
    return (
      <div>
        <StarChart
          starData={starData}
          ship={ship}
          updateDestination={this.updateDestination}/>
        <HelmControl
          starData={starData}
          ship={ship}
          updateDestination={this.updateDestination}
          updateShipInfo={this.updateShipInfo}
          updateSpeed={this.updateSpeed}
          engageWarpDrive={this.engageWarpDrive}/>
      </div>
    );
  },

  updateShipInfo: function(info) {
    var ship = this.state.ship;
    ship.info = info;
    this.setState({ship: ship});
  },

  updateDestination: function(newDestination) {
    var ship = this.state.ship;
    ship.destination = newDestination;
    this.setState({ship: ship});
  },

  updateSpeed: function(newSpeed) {
    var ship = this.state.ship;
    ship.speed = newSpeed;
    this.setState({ship: ship});
  },

  engageWarpDrive: function() {
    this.clearIntervals();
    this.setInterval(this.updateShipPosition, 30);
  },

  updateShipPosition: function() {
    var ship = this.state.ship;
    if (nav.destinationReached(ship)) {
      this.clearIntervals();
    } else {
      ship.position = nav.nextPositionToDestination(ship);
      this.setState({ship: ship});
    }
  }
});
