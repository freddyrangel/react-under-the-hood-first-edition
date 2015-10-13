var React             = require('react');
var nav               = require('../utilities/starshipNavigation.js');
var EditableElement   = require('./EditableElement.jsx');

var WarpDriveControls = React.createClass({
  render: function() {
    return (
      <div className="navigational-controls">
        <h2>Warp Drive</h2>
        <span>WARP:</span>
        <EditableElement
          keyName="name"
          item={this.props.ship.speed}
          defaultValue="Full Stop"
          onEdit={this.updateSpeed}/>
        <div className="arrow-controls">
          <button onClick={this.incrementSpeed.bind(this, 1)}>&#11014;</button>
          <button onClick={this.incrementSpeed.bind(this, -1)}>&#11015;</button>
        </div>
        <div className="engage">
          <button onClick={this.props.engageWarpDrive}>Engage</button>
        </div>
      </div>
    );
  },

  updateSpeed: function(keyName, newValue) {
    var newSpeed = parseInt(newValue, 10);
    this.props.updateSpeed(newSpeed);
  },

  incrementSpeed: function(dSpeed) {
    var currentSpeed = this.props.ship.speed;
    var newSpeed = Math.floor(currentSpeed + dSpeed);
    if (0 <= newSpeed && newSpeed < 10) {
      this.props.updateSpeed(newSpeed);
    }
  }
});

module.exports = WarpDriveControls;
