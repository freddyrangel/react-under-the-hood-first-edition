var React = require('react');
var nav = require('../utilities/starshipNavigation.js');
var EditableElement = require('./EditableElement.jsx');

module.exports = React.createClass({

  displayName: "WarpDriveControls",

  render: function() {
    return (
      <div className="navigational-controls">
        <h2>Warp Drive</h2>
        <span>WARP:</span>
        <EditableElement value={this.props.speed} onEdit={this.updateSpeed}/>
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

  updateSpeed: function(newSpeed) {
    var newSpeed = parseFloat(newSpeed, 10);
    if (0 <= newSpeed && newSpeed < 10) {
      this.props.updateSpeed(newSpeed);
    }
  },

  incrementSpeed: function(dSpeed) {
    var currentSpeed = this.props.speed;
    var newSpeed = Math.floor(currentSpeed + dSpeed);
    if (0 <= newSpeed && newSpeed < 10) {
      this.props.updateSpeed(newSpeed);
    }
  }
});
