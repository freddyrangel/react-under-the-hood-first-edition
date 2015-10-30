module.exports = {
  data: function(ship) {
    // Heading is the direction in degrees
    var heading = this.heading(ship);
    return {
      imagePosition : this.imagePosition(ship, heading),
      heading: heading
    }
  },

  // Calculates the center of the ship image, and then adjusts the center of the
  // image to be at the supposed position of the ship. Otherwise, the image will
  // be off center. The trick is figuring out where the center of the image is
  // whe the image is rotated, and making sure you adjust correctly
  imagePosition: function(ship, heading) {
    var pos = ship.position;
    // Because of the way an image is drawn in SVG, the center of the image is
    // always 135 degrees from direction of travel. Then we need to convert this
    // to radians to perform trig functions
    var angleToCenter = (heading + 135) % 360;
    // Since the image is 20 by 20, using the Pythagorean theorem we know the 
    // length of the line from the center of the position and the center of
    // the image is Math.sqrt(200) or about 14. Then use simple trig to figure
    // out the x and y coordinates of the center of the image.
    var xOfImage = pos[0] + 14 * Math.sin(this.degreesToRads(angleToCenter));
    // Need to add 180 degrees because the Y axis is inverted in SVG
    var yOfImage = pos[1] + 14 * Math.cos(this.degreesToRads(angleToCenter + 180));
    // Above we figured out the center of image, but we need to adjust it to the
    // position of the ship.
    var adjustedX = pos[0] + (pos[0] - xOfImage);
    var adjustedY = pos[1] + (pos[1] - yOfImage);
    return [adjustedX, adjustedY]
  },

  // heading is direction in degrees
  heading: function(ship) {
    return Math.round(this.exactHeading(ship));
  },

  // Just like #heading but used internally for more precision
  exactHeading: function(ship) {
    var pos   = ship.position;
    var des   = ship.destination.position;
    // We need to use arctan to figure out the angle to face the ship
    // destination and then convert that from radians to degrees
    var angle = Math.atan2((des[0] - pos[0]), (pos[1] - des[1]));
    return (this.radsToDegrees(angle) + 360) % 360
  },

  // Gives next position on heading or slows to impulse and goes in standard
  // ording if testination reaching
  nextPositionToDestination: function(ship) {
    if (this.destinationReached(ship)) {
      return ship.destination.position
    } else {
      return this.nextPositionOnCurrentHeading(ship)
    }
  },

  // Next position at current speed and direction regardless of whether you
  // reached the destination or not
  nextPositionOnCurrentHeading: function(ship) {
    var heading = this.exactHeading(ship);
    var speed   = ship.speed * 0.5;
    var pos     = ship.position;
    var x       = pos[0] + speed * Math.sin(this.degreesToRads(heading));
    var y       = pos[1] + speed * Math.cos(this.degreesToRads(heading + 180)); // SVG Y axis is inverted
    return [x, y]
  },

  // Returns a boolean of whether you're close enough to the destination to just
  // go straight there rather than skip to next position on current heading
  destinationReached: function(ship) {
    var dest          = ship.destination.position;
    var pos           = ship.position;
    var nextPos       = this.nextPositionOnCurrentHeading(ship);
    var distToDest    = Math.sqrt(
      Math.pow((dest[0] - pos[0]), 2) + Math.pow((dest[1] - pos[1]), 2)
    );
    var distToNextPos = Math.sqrt(
      Math.pow(nextPos[0] - pos[0], 2) + Math.pow(nextPos[1] - pos[1], 2)
    );
    return distToDest < distToNextPos
  },

  radsToDegrees: function(radians) {
    return radians * (180 / Math.PI)
  },

  degreesToRads: function(degrees) {
    return degrees * (Math.PI / 180)
  }
};
