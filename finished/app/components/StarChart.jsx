var React    = require('react');
var Stars    = require('./Stars.jsx');
var StarshipRenderer = require('./StarshipRenderer.jsx');

module.exports = React.createClass({

  displayName: "StarChart",

  render: function() {
    var props = this.props;
    return (
      <div className="star-chart">
        <svg width="1000" height="600">
          <Stars starData={props.starData}
            updateDestination={this.props.updateDestination}/>
          <StarshipRenderer ship={props.ship}/>
        </svg>
      </div>
    );
  }
});
