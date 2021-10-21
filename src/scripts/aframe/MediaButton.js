import 'aframe'

const AFRAME = window.AFRAME;

// Media button type dictionary
const MBTD = {
  video: '#icon_video',
  audio: '#icon_audio',
  story: '#icon_story',
  gallery: '#icon_gallery'
};

export default MBTD;

AFRAME.registerPrimitive('a-media-button', {
  defaultComponents: {
    'geometry'    : { primitive: 'plane'},
    'material'    : { color: 'white', shader: 'flat', transparent: true},
    'media-button': {}
  },

  mappings: {
    'type' : 'media-button.type'
  }
});

AFRAME.registerComponent('media-button', {
  schema: {
    'type' : { type:'string',  default:'' }
  },

  update: function() {
    const data = this.data;

    let el = this.el;
    el.setAttribute('material', {
      src: MBTD[data.type]
    });
    console.log('Set type to ' + data.type);
  },

  events: {
    click: function(event) {

    }
  }
});