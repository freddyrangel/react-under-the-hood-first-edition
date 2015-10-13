var React            = require('react');
var EditableElement  = require('./EditableElement.jsx');

var CrewInfo = React.createClass({
  render: function() {
    var crew = this.props.crew;
    return (
      <div className="crew-info">
        {this.renderElement('captain', crew.captain, 'Captain Name')}
        {this.renderElement('firstOfficer', crew.firstOfficer, 'First Officer')}
        {this.renderElement('chiefEngineer', crew.chiefEngineer, 'Chief Engineer')}
        {this.renderElement('tacticalOfficer', crew.tacticalOfficer, 'Tactical Officer')}
        {this.renderElement('helmsman', crew.helmsman, 'Helmsman')}
      </div>
    );
  },

  renderElement: function(keyName, item, defaultValue) {
    return (
      <EditableElement
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
