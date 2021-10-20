import 'aframe'

const AFRAME = window.AFRAME;

AFRAME.registerComponent('colour-clicker', {
  init: function() {
    this.el.classList.add('clickable');
    this.el.setAttribute('shader', 'flat');
    this.changeColour();
  },

  changeColour: function() {
    const color = this.getRandomColour();
    console.log(`Setting colour to ${color}`);
    this.el.setAttribute('color', color);
  },

  getRandomColour: function() {
    const colours = ['red', 'blue', 'green', 'orange', 'yellow'];
    return colours[Math.floor(Math.random() * colours.length)];
  },

  events: {
    click: function() {
      this.changeColour();
    }
  }
});