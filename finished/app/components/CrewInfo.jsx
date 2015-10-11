var React            = require('react');
var EditableLineItem = require('./EditableLineItem.jsx');

var CrewInfo = React.createClass({
  render: function() {
    var crew = this.props.crew;
    return (
      <ul className="crew-info">
        {this.renderLineItem('captain', crew.captain, 'Set Captain Name')}
        {this.renderLineItem('firstOfficer', crew.firstOfficer, 'Set First Officer')}
        {this.renderLineItem('chiefEngineer', crew.chiefEngineer, 'Set Chief Engineer')}
        {this.renderLineItem('tacticalOfficer', crew.tacticalOfficer, 'Set Tactical Officer')}
        {this.renderLineItem('helmsman', crew.helmsman, 'Set Helmsman')}
      </ul>
    );
  },

  renderLineItem: function(keyName, item, defaultValue) {
    return (
      <EditableLineItem
          keyName={keyName}
          item={item}
          defaultValue={defaultValue}
          onEdit={this.updateCrew}/>
    );
  },

  updateCrew: function(key, newValue) {
    var crew = this.props.crew;
    crew[key] = newValue
    this.props.updateCrew(crew);
  }
});

module.exports = CrewInfo;
