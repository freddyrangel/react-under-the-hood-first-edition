var React                = require('react');
var NavigationDashboard  = require('./NavigationDashboard.jsx');
var NavigationalControls = require('./NavigationalControls.jsx');

var Navigation = React.createClass({
  render: function() {
    var ship = this.props.ship
    return (
      <div>
        <NavigationDashboard ship={ship}/>
        <NavigationalControls
          ship={ship}
          updateSpeed={this.props.updateSpeed}
          engageWarpDrive={this.props.engageWarpDrive}/>
      </div>
    );
  }
});

module.exports = Navigation;
