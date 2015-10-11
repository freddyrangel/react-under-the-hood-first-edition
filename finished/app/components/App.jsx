var React       = require('react');
var Stars       = require('../data/Stars.js');
var StarChart   = require('./StarChart.jsx');
var ShipInfo    = require('./ShipInfo.jsx');

var App = React.createClass({
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
        destination: [500, 300]
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
          updateDestination={this.updateDestination}/>
        <ShipInfo
          ship={ship}
          updateShip={this.updateShip} />
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
  }
});

module.exports = App;
