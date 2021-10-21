import 'aframe';
import React from 'react';

import icon_audio from './../assets/icons/audios_icon.svg'
import icon_video from './../assets/icons/videos_icon.svg'
import icon_image from './../assets/icons/images_icon.svg'
import icon_story from './../assets/icons/stories_icon.svg'

export default class MediaCircle extends React.Component {
  static Assets = [
    <img id='icon_audio' src={icon_audio} alt=''></img>,
    <img id='icon_video' src={icon_video} alt=''></img>,
    <img id='icon_image' src={icon_image} alt=''></img>,
    <img id='icon_story' src={icon_story} alt=''></img>
  ];

  render() {
    return (
      <a-media-circle {...this.props}></a-media-circle>
    );
  }
}

const AFRAME = window.AFRAME;

AFRAME.registerPrimitive('a-media-circle', {
  defaultComponents: {
    'media-circle': {}
  },
  
  mappings: {
    'name': 'media-circle.name',
    'btnsrc': 'media-circle.btnsrc'
  }
});

AFRAME.registerComponent('media-circle', {
  schema: {
    'name': {type: 'string', default: ''},
    'btnsrc': {type: 'string', default: 'DEFAULT'}
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
      button.object3D.scale.set(0.5, 0.5, 0.5);

      button.setAttribute('material', {
        src: this.data['btnsrc'],
        color: 'white',
        shader: 'flat',
        transparent: true
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
  }
});