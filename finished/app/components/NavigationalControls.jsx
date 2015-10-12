var React             = require('react');
var nav               = require('../utilities/starshipNavigation.js');
var EditableLineItem  = require('./EditableLineItem.jsx');

var NavigationalControls = React.createClass({
  render: function() {
    return (
      <div className="navigational-controls">
        <ul>
          Warp:
          <EditableLineItem
            keyName="name"
            item={this.props.ship.speed}
            defaultValue="Full Stop"
            onEdit={this.updateSpeed}/>
        </ul>
        <button onClick={this.incrementSpeed.bind(this, 0.11)}>+</button>
        <button onClick={this.incrementSpeed.bind(this, -0.11)}>-</button>
        <button onClick={this.props.engageWarpDrive}>Engage</button>
      </div>
    );
  },

  updateSpeed: function(keyName, newValue) {
    var newSpeed = parseInt(newValue, 10);
    this.props.updateSpeed(newSpeed);
  },

  incrementSpeed: function(dSpeed) {
    var currentSpeed = this.props.ship.speed;
    var newSpeed = Math.floor((currentSpeed + dSpeed) * 10) / 10;
    this.props.updateSpeed(newSpeed);
  }
});

module.exports = NavigationalControls;
