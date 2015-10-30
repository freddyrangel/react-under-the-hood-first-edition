var React = require('react');
var ShipInfo = require('./ShipInfo.jsx');
var NavigationDashboard = require('./NavigationDashboard.jsx');
var WarpDriveControls = require('./WarpDriveControls.jsx');
var CourseControl = require('./CourseControl.jsx');

module.exports = React.createClass({

  displayName: "HelmControl",

  render: function() {
    var props = this.props;
    var ship = props.ship;
    var starData = this.props.starData;
    return (
      <div className="helm">
        <div id="helm-header">
          <h1>Helm Control</h1>
        </div>
        <ShipInfo
          info={ship.info}
          updateShipInfo={props.updateShipInfo} />
        <NavigationDashboard ship={ship}/>
        <CourseControl
          starData={props.starData}
          updateDestination={props.updateDestination}/>
        <WarpDriveControls
          speed={ship.speed}
          updateSpeed={props.updateSpeed}
          engageWarpDrive={props.engageWarpDrive}/>
      </div>
    );
  }
});
