import 'aframe';

const AFRAME = window.AFRAME;

AFRAME.registerPrimitive('a-media-circle', {
  defaultComponents: {
    'media-circle': {}
  }
});

AFRAME.registerComponent('media-circle', {
  schema: {
    'name': {type: 'string', default: ''}
  },

  init: function() {
    let el = this.el;

    el.setAttribute('geometry', {
      primitive: 'circle',
      radius: 1
    });
    el.setAttribute('material', {
      color: '#180647',
      shader: 'flat'
    });

    const numMedia = 3;//this.loadMedia();

    const angle = 2 * Math.PI / numMedia;
    for(let i = 0; i < numMedia; i++) {
      let button = document.createElement('a-plane');
      button.object3D.scale.set(0.3, 0.3, 0.3);
      button.setAttribute('material', {
        src: '#icon_audio',
        color: 'white',
        shader: 'flat'
      });
    
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

  loadMedia: function() {
    const mediaDirectory = '../../public/media';
    
    let numFiles = 0;


    return numFiles;
  }
});