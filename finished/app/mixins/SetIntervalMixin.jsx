module.exports = {
  componentWillMount: function() {
    this.intervals = [];
  },

  componentWillUnmount: function() {
    this.clearIntervals();
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  clearIntervals: function() {
    this.intervals.forEach(clearInterval);
    this.intervals = [];
  }
};
