var starshipNavigation = {
  data: function(ship) {
    var rotationAngle = this.rotationAngle(ship);
    return {
      imagePosition : this.imagePosition(ship, rotationAngle),
      rotationAngle: rotationAngle
    }
  },

  // Calculates the center of the ship image, and then adjusts the center of the
  // image to be at the supposed position of the ship. Otherwise, the image will
  // be off center. The trick is figuring out where the center of the image is
  // whe the image is rotated, and making sure you adjust correctly
  imagePosition: function(ship, rotationAngle) {
    var pos = ship.position;
    var angleToCenter = (rotationAngle + 135) % 360;
    var xOfImage = pos[0] + 14 * Math.sin(angleToCenter * (Math.PI / 180));
    var yOfImage = pos[1] + 14 * Math.cos((angleToCenter + 180) * (Math.PI / 180));
    var adjustedX = pos[0] + (pos[0] - xOfImage);
    var adjustedY = pos[1] + (pos[1] - yOfImage);
    return [adjustedX, adjustedY]
  },

  rotationAngle: function(ship) {
    var pos = ship.position;
    var des = ship.destination;
    return Math.atan2((des[0] - pos[0]), (pos[1] - des[1])) * 180 / Math.PI
  }
};

module.exports = starshipNavigation;
