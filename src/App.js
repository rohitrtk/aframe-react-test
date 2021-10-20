import 'aframe'
import 'aframe-environment-component'
import { Entity, Scene } from 'aframe-react'

import { useState } from 'react'

import './scripts/ColourClicker'
import './scripts/MediaCircle'

import icon_audio from './assets/icons/audios_icon.svg'
import icon_image from './assets/icons/images_icon.svg'
import icon_video from './assets/icons/videos_icon.svg'
import icon_story from './assets/icons/stories_icon.svg'

const App = () => {
  const Assets = [
    <img id='icon_audio' src={icon_audio} alt=''></img>,
    <img id='icon_image' src={icon_image} alt=''></img>,
    <img id='icon_video' src={icon_video} alt=''></img>,
    <img id='icon_story' src={icon_story} alt=''></img>
  ];  
  
  const [position, setPosition] = useState({
    x: 1,
    y: 1,
    z: 1
  });

  return (
    <div>
      <Scene stats>
        <a-assets timeout='3000'>
          <img id='icon_audio' src='icons/audios_icon.svg' alt='' crossOrigin='true'></img>
        </a-assets>

        <Entity environment='preset: contact;'/>

        <Entity primitive='a-camera' look-controls='enabled: true;' active='true' cursor='rayOrigin: mouse;' raycaster='objects: .clickable'></Entity>
        <Entity primitive='a-plane' position={{...position}} colour-clicker></Entity>

        <Entity primitive='a-media-circle' position='-1 1 -1'></Entity>
      </Scene>
    </div>
  );
}

export default App;
