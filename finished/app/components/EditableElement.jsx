var React = require('react');

module.exports = React.createClass({

  displayName: "EditableElement",

  propTypes: {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    onEdit: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      value: 'Enter New Value'
    }
  },

  getInitialState: function() {
    return { editing: false };
  },

  render: function() {
    var isEditing = this.state.editing;
    return isEditing ? this.renderInputField() : this.renderParagraph()
  },

  renderInputField: function() {
    return (
      <input type="text"
        autoFocus="true"
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} />
    );
  },

  renderParagraph: function() {
    return <p onClick={this.enterEditState}>{this.props.value}</p>
  },

  enterEditState: function() {
    this.setState({editing: true});
  },

  checkEnter: function(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  },

  finishEdit: function(e) {
    var newValue = e.target.value;
    this.props.onEdit(newValue);
    this.setState({editing: false});
  }
});
