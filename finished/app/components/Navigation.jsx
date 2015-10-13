var React                = require('react');
var NavigationDashboard  = require('./NavigationDashboard.jsx');
var WarpDriveControls    = require('./WarpDriveControls.jsx');
var CourseControl        = require('./CourseControl.jsx');

var Navigation = React.createClass({
  render: function() {
    var ship = this.props.ship
    return (
      <div className="navigation">
        <NavigationDashboard ship={ship}/>
        <CourseControl
          stars={this.props.stars}
          ship={ship}
          updateDestination={this.props.updateDestination}/>
        <WarpDriveControls
          ship={ship}
          updateSpeed={this.props.updateSpeed}
          engageWarpDrive={this.props.engageWarpDrive}/>
      </div>
    );
  }
});

module.exports = Navigation;
