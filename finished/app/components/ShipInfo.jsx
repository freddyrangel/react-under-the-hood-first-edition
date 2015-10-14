var React            = require('react');
var EditableElement  = require('./EditableElement.jsx');

var ShipInfo = React.createClass({
  render: function() {
    var ship = this.props.ship;
    var info = ship.info;
    return (
      <div className="ship-info">
        <h2>Ship Info</h2>
        {this.renderElement('shipName', info.shipName, 'Ship Name')}
        {this.renderElement('captain', info.captain, 'Captain Name')}
        {this.renderElement('firstOfficer', info.firstOfficer, 'First Officer')}
        {this.renderElement('chiefEngineer', info.chiefEngineer, 'Chief Engineer')}
        {this.renderElement('tacticalOfficer', info.tacticalOfficer, 'Tactical Officer')}
        {this.renderElement('helmsman', info.helmsman, 'Helmsman')}
      </div>
    );
  },

  renderElement: function(keyName, item, defaultValue) {
    return (
      <EditableElement
          keyName={keyName}
          item={item}
          defaultValue={defaultValue}
          onEdit={this.updateShipInfo}/>
    );
  },

  updateShipInfo: function(key, newValue) {
    var ship = this.props.ship;
    ship.info[key] = newValue;
    this.props.updateShip(ship);
  }
});

module.exports = ShipInfo;
