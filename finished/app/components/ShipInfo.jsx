var React            = require('react');
var CrewInfo         = require('./CrewInfo.jsx');
var EditableElement  = require('./EditableElement.jsx');

var ShipInfo = React.createClass({
  render: function() {
    var ship = this.props.ship
    var crew = ship.crew;
    return (
      <div className="ship-info">
        <h2>Ship Info</h2>
        <EditableElement
          keyName="name"
          item={ship.name}
          defaultValue="Ship Name"
          onEdit={this.updateShipName}/>
        <CrewInfo crew={crew} updateCrew={this.updateCrew}/>
      </div>
    );
  },

  updateCrew: function(crew) {
    var ship = this.props.ship
    ship.crew = crew;
    this.props.updateShip(ship);
  },

  updateShipName: function(keyName, newValue) {
    var ship = this.props.ship
    ship.name = newValue;
    this.props.updateShip(ship);
  }
});

module.exports = ShipInfo;
