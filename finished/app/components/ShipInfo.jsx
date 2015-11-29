var React            = require('react');
var EditableElement  = require('./EditableElement.jsx');
var PureRenderMixin = require('react-addons-pure-render-mixin');

module.exports = React.createClass({

  mixins: [PureRenderMixin],

  displayName: "ShipInfo",

  render: function() {
    return (
      <div className="ship-info">
        <h2>Ship Info</h2>
        {this.renderElements(this.props.info)}
      </div>
    );
  },

  renderElements: function(info) {
    return Object.keys(info).map(function(key, index) {
      return (
        <EditableElement
          value={this.getValue(key)}
          key={index}
          onEdit={this.updateInfo.bind(this, key)} />
      );
    }.bind(this));
  },

  updateInfo: function(key, newValue) {
    var info = Object.assign({}, this.props.info);
    info[key] = newValue;
    this.props.updateShipInfo(info);
  },

  getValue: function(key) {
    return this.props.info[key] || this.keyToValue(key);
  },

  keyToValue: function(key) {
    // insert a space before all caps and upper case the first character
    return key.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str){ return str.toUpperCase(); })
  }
});
