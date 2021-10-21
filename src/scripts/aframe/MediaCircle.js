import 'aframe';

import './../aframe/MediaButton'

const AFRAME = window.AFRAME;

AFRAME.registerPrimitive('a-media-circle', {
  defaultComponents: {
    'media-circle': {}
  },
  
  mappings: {
    'name': 'media-circle.name',
  }
});

AFRAME.registerComponent('media-circle', {
  schema: {
    'name': {type: 'string', default: ''},
  },
  
  init: async function() {
    let el = this.el;
    
    el.setAttribute('geometry', {
      primitive: 'circle',
      radius: 1
    });
    el.setAttribute('material', {
      color: '#180647',
      shader: 'flat'
    });
    
    // Temporary media loader?
    const gallery = document.getElementsByTagName('img');
    const video   = document.getElementsByTagName('mp4');
    const audio   = document.getElementsByTagName('mp3');
    const stories = document.getElementsByTagName('a-asset-item');
    const media   = [...gallery, ...video, ...audio, ...stories];

    console.log(media);

    const numMedia = 3;//this.loadMedia();

    const angle = 2 * Math.PI / numMedia;
    for(let i = 0; i < numMedia; i++) {
      let button = document.createElement('a-media-button');
      button.object3D.scale.set(0.5, 0.5, 0.5);
      button.setAttribute('type', 'audio');

      const x = Math.cos(angle * i);
      const y = Math.sin(angle * i);
      const f = 0.6;
      const g = 0.985;
      
      button.object3D.position.set(f * x, f * y, 0.001);
      button.classList.add('clickable');
      el.append(button);
      
      let line = document.createElement('a-entity');
      line.object3D.rotation.set(0, 0, 1.5 * angle);
      line.setAttribute('line', {
        start: {x: 0, y: 0, z: 0},
        end:   {x: g * x, y: g * y, z: 0.001},
        color: 'white'
      });
      el.appendChild(line);
    }
    
    let outline = document.createElement('a-ring');
    outline.setAttribute('material', {
      color: 'white',
      shader: 'flat'
    });
    outline.setAttribute('radius-inner', '0.99');
    outline.setAttribute('radius-outer', '1.01');
    el.appendChild(outline);
  },

  events: {
    click: function() {
      console.log('CLICK');
    }
  }
});